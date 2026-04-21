---
title: Contas do Caixa
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/196247553
---

# Contas do Caixa

16truenonelisttrue

Contas do Caixa
===============

O módulo de **Cadastro de Contas do Caixa** tem como objetivo centralizar, organizar e gerenciar todas as contas utilizadas nos lançamentos financeiros do sistema. Ele permite o controle das contas patrimoniais, de receitas e de despesas, garantindo uma estrutura contábil padronizada e alinhada com a realidade da empresa.

Com esse módulo, é possível categorizar corretamente os tipos de contas, facilitando a conciliação financeira, o acompanhamento do fluxo de caixa e a geração de relatórios contábeis.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Financeiro > Contas do Caixa

Será apresentada a seguinte tela:

Tela de Listagem de Contas do Caixa

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento das contas do caixa já cadastradas. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Nova Conta do Caixa**

Permite o cadastro de uma nova conta do caixa no sistema, garantindo que todas as contas relevantes estejam devidamente registradas.

**Filtro de Pesquisa**

Facilita a busca da conta específica pela descrição, tipo, situação ou classificação, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de uma conta já cadastrada, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Nova Conta Caixa

Box Nova Conta Caixa

*   `Tipo de Conta`: As contas são organizadas de forma hierárquica em dois tipos principais:
    
    *   `Analítica`: É uma conta de nível detalhado, onde os lançamentos realmente ocorrem. Deve sempre estar vinculada a uma conta sintética. Exemplo: _"Comissões de Vendas"_ (subconta de _"Despesas com Vendas"_).
        
    *   `Sintética`: É uma conta de nível superior, usada apenas para agrupar outras contas. Não recebe lançamentos diretos. Exemplo: _"Despesas com Vendas"_.
        
*   `Situação`: Indica o estado atual do cadastro.
    
*   `Valor meta (R$)`: Indica o valor da meta que a conta deve atingir.
    
*   `Classificação da Conta`: Determina como a conta será utilizada nos controles e relatórios. As classificações disponíveis são:
    
    *   `Patrimonial`: Utilizada para representar bens, direitos e obrigações da empresa, como _caixa_, _cartões_, _fornecedores a pagar_, etc.
        
    *   `Banco`: Subtipo das contas patrimoniais, usada exclusivamente para contas correntes e movimentações bancárias. Permite conciliação bancária e integração com extratos.
        
    *   `Despesa`: Representa os gastos operacionais da empresa. Todas as contas classificadas como despesa serão consideradas na apuração do resultado (DRE).
        
    *   `Receita`: Representa os valores recebidos com a atividade da empresa, como vendas de produtos ou serviços. Também impacta a apuração do resultado (DRE).
        

**Importante:**

A classificação correta da conta é essencial para garantir a exatidão dos relatórios financeiros, como o DRE e o Livro Caixa.

*   `Descrição`: Nome da conta a ser cadastrada.
    
*   `Conta Referência`: Permite vincular a conta que está sendo cadastrada a uma conta sintética já existente no plano de contas. Ao clicar no ícone , será exibida uma tela com a listagem de contas sintéticas disponíveis. A lista apresentada será filtrada automaticamente com base na `Classificação da Conta` que está sendo cadastrada (Patrimonial, Banco, Receita ou Despesa), garantindo que a conta seja referenciada corretamente dentro da estrutura contábil. Essa vinculação é importante para manter a hierarquia do plano de contas e garantir que os lançamentos sejam agrupados corretamente.
    

### Box 2 - Detalhes

Este box é exibido **somente** quando o `Tipo da Conta` é definido como `Analítica`, ou seja, quando a conta poderá receber movimentações financeiras diretas.

Os campos exibidos variam de acordo com a `Classificação da Conta` selecionada (Patrimonial, Banco, Receita ou Despesa), com o objetivo de coletar as informações específicas que cada tipo de conta exige.

Box Detalhes

