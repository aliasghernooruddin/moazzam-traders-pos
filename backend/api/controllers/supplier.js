var mongoose = require('mongoose');
var Supplier = mongoose.model('Supplier');


module.exports.addSupplier = function (req, res) {

    var supplier = new Supplier(req.body);

    supplier.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, id: data._id, message: "Supplier Added Successfully!" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Supplier already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
};

module.exports.getSuppliers = function (req, res) {
    Supplier.find({ disabled: false }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getSupplier = function (req, res) {
    Supplier.findById(req.params['id']).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getSuppliersDropdown = function (req, res) {
    Supplier.find({ disabled: false }, { _id: 1, name: 1 }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.deleteSupplier = function (req, res) {
    Supplier.updateOne({ _id: req.params['id'] }, { disabled: true }).exec(function (err, data) {
        res.status(200).json({ status: true, message: data.nModified + " supplier deleted" });
    });
}

module.exports.updateSupplier = function (req, res) {
    let obj = req.body
    let filter = { _id: obj['id'] }
    delete obj['id']
    Supplier.updateOne(filter, obj).exec(function (err, data) {
        if (data) {
            return res.status(200).json({ status: true, message: data.nModified + " item modified" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Supplier already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
}
