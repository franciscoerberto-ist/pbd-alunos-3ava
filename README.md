# Arena Gamer – Projeto Base (Versão do Aluno)

Sistema de gerenciamento de lan house desenvolvido para a disciplina de  
**Programação e Otimização de Banco de Dados – 3ª Avaliação**.

---

## O que você recebeu

| Pasta/Arquivo | Status | O que fazer |
|---|---|---|
| `frontend/` | ✅ Pronto | Não mexer |
| `backend/server.js` | ✅ Pronto | Não mexer |
| `backend/db.js` | ✅ Pronto | Não mexer |
| `backend/routes/` | ⚠️ Esqueleto | Implementar as queries SQL marcadas com `TODO` |
| `database/schema.sql` | ❌ Vazio | **Criar todas as tabelas** (Aula 1) |
| `database/seed.sql` | ❌ Vazio | **Inserir os dados iniciais** (Aula 1) |
| `database/procedures.sql` | ⚠️ Esqueleto | **Criar functions, procedures, triggers e views** (Aulas 3–4) |
| `database/otimizacao.sql` | ⚠️ Esqueleto | **Criar os índices e analisar com EXPLAIN** (Aula 5) |

---

## Ordem de execução

```bash
# 1. Criar o banco (schema + dados)
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed.sql

# 2. Criar procedures, triggers e views
mysql -u root -p < database/procedures.sql

# 3. Subir o backend
cd backend
cp .env.example .env          # edite se necessário
npm install
npm run dev

# 4. Abrir no navegador
# http://localhost:3000
```

---

## Tabelas que você precisa criar

```
clientes        → cadastro de clientes
computadores    → PCs disponíveis para locação
sessoes         → períodos de uso (aberta / fechada)
produtos        → snacks, bebidas e acessórios
vendas          → itens vendidos durante uma sessão
auditoria_caixa → log financeiro gerado pelos triggers
```

## Objetos de banco que você precisa criar

| Tipo | Nome | Aula |
|---|---|---|
| Function | `fn_duracao_minutos` | 3 |
| Function | `fn_calcular_valor` | 3 |
| Procedure | `sp_abrir_sessao` | 3 |
| Procedure | `sp_fechar_sessao` | 3 |
| Trigger | `trg_auditoria_sessao` | 4 |
| Trigger | `trg_atualiza_estoque` | 4 |
| Trigger | `trg_valida_estoque` | 4 |
| View | `vw_sessoes_ativas` | 2 |
| View | `vw_ranking_clientes` | 2 |
| View | `vw_produtos_mais_vendidos` | 2 |

---

## Como o backend usa o banco

Cada rota em `backend/routes/` está marcada com `TODO` e um comentário  
explicando o que a query precisa retornar. Implemente o banco primeiro,  
depois preencha as queries nas rotas para ligar tudo ao frontend.

### Exemplo — `GET /api/computadores`:
```js
// TODO: Consultar a tabela 'computadores' e retornar como JSON
const [rows] = await db.query('SELECT * FROM computadores ORDER BY numero');
res.json(rows);
```

---

## Entregáveis da Avaliação

1. Script SQL completo (`schema.sql` + `seed.sql` + `procedures.sql`) executando do zero sem erros
2. Pelo menos **2 stored procedures com transação** (demonstrar erro e sucesso)
3. Pelo menos **2 triggers** (mostrar o efeito no banco)
4. **EXPLAIN antes e depois** dos índices criados (comparação documentada)
5. **Frontend funcionando** ao vivo: fluxo abrir sessão → vender produto → fechar sessão
