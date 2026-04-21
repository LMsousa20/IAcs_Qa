---
title: Compra de Combustíveis
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2588685
---

# Compra de Combustíveis

16truenonelisttrue

* * *

Compra de Combustíveis
======================

A Compra de Combustíveis é uma ferramenta utilizada para atualizar o saldo de estoque de combustíveis por meio de Nota Fiscal Eletrônica emitida pelo fornecedor. A compra de combustíveis envolve selecionar, negociar e adquirir os combustíveis necessários para a operação da empresa, seja para revenda ou uso próprio. O objetivo é garantir que os combustíveis sejam obtidos na quantidade certa, ao menor custo e dentro do prazo, evitando atrasos e garantindo a continuidade das operações.

A compra de combustíveis impacta diretamente os custos da empresa, envolvendo gastos com aquisição, transporte e armazenamento. Compras eficientes de combustíveis reduzem os custos totais ao obter melhores preços, condições de pagamento favoráveis e minimizam o capital parado em estoque. Compras mal planejadas aumentam as despesas operacionais, desperdícios e afetam a lucratividade.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Estoque > Compra de Combustíveis

* * *

Será apresentada a seguinte tela:

Tela geral do módulo Compra de Combustíveis

Ao acessar o módulo, a tela principal será exibida, possibilitando o registro dos combustíveis adquiridos e garantindo a correta entrada no estoque.

**Nova Compra de Combustível**

Permite o lançamento de uma nova compra de combustível, possibilitando o registro de combustíveis adquiridos, garantindo a correta entrada no estoque.

**Filtro de Pesquisa**

Facilita a busca das compras de combustíveis já registradas, permitindo filtrar por período, fornecedor e demais critérios disponíveis, agilizando a localização das informações necessárias.

**Visualização**

Permite consultar os detalhes da entrada de compra de combustível já registrada, possibilitando a verificação dos combustíveis que tiveram entrada, suas quantidades e demais informações vinculadas à nota.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , será apresentada a seguinte tela, dividida em três boxes destacados em forma de guias no canto direito da tela:

### Box 1 - Nova Compra de Combustível

O box **Nova Compra de Combustível** assegura que todas as informações fiscais e operacionais relacionadas à compra sejam precisas e devidamente integradas ao sistema. Permite a inserção completa de todos os dados necessários para registrar uma nova compra de combustíveis, baseada na Nota Fiscal Eletrônica (NF-e) emitida pelo fornecedor.

Box Nova Compra de Combustíveis

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `Empresa`: Nome da empresa em que a nota será lançada. É possível selecionar uma empresa diferente da que está atualmente logada para realizar o lançamento, sem a necessidade de sair e entrar em cada empresa separadamente para realizar o processo.
    
*   `Código`: Código gerado automaticamente de forma incremental pelo sistema. Permite o rastreamento e a identificação única de cada recebimento.
    
*   `Data Recebimento` e `Hora`: Data e hora do recebimento do combustível. Importante realizar o lançamento da nota no momento do recebimento para a atualização correta dos custos do combustível nos relatórios de vendas.
    
*   `Turno`: Indica o turno do dia ao qual o combustível foi recebido. Ajuda na gestão logística e operacional, organizando as entradas de acordo com os turnos de trabalho.
    
*   `Modelo`: Indica o modelo da Nota Fiscal, podendo ser:
    
    *   `NF-1 (Nota Fiscal Modelo 1)`: Documento fiscal emitido manualmente em papel, utilizado principalmente por empresas que não emitiam documentos eletrônicos. Consistia em blocos de três vias, autorizados pela Fazenda Estadual via códigos AIDF. Embora seu uso tenha sido substituído pela NF-e, pode ser utilizado temporariamente em casos excepcionais.
        
    *   `Consumidor`: Documento em papel que registrava a venda de bens ao consumidor final, amplamente usado no varejo antes da NFC-e (Nota Fiscal de Consumidor Eletrônica) e do Cupom Fiscal, emitido por ECF.
        
    *   `NF-1B`: Variante da NF-1, destinada a transações no setor de prestação de serviços, mas descontinuada com a introdução obrigatória da NFS-e (Nota Fiscal de Serviços Eletrônica).
        
    *   `NF-e`: Documento digital que registra operações de circulação de mercadorias ou prestação de serviços.
        
    *   `NF Produtor`: Nota fiscal utilizada por produtores rurais para registrar a venda de produtos agrícolas e pecuários.
        
    *   `Recibo`: Documento que comprova o pagamento de um produto ou serviço, mas não possui a mesma validade fiscal que uma NF-e. Usado em situações onde não é exigida a emissão de uma Nota Fiscal completa, como em pequenas vendas ou prestação de serviços por autônomos.
        
*   `Dispositivo`: Dispositivo em que a nota fiscal é emitida. Liberado para edição **somente** quando o **Modelo** indicado é **diferente de NF-e**, podendo ser alterado para:
    
    *   `Bloco`: Refere-se a um formato físico de Nota Fiscal impresso em blocos, onde cada página é uma NF-e separada. Utilizado para a emissão manual de Notas Fiscais, sendo preenchido à mão. Cada bloco contém várias notas, e cada página é destacada conforme é utilizada. Comum entre pequenos comerciantes e autônomos que precisam de um método simples e econômico para emitir Notas Fiscais. É útil em situações onde a emissão eletrônica não é necessária ou disponível.
        
    *   `Formulário`: Refere-se a um formato físico de Nota Fiscal impresso em formulário contínuo. Usado para a emissão de notas fiscais de forma manual ou com o auxílio de uma impressora matricial. Este tipo de dispositivo é comum em empresas que ainda utilizam sistema de emissão de notas fiscais em papel. Ideal para situações onde a emissão eletrônica não é possível ou praticável. Facilita o controle manual e o armazenamento físico de documentos fiscais.
        
    *   `NF-e`: Documento digital que registra operações de circulação de mercadorias ou prestação de serviços, substituindo as notas fiscais de papel. Facilita a automação e a integração dos processos fiscais, proporcionando maior segurança, praticidade e redução de erros.
        
