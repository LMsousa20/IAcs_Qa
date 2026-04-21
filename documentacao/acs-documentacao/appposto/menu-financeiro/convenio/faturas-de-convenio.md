---
title: Faturas de Convênio
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/9109517
---

# Faturas de Convênio

16truenonelisttrue

* * *

Faturas de Convênio
===================

As faturas de convênio são documentos que consolidam os valores dos vales de um cliente em um determinado período. Essas faturas são geradas pelo sistema após o processo de faturamento e contêm todos os débitos acumulados. Após a conclusão do processo de faturamento, seja por vale ou por data, o valor do débito referente à soma dos vales dos clientes é registrado nas Faturas de Convênio. A fatura recém gerada fica “em aberto” até que o cliente efetue o pagamento, que pode ser total ou parcial.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Faturas de Convênio

* * *

Será apresentada a seguinte tela:

Tela geral de faturas de convênio

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento das **faturas de convênio** já cadastradas. Esta tela é organizada para facilitar a navegação, a consulta e o controle das faturas.

As principais funcionalidades são:

**Adicionar Fatura de Antecipação**  
Permite a geração de faturas de antecipação para clientes que realizam pagamentos antecipados.

**Quitar Vales Faturados**

Permite realizar a quitação das faturas geradas de vales dos clientes.

**Filtro de Pesquisa**

Facilita a localização das faturas por meio de filtros como Empresa, período, datas utilizada, cliente, autorizado, Situação, tipo de fatura, código da fatura, CPF ou CNPJ do cliente, Valores mínimos ou valores máximo.

**Visualização e Exclusão de Faturas**

Permite consultar os detalhes completos de uma fatura de convênio, incluindo valores, datas, cliente e status.  
Quando necessário, possibilita a exclusão de uma fatura, fazendo com que os vales vinculados a ela retornem automaticamente ao status de pendente, ficando disponíveis para um novo faturamento.

* * *

Quitação de fatura de convênio
------------------------------

O processo de quitação das faturas significa registrar que o valor devido pelo cliente naquela fatura foi pago, seja integralmente ou parcialmente. Esse processo atualiza o status da fatura no sistema, indicando que não há mais saldo pendente a ser recebido ou que o valor pendente é menor que o valor total da fatura.

Abaixo serão apresentados os passos necessários para realizar a quitação.

Navegue até o módulo de Faturas de Convênio e localize a fatura específica que deseja quitar. Clique no ícone . Será apresentada a seguinte tela:

Visualização da fatura que será quitada

O box **Editar Fatura Convênio** permite aos usuários visualizar dados específicos relacionados à fatura. Ele é essencial para a gestão de informações financeiras, garantindo que todos os detalhes estejam corretos antes do processo de quitação.

*   `Empresa`: Indica a empresa que gerou a fatura de convênio.
    
*   `Código da Fatura`: Indica o código da fatura.
    
*   `Tipo`: Indica o tipo de fatura.
    
    *   `Débito Convênio`: Fatura gerada a partir de vales do tipo convênio.
        
    *   `Débito CTF`: Fatura gerada a partir de vales do tipo CTF.
        
    *   `Crédito`: Fatura gerada por antecipação de pagamento.
        
*   `Código da Fatura de Débito`: Campo utilizado para vincular uma fatura de crédito (antecipação) à fatura de débito correspondente.
    

Este campo é preenchido automaticamente quando o cliente realiza um pagamento superior ao valor original da fatura, gerando uma fatura de crédito por antecipação para utilização em faturamentos futuros.

*   `Centro de Resultado`: Indica o centro de resultado ao qual a fatura está associada.
    

Na guia **CLIENTE** constam o `Código` e `Nome` do cliente ao qual a fatura está vinculada.

Na guia **AUTORIZADO** constam o `Código` e `Nome` da pessoa associada ao cliente ao qual a fatura está vinculada, caso haja.

Na guia **DATAS** constam as informações referentes as datas de `Faturamento` e `Vencimento`.

Guia VALORES:1800

Nesta guia, constam todos os valores que compõem a fatura, como:

*   `Soma dos Vales (R$)`: Indica o valor da soma dos vales referentes ao faturamento do cliente.
    
