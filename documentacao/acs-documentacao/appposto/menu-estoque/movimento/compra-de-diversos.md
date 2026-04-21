---
title: Compra de Diversos
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2883585
---

# Compra de Diversos

16truenonelisttrue

* * *

Compra de Diversos
==================

A Compra de Diversos é uma ferramenta utilizada para atualizar o saldo de estoque de produtos diversos, exceto combustíveis, por meio de Nota Fiscal Eletrônica emitida pelo fornecedor. A compra de produtos envolve selecionar, negociar e adquirir bens necessários para revenda, uso na produção, uso e consumo da empresa ou de ativo imobilizado. O objetivo é garantir que os produtos sejam obtidos na quantidade certa, ao menor custo e dentro do prazo, evitando desperdícios e atrasos, e garantindo a satisfação do cliente.

A compra de produtos impacta diretamente os custos da empresa, envolvendo gastos com aquisição, transporte, armazenamento e possíveis perdas por excesso ou obsolescência. Compras eficientes reduzem os custos totais ao obter melhores preços, condições de pagamento favoráveis e minimizam o capital parado em estoque. Compras mal planejadas aumentam as despesas operacionais, desperdícios e afetam a lucratividade.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Estoque > Compra de Diversos

* * *

Será apresentada a seguinte tela:

Tela geral do módulo Compra de Diversos

Ao acessar o módulo, a tela principal será exibida, possibilitando o registro dos produtos adquiridos e garantindo a correta entrada no estoque.

**Nova Compra Diversos**

Permite o lançamento de uma nova compra de diversos, possibilitando o registro de produtos adquiridos, garantindo a correta entrada no estoque.

**Filtro de Pesquisa**

Facilita a busca das compras de diversos já registradas, permitindo filtrar por período, fornecedor, chave eletrônica, número do documento, situação da nota (cancelada ou devolvida), agilizando a localização das informações necessárias.

**Visualização**

Permite consultar os detalhes da entrada de compra de diversos já registrada, possibilitando a verificação dos produtos que tiveram entrada, suas quantidades e demais informações vinculadas à nota.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , será apresentada a seguinte tela, dividida em três boxes destacados em forma de abas no canto direito da tela:

### Box 1 - Nova Compra de Diversos

O box **Nova Compra de Diversos** é utilizado para registrar informações referentes à Nota Fiscal dos produtos adquiridos por meio do fornecedor. Permite inserir e gerenciar todos os dados necessários para uma nova compra, que é registrada com base na Nota Fiscal Eletrônica emitida pelo fornecedor.

Box Nova Compra de Diversos

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `Empresa`: Nome da empresa em que a nota será lançada. É possível selecionar uma empresa diferente da que está atualmente logada para realizar o lançamento, sem a necessidade de sair e entrar em cada empresa separadamente para realizar o processo.
    
*   `Código`: Código gerado automaticamente de forma incremental pelo sistema. Permite o rastreamento e a identificação única de cada recebimento.
    
*   `Data Recebimento` e `Hora`: Data e hora do recebimento dos produtos. Importante realizar o lançamento da nota no momento do recebimento das mercadorias para atualização de custo dos produtos nos relatórios de vendas.
    
*   `Turno`: Indica o turno do dia ao qual os produtos foram recebidos. Ajuda na gestão logística e operacional, organizando as entradas de acordo com os turnos de trabalho.
    
*   `Estoque`: Indica o estoque onde serão atualizados os saldos dos produtos recebidos. (Exemplo: Loja de Conveniência, Almoxarifado, Uso e Consumo, etc.). Assegura que os produtos sejam contabilizados no local correto, facilitando o controle de inventário e evitando discrepâncias.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Certifique-se de que o estoque indicado não esteja com **contagem** em aberto.

*   `Tipo de Nota`: Define a natureza da transação, o que é essencial para a correta escrituração fiscal e contábil, podendo ser:
    
    *   `Normal`: Nota fiscal comum utilizada na maioria das transações. Tem como principal função documentar e registrar a operação comercial.
        
    *   `Consumo`: Nota fiscal referente a produtos destinados ao consumo interno da empresa.
        
    *   `Consignação`: Nota fiscal utilizada para mercadorias entregues em consignação. É um modelo de venda sem a obrigação imediata do pagamento, que por sua vez ocorre somente quando as mercadorias são efetivamente vendidas, podendo ser devolvidas caso não ocorra a venda das mesmas.
        
    *   `Bonificação`: Nota fiscal para produtos oferecidos como prêmios, brindes ou cortesia para clientes.
        
    *   `Indenização`: Nota fiscal para registrar a compensação financeira por perdas ou danos de mercadorias, sem envolver uma venda.
        
    *   `Transferência`: Nota fiscal para registrar a movimentação de mercadorias entre diferentes estabelecimentos de uma mesma empresa, sem que ocorra uma venda.
        
*   `Modelo`: Indica o modelo da Nota Fiscal, podendo ser:
    
    *   `NF-1 (Nota Fiscal Modelo 1)`: Documento fiscal emitido manualmente em papel, utilizado principalmente por empresas que não emitiam documentos eletrônicos. Consistia em blocos de três vias, autorizados pela Fazenda Estadual via códigos AIDF. Embora seu uso tenha sido substituído pela NF-e, pode ser utilizado temporariamente em casos excepcionais.
        
    *   `Consumidor`: Documento em papel que registrava a venda de bens ao consumidor final, amplamente usado no varejo antes da NFC-e (Nota Fiscal de Consumidor Eletrônica) e do Cupom Fiscal, emitido por ECF.
        
    *   `NF-1B`: Variante da NF-1, destinada a transações no setor de prestação de serviços, mas descontinuada com a introdução obrigatória da NFS-e (Nota Fiscal de Serviços Eletrônica).
        
    *   `NF-e`: Documento digital que registra operações de circulação de mercadorias ou prestação de serviços.
        
    *   `NF Produtor`: Nota fiscal utilizada por produtores rurais para registrar a venda de produtos agrícolas e pecuários.
        
    *   `Recibo`: Documento que comprova o pagamento de um produto ou serviço, mas não possui a mesma validade fiscal que uma **NF-e**. Usado em situações onde não é exigida a emissão de uma Nota Fiscal completa, como em pequenas vendas ou prestação de serviços por autônomos.
        
*   `Avulsa (MEI)`: Indica se a Nota é Avulsa e referente a um Microempreendedor Individual (MEIs podem emitir Nota Fiscal Avulsa Eletrônica para registrar vendas usando sistemas eletrônicos autorizados pela Receita Federal quando necessário).
    
*   `Dispositivo`: Dispositivo em que a nota fiscal é emitida. Liberado para edição **somente** quando o **Modelo** indicado é **diferente de NF-e**, podendo ser alterado para:
    
    *   `Bloco`: Refere-se a um formato físico de Nota Fiscal impresso em blocos, onde cada página é uma NF-e separada. Utilizado para a emissão manual de Notas Fiscais, sendo preenchido à mão. Cada bloco contém várias notas, e cada página é destacada conforme é utilizada. Comum entre pequenos comerciantes e autônomos que precisam de um método simples e econômico para emitir Notas Fiscais. É útil em situações onde a emissão eletrônica não é necessária ou disponível.
        
    *   `Formulário`: Refere-se a um formato físico de Nota Fiscal impresso em formulário contínuo. Usado para a emissão de notas fiscais de forma manual ou com o auxílio de uma impressora matricial. Este tipo de dispositivo é comum em empresas que ainda utilizam sistema de emissão de notas fiscais em papel. Ideal para situações onde a emissão eletrônica não é possível ou praticável. Facilita o controle manual e o armazenamento físico de documentos fiscais.
        
    *   `NF-e`: Documento digital que registra operações de circulação de mercadorias ou prestação de serviços, substituindo as notas fiscais de papel. Facilita a automação e a integração dos processos fiscais, proporcionando maior segurança, praticidade e redução de erros.
        
