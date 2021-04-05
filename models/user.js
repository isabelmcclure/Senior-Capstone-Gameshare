const mongoose = require('mongoose')
const { default: postcss } = require('postcss')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        index: true,
    },
    username: {
        type: String,
        unique: true,
    },
    location: {
        type: String,
        default: "N/A",
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5,
        required: true
    },
    boardgames: [
        {
            boardGameID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'boardgame'
            }
        }
    ]
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User') || mongoose.model('User', userSchema);