*   Campos exibidos independentemente da classificação da conta:
    
    *   `Código da Conta Contábil`: Campo para inserir o código correspondente da conta no plano de contas contábil da empresa (usado para integração com sistemas de contabilidade).
        
        *   **Exemplo:** "1.1.01.01" para Caixa ou "3.1.02.01" para Receita de Serviços.
            
    *   `Descrição da Conta Contábil`: Campo para detalhar o nome da conta conforme o plano contábil utilizado na empresa.
        
        *   **Exemplo:** "Receitas com Venda de Combustível" ou "Despesas com Energia Elétrica".
            
    *   `Compõe Balanço`: Define se a conta será incluída nos relatórios do Balanço Patrimonial. Essa marcação é importante para separar contas operacionais das que afetam a posição patrimonial da empresa.
        
    *   `Tipo de Recebimento`: Permite selecionar quais formas de recebimento estarão habilitadas para lançamentos nessa conta (ex: Dinheiro, Cartão de Crédito, PIX, Transferência, etc.). Esse campo é especialmente útil para contas que representam entradas financeiras, onde é possível vincular tipos de recebimento às contas de caixa.
        
*   Quando a `Classificação da Conta` for `Patrimonial`:
    
    *   `Compõe Saldo`: Indica se essa conta será apresentada na seção **"Detalhe do Saldo"** do relatório de Livro Caixa.
        
    *   `Liquidez`: Define a disponibilidade do recurso representado pela conta, ajudando na análise de solvência e fluxo de caixa. Pode ser classificada como:
        
        *   `Imediata`: recursos disponíveis imediatamente (ex: caixa, conta corrente);
            
        *   `Futura`: recursos que serão recebidos ou pagos no futuro (ex: contas a receber);
            
        *   `Moeda`: contas relacionadas a variações cambiais.
            
*   Quando a `Classificação da Conta` for `Banco`: vinculacao\_banco
    
    *   `Conta Bancária`: Campo para vincular a conta analítica a uma conta bancária previamente cadastrada no módulo de **Cadastro de** **Contas Bancárias**. Isso permite que a conta seja utilizada de forma automática no módulo de Extrato Bancário.
        
    *   `Compõe Saldo`: Assim como na classificação patrimonial, indica se a conta será apresentada na seção **"Detalhe do Saldo"** do relatório de Livro Caixa.
        
*   Quando a `Classificação da Conta` for `Despesa` ou `Receita`:
    
    *   `Tipo Receita/Despesa`: Classifica a natureza do lançamento para fins de análise gerencial e geração de DRE (Demonstrativo de Resultado do Exercício). As opções disponíveis são:
        
        *   `Operacional`: receitas ou despesas ligadas à atividade principal da empresa;
            
        *   `Não Operacional`: valores fora da atividade principal (ex: venda de ativo);
            
        *   `Imposto Sobre Venda`: tributos relacionados à comercialização (ex: ICMS, ISS);
            
        *   `Imposto Sobre Lucro`: tributos incidentes sobre o resultado (ex: IRPJ, CSLL).
            
    *   `Periodicidade`: Indica com que frequência a conta costuma ser utilizada, facilitando a previsão de despesas ou receitas.
        
        *   **Exemplos**: _Semanal_, _Mensal_, _Anual_.
            
    *   `Data de Referência`: Campo para registrar a data de criação ou início da vigência da conta, útil para controle histórico e auditoria.
        

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir contas do caixa no sistema.

### Incluir Conta do Caixa

Para cadastrar uma nova conta do caixa no sistema, siga os passos abaixo:

Acesse o módulo de Contas do Caixa através do caminho: `Menu Cadastro > Financeiro > Contas do Caixa`.

Na tela de listagem das contas, clique no botão .

Preencha os campos no box **Nova Conta Caixa**:

*   `Descrição`: Insira o nome da conta (ex: Caixa Geral ).
    
*   `Tipo de Conta`: Selecione `Analítica` se a conta receberá lançamentos diretos, ou `Sintética` se for apenas para agrupar outras contas.
    
*   `Situação`: Selecione `Ativa` para que a conta esteja disponível para uso.
    
*   `Valor meta (R$)`: (Opcional) Informe um valor de meta para a conta.
    
