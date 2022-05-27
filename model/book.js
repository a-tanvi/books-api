const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'must provided'],
        trim: true,
        maxlength : [50, ' book name cannot be more than 20 letters'],
        
    }
    ,
    author : {
        type : String,
        required : [true, 'must provided'],
        trim: true,
        maxlength : [20, 'author name cannot be more than 20 letters']
    },

    rating : {
        type : Number,
        max : 5,
        default: 0
    },

    ratersNumber : {
        type : Number,
        default : 0
    },

    raters : {
        type : Array,
        default: []
    }
 })
 
 module.exports = mongoose.model('Book', BookSchema)