*   `Chave eletrônica`: Chave da Nota Fiscal Eletrônica composta por 44 dígitos. Há quatro formas de inserir a chave eletrônica. Cada maneira será explicada no decorrer do manual:
    

1.  Digitando a chave manualmente.
    
2.  Digitando a chave manualmente e clicando no ícone para que o sistema busque a nota diretamente na SEFAZ e faça o download e manifesto da mesma.
    
3.  Clicando no ícone para que o sistema abra a tela de **Seleção de Notas Destinadas**. Nessa tela serão listadas as notas emitidas para o CNPJ da empresa que constam na base da SEFAZ e que ainda não foram cadastradas no sistema.
    
4.  Clicando no ícone para que o sistema abra o explorador de arquivos do computador e seja indicado o arquivo XML baixado anteriormente no
    

Essas diferentes formas de lançar notas fiscais no sistema proporcionam flexibilidade, precisão e eficiência, adaptando-se a diversas necessidades operacionais garantindo a conformidade com as exigências fiscais.

*   `Série`: Número de série do selo fiscal. Identifica numericamente as notas fiscais emitidas por uma empresa dentro de um período ou tipo de operação específicos. Organiza e controla a emissão dos documentos fiscais, garantindo a sequencialidade e a validade legal das notas emitidas.
    
*   `Documento`: Número único da Nota Fiscal dentro da série. Facilita o rastreamento, referência e gestão das notas fiscais emitidas, essencial para fins contábeis, fiscais e de controle interno.
    
*   `Emissão`: Data em que a Nota Fiscal foi emitida. Crucial para controle fiscal e contábil, além de cumprir prazos legais e contratuais relacionados à operação comercial.
    
*   `Data no LMC`: Refere-se à data em que o combustível efetivamente entrou no tanque. Importante ser indicada a data correta para que não ocorra problema com os saldos escriturais do tanque.
    

:info:atlassian-info:info:#B3D4FF

**Observação:** Verifique nas Medições dos Tanques (localizado **Estoque** → **Auditoria** -> **Medições dos tanques**) se existe a data criada correspondente à data indicada no campo `Data no LMC`. O LMC (Livro de Movimentação de Combustíveis) é um documento obrigatório que registra todo o histórico de movimentação de combustíveis, incluindo o volume recebido, o estoque de abertura e fechamento diário, entre outros dados.

*   `Fornecedor`: Empresa fornecedora do(s) combustível(eis). Permite o registro e o gerenciamento dos dados do fornecedor para futuras referências e consultas.
    
*   `UF`: Sigla do estado em que a empresa fornecedora é localizada. Auxilia na aplicação correta das regras tributárias estaduais e na identificação geográfica das operações comerciais.
    
*   `Pagamento`: Indica a forma de pagamento da compra realizada, podendo ser:
    
    *   `À Vista`: Pagamento integral no momento da transação.
        
    *   `A Prazo`: Pagamento dividido em parcelas ao longo de um período determinado.
        
    *   `Outros`: Compra faturada, com pagamento após a entrega do combustível. Tem o mesmo comportamento no sistema do tipo **A Prazo**.
        
    *   `Antecipação`: Pagamento adiantado antes do recebimento da nota fiscal.
        

 Guia FRETE:1800

*   `Tipo Frete`: Indica o método pelo qual o transporte do combustível é realizado, podendo ser:
    
    *   `Sem cobrança de frete`: O vendedor assume o custo do transporte, não sendo cobrado do comprador.
        
    *   `Por conta do Remetente – CIF`: O vendedor paga o frete até o destino final da mercadoria e assume o risco durante o transporte.
        
    *   `Por conta do Destinatário – FOB`:  O comprador paga o frete e assume o risco a partir do momento em que a mercadoria é entregue ao transportador.
        
    *   `Por conta de Terceiros`: O frete é pago por uma pessoa ou empresa que não seja o vendedor ou o comprador, conforme acordado.
        
    *   `Próprio por conta do Remetente`: O vendedor utiliza sua própria frota ou transporte para realizar a entrega da mercadoria.
        
    *   `Próprio por conta do Destinatário`: O comprador utiliza sua própria frota ou transporte para receber a mercadoria no destino final.
        
*   `Vencimento`: Refere-se à data limite para o pagamento do frete, quando aplicável.
    
*   `Transportadora`: Informe o nome da transportadora responsável pelo frete do combustível.
    
*   `Conhecimento`: Refere-se ao número do CT-e (Conhecimento de Transporte Eletrônico), um documento digital que acompanha o transporte de cargas no Brasil. Ele substitui os documentos em papel e possui validade jurídica por meio de assinatura digital.

* * *

### Box 2 - Itens da Compra

No box **Itens da Compra** são inseridos e listados os combustíveis adquiridos pela empresa por meio da Nota Fiscal que está sendo lançada. Esses combustíveis terão seus volumes registrados em seus respectivos tanques,  assegurando precisão nas aquisições e no planejamento financeiro da empresa.

Box Itens da Compra

Esse box é crucial para garantir que todos os combustíveis adquiridos sejam devidamente registrados no sistema, atualizando tanto o custo no cadastro dos combustíveis como seus respectivos saldos nos tanques. Os campos apresentados são:

*   `Num.`: Número sequencial da listagem dos itens da nota.
    
*   `Cod. Barras`: Código de barras vinculado ao produto.
    
*   `Produto`: Descrição do combustível comprado.
    
*   `CFOP`: Código que identifica a operação fiscal, importante para a tributação e contabilização correta.
    
*   `Uni.`: Indica a quantidade em litros do combustível adquirido.
    