*   `Chave eletrônica`: Chave da Nota Fiscal Eletrônica composta por 44 dígitos. Há quatro formas de inserir a chave eletrônica. Cada maneira será explicada no decorrer do manual:
    

1.  Digitando a chave manualmente.
    
2.  Digitando a chave manualmente e clicando no ícone para que o sistema busque a nota diretamente na SEFAZ e faça o download e manifesto da mesma.
    
3.  Clicando no ícone  para que o sistema abra a tela de **Seleção de Notas Destinadas**. Nessa tela serão listadas as notas emitidas para o CNPJ da empresa que constam na base da SEFAZ e que ainda não foram cadastradas no sistema.
    
4.  Clicando no ícone para que o sistema abra o explorador de arquivos do computador e seja indicado o arquivo XML baixado anteriormente no Portal da NF-e.
    

Essas diferentes formas de lançar notas fiscais no sistema proporcionam flexibilidade, precisão e eficiência, adaptando-se a diversas necessidades operacionais e garantindo a conformidade com as exigências fiscais.

*   `Série`: Número de série do selo fiscal. Identifica numericamente as notas fiscais emitidas por uma empresa dentro de um período ou tipo de operação específicos. Organiza e controla a emissão dos documentos fiscais, garantindo a sequencialidade e a validade legal das notas emitidas.
    
*   `Documento`: Número único da Nota Fiscal dentro da série. Facilita o rastreamento, referência e gestão das notas fiscais emitidas, essencial para fins contábeis, fiscais e de controle interno.
    
*   `Emissão`: Data em que a Nota Fiscal foi emitida. Crucial para controle fiscal e contábil, além de cumprir prazos legais e contratuais relacionados à operação comercial.
    
*   `Fornecedor`: Empresa fornecedora do(s) produto(s). Permite o registro e o gerenciamento dos dados do fornecedor para futuras referências e consultas.
    
*   `UF`: Sigla do estado em que a empresa fornecedora é localizada. Auxilia na aplicação correta das regras tributárias estaduais e na identificação geográfica das operações comerciais.
    
*   `Pagamento`: Indica a forma de pagamento da compra realizada, podendo ser:
    
    *   `À Vista`: Pagamento integral no momento da transação.
        
    *   `A Prazo`: Pagamento dividido em parcelas ao longo de um período determinado.
        
    *   `Outros`: Compra faturada, com pagamento após a entrega da mercadoria. Tem o mesmo comportamento no sistema do tipo **A Prazo**.
        
    *   `Antecipação`: Pagamento adiantado antes do recebimento da nota fiscal.
        

:info:atlassian-info:info:#B3D4FF

**Observação:** Os campos `Chave da compra origem` e `Emissão Origem` são utilizados exclusivamente quando a empresa possui filiais e realiza a compra de produtos utilizando o CNPJ da empresa matriz. Nesse cenário, ocorre a distribuição interna para suas filias por meio de emissão de Notas Fiscais de Saída, que são lançadas no sistema das filiais através deste módulo de Compra de Diversos. Para utilizar esses campos corretamente:

`Chave Eletrônica`: Insira a chave da nota de saída emitida pela empresa matriz para a sua filial.

`Chave da compra origem`: Insira a chave da nota original emitida para o CNPJ da empresa matriz.

`Emissão Origem`: Data da emissão da nota original emitida para o CNPJ da empresa matriz.

Esses campos são fundamentais para garantir a correta rastreabilidade e contabilização das transações entre matriz e filiais, facilitando a gestão integrada das operações comerciais dentro do sistema.

Guia FRETE:1800

*   T`ipo Frete`: Indica o método pelo qual o transporte das mercadorias é realizado, podendo ser:
    
    *   `Sem cobrança de frete`: O vendedor assume o custo do transporte, não sendo cobrado do comprador.
        
    *   `Por conta do Remetente – CIF`: O vendedor paga o frete até o destino final da mercadoria e assume o risco durante o transporte.
        
    *   `Por conta do Destinatário – FOB`:  O comprador paga o frete e assume o risco a partir do momento em que a mercadoria é entregue ao transportador.
        
    *   `Por conta de Terceiros`: O frete é pago por uma pessoa ou empresa que não seja o vendedor ou o comprador, conforme acordado.
        
    *   `Próprio por conta do Remetente`: O vendedor utiliza sua própria frota ou transporte para realizar a entrega da mercadoria.
        
    *   `Próprio por conta do Destinatário`: O comprador utiliza sua própria frota ou transporte para receber a mercadoria no destino final.
        
*   `Vencimento`: Refere-se à data limite para o pagamento do frete, quando aplicável.
    
*   `Transportadora`: Informe o nome da transportadora responsável pelo frete das mercadorias.
    
*   `Conhecimento`: Refere-se ao número do CT-e (Conhecimento de Transporte Eletrônico), um documento digital que acompanha o transporte de cargas no Brasil. Ele substitui os documentos em papel e possui validade jurídica por meio de assinatura digital.
    

* * *

### Box 2 - Itens da Compra

No box **Itens da Compra** são inseridos e listados os produtos adquiridos pela empresa por meio da Nota Fiscal que está sendo lançada. Esses itens terão seus saldos registrados no sistema para controle de estoque e contabilização, garantindo precisão na gestão das compras e no planejamento financeiro da empresa.

Box Itens da Compra

Esse box é crucial para garantir que todas as aquisições sejam devidamente registradas no sistema, atualizando tanto o custo das mercadorias no cadastro dos produtos como seus respectivos saldos no estoque. Os campos apresentados são:

*   `Num.`: Número sequencial da listagem dos itens da nota.
    
*   `Cod. Barras`: Código de barras que identifica o produto de forma única.
    
*   `Produto`: Descrição do produto comprado.
    
*   `CFOP`: Código que identifica a operação fiscal, importante para a tributação e contabilização correta.
    
*   `Unid.`: Quantidade total de unidades do produto adquirido. Resultado da multiplicação do campo `Qtd. Caixas` por `Unid. Caixa` (campos localizados na tela de detalhe dos itens).
    
*   `Valor Caixa`: Custo unitário de uma caixa ou embalagem do produto.
    
*   `Despesas`: Custos adicionais relacionados à aquisição do produto, como transporte ou seguro.
    
*   `Desconto`: Reduções no preço dos produtos, devido a promoções ou acordos.
    
*   `Saldo`: Indica o saldo total do produto em estoque após a entrada.
    
*   `Valor Total`: Cálculo final do valor de cada item, multiplicando a `Qtd. Caixas` pelo `Valor Caixa (R$)` (campos localizados na tela de detalhe dos itens).
    

* * *

### Box 3 - Impostos e Totais

O box de **Impostos e Totais** é utilizado para registrar informações dos impostos aplicáveis de acordo com a legislação vigente e os dados fornecidos na nota fiscal. Além disso, ele resume os valores totais da compra, garantindo que todas as informações fiscais e financeiras estejam corretas e atualizadas.

Box Impostos e Totais

Guia FUNDO DE COMBATE A POBREZA (FCP):1800

*   `Valor FCP (R$)`: O valor total do adicional do FCP cobrado sobre a operação de venda ou prestação de serviço.
    
*   `FCP Subst. (R$)`: O valor do FCP devido na operação de substituição tributária, onde a responsabilidade pelo pagamento do imposto é atribuída a um terceiro, geralmente o fornecedor.
    
*   `FCP Sub Ret. (R$)`: O valor do FCP retido anteriormente na cadeia produtiva, que já foi pago em uma etapa anterior e está sendo destacado na nota para fins de controle e compensação.
    

Guia ICMS:1800

