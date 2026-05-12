const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET /api/clientes
// Retorna todos os clientes ordenados por nome.
// Colunas esperadas: id_cliente, nome, email, telefone, saldo_creditos, data_cadastro
router.get('/', async (req, res) => {
    // TODO: Consultar a tabela 'clientes' e retornar como JSON
    res.status(501).json({ error: 'Rota não implementada. Execute schema.sql e seed.sql primeiro.' });
});

// GET /api/clientes/ranking
// Retorna clientes ranqueados pelo total gasto.
// Depende da view: vw_ranking_clientes
// Colunas esperadas: id_cliente, nome, total_sessoes, total_gasto, gasto_medio
router.get('/ranking', async (req, res) => {
    // TODO: Consultar a view 'vw_ranking_clientes' e retornar como JSON
    res.status(501).json({ error: 'Rota não implementada. Crie a view vw_ranking_clientes em procedures.sql.' });
});

// GET /api/clientes/:id
// Retorna um cliente pelo id.
router.get('/:id', async (req, res) => {
    // TODO: Consultar a tabela 'clientes' filtrando pelo id e retornar o objeto (ou 404 se não encontrar)
    res.status(501).json({ error: 'Rota não implementada.' });
});

// POST /api/clientes
// Cadastra um novo cliente.
// Body esperado: { nome, email, telefone }
router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;
    if (!nome || !email) return res.status(400).json({ error: 'Nome e e-mail são obrigatórios.' });
    // TODO: Inserir na tabela 'clientes' e retornar { id: insertId, message: '...' }
    res.status(501).json({ error: 'Rota não implementada.' });
});

module.exports = router;
