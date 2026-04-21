---
title: Baixa de Cartões
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/9175066
---

# Baixa de Cartões

16truenonelisttrue

* * *

Baixa de Cartões
================

O processo de baixa consiste em confirmar o recebimento dos valores das transações com cartões nas datas previstas, conforme indicado nos extratos bancários. Esse procedimento é essencial para garantir que os créditos efetuados pelas administradoras dos cartões sejam devidamente registrados na conta bancária da empresa.

Para realizar a baixa, utilize o extrato bancário como a fonte principal de informação. Ele fornecerá os detalhes necessários sobre os créditos recebidos, permitindo que você compare com os registros no sistema e confirme que os valores foram corretamente depositados nas contas da empresa. 

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Baixa de Cartões

* * *

Será apresentada a seguinte tela:

Tela geral do módulo baixa de cartões

Ao acessar o módulo, a tela principal será exibida, permitindo visualizar, filtrar e gerenciar os lançamentos de cartões que ainda não foram faturadas.

As principais funcionalidades são:

**Criar Nova Fatura de Cartões**

Permite selecionar as transações de cartões que irão compor a fatura, possibilitando a geração do faturamento, conforme o recebimento do valor informado no extrato bancário.

**Filtro de Pesquisa**

Facilita a visualização das transações de cartões por Empresa, Período de emissão e previsão, Adquirente, Tipo, Bandeira e Lote, agilizando a localização das informações necessárias.

**Visualização**

Permite visualizar de forma detalhada as transações de cartões ainda não faturados, possibilitando a conferência das informações de cada operação, como a parcela, valor bruto, valor líquido a receber e demais dados da venda. A tela também permite o lançamento de despesas associadas, assegurando que o faturamento dos cartões seja realizado de acordo com os valores efetivamente creditados pelas adquirentes.

* * *

Box 1 - Baixa de Cartões
------------------------

Na parte superior do box **Baixa de Cartões**, é possível aplicar filtros para a listagem dos cartões, facilitando a localização e seleção dos cartões a serem faturados:

Box Baixa de Cartões

*   `Empresa`: Filtra a empresa para consulta das transações de cartões.
    

**Atenção!**

Em ambientes multiempresa, a seleção da Empresa define quais lançamentos de cartões serão exibidos na tela, apresentando somente as transações vinculadas à empresa selecionada.

*   `Data Inicial` e `Data Final`: Filtra os cartões com base no intervalo de datas.
    
*   `Data Utilizada`: Indica qual data deve ser considerada na consulta.
    
    *   `Emissão`: Filtra os cartões pela data de emissão.
        
    *   `Previsão`: Filtra os cartões pela data de vencimento.
        
*   `Ordem`: Determina a ordem de exibição das transações:
    
    *   `Administradora + Emissão`: Ordena por administradora e, em seguida, pela data de emissão.
        
    *   `Administradora + Previsão`: Ordena por administradora e, em seguida, pela data de previsão de recebimento.
        
    *   `Emissão + Administradora`: Ordena pela data de emissão e, em seguida, pela administradora.
        
    *   `Previsão + Administradora`: Ordena pela data de previsão de recebimento e, em seguida, pela administradora.
        
*   `Adquirente`: Especifica a empresa que processa as transações realizadas com cartões, como **Cielo**, **Rede**, **Stone**, **Getnet**.
    
*   `Tipo`: Filtra o tipo do cartão utilizado na venda.
    
    *   `Todos`: Exibe todas as opções.
        
    *   `Crédito`: Filtra as transações de cartões de crédito.
        
    *   `Débito`: Filtra as transações de cartões de débito.
        
    *   `PEF (Pagamento Eletrônico de Frete)`: Filtra as transações de cartões de pagamento de frete.
        
*   `Bandeira`: Indica a marca do cartão que é aceita pela adquirente, como Visa, MasterCard, American Express.
    
*   `Lote`: Número do lote ao qual a transação pertence.
    

Na parte inferior do box, há quatro resumos que facilitam a visualização rápida dos valores e quantidades de cartões listados, selecionados, das despesas e do valor final liquido:

Guia TOTAL LISTADO1800*   `Bruto (R$)`: Total bruto de todos os cartões listados.
    
*   `Liquido (R$)`: Total liquido de todos os cartões listados, representando o valor após a dedução das taxas administrativas.
    
