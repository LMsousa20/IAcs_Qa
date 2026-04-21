---
title: Produtos⠀
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/40927255
---

# Produtos⠀

16truenonelisttrue

Produtos
========

O módulo de `Cadastro de Produtos` é uma ferramenta essencial para a gestão eficiente dos itens no sistema. Ele possibilita o registro completo e padronizado das informações de cada produto, garantindo:

*   Organização e consistência dos dados.
    
*   Integração com os demais módulos do sistema.
    
*   Controle sobre preços, custos e estoques.
    

Suas principais funcionalidades incluem:

#E6FCFF

**Registro de Informações do Produto**

*   Cadastro detalhado de dados básicos e complementares.
    
*   Padronização das informações para uso em relatórios e integrações.
    

#E6FCFF

**Gestão de Preços**

*   Definição do **preço de custo** e **preço de venda**.
    
*   Utilização automática desses valores em vendas e relatórios.
    
*   Possibilidade de configurar preços diferenciados por forma de pagamento (dinheiro, cartão, PIX, entre outros), permitindo estratégias de precificação mais flexíveis.
    

#E6FCFF

**Controle de Estoque**

*   Consulta dos saldos do produto em diferentes estoques.
    

#E6FCFF

**Promoções e Composições**

*   Montagem de promoções personalizadas.
    
*   Definição de regras específicas para composições de produtos.
    

#E6FCFF

**Configuração Fiscal Detalhada**

*   Associação do produto ao seu **departamento fiscal**.
    
*   Definição correta do tratamento tributário conforme exigências legais.
    

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Produtos > Produtos

Será apresentada a seguinte tela:

Tela de Listagem de Produtos

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento dos produtos já cadastrados. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Novo Produto**

Permite o cadastro de um novo produto no sistema, garantindo que todos os produtos necessários estejam devidamente registrados.

**Filtro de Pesquisa**

Facilita a busca de produtos específicos pela descrição, situação, código, grupo, subgrupo, marca ou fornecedor, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de um produto já cadastrado, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Novo Produto

Box Novo Produto

*   `Grupo do Produto`: Define o grupo ao qual o produto irá pertencer.
    
*   `Subgrupo do Produto`: Define o subgrupo vinculado ao `Grupo` selecionado anteriormente.
    
*   `Marca do Produto`: Indica a marca comercial do produto.
    
*   `Cód. de barras - GTIN`: Define o código de barras do produto que garante a **identificação única** do item no sistema.
    
*   `Descrição`: Nome do produto a ser cadastrado. Deve ser claro, objetivo e de fácil identificação no sistema e nos documentos fiscais.
    
*   `Situação`: Define o estado atual do cadastro (`Ativo` ou `Inativo`).
    

**Importante**: Produtos com a situação `Inativo` não serão exibidos no PDV, impedindo a comercialização.

*   `Unidade Comercial`: Unidade de medida utilizada na venda do produto (ex.: unidade, litro, quilograma).
    
*   `Unidade Tributável`: Unidade utilizada para fins fiscais.
    
*   `Fator de conversão Unidade Trib.`: Indica a correspondência entre a unidade comercial e a unidade tributável.
    
    *   Exemplo: No caso de **GLP vendido por botijão (unidade comercial = 1)**, mas tributado em **quilo (unidade tributável = 13)**, o fator será **13**.
        
    *   Dessa forma, o sistema poderá apresentar tanto a quantidade de botijões quanto o peso equivalente em documentos fiscais.
        
*   `Tipo de Comissão`: Define a forma de cálculo da comissão sobre as vendas desse produto (`Percentual (%)` ou `Em espécie (R$)`)
    
*   `Comissão sobre vendas`: Valor da comissão conforme o tipo escolhido.
    
*   `Desconto máximo (%)`: Percentual máximo de desconto permitido na venda do produto no PDV.
    

**Importante**: Permite configurar qualquer valor entre **0% e 100%**. O limite real aplicado no **PDV** é de **99,99%**, mesmo que o cadastro tenha 100%.

*   `Aceita quantidade fracionária?`: Indica se o produto pode ser vendido em frações.
    
    *   Exemplo: cafés vendidos por diferentes gramaturas.
        
*   `Recarga`: Define se o produto será do tipo recarga de celular. Necessário em casos de integração para vendas de recarga diretamente no PDV.
    
*   `Tipo de Combustível`: Campo habilitado apenas quando o `Grupo` selecionado for do tipo `Combustível`. Permite especificar o tipo de combustível.
    
*   `Modelo do Vasilhame`: Campo específico para produtos **GLP**. Define o modelo/tamanho do vasilhame.
    
*   `Tipo de venda do vasilhame`: Também aplicável apenas a produtos **GLP**. Define se o item corresponde a `Recarga` ou a `Vasilhame`.
    
*   `Observação`: Espaço para informações adicionais relevantes ao cadastro do produto.
    

### Box 2 - Preço/Custo

Box Preço/Custo

*   `Preço (R$)`: Valor de venda principal do produto, utilizado como preço base para cálculo dos valores do `Preço Nível 1 (R$)` e `Preço Nível 2 (R$)`.
    
    *   **Produtos do tipo Diversos**: Representa o preço normal do item e serve como referencia para definição dos níveis de preço, que devem ser **menores** quando aplicados a vendas em **maior quantidade**.
        
    *   **Produtos do tipo Combustíveis ou GLP**: Corresponde ao **preço base padrão**, utilizado como referencia para o cálculo automático de acréscimo ou desconto quando a venda é finalizada com formas de pagamento que possuem **preços diferenciados**, como cartão de crédito ou pagamento de frete.
        
*   `Custo nominal (R$)`: Valor de compra do produto junto ao fornecedor, **sem** considerar encargos, descontos ou acréscimos.
    

É atualizado automaticamente pelo sistema quando há lançamento de nota de compra.

*   `Custo líquido (R$)`: Valor de compra do produto junto ao fornecedor, **já** considerando possíveis descontos ou acréscimos.
    

É atualizado automaticamente pelo sistema quando há lançamento de nota de compra.

*   `Custo médio (R$)`: Valor calculado automaticamente pelo sistema, com base na média ponderada das últimas compras realizadas.
    
*   `Markup (%)`: Percentual calculado sobre o custo líquido para determinar o preço de venda.
    
*   `Margem de lucro (%)`: Percentual de lucro obtido sobre o preço de venda, considerando o custo líquido do produto.
    
*   `Preço Nível 1 (R$)`: Primeiro valor de venda alternativo para o produto, aplicado conforme:
    
    *   **Para produtos diversos**: Geralmente, menor que o `Preço (R$)`, pois representa um valor reduzido para vendas em quantidade maior.
        
    *   **Para produtos do tipo Combustíveis ou GLP**: Geralmente, maior que o `Preço (R$)`, aplicado quando o pagamento ocorre com formas de pagamento que possuem preços diferenciados configurados, como **Cartão de Crédito**.
        
*   `Para vendas a partir de (unidades)`: Quantidade mínima de unidades necessárias para aplicar o `Preço Nível 1 (R$)`. Este campo é utilizado **exclusivamente para produtos diversos** e deve ser **maior que 1**.
    
*   `Preço Nível 2 (R$)`: Segundo valor de venda alternativo para o produto, também ajustado conforme:
    
    *   **Para produtos diversos**: Geralmente, menor que o `Preço Nível 1`, representando um preço **ainda mais reduzido** para compras em maior quantidade.
        
    *   **Para produtos do tipo Combustíveis ou GLP**: Geralmente, maior que o `Preço Nível 1 (R$)`, aplicado quando o pagamento ocorre com formas de pagamento que possuem preços diferenciados configurados ainda maiores que o `Preço Nível 1`, como **Pagamento de Frete** (GoodCard, Libercard, etc).
        
*   `Para vendas a partir de (unidades)`: Quantidade mínima de unidades necessárias para aplicar o `Preço Nível 2 (R$)`. Este campo é utilizado **somente para produtos diversos** e o valor informado deve ser maior que o definido para o `Preço Nível 1`.
    
*   `Tipo de Preço`: Define a modalidade de pagamento associada ao `Preço (R$)`, podendo ser `A Vista` ou `A Prazo`.
    
    *   Caso o `Preço (R$)` seja menor que os `Preços Nível 1 (R$)` e `Nível 2 (R$)`, deve ser configurado como `A Vista`
        
