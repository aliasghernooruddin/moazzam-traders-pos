var mongoose = require('mongoose');
var Item = mongoose.model('Item');


module.exports.addItem = function (req, res) {

    var item = new Item(req.body);

    item.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, id: data._id, message: "Item Added Successfully!" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Item already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
};

module.exports.getItems = function (req, res) {
    Item.find({ disabled: false }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getItem = function (req, res) {
    Item.findById(req.params['id']).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getItemsDropdown = function (req, res) {
    Item.find({ disabled: false }, { _id: 1, name: 1 }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.deleteItem = function (req, res) {
    Item.updateOne({ _id: req.params['id'] }, { disabled: true }).exec(function (err, data) {
        res.status(200).json({ status: true, message: data.nModified + " item deleted" });
    });
}

module.exports.updateItem = function (req, res) {
    let obj = req.body
    let filter = { _id: obj['id'] }
    delete obj['id']
    Item.updateOne(filter, obj).exec(function (err, data) {
        if (data) {
            return res.status(200).json({ status: true, message: data.nModified + " item modified" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Item already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
}
