
const ingressoModel = require("../models/ingressosModel");

const getAllingressos = async (req, res) => {
    try {
        const ingressos = await ingressosModel.getIngresso();
    if (!ingressos || ingressos.length === 0) {
        return res.status(404). json({ message: "Nenhum ingresso encontrado." });
    }
        res.json(ingressos);
    } catch (error) {
        res.status(404).json({ message: "Não foi possível buscar os ingressos." });
    };
};

const getIngresso = async (req, res) => {
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

const createIngresso = async (req, res) => {
    try {
        const { id, evento, local, data_evento, categoria, preco, quantidade_disponivel } = req.body;
        const newIngresso = await userModel.createUser(id, evento, local, data_evento, categoria, preco, quantidade_disponivel);
        res.status(201).json(newIngresso);
    } catch (error) {
	console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Ingresso já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar ingresso." });
    }
};

const updateIngresso = async (req, res) => {
    try {
        const { id, evento, local, data_evento, categoria, preco, quantidade_disponivel } = req.body;
        const updadateIngresso = await ingressoModel.updateIngresso(req.params.id,  id, evento, local, data_evento, categoria, preco, quantidade_disponivel );
        if (!updateIngresso) {
            return res.status(404).json({ message: "Ingresso não encontrado." });
        }
        res.json(updateIngresso);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar ingresso." });
    }
};

const deleteIngresso = async (req, res) => {
    try {
        const message = await ingressoModel.deleteIngresso(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar ingresso." });
    }
};

module.exports = { getAllingressos, getIngresso, createIngresso, updateIngresso, deleteIngresso };


