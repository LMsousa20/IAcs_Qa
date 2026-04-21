---
title: Integração com Shell Select - AppPosto
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/471924749
---

# Integração com Shell Select - AppPosto

A integração entre o AppPosto e a Shell Select tem como objetivo otimizar a gestão da loja, automatizando o cadastro de produtos e promoções, além de viabilizar o envio automático das informações de vendas e compras para a Shell. Esses dados são fundamentais para a apuração de metas, controle de royalties e demais processos administrativos relacionados à franquia.

Este manual apresenta, de forma detalhada, todas as etapas necessárias para a configuração e utilização da integração, desde as configurações iniciais até o cadastro de promoções e a vinculação manual de produtos, assegurando o pleno funcionamento do processo.

### **Configurações Iniciais**

**Parâmetros do Sistema**

*   No AppPosto, acesse _**Opções > Parâmetros > Sistema**_ > guia _**Integração**_ \> aba _**Integração**_ _**Selcon/Thoth**_.
    
    *   Configure a `Data inicial` e o `IBM` (informações fornecidas pelo consultor da loja).
        

Parâmetros do Sistema > Aba Integração > Guia INTEGRAÇÃO SELCON THOTH

**Configuração dos seguintes cadastros:**

**Cadastro de Pontos de Venda**

Na guia Integração do Cadastro de Pontos de Venda, deve ser indicado que as movimentações realizadas no PDV serão enviadas para a Shell.

**Cadastro de Grupos de Produtos**

No Cadastro de Grupos de Produtos, deve ser indicado individualmente em cada grupo de produtos da loja de conveniência que as compras e vendas desses produtos vinculados ao grupo serão transmitidas para a Shell, indicando o campo ‘Enviar para Shell’ como ‘Sim’. 

**Cadastro de Estoques**

No Cadastro de Estoques, deve ser indicado nos estoques de venda que as vendas dos produtos vinculados a esse estoque serão transmitidas para a Shell, indicando o campo ‘Enviar para Shell’ como ‘Sim’.

**Dica:** Cadastre um grupo chamado **PROMOHITS** no menu _**Cadastro**_ **\>** _**Produtos**_ **\>** _**Grupos** **de Produtos**_ e crie subgrupos para organizar as promoções que serão cadastradas por **mês**.

Cadastro de Grupos e Subgrupos

**Carga inicial**

*   Retorne ao **Parâmetro do Sistema > Guia Integração > Integração Selcon/Thoth** e clique em . Será realizada uma consulta e baixa de todos os Departamentos, Combos e Produtos da base da Shell para o sistema ACS.
    
*   Durante o processo da Carga Full, é realizada a vinculação automática dos produtos pelo código de barras dos mesmos.
    

Carga Full Shell

**Verificação de produtos não vinculados**

*   Após o processo da Carga Full, caso ainda existam produtos não vinculados, acesse o menu _**Relatórios**_ **\>** _**Listagem**_ **\>** _**Produtos**_ para identificar quais produtos deverão ter sua vinculação realizada de forma manual.
    

Relatório de Listagem de Produtos

Defina os filtros da seguinte forma para localizar os produtos que necessitam da vinculação manual:

Situação: **Ativos**

Selcon: **Não Vinculado**

### **Vinculação Manual** #vinc\_manual

**Acessando o Mapeamento Shell**

*   Acesse _**Opções**_ **\>** _**Shell > Mapeamento Shell.**_
    

Opções > Shell > Mapeamento Shell

**Localizando o produto (Shell)**

*   Na parte superior, está localizado o box **Mapeamento de Produtos Shell** (produtos da base da Shell Select). Pesquise o produto a ser vinculado pela **Descrição** ou **Código de Barras** do mesmo.
    

Mapeamento Shell Select - Produtos

Selecione o produto que será vinculado e clique em . Uma nova janela será exibida com os produtos da base da ACS.

Listagem de produtos da ACS para vinculação

**Localizando o produto (ACS)**

*   Para realizar a vinculação manual, basta clicar no produto desejado. A vinculação será concluída no ato do clique.
    