*   `Crédito por Antecipação (R$)`: Quando ocorre o processo de faturamento, o sistema verifica se o cliente possui crédito por Pagamento Antecipado, existindo o crédito, o seu valor é utilizado para diminuir o valor a pagar.
    
*   `Desconto contratual (R$)`: Indica o valor da soma dos descontos nos vales que deram origem a fatura. O desconto é obtido quando, no vale do cliente, o campo “**Valor Contrato da Venda**” do cliente é menor que o “**Valor Normal da Venda**”, sendo a diferença entre os dois o valor do desconto.
    
*   `Acréscimo contratual (R$)`: Indica o valor da soma dos acréscimos nos vales que deram origem a fatura. O acréscimo é obtido quando, no vale do cliente, o campo “**Valor Contrato da Venda**” do cliente é maior que o “**Valor Normal da Venda**”, sendo a diferença entre os dois o valor do acréscimo.
    
*   `Juros por atraso (R$)`: Indica o valor dos juros pago pelo cliente, por pagamento da fatura após o seu vencimento.
    
*   `Multa por atraso (R$)`: Indica o valor da multa paga pelo cliente, por pagamento da fatura após o seu vencimento.
    
*   `Desconto concedido (R$)`: Indica o valor do desconto concedido ao cliente independentemente do desconto contratual.
    
*   `Valor a Receber (R$)`: Indica o valor líquido que a empresa receberá por essa fatura.
    
*   `Valor Pendente (R$)`: Indica o valor que resta a ser pago após as inclusões dos pagamentos.
    

Caso haja necessidade, podem ser modificados nesse box os valores de Desconto, Multa ou Juros, assim como as datas de faturamento e vencimento. Para isso, é necessário clicar no botão localizado no canto superior direito do box, para as seguintes opções serem apresentadas:

Botão de opções da fatura

*   `Imprimir`: Permite a impressão da fatura em duas apresentações diferentes: `Relação de Vales` ou `Relação de Vales por Produtos`.
    
*   `Ver Boletos`: Apresenta a listagem de boletos que foram emitidos a partir dessa fatura.
    

Opção ver boletos

:note:atlassian-note#B3D4FF

**Observação**: Caso a fatura esteja associada a um boleto, a mesma só poderá ser quitada pelo módulo de Controle de Boletos.

*   `Alterar Data`: Apresenta uma tela para modificar a data de faturamento e vencimento.
    

Opção alterar data

*   `Desconto`: Apresenta uma tela para modificar o valor do desconto da fatura.
    

Opção alterar desconto

*   `Multa`: Apresenta uma tela para modificar o valor da multa da fatura.
    

Opção alterar multa

*   `Juros`: Apresenta uma tela para modificar o valor dos juros acumulados da fatura.
    

Opção alterar juros

*   `Excluir Fatura`: Apresenta uma tela para confirmar a exclusão da fatura. excluir-fatura
    

Opção excluir fatura

:note:atlassian-note#B3D4FF

**Observação:** Retorna todos os vales da fatura para a condição de não faturados.

O box **Quitações da Fatura** é utilizado para gerenciar e registrar os pagamentos realizados para uma fatura específica. Oferece uma listagem das quitações já efetuadas e permite a adição de novos pagamentos.

Na listagem das quitações, é mostrada o `Número` sequencial do pagamento, `Data de Quitação`, `Forma de Pagamento` e valores de `Juros`, `Multa`, `Desconto` e `Crédito de antecipação`, além do `Valor Pago`.

Para incluir um novo pagamento, clique no botão . Será apresentada a seguinte tela:

Tela de quitação de faturas - convênio

No box **Quitação de Fatura - Convênio**, existem duas guias:

Guia FATURA1800

*   `Empresa`:
    

**Atenção!**

Em ambiente multiempresa, a empresa exibida na fatura refere-se à empresa logada no momento do faturamento. Os vales vinculados podem ser de outras empresas, conforme a forma de geração do faturamento.  
A empresa de origem do vale pode ser consultada em `Opções` > `Imprimir` > `Relação de Vales` ou `Relação de Vales por Produtos` ou no relatório `Relatórios` `Cobrança` > `Vales por Faturas e Avulsos`.

*   `Cliente`: Informa o cliente vinculado ao convênio para o qual a fatura foi gerada.
    
*   `Autorizado`: Informa o autorizado a realizar compras pelo convênio em nome do cliente.
    