*   `Base ICMS (R$)`: O valor total da base de cálculo do ICMS sobre a qual o imposto será aplicado. É o valor das mercadorias ou serviços que serve de referência para o cálculo do ICMS.
    
*   `Valor ICMS (R$)`: O valor do ICMS calculado sobre a base de cálculo.
    
*   `Base ICMS Sub. (R$)`: É o valor utilizado como referência para calcular o ICMS devido em operações de substituição tributária, onde um intermediário paga o imposto antecipadamente por toda a cadeia de distribuição.
    
*   `Valor ICMS Sub. (R$)`: É o valor do ICMS que deve ser pago na operação de substituição tributária, calculado com base no valor da Base ICMS Sub. (R$).
    

Guia OUTROS:1800

*   `Total IPI (R$)`: O valor total do Imposto sobre Produtos Industrializados (IPI) cobrado sobre os produtos vendidos. Refere-se ao somatório do valor do IPI destacados nos produtos da nota fiscal.
    
*   `Valor Frete (R$)`: Valor do frete destacado diretamente no XML. Ocorre principalmente quando o vendedor é o responsável pelo transporte ou quando o valor do frete deve ser informado por exigência legal ou contratual. Ao destacar o valor do frete no XML da NF-e, as empresas garantem a correta escrituração fiscal e o alinhamento com as obrigações tributárias, além de assegurar transparência e precisão nas transações comerciais.
    
*   `Valor Seguro (R$)`: Valor do seguro destacado diretamente no XML. Ocorre em situações onde o seguro faz parte integrante da operação comercial e é relevante para a transação. Garante a proteção dos bens durante o transporte.
    
*   `Despesas (R$)`: Refere-se ao somatório das despesas destacadas nos produtos da nota fiscal. Inclui custo adicionais envolvidos na aquisição.
    
*   `Desconto (R$)`: Refere-se ao somatório de descontos destacados nos produtos da nota fiscal. Reduzem o valor total dos produtos adquiridos, refletindo promoções ou negociações.
    

:info:atlassian-info:info:#B3D4FF

**Observação:** Os botões e distribuem nos itens da nota o valor indicado nos campos `Despesas (R$)` e `Desconto (R$)`, respectivamente, de forma proporcional ao valor total de cada item com relação ao valor total da nota.

*   `Valor CBS`: Apresenta o valor do CBS calculado para a nota fiscal. Esse valor é obtido com base na alíquota e na base de cálculo definidas na operação.
    
*   `Valor IBS`: Apresenta o valor do IBS referente à parcela estadual da operação. O cálculo é realizado conforme a alíquota e a base de cálculo informadas.
    
*   `Valor IBS Mun.`: Apresenta o valor do IBS referente à participação do município na operação, calculado conforme a base de cálculo e a alíquota municipal aplicada.
    

Guia TOTAIS:1800

*   `Total Produtos (R$)`: É o valor total dos produtos da nota fiscal, sem incluir impostos como FCP ou ICMS, despesas adicionais ou descontos.
    
*   `Total da Nota (R$)`: É o valor total da nota fiscal, sendo composto pelo seguinte cálculo:
    

Total Produtos (R$) **+** FCP Subst. (R$) **+** Valor ICMS Sub. (R$) **+** Total IPI (R$) **+** Valor Frete (R$) **+** Valor Seguro (R$) **+** Despesas (R$) **–** Desconto (R$) 

:info:atlassian-info:info:#B3D4FF

**Observação:** Todos esses campos precisam ter seus valores indicados tanto no box **Impostos e Totais** como no box **Itens da Compra**, exceto os campos `Valor Frete (R$)` e `Valor Seguro (R$)`, que não existem nas opções do box **Itens da Compra**.

* * *

Inclusão de Nova Compra de Diversos - Manual
--------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Flexibilidade**: Ideal para situações em que a nota fiscal é recebida em formato impresso ou enviada por fornecedores sem o arquivo XML.
    
*   **Simples e Direto**: Método direto sem necessidade de navegação adicional, ótimo para notas de baixo volume de itens.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Caso a empresa ainda não possua o certificado digital, a única maneira de fazer lançamento de nota fiscal no sistema é dessa forma.

Acesse o módulo de Compras de Diversos e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Diversos**, preencha os campos da `Empresa`, `Data Recebimento`, `Hora` e `Turno`.

Selecione o **Estoque** em que o saldo dos produtos será alocado.

Tela para seleção do estoque da nota

Indique o `Tipo da Nota` e `Modelo` da nota que está sendo lançada. Por padrão, são indicadas as opções `Normal` e `NF-e`, respectivamente.

Digite os 44 dígitos da chave da nota fiscal. Isso preencherá automaticamente os campos `Série`, `Documento`, `Fornecedor` e `UF` de acordo com as informações presentes no número da chave.

Indique a data de `Emissão` da nota.

Box Nova Compra de Diversos (Inclusão Manual)

Verifique e corrija, se necessário, os campos da forma de `Pagamento` e `Tipo Frete`.

Com essas informações preenchidas de forma manual no box de **Nova Compra de Diversos**, prossiga para o próximo box.

No box de **Itens da Compra**, será necessário inserir os produtos manualmente.

Box Itens da Compra (Inclusão Manual)

Para isso, clique no botão . Será apresentada a seguinte tela:

Tela para indicação do produto manualmente

Onde:

*   `Num.`: Indica o número do item que está sendo adicionado. Gerado automaticamente pelo sistema.
    
*   `Cod. Barras` e `Produto`: Código de Barras e nome do produto.
    
*   `Validade`: Indica a data de validade do produto. \*
    

Guia REFERÊNCIAS DO PRODUTO:1800

*   `CFOP`: Código Fiscal de Operações e Prestações. Após indicação do produto, esse campo é preenchido com o código informado na opção `Compra Interna` ou `Compra Fora` do cadastro de Departamento Fiscal indicado no cadastro do produto indicado. Caso o fornecedor da nota seja de um estado diferente do estado da empresa, será utilizado o CFOP indicado no campo `Compra Fora`. Caso o fornecedor seja do mesmo estado, será utilizado o CFOP indicado em `Compra Interna`.
    
*   `CST`: Código de Situação Tributária.
    
*   `CSOSN`: Código de Situação da Operação no Simples Nacional.
    
*   `NCM`: Código do NCM (Nomenclatura Comum do Mercosul) do produto informado.
    
*   `CEST`: Código Especificador da Substituição Tributária.
    

Guia VALORES:1800

*   `Qtd. Caixas`: Refere-se à quantidade de caixas do item.
    
*   `Unid. Caixa`: Refere-se à quantidade de unidades contidas em cada caixa.
    
*   `Valor Caixa (R$)`: Refere-se ao valor de custo de cada caixa.
    
*   `Despesas (R$)`: Refere-se ao valor da despesa destacada no item.
    
*   `Desconto (R$)`: Refere-se ao valor de desconto destacado no item.
    
*   `Valor IPI (R$)`: Refere-se ao valor do IPI correspondente ao item.
    
*   `Valor Total (R$)`: Refere-se ao valor total do item, sendo composto pelo seguinte cálculo: `Qtd. Caixas (R$)` \* `Valor Caixa (R$)`
    

Guia FUNDO DE COMBATE A POBREZA (FCP):1800

*   `%FCP`: Percentual do Fundo de Combate à Pobreza.
    
*   `Base FCP (R$)`: Base de cálculo do FCP.
    
*   `Valor FCP (R$)`: Valor do FCP do item.
    
*   `% FCP ST`: Percentual do FCP para Substituição Tributária.
    
*   `Base FCP Subst. (R$)`: Base de cálculo do FCP para Substituição Tributária.
    
*   `Valor FCP Subst. (R$)`: Valor do FCP para Substituição Tributária.
    

Guia ICMS:1800

*   `%ICMS`: Percentual do ICMS.
    
