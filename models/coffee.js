const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CoffeeSchema = new Schema({
    name: String,
    price: Number,
    imageUrl: String
});

exports.CoffeeModel = mongoose.model('Coffee', CoffeeSchema);