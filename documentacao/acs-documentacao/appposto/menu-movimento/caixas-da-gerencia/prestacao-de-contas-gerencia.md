---
title: Prestação de Contas - Gerência
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/218628112
---

# Prestação de Contas - Gerência

61truenonelisttrue

Prestação de Contas - Gerência
==============================

O módulo de **Prestação de Contas dos Caixas de Gerência** oferece uma visão detalhada e organizada das movimentações financeiras relacionadas aos recebimentos de pagamentos realizados direto na gerencia da empresa, ou seja, sem passar pelo caixa do PDV. Ele permite o acompanhamento de quitações de faturas de convênios e CTF, além de confirmações de valores recebidos por diversas finalizadoras, como Vales de Funcionários, Cartões, PIX e Carteiras Digitais.

Alguns benefícios do módulo são:

*   **Controle Centralizado**: Concentra todas as informações relacionadas aos recebimentos e quitações em um único lugar.
    
*   **Transparência e Organização**: Facilita a identificação de movimentações por finalizadora e o acompanhamento de valores recebidos.
    

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > Prestação de Contas

Será apresentada a seguinte tela:

Tela geral do módulo de prestação de contas dos caixas da gerência

A imagem acima apresenta uma visão geral dos **Caixas da Gerência** separados por data, facilitando o processo de conferência diário.

Na parte superior da tela, estão disponíveis campos de filtros que permitem refinar a busca pelos caixas, agilizando a localização de informações específicas. Os filtros disponíveis são:

*   `Empresa`: Selecione o nome da empresa cujos caixas serão listados. Esse recurso possibilita a visualização dos caixas de uma empresa diferente da que está atualmente logada, sem a necessidade de alternância de login.
    
*   `Data Inicial` e `Data Final`: Define o intervalo de datas para listar os caixas correspondentes. Útil para realizar conferências específicas por períodos.
    
*   `Operador`: Seleciona o operador responsável pelo caixa. Diferentemente da **Prestação de Contas de Vendas**, em que cada operador possui seu próprio caixa por turno, no **Caixa da Gerência** é aberto apenas um caixa diário no nome do operador padrão definido nos parâmetros do sistema, podendo ser ajustado conforme necessário.
    
*   `Situação`: Filtra os caixas pela situação atual:
    
    *   `Todos`: Exibe todos os caixas.
        
    *   `Abertos`: Mostra somente os caixas disponíveis para lançamentos.
        
    *   `Fechados`: Exibe caixas já encerrados.
        
*   `Sequencial`: Permite buscar um caixa específico pelo número sequencial.
    

Após a aplicação dos filtros, clique no botão para exibir os resultados. Os caixas listados na parte inferior da tela incluem informações detalhadas para facilitar a conferência. As colunas apresentadas são:

*   `Data`: Exibe a data do caixa em questão.
    
*   `Sequencial`: Apresenta o número sequencial do caixa.
    
*   `Operador`: Indica o operador responsável pelo caixa no dia selecionado.
    
*   `Situação`: Mostra se o caixa está **Bloqueado** (não pode receber lançamentos) ou **Liberado** (disponível para lançamentos).
    
*   `Total Recolhido`: Exibe o total dos valores recolhidos no dia, ou seja, os recebimentos registrados.
    
*   `Total Movimento`: Indica o total dos valores quitados na data, representando os pagamentos recebidos.
    
*   `Resultado`: Mostra o saldo final do caixa e seu status, podendo ser:
    
    *   `Certo`: Não há divergências.
        
    *   `Sobra`: O total recolhido é maior que o total movimento.
        
    *   `Falta`: O total recolhido é menor que o total movimento.
        

* * *

Conferência dos caixas
----------------------

A conferência de um caixa permite validar e revisar os lançamentos realizados. Para realizar esse processo, localize-o na listagem e clique no ícone ao lado do registro correspondente.

Tela de conferência do caixa

