---
title: Lançamentos
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/66060310
---

# Lançamentos

16truenonelisttrue

Lançamentos
===========

O **Livro Caixa** é uma ferramenta essencial para a gestão financeira da empresa, especialmente em postos de gasolina, onde há um grande volume de transações diárias e variadas formas de pagamento. Ele funciona como um registro organizado e contínuo de todas as movimentações dos caixas (**Caixa de Venda** e **Caixa da Gerência**), permitindo que o usuário controle com precisão **entradas** (como vendas e recebimentos de clientes) e **saídas** (como pagamentos de despesas e fornecedores).

O módulo do Livro Caixa possibilita um acompanhamento detalhado dessas movimentações em tempo real, promovendo:

1.  **Controle Financeiro Diário**: O livro caixa permite que o usuário acompanhe o saldo e analise as entradas e saídas das contas, garantindo que o fluxo de caixa esteja sempre equilibrado.
    
2.  **Transparência e Organização**: Com registros de todas as transações, é possível verificar a origem e o destino de cada valor, o que facilita a auditoria e ajuda a evitar inconsistências no caixa.
    
3.  **Integração com Outras Funções do Sistema**: É integrado diretamente com o **módulo de Prestação de Contas**, que, por sua vez, é interligado ao **PDV**, permitindo que as movimentações realizadas no mesmo, como vendas, sejam refletidas automaticamente no Livro Caixa, reduzindo a necessidade de registros manuais.
    
4.  **Tomada de Decisão**: Por meio dos relatórios do Livro Caixa, a gestão pode avaliar o desempenho financeiro diário, ajudando na tomada de decisões rápidas e informadas para manter a saúde financeira do posto.
    

O **Livro Caixa**, portanto, é um instrumento indispensável para o controle, organização e gestão eficiente das finanças diárias da empresa, contribuindo para uma operação segura e com menor risco de erros financeiros.

Configurações Necessárias
-------------------------

Para garantir que o **Livro Caixa** seja corretamente alimentado e reflita todas as movimentações financeiras de forma precisa, é essencial realizar algumas configurações no sistema para automatizar os lançamentos e categorizar as transações de acordo com as operações efetuadas, proporcionando maior controle nos registros.

Essas configurações são realizadas em dois módulos do sistema:

### Cadastro de Contas do Caixa

Acesse o seguinte módulo:

Menu Cadastro > Contas do Caixa

A seguinte tela será apresentada:

Listagem do cadastro de contas do caixa

Clique no botão . Será apresentada a seguinte tela:

Listagem das operações configuráveis

Verifique e padronize as contas de **origem** e **aplicação** para cada operação listada.

:info:atlassian-info:info:#B3D4FF

**Observação**: A configuração das contas deve ser feita em conformidade com as orientações da **contabilidade** da empresa, garantindo que todos os registros estejam devidamente categorizados e que o plano de contas do sistema seja fiel ao plano de contas contábil.

### Cadastro de Contas Administradoras

:info:atlassian-info:info:#B3D4FF

**Observação**: Utilize este módulo para configurações de administradoras específicas que necessitam de distinção além da configuração realizada em **Contas do Caixa**.

Por exemplo, quando a empresa possui duas adquirentes para transações de cartão, é importante que seja realizada essa configuração para distinguir no livro caixa as vendas de cada adquirente.

Acesse o seguinte módulo:

Menu Cadastro > Contas Administradoras

A seguinte tela será apresentada:

Listagem das administradoras configuradas

Para administradoras que precisem de configurações específicas, além das contas padrão já definidas no módulo **Contas do Caixa**, é necessário configurar separadamente as **contas de origem** e **contas de aplicação** para as operações de **venda**, **recebimento** e **taxa** de cada administradora. Isso permite um controle mais detalhado e preciso dos lançamentos associados a cada operadora de cartão, carteira digital ou PIX.

Com essas configurações devidamente ajustadas, o sistema estará preparado para registrar automaticamente todas as transações no **Livro Caixa**, garantindo que as movimentações do posto sejam precisas e organizadas, facilitando a análise financeira e o controle diário.

* * *

Livro Caixa
-----------

Finalizadas as configurações iniciais, acesse o seguinte módulo para iniciar o processo de conferência do livro caixa:

Menu Movimento > Lançamentos

* * *

Apresentação da tela e campos
-----------------------------

Ao acessar o módulo do livro caixa, a tela a seguir será exibida.

Tela geral do módulo do Livro Caixa

A imagem acima apresenta uma visão geral do módulo do livro caixa, composto por duas seções principais:

