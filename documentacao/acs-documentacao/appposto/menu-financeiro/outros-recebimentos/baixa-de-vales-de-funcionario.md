---
title: Baixa de Vales de Funcionário
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/8912968
---

# Baixa de Vales de Funcionário

16truenonelisttrue

Baixa de Vale de Funcionário
============================

A baixa de vales de funcionário é a funcionalidade responsável por registrar no sistema a quitação de vales pertencentes aos funcionários. Ao realizar a baixa, o status do vale é atualizado e o valor correspondente é descontado do total de vales pendentes de quitação do funcionário. O sistema também ajusta os registros financeiros, garantindo que todas os lançamentos estejam devidamente atualizados.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Baixa de Vales de Funcionário

* * *

Será apresentada a seguinte tela:

Tela geral de Vale de Funcionários

Ao acessar o módulo, a tela principal será exibida, permitindo visualizar, filtrar e gerenciar os lançamentos de vale de funcionário que ainda não foram baixados.

As principais funcionalidades são:

**Realizar Baixa de Vales de Funcionário**

Permite efetuar a quitação dos vales vinculados aos funcionários, realizando s ajustes necessários nos registro financeiros. A baixa pode ocorrer de forma total ou parcial, conforme o valor informado. Quando total, o vale terá seu status atualizado para Quitado e quando parcial, o sistema manterá o vale como Pendente, atualizando apenas o valor já quitado.

**Filtro de Pesquisa**

Facilita a localização dos vales de funcionários por meio de filtros como empresa, período de emissão, funcionários e número do vale, agilizando a consulta das informações.

**Visualização**

Permite consultar os detalhes dos vales registrados, possibilitando a conferência de informações como funcionário, valor do vale, data de emissão, tipo de vale.

* * *

Baixa de Vales de Funcionário
-----------------------------

Na parte superior do box **Baixa de Vales de Funcionário**, é possível aplicar filtros para a listagem dos registros, facilitando a localização e seleção dos lançamentos a serem baixados:

Box baixa de vales de funcionário

A seguir estão os campos e informações que podem ser registrados nesse box:

*   `Empresa`: Filtra a empresa para consulta de vales de funcionários.
    

**Atenção!**

Em ambientes multiempresa, a seleção da Empresa define quais lançamentos serão exibidos na tela, apresentando somente os vales vinculados à empresa selecionada.

*   `Emissão Inicial` e `Emissão Final`: Indica a data inicial e final de acordo com a emissão.
    
*   `Funcionários`: Indica se serão listados todos os funcionários ou algum em específico.
    
*   `Número do Vale`: Indica o número do vale do funcionário.
    
*   `Ordem`: Critério de organização dos lançamentos na exibição, podendo ser ordenadas por:
    
    *   `Funcionário`: Organiza em ordem alfabética pelo nome do funcionário.
        
    *   `Data Emissão`: Organiza por data de emissão.
        

Abaixo dos filtros, há dois resumos que facilitam a visualização rápida dos valores e quantidades de registros listados e selecionados:

Guia TOTAL1800

*   `Valor`: Valor total dos vales que estão listados.
    
*   `Quantidade`: Quantidade dos vales que estão listados.
    

Guia BAIXADOS1800

*   `Valor`: Valor dos vales com a coluna **Pago** preenchida.
    
*   `Quantidade`: Quantidade de vales com a coluna **Pago** preenchida.
    

Após aplicar os filtros desejados, clique no botão para listar os lançamentos conforme os critérios selecionados. Caso queira limpar os campos de filtragem, clique no botão . A listagem dos lançamentos conterá as seguintes informações:

*   `Funcionário`: Nome do funcionário que possui o vale.
    
*   `Vale`: Número do Vale.
    
*   `Emissão`: Data em que o vale foi emitido.
    
*   `Tipo`: Classificação do vale, podendo ser:
    
    *   `Falta na Renda`: Ocorre quando há uma diferença negativa durante a conferência de caixa, ou seja, uma falta de valores em relação ao que deveria estar disponível. Essa diferença é coberta como um vale para o funcionário, e o valor será descontado posteriormente.
        
    *   `Adiantamento`: Refere-se a um valor antecipado ao funcionário, com a expectativa de ser descontado em data futura. O lançamento pode ocorrer direto pelo PDV ou lançado manualmente na prestação de contas do operador no momento da conferência do caixa.
        
    *   `Pagamento`: Quando o funcionário adquire produtos direto no PDV e utiliza a forma de pagamento Vale de Funcionário para finalização da venda.
        
*   `Valor Atual`: Valor total do vale, sem acréscimos ou descontos.
    
*   `Juros`: Informe o valor dos juros, se houver.
    
*   `Multa`: Informe o valor da multa, se houver.
    
*   `Desconto`: Informe o valor de desconto, se houver.
    

Guia Pagamento (R$)1800

*   `Valor a Pagar`: Valor restante a pagar do vale.
    
*   `Pago`: Indique o valor que está sendo pago pelo funcionário, seja o valor total ou uma parte dele.
    
*   `Pendência`: Valor da pendência calculado pela diferença entre o `Valor a Pagar` e o valor `Pago`. É atualizado constantemente em caso de atribuição de valores nos campos `Juros`, `Multa` ou `Desconto`.
    

Para preencher a coluna `Pago` da guia **Pagamento (R$)** em todos os vales listados, utilize o botão . Se desejar desfazer o preenchimento realizado, clique no botão .

Após selecionar os registros a serem baixados, verifique se os valores na guia **BAIXADOS** correspondem ao valor pago pelo funcionário. Para finalizar o processo de baixa, siga as instruções abaixo:

Clique no botão . Será apresentada uma tela para preenchimento das seguintes informações:

Tela para gerar baixa

*   `Conta Origem`: Indica a conta onde o valor está registrado antes da sua baixa.
    
*   `Conta Aplicação`: Indica a conta que receberá o valor após a baixa.
    
*   `Data da Baixa`: Data efetiva em que o valor foi recebido ou descontado.
    

Após preencher todas as informações, clique no botão para finalizar o processo de baixa.

* * *

Estornar baixa de vale de funcionário
-------------------------------------

O estorno da baixa de vale de funcionário é o processo de reverter um registro que já foi liquidado ou quitado, restabelecendo o status do recebimento para "pendente". Esse procedimento é utilizado quando são identificados erros ou inconsistências, como valores incorretos, baixa indevida, ou quando o pagamento foi registrado em uma conta bancária incorreta.

Para realizar o estorno, deverá ser acessada individualmente cada transação. Para isso, acesse o seguinte módulo:

Menu Movimento > Vale de Funcionário

Será apresentada a seguinte tela:

Tela geral de listagem Vale Funcionário \[Caixa de Venda\]

*   `Data Inicial` e `Data Final`: Insira o período que inclui a(s) transação(ões) que será(ão) estornada(s).
    
*   `Baixa`: Selecione a opção **Quitados**, para listar apenas os vales já baixados.
    
*   `Número do Vale`: Caso possua o número do vale específico que será estornado.
    

Após aplicar os filtros, clique no botão .

Acesse a transação específica que será estornada clicando no ícone . A seguinte tela será apresentada:

Tela do lançamento de vale funcionário

No box **Baixas**, clique no ícone .

Será apresentada a seguinte tela de confirmação:

Tela de confirmação de estorno.

Clique no botão para confirmar a operação.