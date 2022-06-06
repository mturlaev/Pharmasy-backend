const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    clientId: {
        ref: "Client",
        type: mongoose.SchemaTypes.ObjectId
    },
    medicineId: [{
        ref: "Medicine",
        type: mongoose.SchemaTypes.ObjectId
    }],
    summa: {
        type: Number,
        default: 0
    }
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;