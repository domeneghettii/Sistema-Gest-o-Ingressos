const ingressoModel = require("../models/userModel");

const getAllIngressos = async (req, res) => {
    try {
        const ingressos = await ingressoModel.getIngressos();
        res.json(ingressos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar ingressos." });
    }
};

const getIngressos = async (req, res) => {
    try {
        const ingresso = await ingressoModel.getIngressoById(req.params.id);
        if (!ingresso) {
            return res.status(404).json({ message: "Ingresso não encontrado." });
        }
        res.json(ingresso);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar ingresso." });
    }
};

const createIngressos = async (req, res) => {
    try {
        const { } = req.body;
        const newIngresso = await ingressoModel.createIngressos();
        res.status(201).json(newIngresso);
    } catch (error) {
	console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Nome já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar ingresso." });
    }
};


