const mongoose = require('mongoose')
const { default: postcss } = require('postcss')

const imageSchema = new mongoose.Schema({
    url:
    {
        type: String,
        required: [true, 'Please add a url'],
        trim: true,
        maxlength: [200, 'Url cannot be more than 200 characters']
    },
    id: {
        type: String,
        required: [true, 'Please add description'],
        trim: true
    },
},
    {
        timestamps: true,
    }

)

module.exports = mongoose.models.Image || mongoose.model('Image', imageSchema);