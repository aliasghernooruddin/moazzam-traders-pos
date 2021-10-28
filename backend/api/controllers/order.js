var mongoose = require('mongoose');
var Order = mongoose.model('Order');


module.exports.addOrder = function (req, res) {

    var order = new Order(req.body);

    order.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, id: data._id, message: "Order Added Successfully!" });
        }
        else {
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
};

module.exports.getOrders = function (req, res) {
    Order.find().populate({ path: 'supplier', select: 'name' }).populate({ path: 'warehouse', select: 'name' }).populate({ path: 'items.item', select: 'name' }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getOrder = function (req, res) {
    Order.findById(req.params['id']).populate({ path: 'supplier', select: 'name' }).populate({ path: 'warehouse', select: 'name' }).populate({ path: 'items.item', select: 'name' }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.deleteOrder = function (req, res) {
    let _id = req.params['id']
    Order.findOne({ _id, delivered: false }).remove().exec(function (err, data) {
        if (data.result.n == 0) {
            return res.status(400).json({ status: false, message: "Order Already Delivered" });
        }
        res.status(200).json({ status: true, message: data.result.n + " Order Deleted" });
    });
}

module.exports.updateOrder = function (req, res) {
    let obj = req.body
    let filter = { _id: obj['id'] }
    delete obj['id']
    Order.updateOne(filter, obj).exec(function (err, data) {
        if (data) {
            return res.status(200).json({ status: true, message: data.nModified + " item modified" });
        }
        else {
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
}

module.exports.deliverOrder = function (req, res) {
    let filter = { _id: req.params['id'] }

    Order.updateOne(filter, { delivered: true, deliveryDate: Date.now() }).exec(function (err, data) {
        return res.status(200).json({ status: true, message: data.nModified + " Order Marked as Delivered" });
    });
}
