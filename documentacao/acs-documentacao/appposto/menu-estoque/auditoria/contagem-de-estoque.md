---
title: Contagem de Estoque
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2949131
---

# Contagem de Estoque

16truenonelisttrue

Contagem de Estoque
===================

O módulo de **Contagem de Estoques** permite comparar o **saldo físico** das mercadorias com os **registros do sistema**, identificar divergências e realizar os ajustes necessários, garantindo **precisão e controle** do estoque.

**Principais características**

1.  **Registro de Contagens Físicas**  
    Permite registrar as quantidades físicas de produtos armazenados, coletadas **manualmente** ou com dispositivos como **coletores de dados**.
    
2.  **Conferência com o Sistema**  
    Compara os dados das contagens físicas com os registros no sistema, identificando divergências.
    
3.  **Ajustes de Estoque**  
    Oferece funcionalidade para corrigir automaticamente os registros do estoque com base nas contagens realizadas.
    
4.  **Histórico de Contagens**  
    Mantém um registro detalhado das contagens realizadas, incluindo datas, responsáveis e ajustes aplicados.
    
5.  **Classificação por Estoque**  
    Facilita a contagem organizando os itens por estoques ou grupos de produtos.
    
6.  **Geração de Relatórios**  
    Gera relatórios de divergências, ajustes e indicadores de acuracidade do estoque.
    

**Quando deve ser utilizado**

1.  **Contagem Regular (Rotina de Inventário)**  
    Realizada periodicamente (diária, semanal, mensal) em empresas com alta rotatividade de estoque.
    
2.  **Inventário Geral**  
    Executado anualmente ou semestralmente para auditorias ou fechamento contábil.
    
3.  **Contagem Cíclica**  
    Contagem seletiva de grupos de produtos em intervalos regulares, ideal para operações contínuas.
    
4.  **Situações Específicas**
    
    *   Quando forem detectadas discrepâncias recorrentes no estoque.
        
    *   Durante a introdução de um novo sistema de gestão.
        

**Vantagens**

1.  **Prevenção de Perdas**: Identifica discrepâncias causadas por perdas, furtos, ou danos, evitando problemas com falta de produtos e prejuízos financeiros.
    
2.  **Precisão nos Registros**: A contagem de estoque corrige possíveis divergências entre o estoque físico e o sistema, garantindo que as quantidades registradas reflitam a realidade.
    
3.  **Decisões Estratégicas**: Um inventário correto ajuda na tomada de decisões sobre reposição de produtos, promoções, e controle de custos, contribuindo para uma gestão mais eficiente.
    

**Consideração Especial**

Após a contagem, o estoque atualizado deve ser revisado e validado, garantindo que o saldo disponível no sistema esteja correto.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Estoque > Contagem de estoque

* * *

Será apresentada a seguinte telatela-inicial:

Tela geral de listagem de contagem de estoque

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento das contagens de estoque já realizadas.

As principais funcionalidades são:

**Criar Nova Contagem de Estoques**

Permite a criação de uma nova contagem de estoque, possibilitando o registro das quantidades físicas dos produtos para conferência e ajuste dos saldos no sistema.

**Filtro de Pesquisa**

Facilita a busca de contagens de estoque já realizadas, por período, estoque e demais critérios disponíveis, agilizando a localização das informações necessárias.

**Visualização**

Permite consultar os detalhes de uma contagem de estoque já realizada, sendo possível visualizar os produtos contados, as quantidades informadas, os valores de diferença apurados com base no preço de custo e no preço de venda.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Criar Contagem de Estoque

Box Criar Contagem de Estoque

*   `Código`: Código gerado automaticamente pelo sistema para cada contagem criada.
    
*   `Situação`: Indica a situação da contagem do estoque. As opções disponíveis são:
    
    *   `Pendente`: Indica que a contagem ainda não foi concluída.
        
    *   `Concluída`: Indica que a contagem foi finalizada.
        