1.  **Filtros de Pesquisa**: Localizados na parte superior da tela, permitem refinar a busca de registros de acordo com diferentes critérios.
    
2.  **Listagem de Informações**: Exibe os resultados com base nos filtros aplicados, variando conforme a opção indicada no filtro **Modo de Busca**.
    

Os filtros disponíveis facilitam a localização de informações específicas, proporcionando uma busca eficiente e direcionada:

*   Empresa: Selecione a empresa cujos registros serão listados. Este filtro permite consultar os dados de uma empresa diferente da que está atualmente logada, sem a necessidade de alternar o login no sistema.
    
*   `Data Inicial` e `Data Final`: Define o período desejado para a consulta. Este recurso é útil para realizar conferências em intervalos específicos.
    
*   `Conta Origem` e `Conta Aplicação`: Filtra os registros com base nas contas de origem e aplicação selecionadas, facilitando a análise de entradas e saídas de contas específicas.
    
*   Modo de Busca: Permite escolher o tipo de informação que será exibida na listagem:
    
    *   `Por Data de Lançamento`: Apresenta as datas de movimentação, incluindo a situação do caixa em cada dia listado.
        
    *   `Por Itens do Lançamento`: Detalha cada lançamento individual, exibindo informações como data, situação do caixa, conta origem e aplicação, histórico, documento e valor (R$).
        
        *   Ao selecionar essa opção, novos filtros são adicionados a tela para uma busca mais detalhada e precisa:
            

Tela geral do módulo do Livro Caixa com novos filtros

*   `Valor Inicial (R$)` e `Valor Final (R$)`: Permitem filtrar os lançamentos dentro de um intervalo específico de valores, facilitando a análise de transações de diferentes montantes.
    
*   `Tipo do Lançamento`: Filtra os registros com base na forma como foram gerados:
    
    *   `Todas`: Exibe todos os lançamentos registrados no Livro Caixa, independentemente da origem.
        
    *   `Manual`: Exibe apenas os lançamentos inseridos manualmente, geralmente utilizados para ajustes de saldo, correções ou movimentações específicas não automatizadas.
        
    *   `Automático`: Exibe apenas os lançamentos criados automaticamente pelo sistema, como as transações de vendas realizadas no PDV ou pagamentos de contas registradas no módulo de contas a pagar.
        
*   `Histórico`: Permite filtrar os lançamentos pelo histórico registrado, facilitando a localização de transações específicas relacionadas a determinados eventos ou descrições.
    
*   `Documento`: Filtra os lançamentos pelo número do documento, possibilitando uma busca precisa baseada em documentos específicos.
    

Após a aplicação dos filtros, clique no botão . Os registros serão listados na parte inferior da tela.

Consulta dos lançamentos
------------------------

Para realizar a consulta dos lançamentos de uma data específica no livro caixa, siga os passos abaixo:

1.  Acesse o **Módulo do Livro Caixa**.
    
2.  Localize a data que deseja conferir e clique no ícone . A seguinte tela será apresentada com todas as movimentações registradas nesse dia:
    

Tela dos lançamentos diários de uma data específica

### Box 1 - Data do Lançamento

Nesse box são exibidas informações sobre a **data** para a qual os lançamentos serão listados, além de alguns **botões de ação** para facilitar a navegação e o bloqueio dos caixas:

#DEEBFF

*   Campo `Empresa`: Permite selecionar a empresa cujos lançamentos serão visualizados na data especificada. Facilita a consulta dos dados financeiros de uma empresa diferente da que está atualmente logada, sem a necessidade de alternar o login no sistema. Isso agiliza a análise e verificação de informações de múltiplas empresas.
    
*   Botão : Utilizado para **bloquear o livro caixa da data acessada**, impedindo a inclusão de novos lançamentos a partir deste momento. Ao bloquear o caixa do dia atual, o sistema não permitirá novos registros, evitando alterações ou inserções indesejadas após a conferência e fechamento do dia.
    
*   Botão : Bloqueia o caixa da data acessada **e de todas as datas anteriores**, impedindo novos lançamentos retroativos. Essa opção é ideal para garantir a integridade dos registros financeiros, evitando modificações nos lançamentos passados após o fechamento e conferência das movimentações.
    

#DEEBFF

Exibe a data selecionada para a consulta ou registro dos lançamentos. Utilize os botões e para transitar facilmente entre as datas.

* * *

#DEEBFF

Mostra o dia da semana correspondente à data selecionada, auxiliando na organização e controle dos lançamentos.

