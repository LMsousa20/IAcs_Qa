---
title: Cheques [Venda]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/252444673
---

# Cheques [Venda]

16truenonelisttrue

Cheques
=======

O **Módulo de Cheques** é utilizado para consultar, inserir, modificar e excluir lançamentos de pagamentos via cheque, das movimentações do caixa durante o turno de trabalho dos operadores, garantindo que todos estejam corretamente registrados na prestação de contas.

A conferência desses lançamentos é fundamental para assegurar que os dados financeiros estejam corretos, evitando inconsistências nos relatórios.

Existem duas maneiras de acessar o módulo de cheques:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral dos dois tipos de cheques (À vista e A prazo).
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > Caixas de Venda > Cheques

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a Prestação de Contas, clique no botão correspondente à finalizadora ( ou ) para ser direcionado ao módulo de cheques do tipo selecionado.
    
*   Com esse atalho, é possível acessar mais facilmente as transações da prestação de contas em conferência.
    

Consulta de cheques
-------------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos cheques lançados, tendo como objetivo principal garantir a **conferência precisa dos lançamentos** para evitar falhas ou duplicidades. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Caixas de Venda > Cheques**, a tela de listagem dos cheques apresenta as seguintes características:

Tela inicial módulo de cheques (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtros como `Turno`, `Operador` e `Tipo` de cheque estarão configurados para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de cheque. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data` e `Data Emissão`.
    
*   Botão : Não é exibido nessa forma de acesso.
    
*   Botão : Também localizado no canto superior direito, permite realizar operações como: `Depósito`, `Devolução` e `Reapresentação`.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de cheques por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de cheques (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas`, `Turno` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Filtro `Tipo` de cheque: Será filtrado de acordo com a finalizadora ( ou ) selecionada na prestação.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de cheque. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Data Emissão`, `Turno` e `Operador` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    
*   Botão : Localizado no canto superior direito, permite realizar operações como: `Depósito`, `Devolução` e `Reapresentação`.
    

Independentemente da forma de acesso ao módulo de cheques, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `PDV`: Permite selecionar em qual Ponto de Venda (PDV) os cheques foram lançados. Se a opção padrão `Todos` for mantida, não haverá restrição quanto ao PDV.
    
*   `Caixas Venda`: Permite selecionar o(s) caixa(s) em que os cheques foram lançados. Se a opção padrão `Todos` for mantida, a pesquisa abrangerá todos os caixas disponíveis. Ao clicar no filtro, será apresentada uma tela para selecionar o(s) caixa(s) desejado(s). É necessário que os campos `Data Inicial` e `Data Final` estejam preenchidos.
    
*   `Situação`: Permite filtrar os cheques conforme seu status atual:
    
    *   `Resgatados`: Cheques retirados pelo emissor antes da compensação, com pagamento registrado por outro meio.
        
    *   `Devolvidos e Quitados`: Cheques que foram devolvidos pelo banco, mas posteriormente regularizados e pagos.
        
    *   `A Depositar`: Cheques recebidos que ainda não foram depositados na conta bancária.
        
    *   `Devolvidos Pendentes`: Cheques devolvidos pelo banco que ainda não foram regularizados ou pagos.
        
    *   `Depositados`: Indica cheques que passaram pelo processo de compensação bancária, com crédito confirmado em conta. Esse status pode ser revertido em situações de exceção, como devolução por insuficiência de fundos.
        
    *   `Recebidos`: Indica cheques cujo valor já foi efetivamente pago, independentemente da forma de liquidação. Inclui cheques `Depositados` (e compensados) , `Resgatados` e `Quitados` após devolução, permitindo o acompanhamento de todos os cheques que resultaram em recebimento.
        

Se a opção `Todos` for mantida, a pesquisa abrangerá todas as situações.

*   `Tipo de Data`: Define o critério de data para a consulta.
    
    *   `Data do Caixa`: Data de abertura do caixa.
        
    *   `Data de Emissão`: Data em que o cheque foi emitido.
        
    *   `Bom Para`: Data agendada para depósito de cheques pré-datados.
        
    *   `Depósito`: Data de apresentação do cheque ao banco para compensação.
        
*   `Tipo`: Permite filtrar os lançamentos de acordo com o tipo de cheque, sendo as opções disponíveis: `Todos`, `À Vista` e `Pré-Datado`.
    
*   `Histórico do Cliente`: Classificação do cliente quanto à sua situação de crédito junto à empresa (liberado ou bloqueado para compras). Ao selecionar essa opção, uma tela será exibida para escolha do(s) histórico(s) desejado(s) (previamente cadastrados em `Menu Cadastro > Históricos`.)
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar os cheques, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    
*   `CPF/CNPJ`: Permite filtrar cheques pelo CPF ou CNPJ do cliente.
    
*   `Cheque`: Permite pesquisar pelo número específico do cheque.
    
*   `Cliente`: Selecione o cliente ao qual os cheques foram lançados. Caso opte por `Todos`, a listagem incluirá os cheques de todos os clientes cadastrados.
    
*   `Emitente`: Pessoa ou empresa que emitiu o cheque.
    
*   `Banco`: Código da instituição financeira responsável pela conta do emitente e processamento da transação.
    
*   `Agência`: Unidade bancária onde a conta do emitente está registrada.
    
*   `Conta`: Número da conta bancária do emitente, vinculada à agência e ao banco.
    
*   `Alínea`: Código numérico que indica o motivo da devolução de um cheque ou outra ocorrência bancária.
    

Após definir os filtros, clique no botão . A listagem de cheques será exibida conforme os critérios de busca.

* * *

Conferência de cheques
----------------------

A conferência dos lançamentos de cheques é um passo crucial para garantir que os valores registrados no sistema estejam corretos e correspondam às transações reais realizadas no ponto de venda. Para realizar essa conferência, siga os passos abaixo:

Acesse o **Módulo de Cheques**.

Aplique os filtros necessários para localizar os lançamentos que precisam ser conferidos, como `Data`, `Turno`, `Operador` e `Tipo` de Cheque. Esses filtros permitem uma busca mais precisa e focada nos cheques referentes ao movimento que está sendo analisado.

Após aplicar os filtros, clique em para atualizar a listagem dos lançamentos de cheques. As seguintes verificações devem ser feitas para garantir que as transações estão corretas:

*   `Lançamentos de Cheques`: Confirme se todos os cheques foram devidamente lançados no sistema, de acordo com as informações contidas nos cheques físicos.
    
*   `Lançamentos Indevidos`: Verifique se há lançamentos que não pertencem ao movimento ou caixa sendo conferido.
    
*   `Verificação dos Dados`: Certifique-se de que os seguintes dados estejam corretamente preenchidos para cada transação:
    
    *   `CMC-7 (Caracteres Magnéticos Codificados em 7 barras)`: Verifique se o código lançado corresponde ao código real do cheque.
        
    *   `Bom para`: Verifique a data futura indicada no cheque para compensação, definida pelo emitente, representando quando o valor poderá ser descontado.
        
    *   `Número Cheque`, `Comp.`, `Banco`, `Agencia` e `Conta`: Esses números devem coincidir com os registrados no próprio cheque.
        
    *   `Valor`: O montante informado deve coincidir com o registrado no próprio cheque.
        
*   A conferência de todas essas informações deve ser realizada comparando os valores dos lançamentos no sistema com os próprios cheques físicos. Essa verificação é essencial para assegurar que os lançamentos estão corretos e não há divergências entre o sistema e as informações contidas nos cheques.
    

* * *

Inclusão de cheques
-------------------

Durante o processo de conferência, se for identificado que algum lançamento de cheque está faltando, siga os passos abaixo para incluir o lançamento manualmente:

Acesse o **Módulo de Cheques**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo lançamento.

A seguinte tela será apresentada:

Tela para inclusão de novo cheque

Preencha os campos com as informações referentes ao cheque:

*   `Empresa`: Selecione a empresa vinculada à transação.
    
*   `Data`: Informe a data da prestação em que a transação constará.
    
*   `Turno`: Selecione o turno do caixa.
    
*   `PDV`: Indique o Ponto de Venda (PDV) onde o cheque foi lançado.
    
*   `Caixa Venda`: Indique o caixa de venda pertencente ao PDV ao qual o cheque será vinculado.
    
*   `Operador`: Selecione o operador que realizou a transação.
    
*   `Venda`(Opcional): Número de identificação da venda. Ao clicar no ícone , será apresentada a seguinte tela para facilitar a busca e seleção da mesma:
    

Tela para seleção de venda

Utilize os filtros disponíveis para localizar a venda desejada com mais precisão. Após localizar a venda correta, selecione-a na listagem.

*   `Data Emissão`: Data da emissão do cheque.
    

Guia CLIENTE1800

Esta guia contém informações específicas do cliente previamente cadastrado no sistema:

*   `Cliente`: Ao clicar neste campo, será apresentada uma tela para seleção do cliente a ser associado ao cheque.
    

:info:atlassian-info:info:#B3D4FF

Os campos `Nome`, `CPF/CNPJ` e `Histórico` serão preenchidos automaticamente de acordo com os dados do cadastro do cliente selecionado.

Guia TITULAR1800

Esta guia exibe as informações do titular do cheque, preenchidas automaticamente com os dados do cliente selecionado na guia anterior. No entanto, caso o cheque seja de terceiros, os dados podem ser alterados.

*   `CPF/CNPJ`: Identifica o titular do cheque para controle e rastreabilidade.
    
*   `Emitente`: Pessoa física ou jurídica que emitiu o cheque.
    

Guia CHEQUE1800

Nesta guia, devem ser informados os detalhes da transação do cheque:

*   `Situação`: Definido automaticamente como **A Depositar**, sendo alterado conforme o ciclo de pagamento.
    
*   `Valor`: Informe o montante financeiro especificado no cheque.
    
*   `Tipo`: Classifica o cheque conforme sua origem ou finalidade.
    
    *   `À Vista`: Indique se o cheque pode ser descontado ou depositado imediatamente.
        
    *   `Pré-datado`: Indique se o cheque foi emitido com uma data futura acordada, podendo ser depositado apenas na data indicada.
        
*   `Data Bom Para`: Informe a data acordada para compensação (relevante para cheques pré-datados).
    
*   `Data Depósito`: Momento em que o cheque foi efetivamente depositado no banco para compensação. Será preenchido somente após a operação de `Depósito` do mesmo.
    
*   `Comp.`: Informe o código de compensação bancária, usado para identificar a transação dentro do sistema financeiro.
    
*   `Banco`: Informe o código do banco emissor do cheque, ou seja, a instituição financeira onde o emitente possui conta e de onde os fundos serão debitados.
    
*   `Agência`: Informe o código da agência bancária vinculada à conta do emitente do cheque.
    
*   `Conta`: Informe o número da conta corrente associada ao cheque, permitindo a identificação da origem do pagamento.
    
*   `Cheque`: Informe o número único do cheque, impresso no documento físico, essencial para controle e rastreamento.
    
*   `Cidade`: Selecione a localidade associada à emissão do cheque.
    
*   `UF`: Informada automaticamente de acordo com a cidade selecionada.
    

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do lançamento no sistema.

* * *

Modificação de cheques
----------------------

Caso seja identificado algum erro em um lançamento de cheque durante o processo de conferência, como tipo de cheque diferente ou valor e data 'Bom Para' incorretos, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de Cheques**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente à transação que será modificada.

A seguinte tela será apresentada:

Tela para edição de lançamento de cheques

Realize as correções necessárias nos campos, como:

*   `Valor (R$)`: Atualize o valor da transação, conforme necessário.
    
*   `Tipo`: Corrija o tipo do cheque, se necessário.
    
*   `Data Bom Para`: Altere a data bom para, se necessário.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: O campo `Valor (R$)` pode ser alterado apenas para um valor **menor** que o valor da venda vinculada ao lançamento. Caso o valor precise ser alterado para um valor superior ao da venda atual, podem ser realizadas duas operações. Clique no ícone do campo `Venda`. A seguinte tela será apresentada:

Utilize os filtros disponíveis para localizar uma venda com valor igual ou superior ao novo valor desejado. Após encontrar, selecione-a na listagem.

Ou clique no botão para desvincular a venda do lançamento.

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

**Restrição de modificação:**

A edição dos dados de um cheque só estará habilitada quando o status estiver como `A Depositar`. Nos demais status, o ícone ficará disponível apenas para consulta.

* * *

Exclusão de cheques
-------------------

Caso seja identificado algum lançamento de cheque que esteja **duplicado** ou **incorreto** durante o processo de conferência, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de Cheques**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

A seguinte tela será apresentada:

Tela para confirmação da exclusão

Clique no botão para confirmar a exclusão da transação. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.

**Restrição de exclusão:**

A exclusão de um cheque só estará habilitada quando o status estiver como `A Depositar`. Nos demais status, o ícone ficará desabilitado.

* * *

Operações com cheques
---------------------

Serão apresentadas as principais operações realizadas com cheques no sistema. Cada operação representa uma etapa do ciclo de tratamento dos cheques, permitindo o correto controle e acompanhamento.  
As operações disponíveis são:

`Depósito`: envio do cheque ao banco para compensação;

`Devolução`: registro da devolução de um cheque pelo banco ou pelo cliente;

`Reapresentação`: nova apresentação de um cheque que havia sido devolvido.

* * *

### Operação: Depósito

O depósito é a etapa em que os cheques registrados no sistema são apresentados ao banco para compensação. Esse processo garante que cada cheque seja corretamente registrado e monitorado até sua compensação bancária. Para registrar o depósito, siga os passos abaixo:

Acesse o **Módulo de Cheques**.

Selecione um ou mais cheques a serem depositados marcando a caixa de seleção ao lado de cada um.

**Atenção**

*   Somente cheques com status de `A Depositar` podem ser depositados.
    
*   Todos os cheques selecionados serão depositados na mesma data.
    

Clique no botão e, em seguida, na opção `Depósito`. A seguinte tela será apresentada:

Tela de depósito de cheque

Preencha os campos com as informações referentes ao depósito:

*   `Conta Aplicação`: Conta bancária na qual o cheque será depositado.
    
*   `Ordem`: Permite definir a sequência de cheques quando mais de um é selecionado, podendo ser organizada por:
    
    *   `Data de Emissão`: Data em que o cheque foi emitido pelo cliente.
        
    *   `Data Bom Para`: Data futura indicada para a compensação do cheque (pré-datado).
        
*   `Operação`: Indica o tipo de movimentação do cheque. Na tela de depósito de cheques, o status da operação é definido automaticamente como `Depositar`.
    
*   `Data da Operação`: Digite a data em que o cheque foi efetivamente depositado no banco.
    

Na listagem abaixo será possível visualizar as informações do(s) cheque(s) como: `Emitente`, `Banco`, `Agência`, `Cheque`, `Emissão`, `Bom Para` e `Valor (R$)`.

O ícone remove o cheque da listagem de depósito.

Para concluir a operação de depósito do(s) cheque(s), clique no botão . O cheque terá seu status alterado para `Depositado`.

* * *

### Operação: Devolução

A devolução ocorre quando um cheque é retornado pelo banco sem compensação, seja por insuficiência de fundos, sustação, divergência de assinatura ou outro motivo de retorno informado pela instituição bancária. O registro dessa operação no sistema é essencial para manter o histórico correto dos cheques e possibilitar o acompanhamento das medidas necessárias. Para registrar a devolução, siga os passos abaixo:

Acesse o **Módulo de Cheques**.

Selecione um ou mais cheques a serem devolvidos marcando a caixa de seleção ao lado de cada um.

**Atenção**

*   Somente cheques com status de `Depositado` podem ser devolvidos.
    
*   Todos os cheques selecionados serão devolvidos na mesma data.
    

Clique no botão e, em seguida na opção `Devolução`. A seguinte tela será apresentada:

Tela de devolução de cheque

Preencha os campos com as informações referentes à devolução:

*   `Ordem`: Permite definir a sequência de cheques quando mais de um é selecionado, podendo ser organizada por:
    
    *   `Data de Emissão`: Data em que o cheque foi emitido pelo cliente.
        
    *   `Data Bom Para`: Data futura indicada para a compensação do cheque (pré-datado).
        
*   `Operação`: Indica o tipo de movimentação do cheque. Na tela de devolução de cheques, o status da operação é definido automaticamente como `Devolução`.
    
*   `Data da Operação`: Digite a data em que o cheque foi devolvido pelo banco.
    

Na listagem abaixo será possível visualizar algumas informações do(s) cheque(s) como: `Emitente`, `Banco`, `Agência`, `Cheque`, `Emissão`, `Bom Para`, `Valor (R$)`, `Data Dep`.

*   `Alínea`: Selecione o código de motivo da devolução do cheque.
    

**Atenção**

Nos casos em que a devolução ocorrer pelas alíneas 43 (cheque já devolvido anteriormente por motivo de sustação ou revogação) ou 49 (cheque já devolvido anteriormente por irregularidades formais graves), o **sistema bloqueará automaticamente a tentativa de reapresentação, caso necessária**.

*   `Histórico`: Escolha a classificação do cliente quanto à sua situação de crédito na empresa (`Liberado` ou `Bloqueado`).
    

O ícone remove o cheque da listagem de devolução.

Para concluir a operação de devolução do(s) cheque(s), clique no botão . O cheque terá seu status alterado para `Devolvido e Pendente`.

* * *

### Operação: Reapresentação

A reapresentação é utilizada quando um cheque que havia sido devolvido volta a ser enviado ao banco para uma nova tentativa de compensação. Esse procedimento garante o registro correto do histórico do cheque e permite seu acompanhamento adequado no sistema. Para registrar a reapresentação, siga os passos abaixo:

Acesse o **Módulo de Cheques**.

Selecione um ou mais cheques a serem reapresentados marcando a caixa de seleção ao lado de cada um.

**Atenção**

*   Somente cheques com status de `Devolvido e Pendente` podem ser reapresentados.
    
*   Todos os cheques selecionados serão reapresentados na mesma data.
    

Clique no botão e, em seguida na opção `Reapresentação`. A seguinte tela será apresentada:

Tela de reapresentação de cheque

Preencha os campos com as informações referentes à reapresentação:

*   `Conta Aplicação`: Conta bancária na qual o cheque será reapresentado.
    
*   `Ordem`: Permite definir a sequência de cheques quando mais de um é selecionado, podendo ser organizada por:
    
    *   `Data de Emissão`: Data em que o cheque foi emitido pelo cliente.
        
    *   `Data Bom Para`: Data futura indicada para a compensação do cheque (pré-datado).
        
*   `Operação`: Indica o tipo de movimentação do cheque. Na tela de reapresentação de cheques, o status da operação é definido automaticamente como `Reapresentação`.
    
*   `Data da Operação`: Digite a data em que o cheque foi efetivamente reapresentado ao banco.
    

Na listagem abaixo será possível visualizar as informações do(s) cheque(s) como: `Emitente`, `Banco`, `Agência`, `Cheque`, `Emissão`, `Bom Para` e `Valor (R$)`.

:info:atlassian-info#B3D4FF

O ícone remove o cheque da listagem de reapresentação.

Para concluir a operação de reapresentação do(s) cheque(s), clique no botão . O cheque terá seu status alterado para `Depositado`.