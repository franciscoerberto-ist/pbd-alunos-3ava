-- ============================================================
--  ARENA GAMER  –  seed.sql  (VERSÃO DO ALUNO)
--  AULA 1  –  Dados iniciais para desenvolvimento e testes
--
--  Execute APÓS schema.sql.
--  O sistema precisa de dados para funcionar corretamente.
-- ============================================================

USE arena_gamer;

-- ──────────────────────────────────────────────────────────────
--  COMPUTADORES
--  Insira pelo menos 6 computadores com números, descrições e
--  valores de hora diferentes (mix de configs gamer e standard).
-- ──────────────────────────────────────────────────────────────
-- TODO: Insira os computadores
-- Exemplo de linha:
-- INSERT INTO computadores (numero, descricao, valor_hora) VALUES (1, 'PC Gamer RTX 4070', 9.00);


-- ──────────────────────────────────────────────────────────────
--  CLIENTES
--  Insira pelo menos 5 clientes com nome, email, telefone e
--  saldo_creditos variado (alguns com saldo, outros sem).
-- ──────────────────────────────────────────────────────────────
-- TODO: Insira os clientes


-- ──────────────────────────────────────────────────────────────
--  PRODUTOS
--  Insira produtos nas categorias: Bebidas, Snacks, Lanches, Acessorios.
--  Cada produto precisa de preco e estoque definidos.
-- ──────────────────────────────────────────────────────────────
-- TODO: Insira os produtos


-- ──────────────────────────────────────────────────────────────
--  SESSÕES HISTÓRICAS (status = 'fechada')
--  Insira pelo menos 6 sessões já encerradas para que as queries
--  de análise (ranking, receita por computador, etc.) tenham dados.
--  Atenção: insira diretamente com inicio, fim, valor_total e status.
--  Não use as stored procedures para este seed — elas dependem
--  de lógica de negócio que pode não estar pronta ainda.
-- ──────────────────────────────────────────────────────────────
-- TODO: Insira sessões históricas fechadas
-- Exemplo de linha:
-- INSERT INTO sessoes (id_cliente, id_computador, inicio, fim, valor_total, status)
-- VALUES (1, 1, '2026-04-20 14:00:00', '2026-04-20 16:30:00', 22.50, 'fechada');


-- ──────────────────────────────────────────────────────────────
--  VENDAS (vinculadas às sessões históricas)
--  Insira vendas nas sessões criadas acima para popular as
--  queries de produtos mais vendidos e receita.
-- ──────────────────────────────────────────────────────────────
-- TODO: Insira registros de vendas


-- ──────────────────────────────────────────────────────────────
--  AUDITORIA_CAIXA (lançamentos iniciais)
--  Insira os lançamentos correspondentes às sessões históricas
--  (tipo 'entrada') e pelo menos uma saída (ex: reposição de estoque).
--  Nota: após criar o trigger trg_auditoria_sessao, novos fechamentos
--  de sessão gerarão lançamentos automaticamente.
-- ──────────────────────────────────────────────────────────────
-- TODO: Insira os lançamentos de caixa iniciais
