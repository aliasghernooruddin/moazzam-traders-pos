var mongoose = require('mongoose');

var supplierSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
        email: { type: String, required: true },
        mobile: { type: String, required: true },
        address: { type: String, required: true },
        disabled: { type: Boolean, default: false },
        city: String,
        country: String,
    },
    { timestamps: true },
    { strict: true }
);


mongoose.model('Supplier', supplierSchema, 'suppliers');
