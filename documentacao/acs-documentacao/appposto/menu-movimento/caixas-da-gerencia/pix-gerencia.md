---
title: PIX [Gerência]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/273055748
---

# PIX [Gerência]

16truenonelisttrue

PIX
===

O **Módulo de PIX de Gerência** é utilizado para consultar, inserir, modificar e excluir lançamentos de pagamentos via PIX. Esse módulo registra as movimentações financeiras dos recebimentos efetuados diretamente na gerência da empresa, garantindo que todas as transações estejam corretamente cadastradas no sistema.

A conferência desses lançamentos é fundamental para assegurar que os dados financeiros estejam corretos, evitando inconsistências nos relatórios.

O módulo pode ser acessado de duas maneiras:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os lançamentos.
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > PIX

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Dentro da Prestação de Contas, clique no botão respectivo a finalizadora () para ser direcionado ao módulo de PIX.
    
*   Esse atalho facilita o acesso às transações da prestação de contas em análise.
    

Consulta de PIX
---------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos lançamentos via PIX registrados, tendo como objetivo principal a consulta das informações. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > PIX**, a tela de listagem das transações via PIX apresenta as seguintes características:

Tela inicial módulo de PIX (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtro de `Operador` estará configurado para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de PIX. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data` e `Data Emissão`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de PIX por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de PIX (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de PIX. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Caixa Gerência`, `Operador` e `Data Emissão` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de PIX, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `Data Utilizada`: Permite escolher o critério de data a ser considerado na consulta.
    
    *   `Data do Caixa`: Data em que o caixa foi aberto.
        
    *   `Data de Emissão`: Data em que o PIX foi emitido.
        
    *   `Data de Vencimento`: Data em que está previsto o recebimento do PIX.
        
    *   `Data de Crédito`: Data em que o PIX foi creditado na conta bancária.
        
*   `Autorização`: Filtra o PIX específico de acordo com o número autorização indicado.
    
*   `Administradora`: Permite filtrar os lançamentos de acordo com a administradora do PIX. É útil quando se deseja visualizar todas as transações lançadas de uma administradora específica. Ao clicar no filtro, será apresentada uma tela para seleção da(s) administradora(s) desejadas.
    

Tela para filtrar administradoras

*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar as transações, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    

Após definir os filtros, clique no botão . A listagem de lançamentos de PIX será exibida conforme os critérios de busca.

Inclusão de PIX
---------------

A inclusão de novos cartões no caixa da gerencia pode ser realizado de duas maneiras diferentes:

**Inclusão originada em outros módulos:** Por exemplo, ao efetuar a quitação de uma **Fatura de Convênio** utilizando a forma de pagamento cartão de crédito, a transação será automaticamente registrada no **Caixa da Gerência** nesse módulo de cartões.

:info:atlassian-info:info:#B3D4FF

**Observação**: Esses lançamentos vinculados a outras operações **não podem ser alterados ou excluídos**, sendo permitida apenas a **consulta**, garantindo assim a integridade dos registros financeiros.

**Inclusão manual:** Para realizar a inclusão manual, siga os passos abaixo:

. Acesse o **Módulo de PIX**.

. Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo lançamento.

. A seguinte tela será apresentada:

Tela para inclusão de novo PIX

. Preencha os campos com as informações referentes a transação via PIX:

*   `Empresa`: Selecione a empresa vinculada à transação.
    
*   `Data`: Informe a data da prestação em que a transação constará.
    
*   `Caixa Gerência`: Informe o código do caixa da gerência aberto na data definida.
    
*   `Operador`: Será preenchido automaticamente com o operador vinculado ao caixa da gerencia selecionado.
    
*   `Data Emissão`: Data da emissão do pagamento via PIX.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia PIX760

Nesta guia, devem ser preenchidas as informações específicas relacionadas à transação via PIX:

*   `Administradora`: Selecione a administradora responsável pela transação. A escolha da administradora influencia em outras informações do registro, como as taxas aplicáveis.
    
*   `Finalidade`: Preenchido automaticamente como **Pagamento**. Este campo é padrão e não possibilita alteração.
    
*   `Conectividade`: Definido automaticamente como **POS** quando lançado manualmente.
    
*   `Valor (R$)`: Informe o valor total da transação realizada.
    
*   `Autorização`: Insira o número de autorização da transação fornecido no momento da aprovação do pagamento. Esse número é essencial para garantir que a transação foi devidamente autorizada pela administradora e pode ser utilizado para rastrear a transação.
    
*   `Identificar Cliente`: O cliente responsável pela transação será preenchido como **CLIENTE PADRÃO**, a menos que haja a necessidade de identificação específica. Esse campo pode ser alterado, conforme o cadastro de clientes do sistema.
    

Guia RECEBIMENTO760

Esta guia exibe informações detalhadas sobre as taxas associadas à transação. Os campos são preenchidos automaticamente, com base nas informações cadastradas da administradora selecionada na guia **PIX**.

*   **Taxa Contratada Valor (R$)**: Valor da taxa acordada entre o estabelecimento e os bancos para a transação.
    
*   **Taxa Contratada Percentual (%)**: Percentual da taxa contratada sobre o valor da transação.
    

. Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do lançamento no sistema.

Modificação de PIX
------------------

Caso seja identificado algum erro em um lançamento via PIX durante o processo de conferência, como valor incorreto, data errada ou administradora diferente, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de PIX**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente à transação que será modificada.

Realize as correções necessárias nos campos, como:

*   `Administradora`: Selecione a administradora correta para a transação.
    
*   `Autorização`: Corrija o número de autorização.
    
*   `Valor (R$)`: Atualize o valor da transação, conforme necessário.
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de PIX
---------------

Caso seja identificado algum lançamento via PIX que esteja **duplicado** ou **incorreto**, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de PIX**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

Clique no botão para confirmar a exclusão da transação. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.

:info:atlassian-info:info:#B3D4FF

**Observação**: O ícone só estará disponível quando a transação PIX ainda não tiver sido baixada. Caso o lançamento já tenha sido baixado, será necessário realizar o estorno para habilitar a exclusão.

:info:atlassian-info:info:#B3D4FF

**Observação**: Caso um lançamento tenha sido originado em outro módulo, **não poderá ser modificado ou excluído** diretamente no **Módulo de PIX**.

Esses lançamentos vinculados a outras operações **são apenas para consulta**, garantindo a integridade dos registros financeiros e evitando inconsistências no sistema.