---
title: Transferência Estoques
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2949121
---

# Transferência Estoques

16truenonelisttrue

* * *

Transferência de Estoques
=========================

A **Transferência de Estoques** é o processo de movimentação do saldo dos produtos de um local de armazenamento para outro, garantindo que os saldos das mercadorias sejam corretamente contabilizados em cada estoque. Isso assegura a disponibilidade dos itens onde são mais necessários e otimiza o espaço de armazenamento, reduzindo perdas por vencimento ou deterioração.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Estoque > Transferência Estoques

* * *

Será apresentada a seguinte tela:

Tela geral transferência de estoques

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento das transferências de estoque já realizadas.

As principais funcionalidades são:

**Criar Nova Transferência de Estoque**

Permite a criação de uma nova transferência de estoque, garantindo que os saldos dos produtos estejam nos estoques corretos.

**Filtro de Pesquisa**

Facilita a busca de transferências de estoque já realizadas pelo período e estoques envolvidos, agilizando a localização das informações necessárias.

**Visualização**

Permite consultar os detalhes de uma transferência já realizada, sendo possível ver os produtos e quantidades transferidas.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , será apresentada a seguinte tela, dividida em dois boxes:

Tela de apresentação de tela

* * *

### Box 1 - Nova Transferência entre Estoques

Box Nova Transferência entre Estoques

*   `Data Transferência`: Data em que a transferência de estoque é iniciada. Capturada automaticamente pelo sistema.
    
*   `Hora Transferência`: Horário específico em que a transferência é iniciada. Capturada automaticamente pelo sistema.
    
*   `Turno`: Indica o turno do dia ao qual a transferência foi realizada.
    
*   `Requisição`: Número identificador associado a cada transferência.
    
*   `Estoque origem`: Indica o estoque de onde os produtos foram retirados para envio ao estoque de destino.
    
*   `Estoque destino`: Indica o estoque para o qual os produtos foram enviados a partir do estoque de origem.
    
*   `Grupo`: Filtro para determinação dos produtos que serão incluídos na transferência a partir do(s) Grupo(s) ao(s) qual(is) estão vinculados.
    
*   `Subgrupo`: Filtro para determinação dos produtos que serão incluídos na transferência a partir do(s) Subgrupo(s) ao(s) qual(is) estão vinculados.
    
*   `Marcas`: Filtro para determinação dos produtos que serão incluídos na transferência a partir da(s) Marca(s) ao(s) qual(is) estão vinculados.
    
*   `Produtos`: Filtro para determinação dos produtos que serão incluídos na transferência a partir da seleção manual dos mesmos.
    

* * *

### Box 2 - Lista de Produtos

Box Lista de Produtos

Além da listagem dos produtos incluídos para transferência, encontram-se nesse box os botões de inclusão dos produtos, que pode ocorrer de 3 formas.

Somente serão disponibilizados para movimentação os **produtos que estejam cadastrados em ambos os estoques** envolvidos na transferência e que **possuam saldo positivo no estoque de origem**.

* * *

Formas de Transferência
-----------------------

### Inclusão Item a Item

Nesta opção, os itens são inseridos individualmente na transferência por meio do botão . Ao clicar nele, a seguinte tela será apresentada:

Tela de produtos para transferência

*   `Produto`: Defina o produto a ser transferido entre os estoques.
    
*   `Quantidade`: Defina o total de unidades do produto que será transferida de um estoque para o outro.
    
*   `Descrição Produto`: Apresenta o nome do produto cadastrado no sistema.
    
*   `Unidade`: Apresenta a unidade de medida do produto informado.
    
*   `Saldo Origem`: Apresenta a quantidade do produto que constará no **estoque de origem** após a transferência.
    
*   `Saldo Destino`: Apresenta a quantidade do produto que constará no **estoque de destino** após a transferência.
    

Após informar o **produto** e a **quantidade** a ser transferida, clique no botão para adicionar o item à transferência. Caso seja necessário adicionar outros produtos, basta repetir o mesmo procedimento.