**Repita o processo para todos os produtos não vinculados apresentados no relatório.**

Caso o produto pesquisado no **Mapeamento** não seja localizado pelo código de barras ou descrição, será necessário solicitar o cadastro do mesmo no portal da Shell Select. Abaixo está anexado um manual disponibilizado pela própria Shell de como realizar o procedimento.

[Manual Hermes](https://acssoftware-my.sharepoint.com/:b:/g/personal/brunonovais_acsapps_com_br/EbtUOLSwGZ1Fpm7a-n2fdsYBQrYMpcVQMIka9WzP3knLYg?e=MolB55)

### **Cadastro de Promoções do Catálogo**

**Acessando o Mapeamento Shell Select**

*   Para iniciar o cadastro de promoções, acesse o menu _**Opções**_ **\>** _**Shell > Mapeamento Shell**_.
    

Opções > Shell > Mapeamento Shell

**Localizando a promoção**

*   Na parte inferior da tela, no box **Mapeamento de Promoções Shell**, utilize o campo **Código Mix** para pesquisar a promoção desejada.
    

Mapeamento Shell Select - Promoções

**Filtrando itens da promoção**

*   Após localizar a promoção, clique no botão . Os produtos que fazem parte dessa promoção serão exibidos no box **Mapeamento de Produtos Shell**.
    
    *   **Importante:**
        
        *   Apenas os produtos com o status **Vinculado** na coluna _Vinculado_ poderão ser incluídos na promoção.
            
        *   Produtos marcados como **Não Vinculado** não poderão ser indicados como componentes durante o cadastro da promoção.
            
    *   **Observação**:
        
        *   Não é necessário vincular todos os produtos listados no box **Mapeamento de Produtos Shell** ao filtrar os itens. Podem aparecer produtos que não estão cadastrados na loja, e, portanto, não será possível realizar sua vinculação.
            

**Vinculação** **de itens**

*   Caso algum produto necessário para a promoção esteja com o status **Não Vinculado**, é obrigatório realizar sua [vinculação manual](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/471924749/Integra+o+com+Shell+Select+-+AppPosto#vinc_manual). Esse processo é essencial, pois somente produtos vinculados podem ser incluídos como componentes da promoção. Após confirmar que todos os produtos que irão compor a promoção estão com o status **Vinculado**, é possível prosseguir com o cadastro da mesma no sistema.
    

Mapeamento Shell Select

**Cadastro da promoção**

*   No menu _**Cadastro**_ **\>** _**Produtos**_ **\>** _**Produtos**_, localize um produto que fará parte da promoção e utilize a função **Clonar Produto** para criar um novo cadastro com base nele.
    

Na guia **Alterar Produto**, atualize os seguintes campos:

*   `Grupo`: Selecione o grupo `PROMOHITS`.
    
*   `Subgrupo`: Indique o subgrupo correspondente ao período da promoção no catálogo.
    
*   `Código de Barras - GTIN`: Insira o código da promoção conforme indicado no catálogo. Com isso, o produto será automaticamente vinculado ao combo da Shell.
    
*   `Descrição`: Será preenchida automaticamente com base no GTIN, mas pode ser editada para melhor identificar a promoção.
    
*   `Preço`: Informe o preço sugerido para a promoção, conforme especificado no catálogo.
    

Cadastro da promoção - Guia Geral

Na guia **Estoque**, preencha:

*   `Início da validade` e `Fim da validade`: Indique o período de vigência da promoção, conforme o catálogo. O sistema impedirá a venda fora deste intervalo.
    

Cadastro da Promoção - Guia Estoque

*   Na guia **Integração**, configure o campo `Cód. Produto AC Fortes` clicando no ícone .
    

Cadastro da promoção - Guia Integração

*   Clique no botão e vincule o novo produto promocional ao estoque apropriado para concluir o cadastro.
    

**Verificação dos componentes**

*   Após concluir o cadastro da promoção, acesse a guia **Estoque** e clique no botão para definir os itens que farão parte da composição da promoção. A seguinte tela será apresentada:
    

Cadastro de componentes da promoção

Onde:

Box Resumo do Componente

O box de **Resumo do componente** exibe dados consolidados da promoção, auxiliando na montagem da oferta:

Guia VALORES BASE DO PRODUTO1800

*   `Empresa`: Razão social da empresa à qual a promoção está vinculada.
    
*   `Produto`: Exibe a **descrição da promoção** que está sendo configurada.
    
*   `Qtd. de opcionais na venda`: Informa a **quantidade de escolhas** que o cliente deverá fazer no momento da compra da promoção. Cada escolha será feita entre os produtos que compartilham o mesmo **número de opção**, e esses produtos devem pertencer a mesma categoria — por exemplo, uma opção de refrigerantes.
    
    *   Exemplo de aplicação: Para a opção de **refrigerantes**, podem ser cadastrados todos os sabores disponíveis na loja (desde que estejam listados no catálogo da Shell para a promoção). Todos os produtos dessa opção devem:
        
        *   Ter **o mesmo preço de venda.**
            
        *   Ser cadastrados com o **mesmo número de opção.**
            
        
        Dessa forma, ao adquirir a promoção, o cliente poderá escolher entre os sabores disponíveis, e o sistema irá debitar do estoque **apenas o produto selecionado**, mantendo o controle correto de inventário.
        
*   `Preço de venda`: Define o valor final da promoção, conforme estabelecido no encarte oficial. Como se trata de um **produto composto**, o preço só pode ser ajustado nesta tela de componentes.
    
*   `Botão` : Distribui o **preço total da promoção proporcionalmente** entre os itens cadastrados, gerando automaticamente os valores de "Preço Comp." em cada linha da composição. Funcional **somente quando todos os componentes forem fixos**.
    

Guia TOTAIS1800

*   `Qtd. Fixos`: Exibe a quantidade total de itens definidos como **fixos** na composição da promoção.
    
*   `Qtd. Opcionais`: Informa o número de itens cadastrados como **opcionais**, ou seja, produtos que fazem parte de um grupo de escolha.
    
*   `Custo mínimo (R$)`: Somatória do **Custo do Item** de todos os itens definidos como fixos + somatória do **Custo do Item** do item com **menor** valor de custo de cada opção.
    
*   `Custo máximo (R$)`: Somatória do **Custo do Item** de todos os itens definidos como fixos + somatória do **Custo do Item** do item com **maior** valor de custo de cada opção.
    
*   `Preço venda (R$)`: Valor total do preço de venda avulso dos itens da promoção, calculado da seguinte forma:
    
    *   Soma do **preço avulso de todos os itens fixos +** Soma do **preço avulso de um produto de cada grupo (opção)**.
        
*   `Margem Lucro mín.(R$)`: Valor mínimo de lucro esperado sobre a promoção, calculado a partir da diferença entre o Preço de Venda (R$) e o Custo Máximo (R$).
    
*   `Margem Lucro mín. (%)`: Valor percentual referente a margem mínima de lucro.
    
*   `Margem Lucro máx. (R$)`: Valor máximo de lucro esperado sobre a promoção, calculado a partir da diferença entre o Preço de Venda (R$) e o Custo Mínimo (R$).
    
*   `Margem Lucro máx. (%)`: Valor percentual referente a margem máxima de lucro.
    
*   `Dif. Preço Produto (R$)`: Diferença entre a **soma dos preços avulsos** (de todos os itens fixos + um item de cada grupo opcional) e o **Preço de Venda** da promoção. Essa informação demonstra o **desconto efetivo** concedido ao cliente ao adquirir os produtos via promoção.
    

Box Componentes

**Inclusão e Configuração de Componentes**

O box de **Componentes** permite a inclusão manual de novos produtos por meio dos seguintes campos e opções:

Guia INFORME O COMPONENTE A SER INCLUÍDO:1800

*   `Componente`: Clique no ícone para ser apresentada a listagem de produtos cadastrados no sistema e selecione o que deve fazer parte da promoção.
    
    *   **Atenção:** Somente produtos **vinculados** e pertencentes ao catálogo da promoção da Shell poderão ser incluídos.
        
*   `Fixo?`: Define se o item será **fixo** na promoção.
    
    *   Se marcado como **Sim**, o produto será **sempre** incluído na venda da promoção e o campo **Opção** deve obrigatoriamente ser **0**.
        
    *   Se marcado como **Não**, o campo **Opção** deve obrigatoriamente ser diferente de **0**, indicando que o item será parte de um grupo de escolha.
        
*   `Opção`: Determina o grupo de seleção ao qual o item pertence:
    
    *   **0:** Produto fixo, sempre incluso na venda.
        
    *   **1, 2, 3...:** Produto opcional. Ao cadastrar múltiplos produtos com o mesmo número de opção, cria-se um grupo em que o cliente poderá escolher **apenas um** dos itens no momento da compra.
        
*   `Custo unitário (R$)`: Representa o custo por unidade do produto selecionado. Este campo é preenchido automaticamente com base no cadastro do produto, mas pode ser ajustado conforme necessário. É fundamental para o cálculo dos custos e margens.
    
*   `Quantidade`: Defina a quantidade do item que será considerada na composição da promoção. Este valor deve refletir a proporção do produto dentro da oferta promocional.
    
*   `Preço (R$)`: Valor de venda do item dentro da promoção. Pode ser editado conforme necessidade.
    
*   `Valor de venda total (R$)`: Calculado automaticamente com base na quantidade inserida e no preço do item na promoção.
    
*   `Margem %`: Percentual de lucro obtido sobre o custo do item na promoção. Calculado automaticamente com base no preço e custo.
    

A interface disponibiliza os seguintes botões de ação:

*   : Adiciona um novo item à composição, permitindo definir suas quantidades e valores.
    
*   : Interrompe o processo de adição de um novo componente antes que ele seja salvo, sem registrar os dados preenchidos.
    
*   : Salva as alterações realizadas no componente atualmente em edição, atualizando os dados no sistema.
    
*   : Descarta as alterações feitas durante a edição de um item, mantendo os dados anteriores.
    

Guia LISTAGEM DOS COMPONENTES1800

Os componentes adicionados são exibidos em forma de lista, contendo as seguintes informações:

*   `Número`: Número sequencial atribuído ao item na lista após sua inclusão.
    
*   `Opção`: Número que define a qual grupo de escolha o item pertence.
    
    *   **Opção = 0:** Item **fixo** na promoção, ou seja, sempre será incluído na venda.
        
    *   **Opção diferente de 0:** Item **opcional**, pertencente a um grupo em que o cliente poderá escolher **apenas um** entre os produtos disponíveis. Para que haja escolha, é necessário que **ao menos dois itens** estejam cadastrados com o mesmo número de opção.
        
*   `Cód. Barras`: Código de barras do produto incluído como componente da promoção.
    
*   `Componente`: Descrição do produto cadastrado como parte da promoção.
    
*   `Fixo?`: Indica se o item é fixo (`Sim`) ou opcional (`Não`) na composição da promoção.
    
*   `Custo Unit.`: Valor de custo por unidade do produto.
    
*   `Quantidade`: Quantidade do item incluída na promoção.
    
*   `Custo Item`: Resultado da multiplicação entre **Custo Unitário** e **Quantidade**.
    
*   `Preço avulso`: Valor de venda do produto quando comercializado **fora da promoção**.
    
*   `Preço Componente`: Valor proporcional atribuído ao item dentro da composição promocional.
    
*   `Valor venda`: Resultado da multiplicação entre o **Preço Comp.** e a **Quantidade** do item.
    
*   `Margem %`: Percentual de lucro obtido com base no custo e no preço de venda do item dentro da promoção.
    

### **Exemplos de cadastro de componentes**

Todos os catálogos de promoções enviados pela Shell seguem um **padrão de estrutura** semelhante, o que facilita o processo de cadastro e montagem dos componentes no sistema.

A seguir, apresentaremos exemplos de promoções comuns — ou de estrutura similar — para ilustrar as formas corretas de cadastrá-las.

**Promoções com mais de um tipo de item**

Esse modelo de promoção é bastante frequente nos catálogos enviados pela Shell e envolve a combinação de diferentes categorias de produtos (por exemplo, salgados, bebidas e chocolates). Cada tipo de composição poderá ser montado de diferentes maneiras, dependendo da escolha do cliente. Alguns exemplos desse tipo de promoção são:

**Observação**: Há três formas possíveis de montar a composição dos produtos dentro desse tipo de promoção. A escolha da estrutura fica a critério de quem está realizando o cadastro, já que, para a Shell, o mais importante é a contabilização da **venda pelo código da promoção**, e não dos itens individualmente.

**Formas de Composição:**

*   **Maneira 1 – Itens fixos + itens opcionais**  
    Parte dos produtos é obrigatória na venda (fixos) e parte pode ser escolhida pelo cliente (opcionais).
    
*   **Maneira 2 – Todos os itens fixos**  
    Todos os produtos cadastrados saem obrigatoriamente em cada venda da promoção, sem opção de escolha.
    
*   **Maneira 3 – Todos os itens opcionais**  
    O cliente escolhe entre as opções disponíveis quais produtos deseja levar ao adquirir a promoção.
    

Para exemplificação, será utilizada a seguinte promoção como base:

Promoção Catálogo Shell Select

**Exemplo de Composição - Maneira 1: Itens Fixos + Itens Opcionais**

Neste exemplo, a promoção foi cadastrada com a seguinte configuração:

*   **Item Fixo:**  
    `FF COXINHA DE FRANGO SELECT`
    
    *   Configurado com **Opção = 0**, o que indica que **sempre será incluído automaticamente na venda** da promoção.
        
*   **Itens Opcionais:**
    
    *   **Refrigerantes** configurados como **Opção = 1**
        
    *   **Bombons** configurados como **Opção = 2**
        

Essa configuração permite que, no momento da venda, o cliente escolha **um item de cada grupo opcional**, enquanto o item fixo será incluído obrigatoriamente.

**Importante:** O sistema debita do estoque **apenas os itens fixos e os itens opcionais escolhidos pelo cliente**. Itens não selecionados **não são considerados** para a venda nem para o controle de estoque.

**Apresentação dessa promoção no PDV**

Ao bipar o **código de barras da promoção** no PDV, a tela de **escolha de itens** será exibida, com a seguinte estrutura:

*   **Parte Superior da Tela:** Exibe automaticamente os **itens fixos da promoção**, que não podem ser alterados.
    
*   **Parte Inferior da Tela:** Exibe os **grupos de itens opcionais**, permitindo ao operador selecionar **um item por grupo**, conforme configuração feita durante o cadastro.
    

**Como selecionar os itens no PDV**

No campo **Cod. Barras**, bipe o código do produto desejado ou pressione **F4** para abrir a listagem de produtos disponíveis da promoção.

Após escolher**, defina a quantidade** (para essa promoção, 1).

Clique no botão para adicionar o item à composição da venda.

Caso seja necessário **remover** algum item previamente selecionado, clique em e selecione o item correspondente.

Após selecionar os itens escolhidos pelo cliente, clique em para lançar a promoção e prosseguir para o pagamento.

**Exemplo de Composição - Maneira 2: Todos os Itens Fixos**

Nesta configuração de promoção, **todos os produtos foram cadastrados com a opção = 0**, indicando que são **itens fixos**. Isso significa que, sempre que a promoção for vendida, **todos os produtos vinculados serão automaticamente incluídos na venda**, sem a necessidade de qualquer escolha por parte do cliente.

**Apresentação dessa promoção no PDV**

Ao bipar o **código de barras da promoção** no PDV:

*   **Nenhuma tela de seleção será exibida**, pois não há itens opcionais a serem escolhidos.
    
*   O sistema **inclui automaticamente todos os itens fixos** da promoção na venda.
    
*   **Ao finalizar a venda**, o estoque será debitado de forma proporcional a todos os componentes da promoção, conforme quantidade definida na composição.
    

**Exemplo de composição - Maneira 3: Todos os Itens Opcionais**

Neste exemplo, a promoção foi cadastrada com a seguinte configuração:

*   **Todos os itens opcionais:**
    
    *   **Salgados** configurados como **Opção = 1**
        
    *   **Refrigerantes** configurados como **Opção = 2**
        
    *   **Bombons** configurados como **Opção = 3**
        

Essa configuração permite que, no momento da venda, o cliente escolha **um item de cada grupo opcional**.

**Importante:** O sistema debita do estoque **apenas os itens opcionais escolhidos pelo cliente**. Itens não selecionados **não são considerados** para a venda nem para o controle de estoque.

**Apresentação dessa promoção no PDV**

Ao bipar o **código de barras da promoção** no PDV, a tela de **escolha de itens** será exibida, com a seguinte estrutura:

*   **Parte Superior da Tela:** Exibe os **grupos de itens opcionais**, permitindo ao operador selecionar **um item por grupo**, conforme configuração feita durante o cadastro.
    

**Como selecionar os itens no PDV**

No campo **Cod. Barras**, bipe o código do produto desejado ou pressione **F4** para abrir a listagem de produtos disponíveis da promoção.

Após escolher**, defina a quantidade** (para essa promoção, 1).

Clique no botão para adicionar o item à composição da venda.

Caso seja necessário **remover** algum item previamente selecionado, clique em e selecione o item correspondente.

Após selecionar todos os itens escolhidos pelo cliente, clique em para lançar a promoção e prosseguir para o pagamento.

**Promoções com apenas um tipo de item**

Outro formato comum nos catálogos enviados pela Shell são as **promoções compostas por apenas um tipo de produto**, variando apenas em relação à quantidade ofertada. Alguns exemplos desse tipo de promoção são:

  

**Características da Composição:**

*   **Produto fixo:** Como se trata do mesmo item repetido, todos os componentes da promoção são cadastrados como **fixos** (Opção = 0).
    
*   **Sem necessidade de escolha:** No PDV, ao bipar o código da promoção, **todos os itens são automaticamente adicionados** à venda, sem exibir telas de seleção.
    
*   **Controle de estoque:** O estoque será debitado proporcionalmente ao número de unidades definido na composição da promoção.
    

Para exemplificação, será utilizada a seguinte promoção como base:

Promoção Catálogo Shell Select

**Exemplo de composição 1**

**Composição Automática de Promoção**

Ao finalizar o cadastro de uma promoção cujo único item já está devidamente **vinculado ao combo da Shell Select**, o sistema realiza automaticamente a montagem dos componentes.  
Neste caso, o mesmo produto será adicionado **três vezes**, cada um com **Quantidade 1**, totalizando os itens da promoção conforme definido no catálogo.  
Esse comportamento visa refletir de forma automática a quantidade total estipulada, facilitando o processo e garantindo aderência às regras da promoção.

**Exemplo de composição 2**

**Composição Manual de Promoção**

Caso o sistema **não realize a composição automaticamente**, é possível configurar a promoção de forma manual.  
Para isso, basta **incluir o item apenas uma vez** na tela de componentes e definir o campo **Quantidade** com o valor total desejado (por exemplo, **3**).  
O resultado será equivalente à composição automática, contabilizando corretamente o número de itens exigido pela promoção.

**Apresentação dessa promoção no PDV**

Ao bipar o **código de barras da promoção** no PDV:

*   **Nenhuma tela de seleção será exibida**, pois não há itens opcionais a serem escolhidos.
    
*   O sistema **inclui automaticamente todos os itens fixos** da promoção na venda.
    
*   **Ao finalizar a venda**, o estoque será debitado de forma proporcional a todos os componentes da promoção, conforme quantidade definida na composição.
    

### **Possíveis alertas que podem surgir durante a configuração dos componentes**

Durante a configuração dos componentes de uma promoção, o sistema pode exibir alguns alertas. Abaixo estão os principais, com orientações sobre como solucioná-los:

**Alerta de vinculação**

**Mensagem exibida: “**_**Só é possível incluir itens que fazem parte do combo da Shell Select!**_**”**

Essa mensagem aparece quando o usuário tenta adicionar um item que **não está previamente vinculado** ao combo configurado pela Shell Select. O sistema restringe a inclusão para garantir que apenas os produtos autorizados façam parte da promoção ou combo específico.

**Como corrigir:**

*   Verifique se o item faz parte da lista de produtos autorizados pela Shell para aquela promoção.
    
*   Revise a vinculação conforme as instruções apresentadas na seção correspondente deste manual.
    
*   Após o ajuste, tente incluir novamente o item para confirmar se o problema foi resolvido.
    

**Alerta de preço**

Esse alerta ocorre quando **há divergência de preços entre produtos que pertencem à mesma opção de escolha** (ou seja, dentro de um mesmo grupo de seleção de itens opcionais).

**Como corrigir:**

*   Altere o valor de venda de um dos produtos diretamente na tela de **Componentes**, garantindo que todos os itens da mesma opção possuam o mesmo preço.
    
*   Alternativamente, atualize o preço no cadastro do produto, se necessário, e realize a inclusão novamente do mesmo.
    

### Envio de Movimentações Shell

A funcionalidade de **Envio de Movimentações Shell** permite o envio para a Shell (Raízen) das informações de vendas, compras e estoque, sempre que solicitado pela distribuidora (uma vez que esse envio não foi realizado automaticamente). Esse envio é essencial para manter o controle operacional e garantir que os dados do sistema estejam sincronizados com os sistemas da Shell, conforme os padrões exigidos.

**Acessando o Envio de Movimentações Shell**

*   Para iniciar o envio de movimentações, acesse o menu _**Opções**_ **\>** _**Shell >**_ **Envio de Movimentações Shell**_**.**_
    

Opções > Shell > Envio de Movimentações Shell

**Enviando Movimentações Shell**

Box Envio de Movimentações Shell

No box **Envio de Movimentações Shell**, está localizada as informações necessárias a serem enviadas para a base da Shell Select. Informe os seguintes campos:

*   `Data inicial`: Informe o primeiro dia do período de envio.
    
*   `Data Final`: Informe o último dia do período de envio.
    
*   `Tipo Envio`: Escolha o tipo de movimentação que será enviada:
    
    *   `Vendas`: Movimentações registradas no sistema referentes à **saída de produtos da loja de conveniência**, ou seja, vendas realizadas ao consumidor final. Inclui todos os itens comercializados no caixa no período informado.
        
    *   `Compras`: Entradas de produtos no estoque da loja, com base em **notas fiscais de compra lançadas no sistema** durante o período. Representa o abastecimento da loja por fornecedores externos.
        
    *   `Estoques`: Refere-se à **posição final do estoque** de cada item na data final selecionada. Gera um registro do saldo físico ou contábil dos produtos armazenados na loja.
        

Após preencher os campos, clique no botão .

**Histórico de Movimentações Enviadas**

Box Movimentações

O box **Movimentações** exibe o histórico de envios realizados para a Shell, incluindo as datas, os tipos de movimentação e os respectivos protocolos gerados. Onde haverão os campos:

**Para filtragem**

*   `Data Inicial`: Define o início do período a ser pesquisado.
    
*   `Data Final`: Define o fim do período da consulta.
    
*   `Protocolo`: Permite buscar diretamente por um protocolo específico, caso já conhecido.
    
*   `Tipo de Protocolo`: Filtra os resultados por tipo de movimentação enviada: Venda, Compra ou Estoque.
    

Após preencher os campos de filtragem desejados, clique no botão para que as informações correspondentes sejam exibidas na listagem abaixo.

**Na listagem**

*   `Data Enviada`: Data em que a movimentação foi enviada ao sistema da Shell.
    
*   `Venda Enviada`: Indica se houve envio de vendas no período.
    
*   `Protocolo Vendas`: Número de identificação gerado para o envio de vendas.
    
*   `Compra Enviada`: Indica se houve envio de compras no período.
    
*   `Protocolo Compras`: Número de identificação gerado para o envio de compras.
    
*   `Estoque Enviado`: Indica se houve envio de estoque no período.
    
*   `Protocolo Estoques`: Número de identificação gerado para o envio de estoque.