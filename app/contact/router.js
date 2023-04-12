const router = require("express").Router();
const contactController = require("./controller");

router.get("/contacts", contactController.getCoontact);
router.post("/contacts", contactController.postContact);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

module.exports = router;
