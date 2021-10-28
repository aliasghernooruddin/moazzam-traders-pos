var mongoose = require('mongoose');
var Warehouse = mongoose.model('Warehouse');
var WarehouseType = mongoose.model('WarehouseType');


// WareHouse Modules
module.exports.addWarehouse = function (req, res) {

    var warehouse = new Warehouse(req.body);

    warehouse.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, id: data._id, message: "Warehouse Added Successfully!" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Warehouse already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
};

module.exports.getWarehouses = function (req, res) {
    Warehouse.find({ disabled: false }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getWarehouse = function (req, res) {
    Warehouse.findById(req.params['id']).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getWarehousesDropdown = function (req, res) {
    Warehouse.find({ disabled: false }, { _id: 1, name: 1 }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.deleteWarehouse = function (req, res) {
    Warehouse.updateOne({ _id: req.params['id'] }, { disabled: true }).exec(function (err, data) {
        res.status(200).json({ status: true, message: data.nModified + " warehouse deleted" });
    });
}

module.exports.updateWarehouse = function (req, res) {
    let obj = req.body
    let filter = { _id: obj['id'] }
    delete obj['id']
    Warehouse.updateOne(filter, obj).exec(function (err, data) {
        if (data) {
            return res.status(200).json({ status: true, message: data.nModified + " item modified" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Warehouse already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
}


// WareHouse Type Modules
module.exports.addWarehouseType = function (req, res) {

    var warehouse = new WarehouseType(req.body);

    warehouse.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, id: data._id, message: "Warehouse Type Added Successfully!" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Warehouse Type already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
};

module.exports.getWarehouseTypesDropdown = function (req, res) {
    WarehouseType.find({}, { _id: 1, name: 1 }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}
