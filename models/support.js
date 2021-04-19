const mongoose = require('mongoose')
const { default: postcss } = require('postcss')

const supportSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    ownerID: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)

if(!mongoose.models['Support']){
    module.exports = mongoose.model('Support', supportSchema);
}else{
    module.exports = mongoose.models['Support']
}

//module.exports = mongoose.model('User') || mongoose.model('User', userSchema);