const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minLength: [3, 'tilte must be at least 3 or more characters']
    },
    year: {
        type: Number,
        required: [true, 'number is required'],
    },
    rating: {
        type: Number
    },
    oscarNomination: {
        type: Boolean
    },
    genre: {
        type: String,
        required: [true, 'genre is required'],
    }  
},

{timestamps:true},

);

module.exports = mongoose.model('Movie', movieSchema);