Na tela de conferência, o sistema exibirá as principais informações do caixa na parte superior, incluindo `Empresa`, `Data`, `Situação` (`Aberto` ou `Fechado`) e `Operador`**.**

:info:atlassian-info:info:#B3D4FF

**Observação**:

*   **Caixa Fechado:** Se o caixa estiver na situação `Fechado`, será necessário abri-lo para inclusão de novos lançamentos. Para isso, clique no botão , localizado no canto superior direito da tela.
    
*   **Caixa Aberto:** Após revisar os lançamentos e confirmar as informações, você pode bloquear o caixa para impedir novas alterações. Os seguintes botões estarão disponíveis:
    
    *   : Bloqueia apenas o caixa conferido.
        
    *   : Bloqueia o caixa conferido e todos os anteriores, garantindo que não sejam modificados.
        

Essa funcionalidade assegura maior controle e segurança sobre os lançamentos realizados no sistema.

Guia DADOS DO RECOLHIMENTO1800

A guia **Dados do Recolhimento** apresenta os pagamentos recebidos diretamente na gerência da empresa, ou seja, aqueles que não passaram pelo caixa do PDV. Esses lançamentos podem ser inseridos no caixa da gerência de duas formas:

**1\. Lançamento Direto**

O lançamento pode ser feito acessando a finalizadora correspondente e inserindo o valor manualmente. Dependendo da finalizadora, os valores podem ser registrados de duas maneiras:

**1.1. Finalizadoras com inserção direta**

Para essas finalizadoras, basta inserir o valor conferido no campo correspondente, com base no montante recebido. Exemplos:

*   `Dinheiro`: Valor recebido em espécie.
    
*   `Pagamento Fornecedor`: Retirada de valores para pagamento de fornecedores.
    

**1.2. Finalizadoras com detalhamento de transações**

Para essas finalizadoras, é necessário acessar a opção correspondente, que direcionará para uma tela com todas as transações detalhadas da mesma. Todos os valores devem ser corretamente lançados para garantir uma conferência precisa. Exemplos:

*   `Cheque à Vista`: Cheques com compensação imediata, debitados assim que processados.
    
*   `Cheque a Prazo`: Cheques com compensação futura, debitados em data posterior.
    
*   `Depósito`: Valores transferidos da conta Caixa para a conta bancária da empresa.
    
*   `Cartão de Crédito`: Pagamentos via cartão de crédito, onde o cliente pagará posteriormente à administradora.
    
*   `Cartão de Débito`: Pagamentos via cartão de débito, com débito imediato da conta do cliente.
    
*   `Frete Eletrônico`: Pagamentos realizados por cartão de frete eletrônico, comum em transportadoras.
    
*   `Convênio`: Pagamentos por convênios firmados entre a empresa e seus clientes, faturados posteriormente.
    
*   `CTF (Controle de Frete)`: Similar ao Convênio, mas identifica abastecimentos liberados por bombas específicas, permitindo rastreamento detalhado.
    
*   `Vale de Funcionário – Adiantamento`: Adiantamento de parte do salário ou valores devidos ao funcionário.
    
*   `Carta Frete`: Pagamentos por carta frete, usado por transportadoras para despesas com combustíveis e serviços.
    
*   `Carteira Digital`: Pagamentos via carteiras digitais (ex.: PicPay, Mercado Pago, etc.), com transferência eletrônica.
    
*   `PIX`: Pagamentos instantâneos via sistema PIX.
    
*   `Pagamento Despesas`: Pagamentos de despesas operacionais, como compra de materiais ou serviços.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Cada finalizadora acima possui um módulo específico no sistema, onde é possível inserir, editar ou excluir lançamentos conforme necessário.

**2\. Lançamento por Processos de Outros Módulos**

Os registros também podem ser gerados por processos realizados em outros módulos, como a **quitação de faturas de convênio dos clientes**.

:info:atlassian-info:info:#B3D4FF