*   `Fatura`: Informa o código da fatura.
    
*   `Data de Emissão`: Data em que a fatura foi gerada no sistema.
    
*   `Data do Vencimento`: Data de vencimento para pagamento da fatura pelo cliente.
    
*   `Valor da Fatura`: Valor total da fatura.
    

Guia QUITAÇÃO:1800

Esta guia detalha as informações referentes ao pagamento da fatura, onde:

*   `Data do Pagamento`: Data do recebimento do pagamento que está sendo adicionado para que o sistema calcule os valores de Multa e Juros por Atraso caso a data informada seja posterior a data do vencimento da fatura.
    
*   `Conta Origem da Fatura`: Conta do caixa de onde o valor será debitado ao realizar a quitação. Por padrão, traz a conta de origem indicada nas Contas Padrão da operação 002 QUITAÇÃO DE FATURAS, mas pode ser alterada.
    
*   `Multa por Atraso (R$)`: Valor calculado pelo sistema da penalidade financeira quando o pagamento não é efetuado até a data de vencimento da fatura.
    
*   `Juros por Atraso (R$)`: Valor da cobrança adicional calculada pelo sistema quando o pagamento não é efetuado até a data de vencimento da fatura.
    
*   `Descontos (R$)`: Valor de desconto concedido pela empresa ao cliente na fatura.
    
*   `Valor Pago (R$)`: Refere-se ao valor que já foi pago da fatura somando todos os pagamentos adicionados.
    
*   `Valor Pendente (R$)`: Refere-se a diferença entre o `Valor Pago (R$)` e o `Valor da Fatura (R$)`. O valor da pendência (valor a ser recebido), é atualizado a cada novo pagamento adicionado.
    

Com a `Data do Pagamento` preenchida, clique no botão localizado no box **Forma de Pagamento** para prosseguir. As seguintes opções de formas de pagamento serão apresentadas:

Formas de pagamento para quitação da fatura

Selecione a opção correspondente a forma de pagamento recebida do cliente. Abaixo serão mostradas as telas para cada forma de pagamento que pode ser selecionada:

No caso de pagamento com `Dinheiro` ou `Boleto` será necessário informar apenas o valor recebido e clicar no botão .

Quitação da fatura em dinheiro

Quitação da fatura com boleto avulso (emitido por fora do sistema)

Para pagamento em `Cartão` será necessário informar obrigatoriamente os campos de `Administradora` e `Valor (R$)` e clicar no botão **.**

Quitação da fatura com cartão

:note:atlassian-note#B3D4FF

**Observação**: Importante o preenchimento dos campos de `NSU da Operadora` e `Autorização` para um controle de cartões mais eficiente. A obrigatoriedade desses campos é configurável em `Parâmetros do Sistema`, aba `Requisitos`, na guia `Cartão`, onde são apresentadas as opções de seleção **NSU da Transação** e **Autorização do Cartão**.

Para pagamento em **Carteira Digital** será necessário informar obrigatoriamente os campos de `Administradora` e `Valor (R$)` e clicar no botão **.**

Quitação da fatura com carteira digital

Para pagamento em `Cheque` será necessário informar obrigatoriamente `Valor (R$)`, `Comp`, `Banco`, `Agência`, `Conta`, `Cheque`, `Cidade`, `UF` e clicar no botão **.**

Quitação da fatura com Cheque

Para pagamento em `PIX` será necessário informar obrigatoriamente os campos de `Administradora` e `Valor (R$)` e clicar no botão **.**

Quitação da fatura com PIX

Para pagamento em `Crédito`, é necessário que o cliente possua saldo de crédito disponível.

*   Quando o valor do crédito disponível for igual ou superior ao valor total da fatura, o campo `Valor (R$)` será preenchido automaticamente com o valor integral da fatura.
    
*   Quando o valor do crédito disponível for inferior ao valor total da fatura, o campo `Valor (R$)` será preenchido automaticamente com o valor máximo do crédito disponível para utilização.
    

Após a conferência do valor, clique no botão .

Quitação da fatura com crédito de antecipação

**Atenção!**

O uso do crédito de antecipação não impede a quitação parcial da fatura, sendo possível complementar o pagamento com outras formas, caso necessário.

