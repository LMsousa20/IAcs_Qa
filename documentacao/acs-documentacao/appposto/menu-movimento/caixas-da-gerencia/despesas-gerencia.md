---
title: Despesas [Gerência]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/272531516
---

# Despesas [Gerência]

16truenonelisttrue

Despesas
========

O **Módulo de Despesas da Gerência** é utilizado para registrar e controlar as quantias retiradas em dinheiro do caixa para pagamento de despesas do posto.

Através deste módulo, é possível gerenciar e acompanhar de forma precisa todas as movimentações relacionadas a despesas, garantindo um controle mais transparente e evitando divergências no fechamento de caixa.

O módulo pode ser acessado de duas maneiras:

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
    
*   Filtro de `Operador` estará configurado para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de despesa. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data`, `Data Emissão`, `Centro de Resultado` e `Conta Origem`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de despesas por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de despesas (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Botão : Localizado no canto superior direito, permite criar uma nova despesa. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Caixa Gerência`, `Operador`, `Data Emissão`, `Centro de Resultado` e `Conta Origem` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de despesas, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `Fornecedor`: Permite indicar o fornecedor vinculado a despesa. É um recurso útil quando se deseja relacionar todas as despesas lançadas de um fornecedor específico. Se a opção padrão **Todos** for mantida, a pesquisa se dará em todos os fornecedores.
    
*   `Conta Aplicação`: Permite indicar uma conta de despesa para relacionar todos os lançamentos da mesma. Se a opção padrão **Todos** for mantida, a pesquisa se dará para todas as contas de despesa.
    
*   `Documento`: Permite indicar o número ou identificação do documento associado a despesa.
    
*   `Histórico`: Permite inserir uma descrição que caracteriza o motivo ou o contexto da despesa.
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar as despesas, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    

Após definir os filtros, clique no botão . A listagem de despesas será exibida conforme os critérios de busca.

Inclusão de despesas
--------------------

Siga os passos abaixo para incluir novas despesas no caixa da gerencia de forma manual:

Acesse o **Módulo de Despesas**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo lançamento.

A seguinte tela será apresentada:

Tela para inclusão de nova despesa

Preencha os campos com as informações referentes ao depósito:

*   `Empresa`: Selecione a empresa vinculada a despesa.
    
*   `Data`: Informe a data da prestação em que a despesa constará.
    
*   `Caixa Gerência`: Informe o código do caixa da gerência aberto na data definida.
    
*   `Operador`**:** Será preenchido automaticamente com o operador vinculado ao caixa da gerencia selecionado.
    
*   `Data Emissão`: Data da emissão da despesa.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia DESPESAS1800

Nesta guia, insira as informações específicas referentes a despesa:

*   `Centro De Resultado`: Indique o centro de custo ou resultado ao qual a despesa será associada.
    
*   `Conta Origem`: Defina a conta patrimonial de onde o valor foi retirado. Geralmente, é indicada a conta do caixa.
    
*   `Conta Aplicação`: Indique a conta específica destinada ao registro da despesa.
    
*   `Fornecedor`: Indique, caso exista, o fornecedor vinculado a despesa.
    
*   `Histórico`: Descreva o motivo ou contexto da despesa, facilitando a identificação em consultas futuras.
    
*   `Documento`: Número ou identificação do documento relacionado a despesa.
    
*   `Valor (R$)`: Informe o valor exato da despesa.
    

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do depósito no sistema.

Modificação de despesas
-----------------------

Caso seja identificado algum erro em um lançamento de despesa durante o processo de conferência, como valor, data ou conta aplicação incorreta, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de Despesas**.

Na parte superior da tela, utilize os filtros para localizar o lançamento desejado de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será modificado.

Realize as correções necessárias nos campos, como:

*   **Conta Aplicação**: Selecione a conta específica destinada ao registro da despesa.
    
*   **Valor (R$)**: Atualize o valor do lançamento, conforme necessário.
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de despesas
--------------------

Caso seja identificada alguma despesa **duplicada** ou **incorreta** durante o processo de conferência, siga os passos abaixo para excluir o registro corretamente:

Acesse o **Módulo de Despesas**.

Na parte superior da tela, utilize os filtros para localizar o lançamento desejado de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

Clique no botão para confirmar a exclusão da despesa. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.