### Box 2 - Lançamentos

O box de **Lançamentos** exibe todas as transações realizadas no dia consultado, além de oferecer ferramentas para análise e registro de novas informações. Abaixo estão os detalhes sobre sua funcionalidade e os elementos que compõem esse box:

Guia DESTACADOS:1800

Apresenta um resumo das movimentações selecionadas, facilitando a análise de valores totais.

*   `Valor (R$)`: Valor total dos registros selecionados.
    
*   `Quantidade`: Quantidade de registros selecionados.
    

*   Botão : Permite incluir manualmente novas transações diretamente no Livro Caixa, ideal para ajustes ou lançamentos não automatizados.
    

**Informações Listadas em Cada Movimentação**

1.  `Centro de Resultado`:
    
2.  `Conta Origem`**:** Identifica a conta de onde os valores foram movimentados.
    
3.  `Conta Aplicação`**:** Especifica a conta para onde os valores foram destinados.
    
4.  `Histórico`**:** Detalha o motivo ou descrição da transação.
    
5.  `Documento`**:** Exibe o número ou identificação do documento relacionado à transação.
    
6.  `Fornecedor`**:** Aponta o fornecedor vinculado ao lançamento, quando aplicável.
    
7.  `Valor`**:** Mostra o montante financeiro da transação.
    
8.  `Tipo`**:** Indica se o lançamento foi feito de forma manual ou automática.
    
9.  `Conciliado`:
    

Cada lançamento possui os ícones e , utilizados para edição e exclusão do registro, respectivamente.

:note:atlassian-note#B3D4FF

**Observação:**

*   **Lançamentos Manuais** podem ser editados ou excluídos conforme necessário.
    
*   **Lançamentos Automáticos** gerados por integrações com outros módulos do sistema (como PDV, contas a pagar, entre outros), são **bloqueados** para exclusão.
    
    *   O ícone é habilitado apenas para consulta, sem permitir alterações nos dados desse lançamento.
        

Essa estrutura garante maior controle e integridade dos dados financeiros no sistema, minimizando riscos de alterações inadequadas ou inconsistências nos registros.

Inclusão de lançamentos manuais
-------------------------------

Para adicionar um novo lançamento manual no Livro Caixa, é necessário acessar a data específica em que o registro será incluído. Após clicar no ícone da data desejada, clique no botão . A seguinte tela será exibida para preenchimento das informações necessárias:

No box **Novo Lançamento**, preencha os seguintes campos:

*   **Empresa:** Selecione a empresa onde o lançamento será registrado. Caso necessário, é possível alterar para uma empresa diferente daquela atualmente logada.
    
*   **Conta Origem:** Informe a conta de onde o valor será retirado.
    
*   **Conta Aplicação:** Indique a conta para onde o valor será destinado.
    
*   **Histórico:** Insira uma descrição detalhada da transação para facilitar futuras consultas.
    
*   **Documento:** Insira o número do documento vinculado à transação (nota fiscal, recibo, etc.).
    
*   **Competência:** Informe o mês e ano (competência) em que o valor será considerado.
    
*   **Valor (R$):** Registre o valor bruto da transação.
    
*   **Turno:** Indique o turno em que a transação ocorreu, caso aplicável.
    
*   **Centro de Resultado:** Relacione o lançamento ao centro de resultado correspondente.
    
*   **Fornecedor:** Preencha com o fornecedor relacionado à transação, se aplicável.
    

Após preencher todas as informações, revise os dados e clique no botão para concluir a inclusão do lançamento no Livro Caixa.

Edição e exclusão de lançamentos
--------------------------------

A edição ou exclusão de lançamentos no livro caixa é limitada aos **lançamentos manuais**. Para **lançamentos automáticos**, essas operações não são permitidas diretamente, sendo necessário desfazer a operação que originou o registro.

**Regras para Edição e Exclusão de Lançamentos**

1.  **Lançamentos Manuais**
    
    *   Podem ser editados ou excluídos diretamente no módulo do livro caixa.
        
2.  **Lançamentos Automáticos**
    
    *   Não podem ser alterados ou excluídos.
        
    *   Para modificar ou excluir, é necessário desfazer a operação original, como:
        
        *   Estorno de uma **fatura de** **cartão** ou **convênio**.
            
        *   Estorno de um **pagamento registrado em** **Contas a Pagar**.
            

**Consulta de Lançamentos**

Para consultar um lançamento, seja manual ou automático:

1.  Acesse a data específica no livro caixa.
    
