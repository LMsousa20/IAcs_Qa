---
title: Integração AppPosto com BR Mania e Premmia
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/730595329
---

# Integração AppPosto com BR Mania e Premmia

1\. Visão Geral da Integração
-----------------------------

A integração entre o AppPosto e a BR Mania proporciona uma solução completa e eficiente para:

*   Padronização de cadastros;
    
*   Envio de vendas;
    
*   Controle e gestão de posições livres de produtos;
    
*   Processamento de promoções e benefícios do Premmia no PDV.
    

Este processo assegura que todas as informações trafeguem corretamente entre o AppPosto e os sistemas da franqueadora.

2\. Requisitos Mínimos para Funcionamento
-----------------------------------------

Para garantir o correto funcionamento da integração, é obrigatório que o ambiente esteja atualizado conforme abaixo:

*   **ACS PDV:** Versão 419 (data do arquivo: 26/12/2025) ou superior.
    

3\. Configurações no Retaguarda
-------------------------------

### 3.1 Parâmetros do Sistema

Acesse **Opções > Sistema** e configure as seguintes guias.

#F4F5F7

**Guia Integração > Aba Integração BRMANIA**

*   Configure a **Data inicial**.
    
*   Informe o código **ZBRM**.
    
*   Caso não possua essas informações, utilize o botão .
    

Opções > Parâmetros do Sistema > Integração > Integração BRMANIA

#F4F5F7

**Guia Integração > Aba Integração Premmia Loja**

*   Informe o **Código R3 Posto** (igual ao ZBRM).
    
