const {Router} = require("express");
const { categoriesController } = require("../controllers/categories.controller");


const router = Router();
// проверено
router.post("/admin/category", categoriesController.postcategory);
router.patch("/admin/category/:id", categoriesController.patchCategory);
router.delete("/admin/category/:id", categoriesController.deleteCategory);
router.get("/admin/category", categoriesController.getCategory);

module.exports = router;