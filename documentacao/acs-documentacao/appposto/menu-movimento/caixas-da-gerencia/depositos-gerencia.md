---
title: Depósitos [Gerência]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/272400414
---

# Depósitos [Gerência]

16truenonelisttrue

Depósitos
=========

O **Módulo de Depósitos da Gerência** é utilizado para consultar, inserir, modificar e excluir lançamentos de depósitos bancários, garantindo que todos estejam corretamente registrados na prestação de contas.

A conferência desses lançamentos permite verificar se os valores depositados nas contas bancárias correspondem aos lançamentos de recebimentos registrados no sistema, ajudando a identificar eventuais inconsistências ou erros que podem ocorrer nas transações.

O módulo pode ser acessado de duas maneiras:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os lançamentos.
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > Depósitos

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a prestação de contas, clique no botão respectivo a finalizadora () para ser direcionado ao módulo de Depósito.
    
*   Esse atalho facilita o acesso aos lançamentos da prestação de contas que está sendo conferida.
    

Consulta de depósitos
---------------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos depósitos bancários, tendo como objetivo principal garantir a **conferência precisa dos lançamentos** para evitar falhas ou duplicidades. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Depósitos**, a tela de listagem dos depósitos bancários apresenta as seguintes características:

Tela inicial módulo de depósitos (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtro de `Operador` estará configurado para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de depósito bancário. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data`, `Data Emissão`, `Centro de Resultado`, `Conta Origem` e `Conta Aplicação`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de depósito por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de depósitos (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo depósito bancário. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Caixa Gerência`, `Operador`, `Data Emissão`, `Centro de Resultado`, `Conta Origem` e `Conta Aplicação` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de depósitos, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `Conta Origem`: Permite indicar a conta de onde o valor do depósito foi originado.
    
*   `Conta Aplicação`: Permite indicar a conta bancária de destino do depósito.
    
*   `Centro de Resultado`: Permite indicar um centro de custo específico.
    
*   `Documento`: Permite indicar o número ou identificação do documento associado ao depósito.
    
*   `Histórico`: Permite inserir uma descrição que caracteriza o motivo ou o contexto do depósito.
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar os depósitos, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    

Após definir os filtros, clique no botão . A listagem de depósitos será exibida conforme os critérios de busca.

Inclusão de depósitos
---------------------

Siga os passos abaixo para incluir novos depósitos no caixa da gerencia de forma manual:

Acesse o **Módulo de Depósitos**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo lançamento.

A seguinte tela será apresentada:

Tela para inclusão de novo depósito

Preencha os campos com as informações referentes ao depósito:

*   `Empresa`: Selecione a empresa vinculada ao depósito.
    
*   `Data`: Informe a data da prestação em que o depósito constará.
    
*   `Caixa Gerência`: Informe o código do caixa da gerência aberto na data definida.
    
*   `Operador`**:** Será preenchido automaticamente com o operador vinculado ao caixa da gerencia selecionado.
    
*   `Data Emissão`: Data da emissão do depósito.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia DEPÓSITOS1800

Nesta guia, insira as informações específicas referentes ao depósito bancário:

*   `Centro De Resultado`: Indique o centro de custo ou resultado ao qual o depósito será associado.
    
*   `Conta Origem`: Defina a conta bancária de onde o valor foi transferido.
    
*   `Conta Aplicação`: Indique a conta de destino que receberá o valor do depósito.
    
*   `Histórico`: Descreva o motivo ou contexto do depósito, facilitando a identificação em consultas futuras.
    
*   `Documento`: Número ou identificação do documento relacionado ao depósito.
    
*   `Valor (R$)`: Informe o valor exato do depósito.
    

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do depósito no sistema.

Modificação de depósitos
------------------------

Caso seja identificado algum erro em um lançamento de vale, como valor incorreto ou cliente errado, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de Depósitos**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente à transação que será modificada.

Realize as correções necessárias nos campos, como:

*   **Conta Aplicação**: Selecione a conta bancária correta para o depósito.
    
*   **Valor (R$)**: Atualize o valor da transação, conforme necessário.
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de depósitos
---------------------

Caso seja identificado algum depósito que esteja **duplicado** ou **incorreto** durante o processo de conferência, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de Depósitos**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

Clique no botão para confirmar a exclusão do depósito. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.