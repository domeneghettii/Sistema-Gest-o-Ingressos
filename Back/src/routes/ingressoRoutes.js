const express = require("express");
const router = express.Router();
const ingressoController = require("../controllers/ingressoController");

router.get("/", ingressoController.getAllIngressos);
router.get("/:id", ingressoController.getIngressoById);
router.post("/", ingressoController.createIngresso);
router.put("/:id", ingressoController.updateIngresso);
router.delete("/:id", ingressoController.deleteIngresso);
router.post("/venda", ingressoController.vendaIngresso);

module.exports = router;