const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET /api/produtos
// Retorna todos os produtos ordenados por categoria e nome.
// Colunas esperadas: id_produto, nome, categoria, preco, estoque
router.get('/', async (req, res) => {
    // TODO: Consultar a tabela 'produtos' e retornar como JSON
    res.status(501).json({ error: 'Rota não implementada. Execute schema.sql e seed.sql primeiro.' });
});

// GET /api/produtos/mais-vendidos
// Retorna produtos ranqueados pela quantidade vendida.
// Depende da view: vw_produtos_mais_vendidos
// Colunas esperadas: nome, categoria, total_vendido, receita_total
router.get('/mais-vendidos', async (req, res) => {
    // TODO: Consultar a view 'vw_produtos_mais_vendidos' e retornar como JSON
    res.status(501).json({ error: 'Rota não implementada. Crie a view vw_produtos_mais_vendidos em procedures.sql.' });
});

// POST /api/produtos/vender
// Registra uma venda de produto vinculada a uma sessão ativa.
// Body esperado: { id_sessao, id_produto, quantidade }
// O trigger trg_atualiza_estoque deve diminuir o estoque automaticamente.
// O trigger trg_valida_estoque deve bloquear vendas com estoque insuficiente.
router.post('/vender', async (req, res) => {
    const { id_sessao, id_produto, quantidade } = req.body;
    if (!id_sessao || !id_produto || !quantidade)
        return res.status(400).json({ error: 'id_sessao, id_produto e quantidade são obrigatórios.' });
    try {
        // TODO:
        // 1. Buscar o preco atual do produto pelo id_produto
        // 2. Inserir na tabela 'vendas': (id_sessao, id_produto, quantidade, preco_unitario)
        // 3. Retornar { message: 'Venda registrada.' }
        // Nota: os triggers trg_valida_estoque e trg_atualiza_estoque atuam automaticamente no banco
        res.status(501).json({ error: 'Rota não implementada.' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
