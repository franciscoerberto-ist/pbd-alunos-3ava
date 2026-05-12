const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET /api/computadores
// Retorna todos os computadores ordenados por numero.
// Colunas esperadas: id_computador, numero, descricao, status, valor_hora
router.get('/', async (req, res) => {
    // TODO: Consultar a tabela 'computadores' e retornar como JSON
    res.status(501).json({ error: 'Rota não implementada. Execute schema.sql e seed.sql primeiro.' });
});

// GET /api/computadores/disponiveis
// Retorna apenas computadores com status = 'disponivel'.
router.get('/disponiveis', async (req, res) => {
    // TODO: Filtrar computadores com status = 'disponivel' e retornar como JSON
    res.status(501).json({ error: 'Rota não implementada.' });
});

// PATCH /api/computadores/:id/status
// Atualiza o status de um computador.
// Body esperado: { status: 'disponivel' | 'ocupado' | 'manutencao' }
router.patch('/:id/status', async (req, res) => {
    const { status } = req.body;
    const validos = ['disponivel', 'ocupado', 'manutencao'];
    if (!validos.includes(status))
        return res.status(400).json({ error: 'Status inválido.' });
    // TODO: Atualizar o campo status do computador pelo id e retornar { message: '...' }
    res.status(501).json({ error: 'Rota não implementada.' });
});

module.exports = router;