*   `Base ICMS (R$)`: Base de cálculo do ICMS.
    
*   `Valor ICMS (R$)`: Valor do ICMS.
    
*   `Base ICMS Sub. (R$)`: Base de cálculo do ICMS para Substituição Tributária.
    
*   `Valor ICMS Sub. (R$)`: Valor do ICMS para Substituição Tributária.
    

Guia CBS/IBS1800

Reúne as informações necessárias para o cálculo e enquadramento dos tributos CBS e IBS na nota fiscal de entrada. Esses campos devem ser utilizados para informar corretamente como a operação será tributada conforme as regras da reforma tributária.

*   `CST`: Código da Situação Tributária que identifica o enquadramento fiscal da operação em relação ais tributos CBS/IBS
    
*   `CClass Trib`: Define a classificação tributária da operação, conforme as regras da reforma tributária, determinando como os tributos CBS/IBS serão aplicados.
    
*   `Base CBS/IBS`: Valor utilizado como base de cálculo para apuração dos tributos CBS e IBS na operação.
    

Guia CBS1800

*   `% Aliq. Nominal`: Percentual definido em legislação para cálculo da CBS.
    
*   `% Redução`: Percentual de redução aplicado sobre a alíquota nominal, quando aplicável.
    
*   `% Aliq. Efetiva`: Percentual final após aplicação da redução, utilizado no cálculo do tributo.
    
*   `Valor (R$)`: Apresenta o valor da CBS calculado com base na alíquota efetiva aplicada sobre o valor informado no campo `Base CBS/IBS`.
    

Guia IBS1800

*   `% Aliq. Nominal`: Percentual definido em legislação para cálculo do IBS.
    
*   `% Redução`: Percentual de redução aplicado sobre a alíquota nominal, quando aplicável.
    
*   `% Aliq. Efetiva`: Percentual final após aplicação da redução, utilizado no cálculo do tributo.
    
*   `Valor (R$)`: Apresenta o valor do IBS calculado com base na alíquota efetiva sobre o valor informado no campo `Base CBS/IBS`.
    

Guia IBS Municipal1800

*   `% Aliq. Nominal`: Percentual definido pelo município para calculo do IBS Municipal.
    
*   `% Redução`: Percentual de redução aplicado a alíquota nominal, quando aplicável.
    
*   `% Aliq. Efetiva`: Percentual final após aplicação da redução, utilizado no cálculo do tributo.
    
*   `Valor (R$)`: Apresenta o valor do IBS Municipal calculado com base na alíquota efetiva sobre o valor informado no campo Base `CBS/IBS`.
    

Clique na opção `Produto`. Será apresentada uma tela de seleção de produtos.

Tela para pesquisa e seleção do produto manualmente

É possível pesquisar tanto pelo código de barras do produto como pela descrição. Selecione o produto cadastrado no sistema referente ao item da nota.

O sistema retornará para a tela de informações do item com os campos `CFOP`, `CST`, `NCM`, `CEST` e `Valor Caixa (R$)` preenchidos de acordo com as informações contidas no cadastro do produto e departamento fiscal, podendo ser alterados caso haja a necessidade.

Tela para indicação do produto manualmente preenchida

Preencha os campos das guias **VALORES**, **FUNDO DE COMBATE A POBREZA (FCP)** e **ICMS** de acordo com as informações contidas na DANFE da nota.

Após preenchimento e conferência das informações do item, clique no botão . Caso a nota tenha mais de um item, repita o processo de inclusão até que todos os itens estejam incluídos.

O sistema retornará para o box de **Itens da Compra**, com a listagem dos itens que foram adicionados e suas respectivas informações resumidas.

Box Itens da Compra após inclusão do item manualmente

Sendo possível a edição ou exclusão dos itens adicionados, clicando nos botões ou , respectivamente.

:info:atlassian-info:info:#B3D4FF

