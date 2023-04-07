const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    images: [
        { img: { type: String } }
    ],

}, { timestamps: true });


module.exports = mongoose.model('Test', testSchema);