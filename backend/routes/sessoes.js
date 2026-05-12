const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET /api/sessoes/ativas
// Retorna sessões abertas no momento.
// Depende da view: vw_sessoes_ativas
// Colunas esperadas: id_sessao, cliente, computador, descricao_computador, inicio, minutos_em_uso, valor_parcial
router.get('/ativas', async (req, res) => {
    // TODO: Consultar a view 'vw_sessoes_ativas' e retornar como JSON
    res.status(501).json({ error: 'Rota não implementada. Crie a view vw_sessoes_ativas em procedures.sql.' });
});

// GET /api/sessoes/historico
// Retorna as últimas 50 sessões (abertas e fechadas) com join em clientes e computadores.
// Colunas esperadas: id_sessao, cliente (nome), computador (numero), inicio, fim, valor_total, status
router.get('/historico', async (req, res) => {
    // TODO: JOIN entre sessoes, clientes e computadores. Ordenar por inicio DESC. Limitar a 50 registros.
    res.status(501).json({ error: 'Rota não implementada.' });
});

// POST /api/sessoes/abrir
// Abre uma nova sessão de jogo.
// Body esperado: { id_cliente, id_computador }
// Depende da stored procedure: sp_abrir_sessao(p_id_cliente, p_id_computador)
router.post('/abrir', async (req, res) => {
    const { id_cliente, id_computador } = req.body;
    if (!id_cliente || !id_computador)
        return res.status(400).json({ error: 'id_cliente e id_computador são obrigatórios.' });
    try {
        // TODO: Chamar a stored procedure sp_abrir_sessao(id_cliente, id_computador)
        //       Retornar { message: 'Sessão aberta com sucesso.' }
        //       Em caso de erro do banco (ex: PC ocupado), retornar status 400 com o erro
        res.status(501).json({ error: 'Rota não implementada. Crie sp_abrir_sessao em procedures.sql.' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// POST /api/sessoes/fechar/:id
// Encerra uma sessão ativa.
// Depende da stored procedure: sp_fechar_sessao(p_id_sessao)
router.post('/fechar/:id', async (req, res) => {
    try {
        // TODO: Chamar sp_fechar_sessao(req.params.id)
        //       Buscar o valor_total da sessão e retornar { message: '...', valor_total }
        res.status(501).json({ error: 'Rota não implementada. Crie sp_fechar_sessao em procedures.sql.' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