*   `Tipo de Preço Nível 1`: Define a modalidade de pagamento vinculada ao `Preço Nível 1`, podendo ser `À Vista` ou `A Prazo`.
    
    *   Caso o `Preço Nivel 1 (R$)` seja maior que o `Preço (R$)`, deve ser configurado como `A Prazo`.
        
*   `Tipo de Preço Nível 2`: Define a modalidade de pagamento vinculada ao `Preço Nível 2`, podendo ser `À Vista` ou `A Prazo`.
    
    *   Caso o `Preço Nivel 2 (R$)` seja maior que o `Preço (R$)`, deve ser configurado como `A Prazo`.
        

**Observações**:

1.  A configuração dos campos `Tipo de Preço`, `Tipo de Preço Nível 1` e `Tipo de Preço Nível 2` é aplicada principalmente para os **Combustíveis**, devido a integração do sistema com o programa de fidelidade PontuaX.
    
2.  Porém, além dessa configuração, outros dois módulos devem ser configurados, a depender do modelo do concentrador:
    
    1.  **Automação EZTech**: A mudança de preço ocorre por meio de um cartão específico para isso. Por isso, os tipos de preço (`À Vista` / `A Prazo`) devem ser definidos no `Cadastro de Concentradores`.
        
    2.  **Automação Companytec**: O mesmo cartão que identifica o frentista também determina o nível de preço liberado. Assim, as modalidades devem ser configuradas no `Cadastro de Funcionários`.
        

Essas configurações adicionais garantem que o Ponto de Venda (PDV) reconheça corretamente os níveis de preços aplicados aos abastecimentos conforme a finalizadora utilizada.

### Box 3 - Estoque

Box Estoque

*   `Fornecedor`: Indica o fornecedor responsável pela venda do produto à empresa.
    
*   `Composto`: Informa se o produto é formado por outros itens. Quando novos produtos forem adicionados na guia **Componentes**, o campo será automaticamente definido como `Sim`. criticos
    
*   `Crítico`: Identifica produtos que exigem maior atenção no controle de estoque, seja por alta rotatividade ou risco elevado de perda ou desvio. Além disso, este campo pode ser utilizado para destacar os saldos desses produtos no relatório impresso do encerramento de caixa, quando o parâmetro `Saldo dos Produtos no Resumo` estiver configurado como `Críticos` no **box Comprovantes** do `Cadastro de Pontos de Venda`.
    
*   `Vendido a peso`: Define se o produto será comercializado com base em seu peso real, e não em unidades fixas. Quando configurado como `Sim`, o sistema permitirá que a quantidade do produto seja informada a partir da leitura de uma balança integrada ao PDV. Exemplos comuns são **açaí** e **pratos self-service**.
    
*   `Cód. de barras da Caixa`: Registra o código de barras da embalagem externa que agrupa várias unidades do produto. Por exemplo: cigarros são geralmente comercializados em caixas que contêm **10 maços**, e a embalagem externa possui um código de barras próprio, diferente do código individual do produto final.
    

**Importante**: Em muitos XMLs de notas fiscais de compra, o código informado corresponde ao da embalagem externa e não ao do produto individual. Ao preencher corretamente esse campo, o sistema consegue identificar e relacionar o produto automaticamente no lançamento da compra, evitando erros de registro e conferência.

*   `Conteúdo da embalagem (Litros)`: Informa a quantidade de litros ou frações de litro contida na embalagem do produto. Deve ser preenchido apenas para produtos pertencentes ao grupo do tipo `Lubrificantes`.
    
*   `Unidades por caixa`: Informa a quantidade de unidades individuais do produto contidas em uma embalagem de caixa. Por exemplo: uma caixa pode conter 12 garrafas, 24 latas ou 10 maços de cigarros, dependendo do produto cadastrado.
    

**Importante**: Para produtos de **cigarros** adquiridos do fornecedor **Souza Cruz**, este campo deve ser obrigatoriamente preenchido com o valor **50**. Isso ocorre porque a empresa utiliza o fator de conversão em **milheiro** (1 milheiro = 50 maços), e essa configuração garante que o sistema interprete corretamente as quantidades informadas nas notas fiscais de compra.

*   `Estoque mínimo`: Quantidade mínima do produto que deve ser mantida em estoque.
    
*   `Estoque ideal`: Quantidade máxima recomendada para manter do produto em estoque. Muito útil para gestão de compras planejadas e organização de relatórios.
    
*   `Apenas componente`: Define se o produto será utilizado exclusivamente como insumo na composição de outros produtos. Quando configurado como `Sim`, o item não será exibido na listagem de produtos do PDV, ficando restrito apenas para uso interno em composições. Por exemplo, pacotes de café em Kg são cadastrados apenas como insumo, pois são utilizados na preparação de bebidas (como cappuccino ou café pronto).
    
*   `Componentes no cupom`: Define a forma como o produto será exibido no cupom fiscal. Utilizado exclusivamente para produtos compostos (quando o parâmetro `Composto` \= `Sim`).
    
    *   `Sim`, o sistema exibirá no cupom os itens que compõem o produto. Por exemplo: O produto **CAFÉ COM LEITE**, composto por **CAFÉ EM GRÃOS KG** e **CAPPUCCINO KG**, será impresso no cupom detalhando **CAFÉ EM GRÃOS KG** e **CAPPUCCINO KG**.
        
    *   `Não`, o sistema exibirá no cupom apenas o produto final. Por exemplo: No mesmo caso acima, será impresso somente **CAFÉ COM LEITE**, sem detalhar os insumos da composição.
        

**Importante**: Para produtos compostos vinculados às franqueadoras **Shell** ou **BR**, este campo deve obrigatoriamente ser configurado como `Sim`, garantindo compatibilidade com as regras dessas integrações.

*   `Início da validade` e `Fim da validade`: Definem o período durante o qual o produto pode ser comercializado no sistema. Fora do período definido, o PDV bloqueará a venda do produto automaticamente, prevenindo a comercialização de itens fora do prazo.
    

**Importante**: Este campo é **fundamental para produtos compostos** vinculados às integrações com **Shell** ou **BR**, pois essas franquias estabelecem períodos de validade específicos para as promoções conforme o encarte da franqueadora.

### Box 4 - Fiscal

Box Fiscal

*   `Departamento`: Define o **departamento fiscal** ao qual o produto será vinculado, garantindo a correta **classificação contábil e tributária**. A lista exibida é composta pelos cadastros previamente configurados em `Cadastro de Departamentos Fiscais`. Esse vínculo é essencial para assegurar a apuração correta de impostos e relatórios fiscais, além da correta emissão das vendas.
    
*   `Departamento CBS/IBS`: Define o regime de tributação aplicável ao produto conforme as normas da Reforma Tributária, determinando como serão calculados os **impostos CBS e IBS**. A lista exibida é composta pelos cadastrados previamente configuradas em `Cadastro de Departamentos CBS/IBS`.
    

**Observação:**

*   O `Departamento CBS/IBS` é uma classificação fiscal adicional exigida pela Reforma Tributária, usada para determinar o tipo de tributação aplicável ao CBS/IBS:
    
    *   `Geral`: CST 000 - **Tributação Regular**: Aplicada a produtos que **não pertencem** aos grupos de **Combustíveis** ou **GLP**. A tributação é ad valorem, ou seja, calculada por percentual sobre o valor da operação. Nesse regime, o sistema calcula CBS e IBS conforme a alíquota percentual definida para o produto.
        
    *   `Combustível`: CST 620 - **Tributação Monofásica**: Aplicável exclusivamente aos produtos dos grupos de **Combustíveis** ou **GLP**. Nesse regime, a tributação é ad rem, com cálculo de CBS e IBS por quantidade (litros), utilizando valores fixos por unidade.
        

*   `Código NCM`: Campo destinado ao preenchimento do **NCM (Nomenclatura Comum do Mercosul)**, que classifica o produto para fins **fiscais e de comércio exterior**. O código NCM é utilizado para determinar a **tributação federal e estadual** aplicada ao produto.
    

