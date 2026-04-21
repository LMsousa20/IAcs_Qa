---
title: Vale de Funcionário [Gerência]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/275152900
---

# Vale de Funcionário [Gerência]

16truenonelisttrue

Vale de Funcionário
===================

O **Módulo de Vale de Funcionário** é utilizado para consultar, inserir, modificar e excluir lançamentos de vales de funcionário, garantindo que todos estejam corretamente registrados no sistema.

A conferência desses lançamentos é fundamental para manter um controle sobre os valores de adiantamento dos colaboradores.

O módulo pode ser acessado de duas maneiras:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os lançamentos.
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > Vale de Funcionário

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a prestação de contas, clique no botão respectivo a finalizadora () para ser direcionado ao módulo de vale de funcionário.
    
*   Esse atalho facilita o acesso às transações da prestação de contas que está sendo conferida.
    

Consulta de Vale de Funcionário
-------------------------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos vales de funcionário lançados, tendo como objetivo principal a consulta das informações. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Vale de Funcionário**, a tela de listagem dos vales de funcionário apresenta as seguintes características:

Tela inicial módulo de vale de funcionário (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtro de `Operador` estará configurado para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de vale de funcionário. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data` e `Data Emissão`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de vale de funcionário por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de vale de funcionário (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de vale de funcionário. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Caixa Gerência`, `Operador` e `Data Emissão` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de vale de funcionário, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `Funcionário`: Nesse campo é selecionado o funcionário para qual os vales foram lançados. É um recurso útil quando se deseja relacionar todos os vales lançados para um funcionário específico. Se a opção padrão (**Todos**) for mantida, a pesquisa se dará em todos os funcionários.
    
*   `Baixa`: Neste campo, é indicado a situação do vale em relação ao pagamento, que se refere ao processo de quitação.
    
    *   `Pendentes`: Filtra somente os vales que ainda não foram quitados.
        
    *   `Quitados`: Filtra apenas os vales que foram quitados.
        

Se a opção `Todos` for mantida, a pesquisa incluirá todas as situações, independentemente de já terem sido quitados ou não.

*   `Número do Vale`: Filtra o vale específico de acordo com o número indicado.
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar os vales, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    

Após definir os filtros, clique no botão . A listagem de vales será exibida conforme os critérios de busca.

Inclusão de Vale de Funcionário
-------------------------------

Siga os passos abaixo para incluir novos vales de funcionário no caixa da gerencia de forma manual:

Acesse o **Módulo de Vale de Funcionário**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo vale.

A seguinte tela será apresentada:

Tela para inclusão de novo vale de funcionário

Preencha os campos com as informações referentes ao vale de funcionário:

*   `Empresa`: Selecione a empresa vinculada à transação.
    
*   `Data`: Informe a data da prestação em que o lançamento constará.
    
*   `Caixa Gerência`: Informe o código do caixa da gerência aberto na data definida.
    
*   `Operador`**:** Será preenchido automaticamente com o operador vinculado ao caixa da gerencia selecionado.
    
*   `Data Emissão`: Data da emissão do vale.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia FUNCIONÁRIO1800

*   `Funcionário`: Selecione o funcionário responsável pelo vale. Este é o colaborador a quem o valor do vale será cobrado.
    
*   `Tipo de Vale`: Obrigatoriamente será do tipo `Adiantamento`.
    
*   `Número do Vale`: Número ou identificação do documento relacionado ao vale.
    
*   `Valor (R$)`: Informe o valor exato do vale.
    

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do vale de funcionário no sistema.

Modificação de Vale de Funcionário
----------------------------------

Caso seja identificado algum erro em um lançamento de vale durante o processo de conferência, como valor incorreto ou funcionário errado, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de Vale de Funcionário**.

Na parte superior da tela, utilize os filtros para localizar o vale desejado de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será modificado.

Realize as correções necessárias nos campos, como:

*   **Funcionário identificado no vale:** Selecione o funcionário correto do vale.
    
*   **Valor do Vale:** Verifique se o valor do vale está correto.
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de Vale de Funcionário
-------------------------------

Caso seja identificado algum lançamento de vale de funcionário **duplicado** ou **incorreto** durante o processo de conferência, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de Vale de Funcionário**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

Clique no botão para confirmar a exclusão do lançamento. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.

:info:atlassian-info:info:#B3D4FF

**Observação**: O ícone é habilitado apenas para vales que ainda não foram baixados. Se o vale já tiver sido quitado, será necessário realizar o estorno para habilitar a exclusão.