*   `Classificação da Conta`: Escolha a classificação adequada (Patrimonial, Banco, Despesa ou Receita). Esta escolha influenciará os campos adicionais no box **Detalhes**.
    
*   `Conta Referência`: Se o `Tipo de Conta` for `Analítica`, selecione a conta sintética à qual esta conta analítica estará vinculada. A lista será filtrada pela `Classificação da Conta`.
    

Preencha os campos no box **Detalhes** (se o `Tipo de Conta` for `Analítica`):

*   `Código da Conta Contábil`: (Opcional) Insira o código contábil correspondente.
    
*   `Descrição da Conta Contábil`: (Opcional) Detalhe o nome da conta conforme o plano contábil.
    
*   `Compõe Balanço`: Indique como `Sim` se a conta deve ser incluída nos relatórios do Balanço Patrimonial.
    
*   `Tipo de Recebimento`: Selecione a forma de recebimento habilitadas para esta conta.
    
*   Se `Classificação da Conta` for `Patrimonial`:
    
    *   `Compõe Saldo`: Indique como `Sim` se a conta deve aparecer no "Detalhe do Saldo" do relatório do Livro Caixa.
        
    *   `Liquidez`: Defina a liquidez (`Imediata`, `Futura` ou `Moeda`).
        
*   Se `Classificação da Conta` for `Banco`:
    
    *   `Conta Bancária`: Vincule a conta analítica a uma conta bancária previamente cadastrada.
        
    *   `Compõe Saldo`: Marque se a conta deve aparecer no "Detalhe do Saldo" do relatório do Livro Caixa.
        
*   Se `Classificação da Conta` for `Despesa` ou `Receita`:
    
    *   `Tipo Receita/Despesa`: Classifique a natureza do lançamento (`Operacional`, `Não Operacional`, `Imposto Sobre Venda`, `Imposto Sobre Lucro`).
        
    *   `Periodicidade`: Indique a frequência de uso da conta.
        
    *   `Data de Referência`: Registre a data de criação ou referência.
        

Após preencher todos os campos e revisar as informações, clique no botão . A tela será redirecionada para a listagem das contas do caixa cadastradas.

* * *

### Editar Conta do Caixa

Para modificar os dados de uma conta do caixa já cadastrada, siga os passos:

Acesse o módulo de Contas do Caixa. A tela de listagem exibirá todas as contas cadastradas.

Localize a conta do caixa que deseja editar na lista. Você pode usar os filtros de pesquisa para agilizar a busca.

Clique no ícone ao lado da conta desejada.

A tela de cadastro da conta do caixa será aberta, permitindo a modificação dos campos.

**Restrições de Edição**

*   **Contas Sintéticas padrão do sistema:**
    
    *   **Não é permitida a edição** de nenhum campo.
        

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Conta do Caixa

Para remover uma conta do caixa do sistema, siga os passos:

Acesse o módulo de Contas do Caixa.

Localize a conta que deseja excluir na tela de listagem.

Clique no ícone de ao lado da conta do caixa desejada.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

Por motivos de segurança e integridade dos dados, o sistema **não permitirá a exclusão** de uma conta do caixa nos seguintes casos:

*   Se houver **lançamentos vinculados** a essa conta no Livro Caixa;
    
*   Se a conta for **referência de outras contas** (contas vinculadas hierarquicamente a ela);
    
*   Se estiver **vinculada nas configurações de Contas Padrão** ou em **Contas Administradoras**.
    

Caso precise remover uma conta que já foi utilizada, considere inativá-la alterando sua `Situação` para `Inativa` na tela de edição.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Cadastro de Contas do Caixa.

**Problema**: Não consigo cadastrar uma nova conta do caixa.

**Solução**: Verifique se todos os campos obrigatórios foram preenchidos. Mensagens de erro na tela indicarão quais informações estão faltando ou estão incorretas.

**Problema**: Não consigo excluir uma conta do caixa.

