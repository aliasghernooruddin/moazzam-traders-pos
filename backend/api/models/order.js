var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const itemSchema = mongoose.Schema(
    {
        item: { type: Schema.Types.ObjectId, required: true, ref: "Item" },
        itemQty: { type: Number, required: true },
        itemCost: { type: Number, required: true }
    },
    { strict: true }
);

var orderSchema = new mongoose.Schema(
    {
        supplier: { type: Schema.Types.ObjectId, required: true, ref: "Supplier" },
        warehouse: { type: Schema.Types.ObjectId, required: true, ref: "Warehouse" },
        items: { type: [itemSchema], required: true },
        total: { type: Number, required: true },
        deliveryDate: { type: Date },
        orderDate: { type: Date, default: Date.now() },
        delivered: { type: Boolean, default: false },
        advanced: { type: Number, default: 0 },
    },
    { strict: true }
);

mongoose.model('Order', orderSchema, 'orders');
