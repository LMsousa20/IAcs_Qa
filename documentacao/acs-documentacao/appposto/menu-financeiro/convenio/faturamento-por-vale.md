---
title: Faturamento por Vale
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/9306140
---

# Faturamento por Vale

16truenonelisttrue

* * *

Faturamento do Convênio por Vale
================================

O faturamento por vale refere-se ao processo de faturar um único cliente, escolhendo dentre os vales em aberto do mesmo quais serão usados para gerar a fatura. Esse processo é útil para consolidar os valores devidos por um cliente específico, facilitando o controle e a cobrança.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Faturamento por Vale

* * *

Será apresentada a seguinte tela, dividida em três boxes:

Tela geral de Faturamento por Vale

Ao acessar o módulo, a tela principal será exibida, permitindo o gerenciamento do faturamento por vale.

As principais funcionalidades são:

**Criar Novo Faturamento por Vale**

Permite a geração de um novo faturamento por vale, garantindo a correta apuração dos valores devidos por cliente.

**Visualização**

Permite visualizar o relatório de um faturamento por vale gerado ao final do processo, possibilitando a consulta dos vales vinculados, valores faturados e demais informações relacionados à fatura.

* * *

Apresentação da tela e campos
-----------------------------

### Box 1 - Faturas do Convênio por Vale

Box Faturas do Convênio por Vale

*   `Data do Faturamento`: Data em que está sendo realizado o faturamento dos vales em aberto do cliente.
    
*   `Tipo do Convênio`: Indica se o faturamento será de vales do tipo Normal ou CTF.
    
*   `Empresa`: Nome da empresa que está realizando o faturamento. É possível selecionar uma empresa diferente da que está atualmente logada para realizar o faturamento, sem a necessidade de deslogar e logar em cada empresa separadamente para realizar o processo.
    
*   `Conta Bancária`: Conta bancária que será vinculada à fatura.
    
*   `Centro`: Indica qual centro de resultado será atrelado a fatura que está sendo criada, como **Pista Combustíveis, Loja de Conveniência, Administração, etc.** Associa a fatura a um centro de resultado específico, facilitando a análise financeira.
    
*   `Usar Múltiplas Empresas`: Ao marcar esta opção, o usuário deverá selecionar duas ou mais empresas para realizar o faturamento de um mesmo cliente que possua vales em aberto nas mesmas.
    

Opção para selecionar várias empresas

Permite o faturamento conjunto dos vales de clientes que tenham convênios pendentes em várias empresas.

Tela de seleção das empresas

Selecione as empresas e clique no botão . Feito isso, o processo de faturamento será realizado para os vales dos clientes de todas as empresas.

:note:atlassian-note#B3D4FF

**Observação:** A fatura constará no módulo **Faturas de Convênio** apenas da empresa que estava logada no momento do faturamento.

*   `Cobrar juros/multa até o dia`: Ao marcar esta opção, será liberado o campo para indicação obrigatória de uma data limite para a cobrança de juros e multa, que serão calculados para os vales cujo vencimento seja anterior a essa data.
    

Opção para cobrar juros e multa

*   `Usar crédito de antecipação para quitar faturas`: Este parâmetro define se o crédito de antecipação do cliente será utilizado automaticamente no momento da geração da fatura, para o abatimento do valor a pagar.
    
    *   `Habilitado`: Quando habilitado, o sistema verifica se o cliente possui crédito de antecipação disponível. Caso possua, esse valor **será utilizado automaticamente** para quitar total ou parcialmente no momento da sua geração.
        
        *   Se o crédito for maior ou igual ao valor da fatura, a fatura será gerada como quitada.
            
        *   Se o crédito for inferior, o valor será abatido e o saldo restante permanecerá em aberto.
            
    *   `Desabilitado`: Quando desabilitado, o sistema **não utiliza o crédito de antecipação** na geração da fatura. A fatura será gerada com o valor integral, independentemente de existir crédito disponível do cliente.
        

**Atenção!**

Mesmo que a opção **Descontar do crédito de antecipação o valor do vale** esteja ativada no cadastro do cliente, o desconto do crédito somente ocorrerá se este parâmetro estiver habilitado.

Guia CLIENTE A SER FATURADO760

*   `Cliente`: Indicação do cliente para o qual será realizado o faturamento. Ao clicar na lista de seleção, aparecerão apenas os clientes que possuam vales em aberto.
    
*   `Autorizado`: Indicação do autorizado para abastecer (previamente cadastrado em **Cadastro** > **Clientes**, na aba **Autorizados**) caso o faturamento necessite ser apenas de uma pessoa associada específica, e não do cliente em geral.
    

* * *

### Box 2 - Vales Selecionados

Segundo Box: Vales Selecionados

Ao clicar no botão , será apresentada a seguinte tela para indicação dos vales que serão faturados:

Tela para seleção dos vales a serem faturados

A tela de seleção de vales permite uma escolha precisa e detalhada dos vales que serão faturados, assegurando que todas as informações necessárias estejam corretas antes da geração da fatura.

Na parte superior da tela, é possível aplicar filtros para a listagem dos vales, facilitando a localização e seleção dos vales relevantes:

1.  Indicação de um período determinado: Filtra os vales de acordo com a data de emissão, selecionando um intervalo de datas específico.
    
2.  Indicação do PDV (Ponto de Venda): Filtra os vales com base no PDV que foram emitidos.
    
3.  Indicação da placa: Filtra os vales de acordo com a placa informada no momento do lançamento do vale.
    
4.  Indicação do número do vale: Filtra os vales utilizando o número específico do vale.
    