**Solução**: O sistema impede a exclusão de contas do caixa que já foram utilizadas em lançamentos ou que estão vinculadas a outras configurações. Para manter a integridade dos dados, verifique se a conta não possui movimentações associadas ou vínculos. Se houver, considere inativar a conta.

**Problema**: Os relatórios financeiros (DRE, Livro Caixa) apresentam informações incorretas.

**Solução**: Revise a `Classificação da Conta` e as configurações no Box Detalhes para cada conta. A correta categorização e configuração são essenciais para a precisão dos relatórios.

**Problema**: Não consigo vincular uma conta analítica a uma conta sintética.

**Solução**: Verifique se a conta sintética já existe e se a `Classificação da Conta` da conta analítica é compatível com a da conta sintética. O sistema filtra as opções de `Conta Referência` com base na classificação.

* * *

Contas Padrão
-------------

As **Contas Padrão** são responsáveis por definir, para cada operação padrão do sistema, quais contas devem ser utilizadas como **Origem** e **Aplicação** dos valores movimentados. Essa configuração é essencial para automatizar os lançamentos financeiros, evitando erros e garantindo que todas as transações sejam registradas corretamente no **Livro Caixa** e nos relatórios contábeis.

As **Contas Padrão** já vêm pré-configuradas no sistema, mas é fundamental que o usuário compreenda o funcionamento de cada operação e revise as configurações conforme a realidade do seu posto ou empresa.

Para visualizar e editar as Contas Padrão:

Acesse o módulo de Contas do Caixa através do caminho: `Menu Cadastro > Financeiro > Contas do Caixa`.

Clique no botão .

A tela exibirá uma **lista de todas as operações padrão disponíveis no sistema**, cada uma acompanhada pelo ícone . Ao clicar nesse ícone, será aberta uma nova janela específica para a operação selecionada, permitindo configurar ou revisar as contas de **Origem** e **Aplicação** utilizadas nos lançamentos automáticos.

### Detalhamento das principais operações e como configurar

#DEEBFF

`🔸 Operação 007 – VENDAS DO DIA`

`Descrição`: Representa o total de vendas recebidas nos PDVs em um dia.

`Conta Origem`: **Conta Vendas do Dia**

Não deve compor o saldo do Livro Caixa, pois sempre estará negativa.

`Conta Aplicação`: **Conta Caixa**.

A **Conta Caixa** é uma conta **transitória**, usada como destino temporário do valor total das vendas. Ela deve ser configurada como origem nas próximas operações, que detalham cada forma de recebimento.

#DEEBFF

`🔸 Operação 001 – PAGAMENTO DE FORNECEDOR`

`Descrição`: Utilizada para quitar contas a pagar, como compras de combustível, diversos ou despesas lançadas diretas no Contas a Pagar.

`Conta Origem`: **Conta Bancária** mais utilizada para esse tipo de pagamento.

`Conta Aplicação`: **Conta Pagamento de Fornecedor**.

Ao configurar corretamente, o sistema já preenche automaticamente as contas no momento da quitação, dispensando seleção manual pelo usuário.

#DEEBFF

`🔸 Operação 006 – PAGAMENTO DE DESPESA`

`Descrição`: Utilizada para registrar pagamento de despesas, lançadas via PDV ou pela retaguarda (AppPosto).

`Conta Origem`: **Conta Caixa**.

`Conta Aplicação`: **Conta Pagamento de Despesas**.

Apesar da configuração padrão, o usuário **sempre deve indicar manualmente** a conta de despesa específica no momento do lançamento, como: "Material de Limpeza", "Água e Luz", etc.

No PDV, o pagamento só será autorizado se houver saldo suficiente na Conta Caixa.

#DEEBFF

`🔸 Operação 028 – DINHEIRO`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Dinheiro**.

`Conta Origem`: **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`: **Conta Dinheiro**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 008 – CHEQUES À VISTA`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Cheque à Vista**.

`Conta Origem`: **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`: **Conta Cheque à Vista**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 017 – DEPÓSITO DE CHEQUES À VISTA`

`Descrição`: Registra o depósito dos cheques à vista na conta bancária da empresa.

