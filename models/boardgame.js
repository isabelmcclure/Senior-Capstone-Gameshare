const mongoose = require('mongoose')
const { default: postcss } = require('postcss')

const boardGameSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [30, 'Title cannot be more than 30 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add description'],
        trim: true
    },
    quality: {
        type: Number,
        required: [true],
        min: 1,
        max: 5,
    },
    img: {
        type: String,
        required: [true]
    },
    price: {
        type: Number,
        required: [true]
    },
    postedAt: {
        type: Date,
        default: Date.now,
        required: [true]
    },
    ownerID: {
        type: String,
        required: [true]
    }
},
    {
        timestamps: true,
    }

)

module.exports = mongoose.models.Boardgame || mongoose.model('Boardgame', boardGameSchema);