A tabela NCM é **atualizada automaticamente pelo sistema a cada mês**. Para refletir as alterações no **PDV**, é necessário realizar uma **carga de tabelas**, garantindo que os cupons fiscais emitidos utilizem as informações mais recentes.

*   `Descrição NCM`: Após o preenchimento do código NCM, o sistema **preenche automaticamente** a descrição correspondente.
    
*   `Cód. combustível ANP`: Campo destinado ao preenchimento do **código oficial da ANP (Agência Nacional do Petróleo, Gás Natural e Biocombustíveis)**, que identifica o tipo de produto.
    

Campo de preenchimento **obrigatório** para produtos dos grupos **Combustível, Lubrificante** e **GLP**.

*   `Descrição combustível ANP`: Após informar o código ANP, o sistema **preenche automaticamente** a descrição correspondente.
    
*   `Cód. CEST`: Campo para inserção do **CEST (Código Especificador da Substituição Tributária)**.
    
*   `Descrição CEST`: Após informar o código CEST, o sistema exibirá automaticamente a **descrição correspondente**.
    
*   `Cód. serviço`: Identificador de 4 dígitos definido pela **tabela federal da Lei Complementar 116/2003**, utilizado para classificar o tipo de serviço prestado. No sistema, deve ser informado para os produtos que fazem parte de Grupos do tipo Serviços, pois impacta diretamente na emissão de notas fiscais e na apuração do ISS.
    
*   `Cód. combustível simplificado`: Campo destinado ao preenchimento de um **código alternativo de identificação simplificada** para combustíveis. Utilizado apenas em casos específicos onde essa codificação seja exigida.
    
*   `Indíce de mistura do Biosiesel (%)`: Informa o **percentual de biocombustível adicionado ao diesel ou à gasolina**, conforme regulamentação da **ANP**.
    

**Obrigatório** para produtos com código ANP referente a **Diesel** ou **Gasolina**. Percentuais atualmente regulamentados:

*   **Gasolina:** 30%.
    
*   **Diesel:** 15%.
    

*   `Usa Arredondamento?`: Define como o sistema tratará o valor total do produto no momento da venda (resultado da multiplicação entre `Preço` e `Quantidade`).
    
    *   `Sim`: O valor dos centavos será arredondado conforme regra matemática (≥ 5 arredonda para cima, < 5 arredonda para baixo).
        
    *   `Não`: O valor será truncado, mantendo apenas duas casas decimais, sem arredondamento.
        
*   `Tipo de produção`: Informa a origem da produção do produto, com as seguintes opções:
    
    *   `Própria`: Produto fabricado ou produzido internamente pela empresa.
        
    *   `Terceiros`: Produto adquirido pronto de fornecedores externos, sem transformação no estabelecimento.
        

Guia GLP1800

Garante que o cadastro do produto esteja em conformidade com a legislação da ANP e com os requisitos do **SPED Fiscal e NF-e**, evitando erros na emissão de documentos fiscais e assegurando a correta tributação.

Os campos da guia `GLP` só ficam disponíveis para preenchimento quando o produto pertence a um grupo do `Tipo GLP`, garantindo que as informações sejam registradas apenas para produtos relevantes.

*   `Valor de partida (R$)`: Define o valor do produto por quilograma sem ICMS, utilizado como base de cálculo fiscal.
    
*   `Percentual derivado de petróleo (%)`: Indica a fração do GLP proveniente do petróleo.
    
*   `Percentual do gás nacional (%)`: Informa a fração do GLP proveniente de gás natural nacional.
    
*   `Percentual do gás importado (%)`: Informa a fração do GLP proveniente de gás natural importado.
    

A soma dos percentuais (derivado de petróleo + gás nacional + gás importado) deve **obrigatoriamente** totalizar **100%**.

### Box 5 - Origens do Combustível

Box Origens do Combustível

Habilita o botão somente após a finalização do cadastro do produto, e desde que o código ANP do mesmo seja referente a **Diesel**, **Gasolina** ou **GLP**.

Box Origem do produto

*   `UF Origem`: Unidade federativa de onde o combustível se originou.
    
*   `Tipo Origem`: Tipo de origem do combustível (`Nacional` ou `Importado`).
    
*   `% Origem`: Percentual do combustível proveniente da origem selecionada.
    

A soma de todos os percentuais informados deve **obrigatoriamente** totalizar **100%**, para que o registro esteja em conformidade com a **Nota Técnica 2023.001 – Tributação Monofásica de Combustíveis**, garantindo o correto registro fiscal e tributário.

### Box 6 - Finalizadora

Este box permite configurar preços diferenciados para os produtos de acordo com a forma de pagamento utilizada no momento da venda no PDV. Essa funcionalidade é utilizada tanto em **produtos diversos** (ex.: cigarros) quanto em **combustíveis**, sendo especialmente útil em postos que trabalham com **mais de um preço para o mesmo combustível**.

Box Finalizadora

Guia VALORES PARA REFERÊNCIA1800

Esta guia exibe informações apenas para consulta, sem permitir alterações:

*   `Preço Normal (R$)`: Preço atual do produto, definido no campo `Preço (R$)` do box **Preço/Custo**.
    
*   `Custo Líquido (R$)`: Custo líquido atual do produto, definido no campo `Custo líquido (R$)` do box **Preço/Custo**.
    
*   `Desconto Máximo (%)`: Percentual máximo de desconto permitido para o produto, definido no box **Novo Produto/Alterar Produto**.
    
*   `Desconto Máximo (R$)`: Valor em reais correspondente ao desconto máximo permitido, calculado com base no percentual informado acima e no preço do produto.
    

Guias das FORMAS DE PAGAMENTO1800

Além da guia de referência, o box **Finalizadora** apresenta guias específicas para diferentes formas de pagamento. Cada guia corresponde a uma finalizadora distinta, entre elas:

*   Dinheiro
    
*   Cheque à Vista
    
*   Cheque a Prazo
    
*   Cartão Crédito
    
*   Cartão Débito
    
*   Pagamento de Frete
    
*   Vale Funcionário
    
*   Carteira Digital
    
*   PIX
    
*   Cashback
    

Apesar de estarem separadas, **todas as guias possuem os mesmos campos para configuração**:

*   `Preço Venda (R$)`: Valor de venda final do produto ao utilizar a finalizadora configurada, considerando o `Tipo` e o `Valor` (de desconto ou acréscimo) do ajuste aplicado.
    
*   `Desconto (R$)`: Valor de desconto aplicado ao produto, resultante da diferença entre o `Preço (R$)` original e o ajuste definido (desconto ou acréscimo).
    
*   `Tipo`: Define como o ajuste será aplicado ao preço do produto:
    
    *   `Preço Fixo`: O preço do produto será substituído pelo valor informado no campo `Valor`.
        
    *   `Desconto Percentual`: Aplicará um desconto percentual sobre o preço do produto, de acordo com o `Valor` informado.
        
    *   `Acréscimo Percentual`: Aplicará um acréscimo percentual sobre o preço do produto, de acordo com o `Valor` informado.
        
    *   `Desconto em Espécie`: Aplicará um desconto em `Valor` absoluto (R$) sobre o preço do produto.
        
    *   `Acréscimo em Espécie`: Aplicará um acréscimo em `Valor` absoluto (R$) sobre o preço do produto.
        
*   `Valor`: Define o valor do desconto ou acréscimo, em percentual (%) ou em espécie (R$), conforme o `Tipo` selecionado.
    
*   `Tipo de Preço`: Define a qual `Tipo de Preço`, configurado no **box Preço/Custo**, a regra da finalizadora será aplicada no PDV:
    
    *   `A Vista`: Aplica a regra apenas aos preços configurados como `A Vista`.
        
    *   `A Prazo`: Aplica a regra apenas aos preços configurados como `A Prazo`.
        
    *   `Ambos`: Aplica a regra independentemente do tipo de preço configurado.
        

**Observação:** Essa estrutura garante que o **PDV recalcule automaticamente o preço do produto conforme a forma de pagamento escolhida**, evitando perdas financeiras quando o cliente solicita um preço mais baixo e tenta pagar com uma finalizadora que possui taxa administrativa mais elevada.

### Box 7 - Fidelidade

Box Fidelidade