*   `Forma de Contagem`: Define o tipo de contagem, que pode ser:
    
    *   Por `Contado`
        
    *   Por `Diferença`
        
*   `Data de início da contagem` e `Hora`: Informa a data e a hora em que a contagem foi iniciada.
    
*   `Turno`: Indica o turno em que a contagem está sendo realizada.
    
*   `Estoque`: Especifica o estoque onde a contagem será realizada. Todos os produtos que serão contados devem estar inseridos no estoque selecionado.
    
*   `Críticos`: Este parâmetro define quais produtos serão incluídos no processo de contagem de estoques, de acordo com a classificação de criticidade configurada no cadastro de produtos.
    
    *   `Críticos`: Inclui somente os produtos cadastrados como críticos.
        
    *   `Todos`: Inclui todos os produtos, independentemente de estarem ou não classificados como críticos.
        
*   `Ordem`: Configura a ordem em que os produtos serão listados na contagem. As opções são:
    
    *   `Grupo + Código`: Organiza pelo grupo do produto e depois pelo código.
        
    *   `Grupo + Alfabética`: Organiza pelo grupo do produto e depois pela descrição.
        
    *   `Local + Código`: Organiza pelo local do produto no estoque e depois pelo código.
        
    *   `Local + Alfabética`: Organiza pelo local do produto no estoque e depois pela descrição.
        
*   `Grupos`: Permite aplicar um filtro para selecionar o(s) grupo(s) dos produtos a serem incluídos na contagem.
    
*   `Subgrupos`: Permite aplicar um filtro para selecionar o(s) subgrupo(s) dos produtos a serem incluídos na contagem.
    
*   `Marcas`: Permite aplicar um filtro para selecionar a(s) marca(s) dos produtos a serem incluídos na contagem.
    
*   `Produtos`: Permite selecionar os produtos específicos a serem incluídos na contagem.
    
*   `Observação`: Campo de preenchimento livre destinado ao registro de informações adicionais relevantes sobre a contagem de estoque, como avarias identificadas, divergências apuradas ou outras observações pertinentes.
    

Além dos filtros, a tela conta com dois botões localizados no canto superior direito:

*   Botão
    
    *   Este botão redireciona o usuário para uma nova aba, onde é possível gerar um arquivo no formato **.txt**. com informações como **Código de barras, Descrição** e **Situação** dos produtos do estoque indicado.
        
*   Botão
    
    *   Este botão é utilizado para realizar a contagem de estoque por meio da importação de um arquivo gerado pelo coletor. O arquivo deve conter os códigos de barras e as quantidades contadas dos produtos.
        

* * *

### Box 2 - Itens da Contagem

Este box é exibido somente após a **geração da Contagem de Estoque**, clicando no botão .

Box Itens da Contagem

Neste box, é possível **visualizar** os produtos indicados na contagem. Contendo informações como: `Local`, `Grupo`, `Cód. barras`, `Descrição`, `Contado`, `Sistema`, `Diferença` e `Resultado`. Também é possível incluir observações por item da contagem, clicando no ícone , permitindo detalhar informações específicas para cada produto.

* * *

Tipos de Contagem
-----------------

O módulo de contagem de estoque oferece dois principais tipos de contagem: **Contado** e **Diferença**. Cada tipo de contagem tem uma funcionalidade específica que utiliza as quantidades apuradas fisicamente no estoque para realizar o ajuste do estoque no sistema.

### Contagem do Tipo Contado

Este tipo de contagem ajusta o estoque do produto no sistema com base no que foi contado fisicamente, garantindo que o resultado final corresponda à contagem realizada.

A contagem do tipo Contado pode ser realizada de **duas** maneiras:

#### Contagem Manual

A contagem é feita diretamente no sistema, inserindo-se manualmente as quantidades contadas no estoque físico de cada produto.

