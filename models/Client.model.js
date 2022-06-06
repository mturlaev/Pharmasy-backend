const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    name: String,
    hasRecept: Boolean,
    wallet: Number,
    order: [{
        ref: "Cart",
        type: mongoose.SchemaTypes.ObjectId
    }]
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;