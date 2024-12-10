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
}

// [get] /order/detail/:id
module.exports.getOrder = async (req, res) => {
    try {
        const orderDetail = await Order.findOne({ _id: req.params.id });

        res.status(200).json(orderDetail);
    } catch (error) {
        res.status(500).json(error);
    }
}

// [post] /order/create/:user_id
module.exports.createOrder = async (req, res) => {
    try {
        const token = req.params.user_id;
        const checkout = await Cart.findOne({ user_id: token });
        const user = await User.findOne({ token : token}).select("address");

        let totalAmount = 0;
        const orderProducts = await Promise.all(checkout.products.map(async (product) => {
            const price = (await getInfoProduct(product.product_id)).price;
            const name = (await getInfoProduct(product.product_id)).name;
            totalAmount += price * product.quanlity;

            return {
                product_id: product.product_id,
                name,
                quanlity: product.quanlity,
                price,
            };
        }));

        // Tạo đơn hàng mới
        const newOrder = new Order({
            user_id: checkout.user_id,
            products: orderProducts,
            total_amount: totalAmount,
            address: user.address,
        });

        // Xoá tất cả sản phẩm khỏi giỏ hàng
        await Cart.findOneAndDelete({ user_id: token });

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

    return {price: product.price, name: product.name};
};