Para pagamento em `Depósito Bancário` será necessário informar obrigatoriamente os campos de `Conta Origem`, `Conta Aplicação`, `Histórico`, `Documento` e `Valor (R$)` e clicar no botão **.**

Quitação da fatura com depósito bancário

Após preenchimento da(s) forma(s) de pagamento, o sistema exibirá no box **Forma de Pagamento** a listagem dos pagamentos lançados com suas respectivas `Conta Aplicação` e `Valor (R$)`. Por Padrão, traz a conta de aplicação indicada nas Contas Padrão da operação da respectiva forma de pagamento, podendo ser alterada no momento da quitação.

Pagamentos adicionados para quitação da fatura

Para finalizar o processo de quitação, confira se as contas de aplicação estão informadas corretamente e clique no botão .

Após a quitação concluída, seja parcial ou total, o sistema retornará automaticamente para a tela com os boxes **Editar Fatura Convênio** e **Quitações da Fatura.**

Caso a quitação tenha sido realizada com diversas formas de pagamento, será listada da seguinte maneira:

Listagem de quitações incluídas para pagamento da fatura com diversos pagamentos

Onde na coluna **Forma de Pagamento** apresentará botão para mostrar a listagens dos pagamentos adicionados na quitação.

Detalhamento dos pagamentos incluídos na quitação

Caso a quitação tenha sido realizada com apenas uma forma de pagamento, será listada da seguinte maneira:

Listagem de quitações incluídas para pagamento da fatura com um único pagamento

* * *

Fatura de antecipação
---------------------

Ao acessar o módulo de **Faturas de Convênio**, além dos filtros e listagem das faturas lançadas, existe um botão no canto superior direito para lançamento de .

O processo de antecipação é utilizado quando o cliente realiza um pagamento antes de efetuar a compra, ou seja, ocorre um pagamento antecipado de uma venda que será realizada no futuro. Isso permite que o crédito antecipado seja utilizado para abater futuros débitos do cliente.

A utilização desse crédito pode ser efetuada de duas maneiras no sistema:

Caso a opção **Descontar do crédito de antecipação o valor do vale**, localizada na aba **Limite** do **Cadastro do Cliente,** tenha valor **Sim**, ao lançar uma venda no PDV para o cliente com forma de pagamento Convênio, o sistema descontará automaticamente o valor do vale do valor total de crédito de antecipação que o cliente possui, fazendo com que o vale não fique em aberto para ser faturado.

Caso a opção tenha valor **Não**, o vale lançado no PDV ficará em aberto para ser faturado, e somente no processo de faturamento o crédito da antecipação será consumido de forma automática, reduzindo o valor total a ser pago pelo cliente.

Para gerar uma Antecipação de Fatura, clique no botão . Será apresentada a seguinte tela:

Tela para lançamento de Fatura de Antecipação

No box **Fatura de Convênio por Antecipação,** existem os seguintes campos a serem preenchidos:

*   `Data Faturamento`: Data em que está sendo realizado o pagamento antecipado pelo cliente para a emissão da fatura.
    
*   `Empresa`: Nome da empresa que recebeu o pagamento do cliente.
    
*   `Conta Origem da Fatura`: Conta do caixa de onde o valor será debitado ao realizar a emissão da fatura. Por padrão, traz a conta de origem indicada nas Contas Padrão da operação 022 CREDITOS POR ANTECIPAÇÃO, mas pode ser alterada.
    
*   `Centro de Resultado`: Indica qual centro de resultado será atrelado a fatura que está sendo criada, como **Pista Combustíveis, Loja de Conveniência, Administração, etc.** Associa a fatura a um centro de resultado específico, facilitando a análise financeira.
    
*   `Conta Bancária`: Conta bancária que será vinculada à fatura.
    
*   `Cliente`: Cliente que realizou o pagamento antecipado. Após emissão da fatura, o valor constará no cadastro do cliente, no box **Alterar Cliente**, opção **Status do Cliente**.
    
*   `Valor Total Fatura (R$)`: Valor total da fatura que está sendo criada. Terá seu valor atualizado a cada inclusão de pagamento inserida.
    

Após indicação dos campos do box **Fatura de Convênio por Antecipação**, prosseguir para o box **Forma de Pagamento**, onde é exibida a listagem dos pagamentos lançados com suas respectivas `Conta Aplicação` e `Valor (R$)`.