**Importante**: A finalizadora **Boleto** é alimentada somente quando é realizada uma quitação indicando essa forma de pagamento.

Resumindo, é um detalhamento específico para identificar os recolhimentos de valores que houveram naquele dia, facilitando a auditoria e o controle.

Guia RESUMO DO MOVIMENTO1800

A guia **Resumo do Movimento** apresenta um consolidado das movimentações financeiras realizadas na data selecionada. Essas movimentações ocorrem em diferentes módulos do sistema e são automaticamente registradas conforme as operações são concluídas.

*   `Faturas Convênio Quitadas`: Registrado quando ocorre a quitação de faturas de convênio do tipo `Débito Convênio` no módulo de **Faturas de Convênio**.
    
*   `Faturas CTF Quitadas`: Registrado quando ocorre a quitação de faturas do tipo `Débito CTF` no módulo de **Faturas de Convênio**.
    
*   `Vales de Funcionário Quitados`: Registrado quando ocorre a quitação de vales de funcionários no módulo de **Baixa de Vales de Funcionário**.
    
*   `Cartões Creditados`: Registrado quando ocorre a quitação de faturas de cartões de crédito ou débito no módulo de **Controle de Faturas do Cartão**.
    
*   `Frete Eletrônico Creditado`: Registrado quando ocorre a quitação de cartões de pagamento de frete no módulo de **Controle de Faturas do Cartão**.
    
*   `Resgates Creditados`: Registrado quando ocorre o resgate de cheques no módulo de **Cheques** do **Caixa da Gerência**.
    
*   `Cheques Depositados`: Registrado quando ocorre o depósito de cheques no módulo de **Cheques** do **Caixa de Vendas** ou **Caixa da Gerência**.
    
*   `Cheques Devolvidos Quitados`: Registrado quando um cheque devolvido por duas vezes é posteriormente quitado.
    
*   `Cartas Frete Quitadas`: Registrado quando ocorre a quitação de uma carta frete (_módulo ainda não disponível_).
    
*   `Carteira Digital Creditada`: Registrado quando ocorre a quitação de valores via carteiras digitais no módulo de **Baixa de Carteira Digital**.
    
*   `PIX Creditado`: Registrado quando ocorre a quitação de valores via PIX no módulo de **Baixa de PIX**.
    

Guia RESUMO DOS TOTAIS1800

A guia **Resumo dos Totais** fornece uma visão consolidada dos valores registrados no caixa, permitindo um acompanhamento preciso das movimentações e facilitando a conferência financeira.

*   `Total dos Recolhimentos`: Exibe o valor total efetivamente recolhido no caixa, considerando todas as formas de pagamento, como dinheiro, cartão, PIX e convênios. Esse valor corresponde à soma de todos os recolhimentos registrados no caixa.
    
*   `Total dos Movimentos`: Representa o valor total movimentado no caixa, incluindo operações realizadas em outros módulos do sistema.
    
*   `Resultado`: Indica o saldo final após a conferência do caixa, comparando o `Total dos Recolhimentos` com o `Total dos Movimentos` para identificar possíveis divergências:
    
    *   `Certo`: O caixa está com os valores corretos.
        
    *   `Sobra`: Há valores excedentes no caixa.
        
    *   `Falta`: Há valores insuficientes no caixa.
        

O módulo **Caixa da Gerência** é essencial para o controle financeiro da empresa, permitindo a conferência, registro e auditoria das movimentações do caixa. Com ele, é possível acompanhar de forma detalhada os valores recebidos, pagamentos efetuados e a situação dos saldos em diferentes modalidades.

Manter o caixa da gerência atualizado e devidamente conferido é fundamental para a segurança financeira do negócio. Utilize as ferramentas do sistema para garantir registros precisos e evitar inconsistências nos valores.

📌 **Dica:** Revise regularmente os relatórios e utilize os módulos integrados para um controle eficiente das transações financeiras.