*   `Qtd`: Quantidade total de cartões listados no período selecionado. Guia TOTAL CREDITADO1800

*   `Bruto (R$)`: Total bruto dos cartões selecionados para serem baixados.
    
*   `Liquido (R$)`: Total liquido dos cartões selecionados, representando o valor após a dedução das taxas administrativas.
    
*   `Qtd`: Quantidade total de cartões selecionados no período selecionado.
    

Guia TOTAL DESPESAS1800

*   `Valor (R$)`: Valor total das despesas adicionadas manualmente no box **Despesas**.
    
*   `Qtd`: Quantidade de despesas incluídas manualmente.
    

 Guia TOTAL LÍQUIDO1800

*   `Valor (R$)`: Valor líquido a ser creditado após quitação da fatura. Calculado subtraindo o valor das despesas (guia **TOTAL DESPESAS**) do valor `Líquido (R$)` (guia **TOTAL CREDITADO**).

Após aplicar os filtros desejados, clique no botão para listar as transações de cartões conforme os critérios selecionados. Cada transação apresenta informações essenciais, como a administradora, o número de autorização, a quantidade de parcelas, a taxa administrativa, o valor bruto e o valor líquido a receber.

Ao lado de cada transação, há uma caixa de seleção que pode ser marcada para incluir o cartão na fatura que será gerada. Para marcar todas os cartões exibidos na listagem de uma vez, utilize o botão . Se desejar remover a seleção de todos os cartões, clique no botão .

* * *

Box 2 - Despesas
----------------

Neste box, é possível registrar **despesas associadas à baixa de transações de cartões**, como taxas administrativas, tarifas de serviço, aluguel de máquinas e outros encargos financeiros. Esses lançamentos impactam diretamente o **valor líquido do faturamento**, facilitando o acompanhamento e gerenciamento de todas as despesas envolvidas no processo de baixa de cartões.

Para adicionar uma nova despesa, clique no botão . A seguinte tela será exibida para o preenchimento das informações:

Tela para lançamento de despesa manualmente

*   `Número`: Número sequencial gerado pelo sistema automaticamente para cada despesa criada.
    
*   `Valor`: Valor da despesa a ser registrada.
    
*   `Documento`: Número do documento da despesa, caso aplicável.
    
*   `Histórico`: Breve descrição do que se refere a despesa.
    

Guia CONTAS:1800

*   `Conta Origem`: Indica a conta de origem da despesa, ou seja, a conta de onde o valor será debitado para realizar o pagamento da despesa.
    
*   `Conta Aplicação`: Indica a conta de aplicação onde será creditado o valor da despesa, como por exemplo, Aluguel POS Cartões
    

Após o preenchimento das informações, clique no botão para concluir o registro da despesa.

Após selecionar os cartões a serem faturados, verifique se os valores na guia **TOTAL CREDITADO** correspondem ao valor informado pela adquirente no extrato bancário. Para finalizar o processo de faturamento dos cartões, siga as instruções abaixo:

Clique no botão . Será apresentada uma tela para preenchimento das seguintes informações:

Tela para conclusão de faturamento

*   `Gerar Fatura`: Defina o tipo de fatura que será gerada:
    
    *   `Quitada`: A fatura é gerada e quitada simultaneamente, indicando que o valor já foi creditado na conta bancária.
        
    *   `Pendente`: A fatura é gerada com status pendente, indicando que a quitação será realizada posteriormente. Essa opção é usada quando o valor ainda não foi creditado na conta bancária.
        
*   `Centro de Resultado`: Especifica o centro de resultado ao qual a fatura será atribuída.
    
*   `Conta Bancária`: Seleciona a conta bancária onde o recebimento dos cartões será creditado.
    
*   `Conta Aplicação`: Especifica a conta aplicação que será utilizada no processo de baixa de cartões. Esse campo define a conta onde os valores líquidos do faturamento serão registrados. Esta opção está disponível **somente quando o campo** `Gerar Fatura` **estiver selecionado como** `Quitada`.
    
*   `Data da Baixa`: Data da baixa da fatura. Se a opção `Pendente` for selecionada em `Gerar Fatura`, este campo terá o nome alterado para `Data do Faturamento`**.**
    

Após preencher todas as informações, clique no botão para finalizar o processo de baixa dos cartões e geração da fatura**.**