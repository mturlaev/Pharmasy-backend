const Client = require("../models/Client.model");
const Cart = require("../models/Cart.Model");

module.exports.clientsController = {
    postClient: async (req, res) => {
        try {
            const client = await Client.create({
                name: req.body.name,
                hasRecept:req.body.hasRecept,
                wallet: req.body.wallet,
                order: req.body.order
            });
            await Cart.create({
            clientId: client._id,
            })
            res.json(client);
        } catch (error) {
            res.json(error.message)
        }
    },
    patchClient: async (req, res) => {
        try {
            const client = await Client.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                hasRecept:req.body.hasRecept,
                wallet: req.body.wallet,
                order: req.body.order
            });
            res.json(client)
        } catch (error) {
            res.json(error.message);
        }
    },
    deleteClient: async (req, res) => {
        try {
            await Client.findByIdAndRemove(req.params.id);
            res.json("клиент удален");
        } catch (error) {
            res.json(error.message)
        }
    },
    getClient: async (req, res) => {
        try {
            const client = await Client.find().populate("order");
            res.json(client)
        } catch (error) {
            res.json(error.message)
        }
    },
}