Guia PROGRAMA DA EMPRESA - PONTOS ACUMULADOS NA COMPRA DESTE PRODUTO1800

Nesta guia são definidos os critérios para que o cliente acumule pontos ao adquirir o produto.

*   `Conceder pontos por`: Define o critério de acúmulo de pontos, que pode ser:
    
    *   `Valor`: o cálculo será feito com base no campo `1 ponto a cada (R$)`. Ou seja, a cada venda do produto que ocorrer, caso o valor vendido seja igual ou superior ao valor definido no campo `1 ponto a cada (R$)`, o cliente receberá 1 ponto.
        
        *   Exemplo: se configurado “1 ponto a cada R$ 10,00”, a cada R$ 10,00 em compras do produto o cliente acumulará 1 ponto.
            
    *   `Quantidade`: o cálculo será feito com base no campo `Na compra de X galões`. Ou seja, a cada venda do produto que ocorrer, caso a quantidade vendida seja igual ou superior ao valor definido no campo `Na compra de X galões`, o cliente receberá 1 ponto.
        
        *   Exemplo: se configurado “1 ponto a cada 2 unidades”, a cada 2 unidades vendidas do produto o cliente acumulará 1 ponto.
            
*   `1 ponto a cada (R$)` ou `Na compra de X galões`: Valor em reais ou a quantidade de unidades necessárias para gerar 1 ponto, conforme o critério selecionado no campo anterior.
    

**Observações**

*   Para que a pontuação seja efetivamente contabilizada no cadastro do cliente, no `Cadastro de Clientes` **>** `Guia Fidelidade`, o campo `Acumula Bônus` deve estar configurado como `Sim`.
    
*   O sistema permite configurar **3 níveis de peso para bonificação**, que podem aumentar a quantidade de pontos obtidos. Essa funcionalidade é detalhada no manual de `Cadastro de Clientes`.
    

Guia PROGRAMA DA EMPRESA - TROCA DE PONTOS POR ESTE PRODUTO1800

Nesta guia são definidas as condições de resgate de pontos pelo produto.

*   `Pontos necessários`: Quantidade mínima de pontos que o cliente deve possuir para poder trocar sua pontuação acumulada por este produto.
    

### Box 8 - Integração

Este box concentra os campos destinados à configuração de códigos e parâmetros necessários para garantir a correta comunicação entre o sistema e plataformas externas, como sistemas fiscais, franqueadoras e programas de fidelidade.

Box Integração

*   `Cód. produto AC Fortes`: Código correspondente ao produto no sistema **Fortes AC Fiscal**, utilizado para exportação correta das movimentações fiscais.
    
*   `Cód. programa de Fidelidade`: Código do produto na plataforma **PontuaX**, necessário para realizar resgates de produtos no PDV utilizando pontos ou cashback.
    

O preenchimento é **obrigatório** quando for utilizado o resgate de produtos pelo aplicativo da **PontuaX**. O código deve ser obtido diretamente na plataforma do mesmo.

*   `Cód. produto Petrocard`: Código do produto vinculado ao cartão **Petrocard**, de preenchimento apenas para produtos do tipo **Combustível**. Ao clicar no botão da lupa, o sistema apresenta automaticamente os códigos disponíveis na plataforma Petrocard.
    
*   `Cód. produto Fusion`: Código de identificação do combustível no concentrador **Wayne Fusion**, utilizado em postos integrados a este equipamento.
    
*   `Cód. Vibra`: Código pré-definido pela **Vibra**, utilizado para identificar cada produto do tipo **Combustível** comercializado no posto.
    

Este código é **obrigatório** para integração com a Vibra, garantindo que os abastecimentos sejam corretamente identificados no envio das informações.

*   `Tipo composto (Integração)`: Define a categoria do produto dentro da franqueadora, podendo ser:
    
    *   `Produção`: produtos utilizados na fabricação de outros (ex.: café em kg).
        
    *   `Promoção`: produtos promocionais divulgados em encartes das franqueadoras, geralmente compostos por outros itens.
        
    *   `Embalagem`: packs de produtos (ex.: pack de cerveja).
        
    *   `Produto Simples`: produtos vendidos diretamente, a forma mais comum de cadastro.
        
    *   `Livre`: exclusivo da franqueadora BR Mania. Define produtos que não existem na base oficial da franquia, não podendo ser vinculados.
        
*   `Cód. Produto Shell`: Código de vinculação do produto ou promoção no sistema com o produto ou promoção da franqueadora **Shell Select**.
    

Utilizado exclusivamente para produtos diversos (não se aplica a Combustíveis ou Lubrificantes). Permite controle da integração e envio das movimentações de compras e vendas à Shell.

*   `Cód. Produto BR Mania`: Código de vinculação do produto no sistema com o produto equivalente na franqueadora **BR Mania**.
    

Aplicável apenas a produtos diversos (não se aplica a Combustíveis ou Lubrificantes). Permite controle da integração e envio das movimentações de compras e vendas à BR Mania.

*   `Cód. Promoção/Combo BR Mania`: Código de vinculação da promoção cadastrada no sistema (produto composto) com a promoção correspondente da **BR Mania**.
    

Exclusivo para produtos diversos (não se aplica a Combustíveis ou Lubrificantes). Permite controle da integração e envio das movimentações de produtos vinculados à promoção.

*   `Cód. Posição Livre BR Mania`: Apresentado no box somente após a finalização do cadastro do produto. Código gerado pelo sistema após clicar no ícone de lâmpada (quando o campo `Tipo Composto (Integração)` for definido como `Livre`).
    

Identifica produtos que não possuem correspondência com a base oficial da BR Mania. A franqueadora estabelece o limite máximo de **50 produtos** cadastrados como “Posição Livre”.

*   `Cód. Produto ClubPetro`: Código de vinculação para produtos do tipo **Combustível** no sistema com os combustíveis equivalentes no **ClubPetro**, quando há integração.
    
*   `Cód. Premmia BR Mania`: Código de vinculação da promoção cadastrada no sistema (produto composto) com a promoção correspondente do **Premmia**.
    

Preenchido automaticamente para as promoções que necessitam da utilização de pontos para o pagamento. Esse campo é essencial para que o **resgate com pontos** ocorra corretamente no PDV.

note814c0daf-f5fc-4119-8503-d518e792a912

**Boxes Adicionais**

Alguns boxes adicionais são exibidos ou alterados **somente após a finalização do cadastro do produto**. Eles ficam visíveis quando o usuário acessa a opção de **editar um produto já cadastrado**, permitindo complementação e ajustes das informações.

### Box 9 - Empresa (Adicionado)

Box Empresa

*   `Código produto`: Código interno gerado pelo sistema para identificar o produto de forma única dentro da base de dados.
    
*   `Dados associado a empresa`: Indica a empresa à qual o produto está vinculado. Esse vínculo é essencial em ambientes com múltiplas empresas ou filiais, garantindo que cada produto esteja corretamente associado à operação de uma unidade específica.
    
*   **Botão** : Ao clicar, o sistema abre automaticamente **uma nova guia no navegador** para o cadastro de um **novo produto**, já trazendo **a maioria dos campos preenchidos** de acordo com os dados do produto clonado. Os campos `Cód. Barras – GTIN` e `Descrição` são deixados em branco, para que sejam informados manualmente no novo cadastro. Todos os demais campos, incluindo os presentes nos outros **boxes** (como Estoque, Fiscal, etc.), são preenchidos de forma idêntica ao produto que foi clonado. Essa função **facilita e agiliza o cadastro de novos produtos** que sejam semelhantes ou pertençam à mesma categoria de produtos já existentes no sistema, evitando retrabalho e garantindo padronização das informações.
    

### Box 2 - Preço/Custo (Alterado)

Box Preço/Custo

Este box já é exibido durante o processo inicial de **cadastro de produtos**. Porém, após a **finalização do cadastro**, ele passa a contar com uma funcionalidade adicional.

*   **Botão** : Ao clicar, o sistema abre uma nova tela que apresenta as informações do produto em todas as empresas vinculadas ao ambiente **multiempresa**.
    

Edição Multiempresa

Nessa tela, é possível **atualizar** a `Situação` do produto (Ativo ou Inativo) e o `Preço` de Venda de forma individualizada por empresa. Além disso, o sistema permite **visualizar** o `Custo`, o `Markup` e o `Saldo` do produto em cada empresa, oferecendo praticidade e eliminando a necessidade de editar cada cadastro separadamente.

