---
title: Baixa de Carteira Digital
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/8978482
---

# Baixa de Carteira Digital

16truenonelisttrue

Baixa de Carteira Digital
=========================

A baixa de carteira digital é essencial para registrar que o pagamento foi efetuado, garantindo a atualização correta das transações financeiras e evitando inconsistências nos registros contábeis.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Baixa de Carteira Digital

* * *

Será apresentada a seguinte tela:

Tela geral do módulo baixa de Carteira Digital

Ao acessar o módulo, a tela principal será exibida, permitindo visualizar, filtrar e gerenciar os lançamentos de carteira digital que ainda não foram faturadas.

As principais funcionalidade são:

**Criar Nova Fatura de Carteira Digital**

Permite selecionar as transações de carteira digital que irão compor a fatura, possibilitando a geração do faturamento, conforme o recebimento do valor informado no extrato bancário.

**Filtro de Pesquisa**

Facilita a visualização das transações por Empresa, Período de emissão, Adquirente e Administradora, agilizando a localização das informações necessárias.

**Visualização**

Permite visualizar de forma detalhada as transações de carteira digital ainda não faturados, possibilitando a conferência das informações de cada operação, como o valor bruto, taxa em porcentagem, taxa em valor monetário e valor líquido a receber e demais dados da venda. A tela também permite o lançamento de despesas associadas, assegurando que o faturamento da carteira digital seja realizada de acordo com os valores efetivamente creditados pelas adquirentes.

* * *

Box 1 - Baixa de Carteira Digital
---------------------------------

Na parte superior do box **Baixa de Carteira Digital**, é possível aplicar filtros para a listagem dos registros, facilitando a localização e seleção dos lançamentos a serem baixados:

Tela baixa de carteira digital

A seguir estão os campos e informações que podem ser registrados nesse box:

*   `Empresa`: Filtra a empresa para consulta das transações de carteira digital.
    

**Atenção!**

Em ambientes multiempresa, a seleção da Empresa define quais lançamentos de carteira digital serão exibidos na tela, apresentando somente as transações vinculadas à empresa selecionada.

*   `Emissão Inicial` e `Emissão Final`: Define o intervalo de datas para a filtragem das transações.
    
*   `Adquirente`: Entidade responsável pelo processamento das transações financeiras realizadas por meio da carteira digital.
    
*   `Administradoras`: Entidades que processam esse tipo transações financeiras, permitindo o recebimento ou envio de valores.
    
*   `Ordem`: Critério de organização das transações na exibição, podendo ser ordenadas por:
    
    *   `Administradora`: Organiza em ordem alfabética pelo nome da administradora.
        
    *   `Data Emissão`: Organiza por data de emissão.
        

Abaixo dos filtros, há dois resumos que facilitam a visualização rápida dos valores e quantidades de registros listados e selecionados:

Guia TOTAL1800*   `Valor Bruto`: Total bruto de todas as transações de carteira digital listadas.
    
*   `Valor Líquido`: Total liquido de todas as transações de carteira digital listadas, representando o valor após a dedução das taxas administrativas.
    
*   `Quantidade`: Quantidade total de transações de carteira digital listadas no período selecionado. Guia BAIXADOS:1800

*   `Valor`: Total bruto de todas as transações de carteira digital selecionadas para serem baixadas.
    
*   `Valor Líquido`: Total liquido de todas as transações de carteira digital selecionadas, representando o valor após a dedução das taxas administrativas.
    
*   `Quantidade`: Quantidade total de transações de carteira digital selecionados no período selecionado.
    

Após aplicar os filtros desejados, clique no botão para listar as transações conforme os critérios selecionados. Cada transação apresenta informações essenciais, como a `Administradora`, `Data de emissão`, `Autorização`, `Valor Atual (R$)`, `Previsão`, `Taxa (%)`, `Taxa (R$)` e `A Receber (R$)`.

Ao lado de cada transação, há uma caixa de seleção que pode ser marcada para incluir a mesma no processo de baixa. Para marcar todos os registros exibidos na listagem, utilize o botão . Se desejar remover a seleção de todos os registros, clique no botão .

* * *

Box 2 - Despesas
----------------

Neste box, é possível registrar **despesas associadas à baixa de transações de carteiras digitais**, como taxas administrativas, tarifas de serviço e outros encargos financeiros. Esses lançamentos impactam diretamente o **valor líquido do faturamento**, facilitando o acompanhamento e gerenciamento de todas as despesas envolvidas no processo de baixa de carteira digital.

Para adicionar uma nova despesa, clique no botão . A seguinte tela será exibida para o preenchimento das informações:

Tela para lançamento de despesa manualmente

*   `Número`: Número sequencial gerado pelo sistema automaticamente para cada despesa criada.
    
*   `Valor`: Valor da despesa a ser registrada.
    
*   `Documento`: Número do documento da despesa, caso aplicável.
    
*   `Histórico`: Breve descrição do que se refere a despesa.
    

Guia CONTAS:1800

*   `Conta Origem`: Indica a conta de origem da despesa, ou seja, a conta de onde o valor será debitado para realizar o pagamento da despesa.
    
*   `Conta Aplicação`: Indica a conta de aplicação onde será creditado o valor da despesa, como por exemplo, Taxa Administrativa.
    

Após o preenchimento das informações, clique no botão para concluir o registro da despesa.

Após selecionar os registros a serem faturados, verifique se os valores na guia **BAIXADOS** correspondem ao valor informado pela operadora no extrato bancário. Para finalizar o processo de faturamento, siga as instruções abaixo:

Clique no botão . Será apresentada uma tela para preenchimento das seguintes informações:

Tela para gerar baixa

*   `Gerar Fatura`: Defina o tipo de fatura que será gerada:
    
    *   `Quitada`: A fatura é gerada e quitada simultaneamente, indicando que o valor já foi creditado na conta bancária.
        
    *   `Pendente`: A fatura é gerada com status pendente, indicando que a quitação será realizada posteriormente. Essa opção é usada quando o valor ainda não foi creditado na conta bancária.
        
*   `Centro de Resultado`: Especifica o centro de resultado ao qual a fatura será atribuída.
    
*   `Conta Bancária`: Seleciona a conta bancária onde o recebimento dos valores da carteira digital serão creditados.
    
*   `Data da Baixa`:
    
    *   Quando selecionada a opção `Pendente`, a data informada corresponderá à **data de faturamento**.
        
    *   Quando selecionada a opção `Quitada`, a data informada corresponderá à **data de quitação (baixa)** da fatura.
        

Após preencher todas as informações, clique no botão para finalizar o processo de baixa de carteira digital e geração da fatura.