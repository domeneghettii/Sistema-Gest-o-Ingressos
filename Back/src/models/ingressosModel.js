const pool = require("../config/database");

const getIngressos = async () => {
    const result = await pool.query("SELECT * FROM ingressos");
    return result.rows;
};

const getIngressosById = async (id) => {
    const result = await pool.query("SELECT * FROM ingressos WHERE id = $1", [id]);
    return result.rows[0];
};

const createIngressos = async (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "INSERT INTO ingressos (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES ($1, $2) RETURNING *",
        [id, evento, local, data_evento, categoria, preco, quantidade_disponivel]
    );
    return result.rows[0];
};

const updateIngressos = async (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "UPDATE ingressos SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [id, evento, local, data_evento, categoria, preco, quantidade_disponivel]
    );
    return result.rows[0];
};

const deleteIngressos = async (id) => {
    const result = await pool.query("DELETE FROM ingressos WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }

    return { message: "Ingresso deletado com sucesso." };
};

module.exports = { getIngressos, getIngressosById, createIngressos, updateIngressos, deleteIngressos };