### Box 3 - Estoque (Alterado)

Box Estoque

Este box já é exibido durante o processo inicial de cadastro do produto. No entanto, após a finalização do cadastro, ele passa a apresentar novas guias e sofre algumas alterações de organização de campos.

**Alterações após a finalização do cadastro:**

*   `Fornecedor`: Durante o cadastro inicial, este campo é exibido no **Box Estoque**. Após a finalização, ele é realocado para o **Box Fornecedores**, de forma a organizar melhor as informações.
    
*   **Novas guias habilitadas:**
    
    *   **Guia ESTOQUES**
        
        *   Esta guia apresenta os estoques da empresa em que o produto está inserido, exibindo também o saldo disponível em cada um deles.
            
            *   Permite acompanhar, de forma clara, a disponibilidade do produto em diferentes estoques.
                
    *   **Guia COMPONENTES**
        
        *   Nesta guia são disponibilizadas as seguintes funcionalidades:
            
            *   **Botão** : Direciona para uma nova tela, onde é possível configurar os componentes que formam o produto composto.
                
            *   **Listagem de componentes já incluídos:** Exibe as informações detalhadas de cada item que compõe o produto:
                
                *   Código de barras
                    
                *   Descrição
                    
                *   Se o componente é **fixo** ou não
                    
                *   Quantidade utilizada na composição
                    
            
            Essa estrutura possibilita a gestão completa de **produtos compostos**, como promoções ou combinações de itens.
            

### Box 10 - Fornecedores (Adicionado)

Box Fornecedores

Este box foi criado para facilitar a gestão e associação de produtos a diferentes fornecedores, especialmente em situações em que o produto **não possui código GTIN**. Nesses casos, a validação do item durante a importação do **XML de compra** pode ser realizada utilizando o **código definido pelo fornecedor**. Esse recurso é fundamental para permitir que um mesmo produto no sistema esteja corretamente associado a diferentes fornecedores, cada um com seus próprios códigos e unidades por embalagem.

**Estrutura e funcionalidades do box**

*   `Escolha o Fornecedor Principal`: Apresenta o fornecedor definido inicialmente no momento do cadastro do produto. Pode ser alterado a qualquer momento através do ícone , que abre uma listagem com todos os fornecedores cadastrados no sistema (módulo `Cadastro de Fornecedores`).
    
*   **Listagem de fornecedores vinculados:**
    
    *   Logo abaixo do campo `Escolha o Fornecedor Principal`, são exibidos todos os fornecedores associados ao produto.
        
    *   Para cada fornecedor, são apresentados:
        
        *   **Código do produto** informado pelo fornecedor e **quantidade de unidades por caixa.**
            

### Box 11 - Códigos Alternativos (Adicionado)

Box Códigos alternativos

Este box apresenta a lista de códigos adicionais cadastrados para um produto, com os campos `Cód. Alternativo` e `Descrição`.

Essa funcionalidade permite associar diferentes códigos ao mesmo produto, oferecendo maior flexibilidade e praticidade na operação do PDV. Por exemplo, é possível cadastrar códigos mais curtos que o código de barras, facilitando a digitação e agilizando o atendimento em produtos de alta rotatividade, como salgados, refrigerantes e outros itens de consumo rápido.

**Observação importante**

Os códigos alternativos são **utilizados apenas para facilitar a identificação do produto no PDV**. Em processos fiscais, como **entrada de notas de compra**, o código considerado será sempre o informado no campo `Cód. de barras – GTIN`, localizado no **Box Novo/Alterar Produto**.

**Cadastro de novos códigos**

*   Ao clicar no botão , será aberta uma tela para inclusão de um novo código alternativo.
    

Box Novo Código Alternativo

*   Nessa tela, o usuário deve informar o:
    
    *   `Cód. Alternativo` e uma `Descrição` (para auxiliar na identificação do código cadastrado).
        

Após a confirmação, o código passa a integrar a listagem exibida no box Códigos alternativos.

**Boxes Adicionais**

Alguns boxes adicionais são exibidos ou alterados **somente após a finalização do cadastro do produto**. Eles ficam visíveis quando o usuário acessa a opção de **editar um produto já cadastrado**, permitindo complementação e ajustes das informações.

### Box 9 - Empresa (Adicionado)

