-- ============================================================
--  ARENA GAMER  –  procedures.sql (VERSÃO DO ALUNO)
--  AULAS 3 e 4  –  Functions, Stored Procedures, Triggers e Views
--
--  Execute APÓS schema.sql e seed.sql
-- ============================================================

USE arena_gamer;

DELIMITER //

-- ──────────────────────────────────────────────
--  FUNCTIONS (AULA 3)
-- ──────────────────────────────────────────────

-- TODO: Aula 3 - Implementar fn_duracao_minutos
-- Recebe inicio DATETIME e fim DATETIME
-- Retorna INT (diferença em minutos)
-- Dica: Use a função TIMESTAMPDIFF

-- TODO: Aula 3 - Implementar fn_calcular_valor
-- Recebe inicio DATETIME, fim DATETIME e valor_hora DECIMAL(6,2)
-- Retorna DECIMAL(8,2) (valor a ser cobrado)
-- Dica: Use fn_duracao_minutos (ou TIMESTAMPDIFF) e faça o cálculo do valor proporcional por minuto.
-- Arredonde o resultado para 2 casas decimais usando ROUND()

-- ──────────────────────────────────────────────
--  STORED PROCEDURES (AULA 3)
-- ──────────────────────────────────────────────

-- TODO: Aula 3 - Implementar sp_abrir_sessao
-- Recebe p_id_cliente INT, p_id_computador INT
-- Regras de negócio:
-- 1. Verificar se o computador está 'disponivel'.
--    Se não estiver, lançar erro (SIGNAL SQLSTATE '45000') com a mensagem: 'Computador não está disponível.'
-- 2. Se estiver disponível, iniciar transação (START TRANSACTION):
--    a. Inserir a nova sessão na tabela 'sessoes'
--    b. Atualizar o status do computador para 'ocupado'
--    c. Confirmar transação (COMMIT)

-- TODO: Aula 3 - Implementar sp_fechar_sessao
-- Recebe p_id_sessao INT
-- Regras de negócio:
-- 1. Buscar a data/hora de inicio, o id do computador e o valor_hora do computador vinculado à sessão.
--    Verificar também se a sessão existe e está 'aberta'.
--    Se não encontrar a sessão aberta, lançar erro (SIGNAL SQLSTATE '45000') com a mensagem: 'Sessão não encontrada ou já encerrada.'
-- 2. Calcular o valor da sessão (usando a function fn_calcular_valor)
-- 3. Calcular o valor total em vendas (produtos) vinculadas à sessão. Use COALESCE para garantir que retorna 0 se não houver vendas.
-- 4. Somar os dois valores para ter o v_valor_total.
-- 5. Iniciar transação (START TRANSACTION):
--    a. Atualizar a tabela 'sessoes': definir fim = NOW(), valor_total = v_valor_total, status = 'fechada'
--    b. Atualizar a tabela 'computadores': voltar status para 'disponivel'
--    c. Confirmar transação (COMMIT)

-- ──────────────────────────────────────────────
--  TRIGGERS (AULA 4)
-- ──────────────────────────────────────────────

-- TODO: Aula 4 - Implementar trg_auditoria_sessao
-- Gatilho: AFTER UPDATE ON sessoes
-- Regra: 
-- Quando o status mudar para 'fechada' (e antes era 'aberta'), inserir um registro na tabela 'auditoria_caixa'.
-- Use: tipo = 'entrada', valor = NEW.valor_total, descricao = 'Sessão #[id] encerrada – cliente [id_cliente]', id_sessao = NEW.id_sessao
-- Dica: Use CONCAT() para montar a string da descrição.

-- TODO: Aula 4 - Implementar trg_atualiza_estoque
-- Gatilho: AFTER INSERT ON vendas
-- Regra: Ao registrar uma venda, diminuir a quantidade vendida do estoque do produto correspondente.

-- TODO: Aula 4 - Implementar trg_valida_estoque
-- Gatilho: BEFORE INSERT ON vendas
-- Regra: Antes de registrar a venda, verificar se há estoque suficiente.
-- Se o estoque for menor que NEW.quantidade, lançar erro (SIGNAL SQLSTATE '45000') com a mensagem: 'Estoque insuficiente para a venda.'

DELIMITER ;

-- ──────────────────────────────────────────────
--  VIEWS (AULAS 1 E 2)
-- ──────────────────────────────────────────────

-- TODO: Aula 2 - Implementar vw_sessoes_ativas
-- Deve listar todas as sessões com status = 'aberta'.
-- Colunas necessárias (para o backend/frontend): 
-- id_sessao, cliente (nome), computador (numero), descricao_computador (descricao), 
-- inicio, minutos_em_uso (usar TIMESTAMPDIFF com NOW()), valor_parcial (cálculo usando NOW())

-- TODO: Aula 2 - Implementar vw_ranking_clientes
-- Deve listar todos os clientes e ranqueá-los pelo gasto.
-- Colunas necessárias: 
-- id_cliente, nome, total_sessoes (COUNT), total_gasto (SUM de valor_total das sessões fechadas), gasto_medio (AVG)
-- Ordenar por total_gasto DESC.
-- Dica: Use LEFT JOIN com sessoes (status = 'fechada') e não esqueça do COALESCE para tratar NULLs.

-- TODO: Aula 2 - Implementar vw_produtos_mais_vendidos
-- Deve listar os produtos ranqueados pela quantidade vendida.
-- Colunas necessárias:
-- nome (do produto), categoria, total_vendido (SUM de quantidade em vendas), receita_total (SUM de quantidade * preco_unitario)
-- Ordenar por total_vendido DESC.
