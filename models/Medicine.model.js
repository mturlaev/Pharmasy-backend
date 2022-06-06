const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: {
        ref: "Category",
        type: mongoose.SchemaTypes.ObjectId
    },
    recept: Boolean,
})

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;