![10-empresa-20250922-205724.png](https://acsapps.atlassian.net/wiki/download/thumbnails/40927255/10-empresa-20250922-205724.png?version=1&modificationDate=1758627136781&cacheVersion=1&api=v2&width=1200&height=94)

*   `Código produto`: Código interno gerado pelo sistema para identificar o produto de forma única dentro da base de dados.
    
*   `Dados associado a empresa`: Indica a empresa à qual o produto está vinculado. Esse vínculo é essencial em ambientes com múltiplas empresas ou filiais, garantindo que cada produto esteja corretamente associado à operação de uma unidade específica.
    
*   **Botão** ![botão-clonar-produto-20250923-181741.png](https://acsapps.atlassian.net/wiki/download/attachments/40927255/bot%C3%A3o-clonar-produto-20250923-181741.png?version=1&modificationDate=1758651505013&cacheVersion=1&api=v2): Ao clicar, o sistema abre automaticamente **uma nova guia no navegador** para o cadastro de um **novo produto**, já trazendo **a maioria dos campos preenchidos** de acordo com os dados do produto clonado. Os campos `Cód. Barras – GTIN` e `Descrição` são deixados em branco, para que sejam informados manualmente no novo cadastro. Todos os demais campos, incluindo os presentes nos outros **boxes** (como Estoque, Fiscal, etc.), são preenchidos de forma idêntica ao produto que foi clonado. Essa função **facilita e agiliza o cadastro de novos produtos** que sejam semelhantes ou pertençam à mesma categoria de produtos já existentes no sistema, evitando retrabalho e garantindo padronização das informações.
    

### Box 2 - Preço/Custo (Alterado)

![4-20251203-182454.png](https://acsapps.atlassian.net/wiki/download/thumbnails/40927255/4-20251203-182454.png?version=1&modificationDate=1764786312764&cacheVersion=1&api=v2&width=1200&height=364)

Este box já é exibido durante o processo inicial de **cadastro de produtos**. Porém, após a **finalização do cadastro**, ele passa a contar com uma funcionalidade adicional.

*   **Botão** ![botão-edição-multiempresa-20250923-185254.png](https://acsapps.atlassian.net/wiki/download/attachments/40927255/bot%C3%A3o-edi%C3%A7%C3%A3o-multiempresa-20250923-185254.png?version=1&modificationDate=1758653603977&cacheVersion=1&api=v2): Ao clicar, o sistema abre uma nova tela que apresenta as informações do produto em todas as empresas vinculadas ao ambiente **multiempresa**.
    

![16-edicao-multiempresa-20250923-171257.png](https://acsapps.atlassian.net/wiki/download/thumbnails/40927255/16-edicao-multiempresa-20250923-171257.png?version=1&modificationDate=1758653709852&cacheVersion=1&api=v2&width=800&height=420)

Nessa tela, é possível **atualizar** a `Situação` do produto (Ativo ou Inativo) e o `Preço` de Venda de forma individualizada por empresa. Além disso, o sistema permite **visualizar** o `Custo`, o `Markup` e o `Saldo` do produto em cada empresa, oferecendo praticidade e eliminando a necessidade de editar cada cadastro separadamente.

### Box 3 - Estoque (Alterado)

![11-estoque-20250922-205814.png](https://acsapps.atlassian.net/wiki/download/thumbnails/40927255/11-estoque-20250922-205814.png?version=1&modificationDate=1758627176467&cacheVersion=1&api=v2&width=1200&height=520)

Este box já é exibido durante o processo inicial de cadastro do produto. No entanto, após a finalização do cadastro, ele passa a apresentar novas guias e sofre algumas alterações de organização de campos.

**Alterações após a finalização do cadastro:**

*   `Fornecedor`: Durante o cadastro inicial, este campo é exibido no **Box Estoque**. Após a finalização, ele é realocado para o **Box Fornecedores**, de forma a organizar melhor as informações.
    
*   **Novas guias habilitadas:**
    
    *   **Guia ESTOQUES**
        
        *   Esta guia apresenta os estoques da empresa em que o produto está inserido, exibindo também o saldo disponível em cada um deles.
            
            *   Permite acompanhar, de forma clara, a disponibilidade do produto em diferentes estoques.
                
    *   **Guia COMPONENTES**
        
        *   Nesta guia são disponibilizadas as seguintes funcionalidades:
            
            *   **Botão** ![botão-modificar-componentes-20250923-134931.png](https://acsapps.atlassian.net/wiki/download/attachments/40927255/bot%C3%A3o-modificar-componentes-20250923-134931.png?version=2&modificationDate=1759153824021&cacheVersion=1&api=v2): Direciona para uma nova tela, onde é possível configurar os componentes que formam o produto composto.
                
            *   **Listagem de componentes já incluídos:** Exibe as informações detalhadas de cada item que compõe o produto:
                
                *   Código de barras
                    
                *   Descrição
                    
                *   Se o componente é **fixo** ou não
                    
                *   Quantidade utilizada na composição
                    
            
            Essa estrutura possibilita a gestão completa de **produtos compostos**, como promoções ou combinações de itens.
            

### Box 10 - Fornecedores (Adicionado)

![12-fornecedores-20250922-205921.png](https://acsapps.atlassian.net/wiki/download/thumbnails/40927255/12-fornecedores-20250922-205921.png?version=1&modificationDate=1758627208757&cacheVersion=1&api=v2&width=1200&height=186)

Este box foi criado para facilitar a gestão e associação de produtos a diferentes fornecedores, especialmente em situações em que o produto **não possui código GTIN**. Nesses casos, a validação do item durante a importação do **XML de compra** pode ser realizada utilizando o **código definido pelo fornecedor**. Esse recurso é fundamental para permitir que um mesmo produto no sistema esteja corretamente associado a diferentes fornecedores, cada um com seus próprios códigos e unidades por embalagem.

**Estrutura e funcionalidades do box**

*   `Escolha o Fornecedor Principal`: Apresenta o fornecedor definido inicialmente no momento do cadastro do produto. Pode ser alterado a qualquer momento através do ícone ![botão-icone-lupa-20240905-125649.png](https://acsapps.atlassian.net/wiki/download/attachments/40927255/bot%C3%A3o-icone-lupa-20240905-125649.png?version=2&modificationDate=1759163061232&cacheVersion=1&api=v2), que abre uma listagem com todos os fornecedores cadastrados no sistema (módulo `Cadastro de Fornecedores`).
    
*   **Listagem de fornecedores vinculados:**
    
    *   Logo abaixo do campo `Escolha o Fornecedor Principal`, são exibidos todos os fornecedores associados ao produto.
        
    *   Para cada fornecedor, são apresentados:
        
        *   **Código do produto** informado pelo fornecedor e **quantidade de unidades por caixa.**
            

### Box 11 - Códigos Alternativos (Adicionado)

![13-codigos alternativos-20250923-113458.png](https://acsapps.atlassian.net/wiki/download/thumbnails/40927255/13-codigos%20alternativos-20250923-113458.png?version=1&modificationDate=1758627318085&cacheVersion=1&api=v2&width=1200&height=150)

Este box apresenta a lista de códigos adicionais cadastrados para um produto, com os campos `Cód. Alternativo` e `Descrição`.

Essa funcionalidade permite associar diferentes códigos ao mesmo produto, oferecendo maior flexibilidade e praticidade na operação do PDV. Por exemplo, é possível cadastrar códigos mais curtos que o código de barras, facilitando a digitação e agilizando o atendimento em produtos de alta rotatividade, como salgados, refrigerantes e outros itens de consumo rápido.

**Observação importante**

Os códigos alternativos são **utilizados apenas para facilitar a identificação do produto no PDV**. Em processos fiscais, como **entrada de notas de compra**, o código considerado será sempre o informado no campo `Cód. de barras – GTIN`, localizado no **Box Novo/Alterar Produto**.

**Cadastro de novos códigos**

*   Ao clicar no botão ![botão-novo-20240829-144910.png](https://acsapps.atlassian.net/wiki/download/attachments/40927255/b7714d70-2d1c-43b6-8db1-77fef804cd22?version=1&modificationDate=1755541351148&cacheVersion=1&api=v2), será aberta uma tela para inclusão de um novo código alternativo.
    

![14-novo-codigo-alternativo-20250923-145346.png](https://acsapps.atlassian.net/wiki/download/thumbnails/40927255/14-novo-codigo-alternativo-20250923-145346.png?version=1&modificationDate=1758639303251&cacheVersion=1&api=v2&width=1200&height=84)

*   Nessa tela, o usuário deve informar o:
    
    *   `Cód. Alternativo` e uma `Descrição` (para auxiliar na identificação do código cadastrado).
        

Após a confirmação, o código passa a integrar a listagem exibida no box Códigos alternativos.

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir produtos no sistema.

### Incluir Produto

Para cadastrar um novo produto no sistema, siga os passos abaixo:

Acesse o módulo de Produtos através do caminho: `Menu Cadastro > Produtos > Produtos`.

Na tela de listagem de produtos, clique no botão .

Preencha os campos no box **Novo Produto**:

*   `Grupo do Produto`: Selecione o grupo ao qual o produto pertence (ex: COMBUSTÍVEL, BEBIDAS)
    
*   `Subgrupo do Produto`: Selecione o subgrupo correspondente ao grupo escolhido.
    
*   `Marca do Produto`: Informe a marca do produto.
    
*   `Cód. de barras - GTIN`: Insira o código de barras do produto. Identificador único.
    
*   `Descrição`: Insira o nome do produto. Deve ser claro e objetivo.
    
*   `Situação`: Defina como `Ativo` para que o produto seja utilizado no sistema.
    
*   `Unidade Comercial`: Selecione a unidade de medida para venda (ex: LITROS, QUILOGRAMA)
    
*   `Unidade Tributável`: Selecione a unidade de medida para fins fiscais.
    
*   `Fator de conversão Unidade Trib.`: (Opcional) Informe o fator de conversão entre a unidade comercial e a tributável, se aplicável.
    
*   `Tipo de Comissão`: (Opcional) Selecione `Percentual (%)` ou `Em espécie (R$)`.
    
*   `Comissão sobre vendas`: (Opcional) Informe o valor ou percentual da comissão.
    
*   `Desconto máximo (%)`: (Opcional) Defina o percentual máximo de desconto permitido.
    
*   `Aceita quantidade fracionária?`: Defina se o produto pode ser vendido em frações.
    
*   `Recarga`: Defina como `Não` a menos que o produto seja de recarga de celular.
    
*   `Tipo de Combustível`: (Apenas quando grupo é do tipo Combustível) Especifique o tipo de combustível.
    
*   `Modelo do Vasilhame`: (Apenas quando grupo é do tipo GLP) Defina o modelo/tamanho do vasilhame.
    
*   `Tipo de venda do Vasilhame`: (Apenas quando grupo é do tipo GLP) Defina se é `Recarga` ou `Vasilhame`.
    
*   `Observação`: (Opcional) Adicione informações adicionais.
    

Preencha os campos no box **Preço/Custo**:

*   `Preço (R$)`: Informe o valor de venda do produto.
    
*   `Custo nominal (R$)`: Informe o valor de compra sem encargos.
    
*   `Custo líquido (R$)`: Informe o valor de compra com descontos/acréscimos.
    
*   (Opcional) Configure `Preço Nível 1`, `Preço Nível 2` e `Tipos de Preço` para definir valores diferenciados conforme a necessidade do produto.
    

Preencha os campos no box **Estoque**:

*   `Fornecedor`: Selecione o fornecedor principal.
    
*   `Crítico`: (Opcional) Defina se o produto é crítico para controle de estoque.
    
*   `Vendido a peso`: (Opcional) Defina se o produto é vendido por peso.
    
*   `Cód. de barras da Caixa`: (Opcional) Informe o código de barras da embalagem externa.
    
*   `Conteúdo da embalagem (Litros)`: (Apenas quando grupo é do tipo Lubrificantes) Informe o conteúdo em litros.
    
*   `Unidades por caixa`: (Opcional) Informe a quantidade de unidades individuais por caixa.
    
*   `Estoque minímo` e `Estoque ideal`: (Opcional) Defina as quantidades para controle.
    
*   `Apenas componente`: (Opcional) Defina se o produto é apenas um componente de outros produtos.
    
*   `Componentes no cupom`: (Apenas para produtos compostos) Defina como os componentes aparecerão no cupom.
    
*   `Início da validade` e `Fim da validade`: (Opcional) Defina o período de comercialização.
    

Preencha os campos no box **Fiscal**:

*   `Departamento`: Selecione o departamento fiscal.
    
*   `Departamento CBS/IBS`: Selecione o departamento fiscal utilizado para o novo modelo de tributação da Reforma Tributária.
    
*   `Código NCM`: Informe o NCM do produto. A descrição será preenchida automaticamente.
    
*   `Cód. combustível ANP`: (Apenas quando grupo é do tipo Combustível, Lubrificante ou GLP) Informe o código ANP. A descrição será preenchida automaticamente.
    
*   `Cód. CEST`: (Opcional) Informe o CEST. A descrição será preenchida automaticamente.
    
*   `Cód. Serviço`: (Apenas quando grupo é do tipo Serviços) Informe o código de serviço.
    
*   `Cód. combustível simplificado`: (Opcional) Informe um código simplificado para combustíveis.
    
*   `Índice de mistura do Biodiesel (%)`: (Apenas para Diesel ou Gasolina) Informe o percentual do biodiesel.
    
*   `Usa arredondamento?`: Defina se o valor da venda será arredondado.
    
*   `Tipo de produção`: Seleciona `Própria` ou `Terceiros`.
    
*   (Apenas quando o grupo é do tipo GLP) Preencha os campos da **Guia GLP**. A soma dos percentuais deve ser 100%.
    

(Opcional) Configure o box **Finalizadora** para preços diferenciados por forma de pagamento.

(Opcional) Configure o box **Fidelidade** para acúmulo e resgate de pontos.

No box **Integração**, preencha o campo `Cód. produto AC Fortes` clicando no ícone para que o sistema gere um código automaticamente.

Após preencher todos os campos e revisar as informações, clique no botão . O sistema redirecionará automaticamente para a tela de listagem com os produtos já cadastrados.

* * *

### Editar Produto

Para modificar os dados de um produto já cadastrado, siga os passos:

Acesse o módulo de Produtos. A tela de listagem exibirá todos os produtos cadastrados.

Localize o produto que deseja editar na lista. Você pode usar os filtros de pesquisa para agilizar a busca.

Clique no ícone ao lado do produto desejado.

A tela de cadastro do produto será aberta, permitindo a modificação dos campos. Observe que alguns boxes (**Empresa**, **Preço/Custo**, **Estoque**, **Fornecedores**, **Códigos Alternativos**) são apresentados ou tem funcionalidades extras após o cadastro inicial.

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Inativar Produto

No sistema, uma vez cadastrado, um produto **não pode ser excluído**. Quando um item não será mais utilizado, seja para vendas ou entradas de notas, a alternativa é a **inativação**. A inativação retira o produto do uso ativo, impedindo sua seleção em novas operações de venda ou movimentações, mas **mantém todo o histórico de registros acessível** para consultas, relatórios e auditorias.

Apenas produtos **sem saldo em estoque** podem ser inativados.

Para inativar um produto, siga os passos:

Acesse o módulo de Produtos. A tela de listagem exibirá todos os produtos cadastrados.

Localize o produto que deseja inativar na lista. Você pode usar os filtros de pesquisa para agilizar a busca.

Clique no ícone ao lado do produto desejado.

No box **Alterar Produto**, altere o campo `Situação` para `Inativo`.

Clique no botão para confirmar a operação.

* * *

Produtos Compostos
------------------

Produtos compostos são aqueles formados por **outros produtos já cadastrados no sistema**, chamados de componentes. Essa funcionalidade é essencial em dois cenários:

*   **Controle de estoque em produções internas**: por exemplo, na venda de um café expresso, o produto final (café expresso) é composto por itens como **café em kg** e outros insumos, garantindo que cada utilização seja corretamente baixada do estoque.
    
*   **Promoções e combos**: tanto promoções criadas pela própria empresa quanto por franqueadoras integradas (como **Shell Select** ou **BR Mania**) podem ser estruturadas como produtos compostos. Nessas situações, geralmente o cliente pode escolher dentro de uma lista de opções pré-definidas, ou, em determinadas quantidades, resultando em preços diferenciados.
    

Para realizar o cadastro de um produto composto, siga os passos abaixo:

**Cadastre o produto final** normalmente no sistema (o produto composto em si).

Após o cadastro, edite o produto clicando no ícone .

No box **Estoque**, acesse a guia **COMPONENTES** e clique no botão .

Será aberta uma tela específica para montagem do produto composto, dividido em dois boxes:

Box Resumo do componente

O box de **Resumo do componente** exibe dados consolidados da promoção, auxiliando na montagem da oferta:

Guia VALORES BASE DO PRODUTO1800

*   `Empresa`: Exibe o nome da empresa associada à sessão ativa.
    
*   `Produto`: Exibe a **descrição da promoção** que está sendo configurada.
    
*   `Qtd. opcionais na venda`: Informe aqui a **quantidade de escolhas** que o cliente deverá fazer no momento da compra. Cada escolha será feita entre os produtos que compartilham o mesmo **número de opção**, e esses produtos devem pertencer na mesma categoria — por exemplo, uma opção de refrigerantes.
    
    *   Exemplo de aplicação: Para a opção de **refrigerantes**, podem ser cadastrados todos os sabores disponíveis na loja (desde que estejam cadastrados no sistema). Todos os produtos dessa opção devem:
        
        *   Ter **o mesmo preço de venda.**
            
        *   Ser cadastrados com o **mesmo número de opção.**
            

Dessa forma, o cliente poderá escolher entre os sabores disponíveis, e o sistema irá debitar do estoque **apenas o produto selecionado**, mantendo o controle correto de inventário.

*   `Preço de venda`: Defina o valor final do produto. Como se trata de uma **composição de produtos**, o preço só pode ser ajustado nesta tela de componentes.
    
*   `Botão` : Distribui o **preço total da composição proporcionalmente** entre os itens cadastrados, gerando automaticamente os valores de "Preço Componente", “Valor venda” e “Margem (%)” em cada linha da composição. Funcional **somente quando todos os componentes forem fixos**.
    

Guia TOTAIS1800

*   `Qtd. Fixos`: Exibe a quantidade total de itens definidos como **fixos** na composição da promoção.
    
*   `Qtd. Opcionais`: Exibe o número de itens cadastrados como **opcionais**, ou seja, produtos que fazem parte de um grupo de escolha.
    
*   `Custo mínimo (R$)`: Apresenta a somatória do **Custo do Item** de todos os itens definidos como fixos + somatória do **Custo do Item** do item com **menor** valor de custo de cada opção.
    
*   `Custo máximo (R$)`: Apresenta a somatória do **Custo do Item** de todos os itens definidos como fixos + somatória do **Custo do Item** do item com **maior** valor de custo de cada opção.
    
*   `Preço venda (R$)`: Valor total do preço de venda avulso dos itens da promoção, calculado da seguinte forma:
    
    *   Soma do **preço avulso de todos os itens fixos +** Soma do **preço avulso de um produto de cada grupo (opção)**.
        
*   `Margem Lucro mín. (R$)`: Valor mínimo de lucro esperado sobre a promoção, calculado a partir da diferença entre o Preço de Venda (R$) e o Custo Máximo (R$).
    
*   `Margem Lucro min. (%)`: Valor percentual referente a margem mínima de lucro.
    
*   `Margem Lucro máx. (R$)`: Valor máximo de lucro esperado sobre a promoção, calculado a partir da diferença entre o Preço de Venda (R$) e o Custo Mínimo (R$).
    
*   `Margem lucro máx. (%)`: Valor percentual referente a margem máxima de lucro.
    
*   `Dif. Preço Produto (R$)`: Diferença entre a **soma dos preços avulsos** (de todos os itens fixos + um item de cada grupo opcional) e o **Preço de Venda** da promoção. Essa informação demonstra o **desconto efetivo** concedido ao cliente ao adquirir os produtos via promoção.
    

Box Componentes

O box de **Componentes** permite a inclusão manual de novos produtos por meio dos seguintes campos e opções:

Guia INFORME O COMPONENTE A SER INCLUÍDO1800

*   `Componente`: Clique no ícone para ser apresentada a listagem de produtos cadastrados no sistema e selecione o que deve fazer parte da promoção.
    
*   `Fixo?`: Defina se o item será **fixo** na promoção.
    
    *   Se **Sim**, o produto será **sempre** incluído na venda da promoção e o campo **Opção** deve obrigatoriamente ser **0**.
        
    *   Se **Não**, o campo **Opção** deve obrigatoriamente ser diferente de **0**, indicando que o item será parte de um grupo de escolha.
        
*   `Opção`: Determine o grupo de seleção ao qual o item pertence:
    
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
    

Após inserir todos os produtos necessários, clique em para concluir a inclusão dos componentes.

**Atenção**

*   A montagem correta de produtos compostos garante que os estoques sejam atualizados automaticamente sempre que o produto final for vendido.
    

* * *

Mudança de preços
-----------------

A funcionalidade de **Mudança de Preços** permite atualizar, de forma **massiva e automatizada**, o preço de venda de diversos produtos ao mesmo tempo, aplicando um percentual definido pelo usuário. Esse percentual pode ser calculado de acordo com a `Margem` de lucro desejada ou o `Markup` sobre o custo do produto.

Essa ferramenta é especialmente útil para empresas que precisam realizar ajustes frequentes em grandes volumes de itens, evitando a necessidade de alterar produto por produto manualmente.

Para realizar uma mudança de preços em massa:

Acesse o módulo de Produtos através do caminho: `Menu Cadastro > Produtos > Produtos`.

Clique no botão .

A seguinte tela será apresentada:

Mudança de Preços

Utilize os filtros disponíveis (como **Grupo, Subgrupo, Marca, Fornecedor, Percentual de lucro** (se inferior ou superior a um valor determinado) ou **Produto** específico) para restringir a listagem somente aos produtos que deverão ter seus preços atualizados.

**Dica:** quanto mais filtros forem aplicados, mais precisa será a seleção de itens que terão os preços modificados.

Ao clicar em , o sistema exibirá os produtos que atendem aos critérios definidos. Essa listagem servirá de base para a aplicação da mudança de preços.

Na guia _APLICAR PERCENTUAL AOS PRODUTOS LISTADOS_, defina no campo `(%)` o percentual a ser aplicado para o cálculo do novo preço de venda dos produtos listados. O cálculo será feito com base no campo `Usado`.

Se `Usado` = `Margem`

O novo `Preço` é calculado pela fórmula: `Custo / (1 - (%))`

Se `Usado` = `Markup`

O novo `Preço` é calculado pela fórmula: `Custo + (Custo * (%))`

Após clicar no botão , verifique os valores gerados na guia _NOVO_. Se os preços estiverem corretos, confirme a alteração clicando no botão para que os novos preços sejam aplicados em massa.

O campo `Usado` deve estar corretamente configurado antes da aplicação, pois ele altera completamente a forma como o sistema calcula o novo preço.

**Observações:**

1.  Além da aplicação de percentuais, a funcionalidade também permite a **edição manual dos preços** diretamente na listagem, sem a necessidade de definir um percentual fixo.
    

Nesse modo de uso, o usuário pode informar valores individualmente para cada produto, e o sistema recalcula automaticamente os campos relacionados para manter a consistência dos dados.

*   Ao informar os valores nos campos `Preço`, `Preço N1` ou `Preço N2`, o sistema recalcula automaticamente a `Margem %` ou `Markup %`, conforme a configuração do campo `Usado`.
    
*   Ao informar valores nos campos `Margem %` ou `Markup %`, o sistema recalcula automaticamente os valores de `Preço`, `Preço N1` e `Preço N2` com base no percentual inserido.
    

Esse comportamento garante coerência entre preços e margens, independentemente do campo utilizado para a edição.

2.  Durante o processo de Mudança de Preços, o sistema disponibiliza a coluna **Preço Sugerido**, que pode ser utilizada como **referência para tomada de decisão** na definição dos novos valores.
    

O cálculo do Preço Sugerido varia conforme o filtro `Markup` selecionado:

*   Se `Markup` = `Produto`  
    O Preço Sugerido é calculado com base no **Markup definido no cadastro de cada produto listado**.
    
*   Se `Markup` = `Grupo`  
    O Preço Sugerido é calculado com base no **Markup definido no cadastro do grupo ao qual o produto pertence**.
    

Essa funcionalidade auxilia na padronização de preços e na aplicação de estratégias comerciais alinhadas às regras definidas por produto ou por grupo.

* * *

**Exemplo de uso prático**

Um caso comum dessa forma de utilização é a **atualização de preços de cigarros**, que seguem tabelamento oficial. Nesse cenário, basta editar os preços diretamente na tela, ajustando cada item para o novo valor tabelado. Essa abordagem torna o processo mais ágil, reduz erros e garante uniformidade nos preços de venda.

* * *

Reprocessamento de Custo
------------------------

O reprocessamento de custo é uma funcionalidade essencial do sistema que tem como objetivo corrigir divergências nos valores de custo dos produtos quando ocorrem alterações em movimentações já registradas. Esta ferramenta é fundamental para manter a integridade das informações financeiras e garantir que os relatórios reflitam os custos e margens corretamente.

O reprocessamento resolve um problema comum que ocorre na seguinte situação, por exemplo:

**Situação Inicial:** Um produto é cadastrado e uma nota fiscal de compra é lançada com o valor de custo incorreto.

Exemplo: foram registradas **4 caixas**, cada caixa com **10 unidades**, ao valor de **R$ 50,00 por caixa**.

*   **Custo total:** 4 caixas × R$ 50,00 = **R$ 200,00.**
    
*   **Quantidade total:** 4 caixas × 10 unidades = **40 unidades.**
    
*   **Custo unitário registrado (errado):** R$ 200,00 ÷ 40 = **R$ 5,00 por unidade.**
    

**Movimentações Subsequentes**: Após esse lançamento, acontecem movimentações normais, como as vendas. Todas as movimentações passam a considerar o custo unitário de **R$ 5,00**.

**Descoberta do Erro**: Posteriormente, percebe-se que a nota fiscal estava registrada de forma incorreta.

*   Na verdade, foram **2 caixas com 10 unidades**, ao valor de **R$ 100,00 por caixa**.
    
*   **O correto seria**: 2 caixas × R$ 100,00 = **R$ 200,00** de custo total.
    
*   **Quantidade total correta**: 2 caixas × 10 unidades = **20 unidades.**
    
*   **Custo unitário real**: R$ 200,00 ÷ 20 = **R$ 10,00 por unidade.**
    

**Problema Resultante**: No relatório de Vendas e Rentabilidade, as vendas realizadas até o momento da correção da nota, apresentam custo e margem incorretos, causando uma distorção da realidade.

Para realizar o reprocessamento de custos:

Acesse o módulo de Produtos através do caminho: `Menu Cadastro > Produtos > Produtos`.

Clique no botão .

A seguinte tela será apresentada:

Reprocessamento de Custo

O módulo de reprocessamento oferece a opção para refinar o processo de recálculo por produto, permitindo que o usuário especifique exatamente quais produtos devem ser considerados:

*   `Data Inicial`: Permite definir a partir de qual data as movimentações devem ser consideradas para recálculo.
    
*   `Produtos`: Possibilita selecionar produtos para o reprocessamento.
    
*   `Atualizar o custo no cadastro`: Ao marcar esta opção, o sistema substitui o custo atual registrado no cadastro do produto pelo valor recalculado, garantindo que o cadastro reflita o custo mais atualizado.
    
*   `Atualizar o custo na movimentação`: Ao marcar esta opção, o sistema aplica o novo custo diretamente nas movimentações de venda, ajustando relatórios e indicadores históricos para que passem a considerar o valor recalculado.
    

Após configurar os campos desejados, clique em para executar o processo. Ao término, o log gerado será disponibilizado para download.

* * *