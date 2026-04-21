---
title: Cheques [Gerência]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/275382295
---

# Cheques [Gerência]

16truenonelisttrue

Cheques
=======

O **Módulo de Cheques da Gerência** é utilizado para consultar, inserir, modificar e excluir lançamentos de pagamentos com cheques. Esse módulo registra as movimentações financeiras dos recebimentos efetuados diretamente na gerência da empresa, garantindo que todas as transações estejam corretamente cadastradas no sistema.

A conferência desses lançamentos é fundamental para assegurar a precisão dos dados financeiros, evitando inconsistências nos relatórios e garantindo um controle eficiente.

**Observação**

Os lançamentos de cheques realizados no **Caixa de Vendas** são apresentados também no **Caixa da Gerência**, devido as funcionalidades exclusivas desse módulo, como `Resgatar`, `Quitar` e `Estornar`.

No entanto, os lançamentos efetuados diretamente no **Caixa da Gerência** não são apresentados no **Caixa de Vendas.**

O módulo pode ser acessado de duas maneiras:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os tipos de cheques (À vista e A prazo).
    
*   Permite consultas amplas, com filtros padrões mais abrangentes.
    

Menu Movimento > Caixas da Gerência > Cheques

**Botão correspondente à finalizadora** **dentro da Prestação de Contas** **do Caixa da Gerência**

*   Ao acessar a Prestação de Contas, clique no botão correspondente à finalizadora ( ou ) para ser direcionado ao módulo de cheques do tipo selecionado.
    
*   Com esse atalho, é possível acessar mais facilmente as transações da prestação de contas em conferência.
    

Consulta de cheques
-------------------

Seja qual for a forma de acesso, a tela exibida é a de listagem dos cheques lançados, tendo como objetivos principais a **conferência precisa dos lançamentos** e o **gerenciamento de operações**. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Caixas da Gerência > Cheques**, a tela de listagem dos cheques apresenta as seguintes características:

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtros como `Operador` e `Tipo` de cheque estarão configurados para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de cheque. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data`, `Caixa Gerência`, `Operador` e `Data Emissão`.
    
*   Botão : Não é exibido nessa forma de acesso.
    
*   Botão : Também localizado no canto superior direito, permite realizar operações como: `Depósito`, `Devolução` e `Reapresentação`.
    

#DEEBFF

**Acesso pela Prestação de Contas - Gerência**

Ao acessar o módulo de cheques por meio da **prestação de contas - Gerência**, os filtros da tela são ajustados conforme as informações da prestação em análise:

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Filtro `Tipo` de cheque: Será filtrado de acordo com a finalizadora ( ou ) selecionada na prestação.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de cheque. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Caixa Gerência`, `Operador` e `Data Emissão` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    
*   Botão : Localizado no canto superior direito, permite realizar operações como: `Depósito`, `Devolução` e `Reapresentação`.
    

Independentemente da forma de acesso ao módulo de cheques, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `Situação`: Permite filtrar os cheques conforme seu status atual.
    
    *   `Resgatados`: Cheques retirados pelo emissor antes da compensação, com pagamento registrado por outro meio.
        
    *   `Devolvidos e Quitados`: Cheques que foram devolvidos pelo banco, mas posteriormente regularizados e pagos.
        
    *   `A Depositar`: Cheques recebidos que ainda não foram depositados na conta bancária.
        
    *   `Devolvidos Pendentes`: Cheques devolvidos pelo banco que ainda não foram regularizados ou pagos.
        
    *   `Depositados`: Indica cheques que passaram pelo processo de compensação bancária, com crédito confirmado em conta. Esse status pode ser revertido em situações de exceção, como devolução por insuficiência de fundos.
        
    *   `Recebidos`: Indica cheques cujo valor já foi efetivamente pago, independentemente da forma de liquidação. Inclui cheques `Depositados` (e compensados), `Resgatados` e `Quitados` após devolução, permitindo o acompanhamento de todos os cheques que resultaram em recebimento.
        

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
    
*   `Caixa Gerência`: Código que identifica o caixa da gerência. O sistema exibe apenas o caixa válido para a data informada.
    
*   `Operador`: O campo é preenchido automaticamente pelo sistema, de acordo com o Caixa Gerência selecionado.
    
*   `Data Emissão`: Data da emissão do cheque.
    

Guia CLIENTE1800

Esta guia contém informações específicas do cliente previamente cadastrado no sistema:

*   `Cliente`: Ao clicar neste campo, será apresentada uma tela para seleção do cliente a ser associado ao cheque.
    

:note:atlassian-note#B3D4FF

Os campos `Nome`, `CPF/CNPJ` e `Histórico`serão preenchidos automaticamente de acordo com os dados do cadastro do cliente selecionado.

Guia TITULAR1800