*   `Valor Caixa`: Indica o valor do litro do combustível.
    
*   `Despesas`: Custos adicionais relacionados à aquisição do combustível, como transporte ou seguro.
    
*   `Desconto`: Reduções no preço do combustível, devido a promoções ou acordos.
    
*   `Saldo`: Indica o saldo do combustível em estoque após a entrada do produto.
    
*   `Valor Total`: Cálculo final do valor de cada item, multiplicando `Litros` pelo `Valor Unitário (R$)` (campos localizados na tela de detalhe dos itens).
    

* * *

### Box 3 - Impostos e Totais

O box de **Impostos e Totais** é utilizado para registrar informações dos impostos aplicáveis de acordo com a legislação vigente e os dados fornecidos na nota fiscal. Além disso, ele resume os valores totais da compra, garantindo que todas as informações fiscais e financeiras estejam corretas e atualizadas.

Box Impostos e Totais

Guia FUNDO DE COMBATE A POBREZA (FCP):1800

*   `Valor FCP (R$)`: O valor total do adicional do FCP cobrado sobre a operação de venda ou prestação de serviço.
    
*   `FCP Subst. (R$)`: O valor do FCP devido na operação de substituição tributária, onde a responsabilidade pelo pagamento do imposto é atribuída a um terceiro, geralmente o fornecedor.
    
*   `FCP Sub Ret. (R$)`: O valor do FCP retido anteriormente na cadeia produtiva, que já foi pago em uma etapa anterior e está sendo destacado na nota para fins de controle e compensação.
    

Guia ICMS:1800

*   `Base ICMS (R$)`: Base ICMS (R$): O valor total da base de cálculo do ICMS sobre combustíveis, que serve de referência para a aplicação do imposto. Este valor corresponde ao montante das mercadorias ou serviços relacionados ao combustível sobre o qual o ICMS será calculado.
    
*   `Valor ICMS (R$)`: O valor do ICMS calculado sobre a base de cálculo.
    
*   `Base ICMS Sub. (R$)`: É o valor utilizado como referência para calcular o ICMS devido em operações de substituição tributária, onde um intermediário paga o imposto antecipadamente por toda a cadeia de distribuição.
    
*   `Valor ICMS Sub. (R$)`: É o valor do ICMS que deve ser pago na operação de substituição tributária, calculado com base no valor da Base ICMS Sub. (R$).
    

Guia OUTROS:1800

*   `Total IPI (R$)`: O valor total do Imposto sobre Produtos Industrializados (IPI) cobrado sobre combustíveis vendidos. Refere-se ao somatório do valor do IPI destacado nos combustíveis na nota fiscal.
    
*   `Valor Frete (R$)`: Valor do frete destacado diretamente no XML, aplicável ao transporte de combustíveis. Este valor é destacado principalmente quando o vendedor é responsável pelo transporte ou quando a legislação ou contrato exige a informação do frete. Ao destacar o valor do frete no XML da NF-e, as empresas asseguram a correta escrituração fiscal e o cumprimento das obrigações tributárias, além de garantir transparência e precisão nas transações comerciais envolvendo combustíveis.
    
*   `Valor Seguro (R$)`: Valor do seguro destacado diretamente no XML, aplicável quando o seguro faz parte da operação comercial de combustíveis. Garante a proteção dos combustíveis durante o transporte.
    
*   `Despesas (R$)`: Refere-se ao somatório das despesas destacadas nos combustíveis na nota fiscal. Inclui custos adicionais envolvidos na aquisição do combustível.
    
*   Desconto (R$): Refere-se ao somatório de descontos destacados nos combustíveis na nota fiscal. Reduz o valor total dos combustíveis adquiridos, refletindo promoções ou negociações.
    
*   `CBS Mono`: Valor da CBS no regime monofásico, preenchido automaticamente conforme o XML da nota e o enquadramento fiscal.
    
*   `IBS Mono`: Valor do IBS no regime monofásico, preenchido automaticamente conforme o XML da nota e as regras fiscais.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: O regime monofásico é aplicado, principalmente, a produtos como **combustíveis**, onde a tributação ocorre de forma concentrada na origem (refinaria, produtor ou importador). Nessas operações, as etapas posteriores da cadeia não destacam novamente o tributo, sendo essencial que os valores informados estejam corretos para garantir a **conformidade fiscal e escrituração adequada**.

*   Botões e distribuem nos itens da nota o valor indicado nos campos `Despesas (R$)` e `Desconto (R$)`, respectivamente, de forma proporcional ao valor total de cada item com relação ao valor total da nota.
    

Guia TOTAIS:1800

*   `Total Produtos (R$)`: Valor total dos combustíveis na nota fiscal, sem incluir impostos como FCP ou ICMS, despesas adicionais ou descontos.
    
*   `Total da Nota (R$)`: Valor total da nota fiscal, composto pelo seguinte cálculo:
    

 Total Produtos (R$) **+** FCP Subst. (R$) **+** Valor ICMS Sub. (R$) **+** Total IPI (R$) **+** Valor Frete (R$) **+** Valor Seguro (R$) **+** Despesas (R$) **–** Desconto (R$)

:info:atlassian-info:info:#B3D4FF

**Observação:** Todos esses campos precisam ter seus valores indicados tanto no box **Impostos e Totais** como no box **Itens da Compra**, exceto os campos `Valor Frete (R$)` e `Valor Seguro (R$)`, que não existem nas opções do box **Itens da Compra**.

* * *

Inclusão de Nova Compra de Combustíveis - Manual
------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Flexibilidade**: Ideal para situações em que a nota fiscal é recebida em formato impresso ou enviada por fornecedores sem o arquivo XML.
    
*   **Simples e Direto**: Método direto sem necessidade de navegação adicional.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Caso a empresa ainda não possua o certificado digital, a única maneira de fazer lançamento de nota fiscal no sistema é dessa forma.

