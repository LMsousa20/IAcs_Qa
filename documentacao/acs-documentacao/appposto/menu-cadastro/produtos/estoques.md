---
title: Estoques
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/41648139
---

# Estoques

16truenonelisttrue

Estoques
========

O módulo de **Cadastro de Estoques** permite a criação e o gerenciamento de estoques no sistema, definindo quais produtos pertencem a cada um deles. Através desse cadastro, é possível visualizar a quantidade disponível de cada item em estoque, facilitando o controle e a organização do inventário.

Esse módulo é essencial para o correto funcionamento do sistema, pois:

*   **Integra-se ao PDV (Ponto de Venda):** O estoque cadastrado é vinculado ao PDV, determinando quais produtos estarão disponíveis para comercialização.
    
*   **É utilizado na entrada de notas fiscais:** No lançamento de notas fiscais de compras, é necessário indicar a qual estoque os produtos serão destinados, garantindo que a movimentação seja registrada corretamente.
    

A correta configuração dos estoques garante uma gestão mais precisa dos produtos e maior controle sobre as operações de vendas e entradas no sistema.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Produtos > Estoques

Será apresentada a seguinte tela:

Tela de Listagem de Estoques

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento dos estoques já cadastrados. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Novo Estoque**

Permite o cadastro de um novo estoque para produtos no sistema, garantindo que todos os estoques relevantes estejam devidamente registrados.

**Filtro de Pesquisa**

Facilita a busca de estoques específicos pela descrição, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de um estoque já cadastrado, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Novo Estoque

Box Novo Estoque

*   `Código`: Gerado automaticamente pelo sistema, identifica de forma única o estoque cadastrado.
    
*   `Descrição`: Nome do estoque a ser cadastrado.
    
*   `Tipo`: Define a finalidade do estoque. As opções disponíveis são:
    
    *   `Almoxarifado`: Utilizado para armazenar materiais de uso interno ou insumos que não são destinados à venda. Estoques com este tipo **não podem ser vinculados** ao cadastro de Pontos de Venda.
        
    *   `Vendas`: Utilizado para armazenar produtos disponíveis para comercialização no PDV.
        
    *   `Temporário`: Destinado a produtos avariados, vencidos ou que aguardam devolução ou descarte. Estoques com este tipo **também não podem ser vinculados** ao Ponto de Venda.
        
*   `Enviar para Shell`: Define se as movimentações de compra e venda dos produtos vinculados a este estoque serão enviadas para a plataforma da Shell.
    

### Box 2 - Produtos no Estoque

Este box é exibido somente após o **cadastro inicial** do estoque. Para acessá-lo, é necessário clicar no ícone do estoque desejado. Após essa ação, o box será apresentado logo abaixo da seção **Alterar Estoque**.

Neste box, são listados todos os produtos que fazem parte do estoque, permitindo visualizar e gerenciar suas informações.

Box Produtos no Estoque

*   `Cód. Barras`: Código de barras do produto.
    
*   `Descrição`: Nome do produto.
    
*   `Saldo`: Quantidade atual disponível do produto no estoque.
    
*   `Local`: Localização física do produto no estoque. (ex: prateleira 1, corredor A, gaveta), facilitando sua identificação.
    
*   `Capacidade`: Quantidade máxima que o local de armazenamento comporta para o produto em questão.
    

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir estoques no sistema.

### Incluir Estoque

Para cadastrar um novo estoque no sistema, siga os passos abaixo:

Acesse o módulo de Estoque através do caminho: `Menu Cadastro > Produtos > Estoques`.

Na tela de listagem dos estoques, clique no botão .

Preencha os campos no box **Novo Estoque**:

*   `Descrição`: Insira o nome do estoque para identificação.
    
*   `Tipo`: Selecione o tipo de estoque conforme sua finalidade. Para estoques utilizados no PDV, selecione a opção `Vendas`.
    
*   `Enviar para Shell`: Defina como `Sim` se deseja que as movimentações de **compras e vendas** dos produtos deste estoque sejam enviadas para a **Shell**.
    

Após preencher todos os campos e revisar as informações, clique no botão . O sistema redirecionará automaticamente para a tela de listagem com os estoques já cadastrados.

Para incluir ou remover produtos de um estoque, siga os passos abaixo:

Localize o estoque desejado e clique no ícone de .

O sistema abrirá a tela com o box **Produtos no Estoque**, onde será possível:

Consultar produtos já incluídos, com filtros por **descrição** ou **grupo de produto**.

**Incluir ou remover** produtos do estoque, utilizando um dos botões disponíveis:

➕ Inclusões:

: Exibe uma lista com os grupos de produtos disponíveis. Ao selecionar um ou mais grupos, todos os produtos pertencentes a eles serão adicionados ao estoque.

: Exibe uma lista de produtos individuais. Selecione os produtos desejados para adicioná-los ao estoque.

➖ Remoções:

: Exibe os grupos já vinculados ao estoque. Ao selecionar um grupo, todos os produtos pertencentes a ele serão removidos do estoque — **desde que estejam com saldo igual a zero** ou **não haja contagem de estoque pendente**.

: Exibe os produtos já incluídos e com **saldo zerado**. Selecione os produtos desejados para removê-los individualmente do estoque.

Além da opção de remoção em massa, os produtos também podem ser removidos individualmente do estoque por meio do ícone disponível na listagem de produtos no box **Produtos no Estoque**.

