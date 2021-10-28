var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');


module.exports.addCustomer = function (req, res) {

    var customer = new Customer(req.body);

    customer.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, id: data._id, message: "Customer Added Successfully!" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Customer already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
};

module.exports.getCustomers = function (req, res) {
    Customer.find({ disabled: false }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getCustomer = function (req, res) {
    Customer.findById(req.params['id']).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getCustomersDropdown = function (req, res) {
    Customer.find({ disabled: false }, { _id: 1, name: 1 }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.deleteCustomer = function (req, res) {
    Customer.updateOne({ _id: req.params['id'] }, { disabled: true }).exec(function (err, data) {
        res.status(200).json({ status: true, message: data.nModified + " customer deleted" });
    });
}

module.exports.updateCustomer = function (req, res) {
    let obj = req.body
    let filter = { _id: obj['id'] }
    delete obj['id']
    Customer.updateOne(filter, obj).exec(function (err, data) {
        if (data) {
            return res.status(200).json({ status: true, message: data.nModified + " item modified" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Customer already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
}
