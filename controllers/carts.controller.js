const Cart = require("../models/Cart.Model");
const Client = require("../models/Client.model");
const Medicine = require("../models/Medicine.model");

module.exports.cartsController = {
  patchMedicineByCart: async (req, res) => {
    try {
      const medicine = await Medicine.findById(req.body.medicineId);
      const cart = await Cart.findById(req.params.id);
      const client = await Client.findById(cart.clientId);

      if (medicine.recept === true) {
        if (client.hasRecept === true) {
          await Cart.findByIdAndUpdate(req.params.id, {
            $push: {
              medicineId: req.body.medicineId,
            },
            summa: cart.summa + medicine.price,
          });
          res.json("добавлено в корзину");
        } else {
          res.json(" у вас нет рецепта");
        }
      } else {
        await Cart.findByIdAndUpdate(req.params.id, {
          $push: {
            medicineId: req.body.medicineId,
          },
          summa: cart.summa + medicine.price,
        });
        res.json("добавлено в корзину");
      }
    } catch (error) {
      res.json(error.message);
    }
  },
  getCart: async (req, res) => {
    try {
      const cart = await Cart.find()
        .populate("medicineId")
        .populate("clientId");
      res.json(cart);
    } catch (error) {
      res.json(error.message);
    }
  },
  //удалить из корзины
  deleteMedicineIdByCart: async (req, res) => {
    try {
      const medicine = await Medicine.findById(req.body.medicineId);
      const cart = await Cart.findById(req.params.id);
      const client = await Client.findById(cart.clientId);
      await Cart.findByIdAndUpdate(req.params.id, {
        $pull: {
          medicineId: req.body.medicineId,
        },
        summa: cart.summa - medicine.price,
      });
      res.json("удалено из корзины");
    } catch (error) {
      res.json(error.message);
    }
  },
  // очистка корзины
  deleteByCarts: async (req, res) => {
    try {
      const cart = await Cart.findByIdAndUpdate(req.params.id, {
        medicineId: [],
        summa: null,
      });
      res.json(cart);
    } catch (error) {
      res.json(error.message);
    }
  },
  // покупать товар из корзины
  pathByMedicinesFromCart: async (req, res) => {
    try {
      const client = await Client.findById(cart.clientId);
      const cart = await Cart.findById(req.params.id);
      const medicine = await Medicine.findById(req.body.medicineId);

      if (cart.summa <= client.wallet) {
        await Client.findByIdAndUpdate(req.params.id, {
          $push: {
            order: medicineId,
          },
          wallet: client.wallet - cart.summa,
        });
        await Cart.findByIdAndUpdate(req.params.id, {
          medicineId: [],
          summa: null,
        });
        res.json("ваш заказ выполнен");
      } else {
        res.json("у вас недостаточно средств");
      }
    } catch (error) {
      res.json(error.message);
    }
  },
  // пополнять свой кошелек:
    pathWallletPlus: async (req, res) => {
      try {
        const client = await Client.findById(req.params.clientId);
        await Client.findByIdAndUpdate(req.params.clientId, {
          wallet: client.wallet + req.dody.wallet
        });
        res.json("кошелек пополнен")
      } catch (error) {
        res.json(error.message)
      }
    }
};