Acesse o módulo de Compra de Combustíveis e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Combustível**, preencha os campos de `Empresa`, `Data de Recebimento`, `Hora` e `Turno`.

Indique o `Modelo` e `Dispositivo` da nota que está sendo lançada. Por padrão, são indicadas as opções `NF-e` e `NF-e`**.**

Digite os 44 dígitos da chave da nota fiscal. Isso preencherá automaticamente os campos `Série`, `Documento`, `Fornecedor` e `UF` de acordo com as informações presentes no número da chave. Indique a data de `Emissão` da nota.

Box Nova Compra de Combustíveis (Inclusão Manual)

Verifique e corrija, se necessário, os campos da forma de `Pagamento` e `Tipo Frete`.

Com essas informações preenchidas de forma manual no box de **Nova Compra de Combustíveis**, prossiga para o próximo box.

No box de **Itens da Compra**, será necessário inserir manualmente os combustíveis adquiridos.

Box Itens da Compra (Inclusão Manual)

Para isso, clique no botão , será apresentada a seguinte tela:

Tela para Indicação do combustível manualmente

Onde:

*   `Número`: Indica o número do item que está sendo adicionado. Gerado automaticamente pelo sistema.
    
*   `Cod. Tanque`: Número referente ao tanque do combustível.
    
*   `Combustível`: Descrição do combustível.
    
*   `Saldo da Descarga`: Volume restante no tanque no momento da descarga.
    

Guia REFERÊNCIAS DO PRODUTO1800

*   `CFOP`: Código Fiscal de Operações e Prestações. Após indicação do combustível, esse campo é preenchido com o código informado na opção `Compra Interna` ou `Compra Fora` do cadastro de Departamento Fiscal indicado no cadastro do produto indicado. Caso o fornecedor da nota seja de um estado diferente do estado da empresa, será utilizado o CFOP indicado no campo `Compra Fora`. Caso o fornecedor seja do mesmo estado, será utilizado o CFOP indicado em `Compra Interna`.
    
*   `CST`: Código de Situação Tributária.
    
*   `CSOSN`: Código de Situação da Operação no Simples Nacional.
    
*   `NCM`: Código do NCM (Nomenclatura Comum do Mercosul) do produto informado.
    
*   `CEST`: Código Especificador da Substituição Tributária.
    

Guia VALORES1800

*   `Litros`: Refere-se à quantidade de litros de combustível.
    
*   `Valor Unitário (R$)`: Refere-se ao valor de custo por litro.
    
*   `Despesas (R$)`: Refere-se ao valor da despesa destacada no item.
    
*   `Desconto (R$)`: Refere-se ao valor de desconto destacado no item.
    
*   `Valor IPI (R$)`: Refere-se ao valor do IPI correspondente ao item.
    
*   `Valor Total (R$)`: Refere-se ao valor total do combustível, sendo composto pelo seguinte cálculo: `Litros` \* `Valor Unitário (R$)`.
    

Guia FUNDO DE COMBATE A POBREZA (FCP)1800

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

*   `% Aliq. ad rem`: Indica o valor da alíquota fixa da CBS por unidade de medida (ex.: litro ou kg), conforme definido pela legislação para produtos sujeitos ao regime monofásico.
    
*   `Valor (R$)`: Apresenta o valor total da CBS calculado com base na `% alíquota ad rem` e na quantidade do produto informada na nota fiscal.
    

Guia IBS1800

*   `% Aliq. ad rem`: Indica o valor da alíquota fixa do IBS por unidade de medida (ex.: litro ou kg), conforme definido pela legislação para produtos sujeito ao regime monofásico.
    
*   `Valor (R$)`: Apresenta o valor total do IBS calculado com base na % alíquota ad rem e na quantidade do produto informada na nota fiscal.
    

:info:atlassian-info#B3D4FF

**Observação**: Atualmente, os valores da alíquota ainda não estão totalmente definidos, podendo sofrer alterações conforme regulamentação futura.

Clique na opção **Combustível**. Será apresentada uma tela de seleção com os combustíveis cadastrados e seus respectivos tanques.

Tela para pesquisa e seleção do combustível manualmente

É possível pesquisar tanto pelo código do tanque como pela descrição do combustível. Selecione o tanque que será reabastecido, conforme o combustível especificado na nota.

O sistema retornará para a tela de informações do item com os campos `CFOP`, `CST`, `NCM`, `CEST` e `Valor Unitário (R$)` preenchidos de acordo com as informações contidas no cadastro do combustível e departamento fiscal, podendo ser alterados caso haja a necessidade.

Tela para indicação do combustível manualmente preenchida

Preencha os campos das guias **VALORES, FUNDO DE COMBATE A POBREZA (FCP) e ICMS** de acordo com as informações contidas na DANFE da nota.

Após preenchimento e conferência das informações do combustível, clique no botão . Caso a nota tenha mais de um tipo de combustível, repita o processo de inclusão até que todos os itens estejam incluídos.

O sistema retornará para o box de **Itens da Compra**, com a listagem dos combustíveis que foram adicionados e suas respectivas informações resumidas.

Box Itens da Compra após inclusão do combustível manualmente

Sendo possível a distribuição nos tanques, edição ou exclusão dos itens adicionados, clicando nos ícones , e , respectivamente.

:info:atlassian-info:info:#B3D4FF

**Observação:** Esse processo de inclusão e exclusão de combustíveis é possível **SOMENTE** quando o lançamento da nota é realizado de forma **MANUAL.** Ao realizar o lançamento por **download da nota**, **busca** ou **indicação de arquivo XML**, os itens são inseridos de forma automática. Nesses casos, não é possível adicionar novos itens manualmente nem os excluir, apenas distribuir os combustíveis nos tanques e editá-los.

