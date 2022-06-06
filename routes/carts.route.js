const {Router} = require("express");
const { cartsController } = require("../controllers/carts.controller");


const router = Router();

router.patch("/client/medicine/:id/ByCart", cartsController.patchMedicineByCart);
router.get("/client/cart", cartsController.getCart);
router.patch("/client/medicineByDelete/:id", cartsController.deleteMedicineIdByCart);
router.patch("/client/deleteByCarts/:id", cartsController.deleteByCarts);
router.patch("/client/byMedicinesCart/:id", cartsController.pathByMedicinesFromCart);
router.patch("/client/walletPlus/:id", cartsController.pathWallletPlus);


module.exports = router;