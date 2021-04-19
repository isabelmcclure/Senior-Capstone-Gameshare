const mongoose = require('mongoose')
const { default: postcss } = require('postcss')

const boardGameSchema = mongoose.Schema({
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
    images: [
        {
            type: String,
            required: [true]
        }
    ],
    price: {
        type: Number,
        required: [true]
    },
    genre: {
        type: String,
        required: [true]
    },
    numPlayers: {
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
    },
    location: {
        type: String,
        required: [true]
    },
    lat: {
        type: Number,
        required: [true]
    },
    lng: {
        type: Number,
        requred: [true]
    },
    available: {
        type: Boolean,
        required: [true],
        default: true
    },
},
    {
        timestamps: true,
    }

)

if (!mongoose.models['boardgames']) {
    module.exports = mongoose.model('boardgames', boardGameSchema);
} else {
    module.exports = mongoose.models['boardgames']
}

//module.exports = mongoose.models('boardgames') || mongoose.model('boardgames', boardGameSchema);