*   **Exemplo Prático:** O produto **REFRIGERANTE COCA-COLA 350ML** possui 3 unidades registradas no **Estoque 1** no sistema. Durante a contagem física, foram identificadas **5 unidades**. Esse valor deve ser informado manualmente na coluna **Contado**, e o sistema ajustará o estoque do produto para **5 unidades**, de acordo com a contagem realizada.
    

**Passo a Passo:**

Acesse o **Módulo de Contagem de Estoque**.

Clique no botão .

Defina o tipo como **Contado**.

Indique o **Estoque** a ser contado.

Filtre os produtos que serão contados, caso necessário.

Clique no botão . Será apresentada a seguinte tela:

Confirmar geração da contagem

Clique no botão .

Na listagem de produtos exibida no box **Itens da Contagem**, indique manualmente na coluna **Contado** a quantidade contada no estoque físico de cada item.

Contagem de Estoque - Tipo Contado

Após a conferência das quantidades apuradas na contagem, clique no botão para finalizar. Será apresentada a seguinte tela:

Confirmar finalização da contagem

Clique no botão para concluir.

#### Contagem por Arquivo

Utiliza-se um arquivo de contagem gerado por coletores que contêm o código de barras e a quantidade dos produtos contados. Esse arquivo é importado para o sistema, que atualiza as quantidades na coluna **Contado** automaticamente com base nas informações fornecidas.

:note:atlassian-note#B3D4FF

**Observação:** Utilizando a contagem por arquivo, as quantidades **não** poderão ser modificadas na listagem do sistema, uma vez que as mesmas são preenchidas automaticamente com as quantidades do arquivo.

*   **Exemplo Prático:** Um coletor é utilizado para escanear os códigos de barras dos produtos no estoque. O arquivo gerado possui as seguintes informações:
    
    *   Código: **7894900010015** (REFRIGERANTE COCA-COLA 350ML)
        
    *   Quantidade contada: **10 unidades**.
        
    *   Ao importar esse arquivo no sistema, a coluna **Contado** será ajustada automaticamente para **10 unidades** no estoque correspondente, refletindo a contagem física.
        

**Pré Configuração:**

Acesse o menu **Opções** \> **Sistema**.

Na guia **Geral**, configure os campos:

*   **Separador do Arquivo Coletor**: Defina o separador utilizado no arquivo para separar o código de barras e a quantidade contada, geralmente um '**;**'
    
*   **Separador Fracionário do Coletor**: Configure conforme a estrutura do arquivo gerado pelo coletor, podendo ser **Ponto** (**.**) ou **Vírgula** (**,**)
    

**Passo a Passo:**

Acesse o **Módulo de Contagem de Estoque**.

Clique no botão .

Defina o tipo como **Contado**.

Indique o **Estoque** a ser contado.

Clique no botão . A seguinte tela será apresentada:

Tela para indicação dos arquivos do coletor

Nessa tela, é possível indicar até 4 arquivos de listagem e 4 arquivos de contagem de produtos.

Existem **duas** maneiras de realizar a contagem por arquivo:

*   Importando tanto o arquivo de **listagem** como o arquivo de **resultado** (contagem)
    

Importação dos arquivos de listagem e resultado

*   O sistema irá apresentar na contagem **todos** os produtos presentes no arquivo de **listagem** importado, atualizando a coluna **Contado** automaticamente para a quantidade presente no arquivo de **resultado** daqueles produtos presentes no mesmo, e **zerando** a quantidade dos produtos presentes apenas no arquivo de listagem. Em resumo, atualiza a quantidade dos produtos presentes nos dois arquivos com a quantidade do arquivo de resultado, e zera o saldo dos produtos presentes apenas no arquivo de listagem.
    
*   **Observações**:
    
    *   Para indicar os dois arquivos em cada box, é necessário que a opção “**Usar apenas os arquivos de Resultado**” esteja **desmarcada**.
        
    *   Para gerar o **arquivo de listagem** dos produtos, clique no botão .
        

*   Importando **somente** o arquivo de **resultado** (contagem)
    

Importação do arquivo de resultado

