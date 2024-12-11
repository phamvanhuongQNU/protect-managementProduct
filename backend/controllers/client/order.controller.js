const Cart = require("../../models/cart.model");
const Order = require("../../models/order.model");
const Product = require("../../models/product.model");
const User = require("../../models/user.model");

// [get] /order/:user_id
module.exports.getOrders = async (req, res) => {
    try {
        const token = req.params.user_id;
        const order = await Order.find({ user_id: token });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
};

// [get] /order/detail/:id
module.exports.getOrder = async (req, res) => {
    try {
        const orderDetail = await Order.findOne({ _id: req.params.id });

        res.status(200).json(orderDetail);
    } catch (error) {
        res.status(500).json(error);
    }
};

// [post] /order/create/:user_id
module.exports.createOrder = async (req, res) => {
    try {
        const token = req.params.user_id;
        const { selectedProducts } = req.body;
        const checkout = await Cart.findOne({ user_id: token });
        const user = await User.findOne({ token: token }).select("address");

        let totalAmount = 0;
        const orderProducts = await Promise.all(
            selectedProducts.map(async (product) => {
                const productInfo = await getInfoProduct(product._id);

                totalAmount += productInfo.price * product.quanlity;

                return {
                    product_id: product._id,
                    name: productInfo.name,
                    quanlity: product.quanlity,
                    price: productInfo.price,
                };
            })
        );

        // Tạo đơn hàng mới
        const newOrder = new Order({
            user_id: checkout.user_id,
            products: orderProducts,
            total_amount: totalAmount,
            address: user.address,
        });

        // Xoá tất cả sản phẩm khỏi giỏ hàng
        checkout.products = checkout.products.filter(
            (product) =>
                !selectedProducts.some(
                    (selected) =>
                        selected._id === product.product_id.toString()
                )
        );
        if (checkout.products.length === 0) {
            await Cart.findOneAndDelete({ user_id: token });
        } else {
            await checkout.save();
        }

        const order = await newOrder.save();
        res.status(201).json({ data: order });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getInfoProduct = async (id_product) => {
    const product = await Product.findOne({
        _id: id_product,
        deleted: false,
    }).select("price name");

    return product ? { price: product.price, name: product.name } : null;
};
