var mongoose = require('mongoose');
var Categories = mongoose.model('Category');


module.exports.addCategory = function (req, res) {

    var categories = new Categories(req.body);

    categories.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, id: data._id, message: "Category Added Successfully!" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Category already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
};

module.exports.getCategories = function (req, res) {
    Categories.find({ disabled: false }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getCategoriesDropdown = function (req, res) {
    Categories.find({ disabled: false }, { _id: 1, name: 1 }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.deleteCategory = function (req, res) {
    Categories.updateOne({ _id: req.params['id'] }, { disabled: true }).exec(function (err, data) {
        res.status(200).json({ status: true, message: data.nModified + " categories deleted" });
    });
}

module.exports.updateCategory = function (req, res) {
    let obj = req.body
    let filter = { _id: obj['id'] }
    delete obj['id']
    Categories.updateOne(filter, obj).exec(function (err, data) {
        if (data) {
            return res.status(200).json({ status: true, message: data.nModified + " item modified" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ success: false, type: "entry_exists", message: 'Category already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });
}

module.exports.getCategoryById = function (req, res) {
    Categories.findById(req.params['id']).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getCategoriesByParent = function (req, res) {
    let parent = req.body['parent']
    Categories.find({ parent: parent }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}