Na hipótese de haver mais de um tanque contendo o mesmo tipo de combustível, poderá ser necessário proceder com a distribuição do volume entre os diferentes tanques.

Ao clicar no ícone , aparecerá a seguinte tela:

Tela de distribuição de tanques

Onde:

*   `Combustível`: Descrição do combustível comprado.
    
*   `Qtd. Comprada`: Quantidade total em litros do combustível.
    

Guia TANQUES:1800

*   `Cod. Tanque`: Número referente ao tanque do combustível.
    
*   `Saldo atual`: Saldo em litros que possui no estoque.
    
*   `Quantidade`: A quantidade que será distribuída para cada tanque.
    

Após distribuição do volume entre os tanques, clique em . Será apresentada a seguinte tela:

Tela de Itens da Compra de combustíveis distribuídos

No box **Impostos e Totais**, verifique cada campo e certifique-se de que todos estejam com seus valores corretos.

  Após isso, clique no botão para finalizar a entrada da nota e ser direcionado para o lançamento do boleto no contas a pagar, podendo ser realizado de três maneiras que serão apresentadas posteriormente.

* * *

Inclusão de Nova Compra de Combustíveis - Download da Nota Donwload-da-nota
---------------------------------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Precisão dos dados**: Reduz a chance de erros de digitação ao permitir que o sistema preencha automaticamente os detalhes da nota fiscal.
    
*   **Conformidade Legal**: Garante que os dados da nota fiscal sejam precisos e estejam em conformidade com as informações oficiais da SEFAZ.
    

Acesse o módulo de Compras de Combustíveis e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Combustíveis**, preencha os campos de `Empresa`, `Data Recebimento`, `Hora` e `Turno`.

Indique o  `Modelo` e `Dispositivo` da nota que está sendo lançada. Por padrão, são indicadas as opções `NF-e` e `NF-e`, respectivamente.

Digite os 44 dígitos da chave da nota fiscal. Clique no ícone para que seja realizado a busca, download e manifesto da mesma direto na SEFAZ. Isso **preencherá** e **bloqueará** automaticamente os campos `Modelo`, `Dispositivo`, `Série`, `Documento`, `Emissão`, `Fornecedor` e `UF` de acordo com as informações presentes no XML da chave.

Box Nova Compra de Combustíveis (Inclusão por download da nota)

Verifique e corrija, se necessário, os campos da forma de `Pagamento` e `Tipo Frete`.

Com essas informações conferidas no box de **Nova Compra de Combustíveis**, prossiga para o próximo box. sequencia-lançamento-nota

No box de **Itens da Compra**, o(s) combustível(is) da nota será(ão) automaticamente inserido(s) no box com suas respectivas informações de valores e quantidade.

Box Itens da Compra com combustível indicado após download da nota

Mesmo sendo realizado o download do XML, é necessário fazer a conferência dos valores e quantidade de cada combustível para que o saldo e custo do mesmo seja atualizado de forma correta.  

Para isso, clique no ícone , será apresentada a seguinte tela:

Tela para conferência do combustível preenchido após download da nota

Os campos `Cod. Tanque` e `Combustível` permitem edição, porém as alteração não são efetivadas, mantendo os dados originais do item da nota. O campo `Saldo da Descarga` poderá ser modificado.

Os campos `CFOP`, `CST`, `NCM` e `CEST` serão preenchidos de acordo com as informações contidas no cadastro do combustível e departamento fiscal, podendo ser alterados caso haja a necessidade. Verifique e corrija, caso necessário, os campos das guias **VALORES**, como `Litros` ou `Valor Unitário (R$)`.

Os valores das guias **FUNDO DE COMBATE A POBREZA (FCP)** e **ICMS** serão preenchidos de acordo com as informações contidas no XML da nota.

Após conferência das informações do item de combustível, clique no botão . Caso a nota tenha mais de um tipo de combustível, repita o processo de verificação até que todos os itens estejam com as informações corretas.

No box **Impostos e Totais**, verifique cada campo e certifique-se de que todos estejam com seus valores corretos. Note que na guia **TOTAIS**, o campo `Total Produtos (R$)` estará bloqueado para edição uma vez que essa informação necessita estar de acordo com o valor puxado no XML da nota.

Após isso, clique no botão para finalizar a entrada da nota e ser direcionado para o lançamento do boleto no contas a pagar, podendo ser realizado de três maneiras que serão apresentadas posteriormente.

* * *

Inclusão de Nova Compra de Combustíveis - Buscar Notas Buscar-notas
-------------------------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Verificação completa**: Apresenta uma visão abrangente de todas as notas pendentes, garantindo que nenhuma nota seja esquecida ou omitida.
    
*   **Economia de Tempo**: Reduz o tempo necessário para buscar e lançar notas fiscais ao centralizar todas as notas disponíveis em uma única tela de seleção.
    

Acesse o módulo de Compras de Combustíveis e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Combustíveis**, preencha os campos de `Empresa`, `Data Recebimento`, `Hora` e `Turno`.

Indique o  `Modelo` e `Dispositivo` da nota que está sendo lançada. Por padrão, são indicadas as opções `NF-e` e `NF-e`, respectivamente.

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

Marque a nota que deseja lançar e clique no botão **.** O sistema irá buscar, efetuar o download e o manifesto da chave marcada para prosseguir com o lançamento da nota. A partir desse momento, o restante do processo de lançamento é idêntico ao exemplificado em Inclusão de nova compra – Download da Nota, sendo necessário a verificação dos itens e seus respectivos custos e quantidades, além dos totais da nota.

:info:atlassian-info:info:#B3D4FF **Observação:** Caso não seja apresentada nenhuma informação na tela de **Seleção de Notas Destinadas**, acesse o menu **Estoque** → **Fiscal** → **Manifesto de Destinatário** e clique no botão para que o sistema faça a consulta diretamente na SEFAZ e traga para o sistema todas as notas pendentes de cadastro que foram emitidas para o CNPJ da empresa.

