const { json } = require("body-parser");
const Cart = require("../../models/cart.model");
const Product = require('../../models/product.model');
// [Get] /cart/:user_id
module.exports.index = async (req, res) => {
    try{
        const token = req.params.user_id;
      
        const cart = await Cart.findOne({user_id : token});
        const products = cart.products;

        // Danh sách sản phẩm được hiển thị trong giỏ hàng
        const dataProduct = [];
        for (item of products){
            const data = await Product.findOne({_id : item.product_id,deleted : false}).select("name price discount thumbnail stock_quantity")
            const newData = {...data};
            newData._doc.quanlity= item.quanlity
            dataProduct.push(newData._doc)
        }
        
        res.status(200).json({
            data : dataProduct
        })
    }
    catch(error){
        res.status(500).json(error)
    }
};

// [POST] /cart/addProduct
module.exports.addProduct = async (req, res) => {
  try {
    const token = req.body.token;
    const IdProduct = req.body.idProduct;
    let quanlity = 1;
    // Nếu người dùng chưa có giở hàng
    const existCart = await Cart.findOne({ user_id: token });

    if (req.body.quanlity) {
      quanlity = req.body.quanlity;
    }

    if (!existCart) {
      const newCart = new Cart({
        user_id: token,
        products: [
          {
            product_id: IdProduct,
            quanlity: quanlity,
          },
        ],
      });
      
      data = await newCart.save();
      res.status(200).json({ message: "Thêm giỏ hàng thành công", data: data });
      return

    }

    // Nếu đã có giỏ hàng
    const products = existCart.products;
    const productItem = products.find((item) => item.product_id === IdProduct);

    // Nếu chưa có sản phẩm trong giỏ hàng
    if (productItem) {
      productItem.quanlity = productItem.quanlity + parseInt(quanlity);

      await Cart.updateOne({user_id : token},existCart);
      res.status(200).json(existCart);
    }
    // Nếu đã có sản phẩm trong giỏ hàng
    else {
      products.push({
        product_id: IdProduct,
        quanlity: quanlity,
      });
      await Cart.updateOne({user_id : token},existCart);

      res.status(200).json(existCart);
    }
  } catch (error) {
    res.status(500).json(error)
  }
};

// [post] /cart/:user_id/:product_id/:quanlity
module.exports.changeQuanlity = async (req,res)=>{
  try{
      const token = req.params.user_id;
      const product_id = req.params.product_id;
      const quanlity  = req.params.quanlity;

      const data = await Cart.findOne({user_id : token});

      const product = data.products.find(item => item.product_id === product_id)
      if (product){
        // switch (changeQuanlity) {
        //   case "increase":{
        //       product.quanlity += 1
        //     break;
        //   }
        //   case "decrease":{
        //     product.quanlity -= 1
        //   break;
        // } 
        //   default:
        //     break;
        // }
        product.quanlity = quanlity
      }
      await Cart.updateOne({user_id :token},data)
      res.status(200).json({
        data : data,
        
      })

  }
  catch(error){
    res.status(500).json(error)
  }
}

// [delete] /cart/:user_id/:product_id
module.exports.deletedProductCart = async (req, res) => {
  try { 
      const token = req.params.user_id;
      const product_id = req.params.product_id;

      const cart = await Cart.findOne({ user_id: token });
      if (!cart) {
          return res.status(404).json({ message: "Cart not found" });
      }  
      console.log(product_id);
      const deleteProduct = await Cart.findOneAndUpdate(
          { user_id: token },
          { $pull: { products: { product_id: product_id } } },
          { new: true }
      );

      res.status.json(deleteProduct);
  } catch (error) {
    res.status(500).json(error);
  }
}