*   Configure a **URL Premmia**: [https://premmia-api.vibraenergia.com.br/premmia-partner-eapi/api/](https://premmia-api.vibraenergia.com.br/premmia-partner-eapi/api/)
    
*   Configure a **URL Vibra**: [https://nwlngo9cd3.execute-api.us-east-1.amazonaws.com/prod/](https://nwlngo9cd3.execute-api.us-east-1.amazonaws.com/prod/)
    

Opções > Parâmetros do Sistema > Integração > Integração Premmia Loja

**Atenção:** A carga na etapa de integração só será realizada com sucesso se ambas as guias estiverem corretamente configuradas.

### 3.2 Cadastro de Pontos de Venda

Acesse **Cadastro > Pontos de Venda**.

*   Localize o PDV da loja.
    
*   Na guia **Integração**, marque o parâmetro **Enviar movimentações para BR Mania.**
    

Cadastro de Pontos de Venda

### 3.3 Cadastro de Grupos de Produtos

Acesse **Cadastro > Grupos de Produtos**.

*   Para os grupos de produtos da loja de conveniência, defina o parâmetro **Enviar para Franqueadora** como **Sim** (individualmente em cada grupo).
    

Cadastro de Grupos de Produtos

**Dica:** Crie um grupo chamado **PROMOÇÕES BR** ou **BR MANIA**, com subgrupos por bimestre, para facilitar a organização das campanhas e a obtenção de relatórios de vendas.

Cadastro de Grupos de Produtos

### 3.4 Cadastro de Administradoras

Acesse **Cadastro > Administradoras** e crie uma nova administradora com as seguintes características:

*   Tipo de cartão: **Carteira Digital**
    
*   Tipo da Carteira: **Premmia Loja**
    
*   Operação: **Integrado API**
    
*   Operadora: **Premmia**
    
*   Bandeira: **Premmia Loja**
    
*   Taxa administrativa (%): **0**
    
*   Prazo de Repasse (dias): **30 dias**
    

Cadastro de Administradoras

Essa configuração garante:

*   Correto registro das vendas no PDV;
    
*   Facilidade no controle financeiro;
    
*   Inclusão da despesa de taxa administrativa somente no momento da baixa, respeitando os prazos e taxas reais definidos pela franqueadora.
    

4\. Carga Inicial da Integração BR MANIA
----------------------------------------

Acesse **Opções** > **Parâmetros do Sistema** > **Guia Integração** > **Aba Integração BRMANIA** e realize a **Carga Full**.

Durante esse processo:

*   Categorias, produtos e promoções da BR Mania são importados para o AppPosto;
    
*   A vinculação automática ocorre pelo código de barras.
    

**Atenção:**

*   A **Carga Full** deve ser realizada apenas em integrações completas de lojas novas.
    
*   Para ativar somente os resgates Premmia no PDV, utilize a **Carga Parcial**.
    

Além dos campos de configuração inicial, a aba **Integração BR Mania** possui os seguintes campos e botões de ação:

*   **Bloquear envio posição livre**: Este parâmetro define se o sistema irá bloquear apenas o envio automático das movimentações para a BR Mania.
    
    *   **Sim**: Quando selecionada, o sistema **bloqueia somente o envio automático** caso a quantidade de produtos não vinculados ultrapasse o valor configurado no campo **Qnt. produtos posição livre.** Nessa condição, o envio deverá ser realizado manualmente pelo operador.
        
    *   **Não:** O sistema **não realiza bloqueio**, permitindo o envio automático das movimentações, independentemente da quantidade de produtos não vinculados.
        

**Observação:** O bloqueio, quando aplicado, **afeta apenas o envio automático**. O **envio manual é sempre permitido**, independentemente da configuração.

*   **Qnt. produtos posições livres**: Define a **quantidade máxima de produtos não vinculados** permitida para o envio automático das movimentações para a BR Mania. (Máximo permitido de até 300 produtos).
    

Além dos botões de e , há também o botão , que permite **verificar o status de envio automático das vendas para a BR Mania**, informando se está **ativo** ou **bloqueado** conforme a quantidade de produtos não vinculados e o limite configurado.

5\. Verificação e Vinculação Manual de Produtos
-----------------------------------------------

1.  Após a carga, acesse **Relatórios > Listagem > Produtos** para identificar quais produtos deverão ter sua vinculação realizada de forma manual.
    
2.  Utilize os filtros:
    
    *   Grupo de Produtos: **Selecione quais grupos de produtos serão considerados na geração do relatório da integração com o BR Mania**
        
    *   Situação: **Ativos**
        
    *   BR Mania: **Não Vinculado**
        

Relatório de Listagem de Produtos

### Vinculação Manual vinmanual

1.  Acesse **Opções > BR MANIA > Mapeamento BR Mania.**
    

Opções > BR MANIA > Mapeamento BR Mania

2.  Na parte superior, está localizado o **Mapeamento de Produtos BR Mania**. Pesquise o produto a ser vinculado pela **descrição** ou **código de barras** do mesmo.
    

Mapeamento de Produtos BR Mania

3.  Clique no ícone , selecione o produto correspondente do AppPosto. A vinculação será realizada automaticamente no momento da seleção do produto na lista.
    

Listagem de produtos do AppPosto para vinculação manual

4.  Repita o processo até que todos os produtos cadastrados no sistema estejam vinculados.
    

**Observação:** Caso o produto pesquisado no **Mapeamento** não seja localizado pelo código de barras ou descrição, será necessário solicitar o cadastro do mesmo no portal da BR Mania.

1.  Acesse o seguinte link [https://cn.vibraenergia.com.br/login/](https://cn.vibraenergia.com.br/login/) e realize o login.
    
2.  Clique no ícone do Menu Lateral.
    

3.  Acesse o menu **Franquias** e opção **Solicitação Novo Produto**.
    

4.  Na tela apresentada, clique no botão e realize o cadastro do produto.
    
5.  Com esse cadastro realizado, existem dois cenários que podem ocorrer:
    
    1.  **Cadastro concluído:** O produto é aceito e incluído na base da Br Mania. Na próxima Carga Parcial, o mesmo será baixado para o AppPosto e poderá ser vinculado manualmente ao produto da base do AppPosto.
        
    2.  **Cadastro não aceito:** O produto não teve o cadastro no portal aceito e deverá ser tratado como **Posição Livre** (produtos fora da base BR Mania).
        

notecc542886-05cd-426e-a7a6-502f9ff7f485

### Posição Livre

As lojas de conveniência possuem, por padrão, um limite de 50 posições livres para cadastrar produtos não existentes na base da BR Mania. Este limite é definido pela franqueadora.

**Como configurar um produto como Posição Livre:**

1.  **Acesse o cadastro do produto** no sistema.
    
2.  Na guia **Integração**, configure o campo **Tipo Composto (Integração)** como **Livre**.
    

3\. No campo **Cód. Posição Livre BR Mania**, clique no ícone .

4\. Selecione a **Unidade**, **Setor** e clique no botão confirmar para finalizar a configuração do produto como Posição Livre.

Seleção de unidade e setor

Com essa configuração, o produto será tratado como Posição Livre.

**Como verificar se um produto está como Posição Livre:**

1.  Acesse **Opções** \> **BR MANIA** > **Listagem de Posições Livres.**
    
2.  No box **Listagem de Posições Livre**, serão apresentados todos os produtos configurados dessa forma.
    

Listagem de Posições Livres

### Posição Livre

As lojas de conveniência possuem, por padrão, um limite de 50 posições livres para cadastrar produtos não existentes na base da BR Mania. Este limite é definido pela franqueadora.

**Como configurar um produto como Posição Livre:**

1.  **Acesse o cadastro do produto** no sistema.
    
2.  Na guia **Integração**, configure o campo **Tipo Composto (Integração)** como **Livre**.
    

3\. No campo **Cód. Posição Livre BR Mania**, clique no ícone ![image-20260122-130723.png](https://acsapps.atlassian.net/wiki/download/attachments/730595329/image-20260122-130723.png?version=1&modificationDate=1769087246290&cacheVersion=1&api=v2).

4\. Selecione a **Unidade**, **Setor** e clique no botão confirmar para finalizar a configuração do produto como Posição Livre.

![posição-livre-20260122-131537.png](https://acsapps.atlassian.net/wiki/download/thumbnails/730595329/posi%C3%A7%C3%A3o-livre-20260122-131537.png?version=1&modificationDate=1769087795542&cacheVersion=1&api=v2&width=500&height=184)

Com essa configuração, o produto será tratado como Posição Livre.

**Como verificar se um produto está como Posição Livre:**

1.  Acesse **Opções** \> **BR MANIA** > **Listagem de Posições Livres.**
    
2.  No box **Listagem de Posições Livre**, serão apresentados todos os produtos configurados dessa forma.
    

![11-listagem-posições-livres-20250918-140928.png](https://acsapps.atlassian.net/wiki/download/thumbnails/730595329/11-listagem-posi%C3%A7%C3%B5es-livres-20250918-140928.png?version=2&modificationDate=1769088354808&cacheVersion=1&api=v2&width=1200&height=301)

6\. Cadastro de Promoções do Catálogo BR Mania
----------------------------------------------

Esta etapa é responsável pelo correto cadastro das promoções disponibilizadas no catálogo da BR Mania, garantindo que elas possam ser consultadas, resgatadas e utilizadas corretamente no PDV.

### 6.1 Acessando o Mapeamento BR Mania

Para iniciar o processo de cadastro das promoções:

*   Acesse o menu **Opções > BR MANIA > Mapeamento BR Mania**.
    
*   Esta tela centraliza todas as informações de produtos e promoções vinculadas à BR Mania.
    

Opções > BR MANIA > Mapeamento BR Mania

### 6.2 Localizando a Promoção

*   Na parte inferior da tela, está localizado o Mapeamento de Promoções BR Mania.
    
*   Utilize o campo **Código Promoção** para pesquisar a promoção desejada, conforme informado no catálogo.
    

Mapeamento de Promoções BR Mania

### 6.3 Filtrando os Itens da Promoção

Após localizar a promoção:

*   Clique no ícone .
    
*   Os produtos que compõem a promoção serão exibidos no box **Mapeamento de Produtos BR Mania**.
    

Mapeamento BR Mania - Itens da Promoção

**Observações:**

*   Apenas produtos com o status **Vinculado** na coluna **Vinculado** podem ser utilizados na composição da promoção. Produtos marcados como **Não Vinculado** não poderão ser incluídos como itens da promoção.
    
*   Nem todos os produtos listados após o filtro precisam ser vinculados. Alguns itens podem não existir no cadastro da loja, sendo normal que permaneçam sem vinculação.
    

### 6.4 Vinculação de Itens Necessários

*   Caso algum produto obrigatório para a promoção esteja com o status **Não Vinculado**, é indispensável realizar sua **vinculação manual****.**
    
*   Somente produtos devidamente vinculados poderão ser indicados como componentes da promoção.
    

Após confirmar que todos os produtos necessários estão com o status **Vinculado**, o cadastro da promoção poderá prosseguir.

### 6.5 Cadastro da Promoção no AppPosto

Com os itens corretamente vinculados, realize o cadastro da promoção no AppPosto:

1.  Acesse **Cadastro > Produtos > Produtos**.
    
2.  Localize um produto que fará parte da promoção.
    
3.  Utilize a opção **Clonar Produto** para criar um novo cadastro baseado nesse item.
    

Tela de cadastro do produto a ser clonado

Tela de mapeamento de produtos vinculados

#### Guias Novo Produto e Preço/Custo

Atualize os campos abaixo:

*   **Grupo:** Selecione **BR MANIA**.
    
*   **Subgrupo:** Informe o subgrupo correspondente ao período da promoção no catálogo.
    
*   **Cód. de barras - GTIN:** Informe o código da promoção conforme o catálogo Premmia.
    
    *   Este preenchimento realiza automaticamente a vinculação do produto ao combo da BR Mania.
        
*   **Descrição:** Preenchida automaticamente pelo GTIN, podendo ser ajustada para melhor identificação da promoção.
    
*   **Preço:** Preenchido automaticamente conforme os valores definidos no catálogo.
    

Cadastro de Produtos - Guia Novo Produto

#### Guia Estoque

*   Os campos **Início da Validade** e **Fim da Validade** deverão ser preenchidos, de acordo com o período da promoção.
    

Cadastro de Produtos - Guia Estoque

#### Guia Integração

*   Configure o campo **Cód. produto AC Fortes** clicando no ícone para gerar o código automaticamente.
    

Cadastro da promoção - Guia Integração

Após a conferência das informações:

*   Clique em e vincule o novo produto promocional ao **estoque adequado** para concluir o cadastro.
    

**Observação importante sobre promoções Premmia**

Ao finalizar o cadastro, o sistema preencherá automaticamente o campo **Cód. Premmia BR Mania** para as promoções que necessitam da utilização de pontos para o pagamento. Esse campo é essencial para que o **resgate com pontos** ocorra corretamente no PDV.

7\. Verificação e Configuração dos Componentes da Promoção
----------------------------------------------------------

Após concluir o cadastro da promoção, é fundamental **validar** a composição realizada de forma **automática** e, **se necessário**, ajustar os componentes que fazem parte da oferta promocional. Essa etapa garante que o comportamento da promoção no PDV, o controle de estoque e os cálculos financeiros ocorram corretamente.

### 7.1 Acessando os Componentes da Promoção

*   Após concluir o cadastro da promoção, acesse a guia **Estoque** e clique no botão .
    

Cadastro de Produtos > Guia Estoque

Serão exibidos os itens associados automaticamente à promoção conforme o catálogo da BR Mania, permitindo conferência e ajustes de acordo com a operação da loja.

### 7.2 Resumo dos Componentes

Box Resumo dos Componentes

Aba VALORES BASE DO PRODUTO1800

*   **Empresa**: Empresa à qual a promoção está vinculada.
    
*   **Produto:** Exibe a descrição da promoção que está sendo configurada.
    
*   **Qtd. opcionais na venda:** Define quantas escolhas o cliente deverá realizar no momento da compra da promoção.
    
    *   Cada escolha ocorre entre produtos que possuem o mesmo número de **Opção**.
        
    *   Os produtos de uma mesma opção devem pertencer à mesma categoria (exemplo: Cafés Nestle).
        
        *   **Exemplo prático:** Para uma opção de chocolates, podem ser cadastrados todos os sabores disponíveis na loja (desde que façam parte do catálogo da BR Mania para a promoção). Todos devem:
            
            *   Possuir o mesmo preço de venda;
                
            *   Estar cadastrados com o mesmo número de opção.
                
    *   Dessa forma, no PDV o cliente escolhe o sabor desejado, e o sistema realiza a baixa correta apenas do item selecionado no estoque.
        
*   **Preço de venda:** Define o valor final da promoção, conforme estabelecido no encarte oficial.
    

Por se tratar de um produto composto, o ajuste de preço deve ser realizado exclusivamente nesta tela.

*   Botão : Distribui proporcionalmente o preço total da promoção entre os itens cadastrados, preenchendo automaticamente o campo **Preço componente.**
    

Funciona apenas quando todos os componentes são fixos.

Aba TOTAIS1800

A seção de resumo apresenta informações consolidadas para validação da promoção:

*   **Qtd. Fixos:** Total de itens definidos como fixos.
    
*   **Qtd. Opcionais:** Total de itens cadastrados como opcionais.
    
*   **Custo mínimo (R$)**: Somatória do Custo do Item de todos os itens definidos como fixos + somatória do Custo do Item do item com menor valor de custo de cada opção.
    
*   **Custo máximo (R$)**: Somatória do Custo do Item de todos os itens definidos como fixos + somatória do Custo do Item do item com maior valor de custo de cada opção.
    
*   **Preço venda (R$)**: Valor final da promoção.
    
*   **Margem Lucro mín.(R$)**: Valor mínimo de lucro esperado sobre a promoção, calculado a partir da diferença entre o Preço de Venda (R$) e o Custo Máximo (R$).
    
*   **Margem Lucro mín. (%)**: Valor percentual referente a margem mínima de lucro.
    
*   **Margem Lucro máx. (R$)**: Valor máximo de lucro esperado sobre a promoção, calculado a partir da diferença entre o Preço de Venda (R$) e o Custo Mínimo (R$).
    
*   **Margem Lucro máx. (%)**: Valor percentual referente a margem máxima de lucro.
    
*   **Dif. Preço Produto (R$):** Diferença entre a soma dos preços avulsos dos itens e o preço promocional, demonstrando o desconto concedido ao cliente.
    

### 7.3 Visualização dos Componentes da Promoção

Box Componentes - Listagem dos Componentes

LISTAGEM DOS COMPONENTES1800

Os componentes são exibidos em forma de lista, contendo as seguintes colunas:

*   **Número:** Número sequencial do item na lista.
    
*   **Opção:** Indica o grupo de escolha do item.
    
    *   **Opção = 0:** Item fixo, sempre incluso na promoção.
        
    *   **Opção diferente de 0:** Item opcional, pertencente a um grupo de escolha.
        

Para que haja escolha, é necessário que **ao menos dois itens** estejam cadastrados com o mesmo número de opção.

*   **Cód. Barras:** Código de barras do produto componente.
    
*   **Componente:** Descrição do produto incluído na promoção.
    
*   **Fixo?:** Indica se o item é fixo (Sim) ou opcional (Não).
    
*   **Custo Unit.:** Custo unitário do componente.
    
*   **Quantidade:** Quantidade do item utilizada na promoção.
    
*   **Custo Item:** Resultado da multiplicação entre **Custo Unit** e **Quantidade**.
    
*   **Preço avulso:** Valor de venda do produto fora da promoção.
    
*   **Preço componente:** Valor proporcional atribuído ao item dentro da composição promocional.
    
*   **Valor Venda:** Resultado da multiplicação entre **Preço Componente** e **Quantidade**.
    
*   **Margem (%):** Percentual de lucro calculado com base no custo e no preço do item dentro da promoção.
    

### 7.4 Inclusão e Edição de Componentes

Tela de componentes - Inclusão de componentes

INFORME O COMPONENTE A SER INCLUÍDO1800

O box de componentes permite também a inclusão manual de produtos, quando necessário.

*   **Componente:** Selecione o produto a ser incluído, clicando no ícone .
    
    *   Pode ser bipado com leitor ou pesquisado pela descrição do produto.
        

Somente produtos vinculados e pertencentes ao catálogo da promoção BR Mania poderão ser incluídos.

*   **Fixo?:** Define se o item será fixo ou opcional.
    
    *   **Sim:** Item fixo, com **Opção = 0**.
        
    *   **Não:** Item opcional, com **Opção diferente de 0**.
        
*   **Opção:** Define o grupo de escolha:
    
    *   **0:** Produto fixo.
        
    *   **1, 2, 3…:** Produtos opcionais. Itens com o mesmo número de opção formam um grupo de escolha, no qual o cliente selecionará apenas um no PDV.
        
*   **Custo Unitário:** Preenchido automaticamente conforme o cadastro do produto. Esse valor impacta diretamente no custo total e na margem da promoção.
    
*   **Quantidade:** Define a quantidade do item na composição da promoção.
    
*   **Preço (R$):** Valor avulso do produto fora da promoção, preenchido automaticamente, podendo ser ajustado se necessário.
    
*   **Valor de venda total (R$):** Resultado da multiplicação entre a **Quantidade** e o **Preço (R$)**.
    
*   **Margem (%):** Percentual de lucro obtido com base no custo e no preço de venda do item dentro da promoção.
    

Além do resumo, a interface disponibiliza os seguintes botões de ação:

*   : Adiciona um novo item à composição, permitindo definir suas quantidades e valores.
    
*   : Cancela o processo de adição de um novo componente antes que ele seja salvo, sem registrar os dados preenchidos.
    
*   : Salva as alterações realizadas no componente atualmente em edição, atualizando os dados no sistema.
    
*   : Cancela as alterações feitas durante a edição de um item, mantendo os dados anteriores.
    

Os botões de **Confirmar edição** e **Cancelar edição** serão habilitados automaticamente ao clicar no ícone .

8\. Exemplos de Cadastro de Componentes de Promoções
----------------------------------------------------

Todos os catálogos de promoções enviados pela BR Mania seguem um padrão de estrutura semelhante, o que facilita o processo de cadastro e a montagem correta dos componentes no AppPosto.

Nesta seção, são apresentados exemplos práticos organizados por **tipo de promoção**, considerando que existem **três grandes tipos**, cada um com suas variações. O objetivo é tornar o fluxo de cadastro, conferência e venda claro e de fácil entendimento.

8.1 Promoções com Mais de um Tipo de Item
-----------------------------------------

Este é um dos modelos mais comuns nos catálogos da BR Mania. Envolve a combinação de diferentes categorias de produtos, como salgados, bebidas e chocolates.

**Observação Importante:** Para a BR Mania, o ponto principal é a **contabilização da venda vinculada ao código da promoção**. A forma como os componentes são estruturados internamente no AppPosto pode variar conforme a necessidade operacional da loja.

Existem **três maneiras válidas** de montar esse tipo de promoção.

#F4F5F7

**Promoção base:** 25029635 – JAN/FEV 26: PÃO BATATA REQUEIJÃO OU PÃO BATATA FRANGO COM REQUEIJÃO + BEBIDA CREMOSA POR R$ 13,99

### 8.1.1 Maneira 1 – Itens Fixos + Itens Opcionais

Parte dos produtos é obrigatória na venda (fixos) e parte pode ser escolhida pelo cliente (opcionais).

**Configuração dos Componentes**

**Item Fixo (Opção = 0):**

**Itens Opcionais (Opção = 1):**

*   PÃO DE BATATA BR MANIA FRANGO COM REQUEIJÃO
    

*   ACHOC NESTLE DOIS FRADES
    
*   CAFE NESTLE CAPPUCCINO
    
*   CAFE NESTLE CAPPUCINO ALPINO
    
*   ACHOC NESTLE KIT KAT
    

Exemplo de montagem com itens fixos e opcionais

Exemplo de montagem com itens fixos e opcionais

**Comportamento no PDV**

Ao bipar o código da promoção:

*   A tela de seleção será exibida.
    
*   **Parte superior:** itens fixos, sem possibilidade de alteração.
    
*   **Parte inferior:** grupo de itens opcionais disponíveis para escolha.
    

Nesse formato, o item fixo é sempre incluído na venda, enquanto o cliente escolhe apenas um item do grupo opcional.

Venda da promoção no PDV

* * *

### 8.1.2 Maneira 2 – Todos os Itens Fixos

Todos os produtos são obrigatórios na venda, sem possibilidade de escolha.

**Configuração dos Componentes**

**Itens Fixos (Opção = 0):**

*   PÃO DE BATATA BR MANIA FRANGO COM REQUEIJÃO
    
*   CAFE NESTLE CAPPUCCINO UN
    

Exemplo de montagem com itens fixos apenas

Exemplo de montagem com itens fixos apenas

**Comportamento no PDV**

*   Ao bipar o código da promoção, nenhuma tela de seleção é exibida.
    
*   Todos os itens são incluídos automaticamente na venda.
    
*   O estoque é debitado proporcionalmente conforme a composição cadastrada.
    

Venda da promoção no PDV

* * *

### 8.1.3 Maneira 3 – Todos os Itens Opcionais

Nesse modelo, não há itens fixos. O cliente escolhe um item de cada grupo opcional.

**Configuração dos Componentes**

**Grupo Opção 1:**

**Grupo Opção 2:**

*   PÃO BATATA BR MANIA FRANGO COM REQUEIJÃO
    
*   PÃO BATATA BR MANIA COM REQUEIJÃO
    

*   ACHOC NESTLE DOIS FRADES
    
*   CAFE NESTLE CAPPUCCINO
    
*   CAFE NESTLE CAPPUCCINO ALPINO
    
*   ACHOC NESTLE KIT KAT
    

Exemplo de montagem com itens opcionais apenas

Exemplo de montagem com itens opcionais apenas

**Comportamento no PDV**

*   Ao bipar o código da promoção, a tela de seleção será exibida.
    
*   O operador deverá escolher **um item de cada grupo opcional**.
    
*   Apenas os itens escolhidos serão debitados do estoque.
    

Venda da promoção no PDV

* * *

8.2 Promoções com Apenas um Tipo de Item
----------------------------------------

Esse modelo é comum em promoções de bebidas ou produtos unitários em quantidade maior.

**Características Gerais**

*   Todos os componentes são **itens fixos (Opção = 0)**.
    
*   Não há escolha no PDV.
    
*   O estoque é debitado conforme a quantidade definida na composição.
    

#F4F5F7

**Promoção base:** 25029277 – JAN/FEV 26: BRAHMA 350ML – 3 POR R$ 3,79 CADA

### 8.2.1 Todos os Itens Fixos

Todos os produtos são obrigatórios na venda, sem possibilidade de escolha.

**Configuração dos Componentes**

**Item Fixo (Opção = 0):**

*   CERV BRAHMA CHOPP LT 350ML
    

Exemplo de montagem com item fixo apenas

Exemplo de montagem com item fixo apenas

**Comportamento no PDV**

*   Ao bipar o código da promoção, nenhum menu de seleção é exibido.
    
*   Todos os itens são incluídos automaticamente.
    
*   O estoque é debitado proporcionalmente conforme a composição cadastrada.
    

Venda da promoção no PDV

* * *

8.3 Promoções com Resgate de Pontos pelo App Premmia
----------------------------------------------------

Esse tipo de promoção possui regras específicas e se divide em dois subtipos:

1.  Promoções **Apenas Pontos**
    
2.  Promoções com **Pontos + Pagamento Digital**
    

Em ambos os casos:

*   A promoção possui **apenas um item**.
    
*   A quantidade é sempre **1**.
    
*   Não há escolha de itens no PDV.
    
*   Cada variação de produto (ex.: sabores) possui **um código de promoção distinto**.
    

### 8.3.1 Promoção Apenas Pontos

#F4F5F7

**Promoção base:** 25028584 – BLACK25 PREM: BAURU PIZZA POR 100 PTS

*   O sistema monta automaticamente os componentes.
    
*   Item incluído uma única vez, com quantidade 1.
    
*   Preço do produto: **R$ 0,01**.
    
*   O **Cód. Premmia** **BR Mania** é preenchido automaticamente.
    

Exemplo de montagem em promoção por troca de pontos

### 9.3.2 Promoção com Pontos + Pagamento Digital

#F4F5F7

**Promoção base:** 25029871 – JAN26 PREM: PÃO DE QUEIJO RECH POR R$ 0,99 + 50 PTS

*   Composição automática com um único item.
    
*   Quantidade igual a 1.
    
*   Preço conforme encarte (**R$ 0,99**).
    
*   O **Cód. Premmia** **BR Mania** é preenchido automaticamente.
    

Exemplo de montagem em promoção por troca de pontos + pagamento digital

**Comportamento no PDV**

Ambos os tipos são vendidos da mesma forma no PDV, alterando apenas o valor:

1.  Acesse a tela **Produtos/Benefícios Premmia**:
    
    *   Atalho **CTRL + B**; ou
        
    *   Pela listagem de produtos (F4) e botão **Premmia Benefícios/Produtos**.
        
2.  Clique em **Produtos** para consultar as promoções disponíveis.
    
3.  Selecione a promoção desejada e clique em **Resgatar**.
    
4.  Prossiga para a finalização da venda.
    
5.  Clique em **Id. Cliente** para informar o CPF do cliente.
    
6.  Informe obrigatoriamente a forma de pagamento **Carteira Digital** com a administradora **Premmia Loja** e clique em **Gerar Cobrança**.
    
7.  O PDV exibirá um **QR Code**.
    
8.  O cliente realiza o pagamento pelo App Premmia (opção **Pagar**).
    
9.  Após a confirmação automática da API, o cupom fiscal será impresso e a venda finalizada.
    

Venda da promoção no PDV

9\. Modalidades de Uso do Premmia no PDV
----------------------------------------

#E3FCEF

### 9.1 Compra com Resgate de Pontos (Apenas Pontos)

*   O valor total do produto é abatido integralmente pelos pontos do cliente.
    
*   No cupom fiscal, o valor apresentado é **R$ 0,01**, apenas para viabilizar a emissão do documento fiscal.
    

**Exemplo:** BLACK25 PREM: BAURU CALABRESA POR 100 PTS

**Funcionamento no sistema:**

*   O produto já é cadastrado no AppPosto com o valor de **R$ 0,01**.
    
*   A vinculação com o código retornado na consulta do PDV ocorre automaticamente.
    
*   O recebimento é registrado no valor de **R$ 0,01**, utilizando a **Carteira Digital Premmia Loja**.
    

#E3FCEF

### 9.2 Compra com Resgate de Pontos + Pagamento em Dinheiro Digital

*   Parte do valor é abatida com pontos.
    
*   O valor restante é pago pelo cliente via App Premmia, escolhendo **Cartão ou PIX**.
    

**Exemplo:** NATAL25 PREM: PANETONE CHOC R$ 14,99 + 250 PTS

**Funcionamento no sistema:**

*   O produto é cadastrado no ACS Gerente com o valor definido no catálogo da promoção.
    
*   A vinculação é realizada automaticamente.
    
*   O recebimento é registrado pelo valor total da promoção, via **Carteira Digital Premmia Loja**.
    

#E3FCEF

### 9.3 Benefícios Exclusivos (Clube Premmia)

*   Funcionam de forma semelhante ao resgate apenas com pontos.
    
*   São **exclusivos por CPF**, com uso controlado.
    
*   O valor total do cupom também é **R$ 0,01**.
    

**Exemplo:** CAFÉ EXPRESSO

**Funcionamento no PDV:**

*   O atendente informa o CPF do cliente.
    
*   Acessa o botão **Benefícios** no PDV.
    
*   Seleciona o produto disponível para resgate e realiza o lançamento da venda.
    

#E3FCEF

### 9.4 Pagamento de Produtos via App Premmia

Além das promoções, o cliente pode pagar produtos normalmente consumidos na loja diretamente pelo App Premmia.

**Exemplo:** ÁGUA INDAIÁ 1,5L

**Funcionamento no PDV:**

*   O atendente seleciona o produto normalmente (F4 ou leitura de código de barras).
    
*   No momento do pagamento, escolhe **Carteira Digital Premmia Loja**.
    
*   O PDV gera um **QR Code** para que o cliente realize o pagamento pelo App.
    
*   Os pontos são acumulados automaticamente no Premmia.