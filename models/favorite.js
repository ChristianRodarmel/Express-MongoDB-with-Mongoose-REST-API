const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.objectId,
        ref: 'User'
    },
    campsites: [{
        type: Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
})

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;