Para adicionar um novo pagamento, clique no botão .

As seguintes opções de formas de pagamento serão apresentadas:

Finalizadoras disponíveis para pagamento da fatura

Selecione a opção correspondente a forma de pagamento recebida do cliente. Abaixo serão mostradas as telas para cada forma de pagamento que pode ser selecionada:

No caso de pagamento com `Dinheiro` ou `Boleto` será necessário informar apenas o valor recebido e clicar no botão .

Pagamento antecipado pago com dinheiro

Pagamento antecipado pago com boleto

Para pagamento em `Cartão` será necessário informar obrigatoriamente os campos de `Administradora` e `Valor (R$)` e clicar no botão **.**

Pagamento antecipado pago com cartão

:note:atlassian-note#B3D4FF

**Observação**: Importante o preenchimento dos campos de NSU da Operadora e Autorização para um controle de cartões mais eficiente. A obrigatoriedade desses campos é configurável nos **Parâmetros do Sistema**, aba **Requisitos**, na guia **Cartão**, onde são apresentadas as opções de seleção **NSU da Transação** e **Autorização do Cartão**.

Para pagamento em `Carteira Digital` será necessário informar obrigatoriamente os campos de `Administradora` e `Valor (R$)` e clicar no botão **.**

Pagamento antecipado pago com carteira digital

Para pagamento em `Cheque` será necessário informar obrigatoriamente `Valor (R$)`, `Comp`, `Banco`, `Agência`, `Conta`, `Cheque`, `Cidade`, `UF` e clicar no botão **.**

Pagamento antecipado pago com cheque

Para pagamento em `PIX` será necessário informar obrigatoriamente os campos de `Administradora` e `Valor (R$)` e clicar no botão **.**

Pagamento antecipado pago com PIX

Após preenchimento da(s) forma(s) de pagamento, o sistema exibirá no box **Forma de Pagamento** a listagem dos pagamentos lançados com suas respectivas `Conta Aplicação` e `Valor (R$)`.

Pagamentos adicionados para criação da fatura de antecipação

Para finalizar o processo de antecipação, confira se as contas de aplicação estão informadas corretamente e clique no botão para ser registrada a antecipação no cadastro do cliente.

* * *

Quitar múltiplas faturas
------------------------

Ao acessar o módulo de **Faturas de Convênio**, além dos filtros e da listagem das faturas lançadas, existe o botão no canto superior direito, que permite a quitação simultânea de várias faturas de forma ágil e eficiente.

O processo de quitação de múltiplas faturas **reduz o tempo de processamento**, eliminando a necessidade de lidar com cada fatura individualmente. É uma ferramenta especialmente útil em momentos de alta demanda financeira ou em processos periódicos de fechamento de contas.

Para realizar a quitação de múltiplas faturas, clique no botão . Será apresentada a seguinte tela:

Tela para Quitar Múltiplas Faturas

Os campos na parte superior da tela são os filtros que podem ser aplicados para refinar a busca das faturas, permitindo que o usuário encontre rapidamente faturas específicas com base em critérios definidos. Os principais filtros incluem:

*   `Data Inicial` e `Data Final`: Filtra as faturas com base no intervalo de datas.
    
*   `Data Utilizada`: Indica qual data deve ser considerada na consulta.
    
    *   `Emissão`: Filtra as faturas pela data de emissão.
        
    *   `Vencimento`: Filtra as faturas pela data de vencimento.
        
*   `Cliente`: Filtra as faturas de um cliente específico.
    
*   `Autorizado`: Filtra as faturas de um autorizado específico do cliente.
    
*   `Tipo Fatura`: Filtra o tipo da fatura, podendo ser:
    
    *   `Todas`: Mostra todas as faturas independentemente do tipo.
        
    *   `Débito Convênio`: Mostra as faturas cujo vales são do tipo Convênio.
        
    *   `Débito CTF`: Mostra as faturas cujo vales são do tipo CTF.
        
*   `Código da Fatura`: Filtra a fatura pelo seu código específico.
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Filtra as faturas de acordo com o intervalo de valores.
    
*   `CPF/CNPJ do Cliente`: Filtra as faturas pelo CPF ou CNPJ do cliente.
    

