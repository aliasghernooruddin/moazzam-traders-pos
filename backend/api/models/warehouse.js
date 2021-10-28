var mongoose = require('mongoose');

var warehouseSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
        type: { type: String, required: true },
        mobile: { type: String, required: true },
        address: { type: String, required: true },
        disabled: { type: Boolean, default: false },
        city: String,
        country: String,
    },
    { timestamps: true },
    { strict: true }
);

var warehouseTypesSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true }
    },
    { timestamps: true },
    { strict: true }
)

mongoose.model('WarehouseType', warehouseTypesSchema, 'warehouseTypes')
mongoose.model('Warehouse', warehouseSchema, 'warehouses');
