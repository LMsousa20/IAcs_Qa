---
title: Combos
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/40927245
---

# Combos

16truenonelisttrue

Combos
======

O módulo de **Cadastro de Combos** permite a criação de ofertas promocionais compostas por múltiplos produtos agrupados sob uma única condição comercial. Essa funcionalidade tem como principais objetivos **automatizar campanhas de vendas cruzadas**, **aumentar o ticket médio por cliente** e **estimular a fidelização**.

Com esse recurso, é possível configurar combos com **regras personalizadas**, como:

*   Aplicação de **descontos promocionais** sobre o valor total dos itens;
    
*   Definição dos **dias da semana** em que o desconto estará disponível;
    
*   Estabelecimento de um **período de validade** para o combo.
    

A utilização do módulo permite maior flexibilidade na gestão de estratégias comerciais, otimizando o desempenho das vendas no ponto de venda.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Produtos > Combos

Será apresentada a seguinte tela:

Tela de Listagem de Combos

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento dos combos já cadastrados. Esta tela é organizada para facilitar a navegação e a inserção de dados.rganizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Novo Combo**

Permite o cadastro de um novo combo de produtos no sistema, garantindo que todos os combos relevantes estejam devidamente registradas.

**Filtro de Pesquisa**

Facilita a busca de combos específicos pelo nome ou situação, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de um combo já cadastrado, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Novo Combo

Box Novo Combo

*   `Descrição`: Nome do combo a ser cadastrado.
    
*   `Número`: Código identificador do combo. Este número facilita a seleção rápida no PDV por meio do atalho **M +** `Número` do Combo.
    
*   `Desconto`: Valor do desconto em reais aplicado sobre o total dos produtos do combo no momento da venda.
    
*   `Dia do Desconto`: Define em quais dias da semana o desconto do combo será válido. É possível aplicar o desconto em todos os dias ou selecionar um dia específico.
    
*   `Data Inicio da Validade` e `Data Fim da Validade`: Período de vigência da promoção. Fora desse intervalo, o combo não poderá ser vendido no PDV.
    
*   `Situação`: Indica o status atual do combo no sistema, podendo ser, por exemplo, `Ativo` ou `Inativo`.
    

### Box 2 - Itens do Combo

Este box é exibido somente após o **cadastro inicial** do combo. Para acessá-lo, é necessário clicar no ícone do combo desejado. Após essa ação, o box será apresentado logo abaixo da seção **Alterar Combo**.

Neste box, são listados todos os produtos que compõem o combo, permitindo visualizar e gerenciar suas informações.

Box Itens do Combo

*   `Cód. Barras`: Código de barras do produto que faz parte do combo.
    
*   `Descrição`: Nome do produto que compõe o combo.
    
*   `Quantidade`: Quantidade do produto que compõe o combo.
    
*   `Preço`: Preço unitário do produto.
    
*   `Valor`: Valor total do item no combo (calculado automaticamente como `Quantidade` _×_ `Preço Unitário`).
    

Essa visualização facilita a conferência e o controle dos itens que integram a oferta promocional, permitindo ajustes e validações antes da disponibilização no PDV.

### Box 3 - Geral

Este box é exibido quando o usuário clica no botão para incluir um novo item no combo.

Box Geral

*   `Produto`: Campo para selecionar o produto que fará parte do combo. Ao clicar no ícone , será exibida uma tela com a listagem de produtos já cadastrados no sistema, permitindo a escolha do item desejado.
    
*   `Quantidade`: Define a quantidade do produto que compõe o combo. Essa quantidade será considerada tanto para fins de controle de estoque (baixa automática no momento da venda) quanto para o cálculo do valor total do combo.
    

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir combos no sistema.

### Incluir Combo

Para cadastrar um novo combo no sistema, siga os passos abaixo:

Acesse o módulo de Combos através do caminho: `Menu Cadastro > Produtos > Combos`.

Na tela de listagem dos combos, clique no botão .

Preencha os campos no box **Novo Combo**:

*   `Descrição`: Insira o nome do combo. Deve ser claro e representativo, pois será exibido nas telas de consulta e no PDV.
    
*   `Número`: Insira o número de identificação do combo.
    
*   `Desconto`: (Opcional) Insira o valor do desconto que será aplicado no preço total do combo.
    
*   `Dia do Desconto`: (Opcional) Indique em quais/qual dia(s) o desconto será aplicado.
    
*   `Data Inicio da Validade`: (Opcional) Defina a data inicial de vigência do combo.
    
*   `Data Fim da Validade`: (Opcional) Defina a data final de vigência do combo.
    
*   `Situação`: Selecione `Ativo` para que o combo esteja disponível para venda.
    

Após preencher todos os campos e revisar as informações, clique no botão . A tela será redirecionada para a listagem dos combos cadastrados.

Preencha os campos no box **Geral** (após acessar o combo cadastrado e clicar no botão no box **Itens do Combo**):

*   `Produto`: Clique no ícone e selecione o produto que fará parte do combo na listagem dos produtos disponíveis.
    
*   `Quantidade`: Indique a quantidade do produto que irá compor o combo.
    

Após preencher os campos, clique no botão . A tela será redirecionada para a listagem dos itens do combo. Repita o processo para a inclusão de mais itens caso haja necessidade.

* * *

### Editar Combo

Para modificar os dados de um combo já cadastrado, siga os passos:

Acesse o módulo de Combos. A tela de listagem exibirá todos os combos cadastrados.

Localize o combo que deseja editar na lista. Você pode usar os filtros de pesquisa para agilizar a busca.

Clique no ícone ao lado do combo desejado.

A tela de cadastro do combo será aberta, permitindo a modificação dos campos.

**Restrições de Edição**

*   Todos os campos poderão ser alterados livremente, exceto o `Produto` já incluído no box **Geral**. Caso seja necessário a edição de um produto, deverá ser realizada a exclusão do mesmo e inclusão do novo.
    

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Combo

Para remover um combo do sistema, siga os passos:

Acesse o módulo de Combos.

Localize o combo que deseja excluir na tela de listagem.

Clique no ícone de ao lado do combo desejado.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

Por motivos de segurança e integridade dos dados, o sistema **não permitirá a exclusão** de um combo nos seguintes casos:

*   Se houver **vendas realizadas** com esse combo;
    
*   Se o combo possuir itens cadastrados.
    

Caso precise remover um combo que já foi utilizado, considere inativá-lo alterando sua `Situação` para `Inativa` na tela de edição.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Cadastro de Combos.

**Problema**: O combo não aparece no PDV ou não aplica o desconto.

**Solução**: Verifique a `Situação` do combo (deve estar `Ativo`), o `Período de Validade` e os `Dias do Desconto`. Se o combo estiver fora do período de vigência ou do dia da semana configurado, ele não será aplicado.

**Problema**: Não consigo excluir um combo.

**Solução**: O sistema impede a exclusão de combos que já foram vendidos ou que possuem itens cadastrados. Para manter a integridade dos dados, se o combo já foi utilizado, altere sua `Situação` para `Inativa`. Se o problema for a existência de itens, remova todos os itens do combo antes de tentar excluí-lo.

**Problema**: O estoque dos produtos não está sendo baixado corretamente ao vender um combo.

**Solução**: Verifique se os produtos foram corretamente associados ao combo e se as `Quantidades` de cada item estão corretas. A baixa de estoque é automática e baseada nessas configurações.