`Conta Origem`: **Conta Cheque à Vista** (mesma conta configurada como Aplicação na operação 008).

`Conta Aplicação`: **Conta Bancária** de destino.

Ao realizar o depósito, o valor é transferido da conta Cheque à Vista para a conta bancária, atualizando corretamente os saldos no Livro Caixa.

#DEEBFF

`🔸 Operação 009 – CHEQUES A PRAZO`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Cheque a Prazo**.

`Conta Origem`: **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`: **Conta Cheque a Prazo**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 003 – DEPÓSITO DE CHEQUES A PRAZO`

`Descrição`: Registra o depósito dos cheques a prazo na conta bancária da empresa.

`Conta Origem`: **Conta Cheque a Prazo** (mesma conta configurada como Aplicação na operação 009).

`Conta Aplicação`: **Conta Bancária** de destino.

Ao realizar o depósito, o valor é transferido da conta Cheque à Prazo para a conta bancária, atualizando corretamente os saldos no Livro Caixa.

#DEEBFF

`🔸 Operação 020 – DEVOLUÇÃO DE CHEQUES`

`Descrição`: Registra a devolução de um cheque que não foi compensado pelo banco.

`Conta Origem`: **Conta Bancária** onde o cheque foi depositado.

`Conta Aplicação`: **Conta Cheques Devolvidos**.

A devolução remove o valor da conta bancária e transfere para uma conta específica de controle dos cheques devolvidos, preservando o histórico financeiro da operação.

#DEEBFF

`🔸 Operação 021 – QUITAÇÃO DE CHEQUES DEVOLVIDOS`

`Descrição`: Registra a regularização de um cheque devolvido, quando o cliente retorna ao posto e efetua o pagamento da pendência com outra forma de recebimento (ex: dinheiro, PIX, cartão).

`Conta Origem`: **Conta Cheques Devolvidos**.

`Conta Aplicação`: **Conta correspondente à nova forma de pagamento** (ex: Conta Dinheiro, Conta PIX)

Essa operação finaliza o controle do cheque devolvido e registra o novo recebimento, permitindo o encerramento do ciclo da pendência.

#DEEBFF

`🔸 Operação 010 – CARTÕES DE CRÉDITO`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Cartão de Crédito**.

`Conta Origem`**:** **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`**:** **Conta Cartões de Crédito**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 004 – RECEBIMENTO DE CARTÕES DE CRÉDITO`

`Descrição`: Registra o recebimento dos valores de vendas via **Cartão de Crédito** na conta bancária da empresa.

`Conta Origem`**:** **Conta Cartões de Crédito** (mesma conta configurada como Aplicação na operação 010).

`Conta Aplicação`**:** **Conta Bancária** em que o valor será creditado.

Com a baixa, o saldo da conta Cartões de Crédito é atualizado com os valores pendentes de recebimento.

#DEEBFF

`🔸 Operação 019 – TARIFA DE CARTÕES DE CRÉDITO`

`Descrição`: Registra as taxas administrativas cobradas pelas operadoras de cartões após a baixa dos recebimentos.

`Conta Origem`**:** Depende do parâmetro **“Baixa de cartões pelo valor bruto”**:

*   Se `Não` (valor líquido):
    
    *   `Conta Origem` = **Conta Cartões de Crédito** (mesma conta configurada como Origem na operação 004).
        
*   Se `Sim` (valor bruto):
    
    *   `Conta Origem` = **Conta Bancária** (mesma conta configurada como Aplicação da operação 004).
        

`Conta Aplicação`**:** **Conta de Taxas Administrativas de Cartão de Crédito**.

#DEEBFF

`🔸 Operação 015 – CARTÕES DE DÉBITO`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Cartão de Débito**.

`Conta Origem`**:** **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`**:** **Conta Cartões de Débito**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 023 – RECEBIMENTO DE CARTÕES DE DÉBITO`

`Descrição`: Registra o recebimento dos valores de vendas via **Cartão de Débito** na conta bancária da empresa.

`Conta Origem`**:** **Conta Cartões de Débito** (mesma conta configurada como Aplicação na operação 015).