* * *

Inclusão de Nova Compra de Combustíveis - Arquivo XML Arquivo-XML
-----------------------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Segurança e Confiabilidade**: Ao utilizar o arquivo XML, assegura a precisão dos dados fiscais e reduz a possibilidade de inconsistências.
    
*   **Backup e Referência**: Mantém um registro digital do XML da nota fiscal, útil para auditorias e consultas futuras.
    

Acesse o módulo de Compras de Combustíveis e clique no botão para cadastrar uma nova compra:

No box **Nova Compra de Combustíveis**, preencha os campos de `Empresa`, `Data Recebimento`, `Hora` e `Turno`. 

Indique o  `Modelo` e `Dispositivo` da nota que está sendo lançada. Por padrão, são indicadas as opções `NF-e` e `NF-e`, respectivamente.

Na `Chave Eletrônica`, clique no ícone . Será apresentado o explorador de arquivos do computador para indicação do arquivo XML baixado anteriormente no Portal da Nota Fiscal Eletrônica ([https://www.nfe.fazenda.gov.br/portal/principal.aspx](https://www.nfe.fazenda.gov.br/portal/principal.aspx)). Encontre o arquivo em seu computador e clique em **Abrir**.

O XML será importado para o sistema e os campos dos três painéis serão preenchidos de acordo com as informações do arquivo. A partir desse momento, o restante do processo é idêntico ao exemplificado em Inclusão de nova compra – Download da Nota, sendo necessário a verificação dos itens e seus respectivos custos e quantidades, além dos totais da nota.

* * *

Formas de Pagamento
-------------------

Ao cadastrar uma nova compra de combustível no sistema, é necessário informar qual a forma de pagamento que será utilizada para quitar a conta a pagar gerada referente à aquela compra. Essa informação é indicada no **Box Nova Compra de Combustíveis**, no campo **Pagamento**. As opções disponíveis incluem **À Vista**, **A Prazo**, **Outros** e **Antecipação**.

 Abaixo serão exemplificadas detalhadamente a finalização da compra com cada forma de pagamento.

### À Vista

Esta opção é utilizada quando o pagamento é efetuado integralmente no ato da compra. É a forma mais comum e simples de pagamento, onde o comprador liquida a dívida imediatamente, independentemente do tipo de finalizadora utilizada, seja em dinheiro, depósito, cartão de crédito/débito.

Ao clicar no botão da tela de lançamento da Compra de Combustível, será apresentada a seguinte tela de confirmação: 

Tela de confirmação da finalização da nota

Clique no botão para prosseguir. Será apresentada a seguinte tela:

Tela de lançamento e quitação do contas a pagar

Indique o `Centro de Resultado` ao qual essa compra deverá ser associada. São apresentados também os campos com o `Valor da Compra (R$)` e o `Valor Pendente (R$)`, que é atualizado a cada novo pagamento adicionado.

Na guia **LISTA DE PAGAMENTOS**, serão apresentadas detalhadamente cada tipo de finalizadora utilizada para compor o valor total da compra que foi paga, trazendo informações como **Número**, **Pagamento**, **Conta** **Origem**, **Conta** **Aplicação** e **Valor** **Pago** **(R$)** de cada uma.

Para incluir um novo tipo de pagamento, clique no botão , será apresentada a seguinte tela:

Tela para incluir pagamento de compra com o pagamento à Vista

Indique o `Tipo Pagamento` com a finalizadora correta usada para o pagamento da compra, podendo ser `Dinheiro`, `Depósito Bancário`, `Cheque à Vista`, `Cheque a Prazo`, `Cartão de Crédito`, `Cartão de Débito`, `Carteira Digital` ou `PIX`, e o `Valor a Pagar` referente ao mesmo. 

Na guia **CONTAS**, informe as `Conta Origem` e `Conta Aplicação` referentes ao pagamento, que por padrão são configuradas na  operação 001 PAGAMENTOS DE FORNECEDOR  das **Contas Padrão** ( localizado em **Cadastro** -> **FINANCEIRO** -> **Contas do Caixa**), podendo ser alteradas caso haja a necessidade.

Clique no botão após preenchimento das informações. Refaça o processo para cada tipo de pagamento até que o valor total a pagar seja completado.

Tela com a lista de pagamentos indicados

Após inclusão da(s) forma(s) de pagamento, revise se as informações inseridas estão corretas e clique no botão para finalizar o lançamento da nota.

### A Prazo

Nesse caso, o pagamento é parcelado em uma série de pagamentos futuros. As condições, como o número de parcelas, taxas de juros e datas de vencimento, são acordadas previamente entre o comprador e o vendedor. Essa forma de pagamento é comum para compras de maior valor, permitindo que o comprador distribua o custo ao longo do tempo.

Ao clicar no botão da tela de lançamento da Compra de Combustíveis, será apresentada a seguinte tela de confirmação:

Tela de confirmação da finalização da nota

Clique no botão para prosseguir. Será apresentada a seguinte tela:

Tela para incluir pagamento de compra com o pagamento a Prazo

No box **Finalizando a Compra**, os campos `Acréscimo (R$)` e `Desconto (R$)` devem ser preenchidos de acordo com a informação do boleto, caso estejam destacados. É possível indicar um `Histórico` para fácil identificação da conta.

No box **Parcelas a Pagar**, serão incluídas as parcelas referentes ao pagamento que deverá ser efetuado. Podem ser incluídas de **duas** maneiras:

1.  Clicando no botão , será apresentada a seguinte tela:
    

Tela para gerar parcelas

O campo `Data Vencimento (Ref)` tem seu preenchimento obrigatório, uma vez que ele servirá como referência para o vencimento das parcelas a serem geradas da conta a pagar. Caso haja necessidade, preencha o campo `Observação` com uma descrição das parcelas que estão sendo geradas.

Guia PARCELAS:1800

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

 Clique no botão para concluir o lançamento da Compra de Combustíveis e sua respectiva Conta a Pagar.

2.  Clicando no botão , será apresentada a seguinte tela:
    

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
        
        *   Valor total da conta: R$21.758,00
            
        *   Inserida parcela 1 no valor de R$5.439,50, será apresentado R$16.318,50 no campo `Valor pendente para parcela`.
            
        *   Inserida parcela 2 no valor de R$5.439,50, será apresentado R$10.879,00 no campo `Valor pendente para parcela`.
            
        *   Inserida parcela 3 no valor de R$5.439,50, será apresentado R$5.439,50 no campo `Valor pendente para parcela`.
            
        *   Inserida parcela 4 no valor de R$5.439,50, será apresentado R$0 no campo `Valor pendente para parcela`.
            
*   `Conta Aplicação`: É onde o valor da parcela da conta a pagar será registrado no livro caixa após sua quitação. Assegurando que todas as transações financeiras estejam corretamente refletidas na contabilidade da empresa, mantendo a precisão e a integridade dos registros financeiros.
    
*   `Boleto`: Permite incluir o arquivo do boleto diretamente nos registros do contas a pagar.
    
*   `Histórico`: É utilizado para fornecer um breve descritivo ou uma nota explicativa sobre o lançamento da parcela. Essencial para registrar informações relevantes que complementam o lançamento financeiro, proporcionando um contexto adicional sobra a transação.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Os campos `Data Vencimento` e `Valor a Pagar` tem seus preenchimentos obrigatórios para a criação da parcela.

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
        

Guia DESCONTOS1800

Nesta guia, constam as informações referentes a descontos que podem ser gerados em caso de pagamento efetuado até determinada data. Preencha caso seja destacada essa informação no boleto.

*   `Valor`: Representa o montante ou a porcentagem do valor da conta a pagar que será deduzido.
    
*   `Tipo`: Indica se o desconto é aplicado em valor fixo (R$) ou em percentual (%) do valor total da conta.
    
*   `Pagamento até`: Data limite até a qual o pagamento deve ser efetuado para que o desconto seja aplicado.
    

Após preenchimento das informações, clicar no botão . Será retornado para a tela com os boxes **Finalizando a Compra** e **Parcelas a Pagar**. Repita o processo em caso de inserir parcela até que o campo `Valor Pendente para parcela` esteja zerado.

Clique no botão para concluir o lançamento da Compra de Combustíveis e sua respectiva Conta a Pagar.

### Outros

A indicação desse tipo de pagamento surte o mesmo efeito que a indicação do tipo de pagamento **A Prazo** detalhado acima com relação a forma que será lançada a conta a pagar.

### Antecipação

A antecipação ocorre quando o pagamento é feito antes da entrega do produto. Isso pode ser requerido como garantia da transação ou para obter condições comerciais mais favoráveis. A antecipação é comum em contratos de fornecimento ou em situações onde é necessário assegurar a disponibilidade de bens ou serviços.

 Diferente das outras formas exemplificadas acima, quando o tipo de pagamento indicado é `Antecipação`, é necessário que antes do lançamento da compra tenha sido realizada a **criação** e **quitação** de uma conta a pagar que obedeça aos seguintes requisitos:

*   O valor da conta tem que ser igual ou superior ao valor total da nota.
    
*   O fornecedor da conta tem que ser o mesmo fornecedor da compra que está sendo lançada.
    
*   A origem da conta deve ser indicada como Compra a Faturar.
    

:info:atlassian-info:info:#B3D4FF

**Observação:** Uma mesma conta pode ser utilizada para realizar o pagamento de mais de uma compra, desde que o `Saldo (R$)` disponível da conta seja maior que o valor total da compra.

Para lançar a conta a pagar, verifique o Módulo Financeiro de Pagamentos - Inclusão manual no Contas a Pagar. Abaixo está um exemplo da conta a pagar lançada seguindo os requisitos destacados.

Exemplo de conta a pagar lançada para ser utilizada como Antecipação

Com a Conta a Pagar lançada seguindo os requisitos informados, ao clicar no botão da tela de lançamento da Compra de Diversos, será apresentada a seguinte tela de confirmação:

Tela de confirmação da finalização da nota

Clique no botão para prosseguir. Será apresentada a seguinte tela:

Tela para indicação de conta que será utilizada para finalização da nota com forma de pagamento Antecipação

Onde serão listadas todas as contas que sigam os três requisitos destacados anteriormente com as seguintes informações:

*   `Código`: Código da Conta a Pagar lançada.
    
*   `Emissão`: Data de emissão da Conta a Pagar.
    
*   `Origem`: Indica a origem indicada no momento da criação da conta a pagar.
    
*   `Valor Total (R$)`: Valor total da conta a pagar lançada e quitada.
    
*   `Saldo disponível (R$)`: Valor de saldo disponível que resta da conta após o consumo do valor total com alguma outra compra.
    

Selecione a conta que será usada para o pagamento e clique no botão . O processo de lançamento será concluído e a compra estará cadastrada no sistema.

* * *

Consulta de Compra de Combustíveis
----------------------------------

Após o lançamento de uma compra, o sistema permite a consulta de todas as informações relacionadas à mesma. Para visualizar os detalhes, acesse o módulo de Compra de Combustíveis, como mostrado no inicio do manual. Será apresentada a seguinte tela:

Tela consulta de notas

Clique no ícone localizado no final da linha do registro da compra a ser visualizada. Será exibida uma tela com todas as informações da nota lançada.

Tela de alterar compra

No box **Alterar Compra**, constam os seguintes botões: , , e .

*   Botão : Funciona como um atalho para o **Relatório de Compras**. Ao clicar nele, é aberta uma nova guia com o relatório da Relação de Compras Detalhadas da nota em questão:
    

Tela de relatório de compras

*   Botão : Funciona para registrar os dados completos da avaliação de qualidade do combustível, garantindo o controle e a rastreabilidade dos parâmetros analisados. Ao clicar neste ícone aparecerá a seguinte tela:
    

Tela de Registro de Análise de Qualidade

Clique no botão , aparecerá a seguinte tela para adicionar as informações de análise de qualidade:

Tela de cadastro de registro e analise de qualidade

Abaixo estão os campos e informações que devem ser registrados nesse box:

Dados do Recebimento1800

*   `Produto`: Identifica o tipo de produto analisado (Exemplo: Gasolina, Etanol, Diesel).
    
*   `Lacre`: Código ou número do lacre do tanque ou recipiente, garantindo que o produto não foi adulterado.
    
*   `Responsável`: Nome da pessoa responsável pelo recebimento do produto, geralmente uma pessoa da empresa que está recebendo o combustível ou a amostra.
    
*   `Analista`: Nome do profissional que realizou a análise laboratorial da amostra para verificar a qualidade do produto.
    
*   `Motorista`: Nome da pessoa responsável por transportar o produto até o local de destino, garantindo a rastreabilidade do processo.
    
*   `Identidade do Motorista`: Documento de identificação do motorista para registro e controle de quem entregou o produto (Exemplo: RH, CNH ou outro documento oficial).
    
*   `Transportadora`: Nome da empresa responsável pelo transporte do produto.
    
*   `CPF/CNPJ Transportadora`: Número de identificação da transportadora, sendo o CPF se for uma pessoa física (Motorista ou Autônomo) ou CNPJ se for uma empresa.
    
*   `Placa caminhão`: Número de identificação da placa do caminhão que transportou o combustível, importante para controle de logística e rastreamento.
    
*   `Placa reboque`: Número de identificação da placa do reboque, caso tenha sido utilizado um reboque no transporte.
    

Dados da Análise1800

*   `Nº da amostra`: Número que identifica unicamente a amostra analisada, garantindo rastreabilidade e referência futura.
    
*   `Teor alcoólico anidro`: Concentração de álcool em um produto que não contém água (usado, por exemplo, no etanol anidro).
    
*   `Teor alcoólico AEHC`: Refere-se ao teor de etanol anidro, presente na amostra de gasolina ou etanol.
    
*   `Massa Especifica a 20º C`: Refere-se à massa por unidade de volume do produto a uma temperatura específica de 20ºC. É um parâmetro fundamental para avaliar a qualidade e o rendimento do combustível.
    
*   `Densidade`: Medida da concentração de massa em relação ao volume do combustível, geralmente expressa em kg/m³. A densidade afeta o desempenho do motor e a eficiência energética do combustível.
    
*   `Temperatura`: Refere-se à temperatura na qual a amostra foi analisada. A variação de temperatura pode influenciar a densidade e outras propriedades do combustível.
    
*   `Cor`: Característica visual da amostra de combustível, que pode ser determinada pela presença de corantes.
    
*   `Aspecto`: Observação do estado físico do combustível, como limpo, turvo, presença de sedimentos ou impurezas, e se está livre de contaminações visíveis.
    

Após o preenchimentos dos campos, verifique se as informações estão corretas e clique no botão . Caso haja mais de um tipo de combustível na nota, realize o mesmo procedimento para cada um.

Tela de listagem de analise de qualidade

Depois de registrada, a análise pode ser editada ou apresentada em forma de relatório:

*   Caso seja necessário alterar alguma informação da análise, clique no ícone ao lado da análise do combustível. A tela de edição será aberta, modifique as informações necessárias e clique no botão .
    
*   Para abrir o relatório da análise, clique no ícone ao lado da análise do combustível. Será aberta uma nova guia com o relatório do Registro de Análise Qualidade de Combustível da análise em questão, detalhando os resultados e informações específicas da amostra analisada:
    

Tela de relatório de registro de analise de qualidade

:info:atlassian-info:info:#B3D4FF

**Observação**: O botão abre uma nova guia com o relatório do Registro de Análise Qualidade de Combustível com todas as análises cadastradas na nota em questão.

*   Botão : Marca a nota como conferida. Ao clicar nesse botão, aparecerá uma tela de confirmação, clique no botão para finalizar a operação.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: A conferência de compra no sistema serve para garantir que os dados da nota recebida estejam corretos e coerentes. Além disso, restringe a exclusão da compra, permitindo esse processo apenas a usuários cadastrados como superusuários.

*   Botão : Realiza a exclusão da nota fiscal no sistema. Ao clicar nesse botão, serão apresentadas as seguintes telas de confirmação:
    

Tela de confirmação do cancelamento da nota

Tela de confirmação do estorno das contas a pagar vinculadas a nota

Clique no botão de ambas as telas para confirmar o cancelamento da compra. A nota continuará cadastrada no sistema, porém com o status de **Cancelada.**

:info:atlassian-info#B3D4FF

Uma vez cancelada a compra, a mesma pode ser lançada novamente no sistema de forma mais rápida através da **redigitação**.

Para realizar a redigitação da mesma, utilize os filtros para encontrar mais facilmente a nota desejada.

Tela de consulta das notas canceladas

Clique no ícone localizado no final da linha da nota que será redigitada.

Será apresentada a seguinte tela com todas as informações da nota para efeito de consulta das informações:

Clique no botão . Será apresentada a seguinte tela de confirmação:

Clique no botão para confirmar a redigitação.

Verifique as informações da nota no box **Redigitando a Compra** e corrija o que for necessário.

No box **Itens da Compra**, clique no botão para importar automaticamente os itens da nota para a tela, permitindo a conclusão do lançamento. Verifique os valores e quantidades e, se necessário, realize as correções apropriadas. Em seguida, clique no botão para finalizar o lançamento.