**Observação:** Esse processo de inclusão e exclusão de produtos é possível **SOMENTE** quando o lançamento da nota é realizado de forma **MANUAL.** Ao realizar o lançamento por [**download da nota**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2883585/Compra+de+Diversos#Download-da-nota), [**busca**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2883585/Compra+de+Diversos#Buscar-notas) ou [**indicação de arquivo XML**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2883585/Compra+de+Diversos#Arquivo-XML), os itens são inseridos de forma automática. Nesses casos, não é possível adicionar novos itens manualmente nem os excluir, apenas editá-los.

No box **Impostos e Totais**, verifique cada campo e certifique-se de que todos estejam com seus valores corretos.

Após isso, clique no botão para finalizar a entrada da nota e ser direcionado para o lançamento do boleto no contas a pagar, podendo ser realizado de três maneiras que serão apresentadas posteriormente.

* * *

Inclusão de Nova Compra de Diversos - Download da Nota Download-da-nota
-----------------------------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Precisão dos dados**: Reduz a chance de erros de digitação ao permitir que o sistema preencha automaticamente os detalhes da nota fiscal.
    
*   **Conformidade Legal**: Garante que os dados da nota fiscal sejam precisos e estejam em conformidade com as informações oficiais da SEFAZ.
    

Acesse o módulo de Compras de Diversos e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Diversos**, preencha os campos da `Empresa`, `Data Recebimento`, `Hora` e `Turno`.

Selecione o **Estoque** em que o saldo dos produtos será alocado.

Tela para seleção do estoque da nota

Indique o `Tipo da Nota` e `Modelo` da nota que está sendo lançada. Por padrão, são indicadas as opções `Normal` e `NF-e`, respectivamente.

Digite os 44 dígitos da chave da nota fiscal. Clique no ícone para que seja realizado a busca, download e manifesto da mesma direto na SEFAZ. Isso **preencherá** e **bloqueará** automaticamente os campos `Estoque`, `Modelo`, `Dispositivo`, `Série`, `Documento`, `Emissão`, `Fornecedor` e `UF` de acordo com as informações presentes no XML da chave.

Box Nova Compra de Diversos (Inclusão por download da nota)

Verifique e corrija, se necessário, os campos da forma de `Pagamento` e `Tipo Frete`.

Com essas informações conferidas no box de **Nova Compra de Diversos**, prossiga para o próximo box. sequencia-lançamento-nota

No box de **Itens da Compra**, o(s) produto(s) da nota será(ão) automaticamente adicionado(s) para o box com suas respectivas informações de valores e quantidade, desde que o(s) mesmo(s) já esteja(m) cadastrado(s) e associado(s) no sistema.

Box Itens da Compra com produto indicado após download da nota

:info:atlassian-info:info:#B3D4FF

**Observação:** Caso o produto não esteja cadastrado no sistema ou já esteja cadastrado, mas ainda não tenha sido associado ao item da nota, será apresentado uma [**tela**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2883585/Compra+de+Diversos#Associacao-cadastro-produtos) para realizar tais procedimentos.

Mesmo sendo realizado o download da nota, é necessário fazer a conferência dos valores e quantidades de cada item para que o saldo e custo do produto seja atualizado de forma correta.

Para isso, clique no botão . Será apresentada a seguinte tela:

Tela para conferência do produto preenchido após download da nota

Onde os campos `Cod. Barras` e `Produto` estarão bloqueados para modificação, uma vez que o item da nota já está associado a esse produto no sistema.

Os campos `CFOP`, `CST`, `NCM` e `CEST` serão preenchidos de acordo com as informações contidas no cadastro do produto e departamento fiscal, podendo ser alterados caso haja a necessidade. Verifique e corrija, caso necessário, os campos das guias **VALORES**, como `Qtd. Caixas`, `Unid. Caixa` ou `Valor Caixa (R$)`**.**

Os valores das guias **FUNDO DE COMBATE A POBREZA (FCP)** e **ICMS** serão preenchidos de acordo com as informações contidas no XML da nota.

Após conferência das informações do item, clique no botão . Caso a nota tenha mais de um item, repita o processo de verificação até que todos os itens estejam com as informações corretas.

No box **Impostos e Totais**, verifique cada campo e certifique-se de que todos estejam com seus valores corretos. Note que na guia **TOTAIS**, o campo `Total Produtos (R$)` estará bloqueado para edição uma vez que essa informação necessita estar de acordo com o valor destacado no XML da nota.

Após isso, clique no botão para finalizar a entrada da nota e ser direcionado para o lançamento do boleto no contas a pagar, podendo ser realizado de três maneiras que serão apresentadas posteriormente.

* * *

Inclusão de Nova Compra de Diversos - Buscar Notas Buscar-notas
---------------------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Verificação completa**: Apresenta uma visão abrangente de todas as notas pendentes, garantindo que nenhuma nota seja esquecida ou omitida.
    
*   **Economia de Tempo**: Reduz o tempo necessário para buscar e lançar notas fiscais ao centralizar todas as notas disponíveis em uma única tela de seleção.
    

Acesse o módulo de Compras de Diversos e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Diversos**, preencha os campos da `Empresa`, `Data Recebimento`, `Hora` e `Turno`.

Selecione o **Estoque** em que o saldo dos produtos será alocado.

Tela para seleção do estoque da nota

Indique o `Tipo da Nota` e `Modelo` da nota que está sendo lançada. Por padrão, são indicadas as opções `Normal` e `NF-e`, respectivamente.

Na `Chave Eletrônica`, clique no ícone . Será apresentada a seguinte tela para busca das notas:

Tela para visualização das notas destinadas

Na parte superior da tela, é possível aplicar filtros para a listagem das notas emitidas pelos fornecedores para o CNPJ da empresa e que ainda não foram lançadas no sistema, onde:

*   `Data Inicial` e `Data Final`: Especifique o intervalo de datas de emissão das notas. A diferença entre as datas não pode ser superior a 30 dias.
    
*   `CNPJ do Emissor`: Insira o CNPJ de um fornecedor especifico para listar as notas relacionadas.
    
*   `Nome do Emissor`: Insira o nome de um fornecedor específico para listar as notas relacionadas.
    
*   `Lote`: Insira um lote de emissão específico para listar as notas relacionadas.
    
*   `Documento`: Insira o número do documento fiscal de uma nota específica.
    
*   `Série`: Insira o número de série do documento da compra.
    
*   `Chave Eletrônica`: Insira o número da chave eletrônica específica.
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Especifique o intervalo de valores para filtrar as notas com base no valor mínimo e valor máximo desejado.
    

Com os filtros aplicados, clique no botão .

Na parte inferior da tela, serão listadas as notas de acordo com os filtros selecionados:

Tela para visualização e seleção das notas destinadas

Marque a nota que deseja lançar e clique no botão **.** O sistema irá buscar, efetuar o download e o manifesto da chave marcada para prosseguir com o lançamento da nota. A partir desse momento, o restante do processo de lançamento é idêntico ao exemplificado em [Inclusão de nova compra – Download da Nota](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2883585/Compra+de+Diversos#sequencia-lançamento-nota), sendo necessário a verificação dos itens e seus respectivos custos e quantidades, além dos totais da nota.

:info:atlassian-info:info:#B3D4FF

**Observação:** Caso não seja apresentada nenhuma informação na tela de **Seleção de Notas Destinadas**, acesse o menu **Estoque** → **Fiscal** → **Manifesto de Destinatário** e clique no botão para que o sistema faça a consulta diretamente na SEFAZ e traga para o sistema todas as notas pendentes de cadastro que foram emitidas para o CNPJ da empresa.

* * *

Inclusão de nova compra - Arquivo XML Arquivo-XML
-------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Segurança e Confiabilidade**: Ao utilizar o arquivo XML, assegura a precisão dos dados fiscais e reduz a possibilidade de inconsistências.
    
*   **Backup e Referência**: Mantém um registro digital do XML da nota fiscal, útil para auditorias e consultas futuras.
    

Acesse o módulo de Compras de Diversos e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Diversos**, preencha os campos da `Empresa`, `Data Recebimento`, `Hora` e `Turno`.

Selecione o **Estoque** em que o saldo dos produtos será alocado.

Tela para seleção do estoque da nota

Indique o `Tipo da Nota` e `Modelo` da nota que está sendo lançada. Por padrão, são indicadas as opções `Normal` e `NF-e`, respectivamente.

Na `Chave Eletrônica`, clique no ícone . Será apresentado o explorador de arquivos do computador para indicação do arquivo XML baixado anteriormente no Portal da Nota Fiscal Eletrônica ([https://www.nfe.fazenda.gov.br/portal/principal.aspx](https://www.nfe.fazenda.gov.br/portal/principal.aspx)). Encontre o arquivo em seu computador e clique em **Abrir**.

O XML será importado para o sistema e os campos dos três painéis serão preenchidos de acordo com as informações do arquivo. A partir desse momento, o restante do processo é idêntico ao exemplificado em [Inclusão de nova compra – Download da Nota](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2883585/Compra+de+Diversos#sequencia-lançamento-nota), sendo necessário a verificação dos itens e seus respectivos custos e quantidades, além dos totais da nota.

* * *

Associação e cadastro de produtos Associacao-cadastro-produtos
--------------------------------------------------------------

Ao realizar o lançamento de uma nota fiscal de compra de diversos, é importante certificar-se de que:

1.  Os produtos estejam incluídos no estoque indicado no início do lançamento da nota.
    
2.  Os produtos da nota já estejam cadastrados e associados no sistema.
    

Caso um desses pontos não seja atendido, o sistema apresentará telas específicas para realizar as operações necessárias. A seguir, será detalhado cada processo.

:info:atlassian-info:info:#B3D4FF

**Observação**: Os processos de cadastro, associação e indicação de estoque que serão detalhados abaixo são apresentados apenas quando o tipo de lançamento da nota é por Download da Nota, Busca ou indicação de arquivo XML.

### Caso 1 - Produto cadastrado, mas não incluído no estoque

Se o(s) produto(s) da nota fiscal não estiver(em) incluído(s) no estoque indicado no início do processo de lançamento, será apresentada a seguinte tela:

Tela de itens da nota não inseridos no estoque

A listagem é apresentada com as seguintes informações sobre o(s) produto(s):

*   `Num.`: Número do item na nota fiscal.
    
*   `Produto`: Descrição do produto no sistema que possui o mesmo código de barras do item da nota.
    
*   `Associado a`: Descrição do produto do sistema que está associado ao item da nota. Caso o campo esteja vazio, significa que o item ainda não foi associado.
    
*   `Qtd`: Quantidade do item na nota fiscal.
    
*   `Total`: Valor total do item na nota fiscal.
    

Além dessa listagem, a tela também apresenta os botões:

oculta os itens da nota que já estejam associados a produtos do sistema na listagem.

apresenta todos os itens da nota na listagem, ou seja, tanto os que já estejam associados a produtos do sistema como os não associados.

apresenta a seguinte tela para confirmar a inclusão do produto no estoque indicado no início do lançamento da nota e realiza a associação automática do item da nota ao produto cadastrado no sistema que tenha o mesmo código de barras.

Tela de associação do produto no estoque

Clique no botão , a coluna “Associado a” será atualizada com a informação de que o produto foi incluído no estoque.

Tela de itens da nota após associação ao estoque

Clique no botão para prosseguir com o lançamento da nota.

### Caso 2 - Produto não cadastrado ou não associado

Se o(s) produto(s) da nota fiscal não estiver(em) cadastrado(s) ou associado(s) no sistema, será apresentada a seguinte tela:

Tela de itens da nota não encontrados no sistema

A listagem é apresentada com as seguintes informações sobre os produtos:

*   `Num.`: Número do item na nota fiscal.
    
*   `Produto`: Descrição do item na nota fiscal.
    
*   `Associado a`: Descrição do produto do sistema que está associado ao item da nota.
    
*   `Qtd`: Quantidade do item na nota fiscal.
    
*   `Total`: Valor total do item na nota fiscal.
    

Além dessa listagem, a tela também apresenta os botões:

oculta os itens da nota que já estejam associados a produtos do sistema na listagem.

apresenta todos os itens da nota na listagem, ou seja, tanto os que já estejam associados a produtos do sistema como os não associados.

apresenta a seguinte tela, onde é possível realizar duas operações diferentes:

1.  associação do item da nota à um produto já cadastrado.
    
2.  cadastro do produto.
    

#### Associação

O processo de associação manual consiste em buscar entre os produtos já cadastrados no sistema qual corresponde ao item da nota para ser realizada a associação de um ao outro. É necessário principalmente quando o produto está cadastrado com um **Cód. de barras – GTIN** gerado pelo sistema, ou seja, divergente do código de barras do produto presente na nota fiscal.

Tela para realizar associação manual

Na parte superior da tela, são exibidos o código de barras e descrição do item da nota que será associado.

Código e descrição do item da nota

Abaixo, estão as opções para determinar qual operação será realizada:

Apresenta a tela para associação do produto.

Apresenta a tela para cadastro do produto.

Logo em seguida são apresentas as opções de filtro e listagem de produtos.

Filtro e listagem dos produtos

Onde podem ser aplicados filtros para facilitar a busca do produto que será associado ao item da nota, como descrição, código de barras, código da caixa e situação.

Após encontrar o produto que será associado, clique no botão localizado no final da linha para realizar a associação manual.

Tela de confirmação para associação do produto

Confirme a associação clicando no botão , a coluna “Associado a” será atualizada com a informação do produto do sistema ao qual o item da nota foi associado.

Tela de itens da nota após associação

Clique no botão para prosseguir com o lançamento da nota.

#### Cadastro

O processo de cadastro permite cadastrar produtos diretamente durante o lançamento da nota, sem a necessidade de acessar o módulo de cadastro de produtos separadamente. Isso facilita e agiliza o cadastro de novas mercadorias, como quando se adquirem vários produtos novos para revenda ou há mudança no código de barras dos produtos.

Tela para realizar cadastro do produto

Na parte superior da tela, são exibidos o código de barras e a descrição do item da nota que será cadastrado.

Código e descrição do item da nota

Abaixo, estão as opções para determinar qual operação será realizada:

Apresenta a tela para associação do produto.

Apresenta a tela para cadastro do produto.

Logo em seguida, estão os campos que deverão ser preenchidos e revisados para efetuar o cadastro do produto.

Campos para realizar o cadastro do produto

Onde:

*   `Cód. de Barras – GTIN`: Identificador único de produtos.
    
*   `Cód. de Barras (Caixa)`: Código de barras da caixa ou embalagem que contém as unidades do produto a ser vendido.
    
*   `Cód. do Produto (Forn.)`: Código do produto no sistema do fornecedor. Ao comprar um mesmo produto de fornecedores diferentes, o sistema armazena esses códigos de todos os fornecedores no cadastro do produto com a finalidade de tornar o lançamento da nota mais rápido.
    
*   `Descrição`: Descrição clara e detalhada do produto que facilite sua identificação no sistema.
    
*   `Código NCM`: Código que classifica o produto para fins fiscais e de comércio exterior.
    
*   `Cód. CEST`: Código necessário para identificar produtos sujeitos à substituição tributária.
    
*   `Cód. Combustível ANP`: Código da Agência Nacional do Petróleo para produtos de combustíveis. Campo desabilitado já que o lançamento da nota é do tipo Diversos.
    
*   `Cód. produto AC Fortes`: Código específico do produto para sistemas que utilizam a plataforma Fortes. Pode ser gerado pelo sistema clicando no ícone .
    
*   `Unidades por caixa`: Quantidade de itens na caixa do produto comprado.
    
*   `Unidades por embalagem (Litros)`: Utilizado somente para itens do tipo Lubrificantes. Este campo indica quantos litros ou fração de litros contém a embalagem do lubrificante a ser vendido.
    
*   `Custo Unitário (R$)`: Refere-se ao custo em reais da unidade do produto.
    
*   `Preço de Venda (R$)`: Refere-se ao preço de venda em reais da unidade do produto. Necessário ser maior que o valor de custo.
    
*   `Grupo do Produto`: Grupo mercadológico ao qual o produto pertence para fins de categorização no sistema.
    
*   `Subgrupo do Produto`: Subnível do grupo ao qual o produto está vinculado. A listagem apresenta apenas os subgrupos cadastrados do grupo informado anteriormente.
    
*   `Marca do Produto`: Refere-se à marca do produto que está sendo cadastrado. Serão listadas todas as marcas cadastradas em Cadastro > Produtos > Marcas.
    
*   `Unidade do Produto`: Refere-se à unidade de medida usada para o produto. Serão listadas todas as marcadas cadastradas em Cadastro > Produtos > Unidades.
    
*   `Unidade Tributável`: Refere-se à unidade de medida adotada para fins fiscais, utilizada na apuração dos tributos.
    
*   `Departamento Fiscal`: Refere-se ao departamento fiscal ao qual o produto pertence. É o que definirá a tributação do produto nas entradas e saídas de acordo com o CFOP.
    
*   `Departamento CBS/IBS`: Refere-se ao enquadramento fiscal do produto para aplicação das regras de CBS e IBS.
    

:info:atlassian-info:info:#B3D4FF

**Observação:** Os campos `Cód. de Barras – GTIN`, `Cód. de Barras (Caixa)`, `Cód. do Produto (Forn.)`, `Descrição`, `Código NCM` e `Custo Unitário (R$)` são preenchidos automaticamente de acordo com as informações da nota fiscal, podendo ser alterados caso haja a necessidade.

Os campos destacados na cor vermelha são de preenchimento obrigatório.

Após o preenchimento e revisão dos campos, clique no botão .

Tela de confirmação do cadastro para associação do produto

Confirme a associação clicando no botão , a coluna “Associado a” será atualizada com a informação do produto cadastrado ao qual o item da nota foi associado.

Tela de itens da nota após cadastro e associação

Clique no botão para prosseguir com o lançamento da nota.

* * *

Formas de pagamento
-------------------

Ao cadastrar uma nova compra de diversos no sistema, é necessário informar qual a forma de pagamento que será utilizada para quitar a conta a pagar gerada referente à aquela compra. Essa informação é indicada no **Box Nova Compra de Diversos**, no campo `Pagamento`. As opções disponíveis incluem **À Vista**, **A Prazo**, **Outros** e **Antecipação**.

Abaixo serão exemplificadas detalhadamente a finalização da compra com cada forma de pagamento.

### À Vista

Esta opção é utilizada quando o pagamento é efetuado integralmente no ato da compra. É a forma mais comum e simples de pagamento, onde o comprador liquida a dívida imediatamente, independentemente do tipo de finalizadora utilizada, seja em dinheiro, depósito, cartão de crédito/débito.

Ao clicar no botão da tela de lançamento da Compra de Diversos, será apresentada a seguinte tela de confirmação:

Tela de confirmação da finalização da nota

Clique no botão para prosseguir. Será apresentada a seguinte tela:

Tela de lançamento e quitação do contas a pagar

Indique o **Centro de Resultado** ao qual essa compra deverá ser associada. São apresentados também os campos com o `Valor da Compra (R$)` e o `Valor Pendente (R$)`, que é atualizado a cada novo pagamento adicionado.

Na guia **LISTA DE PAGAMENTOS**, serão apresentadas detalhadamente cada tipo de finalizadora utilizada para compor o valor total da compra que foi paga, trazendo informações como `Número`, `Pagamento`, `Conta Origem`, `Conta Aplicação` e `Valor Pago (R$)` de cada uma.

Para incluir um novo tipo de pagamento, clique no botão . Será apresentada a seguinte tela:

Tela para incluir pagamento de compra com o pagamento à Vista

Indique o **Tipo Pagamento** com a finalizadora correta usada para o pagamento da compra, podendo ser **Dinheiro**, **Depósito Bancário**, **Cheque à Vista/a Prazo**, **Cartão de Crédito/Débito**, **Carteira Digital** ou **PIX**, e o **Valor a Pagar** referente ao mesmo.

Na guia **CONTAS,** informe as `Conta Origem` e `Conta Aplicação` referentes ao pagamento, que por padrão são configuradas na operação 001 PAGAMENTOS DE FORNECEDOR das **Contas Padrão** (localizado em **Cadastro** → **Financeiro** \-> **Contas do Caixa**) podendo ser alteradas caso haja a necessidade.

Clique no botão após preenchimento das informações. Refaça o processo para cada tipo de pagamento até que o valor total a pagar seja completado.

Tela com a lista de pagamentos indicados

Após inclusão da(s) forma(s) de pagamento, revise se as informações inseridas estão corretas e clique no botão para finalizar o lançamento da nota.

### A Prazo

Nesse caso, o pagamento é parcelado em uma série de pagamentos futuros. As condições, como o número de parcelas, taxas de juros e datas de vencimento, são acordadas previamente entre o comprador e o vendedor. Essa forma de pagamento é comum para compras de maior valor, permitindo que o comprador distribua o custo ao longo do tempo.

Ao clicar no botão da tela de lançamento da Compra de Diversos, será apresentada a seguinte tela de confirmação:

Tela de confirmação da finalização da nota

Clique no botão para prosseguir. Será apresentada a seguinte tela:

Tela para incluir pagamento de compra com o pagamento a Prazo

No box **Finalizando a Compra**, os campos `Acréscimo (R$)` e `Desconto (R$)` devem ser preenchidos de acordo com a informação do boleto, caso estejam destacados. É possível indicar um `Histórico` para fácil identificação da conta.

No box **Parcelas a Pagar**, serão incluídas as parcelas referentes ao pagamento que deverá ser efetuado. Podem ser incluídas de **duas** maneiras:

1.  Clicando no botão , será apresentada a seguinte tela:
    

Tela para gerar parcelas

O campo `Data Vencimento (Ref)` tem seu preenchimento obrigatório, uma vez que ele servirá como referência para o vencimento das parcelas a serem geradas da conta a pagar. Caso haja necessidade, preencha o campo `Observação` com uma descrição das parcelas que estão sendo geradas.

Guia PARCELAS1800

Nesta guia constam as informações das parcelas que serão geradas.

*   `Valor Total a Pagar`: Valor total da conta a ser dividido pela quantidade de parcelas.
    
*   `Parcelas`: Quantidade de parcelas a serem geradas de acordo com o valor total da conta.
    
*   `Cada Parcela`: Mostra o valor de cada parcela que será gerada, sendo calculada pela divisão do `Valor Total a Pagar` pela quantidade de `Parcelas`.
    
*   `Período`: Refere-se ao intervalo de tempo para a data de vencimento entre cada parcela que será gerada. Pode ser definido como `Semanal`, `Quinzenal`, `Mensal` ou `Anual`, e é calculado a partir da informação fornecida no campo `Data Vencimento (Ref.)` Utilizando esse campo, você assegura que todas as parcelas sejam geradas nos intervalos corretos, facilitando o planejamento financeiro e automação de pagamentos.
    

Guia ENCARGOS1800

Nesta guia constam as informações referentes as multas e juros que podem ser gerados em caso de atraso no pagamento. Preencha de acordo com as informações contidas nas observações do boleto.

*   `Multa`: Refere-se a uma penalidade financeira aplicada a conta a pagar quando o pagamento não é efetuado até a data de vencimento acordada. É uma forma de encorajar o pagamento pontual e compensar o fornecedor pelo atraso no recebimento.
    
*   `Tipo`: Refere-se à forma como a multa é calculada e aplicada na conta a pagar no caso de atraso no pagamento. Existem dois tipos:
    
    *   `Em espécie`: um valor fixo, independentemente do valor total da fatura.
        
    *   `Porcentagem`: calculada como um percentual do valor total da conta.
        
*   `Carência (dias)`: Refere-se ao período adicional concedido após a data de vencimento da conta a pagar, durante o qual o pagamento poderá ser efetuado sem a cobrança de multa ou juros.
    
*   `Juros (ao dia)`: Refere-se à cobrança adicional sobre o valor devido quando o pagamento não é efetuado até a data de vencimento. É calculado com base em um percentual definido e é aplicado diariamente para cada dia de atraso.
    
*   `Tipo`: Refere-se à forma como os juros são calculados e aplicados na conta a pagar no caso de atraso no pagamento. Existem dois tipos:
    
    *   `Em espécie`: um valor fixo, independentemente do valor total da fatura.
        
    *   `Porcentagem`: calculada como um percentual do valor total da conta.
        

Após preenchimento das informações, clique no botão **.** Será retornado para a tela com os boxes **Finalizando a Compra** e **Parcelas a Pagar**.

Clique no botão para concluir o lançamento da Compra de Diversos e sua respectiva Conta a Pagar.

2.  Clicando no botão será apresentada a seguinte tela:
    

Tela para criar parcelas

Onde:

*   `Número`: Código automático gerado pelo sistema.
    
*   `Código de Barras`: Refere-se ao código de barras do boleto referente a conta que está sendo cadastrada.
    
*   `Competência`: Refere-se ao período específico (mês e ano) que corresponde à data de emissão da conta a pagar. Crucial para a contabilidade, pois determina o período contábil em que a transação deve ser registrada, independentemente da data de pagamento.
    
*   `Data Vencimento`: Indica a data do vencimento da parcela que está sendo gerada da conta a pagar. Crucial para a gestão financeira, pois determina o prazo final para o pagamento de uma obrigação, ajudando a evitar atrasos e penalidades e melhorando o controle do fluxo de caixa.
    
*   `Documento`: Refere-se ao identificador único atribuído a cada conta, facilitando sua identificação dentro do sistema.
    
*   `Valor a Pagar`: Valor total da conta a ser pago.
    
*   `Valor pendente para parcela`: Refere-se ao montante que resta do valor total da conta a pagar após a inclusão de parcelas.
    
    *   Exemplo:
        
        *   Valor total da conta: R$446,12
            
        *   Inserida parcela 1 no valor de R$111,53, será apresentado R$334,59 no campo **Valor pendente para parcela**.
            
        *   Inserida parcela 2 no valor de R$111,53, será apresentado R$223,06 no campo **Valor pendente para parcela**.
            
        *   Inserida parcela 3 no valor de R$111,53, será apresentado R$111,53 no campo **Valor pendente para parcela**.
            
        *   Inserida parcela 4 no valor de R$111,53, será apresentado R$0 no campo **Valor pendente para parcela**.
            
*   `Conta Aplicação`: É onde o valor da parcela da conta a pagar será registrado no livro caixa após sua quitação. Assegurando que todas as transações financeiras estejam corretamente refletidas na contabilidade da empresa, mantendo a precisão e a integridade dos registros financeiros.
    
*   `Boleto`: Permite incluir o arquivo do boleto diretamente nos registros do contas a pagar.
    
*   `Histórico`: É utilizado para fornecer um breve descritivo ou uma nota explicativa sobre o lançamento da parcela. Essencial para registrar informações relevantes que complementam o lançamento financeiro, proporcionando um contexto adicional sobra a transação.
    

:info:atlassian-info:info:#B3D4FF **Observação**: Os campos `Data Vencimento` e `Valor a Pagar` tem seus preenchimentos obrigatórios para a criação da parcela.Guia ENCARGOS1800

Nesta guia constam as informações referentes as multas e juros que podem ser gerados em caso de atraso no pagamento. Preencha de acordo com as informações contidas nas observações do boleto.

*   `Multa`: Refere-se a uma penalidade financeira aplicada a conta a pagar quando o pagamento não é efetuado até a data de vencimento acordada. É uma forma de encorajar o pagamento pontual e compensar o fornecedor pelo atraso no recebimento.
    
*   `Tipo`: Refere-se à forma como a multa é calculada e aplicada na conta a pagar no caso de atraso no pagamento. Existem dois tipos:
    
    *   `Em espécie`: um valor fixo, independentemente do valor total da fatura.
        
    *   `Porcentagem`: calculada como um percentual do valor total da conta.
        
*   `Carência (dias)`: Refere-se ao período adicional concedido após a data de vencimento da conta a pagar, durante o qual o pagamento poderá ser efetuado sem a cobrança de multa ou juros.
    
*   `Juros (ao dia)`: Refere-se à cobrança adicional sobre o valor devido quando o pagamento não é efetuado até a data de vencimento. É calculado com base em um percentual definido e é aplicado diariamente para cada dia de atraso.
    
*   `Tipo`: Refere-se à forma como os juros são calculados e aplicados na conta a pagar no caso de atraso no pagamento. Existem dois tipos:
    
    *   `Em espécie`: um valor fixo, independentemente do valor total da fatura.
        
    *   `Porcentagem`: calculada como um percentual do valor total da conta.
        

Guia DESCONTOS1800

Nesta guia, constam as informações referentes a descontos que podem ser gerados em caso de pagamento efetuado até determinada data. Preencha caso seja destacada essa informação no boleto.

*   `Valor`: Representa o montante ou a porcentagem do valor da conta a pagar que será deduzido.
    
*   `Tipo`: Indica se o desconto é aplicado em valor fixo (R$) ou em percentual (%) do valor total da conta.
    
*   `Pagamento até`: Data limite até a qual o pagamento deve ser efetuado para que o desconto seja aplicado.
    

Após preenchimento das informações, clicar no botão . Será retornado para a tela com os boxes **Finalizando a Compra** e **Parcelas a Pagar**. Repita o processo de inserir parcela até que o campo `Valor Pendente para parcela` esteja zerado.

Clique no botão para concluir o lançamento da Compra de Diversos e sua respectiva Conta a Pagar.

### Outros

A indicação desse tipo de pagamento surte o mesmo efeito que a indicação do tipo de pagamento **A Prazo** detalhado acima com relação a forma que será lançada a conta a pagar.

### Antecipação

A antecipação ocorre quando o pagamento é feito antes da entrega do produto. Isso pode ser requerido como garantia da transação ou para obter condições comerciais mais favoráveis. A antecipação é comum em contratos de fornecimento ou em situações onde é necessário assegurar a disponibilidade de bens ou serviços.

Diferente das outras formas exemplificadas acima, quando o tipo de pagamento indicado é **Antecipação**, é necessário que antes do lançamento da compra tenha sido realizada a **criação** e **quitação** de uma conta a pagar que obedeça aos seguintes requisitos:

*   O valor da conta tem que ser igual ou superior ao valor total da nota.
    
*   O fornecedor da conta tem que ser o mesmo fornecedor da compra que está sendo lançada.
    
*   A origem da conta deve ser indicada como Compra a Faturar.
    

:info:atlassian-info:info:#B3D4FF

**Observação:** Uma mesma conta pode ser utilizada para realizar o pagamento de mais de uma compra, desde que o `Saldo (R$)` disponível da conta seja maior que o valor total da compra.

Para lançar a conta a pagar, verifique o **Módulo Financeiro** de **Contas a Pagar**. Abaixo está um exemplo da conta a pagar lançada seguindo os requisitos destacados.

Exemplo de Conta a Pagar lançada para ser utilizada como Antecipação

Com a Conta a Pagar lançada e quitada seguindo os requisitos informados, ao clicar no botão da tela de lançamento da Compra de Diversos com o campo Forma Pagamento indicando a opção Antecipação, será apresentada a seguinte tela de confirmação:

Tela de confirmação da finalização da nota

Clique no botão para prosseguir. Será apresentada a seguinte tela:

Tela para indicação de conta que será utilizada para finalização da nota com forma de pagamento Antecipação

Onde serão listadas todas as contas que sigam os três requisitos destacados anteriormente com as seguintes informações:

*   `Código`: Código da Conta a Pagar lançada.
    
*   `Emissão`: Data de emissão da Conta a Pagar.
    
*   `Origem`: Indica a origem indicada no momento da criação da conta a pagar.
    
*   `Valor Total (R$)`: Valor total da conta a pagar lançada e quitada.
    
*   `Saldo Disponível (R$)`: Valor de saldo disponível que resta da conta após o consumo do valor total com alguma outra compra.
    

Selecione a conta que será usada para o pagamento e clique no botão . O processo de lançamento será concluído e a compra estará cadastrada no sistema.

* * *

Consulta de Compra de Diversos
------------------------------

Após o lançamento de uma compra, o sistema permite a consulta de todas as informações relacionadas à mesma. Para visualizar os detalhes, acesse o módulo de Compra de Diversos, como mostrado no início do manual. Será apresentada a seguinte tela:

Tela de consulta de notas

Clique no ícone localizado no final da linha do registro da compra a ser visualizada. Será exibida uma tela com todas as informações da nota lançada.

Tela de alterar compra

No box **Alterar Compra**, constam os seguintes botões: , e .

*   Botão : Funciona como um atalho para o **Relatório de Compras**. Ao clicar nele, é aberta uma nova guia com o relatório da Relação de Compras Detalhada da nota em questão:
    

Tela de relatório de compras

*   Botão : Marca a nota como conferida. Ao clicar nesse botão, aparecerá uma tela de confirmação, clique no botão para finalizar a operação.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: A conferência de compra no sistema serve para garantir que os dados da nota recebida estejam corretos e coerentes. Além disso, restringe a exclusão da compra, permitindo esse processo apenas a usuários cadastrados como superusuários.

*   Botão : Realiza a exclusão da nota fiscal no sistema. Ao clicar nesse botão, serão apresentadas as seguintes telas de confirmação:
    

Tela de confirmação do cancelamento da nota

Tela de confirmação do estorno das contas a pagar vinculadas a nota

Clique no botão de ambas as telas para confirmar o cancelamento da compra. A nota continuará cadastrada no sistema, porém com o status de **Cancelada.**

Uma vez cancelada a compra, seja por erro na quantidade de produtos, estoque ou forma de pagamento indicada no momento do lançamento, a mesma pode ser lançada novamente no sistema de forma mais rápida através da **redigitação**.

Para realizar a redigitação da mesma, utilize os filtros para encontrar mais facilmente a nota desejada.

Tela de consulta das notas canceladas

Clique no ícone localizado no final da linha da nota que será redigitada.

Será apresentada a seguinte tela com todas as informações da nota:

Tela geral da nota que será redigitada

Clique no botão . Será apresentada a seguinte tela de confirmação:

Tela de confirmação da redigitação da nota

Clique no botão para confirmar a redigitação.

Verifique as informações da nota no box **Redigitando a Compra** e corrija o que for necessário.

Tela geral da compra que está sendo redigitada

No box **Itens da Compra**, clique no botão para importar automaticamente os itens da nota para a tela, permitindo a conclusão do lançamento. Verifique valores e quantidades e, se necessário, realize as correções apropriadas. Clique no botão para concluir o lançamento.