`Conta Aplicação`**:** **Conta Bancária** em que o valor será creditado.

Com a baixa, o saldo da conta Cartões de Débito é atualizado com os valores pendentes de recebimento.

#DEEBFF

`🔸 Operação 024 – TARIFA DE CARTÕES DE DÉBITO`

`Descrição`: Registra as taxas administrativas cobradas pelas operadoras de cartões após a baixa dos recebimentos.

`Conta Origem`**:** Depende do parâmetro **“Baixa de cartões pelo valor bruto”**:

*   Se `Não` (valor líquido):
    
    *   `Conta Origem` = **Conta Cartões de Débito** (mesma conta configurada como Origem na operação 023).
        
*   Se `Sim` (valor bruto):
    
    *   `Conta Origem` = **Conta Bancária** (mesma conta configurada como Aplicação da operação 023).
        

`Conta Aplicação`**:** **Conta de Taxas Administrativas de Cartão de Débito**.

#DEEBFF

`🔸 Operação 013 – RESGATES`

`Descrição`: Refere-se a descontos concedidos por programas de fidelidade integrados ao sistema (ex: PostoAki, PontuaX, Apetrus).

`Conta Origem`**:** **Conta Caixa** (por se tratar de uma finalizadora registrada no PDV).

`Conta Aplicação`**:** **Conta de Descontos Concedidos**.

📌 **Exemplo prático:**  
Em um abastecimento de R$100,00, o cliente recebe R$5,00 de desconto via programa de fidelidade. O frentista registra o desconto como um _resgate_, e o valor restante (R$95,00) é pago normalmente. Assim, o sistema registra o valor total da venda, o desconto concedido e o valor efetivamente recebido, mantendo o controle completo dos valores movimentados.

#DEEBFF

`🔸 Operação 011 - VALES DE CLIENTE`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Convênio**.

`Conta Origem`: **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`**:** **Conta Convênios**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 002 - QUITAÇÃO DE FATURAS`

`Descrição`: Registra a confirmação do pagamento, por parte do cliente, das vendas realizadas com a forma de pagamento **Convênio**.

`Conta Origem`: **Conta Convênios** (mesma conta configurada como Aplicação na operação 011).

`Conta Aplicação`**:** **Conta Bancária** onde será recebido o pagamento, porém, **seguirá a Conta Aplicação da forma de pagamento indicada** no momento da quitação.

📌 **Exemplo prático:**

Se a quitação for feita com **Cartão de Crédito**, será utilizada a Conta Aplicação da operação **010 – CARTÕES DE CRÉDITO**.

Ao quitar uma fatura, o sistema atualiza o saldo da Conta Convênios com o valor correspondente aos vales pendentes de faturamento.

#DEEBFF

`🔸 Operação 022 - CRÉDITOS POR ANTECIPAÇÃO`

`Descrição`: Registra o valor pago **antecipadamente** pelo cliente ao posto, gerando um crédito a ser consumido em futuras compras.

`Conta Origem`: **Conta Adiantamento de Clientes**.

Ao ser lançado, apresentará saldo negativo, indicando que o posto está devendo esse valor ao cliente.

`Conta Aplicação`: **Conta Bancária** onde será recebido o pagamento, porém, **seguirá a Conta Aplicação da forma de pagamento indicada** no momento da quitação.

📌 **Exemplo prático:**

Se o pagamento for realizado com **Cartão de Débito**, será usada a Conta Aplicação da operação **015 – CARTÕES DE DÉBITO**.

Esse saldo será compensado quando o cliente utilizar o crédito em uma quitação de fatura.

#DEEBFF

`🔸 Operação 027 - BAIXA DE FATURA DE CRÉDITO`

`Descrição`: Registra a utilização do crédito antecipado (gerado na operação **022**) na quitação de uma fatura de convênio.

`Conta Origem`: **Conta Convênios** (mesma Conta Aplicação da operação **011 - VALES DE CLIENTE**).

`Conta Aplicação`: **Conta Adiantamento de Clientes** (mesma Conta Origem da operação **022 -** **CRÉDITOS POR ANTECIPAÇÃO**).