*   O sistema irá apresentar na contagem apenas os itens presentes no arquivo de resultado importado, não influenciando na quantidade dos outros produtos do estoque.
    

Após indicar o(s) arquivo(s), clique no botão . O sistema irá listar os produtos e as quantidades de acordo com o(s) arquivo(s) importados.

:note:atlassian-note#B3D4FF

**Observação:** Caso o arquivo de resultado contenha códigos de barras que não pertençam ao estoque ou não estejam cadastrados no sistema, será gerado automaticamente um arquivo .txt detalhando esses códigos, indicando se estão ausentes no estoque ou no sistema.

Após a conferência das quantidades importadas, clique no botão para finalizar. Será apresentada a seguinte tela:

Confirmar finalização da contagem

Clique no botão para concluir.

### Contagem do Tipo Diferença

Este tipo de contagem ajusta a quantidade do produto no sistema com base na diferença entre a quantidade registrada no início da contagem e a quantidade contada fisicamente. Diferentemente da contagem do tipo Saldo, o sistema permite o lançamento de vendas e compras enquanto a contagem estiver pendente.

A contagem do tipo Diferença pode ser realizada apenas manualmente.

#### Contagem Manual

A contagem é feita diretamente no sistema, inserindo-se manualmente as quantidades contadas no estoque físico de cada produto.

*   **Exemplo Prático:** O produto **REFRIGERANTE COCA-COLA 350ML** possui uma quantidade inicial de **5 unidades** no **ESTOQUE 1**. Durante a contagem física, foi constatado que haviam **3 unidades** do produto. Com a contagem do tipo Diferença, é necessário realizar o seguinte cálculo: \[`Quantidade contada do estoque físico (3 unidades) - Quantidade inicial no sistema (5 unidades)`\] = **\-2 unidades**. Esse valor deve ser informado na coluna **Diferença** manualmente, e dessa forma a quantidade do produto será ajustado no sistema para **3 unidades**, refletindo a contagem física.
    

**Passo a Passo:**

Acesse o **Módulo de Contagem de Estoque**.

Clique no botão .

Defina o tipo como **Diferença**.

Indique o **estoque** a ser contado.

Filtre os produtos que serão contados, caso necessário.

Clique no botão . Será apresentada a seguinte tela:

Confirmar geração da contagem

Clique no botão .

Na listagem de produtos exibida no box **Itens da Contagem**, indique manualmente na coluna **Diferença** o valor da diferença calculada a partir do cálculo:

`Quantidade contada do estoque físico - Quantidade inicial puxada no inicio da contagemde cada item`

Contagem de Estoque - Tipo Diferença

Após a conferência das quantidades indicadas, clique no botão para finalizar. Será apresentada a seguinte tela:

Clique no botão para concluir.

* * *

Consulta de Contagem
--------------------

Para realizar a consulta de uma contagem específica, siga os passos abaixo:

:note:atlassian-note#B3D4FF

**Observação**: Os botões exibidos na tela variam de acordo com a situação da contagem.

Acesse o **Módulo de Contagem de Estoque**.

Localize a contagem que deseja consultar. Clique no ícone para abrir a tela de consulta, onde serão apresentadas todas as informações da contagem selecionada.:

**Contagem com Situação Pendente**

Consulta de contagem pendente

**Box 1 - Alterar Contagem de Estoque**

Neste box, é possível apenas visualizar as informações preenchidas na etapa de geração da contagem. Três botões estão disponíveis no canto superior direito:

*   Botão : Redireciona o usuário para uma nova aba para geração do **Relatório de Contagem de Estoque** da contagem consultada.
    
*   Botão : Exclui a contagem de estoque. Disponível apenas quando a contagem está com situação Pendente.
    
*   Botão : Finaliza a contagem e atualiza as quantidades dos produtos com base nas quantidades definidas.
    

**Box 2 - Itens da Contagem**

Neste box, é possível **visualizar** os produtos indicados na contagem e, caso não seja uma contagem por arquivo, **alterar** manualmente as quantidades. Os campos disponíveis são:

