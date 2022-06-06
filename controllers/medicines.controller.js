const { find } = require("../models/Medicine.model");
const Medicine = require("../models/Medicine.model");

module.exports = medicinesController = {
    postMedicine: async (req, res) => {
        try {
            const medicine = await Medicine.create({
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                recept: req.body.recept
            });
            res.json(medicine);
        } catch (error) {
            res.json(error.message)
        }
    },
    patchMedicine: async (req, res) => {
        try {
            const medicine = await Medicine.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                recept: req.body.recept
            });
            res.json(medicine)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteMedicine: async (req, res) => {
        try {
            await Medicine.findByIdAndRemove(req.params.id);
            res.json("лекарство удалено")
        } catch (error) {
            res.json(error.message)
        }
    },
    getMedicine: async (req, res) => {
        try {
            const medicine = await Medicine.find().populate("category");
            res.json(medicine)
        } catch (error) {
            res.json(error.message)
        }
    },
    getMedicineByCategory: async (req, res) => {
        try {
            const medicine = await Medicine.find({category: req.params.id}).populate("category");
            res.json(medicine)
        } catch (error) {
            res.json(error.message)
        }
    },
    getMedicineById: async (req, res) => {
        try {
            const medicine = await Medicine.findById(req.params.id).populate("category");
            res.json(medicine)
        } catch (error) {
            res.json(error.message)
        }
    },
}