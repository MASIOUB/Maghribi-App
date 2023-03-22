const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['admin', 'customer'],
            default: 'customer',
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema);