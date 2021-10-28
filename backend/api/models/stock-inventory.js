var mongoose = require('mongoose');

var stockInventorySchema = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
        size: { type: String, required: true },
        description: { type: String },
        quantity: { type: Number, default: 0 },
        quantityBreakdown: { type: Array, default: [] },
        disabled: { type: Boolean, default: false },
        path: { type: String, required: true },
        sellPrice: { type: Number, default: 0 }
    },
    { timestamps: true },
    { strict: true }
);


mongoose.model('StockInventory', stockInventorySchema, 'stockInventory');
