const mongoose = require('mongoose')
const { default: postcss } = require('postcss')



delete mongoose.connection.models['User'];

const userSchema = mongoose.Schema({
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
    img: {
        type: String,
        default: "https://randomuser.me/api/portraits/lego/2.jpg"
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

if (!mongoose.models['User']) {
    module.exports = mongoose.model('User', userSchema);
} else {
    module.exports = mongoose.models['User']
}

//module.exports = mongoose.model('User') || mongoose.model('User', userSchema);