Os produtos adicionados à transferência são apresentados no box **Lista de Produtos**, onde é possível realizar ajustes antes da confirmação do processo, como:

*   **Editar as quantidades** informadas para cada produto incluído na transferência;
    
*   **Remover produtos da transferência** através do ícone disponível ao lado de cada item listado.
    

Essas ações permitem revisar e ajustar os itens antes de concluir a operação, garantindo que apenas os produtos e quantidades corretas sejam transferidos entre os estoques.

Tela de listagem de produtos que serão transferidos

Após a conferência, clique no botão para concluir a operação.

### Inclusão por Filtro

Nesta opção, os itens são inseridos automaticamente na transferência por meio do botão . Ou seja, todos os produtos vinculados aos `Grupos`, `Subgrupos` e `Marcas` ou selecionados no filtro `Produtos` do box **Nova Transferência entre Estoques** serão incluídos no box **Lista de Produtos.**

Incluir por Filtro

Os produtos adicionados à transferência são apresentados no box **Lista de Produtos** com as quantidades zeradas, sendo necessária a inclusão das quantidades para cada produto antes da confirmação do processo.

Incluir quantidade

Após a conferência, clique no botão para concluir a operação.

### Inclusão por Reposição

Nesta opção, os itens são inseridos automaticamente na transferência já com as quantidades determinadas por meio do botão . Ou seja, a transferência de itens é automatizada com base na necessidade de reposição do estoque de destino, ajustando **automaticamente as quantidades** conforme a capacidade máxima configurada para cada produto. Isso garante que os estoques sejam reabastecidos de maneira eficiente, evitando excessos ou faltas.

**Observação**:

*   Para definir a capacidade máxima de um produto em estoque, acesse o menu **Cadastro** \> **PRODUTOS** \> **Estoques**. Localize o estoque de **destino** e clique no botão . Pesquise o produto que deseja ajustar a **Capacidade** e insira a quantidade máxima de itens que o estoque pode armazenar do mesmo.
    

Os produtos adicionados à transferência são apresentados na **Lista de Produtos** com as **quantidades calculadas automaticamente**, considerando a diferença entre a **Capacidade definida para o produto no estoque de destino** e o **Saldo atual do produto nesse estoque**.

Assim, o sistema calcula a quantidade necessária para que o estoque de destino atinja a capacidade configurada para cada item.

Somente serão incluídos na transferência os produtos cujo **saldo atual no estoque de destino seja menor que a capacidade definida**. Portanto:

*   Se o **saldo atual for menor que a capacidade**, o produto será incluído na transferência com a quantidade necessária para reposição;
    
*   Se o **saldo atual for igual ou superior à capacidade**, o produto **não será incluído**, pois não há necessidade de reposição.
    

Após a conferência, clique no botão para concluir a operação.

* * *

Consulta de transferência de estoques
-------------------------------------

Acesse o módulo de **Transferência de Estoques** e localize a transferência que deseja consultar. Clique no ícone . A tela a seguir será exibida com todos os detalhes da transferência, permitindo a verificação das informações da mesma.

Tela de consulta de transferência

* * *

Exclusão de transferência de estoques
-------------------------------------

Após a transferência de estoques ser concluída, não é possível editar as informações da transação. Caso tenha ocorrido algum erro, como quantidade incorreta de produtos ou escolha errada do estoque de origem ou destino, a solução é excluir a transferência e realizar um novo lançamento corretamente.

A exclusão de uma transferência de estoques reverte a movimentação entre os estoques envolvidos, restituindo o saldo ao estoque origem e removendo o saldo adicionado no estoque de destino. Após a exclusão, a transferência será permanentemente removida e não poderá ser recuperada. Por isso, é importante revisar todos os detalhes com atenção antes de confirmar a exclusão.

Para realizar a exclusão do registro desejado, clique no ícone . Uma tela de confirmação será exibida:

Tela de confirmação de exclusão

Clique no botão para concluir a exclusão.