2.  Clique no ícone ao lado do registro a ser consultado.
    
3.  Visualize as informações conforme o tipo de lançamento (manual ou automático).
    

#DEEBFF

**Lançamentos Manuais**

Consulta de lançamento manual

Na tela de edição, o box **Alterar Lançamento** permite modificar as seguintes informações:

*   **Conta Origem, Conta Aplicação, Histórico, Documento, Competência, Valor (R$), Turno, Centro de Resultado** e **Fornecedor.**
    

Após realizar as alterações necessárias, clique em para salvar as mudanças.

#DEEBFF

**Lançamentos Automáticos**

Consulta de lançamento automático

A tela apresenta dois boxes:

1.  Box **Alterar Lançamento:** Todas as informações estão bloqueadas, servindo apenas para consulta. É possível visualizar os dados do registro, mas não alterá-los.
    
2.  Box **Detalhes do Lançamento:** Exibe uma lista detalhada dos lançamentos que compõem o valor registrado no livro caixa. Por exemplo, no caso de convênios, são listados todos os lançamentos do dia.
    

Conferência de saldos
---------------------

A conferência dos saldos das contas registradas no livro caixa é essencial para garantir a precisão das informações financeiras e facilitar o gerenciamento das operações. Este processo abrange a verificação de contas bancárias, conta de dinheiro, convênios, cartões de crédito e débito etc.

**Etapas para Conferir os Saldos**

1.  **Acesse o Menu Relatórios > Livro Caixa**
    
    *   Navegue até o módulo de relatórios no sistema e selecione o relatório de **Livro Caixa**.
        

2.  **Selecione a Data do Movimento**
    
    *   Escolha a data específica para realizar a conferência dos saldos.
        

3.  **Verifique os Saldos por Conta**
    
    *   No final do relatório, há um quadro detalhado com as seguintes informações:
        
        *   **Grupo da Conta:** Classificação geral da conta.
            
        *   **Nome da Conta:** Identificação específica da conta.
            
        *   **Saldo até o Dia Anterior:** Valor acumulado antes do dia consultado.
            
        *   **Movimentação do Dia:** Detalha as movimentações realizadas na data selecionada:
            
            *   **Saldo de Origem:** Somatório dos valores em que a conta foi utilizada como origem.
                
            *   **Saldo de Aplicação:** Somatório dos valores em que a conta foi utilizada como aplicação.
                
            *   **Saldo Final do Dia:** Calculado a partir do Saldo de Origem + Saldo de Aplicação.
                
        *   **Saldo Atual:** Resultante do **Saldo até o Dia Anterior** + **Saldo Final do Dia**.
            

**Orientações para Conferência dos Principais Tipos de Conta**

*   **Contas Bancárias**
    
    *   Confirme se o saldo registrado no livro caixa corresponde ao saldo informado no extrato bancário.
        
    *   Valide depósitos, transferências, tarifas bancárias e outros lançamentos que possam impactar o saldo.
        
*   **Conta de Dinheiro (Caixa Físico)**
    
    *   Compare o saldo registrado com o valor físico disponível no caixa.
        
    *   Verifique entradas e saídas, como recebimentos em dinheiro e pagamentos realizados.
        
*   **Conta de Convênios**
    
    *   Revise os lançamentos associados a convênios e valide os valores recebidos ou a receber.
        
    *   Confirme se os pagamentos realizados pelos convênios estão devidamente registrados.
        
*   **Cartões de Crédito e Débito**
    
    *   Analise os registros de vendas realizadas com cartões.
        
    *   Compare com os extratos fornecidos pelas operadoras de cartão.
        
*   **Vales de Funcionários**
    
    *   Confira se os vales concedidos a funcionários estão corretamente registrados.
        
    *   Verifique se os valores descontados no sistema correspondem aos valores efetivamente pagos ou deduzidos em folha.
        

**Boas Práticas para Conferência**

*   **Regularidade**
    
    *   Realize a conferência dos saldos regularmente, preferencialmente diariamente, para identificar inconsistências rapidamente.
        
*   **Documentação**
    
    *   Mantenha os comprovantes de depósitos, pagamentos e extratos à disposição para facilitar a validação das informações.
        
*   **Rastreabilidade**
    
    *   Use o histórico e os detalhes dos lançamentos disponíveis no sistema para rastrear origens e destinos dos valores.
        
*   **Ajustes Necessários**
    
    *   Caso identifique divergências, registre os ajustes manualmente no livro caixa ou corrija a operação original, conforme aplicável.