Esta guia exibe as informações do titular do cheque, preenchidas automaticamente com os dados do cliente selecionado na guia anterior. No entanto, caso o cheque seja de terceiros, os dados podem ser alterados.

*   `CPF/CNPJ`: Identifica o titular do cheque para controle e rastreabilidade.
    
*   `Emitente`: Pessoa física ou jurídica que emitiu o cheque.
    

Guia CHEQUE1800

Nesta guia, devem ser informados os detalhes da transação do cheque:

*   `Situação`: Definido automaticamente como **A Depositar**, podendo ser alterado conforme o ciclo de pagamento.
    
*   `Valor (R$)`: Informe o montante financeiro especificado no cheque.
    
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
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

**Restrições de modificação:**

*   A edição de um cheque só estará habilitada quando:
    
    *   O status estiver como `A Depositar`.
        
    *   A origem do cheque **não** for oriunda de processos em outros módulos, como quitação de fatura de convênio.
        

* * *

Exclusão de cheques
-------------------

Caso seja identificado algum lançamento de cheque que esteja **duplicado** ou **incorreto** durante o processo de conferência, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de Cheques**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

A seguinte tela será apresentada:

Tela para confirmação da exclusão

Clique no botão para confirmar a exclusão da transação. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa da gerência, garantindo que todos os dados financeiros estejam atualizados e precisos.

**Restrições de exclusão:**

*   A exclusão de um cheque só estará habilitada quando:
    
    *   O status estiver como `A Depositar`.
        
    *   A origem do cheque não for oriunda de processos em outros módulos, como quitação de fatura de convênio.
        

* * *

Operações com cheques
---------------------

Diferente do módulo de **Cheques no Caixa de Vendas**, este módulo inclui funcionalidades adicionais voltadas para a gestão financeira de cheques. Cada operação corresponde a uma etapa específica no tratamento de cheques:

`Depósito`: envio do cheque ao banco para compensação;

Desfazer Depósito:

`Devolução`: registro da devolução de um cheque pelo banco ou pelo cliente;

`Reapresentação`: reapresentação de um cheque que havia sido devolvido, buscando sua compensação novamente.

**Observação**: As operações acima também estão disponíveis no módulo **Caixa de Vendas**.

`Resgate`: recuperação do cheque antes de seu depósito bancário, realizando a troca por outra forma de pagamento.

`Quitação`: troca do cheque por outra forma de pagamento após o depósito e devolução do cheque. Geralmente ocorre quando não é possível realizar a reapresentação do cheque.

`Estorno`: registro do estorno de um pagamento (resgate ou quitação) que foi realizado em troca do cheque.

**Importante:** As operações `Resgate`, `Quitação` e `Estorno` são exclusivas do módulo **Caixa Gerência** e não estão disponíveis no módulo **Caixa de Vendas**.

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
    

Na listagem abaixo será possível visualizar as informações do cheque como: `Emitente`, `Banco`, `Agência`, `Cheque`, `Emissão`, `Bom Para` e `Valor (R$)`.

O ícone remove o cheque da listagem de depósito.

Para concluir a operação de depósito do(s) cheque (s), clique no botão . O cheque terá seu status alterado para `Depositado`.

* * *

### Operação: Desfazer Depósito

O Desfazer Depósito é a operação utilizada para reverter um depósito de cheques anteriormente registrado no sistema. Esse procedimento retorna os cheques ao status anterior ao depósito, permitindo que sejam corrigidos, ajustados ou incluídos em um novo depósito, quando necessário. Para desfazer o depósito, siga os passos abaixo:

Acesse o **Módulo de Cheques**.

Para facilitar o processo utilize o filtro `Situação` para exibir apenas os cheques Depositados.

Selecione o cheque que será desfeito o depósito e clique no ícone . Em seguida, confirme a operação clicando no botão para efetivar a reversão do depósito.

Tela de confirmação de reversão de depósito

Efetuada a reversão, o cheque será novamente classificado como **A Depositar**, ficando disponível para novo processamento.

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

Preencha os campos com as informações referente a devolução:

*   `Ordem`: Permite definir a sequência de cheques quando mais de um é selecionado, podendo ser organizada por:
    
    *   `Data de Emissão`: Data em que o cheque foi emitido pelo cliente.
        
    *   `Data Bom Para`: Data futura indicada para a compensação do cheque (pré-datado).
        
*   `Operação`: Indica o tipo de movimentação do cheque. Na tela de devolução de cheques, o status da operação é definido automaticamente como `Devolução`.
    
*   `Data da Operação`: Digite a data em que o cheque está sendo devolvido no sistema.
    

Na listagem abaixo será possível visualizar algumas informações do cheque como: `Emitente`, `Banco`, `Agência`, `Cheque`, `Emissão`, `Bom Para`,`Valor (R$)`, `Data Dep`.

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

Preencha os campos com as informações referente à reapresentação:

*   `Conta Aplicação`: Conta bancária na qual o cheque será reapresentado.
    
*   `Ordem`: Permite definir a sequência de cheques quando mais de um é selecionado, podendo ser organizada por:
    
    *   `Data de Emissão`: Data em que o cheque foi emitido pelo cliente.
        
    *   `Data Bom Para`: Data futura indicada para a compensação do cheque (pré-datado).
        
*   `Operação`: Indica o tipo de movimentação do cheque. Na tela de reapresentação de cheques, o status da operação é definido automaticamente como `Reapresentação`.
    
*   `Data da Operação`: Digite a data em que o cheque foi efetivamente reapresentado ao banco.
    

Na listagem abaixo será possível visualizar algumas informações do cheque como: `Emitente`, `Banco`, `Agência`, `Cheque`, `Emissão`, `Bom Para` e `Valor (R$)`.

:info:atlassian-info#B3D4FF

O ícone remove o cheque da listagem de reapresentação.

Para concluir a operação de reapresentação do(s) cheque(s), clique no botão . O cheque terá seu status alterado para `Depositado`.

* * *

### Operação: Resgate resgate

O resgate é a operação aplicada a cheques recebidos que **ainda não foram depositados**. Nesta etapa, o cliente retira o cheque junto ao posto e efetua o pagamento por **outra forma de recebimento**, garantindo que o valor seja quitado sem que o cheque seja enviado ao banco. Para registrar a operação de resgate, siga os passos abaixo:

Acesse o **Módulo de Cheques - Caixa Gerência**.

Localize o cheque que será resgatado e clique no ícone . A seguinte tela será apresentada:

Tela de resgate de cheque

**Atenção**

*   Somente cheques com status de `A Depositar` e sem histórico de depósito podem ser resgatados.
    
*   O resgate só pode ser realizado de um cheque por vez.
    

No box **Resgatar Cheque**, é possível visualizar as informações do cheque selecionado:

Guia TITULAR1800

Apresentam dados do cliente para consulta, sem possibilidade de alteração:

*   `Cód. Cliente`: Código interno do cliente no sistema.
    
*   `CPF/CNPJ`: Documento do cliente, carregado automaticamente do cadastro.
    
*   `Nome`: Nome completo do cliente.
    
*   `Histórico do Cliente`: Exibe o a classificação quanto a situação de crédito na empresa.
    

Guia CHEQUE1800

Apresentam dados do cheque para consulta, sem possibilidade de alteração:

*   `Status`: Preenchido automaticamente como `A Depositar`.
    
*   `Valor`: Valor do cheque.
    
*   `Tipo`: Tipo do cheque (à vista ou a prazo).
    
*   `Emissão`: Data de emissão do cheque.
    
*   `Bom Para`: Data em que o cheque poderá ser compensado, usada principalmente em cheques **a prazo**.
    
*   `Depósito`: Data em que o cheque foi depositado. Nesse caso, sempre estará em branco.
    
*   `Comp.`: Código de compensação do cheque.
    
*   `Banco`: Código do banco emissor do cheque.
    
*   `Agência`: Agência vinculada à conta do cheque.
    
*   `Conta`: Número da conta corrente do cheque.
    
*   `Cheque`: Número do cheque.
    
*   `Cidade`: Cidade onde o cheque foi emitido.
    
*   `UF`: Estado (unidade da federação) da cidade de emissão.
    

Guia QUITAÇÃO1800

Esta guia é utilizada para registrar as condições de pagamento de um **cheque resgatado**, permitindo informar a data do pagamento, a conta utilizada e eventuais ajustes financeiros, como multa, juros ou desconto.

*   `Data de Pagamento`: Informe a data em que o cheque foi resgatado pelo cliente.
    
*   `Conta Origem`: Selecione a conta de onde será retirado o pagamento. Este campo é atualizado automaticamente de acordo com o tipo de cheque e seu status no sistema.
    
*   `Multa por Atraso (R$)`(Opcional): Insira o valor da multa aplicada caso o pagamento tenha ocorrido fora do prazo.
    
*   `Juros por Atraso (R$)`(Opcional): Informe o valor de juros incidentes pelo atraso no pagamento.
    
*   `Desconto (R$)`(Opcional): Digite o valor do desconto concedido no momento do resgate.
    
*   `Valor Pago (R$)`: Exibe automaticamente o valor efetivamente pago, considerando os ajustes informados.
    
*   `Valor Pendente (R$)`: Mostra o valor que ainda falta ser pago, calculado automaticamente pelo sistema da seguinte forma:
    
    *   Valor Pendente = (Valor do Cheque + Juros e Multas) - (Desconto + Valor Pago)
        

Após preencher os campos na guia Quitação, clique no botão localizado no box **Forma de Pagamento** para prosseguir.