Após definir os filtros desejados, clique no botão para listar as faturas conforme os critérios selecionados. Cada fatura listada exibirá informações essenciais, como a `Empresa`, `Código`, `Datas de Emissão` e `Vencimento`, além dos `Valores da Fatura` e `Pendentes`.

Tela geral para quitar múltiplas faturas com faturas listadas

Ao lado de cada fatura, há uma caixa de seleção que pode ser marcada para incluir a fatura no processo de quitação. Para marcar todas as faturas exibidas na listagem de uma vez, utilize o botão . Se desejar remover a seleção de todas as faturas, clique no botão .

Após selecionar as faturas que serão quitadas, clique no botão . A seguinte tela será apresentada para o preenchimento das informações de quitação:

Tela para realizar quitação das faturas

*   `Contas Origem` e `Aplicação`: As contas padrão para a quitação são configuradas na operação 002 – QUITAÇÃO DE FATURAS das **Contas Padrão** (localizado em `Cadastro` > `Financeiro` \> `Contas do Caixa`). Caso necessário, é possível alterar as contas selecionadas.
    
*   `Data do Pagamento`: Informe a data em que o pagamento das faturas será registrado. Esta data será usada para contabilizar a quitação.
    
*   `Cálculo de Juros e Multa`: Caso haja atrasos, indique se o sistema deve calcular automaticamente juros e multas. Esses valores serão calculados com base nos parâmetros do sistema (localizado em `Opções` > `Parâmetros` \> `Sistema`, guia `Faturamento`).
    

Revise todas as informações inseridas para garantir que estão corretas. Após a verificação, clique no botão para concluir a quitação das faturas selecionadas.

:note:atlassian-note#B3D4FF

**Observação:** Ao seguir esse procedimento, a forma de pagamento padrão utilizada para quitar as faturas será `Dinheiro`**.**

* * *

Desvincular boleto na fatura de convênio
----------------------------------------

Essa funcionalidade permite remover o vínculo entre a fatura de convênio e o boleto bancário associado.

A desvinculação é necessária quando o boleto não será mais utilizado para pagamento, foi emitido incorretamente ou precisa ser substituído por outra forma de quitação. Após a desvinculação, a fatura permanece em aberto no sistema, podendo ser quitada por outra forma de pagamento ou ter um novo boleto vinculado.

Navegue até o módulo de **Faturas de Convênio** e localize a fatura específica que deseja desvincular o boleto. Clique no ícone e em seguida no botão , irá aparecer a seguinte tela de confirmação:

Tela de confirmação de desvinculação de boleto

Ao clicar no botão , o boleto será desvinculado da fatura.

Após a desvinculação, o boleto deixa de ter relação com a fatura, mas os dados da fatura permanecem inalterados, incluindo valores, cliente e vencimento.

* * *

Estorno de pagamento de fatura
------------------------------

Após a quitação de uma fatura, seja ela parcial ou total, não é possível realizar nenhuma edição nas informações dessa fatura. Caso haja algum erro no lançamento ou na quitação, como a data de emissão ou vencimento incorreta, ou uma forma de pagamento errada, o processo a ser realizado para corrigir é o estorno do(s) pagamento(s) da fatura.

Para estornar uma fatura quitada, acesse o módulo de **Faturas de Convênio**, conforme explicado no início deste manual. A tela principal será exibida:

Tela de Faturas de Convênio

Utilize os filtros disponíveis para facilitar a localização da fatura desejada. Isso pode incluir filtros como a `Data de Emissão`, `Vencimento` ou `Status da fatura`.

Encontre a fatura que necessita de estorno e clique no ícone localizado no final da linha correspondente à fatura. Isso abrirá uma nova tela com todos os detalhes da fatura para efeito de consulta das informações:

Tela para realizar estorno do pagamento da fatura

No box **Quitações da Fatura**, clique no ícone ao lado do pagamento registrado para estornar o pagamento. Será apresentada a seguinte tela de confirmação:

Confirme o processo de estorno clicando no botão .

Esse processo é essencial para garantir que qualquer erro relacionado à quitação de faturas possa ser corrigido sem complicações. Lembre-se de verificar cuidadosamente os detalhes da quitação antes de concluir o estorno, garantindo que os ajustes sejam feitos de forma correta e precisa.