const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimage%2Fpresent-drawing-21.png&f=1&nofb=1&ipt=91763ab281d67ea80405f4ce215ba131a5033a9f4ac291fa51d77ec953913a87&ipo=images'
    },
    price: {
        type: Number,
        min: 0
    },
    recipient: {
        type: String,
        required: true
    },
    description: String
});

const Present = mongoose.model('Present', presentSchema);
module.exports = Present;