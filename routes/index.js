const {Router} = require("express")


const router = Router();

router.use(require("./carts.route"));
router.use(require("./categories.route"));
router.use(require("./clients.route"));
router.use(require("./medicines.route"));

module.exports = router;