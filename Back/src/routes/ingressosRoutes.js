const express = require("express");
const router = express.Router();
const IngressosController = require("../controllers/ingressosController");

router.get("/ingressos", ingressoController.getAllingressos);
router.get("/ingressos/:id", ingressoController.getIngressos);
router.post("/ingressos", ingressoController.createIngressos);
router.put("/ingressos/:id", ingressoController.updateIngressos);
router.delete("/ingressos/:id", ingressoController.deleteIngressos);

module.exports = router;