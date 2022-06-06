const {Router}  = require("express");
const { clientsController } = require("../controllers/clients.controller");


const router = Router();
// проверено
router.post("/client", clientsController.postClient);
router.patch("/client/:id", clientsController.patchClient);
router.delete("/client/:id", clientsController.deleteClient);
router.get("/client", clientsController.getClient);

module.exports = router;