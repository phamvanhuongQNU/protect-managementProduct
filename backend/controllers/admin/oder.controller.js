
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