Ao realizar o faturamento dos vales, seja pelo módulo de **Faturamento por Vale** ou **Faturamento por Data**, se a opção **“Usar crédito de antecipação para quitar faturas”** **não for selecionada**, a fatura será gerada como **pendente**. Nessa situação, a quitação poderá ser feita manualmente posteriormente, no módulo **Controle de Faturas de Convênio**, **sendo necessário alterar manualmente a Conta Aplicação para a Conta Adiantamento de Clientes**.

#DEEBFF

`🔸 Operação 012 – VALES DE FUNCIONÁRIO - PAGAMENTO`

`Descrição`: Registra a movimentação das vendas com a forma de pagamento **Vale de Funcionário**, incluindo também lançamentos manuais do tipo **Adiantamento** ou **Falta na Renda**.

`Conta Origem`**:** **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`**:** **Conta Vales de Funcionários**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 045 – VALES DE FUNCIONÁRIO - OUTROS`

`Descrição`: Registra a movimentação de vales de funcionários lançados diretamente no **caixa da gerência**.

`Conta Origem`: **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`: **Conta Vales de Funcionários**.

Assim como na operação 012, essa movimentação também permite visualizar no Livro Caixa os valores vinculados a vales concedidos aos colaboradores.

#DEEBFF

`🔸 Operação 018 – QUITAÇÃO DE VALES DE FUNCIONÁRIO`

`Descrição`: Registra a quitação dos vales de funcionário em aberto, ou seja, o momento em que o funcionário **reembolsa o valor do vale à empresa**.

`Conta Origem`: **Conta Vales de Funcionários** (mesma usada como Conta Aplicação nas operações **012** e **045**).

`Conta Aplicação`**: Conta Salários**, quando o valor do vale é descontado na folha de pagamento ou **Conta Dinheiro**, quando o valor é pago em espécie diretamente pelo funcionário.

Ao realizar a quitação, o sistema atualiza o saldo da Conta Vales de Funcionários com o valor correspondente aos vales baixados.

#DEEBFF

`🔸 Operação 029 – CARTAO PEF`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Cartão de Pagamento de Frete**.

`Conta Origem`**:** **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`**:** **Conta Cartões de Pagamento de Frete**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 031 – RECEBIMENTO DE CARTAO PEF`

`Descrição`: Registra o recebimento dos valores de vendas via **Cartão de Pagamento de Frete** na conta bancária da empresa.

`Conta Origem`**:** **Conta Cartões de Pagamento de Frete** (mesma conta configurada como Aplicação na operação 029).

`Conta Aplicação`**:** **Conta Bancária** em que o valor será creditado.

Com a baixa, o saldo da conta Cartões de Pagamento de Frete é atualizado com os valores pendentes de recebimento.

#DEEBFF

`🔸 Operação 030 – TARIFA DE CARTAO PEF`

`Descrição`: Registra as taxas administrativas cobradas pelas operadoras de cartões após a baixa dos recebimentos.

`Conta Origem`**:** Depende do parâmetro **“Baixa de cartões pelo valor bruto”**:

*   Se `Não` (valor líquido):
    
    *   `Conta Origem` = **Conta Cartões de Pagamento de Frete** (mesma conta configurada como Origem na operação 031).
        
*   Se `Sim` (valor bruto):
    
    *   `Conta Origem` = **Conta Bancária** (mesma conta configurada como Aplicação da operação 031).
        

`Conta Aplicação`**:** **Conta de Taxas Administrativas de Cartão PEF**.

#DEEBFF

`🔸 Operação 042 – DEPÓSITO BANCÁRIO`

`Descrição`:Utilizada para registrar depósitos bancários, podendo ser lançados via PDV ou pela retaguarda.

`Conta Origem`: **Conta Caixa**.

`Conta Aplicação`: **Conta Bancária**.

Apesar da configuração padrão, essa informação **deve ser indicada manualmente** no momento do lançamento (PDV ou retaguarda), conforme a conta bancária em que o valor foi efetivamente depositado.

No PDV, o pagamento só será autorizado se houver saldo suficiente na Conta Caixa.

#DEEBFF

`🔸 Operação 044 – CARTEIRA DIGITAL`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **Carteira Digital**.

`Conta Origem`**:** **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`**:** **Conta Carteira Digital**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 046 – RECEBIMENTO DE CARTEIRA DIGITAL`

`Descrição`: Registra o recebimento dos valores de vendas via **Carteira Digital** na conta bancária da empresa.

`Conta Origem`**:** **Conta Carteira Digital** (mesma conta configurada como Aplicação na operação 044).

`Conta Aplicação`**:** **Conta Bancária** em que o valor será creditado.

Com a baixa, o saldo da conta Carteira Digital é atualizado com os valores pendentes de recebimento.

#DEEBFF

`🔸 Operação 047 – TARIFA DE CARTEIRA DIGITAL`

`Descrição`: Registra as taxas administrativas cobradas pelas operadoras das carteiras digitais após a baixa dos recebimentos.

`Conta Origem`**:** Depende do parâmetro **“Baixa de cartões pelo valor bruto”**:

*   Se `Não` (valor líquido):
    
    *   `Conta Origem` = **Conta Carteira Digital** (mesma conta configurada como Origem na operação 046).
        
*   Se `Sim` (valor bruto):
    
    *   `Conta Origem` = **Conta Bancária** (mesma conta configurada como Aplicação da operação 046).
        

`Conta Aplicação`**:** **Conta de Taxas Administrativas de Carteira Digital**.

#DEEBFF

`🔸 Operação 048 – QUITAÇÃO DE CONTA A PAGAR`

`Descrição`: Utilizada quando a **quitação das contas a pagar é feita em lote**, ou seja, por meio da opção que permite **quitar várias contas simultaneamente**. Ela possui funcionamento semelhante à operação `001 – PAGAMENTO DE FORNECEDOR`, com a seguinte diferença:

*   `Operação 001`**:** utilizada para quitação individual.
    
*   `Operação 048`**:** utilizada para quitação em lote.
    

`Conta Origem`: **Conta Bancária** da empresa mais utilizada para pagamento de contas.

`Conta Aplicação`: **Conta Pagamento de Fornecedor**.

Essa configuração automatiza o processo, **evitando que o usuário precise selecionar manualmente as contas** a cada quitação em lote, garantindo agilidade e padronização dos lançamentos no Livro Caixa.

#DEEBFF

`🔸 Operação 053 – PIX`

`Descrição`: Registra a movimentação de todas as vendas realizadas com a forma de pagamento **PIX**.

`Conta Origem`**:** **Conta Caixa** (mesma conta configurada como Aplicação na operação 007).

`Conta Aplicação`**:** **Conta PIX**.

Essa estrutura permite identificar no Livro Caixa o total movimentado por esse tipo de pagamento.

#DEEBFF

`🔸 Operação 054 – RECEBIMENTO PIX`

`Descrição`: Registra o recebimento dos valores de vendas via **PIX** na conta bancária da empresa.

`Conta Origem`**:** **Conta PIX** (mesma conta configurada como Aplicação na operação 053).

`Conta Aplicação`**:** **Conta Bancária** em que o valor será creditado.

Com a baixa, o saldo da conta PIX é atualizado com os valores pendentes de recebimento.

#DEEBFF

`🔸 Operação 055 – TARIFA PIX`

`Descrição`: Registra as taxas administrativas cobradas pelas operadoras dos pixs após a baixa dos recebimentos.

`Conta Origem`**:** Depende do parâmetro **“Baixa de cartões pelo valor bruto”**:

*   Se `Não` (valor líquido):
    
    *   `Conta Origem` = **Conta PIX** (mesma conta configurada como Origem na operação 054).
        
*   Se `Sim` (valor bruto):
    
    *   `Conta Origem` = **Conta Bancária** (mesma conta configurada como Aplicação da operação 054).
        

`Conta Aplicação`**:** **Conta de Taxas Administrativas de PIX**.