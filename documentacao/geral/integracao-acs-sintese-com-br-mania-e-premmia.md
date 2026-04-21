---
title: Integração ACS Síntese com BR Mania e Premmia
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/688455682
---

# Integração ACS Síntese com BR Mania e Premmia

1\. Visão Geral da Integração
-----------------------------

A integração entre o sistema ACS e a BR Mania proporciona uma solução completa e eficiente para:

*   Padronização de cadastros;
    
*   Envio de vendas;
    
*   Controle e gestão de posições livres de produtos;
    
*   Processamento de promoções e benefícios do Premmia no PDV.
    

Este processo assegura que todas as informações trafeguem corretamente entre o ACS e os sistemas da franqueadora.

2\. Requisitos Mínimos para Funcionamento
-----------------------------------------

Para garantir o correto funcionamento da integração, é obrigatório que o ambiente esteja atualizado conforme abaixo:

*   **ACS Gerente:** Versão 676 (data do arquivo: 18/12/2025) ou acima.
    
*   **ACS PDV:** Versão 417 (data do arquivo: 18/12/2025) ou acima.
    
*   **Vem Service:** Versão 1.0.0.0 (data do arquivo: 23/12/2025) ou acima.
    

3\. Configuração do Serviço VEM
-------------------------------

1.  Verifique a versão do sistema do cliente e instale a versão mais atual do serviço VEM.
    
2.  Caso não exista, crie a pasta **C:\\ACS\_VEM** e instale o serviço (preferencialmente no servidor).
    

Se o banco de dados for em nuvem, o serviço deve ser instalado no PDV da loja.

3.  Configure o caminho do banco de dados Síntese e teste a comunicação.
    
4.  Defina o horário de envio diário das informações de vendas e compras.
    
