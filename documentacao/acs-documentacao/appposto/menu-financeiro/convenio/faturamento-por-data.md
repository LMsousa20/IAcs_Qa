---
title: Faturamento por Data
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/9306130
---

# Faturamento por Data

16truenonelisttrue

* * *

Faturamento do Convênio por Data
================================

O faturamento por data refere-se ao processo de calcular e registrar os valores a serem pagos pelos clientes em uma data ou período específicos. Este procedimento garante que todas as transações realizadas dentro de um período determinado sejam contabilizadas corretamente.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Faturamento por Data

* * *

Será apresentada a seguinte tela:

Tela geral do módulo de faturamento por data

O processo de faturamento por data é realizado desde o primeiro vale em aberto (ainda não faturado) até a data indicada no campo **Data do Faturamento**. A seguir, será explicado a funcionalidade de cada campo.

*   Data do Faturamento: Data em que está sendo realizado o faturamento dos vales em aberto do cliente. Define o período final para a inclusão dos vales a serem faturados.
    
*   Tipo do Convênio: Indica se o faturamento será de vales do tipo Normal ou CTF.
    
*   Empresa: Nome da empresa que está realizando o faturamento. É possível selecionar uma empresa diferente da que está atualmente logada para realizar o faturamento, sem a necessidade de sair e entrar em cada empresa separadamente para realizar o processo.
    
*   Conta Bancária: Conta bancária que será vinculada à fatura.
    
*   Centro: Indica qual centro de resultado será atrelado a fatura que está sendo criada, como **Pista Combustíveis, Loja de Conveniência, Administração, etc.** Associa a fatura a um centro de resultado específico, facilitando a análise financeira.
    
*   Usar Múltiplas Empresas: Ao marcar esta opção, o usuário deverá selecionar duas ou mais empresas para realizar o faturamento de um mesmo cliente que possua vales em aberto nas mesmas.
    

Opção para selecionar várias empresas

Permite o faturamento conjunto dos vales de clientes que tenham convênios pendentes em várias empresas.

Tela de seleção das empresas

Selecione as empresas e clique no botão . Feito isso, o processo de faturamento será realizado para os vales dos clientes de todas as empresas.

:note:atlassian-note#B3D4FF

**Observação:** A fatura constará no módulo **Faturas de Convênio** apenas da empresa que estava logada no momento do faturamento.

Guia CLIENTES A SEREM FATURADOS

*   Filtrar Clientes Por: Existem três alternativas de seleção para filtrar os clientes que serão faturados:
    

1.  Data do Fechamento: Selecione esta opção para indicar a data que será considerada como fechamento. Fatura os vales em aberto de **todos** os clientes com o mesmo dia de fechamento, conforme indicado em **Cadastro** > **Clientes**, na aba **Cobrança**. Certifique-se de inserir a data de fechamento desejada no campo ao lado.
    

Clientes a serem faturados por data do fechamento

2.  Período de Emissão: Selecione esta opção para indicar o intervalo exato de datas de emissão dos vales de **todos** os clientes a serem faturados.
    

Clientes a serem faturados por período de emissão

3.  Escolha do Cliente: Selecione esta opção para indicar um **único** cliente e um autorizado (opcional) para realizar o faturamento de todos os vales em aberto do mesmo. Facilita o faturamento específico para um cliente selecionado, consolidando todos os vales em aberto.
    

Clientes a serem faturados por escolha do cliente

Guia CÁLCULO DA FATURA

*   Somar os vales até o dia: Informe o dia até o qual deseja somar todos os vales emitidos anteriores a data indicada. Permite que os valores acumulados dos vales sejam calculados até a data especificada, garantindo que todas as transações realizadas apenas até esse dia sejam incluídas na fatura.
    
*   Cobrar juros/multa até o dia: Ao marcar esta opção, será liberado o campo para indicação obrigatória de uma data limite para a cobrança de juros e multa, que serão calculados para os vales cujo vencimento seja anterior a essa data.
    

Opção para cobrar juros e multa

Utilize essas opções para garantir que o cálculo da fatura seja realizado de forma precisa e eficiente, refletindo corretamente todos os valores devidos até as datas especificadas.

Guia OPERAÇÃO

*   Conferir a soma dos vales: Gera uma listagem na tela com a soma de todos os vales dos clientes por fatura. Opção útil para verificar e corrigir informações incorretas nos vales antes de gerar as faturas. Abaixo estão as duas apresentações possíveis para a listagem que é apresentada na tela:
    

Soma dos vales (apresentação Vales por Fatura)

Soma dos vales (apresentação Vales por Produto)

*   Gerar as faturas: Gera a(s) fatura(s) dos vales do(s) cliente(s). Ao selecionar esta opção, as faturas são criadas com base nos vales acumulados. Além disso, são ativados os campos do box **Opções do Relatório**, que permitem personalizar o conteúdo e a forma de exibição dos relatórios.
    

Tela com resumo do faturamento apresentada após clicar no botão Gerar Fatura

Utilize essas opções para garantir um processo de faturamento preciso e eficiente, proporcionando maior controle e confiabilidade nas operações financeiras.

Guia OPÇÕES DO RELATÓRIO

Podem ser gerados até quatro relatórios diferentes, conforme descrito abaixo. Esses relatórios podem ser ordenados pelo Nome ou Código do cliente. Oferece diferentes formas de apresentação para melhor organização e clareza das informações.

Opções de Relatório

Tipos de Relatórios:

*   Relação de Vales: Lista detalhada dos vales. Veja a seção **RELAÇÃO DE VALES** para as três possíveis apresentações.
    
*   Relação de Vales por produto: Lista detalhada dos vales organizados por produto.
    

Exemplo de relatório de Relação de Vales por Data e Produto

*   Relação de Faturas: Lista detalhada das faturas geradas.
    

Exemplo de relatório de Relação de Faturas Geradas

*   Relação de Recibos: Lista detalhada dos recibos emitidos.
    

Exemplo de relatório de Relação de Recibos

Guia RELAÇÃO DE VALES

Quando selecionado a opção **Relação de Vales** em **Opções do Relatório,** é possível escolher uma das seguintes apresentações:

*   Por vale: Apresenta cada vale individualmente. Útil para uma análise detalhada de cada transação.
    

Exemplo de relatório de Relação de Vales ordenado por vale

*   Totalizado por cliente: Apresenta o total dos vales acumulados por cliente.
    

Exemplo de relatório de Relação de Vales totalizado por cliente

*   Por vale com endereço: Apresenta cada vale individualmente, incluindo o endereço do cliente. Útil para quando a informação do endereço é necessária para a documentação ou comunicação.
    

Exemplo de relatório de Relação de Vales ordenado por vale com endereço