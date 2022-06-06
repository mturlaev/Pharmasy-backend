const {Router} = require("express");
const medicinesController = require("../controllers/medicines.controller");


const router = Router();
//проверено
router.post("/admin/medicines", medicinesController.postMedicine);
router.patch("/admin/medicines/:id", medicinesController.patchMedicine);
router.delete("/admin/medicines/:id", medicinesController.deleteMedicine);
router.get("/client/medicines", medicinesController.getMedicine);
router.get("/client/medicines/category/:id", medicinesController.getMedicineByCategory);
router.get("/client/medicines/:id", medicinesController.getMedicineById);
router.get("/admin/medicines", medicinesController.getMedicine);

module.exports = router;