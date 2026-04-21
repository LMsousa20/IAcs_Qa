---
title: Despesas [Venda]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/72482835
---

# Despesas [Venda]

16truenonelisttrue

Despesas
========

O **Módulo de Despesas de Vendas** é utilizado para registrar e controlar as quantias retiradas em dinheiro do caixa pelo operador para pagamento de despesas do posto.

Através deste módulo, é possível gerenciar e acompanhar de forma precisa todas as movimentações relacionadas a despesas, garantindo um controle mais transparente e evitando divergências no fechamento de caixa.

Existem duas maneiras de acessar o módulo de despesas:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os lançamentos.
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > Despesas

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a prestação de contas, clique no botão respectivo a finalizadora () para ser direcionado ao módulo de despesas.
    
*   Esse atalho facilita o acesso aos lançamentos da prestação de contas que está sendo conferida.
    

Consulta de despesas
--------------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos pagamentos de despesas, tendo como objetivo principal garantir a **conferência precisa dos lançamentos** para evitar falhas ou duplicidades. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Despesas**, a tela de listagem dos pagamentos de despesas apresenta as seguintes características:

Tela inicial módulo de despesas (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtros como `Turno` e `Operador` estarão configurados para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de despesa. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data`, `Data Emissão`, `Centro de Resultad`o e `Conta Origem`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de despesas por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de despesas (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas`, `Turno` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Botão : Localizado no canto superior direito, permite criar uma nova despesa. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Data Emissão`, `Turno`, `Operador`, `Centro de Resultado` e `Conta Origem` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de despesas, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `PDV`: Permite selecionar em qual Ponto de Venda (PDV) as despesas foram lançadas. Se a opção padrão **Todos** for mantida, não haverá restrição quanto ao PDV.
    
*   `Caixa Venda`: Permite selecionar o(s) caixa(s) em que as despesas foram lançadas. Se a opção padrão **Todos** for mantida, a pesquisa abrangerá todos os caixas disponíveis. Ao clicar no filtro, será apresentada uma tela para selecionar o(s) caixa(s) desejado(s).
    

Tela para filtrar caixas

É necessário que os campos `Data Inicial` e `Data Final` estejam preenchidos.

*   `Fornecedor`: Permite indicar o fornecedor vinculado a despesa. É um recurso útil quando se deseja relacionar todas as despesas lançadas de um fornecedor específico. Se a opção padrão (**Todos**) for mantida, a pesquisa se dará em todos os fornecedores.
    
*   `Conta Aplicação`: Permite indicar uma conta de despesa para relacionar todos os lançamentos da mesma. Se a opção padrão (**Todos**) for mantida, a pesquisa se dará para todas as contas de despesa.
    
*   `Documento`: Permite indicar o número ou identificação do documento associado a despesa.
    
*   `Histórico`: Permite inserir uma descrição que caracteriza o motivo ou o contexto da despesa.
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar as despesas, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    

Após definir os filtros, clique no botão . A listagem de despesas será exibida conforme os critérios de busca.

Conferência de despesas
-----------------------

A conferência de despesas assegura que todos os lançamentos estão corretos e condizem com as retiradas do caixa. A prática regular dessa conferência garante que todas as transações sejam refletidas com exatidão nos relatórios financeiros. Para realizar a conferência, siga os passos abaixo:

Acesse o **Módulo de Despesas**.

Aplique os filtros necessários para localizar os lançamentos que precisam ser conferidos, como Data, Turno e Operador. Esses filtros permitem uma busca mais precisa e focada nas despesas referentes ao movimento que está sendo analisado.

Após aplicar os filtros, clique em para atualizar a listagem dos lançamentos. As seguintes verificações devem ser feitas para garantir que as transações estão corretas:

*   **Lançamentos de Despesas**: Confirme se todas as despesas foram devidamente lançadas no sistema.
    
*   **Verificação dos Dados**: Certifique-se de que os seguintes dados estejam corretamente preenchidos para cada lançamento:
    
    *   **Valor**: Verifique se o valor lançado corresponde ao valor real da despesa.
        
    *   **Conta Aplicação**: Confirme se a conta aplicação condiz com a despesa lançada.
        

Inclusão de despesas
--------------------

Durante o processo de conferência, se for identificado que algum lançamento de despesa está faltando, siga os passos abaixo para incluir o lançamento manualmente:

Acesse o **Módulo de Despesas**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo lançamento.

A seguinte tela será apresentada:

Tela para inclusão de nova despesa

Preencha os campos com as informações referentes ao depósito:

*   `Empresa`: Selecione a empresa vinculada a despesa.
    
*   `Data`: Informe a data da prestação em que a despesa constará.
    
*   `Turno`: Selecione o turno do caixa.
    
*   `PDV`: Indique o Ponto de Venda (PDV) onde a despesa foi lançada.
    

Tela para seleção de PDV

*   `Caixa Venda`: Indique o caixa de venda pertencente ao PDV ao qual a despesa será vinculada.
    

Tela para seleção de caixa de venda

*   `Operador`: Selecione o operador que realizou a despesa.
    

Tela para seleção de operador

*   `Data Emissão`: Data da emissão da despesa.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia DESPESAS760

Nesta guia, insira as informações específicas referentes a despesa:

*   **Centro De Resultado**: Indique o centro de custo ou resultado ao qual a despesa será associada.
    
*   **Conta Origem**: Defina a conta patrimonial de onde o valor foi retirado. Geralmente, é indicada a conta do caixa.
    
*   **Conta Aplicação**: Indique a conta específica destinada ao registro da despesa.
    
*   **Fornecedor**: Indique, caso exista, o fornecedor vinculado a despesa.
    
*   **Histórico**: Descreva o motivo ou contexto da despesa, facilitando a identificação em consultas futuras.
    
*   **Documento**: Número ou identificação do documento relacionado a despesa.
    
*   **Valor (R$)**: Informe o valor exato da despesa.
    

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do depósito no sistema.

Modificação de despesas
-----------------------

Caso seja identificado algum erro em um lançamento de despesa durante o processo de conferência, como valor, data ou conta aplicação incorreta, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de Despesas**.

Na parte superior da tela, utilize os filtros para localizar o lançamento desejado de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será modificado.

A seguinte tela será apresentada:

Tela para edição de um lançamento de despesa

Realize as correções necessárias nos campos, como:

*   `Conta Aplicação`: Selecione a conta específica destinada ao registro da despesa.
    
*   `Valor (R$)`: Atualize o valor do lançamento, conforme necessário.
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de despesas
--------------------

Caso seja identificada alguma despesa **duplicada** ou **incorreta** durante o processo de conferência, siga os passos abaixo para excluir o registro corretamente:

Acesse o **Módulo de Despesas**.

Na parte superior da tela, utilize os filtros para localizar o lançamento desejado de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

A seguinte tela será apresentada:

Tela para confirmação da exclusão

Clique no botão para confirmar a exclusão da despesa. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.