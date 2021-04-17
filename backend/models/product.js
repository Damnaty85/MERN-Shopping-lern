const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    currency: {type: String, required: true},
    price: {type: Number, required: true},
    sizes: [{type: String, required: true}],
    votes: {type: String, required: true},
    moreImage: [{type: String, required: true}],
    countInStock: [{type: Number, required: true}],
    category: {name: String, value: String},
    properties: {
        brand: {name: String, value: String},
        style: {name: String, value: String},
        color: {name: String, value: String},
        pattern: {name: String, value: String},
        length: {name: String, value: String},
        season: {name: String, value: String},
        sheer: {name: String, value: String},
        material: {name: String, value: String},
        fabric:	{name: String, value: String},
        patternType: {name: String, value: String},
        details: {name: String, value: String},
        waistLine: {name: String, value: String},
        neckline: {name: String, value: String},
        sleeveLength: {name: String, value: String},
        sleeveType: {name: String, value: String},
        fitType: {name: String, value: String},
        braType: {name: String, value: String},
        pantyType: {name: String, value: String},
        chestPad: {name: String, value: String},
        belt: {name: String, value: String},
        placketType: {name: String, value: String},
        body: {name: String, value: String},
        hemShaped: {name: String, value: String}
    }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
