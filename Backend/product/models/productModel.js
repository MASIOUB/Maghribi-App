const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        price: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Post', postSchema);