*   `Local`: Identifica onde o produto está armazenado no estoque. (ex: Corredor 5A).
    
*   `Grupo`: Identifica o grupo ao qual o produto pertence.
    
*   `Cód. Barras`: Mostra o código de barras do produto.
    
*   `Descrição`: Apresenta o nome do produto.
    
*   `Contado`: Coluna para indicar a quantidade contada de cada produto, caso seja uma contagem do tipo Contado.
    
*   `Sistema`: Exibe a quantidade registrada no sistema no inicio da contagem.
    
*   `Diferença`: Coluna destinada a indicação da diferença entre a quantidade contada do estoque físico com a quantidade da coluna Sistema, caso seja uma contagem do tipo Diferença.
    
*   `Resultado`: Indica o status final de cada produto:
    
    *   `Ok` quando a coluna Diferença é igual zero, ou seja, a quantidade contada do estoque físico é igual a quantidade que havia no sistema.
        
    *   `Falta` quando a coluna Diferença é menor que zero, ou seja, a quantidade contada do estoque físico é menor que a quantidade que havia no sistema.
        
    *   `Sobra` quando a coluna Diferença é maior que zero, ou seja, a quantidade contada do estoque físico é maior que a quantidade que havia no sistema.
        

Botão : Salva as quantidades contadas dos produtos na contagem pendente.

**Contagem com Situação Concluída**

Consulta de contagem concluída

**Box 1 - Alterar Contagem de Estoque**

Neste box, é possível apenas visualizar as informações preenchidas na etapa de geração da contagem. Um botão está disponível no canto superior direito:

*   Botão : Redireciona o usuário para uma nova aba para geração do **Relatório de Contagem de Estoque** da contagem consultada.
    

**Box 2 - Itens da Contagem**

Neste box, apenas é possível **visualizar** os produtos indicados na contagem. Os campos disponíveis são os mesmos descritos na contagem pendente:

*   `Local`: Identifica onde o produto está armazenado no estoque. (ex: Corredor 5A).
    
*   `Grupo`: Identifica o grupo ao qual o produto pertence.
    
*   `Cód. Barras`: Mostra o código de barras do produto.
    
*   `Descrição`: Apresenta o nome do produto.
    
*   `Contado`: Quantidade contada de cada produto (aplicável apenas a contagem do tipo Contado).
    
*   `Sistema`: Exibe a quantidade registrada no sistema no início da contagem.
    
*   `Diferença`: Coluna referente a diferença entre a quantidade contada do estoque físico com a quantidade da coluna Sistema, caso seja uma contagem do tipo Diferença.
    
*   `Resultado`: Indica o status final de cada produto:
    
    *   `Ok` quando a coluna Diferença é igual zero, ou seja, a quantidade contada do estoque físico é igual a quantidade que havia no sistema.
        
    *   `Falta` quando a coluna Diferença é menor que zero, ou seja, a quantidade contada do estoque físico é menor que a quantidade que havia no sistema.
        
    *   `Sobra` quando a coluna Diferença é maior que zero, ou seja, a quantidade contada do estoque físico é maior que a quantidade que havia no sistema.
        

* * *

Edição e Exclusão de Contagem
-----------------------------

Para realizar a **edição** ou **exclusão** de uma contagem, é necessário que a contagem esteja com a situação **Pendente**. A edição permite alterar as quantidades contadas ou informações de produtos, enquanto a exclusão remove a contagem completamente do sistema. Siga os passos:

Acesse o **Módulo de Contagem de Estoque**.

Localize a contagem pendente que deseja editar ou excluir.

Clique no ícone para abrir a tela de consulta da contagem.

Para editar, faça as alterações necessárias e clique no botão .

Para excluir, clique no botão no canto superior direito e confirme a operação.

:note:atlassian-note#B3D4FF

**Observação:** Contagens concluídas não podem ser editadas ou excluídas. Caso uma alteração seja necessária, será necessário realizar uma nova contagem.