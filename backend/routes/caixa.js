const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET /api/caixa
// Retorna os últimos 100 lançamentos do caixa (mais recentes primeiro).
// Colunas esperadas: id_auditoria, tipo, valor, descricao, data_hora
// O trigger trg_auditoria_sessao insere automaticamente ao fechar uma sessão.
router.get('/', async (req, res) => {
    // TODO: Consultar a tabela 'auditoria_caixa' ordenada por data_hora DESC, limitada a 100 linhas
    res.status(501).json({ error: 'Rota não implementada. Execute schema.sql e seed.sql primeiro.' });
});

// GET /api/caixa/resumo
// Retorna o total de entradas e saídas agrupado por tipo.
// Colunas esperadas: tipo, quantidade, total
router.get('/resumo', async (req, res) => {
    // TODO: Agrupar auditoria_caixa por tipo, retornando COUNT(*) e SUM(valor)
    res.status(501).json({ error: 'Rota não implementada.' });
});

module.exports = router;
