const express = require("express");
const router = express.Router();
const ingressosController = require("../controllers/ingressosController");

router.get("/ingressos", ingressosController.getAllingressos);
router.get("/ingressos/:id", ingressosController.getIngresso);
router.post("/ingressos", ingressosController.createIngresso);
router.put("/ingressos/:id", ingressosController.updateIngresso);
router.delete("/ingressos/:id", ingressosController.deleteIngresso);

module.exports = router;