5.  Preencha a URL de comunicação: [https://br-api.azure-api.net/](https://br-api.azure-api.net/)
    
6.  Salve as configurações e inicie o serviço.
    

Configurador Vem

4\. Configurações no ACS Gerente
--------------------------------

### 4.1 Parâmetros do Sistema

Acesse **Opções > Parâmetros do Sistema** e configure as seguintes guias.

#F4F5F7

**Guia Integração > Aba VEM**

*   Configure a **Data inicial**.
    
*   Informe o código **ZBRM**.
    
*   Caso não possua essas informações, utilize o botão .
    

Opções > Parâmetros do Sistema > Integração > Vem

#F4F5F7

**Guia Integração > Aba Premmia Loja**

*   Informe o **Código R3 Posto** (igual ao ZBRM).
    
*   Configure a **URL Premmia**: [https://premmia-api.vibraenergia.com.br/premmia-partner-eapi/api/](https://premmia-api.vibraenergia.com.br/premmia-partner-eapi/api/)
    
*   Configure a **URL Vibra**: [https://nwlngo9cd3.execute-api.us-east-1.amazonaws.com/prod/](https://nwlngo9cd3.execute-api.us-east-1.amazonaws.com/prod/)
    

Opções > Parâmetros do Sistema > Integração > Premmia Loja

**Atenção:** A carga no serviço VEM só será realizada com sucesso se ambas as abas estiverem corretamente configuradas.

### 4.2 Cadastro de Pontos de Venda

Acesse **Cadastro > Pontos de Venda**.

*   Localize o PDV da loja.
    
*   Na guia **Integração**, defina o parâmetro **Enviar movimentação para BR Mania** como **Sim**.
    

Cadastro de Pontos de Venda

### 4.3 Cadastro de Grupos de Produtos

Acesse **Cadastro > Produtos > Grupos**.

*   Para os grupos de produtos da loja de conveniência, defina o parâmetro **Enviar p/ Shell** como **Sim** (individualmente em cada grupo).
    

Cadastro de Grupos de Produtos

**Dica:** Crie um grupo chamado **PROMOÇÕES BR** ou **BR MANIA**, com subgrupos por bimestre, para facilitar a organização das campanhas e a obtenção de relatórios de vendas.

Cadastro de Grupos de Produtos

### 4.4 Cadastro de Administradoras

Acesse **Cadastro > Administradoras** e crie uma nova administradora com as seguintes características:

*   Tipo de cartão: **Carteira Digital**
    
*   Carteira Digital: **Premmia Loja**
    
*   Operação: **Integrado API**
    
*   Prazo: **30 dias**
    
*   Taxa administrativa (%): **0**
    

Cadastro de Administradoras

Essa configuração garante:

*   Correto registro das vendas no PDV;
    
*   Facilidade no controle financeiro;
    
*   Inclusão da despesa de taxa administrativa somente no momento da baixa, respeitando os prazos e taxas reais definidos pela franqueadora.
    

5\. Carga Inicial no Serviço VEM
--------------------------------

Acesse o **Configurador VEM** e realize a **Carga Inicial**.

Durante esse processo:

*   Categorias, produtos e promoções da BR Mania são importados para o ACS;
    
*   A vinculação automática ocorre pelo código de barras.
    

**Atenção:**

*   A **Carga Inicial** deve ser realizada apenas em integrações completas de lojas novas.
    
*   Para ativar somente os resgates Premmia no PDV, utilize a **Carga Parcial**.
    

6\. Verificação e Vinculação Manual de Produtos
-----------------------------------------------

1.  Após a carga, acesse **Relatórios > Listagem > Produtos** para identificar quais produtos deverão ter sua vinculação realizada de forma manual.
    
2.  Utilize os filtros:
    
    *   Situação: **Ativos**
        
    *   Tipo: **Loja**
        
    *   BR Mania: **Não Vinculados**
        

Relatório de Listagem de Produtos

### Vinculação Manual vinmanual

1.  Acesse **Opções > Configurar VEM**.
    

Opções > Configurar Vem

2.  Na parte superior, estão localizados os **Produtos** da base da BR Mania. Pesquise o produto a ser vinculado pela **descrição** ou **código de barras** do mesmo.
    

Mapeamento BR Mania Vem - Produtos

3.  Clique em **Atualizar**.
    
4.  Selecione o produto correspondente da base ACS e confirme.
    

Listagem de produtos da ACS para vinculação manual

5.  Repita o processo até que todos os produtos cadastrados no sistema estejam vinculados.
    

**Observação:** Caso o produto pesquisado no **Mapeamento** não seja localizado pelo código de barras ou descrição, será necessário solicitar o cadastro do mesmo no portal da BR Mania.

1.  Acesse o seguinte link [https://cn.vibraenergia.com.br/login/](https://cn.vibraenergia.com.br/login/) e realize o login.
    
2.  Clique no ícone do Menu Lateral.
    

3.  Acesse o menu **Franquias** e opção **Solicitação Novo Produto**.
    

4.  Na tela apresentada, clique no botão e realize o cadastro do produto.
    
5.  Com esse cadastro realizado, existem dois cenários que podem ocorrer:
    
    1.  **Cadastro concluído:** O produto é aceito e incluído na base da Br Mania. Na próxima Carga Parcial, o mesmo será baixado para o sistema da ACS e poderá ser vinculado manualmente ao produto da base da ACS.
        
    2.  **Cadastro não aceito:** O produto não teve o cadastro no portal aceito e deverá ser tratado como **Posição Livre** (produtos fora da base BR Mania).
        

notea35087a0-bd82-4867-ac1c-eca2c9c4b4df

### Posição Livre

As lojas de conveniência possuem, por padrão, um limite de 50 posições livres para cadastrar produtos não existentes na base da BR Mania. Este limite é definido pela franqueadora.

**Como configurar um produto como Posição Livre:**

1.  **Acesse o cadastro do produto** no sistema.
    
2.  Na guia **Integração**, configure o campo **Tipo Composto (Integração)** como **Livre**.
    
3.  Salve o cadastro para habilitar o campo **Posição Livre BR Mania**.
    
4.  Edite novamente o produto e clique no ícone para gerar o código de Posição Livre.
    

Com essa configuração, o produto será tratado como Posição Livre.

**Como verificar se um produto está como Posição Livre:**

1.  Acesse **Opções > Configurar VEM**.
    
2.  Na guia **Posição Livre**, serão apresentados todos os produtos configurados dessa forma.
    

Mapeamento BR Mania VEM - Posição Livre

### Posição Livre

As lojas de conveniência possuem, por padrão, um limite de 50 posições livres para cadastrar produtos não existentes na base da BR Mania. Este limite é definido pela franqueadora.

**Como configurar um produto como Posição Livre:**

1.  **Acesse o cadastro do produto** no sistema.
    
2.  Na guia **Integração**, configure o campo **Tipo Composto (Integração)** como **Livre**.
    
3.  Salve o cadastro para habilitar o campo **Posição Livre BR Mania**.
    
4.  Edite novamente o produto e clique no ícone ![icone\_lampada-20241223-181719.png](https://acsapps.atlassian.net/wiki/download/attachments/688455682/icone_lampada-20241223-181719.png?version=1&modificationDate=1766748176147&cacheVersion=1&api=v2) para gerar o código de Posição Livre.
    

Com essa configuração, o produto será tratado como Posição Livre.

**Como verificar se um produto está como Posição Livre:**

1.  Acesse **Opções > Configurar VEM**.
    
2.  Na guia **Posição Livre**, serão apresentados todos os produtos configurados dessa forma.
    

![mapeamento\_shell\_posicao\_livre-20241223-191805.png](https://acsapps.atlassian.net/wiki/download/thumbnails/688455682/mapeamento_shell_posicao_livre-20241223-191805.png?version=1&modificationDate=1766748176147&cacheVersion=1&api=v2&width=836&height=459)

7\. Cadastro de Promoções do Catálogo BR Mania
----------------------------------------------

Esta etapa é responsável pelo correto cadastro das promoções disponibilizadas no catálogo da BR Mania, garantindo que elas possam ser consultadas, resgatadas e utilizadas corretamente no PDV.

### 7.1 Acessando o Mapeamento BR Mania VEM

Para iniciar o processo de cadastro das promoções:

*   Acesse o menu **Opções > Configurar VEM**.
    
*   Esta tela centraliza todas as informações de produtos e promoções vinculadas à BR Mania.
    

Opções > Configurar Vem

### 7.2 Localizando a Promoção

*   Na parte inferior da tela, estão localizados os **Combos** da base da BR Mania.
    
*   Utilize o campo **Cód. Kit** para pesquisar a promoção desejada, conforme informado no catálogo.
    

Mapeamento BR Mania VEM - Combos

### 7.3 Filtrando os Itens da Promoção

Após localizar a promoção:

*   Clique no botão **Filtrar Itens**.
    
*   Os produtos que compõem a promoção serão exibidos na seção **Produtos**.
    

Mapeamento BR Mania Vem - Itens do Combo

**Observações:**

*   Apenas produtos com o status **Vinculado** na coluna **BR Mania** podem ser utilizados na composição da promoção. Produtos marcados como **Não Vinc.** não poderão ser incluídos como itens da promoção.
    
*   Nem todos os produtos listados após o filtro precisam ser vinculados. Alguns itens podem não existir no cadastro da loja, sendo normal que permaneçam sem vinculação.
    

### 7.4 Vinculação de Itens Necessários

*   Caso algum produto obrigatório para a promoção esteja com o status **Não Vinc.**, é indispensável realizar sua **vinculação manual**.
    
*   Somente produtos devidamente vinculados poderão ser indicados como componentes da promoção.
    

Após confirmar que todos os produtos necessários estão com o status **Vinculado**, o cadastro da promoção poderá prosseguir.

### 7.5 Cadastro da Promoção no ACS

Com os itens corretamente vinculados, realize o cadastro da promoção no sistema ACS:

1.  Acesse **Cadastro > Produtos > Produtos**.
    
2.  Localize um produto que fará parte da promoção.
    
3.  Utilize a opção **Clonar Produto** para criar um novo cadastro baseado nesse item.
    

Clonando produto que fará parte da promoção

#### Guia Geral

Atualize os campos abaixo:

*   **Grupo:** Selecione **BR MANIA**.
    
*   **Subgrupo:** Informe o subgrupo correspondente ao período da promoção no catálogo.
    
*   **Código de Barras (GTIN):** Informe o código da promoção conforme o catálogo Premmia.
    
    *   Este preenchimento realiza automaticamente a vinculação do produto ao combo da BR Mania.
        
*   **Descrição:** Preenchida automaticamente pelo GTIN, podendo ser ajustada para melhor identificação da promoção.
    
*   **Preço:** Preenchido automaticamente conforme os valores definidos no catálogo.
    

Cadastro de Produtos - Guia Geral

#### Guia Estoque

*   Os campos **Início da Validade** e **Fim da Validade** serão preenchidos automaticamente, de acordo com o período da promoção.
    

Cadastro de Produtos - Guia Estoque

#### Guia Integração

*   Configure o campo **Cód. Produto AC Fortes** clicando no ícone para gerar o código automaticamente.
    

Cadastro de Produtos - Guia Integração

Após a conferência das informações:

*   Clique em e vincule o novo produto promocional ao **estoque adequado** para concluir o cadastro.
    

**Observação importante sobre promoções Premmia**

Ao finalizar o cadastro, o sistema preencherá automaticamente o campo **Cód. Produto Premmia** para as promoções que necessitam da utilização de pontos para o pagamento. Esse campo é essencial para que o **resgate com pontos** ocorra corretamente no PDV.

8\. Verificação e Configuração dos Componentes da Promoção
----------------------------------------------------------

Após concluir o cadastro da promoção, é fundamental **validar** a composição realizada de forma **automática** e, **se necessário**, ajustar os componentes que fazem parte da oferta promocional. Essa etapa garante que o comportamento da promoção no PDV, o controle de estoque e os cálculos financeiros ocorram corretamente.

### 8.1 Acessando os Componentes da Promoção

*   Após concluir o cadastro da promoção, acesse a guia **Estoque** e clique no botão .
    

Cadastro de Produtos > Guia Estoque

Serão exibidos os itens associados automaticamente à promoção conforme o catálogo da BR Mania, permitindo conferência e ajustes de acordo com a operação da loja.

### 8.2 Informações Gerais da Tela de Componentes

Tela de componentes - Informações gerais

*   **Componentes de:** Exibe a descrição da promoção que está sendo configurada.
    
*   **Qtd. de opcionais na venda:** Define quantas escolhas o cliente deverá realizar no momento da compra da promoção.
    
    *   Cada escolha ocorre entre produtos que possuem o mesmo número de **Opção**.
        
    *   Os produtos de uma mesma opção devem pertencer à mesma categoria (exemplo: refrigerantes).
        
        *   **Exemplo prático:** Para uma opção de refrigerantes, podem ser cadastrados todos os sabores disponíveis na loja (desde que façam parte do catálogo da BR Mania para a promoção). Todos devem:
            
            *   Possuir o mesmo preço de venda;
                
            *   Estar cadastrados com o mesmo número de opção.
                
    *   Dessa forma, no PDV o cliente escolhe o sabor desejado, e o sistema realiza a baixa correta apenas do item selecionado no estoque.
        
*   **Preço de Venda:** Define o valor final da promoção, conforme estabelecido no encarte oficial.
    

Por se tratar de um produto composto, o ajuste de preço deve ser realizado exclusivamente nesta tela.

### 8.3 Visualização dos Componentes da Promoção

Tela de componentes - Visualização dos componentes

Os componentes são exibidos em forma de lista, contendo as seguintes colunas:

*   **Num:** Número sequencial do item na lista.
    
*   **Opção:** Indica o grupo de escolha do item.
    
    *   **Opção = 0:** Item fixo, sempre incluso na promoção.
        
    *   **Opção diferente de 0:** Item opcional, pertencente a um grupo de escolha.
        

Para que haja escolha, é necessário que **ao menos dois itens** estejam cadastrados com o mesmo número de opção.

*   **Cód. Barras:** Código de barras do produto componente.
    
*   **Componente:** Descrição do produto incluído na promoção.
    
*   **Fixo:** Indica se o item é fixo (Sim) ou opcional (Não).
    
*   **Custo Unit.:** Custo unitário do componente.
    
*   **Quantidade:** Quantidade do item utilizada na promoção.
    
*   **Custo Item:** Resultado da multiplicação entre **Custo Unit** e **Quantidade**.
    
*   **Preço Avulso:** Valor de venda do produto fora da promoção.
    
*   **Preço Comp.:** Valor proporcional atribuído ao item dentro da composição promocional.
    
*   **Valor Venda:** Resultado da multiplicação entre **Preço Comp.** e **Quantidade**.
    
*   **Margem %:** Percentual de lucro calculado com base no custo e no preço do item dentro da promoção.
    

### 8.4 Inclusão e Configuração de Componentes

Tela de componentes - Inclusão/edição de componentes

A tela de componentes permite também a inclusão manual de produtos, quando necessário.

*   **Cód. Barras:** Informe o código do produto a ser incluído.
    
    *   Pode ser digitado manualmente, bipado com leitor ou pesquisado pelo ícone .
        

Somente produtos vinculados e pertencentes ao catálogo da promoção BR Mania poderão ser incluídos.

*   **Quantidade:** Define a quantidade do item na composição da promoção.
    
*   **Custo Unitário:** Preenchido automaticamente conforme o cadastro do produto, podendo ser ajustado. Esse valor impacta diretamente no custo total e na margem da promoção.
    
*   **Preço de Venda:** Valor avulso do produto fora da promoção, preenchido automaticamente, podendo ser ajustado se necessário.
    
*   **Fixo:** Define se o item será fixo ou opcional.
    
    *   **Sim:** Item fixo, com **Opção = 0**.
        
    *   **Não:** Item opcional, com **Opção diferente de 0**.
        
*   **Opção:** Define o grupo de escolha:
    
    *   **0:** Produto fixo.
        
    *   **1, 2, 3…:** Produtos opcionais. Itens com o mesmo número de opção formam um grupo de escolha, no qual o cliente selecionará apenas um no PDV.
        
*   **Botão** **:** Finaliza a inclusão do item e permite adicionar outro componente em sequência.
    

### 8.5 Resumo dos Componentes

Tela de componentes - Resumo dos componentes

A seção de resumo apresenta informações consolidadas para validação da promoção:

*   **Qtd. Fixos:** Total de itens definidos como fixos.
    
*   **Qtd. Opcionais:** Total de itens cadastrados como opcionais.
    
*   **Custo:** Custo total da promoção, calculado como:
    
    *   Soma do custo de todos os itens fixos + Soma do maior custo entre os itens opcionais de cada grupo.
        

Esse método considera o maior custo possível da promoção, garantindo segurança na margem.

*   **Preço de Venda:** Valor final da promoção.
    
*   **Margem de Lucro:** Diferença entre o **Preço de Venda** e o **Custo Total**.
    
*   **Dif. Preço Produto:** Diferença entre a soma dos preços avulsos dos itens e o preço promocional, demonstrando o desconto concedido ao cliente.
    
*   **Botão** **:** Distribui proporcionalmente o preço total da promoção entre os itens cadastrados, preenchendo automaticamente o campo **Preço Comp.**.
    

Funciona apenas quando todos os componentes são fixos.

### 8.6 Ações Disponíveis na Tela de Componentes

Tela de componentes - Botões de ação

Além do resumo, a interface disponibiliza os seguintes botões de ação:

*   : Inicia o processo de adição de um novo item à composição da promoção.
    
*   : Permite editar os dados de um componente já adicionado.
    
*   : Salva as alterações realizadas (tanto para novos itens quanto modificações).
    
*   : Cancela a operação atual de inclusão ou edição.
    
*   : Remove o item selecionado da listagem de componentes.
    
*   : Finaliza o cadastro da composição e salva as alterações realizadas.
    
*   : Cancela a operação e fecha a tela de componentes **sem salvar** as modificações feitas.
    

9\. Exemplos de Cadastro de Componentes de Promoções
----------------------------------------------------

Todos os catálogos de promoções enviados pela BR Mania seguem um padrão de estrutura semelhante, o que facilita o processo de cadastro e a montagem correta dos componentes no sistema ACS.

Nesta seção, são apresentados exemplos práticos organizados por **tipo de promoção**, considerando que existem **três grandes tipos**, cada um com suas variações. O objetivo é tornar o fluxo de cadastro, conferência e venda claro e de fácil entendimento.

9.1 Promoções com Mais de um Tipo de Item
-----------------------------------------

Este é um dos modelos mais comuns nos catálogos da BR Mania. Envolve a combinação de diferentes categorias de produtos, como salgados, bebidas e chocolates.

**Observação Importante:** Para a BR Mania, o ponto principal é a **contabilização da venda vinculada ao código da promoção**. A forma como os componentes são estruturados internamente no sistema ACS pode variar conforme a necessidade operacional da loja.

Existem **três maneiras válidas** de montar esse tipo de promoção.

#F4F5F7

**Promoção base:** 25029635 – JAN/FEV 26: PÃO BATATA REQUEIJÃO OU PÃO BATATA FRANGO COM REQUEIJÃO + BEBIDA CREMOSA POR R$ 13,99

### 9.1.1 Maneira 1 – Itens Fixos + Itens Opcionais

Parte dos produtos é obrigatória na venda (fixos) e parte pode ser escolhida pelo cliente (opcionais).

**Configuração dos Componentes**

**Item Fixo (Opção = 0):**

**Itens Opcionais (Opção = 1):**

*   PÃO BATATA FRANGO COM REQUEIJÃO
    

*   ACHOC DOIS FRADES
    
*   ACHOC CAPPUCCINO
    
*   ACHOC CAPPUCCINO ALPINO
    
*   ACHOC KIT KAT
    

Exemplo de montagem com itens fixos e opcionais

**Comportamento no PDV**

Ao bipar o código da promoção:

*   A tela de seleção será exibida.
    
*   **Parte superior:** itens fixos, sem possibilidade de alteração.
    
*   **Parte inferior:** grupo de itens opcionais disponíveis para escolha.
    

Nesse formato, o item fixo é sempre incluído na venda, enquanto o cliente escolhe apenas um item do grupo opcional.

Venda da promoção no PDV

* * *

### 9.1.2 Maneira 2 – Todos os Itens Fixos

Todos os produtos são obrigatórios na venda, sem possibilidade de escolha.

**Configuração dos Componentes**

**Itens Fixos (Opção = 0):**

*   PÃO BATATA FRANGO COM REQUEIJÃO
    
*   ACHOC CAPPUCCINO
    

Exemplo de montagem com itens fixos apenas

**Comportamento no PDV**

*   Ao bipar o código da promoção, nenhuma tela de seleção é exibida.
    
*   Todos os itens são incluídos automaticamente na venda.
    
*   O estoque é debitado proporcionalmente conforme a composição cadastrada.
    

Venda da promoção no PDV

* * *

### 9.1.3 Maneira 3 – Todos os Itens Opcionais

Nesse modelo, não há itens fixos. O cliente escolhe um item de cada grupo opcional.

**Configuração dos Componentes**

**Grupo Opção 1:**

**Grupo Opção 2:**

*   PÃO BATATA FRANGO COM REQUEIJÃO
    
*   PÃO BATATA COM REQUEIJÃO
    

*   ACHOC DOIS FRADES
    
*   ACHOC CAPPUCCINO
    
*   ACHOC CAPPUCCINO ALPINO
    
*   ACHOC KIT KAT
    

Exemplo de montagem com itens opcionais apenas

**Comportamento no PDV**

*   Ao bipar o código da promoção, a tela de seleção será exibida.
    
*   O operador deverá escolher **um item de cada grupo opcional**.
    
*   Apenas os itens escolhidos serão debitados do estoque.
    

Venda da promoção no PDV

* * *

9.2 Promoções com Apenas um Tipo de Item
----------------------------------------

Esse modelo é comum em promoções de bebidas ou produtos unitários em quantidade maior.

**Características Gerais**

*   Todos os componentes são **itens fixos (Opção = 0)**.
    
*   Não há escolha no PDV.
    
*   O estoque é debitado conforme a quantidade definida na composição.
    

#F4F5F7

**Promoção base:** 25029277 – JAN/FEV 26: BRAHMA 350ML – 3 POR R$ 3,79 CADA

### 9.2.1 Todos os Itens Fixos

Todos os produtos são obrigatórios na venda, sem possibilidade de escolha.

**Configuração dos Componentes**

**Item Fixo (Opção = 0):**

*   CERV BRAHMA LT 350ML
    

Exemplo de montagem com item fixo apenas

**Comportamento no PDV**

*   Ao bipar o código da promoção, nenhum menu de seleção é exibido.
    
*   Todos os itens são incluídos automaticamente.
    
*   O estoque é debitado proporcionalmente conforme a composição cadastrada.
    

Venda da promoção no PDV

* * *

9.3 Promoções com Resgate de Pontos pelo App Premmia
----------------------------------------------------

Esse tipo de promoção possui regras específicas e se divide em dois subtipos:

1.  Promoções **Apenas Pontos**
    
2.  Promoções com **Pontos + Pagamento Digital**
    

Em ambos os casos:

*   A promoção possui **apenas um item**.
    
*   A quantidade é sempre **1**.
    
*   Não há escolha de itens no PDV.
    
*   Cada variação de produto (ex.: sabores) possui **um código de promoção distinto**.
    

### 9.3.1 Promoção Apenas Pontos

#F4F5F7

**Promoção base:** 25028584 – BLACK25 PREM: BAURU PIZZA POR 100 PTS

*   O sistema monta automaticamente os componentes.
    
*   Item incluído uma única vez, com quantidade 1.
    
*   Preço do produto: **R$ 0,01**.
    
*   O **Cód. Produto Premmia** é preenchido automaticamente.
    

Exemplo de montagem em promoção por troca de pontos

### 9.3.2 Promoção com Pontos + Pagamento Digital

#F4F5F7

**Promoção base:** 25029871 – JAN26 PREM: PÃO DE QUEIJO RECH POR R$ 0,99 + 50 PTS

*   Composição automática com um único item.
    
*   Quantidade igual a 1.
    
*   Preço conforme encarte (**R$ 0,99**).
    
*   O **Cód. Produto Premmia** é preenchido automaticamente.
    

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

10\. Modalidades de Uso do Premmia no PDV
-----------------------------------------

#E3FCEF

### 10.1 Compra com Resgate de Pontos (Apenas Pontos)

*   O valor total do produto é abatido integralmente pelos pontos do cliente.
    
*   No cupom fiscal, o valor apresentado é **R$ 0,01**, apenas para viabilizar a emissão do documento fiscal.
    

**Exemplo:** BLACK25 PREM: BAURU CALABRESA POR 100 PTS

**Funcionamento no sistema:**

*   O produto já é cadastrado no ACS Gerente com o valor de **R$ 0,01**.
    
*   A vinculação com o código retornado na consulta do PDV ocorre automaticamente.
    
*   O recebimento é registrado no valor de **R$ 0,01**, utilizando a **Carteira Digital Premmia Loja**.
    

#E3FCEF

### 10.2 Compra com Resgate de Pontos + Pagamento em Dinheiro Digital

*   Parte do valor é abatida com pontos.
    
*   O valor restante é pago pelo cliente via App Premmia, escolhendo **Cartão ou PIX**.
    

**Exemplo:** NATAL25 PREM: PANETONE CHOC R$ 14,99 + 250 PTS

**Funcionamento no sistema:**

*   O produto é cadastrado no ACS Gerente com o valor definido no catálogo da promoção.
    
*   A vinculação é realizada automaticamente.
    
*   O recebimento é registrado pelo valor total da promoção, via **Carteira Digital Premmia Loja**.
    

#E3FCEF

### 10.3 Benefícios Exclusivos (Clube Premmia)

*   Funcionam de forma semelhante ao resgate apenas com pontos.
    
*   São **exclusivos por CPF**, com uso controlado.
    
*   O valor total do cupom também é **R$ 0,01**.
    

**Exemplo:** CAFÉ EXPRESSO

**Funcionamento no PDV:**

*   O atendente informa o CPF do cliente.
    
*   Acessa o botão **Benefícios** no PDV.
    
*   Seleciona o produto disponível para resgate e realiza o lançamento da venda.
    

#E3FCEF

### 10.4 Pagamento de Produtos via App Premmia

Além das promoções, o cliente pode pagar produtos normalmente consumidos na loja diretamente pelo App Premmia.

**Exemplo:** ÁGUA INDAIÁ 1,5L

**Funcionamento no PDV:**

*   O atendente seleciona o produto normalmente (F4 ou leitura de código de barras).
    
*   No momento do pagamento, escolhe **Carteira Digital Premmia Loja**.
    
*   O PDV gera um **QR Code** para que o cliente realize o pagamento pelo App.
    
*   Os pontos são acumulados automaticamente no Premmia.