Basta clicar no ícone correspondente ao item desejado, desde que o produto esteja com **saldo zerado** e **não haja contagem desse estoque em andamento**.

Após concluir as inclusões ou remoções, clique no botão para salvar as alterações realizadas e retornar à tela de listagem de estoques.

* * *

### Editar Estoque

Para modificar os dados de um estoque já cadastrado, siga os passos:

Acesse o módulo de Estoques. A tela de listagem exibirá todos os estoques cadastrados.

Localize o estoque que deseja editar na lista. Você pode usar o filtro de pesquisa para agilizar a busca.

Clique no ícone ao lado do estoque desejado.

A tela de edição do cadastro do estoque será aberta, permitindo:

*   No box **Alterar Estoque**, a edição dos campos `Descrição`, `Tipo` e `Enviar para Shell`.
    
*   Já no box **Produtos no Estoque**, é possível tanto editar os campos `Local` e `Capacidade`, como incluir ou remover produtos do estoque por meio dos botões **Incluir Produto / Grupo** e **Remover Produto / Grupo**.
    

**Restrições de Remoção**

*   Produtos com saldo diferente de **0** no estoque não poderão ser removidos.
    

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Estoque

Para remover um estoque do sistema, siga os passos:

Acesse o módulo de Estoques.

Localize o estoque que deseja excluir na tela de listagem.

Clique no ícone de ao lado do estoque desejado.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

Por motivos de segurança e integridade dos dados, o sistema **não permitirá a exclusão** de um estoque nos seguintes casos:

*   Se houver **contagens realizadas** nesse estoque;
    
*   Se o estoque possuir produtos vinculados a ele;
    
*   Se o estoque estiver vinculado a um PDV.
    

* * *

Reprocessamento de Saldo
------------------------

O reprocessamento de saldo é uma funcionalidade essencial do sistema que tem como objetivo corrigir divergências nos saldos de produtos quando ocorrem alterações em movimentações já registradas. Esta ferramenta é fundamental para manter a integridade dos dados de estoque e garantir que os relatórios reflitam a realidade atual dos saldos.

O reprocessamento resolve um problema comum que ocorre na seguinte situação, por exemplo:

**Situação Inicial**: Um produto é cadastrado e uma nota fiscal de compra é lançada (exemplo: 100 unidades)

**Movimentações Subsequentes**: Após o lançamento inicial, ocorrem diversas movimentações como vendas, contagens de estoque, transferências, etc.

**Descoberta do Erro**: Posteriormente, descobre-se que a nota fiscal inicial estava incorreta (exemplo: eram 50 unidades ao invés de 100)

**Problema Resultante**: O Relatório de Acompanhamento de Saldos por Produtos continua mostrando os cálculos baseados no valor inicial incorreto (100 unidades), causando divergências em todo o histórico.

Para realizar o reprocessamento de saldos:

Acesse o módulo de Estoques através do caminho: `Menu Cadastro > Produtos > Estoques`.

Clique no botão .

A seguinte tela será apresentada:

Reprocessamento de Saldo

O módulo de reprocessamento oferece diversas opções para refinar o processo de recálculo, permitindo que o usuário especifique exatamente quais dados devem ser considerados:

*   `Data Inicial`: Permite definir a partir de qual data as movimentações devem ser consideradas para o recálculo.
    
*   `Grupos`: Filtra o reprocessamento para produtos pertencentes a grupos específicos.
    
*   `Subgrupos`: Permite um filtro mais granular, selecionando produtos de subgrupos específicos.
    
*   `Produtos`: Possibilita selecionar produtos individualmente para o reprocessamento.
    
*   `Recálculo`: Determine o tipo de operação a ser realizada no reprocessamento dos saldos dos produtos:
    
    *   `Verificar os saldos`: Esta opção realiza uma simulação do recálculo, mostrando as divergências sem aplicar as alterações nas movimentações. É útil para auditoria e verificação prévia.
        
    *   `Atualizar movimentações`: Esta opção aplica as correções de saldo diretamente nas movimentações do sistema, atualizando os registros conforme o recálculo.
        
*   `Considerar Saldo Inicial`: Defina como o sistema deve considerar o saldo existente no início do período definido para o reprocessamento:
    
    *   `Apenas contagem por saldo`: Restringe o recálculo somente a produtos que tiveram uma contagem do tipo 'Saldo' como operação inicial.
        
    *   `Contagem por saldo e compra com saldo inicial zero`: Considera para o recálculo apenas produtos cuja operação inicial foi uma compra com saldo inicial zero ou uma contagem do tipo 'Saldo' já concluída.
        
*   `Atualizar saldo atual dos estoques e produtos reprocessados`: Ao marcar esta opção, o sistema não apenas recalcula as movimentações, mas também atualiza o saldo atual dos estoques e dos produtos que foram reprocessados, garantindo que o saldo final do produto no sistema esteja alinhado com o saldo calculado.
    

Após configurar os campos desejados, clique em  para executar o processo. Ao término, o log gerado será disponibilizado para download.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Cadastro de Estoque.

**Problema**: Produtos não aparecem no PDV mesmo estando no estoque.

**Solução**: Verifique se o estoque está apontado corretamente no cadastro de Ponto de Venda e se o PDV está online.

**Problema**: As movimentações de compra e venda não estão sendo enviadas para a Shell.

**Solução**: Verifique se o campo `Enviar para Shell` está configurado como `Sim` para o estoque em questão.