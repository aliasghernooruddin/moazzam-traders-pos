var mongoose = require('mongoose');
var Structure = mongoose.model('Structure');


module.exports.add = function (req, res) {

    var structure = new Structure(req.body);

    structure.save(function (err, data) {
        if (data) {
            res.status(200).json({ success: true, message: "Structure created Successfully!" });
        }
        else {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).json({ succes: false, type: "structure_exists", message: 'Structure already exist!' });
            }
            res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
        }
    });

};


module.exports.get = function (req, res) {
    Structure.find().exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}

module.exports.getDropdown = function (req, res) {
    Structure.find({}, { _id: 1, name: 1 }).exec(function (err, data) {
        res.status(200).json({ status: true, data });
    });
}