var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
        parent: { type: String, required: true },
        category: { type: String, required: true },
        disabled: { type: Boolean, default: false }
    },
    { timestamps: true },
    { strict: true },
);


mongoose.model('Category', categorySchema, 'categories');

// // Categories and Sub Categories
// Pipes,                  Fittings,                               Solutions
// PVC, CPVC, GRC          elbow, tee, socket, screws, valves      Hot, Cold  