Na parta inferior da tela de seleção de vales, há dois resumos que ajudam a visualizar rapidamente os valores e quantidades de vales pendentes e selecionados:

Guia PENDENTES760

*   `Valor (R$)`: Mostra o valor total de todos os vales pendentes.
    
*   `Quantidade`: Mostra a quantidade total de vales pendentes.
    

Guia SELECIONADOS760

*   `Valor (R$)`: Mostra o valor total de todos os vales que foram selecionados para faturamento.
    
*   `Quantidade`: Mostra a quantidade total de vales selecionados para faturamento.
    

Após aplicar os filtros, clique no botão para atualizar a listagem de vales. A tela exibirá uma lista de todos os vales não faturados do cliente selecionado. Marque os vales que devem ser incluídos na fatura utilizando as caixas de seleção ao lado de cada vale. Após marcar os vales desejados, clique no botão para finalizar a seleção dos vales que serão faturados.

Com a inclusão dos vales concluída, o sistema retorna para a tela de faturamento, onde será exibida a listagem dos vales indicados que serão faturados. Nesta tela, dois resumos importantes serão apresentados: o **Resumo dos Débitos** e o **Resumo da Fatura**.

Box Vales Selecionados após indicação dos vales

Guia RESUMO DOS DÉBITOS760

*   `Soma dos Vales (R$)`: Somatório de todos os vales não faturados para o cliente indicado.
    
*   `Valor da Multa (R$)`: Somatório do valor de multa dos vales (gerado quando o botão **Cobrar juros/multa até o dia** está selecionado).
    
*   `Valor dos Juros (R$)`: Somatório do valor de juros dos vales (gerado quando o botão **Cobrar juros/multa até o dia** está selecionado).
    
*   `Valor do Crédito (R$)`: Valor do crédito de antecipação que o cliente possui em seu cadastro. Este valor é apresentado somente quando o parâmetro **Descontar do crédito de antecipação o valor do vale**, localizado em **Cadastro** > **Clientes**, na aba **Limite**, está configurado como **Sim**.
    
*   `Saldo Devedor (R$)`: Valor referente à diferença entre os campos `Soma dos Vales (R$)` e `Valor do Crédito (R$)`. Este é o valor que ficará pendente para faturamento.
    

Guia RESUMO DA FATURA760

*   `Soma dos Vales (R$)`: Somatório dos vales selecionados para geração da fatura.
    
*   `Valor da Multa (R$)`: Somatório do valor de multa dos vales selecionados.
    
*   `Valor dos Juros (R$)`: Somatório do valor de juros dos vales selecionados.
    
*   `Valor do Crédito (R$)`: Valor do crédito de antecipação sendo utilizado na fatura.
    
*   `Valor da Fatura (R$)`: Valor referente à diferença entre os campos `Soma dos Vales (R$)` e `Valor do Crédito (R$)`. Este é o valor final da fatura a ser pago pelo cliente
    

* * *

### Box 3 - Opções de Relatório

Após o processo de seleção de vales, o sistema permite a geração de relatórios através do terceiro box **Opções de Relatório**. Esse box oferece diferentes formatos de relatórios que podem ser gerados no final do processo ao clicar no botão .

Box Opções de Relatório

Podem ser gerados até quatro relatórios diferentes, conforme descrito abaixo. Esses relatórios podem ser ordenados pelo `Nome` ou `Código` do cliente. Oferece diferentes formas de apresentação para melhor organização e clareza das informações. Funcionam da mesma maneira exemplificada no módulo Faturamento por Data.

Tipos de Relatórios:

*   `Relação de Vales`: Lista detalhada dos vales. Veja a seção **RELAÇÃO DE VALES** para as três possíveis apresentações.
    
*   `Relação de Vales por Produto`: Lista detalhada dos vales organizados por produto.
    

Exemplo de relatório de Relação de Vales por Data e Produto

*   `Relação de Faturas`: Lista detalhada das faturas geradas.
    

Exemplo de relatório de Relação de Faturas Geradas

*   `Relação de Recibos`: Lista detalhada dos recibos emitidos.
    

Exemplo de relatório de Relação de Recibos

Guia RELAÇÃO DE VALES760

Quando selecionado a opção **Relação de Vales** em **Opções do Relatório,** é possível escolher uma das seguintes apresentações:

*   `Por vale`: Apresenta cada vale individualmente. Útil para uma análise detalhada de cada transação.
    

Exemplo de relatório de Relação de Vales ordenado por vale

*   `Totalizado por cliente`: Apresenta o total dos vales acumulados por cliente.
    

Exemplo de relatório de Relação de Vales totalizado por cliente

*   `Por vale com endereço`: Apresenta cada vale individualmente, incluindo o endereço do cliente. Útil para quando a informação do endereço é necessária para a documentação ou comunicação.
    

Exemplo de relatório de Relação de Vales ordenado por vale com endereço

Será apresentada a tela de Resumo do Faturamento, de acordo com as opções selecionadas no box **Opções de Relatório**.

Tela de Resumo do Faturamento e Relatórios

Ao clicar no botão , o sistema exibirá uma janela de atalho para emissão de Nota Fiscal de Saída:

Janela de atalho para emissão de Nota Fiscal de Saída

*   : O sistema **realizará o direcionamento automático** para o módulo de Nota Fiscal de Saída, permitindo o processo de emissão da nota vinculada à fatura.
    
*   : O sistema **não realizará o direcionamento**. A tela de Faturamento por Vale permanecerá aberta, permitindo a continuidade a outros faturamentos.