Informe a(s) nova(s) forma(s) de pagamento utilizada(s) pelo cliente e confirme a operação de resgate clicando no botão . O cheque terá seu status alterado para `Resgatado`.

* * *

### Operação: Quitação

A quitação é a operação utilizada para substituir um cheque por **outra forma de pagamento** após o **depósito e devolução do mesmo**. Essa operação é normalmente aplicada quando **não é mais possível realizar a reapresentação** do cheque, garantindo que o valor devido seja regularizado de forma adequada. Para registrar a operação de quitação, siga os passos abaixo:

Acesse o **Módulo de Cheques - Caixa Gerência**.

Localize o cheque que será quitado e clique no ícone . A seguinte tela será apresentada:

**Atenção**

*   Somente cheques com status de `Devolvido e Pendente` podem ser quitados.
    
*   A quitação só pode ser realizada de um cheque por vez.
    

No box **Quitar Cheque**, é possível visualizar as informações do cheque selecionado:

Guia TITULAR1800

Apresentam dados do cliente para consulta, sem possibilidade de alteração:

*   `Cód. Cliente`: Código interno do cliente no sistema.
    
*   `CPF/CNPJ`: Documento do cliente, carregado automaticamente do cadastro.
    
*   `Nome`: Nome completo do cliente.
    
*   `Histórico do Cliente`: Exibe o a classificação quanto a situação de crédito na empresa.
    

Guia CHEQUE1800

Apresentam dados do cheque para consulta, sem possibilidade de alteração:

*   `Status`: Preenchido automaticamente como `Devolvido e Pendente`.
    
*   `Valor`: Valor do cheque.
    
*   `Tipo`: Tipo do cheque (à vista ou a prazo).
    
*   `Emissão`: Data de emissão do cheque.
    
*   `Bom Para`: Data em que o cheque poderá ser compensado, usada principalmente em cheques **a prazo**.
    
*   `Depósito`: Data em que o cheque foi depositado.
    
*   `Comp.`: Código de compensação do cheque.
    
*   `Banco`: Código do banco emissor do cheque.
    
*   `Agência`: Agência vinculada à conta do cheque.
    
*   `Conta`: Número da conta corrente do cheque.
    
*   `Cheque`: Número do cheque.
    
*   `Cidade`: Cidade onde o cheque foi emitido.
    
*   `UF`: Estado (unidade da federação) da cidade de emissão.
    

Guia QUITAÇÃO1800

Esta guia é utilizada para registrar as condições de pagamento de um **cheque quitado**, permitindo informar a data do pagamento, a conta utilizada e eventuais ajustes financeiros, como multa, juros ou desconto.

*   `Data de Pagamento`: Informe a data em que o cheque foi quitado pelo cliente.
    
*   `Conta Origem`: Selecione a conta de onde será retirado o pagamento. Este campo é atualizado automaticamente de acordo com o tipo de cheque e seu status no sistema.
    
*   `Multa por Atraso (R$)`(Opcional): Insira o valor da multa aplicada caso o pagamento tenha ocorrido fora do prazo.
    
*   `Juros por Atraso (R$)`(Opcional): Informe o valor de juros incidentes pelo atraso no pagamento.
    
*   `Desconto (R$)`(Opcional): Digite o valor do desconto concedido no momento da quitação.
    
*   `Valor Pago (R$)`: Exibe automaticamente o valor efetivamente pago, considerando os ajustes informados.
    
*   `Valor Pendente (R$)`: Mostra o valor que ainda falta ser pago, calculado automaticamente pelo sistema da seguinte forma:
    
    *   Valor Pendente = (Valor do Cheque + Juros e Multas) - (Desconto + Valor Pago)
        

Após preencher os campos na guia Quitação, clique no botão localizado no box **Forma de Pagamento** para prosseguir.

Informe a(s) nova(s) forma(s) de pagamento utilizada(s) pelo cliente e confirme a operação de quitação clicando no botão . O cheque terá seu status alterado para `Devolvido e Quitado`.

* * *

### Operação: Estorno

A operação **estorno** permite **reverter operações já registradas**, possibilitando corrigir lançamentos de cheques sempre que necessário. Para registrar a operação de estorno, siga os passos abaixo:

Acesse o **Módulo de Cheques - Caixa Gerência**.

Localize o cheque que será estornado e clique no ícone . A seguinte tela será apresentada:

Tela de estorno de cheque

**Atenção**

*   Somente cheques com status de `Resgatado` e `Devolvido e Quitado` podem ser estornados.
    
*   O estorno só pode ser realizado de um cheque por vez.
    

Após a conferência das informações no box **Estornar Cheque**, clique no botão para concluir a operação. Ao efetuar o estorno, o cheque retorna automaticamente ao status anterior a operação de `Resgate` ou `Quitação`, ou seja, `A Depositar` ou `Devolvido e Pendente`, respectivamente.