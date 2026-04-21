---
title: NF-e de Entrada
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/72318998
---

# NF-e de Entrada

16truenonelisttrue

Nota Fiscal Eletrônica de Entrada (NF-e de Entrada)
===================================================

A **Nota Fiscal Eletrônica de Entrada (NF-e de Entrada)** é um documento fiscal digital que registra a entrada de mercadorias no estabelecimento, sendo de extrema importância para o controle fiscal e contábil. Essa funcionalidade permite a **emissão** de uma nota fiscal utilizando o **CNPJ da própria empresa** quando há necessidade de documentar a entrada de produtos, como em devoluções, importações ou aquisições de produtos sem nota fiscal.

Alguns exemplos de utilização são:

*   **Devolução de Mercadorias**: Um cliente devolve um produto que não estava conforme o esperado. O estabelecimento que recebe a devolução emite uma Nota Fiscal de Entrada para o próprio CNPJ para registrar a entrada do produto devolvido no estoque.
    
*   **Compra sem Nota**: Se um fornecedor não emitiu a nota fiscal corretamente, o comprador pode emitir uma Nota Fiscal de Entrada para regularizar a situação fiscal da mercadoria adquirida.
    

Resumindo, emite-se quando a mercadoria **entra** no estabelecimento.

:note:atlassian-note#B3D4FF

**Observação:** Para realizar a emissão da Nota Fiscal de Entrada (NF-e de Entrada), é necessário que um certificado digital válido seja cadastrado no sistema. Para configurá-lo, acesse o menu **Cadastro** \-> **Fiscal ->** **Certificados Digitais**. Além disso, é necessário que o CNPJ esteja ativo e que a empresa possua registro regular na SEFAZ (Secretaria da Fazenda).

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > NF-e de Entrada

* * *

Será apresentada a seguinte tela:

Tela de Listagem de Notas

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e a emissão das **notas fiscais de entrada (NF-e)** já emitidas. Esta tela é organizada para facilitar a navegação, a consulta e o controle das NF-es.

**Emitir Nova Nota Fiscal de Entrada**

Permite registrar a emissão de uma nota fiscal de entrada no sistema. Essa funcionalidade deve ser utilizada em situações em que seja necessário documentar a entrada de produtos no posto, como nos casos de devolução de venda, aquisição de produtos sem nota fiscal do fornecedor ou quando uma compra é realizada e o posto recebe apenas uma NFC-e, sendo necessária a emissão de uma nota de entrada para registro fiscal.

**Filtro de Pesquisa**

Facilita a busca da nota fiscal de entrada (NF-e) já cadastradas, por meio de filtros como empresa, período, tipo de nota, status da NF-e, cliente, valores entre outros agilizando a localização das informações necessárias.

**Visualização**

Permite consultar os detalhes de uma nota fiscal de entrada (NF-e) já cadastrada, possibilitando a visualização das informações fiscais, valores, impostos e dados vinculados ao documento.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , será apresentada a seguinte tela, dividida em cinco boxes destacados em forma de abas no canto direito da tela:

### Box 1 - Nova Nota Fiscal de Entrada #nota-fiscal-entrada

O box **Nova Nota Fiscal de Entrada** é onde são inseridos os dados gerais da nota. Esses dados são fundamentais para a emissão da nota fiscal, garantindo conformidade fiscal e organizacional.

Box Nova Nota Fiscal de Entrada

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `Empresa`: Empresa que realizará a emissão da nota. É possível selecionar uma empresa diferente da que está atualmente logada para realizar a emissão, sem a necessidade de sair e entrar em cada empresa separadamente para realizar o processo.
    
*   `Código`: Código gerado automaticamente de forma incremental pelo sistema.
    
*   `Emitida`: Indica se a nota já foi ou não oficialmente emitida, transmitida e autorizada à SEFAZ.
    
*   `Tipo da Emissão`: Define o tipo de emissão da nota, podendo ser:
    
    *   `Normal`: Utilizado para justificativa de ajustes de estoque decorrentes de contagem ou correção de duplicidades de vendas no PDV.
        
    *   `Devolução de Venda`: É utilizada quando a nota fiscal registrada refere-se a uma devolução de mercadoria que havia sido previamente vendida. Neste caso, o objetivo é formalizar o retorno do produto, ajustando o estoque e regularizando as obrigações fiscais relacionadas à devolução.
        
*   `Contingência`: Indica se a nota foi emitida em modo de contingência ou não. O modo de contingência permite emitir notas fiscais quando há falha na conexão com a SEFAZ, garantindo a continuidade das operações. As notas emitidas são regularizadas posteriormente, quando a comunicação com a SEFAZ é normalizada.
    
*   `Emissão`: Indica a data em que a nota fiscal foi emitida, servindo como um registro importante do momento em que a transação foi formalizada.
    
*   `Data`: Indica a data em que a mercadoria entrou no estabelecimento do destinatário.
    

:note:atlassian-note#B3D4FF

**Observação**: Os campos de `Emissão` e `Data` podem ser diferentes, pois a emissão da nota pode ocorrer antes do despacho ou entrega da mercadoria, dependendo dos processos administrativos e logísticos da empresa.

*   `Hora`: Hora em que a mercadoria entrou no estabelecimento.
    
*   `Fatura`: Permite referenciar uma fatura previamente gerada para emissão da Nota Fiscal. Ao selecionar a fatura, as informações do cliente e dos itens presentes na fatura são automaticamente importadas para a nota, facilitando o preenchimento e garantindo a consistência dos dados.
    
*   `Ref. Cupom`: Permite referenciar um cupom fiscal emitido anteriormente. Ao selecionar o cupom, apenas os itens da venda são importados para a Nota Fiscal, proporcionando agilidade na emissão de notas relacionadas a cupons.
    

:note:atlassian-note#B3D4FF

**Observação**: Os campos `Fatura` e `Ref. Cupom` serão habilitados **apenas** no módulo de **NF-e de Saída**.

*   `Modelo`: Indica o modelo da nota fiscal que será emitida. Disponível apenas o modelo NF-e.
    
*   `Série`: Numeração que separa as notas em lotes, útil para organização fiscal. Identifica numericamente as notas fiscais emitidas por uma empresa dentro de um período ou tipo de operação específicos. Organiza e controla a emissão dos documentos fiscais, garantindo a sequencialidade e a validade legal das notas emitidas.
    
*   `Subsérie`: Uma subdivisão dentro da série para categorizar notas.
    
*   `Documento`: Número único da Nota Fiscal dentro da série. Pode ser gerado pelo sistema clicando no ícone .
    
*   `Cliente`: Pessoa ou empresa destinatária dos produtos descritos na nota.
    
*   `UF`: Sigla do estado onde o cliente destinatário está localizado.
    
*   `Usar Preço`: Método de precificação adotado para os itens que serão indicados na nota, podendo ser:
    
    *   `De Venda`: Utiliza o preço de venda ao consumidor final.
        
    *   `Último Custo`: Aplica o último valor de aquisição registrado para o produto.
        
    *   `Custo Médio`: Aplica o valor da média ponderada dos custos das aquisições anteriores do produto.
        
*   `Pagamento`: Indica a forma de pagamento da nota que será emitida, podendo ser:
    
    *   `À Vista`: Pagamento integral no momento da transação.
        
    *   `A Prazo`: Pagamento dividido em parcelas ou com vencimento em data futura.
        
    *   `Outros`: Métodos de pagamento que não se enquadram nas opções anteriores.
        
*   `Forma Pagamento`: As formas de pagamento disponíveis no sistema incluem:
    
    *   `Dinheiro`: Pagamento em espécie.
        
    *   `Cheque`: Pagamento por cheque.
        
    *   `Cartão de Crédito`: Pagamento utilizando cartão de crédito.
        
    *   `Cartão de Débito`: Pagamento utilizando cartão de débito.
        
    *   `Crédito Loja`: Pagamento por meio de crédito concedido pelo próprio estabelecimento.
        
    *   `Vale Alimentação`: Pagamento utilizando cartões ou vouchers de vale alimentação.
        
    *   `Vale Refeição`: Pagamento utilizando cartões ou vouchers de vale refeição.
        
    *   `Vale Presente:` Pagamento realizado por meio de vale presente (gift card).
        
    *   `Vale Combustível`: Pagamento utilizando vouchers ou cartões específicos para combustível.
        
    *   `Duplicata Mercantil`: Título de crédito com vencimento futuro.
        
    *   `Boleto Bancário`: Documento bancário gerado para pagamento em data posterior.
        
    *   `Depósito Bancário`: Transferência direta de valores para conta bancária.
        
    *   `Pagamento Instantâneo [PIX]`: Transferência instantânea via sistema PIX.
        
    *   `Transferência/Carteira Digital:` Pagamentos via plataformas digitais ou aplicativos de carteira digital.
        
    *   `Programa de Fidelidade, Cashback, Crédito Virtual`: Pagamento ou desconto usando pontos, créditos de programas de fidelidade ou créditos virtuais.
        
    *   `Sem Pagamento`: Quando não há pagamento envolvido na transação.
        
    *   `Outros`: Método não listado. (Como permuta, por exemplo)
        

:note:atlassian-note#B3D4FF

**Observação**: Caso seja selecionada a opção `Outros`, o sistema habilitará o campo `Descrição [Outros]` para que sejam fornecidos detalhes adicionais sobre o método utilizado.

*   `Tipo Frete`: Indica o método pelo qual o transporte das mercadorias é realizado, podendo ser:
    
    *   `Sem cobrança de Frete`: O vendedor assume o custo do transporte, não sendo cobrado do comprador.
        
    *   `Por conta do Remetente - CIF`: O vendedor paga o frete até o destino final da mercadoria e assume o risco durante o transporte.
        
    *   `Por conta do Destinatário - FOB`: O comprador paga o frete e assume o risco a partir do momento em que a mercadoria é entregue ao transportador.
        
    *   `Por conta de Terceiros`: O frete é pago por uma pessoa ou empresa que não seja o vendedor ou o comprador, conforme acordado.
        
    *   `Próprio por conta do Remetente`: O vendedor utiliza sua própria frota ou transporte para realizar a entrega da mercadoria.
        
    *   `Próprio por conta do Destinatário`: O comprador utiliza sua própria frota ou transporte para receber a mercadoria no destino final.
        
*   `Modalidade da Nota`: Indica o tipo de operação relacionada à emissão da NF-e:
    
    *   `Própria`: Para notas emitidas pela própria empresa, relacionadas à entrada de mercadorias.
        
    *   `Saneamento`: Aplicada a serviços de saneamento básico.
        
    *   `Energia, Água e Gás`: Utilizada em transações envolvendo fornecimento de energia elétrica, água ou gás.
        
    *   `Telecomunicação`: Modalidade utilizada para notas fiscais relacionadas a serviços de telecomunicações, como telefonia e internet.
        

:note:atlassian-note#B3D4FF

**Observação**: Caso seja selecionada a opção `Energia, Água e Gás`, o sistema habilitará os campos `Tipo da Ligação` e `Grupo de Tensão` para serem preenchidos.

*   `Chave Eletrônica (NF-e)`: Sequência numérica de 44 dígitos gerados no momento da emissão da nota. Identifica de forma única a Nota Fiscal Eletrônica no sistema da Receita Federal.
    
*   `Chave Eletrônica da NF-e Referenciada`: Utilizada quando a nota fiscal em questão faz referência a outra NF-e, como no caso de devoluções ou complementos. Informa a chave da NF-e previamente emitida ou recebida.
    
*   `Cód. Retorno` e `Mensagem`: Esses campos exibem o código e a mensagem de retorno gerados pela Secretaria da Fazenda (SEFAZ) após o envio da NF-e. Eles indicam se a nota foi aprovada, rejeitada ou se há pendências a corrigir.
    

* * *

### Box 2 - Dados Adicionais

Permite o preenchimento de informações complementares para a entrada de mercadorias. É uma interface destinada à gestão detalhada da movimentação fiscal e logística de mercadorias recebidas.

Box Dados Adicionais

Abaixo estão os campos e informações que podem ser registrados nesse box:

Guia DADOS DA ADMINISTRADORA 1800

*   `Administradora`: Indica a administradora do cartão utilizado no pagamento.
    
*   `Autorização`: Indica a autorização do cartão.
    
*   `Integrado`: No processo integrado, o cliente realiza o pagamento com cartão no momento da criação da nota e essa informação é automaticamente registrada na Nota Fiscal de Entrada quando emitida.
    

:note:atlassian-note#B3D4FF

**Observação**: Esses campos serão habilitados apenas se a `Forma de Pagamento` selecionada for `Cartão de Crédito` ou `Cartão de Débito`.

Guia DADOS DO TRANSPORTE1800

*   `Transportadora`: Campo que identifica a empresa responsável pela realização do transporte da mercadoria.
    
*   `Qtd. Volumes`: Quantidade total de volumes ou unidades que compõem a carga transportada.
    
*   `Espécie`: Tipo de mercadoria ou produto que está sendo transportado.
    
*   `Peso Bruto`: Peso total da carga, incluindo a embalagem e todos os materiais que a acompanham.
    
*   `Peso Líquido`: Peso da mercadoria sem considerar a embalagem, representando apenas o peso do produto.
    
*   `Marca`: Identificação do fabricante ou fornecedor do produto transportado.
    
*   `Numeração`: Código ou número sequencial que identifica a carga ou o documento de transporte.
    
*   `Placa`: Registro da placa do veículo utilizado para o transporte da mercadoria.
    

:note:atlassian-note#B3D4FF

**Observação**: Esses campos serão habilitados apenas se o `Tipo de Frete` selecionado for **diferente** de `Sem Cobrança de Frete`.

Guia DADOS DA DEVOLUÇÃO1800

*   `Modelo`: Indica o modelo do documento fiscal utilizado na devolução, que pode variar de acordo com o tipo de operação fiscal.
    
*   `Emissão`: Refere-se à data em que o documento original foi emitido.
    
*   `UF`: Sigla da Unidade Federativa (Estado) onde o documento foi emitido.
    
*   `CNPJ`: Número do Cadastro Nacional da Pessoa Jurídica do cliente indicado no documento fiscal original.
    
*   `Série`: Número da série do documento fiscal original.
    
*   `Documento`: Número do documento fiscal original, utilizado para referência e identificação da devolução.
    
*   `Chave da NF-e Referenciada`: Código único de 44 dígitos que identifica o documento fiscal original, permitindo a vinculação exata da devolução ao documento de origem.
    

:note:atlassian-note#B3D4FF

**Observação**: Esses campos serão habilitados apenas se o `Tipo da Emissão` selecionado for `Devolução de Venda`.

* * *

### Box 3 - Itens da Nota

No box **Itens da Nota** são inseridos e listados os produtos que farão parte da Nota Fiscal que está sendo emitida. Esses itens terão seus saldos registrados no sistema para controle de estoque e contabilização. Assim, o sistema não apenas promove uma gestão mais eficiente do estoque, mas também garante a conformidade com as obrigações fiscais, permitindo que todas as entradas sejam justificadas de forma clara e organizada.

Box Itens da Nota

Os campos apresentados são:

*   `Núm.`: Número sequencial de itens listados.
    
*   `Estoque`: Indica o estoque, caso o item indicado seja um produto diverso, ou indica o número do tanque cadastrado, caso o item indicado seja um combustível.
    
*   `Cod. Barras`: Código de barras que identifica o produto de forma única.
    
*   `Produto`: Descrição do item inserido na nota fiscal.
    
*   `CFOP`: Código Fiscal de Operações e Prestações, que define a natureza da operação.
    
*   `Saldo`: Soma da quantidade de itens já registrada no estoque com a quantidade de itens indicada na nota de entrada.
    
*   `% ICMS`: Percentual aplicado do ICMS sobre o item.
    
*   `Qtd.`: Quantidade do produto inserido na nota.
    
*   `Valor Unitário`: Preço de cada unidade do produto.
    
*   `Desconto`: Redução aplicada ao valor total da nota.
    
*   `Total`: Valor final do item, calculado pela fórmula **Qtd.** x **Valor Unitário**.
    

* * *

### Box 4 - Impostos e Totais

O box de **Impostos e Totais** é utilizado para registrar informações dos impostos aplicáveis de acordo com a legislação vigente. Além disso, ele resume os valores totais da nota, garantindo que todas as informações fiscais e financeiras estejam corretas e atualizadas.

Box Impostos e Totais

Guia FUNDO DE COMBATE A POBREZA (FCP):1800

*   `Valor FCP (R$)`: O valor total do adicional do FCP cobrado sobre a operação de venda ou prestação de serviço.
    
*   `FCP Subst. (R$)`: O valor do FCP devido na operação de substituição tributária, onde a responsabilidade pelo pagamento do imposto é atribuída a um terceiro, geralmente o fornecedor.
    
*   `FCP Sub Ret. (R$)`: O valor do FCP retido anteriormente na cadeia produtiva, que já foi pago em uma etapa anterior e está sendo destacado na nota para fins de controle e compensação.
    

:note:atlassian-note#B3D4FF

**Observação:**

O Fundo de Combate à Pobreza (FCP) é um a**dicional de ICMS aplicado em algumas operações**, conforme a legislação de cada estado. Nem todos os produtos ou operações estão sujeitas a esse imposto, portanto os campos de FCP **somente serão preenchidos quando houver incidência do adicional na nota fiscal**.

Guia ICMS:1800

*   `Base ICMS (R$)`: O valor total da base de cálculo do ICMS sobre a qual o imposto será aplicado. É o valor das mercadorias ou serviços que serve de referência para o cálculo do ICMS.
    
*   `Valor ICMS (R$)`: O valor do ICMS calculado sobre a base de cálculo.
    
*   `Base ICMS Sub. (R$)`: É o valor utilizado como referência para calcular o ICMS devido em operações de substituição tributária, onde um intermediário paga o imposto antecipadamente por toda a cadeia de distribuição.
    
*   `Valor ICMS Sub. (R$)`: É o valor do ICMS que deve ser pago na operação de substituição tributária, calculado com base no valor da Base ICMS Sub. (R$).
    
*   `Valor Não Tributado ICMS (R$)`: Valor de mercadorias que estão isentos ou não sujeitos ao ICMS.
    
*   `Valor Terceiros (R$)`: Valor relacionado a terceiros envolvidos na operação, como intermediários ou prestadores de serviços.
    

:note:atlassian-note#B3D4FF

**Observação**: Os campos `Valor Não Tributado ICMS (R$)` e `Valor Terceiros (R$)` serão habilitados **apenas** se a `Modalidade da Nota` for do tipo `Saneamento`, `Energia, Água e Gás` ou `Telecomunicação`.

Guia CBS/IBS1800

*   `Valor CBS (R$)`: Apresenta o valor total de CBS da nota fiscal de entrada. O sistema realiza a soma automática dos valores de CBS informados em cada item da nota, exibindo neste campo o total consolidado.
    
*   `Valor IBS (R$)`: Apresenta o valor total de IBS da nota fiscal. O sistema realiza a soma automática dos valores de IBS informados em cada item da nota, exibindo neste campo o total consolidado.
    
*   `Valor IBS Municipal (R$)`: Apresenta o valor total da parcela do IBS destinada ao Município, quando essa informação estiver destacada na nota fiscal.
    
*   `Valor CBS Mono (R$)`: Apresenta o **valor total da CBS sujeito ao regime monofásico**, conforme destacado nos itens da Nota Fiscal de Entrada. No regime monofásico, a tributação ocorre de forma concentrada em etapa anterior da cadeia (refinaria ou importador), podendo o valor do imposto já estar recolhido na origem.
    
*   `Valor IBS Mono (R$)`: Apresenta o **valor total de IBS sujeito ao regime monofásico**, geralmente vinculado a combustíveis com tributação específica por quantidade.
    

:note:atlassian-note#B3D4FF

**Observações:**

1.  Para que as tags referentes aos impostos CBS e IBS s**ejam destacadas corretamente no XML** da **NF-e** e da **NFC-e**, é necessário que o parâmetro correspondente esteja devidamente configurado no sistema. Para verificar essa configuração, acesse: **Menu Opções -> Sistema -> Guia Fiscal -> Campo Gerar CBS/IBS para NF-e/NFC-e.**
    
2.  No momento, os campos `Valor CBS Mono (R$)` e `Valor IBS Mono (R$)` permanecerão zerados. Isso ocorre porque as regras e alíquotas específicas para a tributação monofásica da CBS e IBS sobre combustíveis ainda dependem de definição oficial na legislação.
    
3.  No período de **05/01/2026 a 31/12/2026**, durante a fase de testes da Reforma Tributária, as alíquotas de **CBS (0,9%)** e **IBS (0,1%)** serão aplicadas nas operações com **tributação integral**, como ocorre com os **produtos diversos** (Departamento CBS IBS GERAL). Para **combustíveis**, as alíquotas de teste não se aplicam, pois esses produtos seguem a regra de **tributação monofásica**.
    

Guia OUTROS:1800

*   `Aliq. ISS (R$)`: Percentual aplicado sobre o valor do serviço para calcular o ISS (Imposto Sobre Serviços).
    
*   `Base ISS (R$)`: Valor total sobre o qual o ISS será calculado, correspondente ao preço dos serviços.
    

:note:atlassian-note#B3D4FF

**Observação:** Os campos de **ISS** devem ser preenchidos somente quando a `Modalidade da Nota` for `Energia, Água e Gás`, e são utilizados para fins de desconto tributário, possibilitando a compensação de créditos fiscais na exportação dos dados ao **SPED**.

*   `Valor Frete (R$)`: Valor do frete destacado diretamente no XML. Ocorre principalmente quando o vendedor é o responsável pelo transporte ou quando o valor do frete deve ser informado por exigência legal ou contratual. Ao destacar o valor do frete no XML da NF-e, as empresas garantem a correta escrituração fiscal e o alinhamento com as obrigações tributárias, além de assegurar transparência e precisão nas transações comerciais.
    
*   `Valor Seguro (R$)`: Valor do seguro destacado diretamente no XML. Ocorre em situações onde o seguro faz parte integrante da operação comercial e é relevante para a transação. Garante a proteção dos bens durante o transporte.
    
*   `Despesas (R$)`: Refere-se ao somatório das despesas destacadas nos produtos da nota fiscal. Inclui custos adicionais envolvidos na aquisição.
    
*   `Desconto (R$)`: Refere-se ao somatório de descontos destacados nos produtos da nota fiscal. Reduzem o valor total dos produtos adquiridos, refletindo promoções ou negociações.
    
*   Botão : Distribui o valor informado em `Despesas (R$)` entre os itens da nota, de forma proporcional ao valor de cada item em relação ao total da nota.
    
*   Botão : Distribui o valor informado em `Desconto (R$)` entre os itens da nota, de forma proporcional ao valor de cada item em relação ao total da nota.
    

Guia TOTAIS:4000

*   `Total Produtos (R$)`: É o valor total dos produtos da nota fiscal, sem incluir impostos como FCP ou ICMS, despesas adicionais ou descontos.
    
*   `Total da Nota (R$)`: É o valor total da nota fiscal, sendo composto pelo seguinte cálculo:
    

**Total Produtos (R$) + FCP Subst. Ret (R$) + Valor ICMS Sub. (R$) + Total IPI (R$) + Valor Frete (R$) + Valor Seguro (R$) + Despesas (R$) – Desconto (R$).**

:note:atlassian-note#B3D4FF

**Observação:**

Em **2026**, os novos tributos da Reforma Tributária (**CBS e IBS**) podem ser informados na nota fiscal, porém **não compõem o valor total da nota**. Assim, o cálculo total continuará considerando os tributos atualmente vigentes, como **ICMS**, **PIS** e **COFINS**, quando aplicáveis.  
A partir de **2027**, com a **extinção do PIS e da COFINS,** passará a ser aplicada a **CBS**, que **passará a compor o cálculo do valor total da nota fiscal**, conforme as regras da nova legislação tributária.

* * *

### Box 5 - Dados Complementares

O box **Dados Complementares** é uma funcionalidade para incrementar o documento com informações adicionais importantes. Ele permite a inclusão de detalhes como a comunicação personalizada com o destinatário, facilitando o envio de mensagens e orientações específicas. Além disso, esse box possibilita a formatação adequada do documento, assegurando que todas as informações relevantes estejam presentes e que o formato final atenda aos padrões exigidos para envio ou impressão.

Box dados complementares

*   `Observação`: Campo destinado ao registro de informações complementares na NF-e de Entrada. O conteúdo informado ficará salvo como padrão, sendo automaticamente preenchido nas próximas emissões, garantindo padronização e evitando redigitação.
    
*   `Impressão`: Permite selecionar o formato de impressão do documento:
    
    *   `Retrato`: Formato vertical do papel.
        
    *   `Paisagem`: Formato horizontal do papel.
        
*   Ao selecionar a opção `Emitir e-mail para o Destinatário`, o sistema enviará tanto o arquivo **XML** da nota fiscal quanto o **DANFE** (Documento Auxiliar da Nota Fiscal Eletrônica), garantindo que o destinatário receba a documentação completa necessária para validação e conferência da transação.
    
*   `E-mail Destinatário`: Campo destinado à inserção do e-mail do destinatário, possibilitando o envio automático do documento por e-mail. Se o e-mail já estiver cadastrado no cadastro do cliente, ele será preenchido automaticamente a partir das informações do cadastro.
    
*   Botão : Grava o texto informado no campo `Observação`, definindo-o como padrão nas informações complementares da Nota Fiscal de Entrada. Após salvo, a informação será automaticamente preenchida nas próximas emissões de notas fiscais. **Para alterar a observação padrão, atualize o texto e clique novamente no botão.**
    
*   Botão : Exclui o texto padrão previamente gravado no campo `Observação`. Após a exclusão, o campo permanecerá em branco nas próximas emissões, até que uma nova observação seja informada e salva.
    

:note:atlassian-note#B3D4FF

**Observação**: Para que o envio do e-mail funcione corretamente, acesse o **Menu Opções -> Sistema** **\->** **Guia SMTP -> Guia CONFIGURAÇÕES SMTP** e realize a configuração dos campos necessários.

* * *

Emissão de Nota Fiscal de Entrada - Tipo Normal
-----------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Registro de Compras e Controle de Estoque**: Permite que a empresa registre oficialmente a entrada de mercadorias ou insumos adquiridos, garantindo a atualização correta do estoque e facilitando o controle sobre os itens disponíveis.
    
*   **Apropriação de Créditos Fiscais**: Com a emissão da nota fiscal, a empresa pode se apropriar de créditos de impostos, como o ICMS ou o IPI, quando aplicáveis, reduzindo a carga tributária.
    
*   **Agilidade na Emissão:** A emissão interna de notas fiscais de entrada permite um processo mais rápido e ágil, evitando atrasos na formalização das entradas de produtos.
    

:note:atlassian-note#B3D4FF

**Observação**: Para emitir a nota fiscal de Entrada (NF-e) através deste módulo, é indispensável que o computador utilizado possua um **certificado digital válido** instalado, além de um CNPJ ativo e registro regular na SEFAZ (Secretaria da Fazenda). O certificado digital serve para autenticar a identidade da empresa emissora e garantir a segurança e validade jurídica das transações eletrônicas junto à SEFAZ.

Acesse o módulo de Notas Fiscais de Entrada e clique no botão para emitir uma nova nota:

No box **Nova Nota Fiscal de Entrada**, preencha os campos de `Empresa`, `Tipo da Emissão`, `Contingência`, `Emissão`, `Data` e `Hora`.

No campo `Cliente`, clique no ícone . Será apresentada a seguinte tela:

Tela para seleção do cliente

Selecione o destinatário da nota.

Box Criar Nova Nota Fiscal - Tipo Normal

Verifique e corrija, se necessário, os campos `Usar Preço`, `Pagamento`, `Forma de Pagamento`, `Tipo de Frete`, `Modalidade da Nota` e `Chave Eletrônica da NFe Referenciada`.

Com essas informações preenchidas no box de **Nova Nota Fiscal de Entrada**, prossiga para o próximo box.

No box de **Dados Adicionais**, caso a **Forma de Pagamento** seja **Cartão de Crédito** ou **Cartão de Débito**, será necessário inserir a administradora e autorização manualmente, caso não tenha integração com o TEF.

Box Dados Adicionais

Com as informações preenchidas nos boxes anteriores, prossiga para o próximo box.

No box **Itens da Nota**, será necessário inserir os produtos, sejam eles produtos diversos ou combustíveis.

Box Itens da Nota

Para isso, clique no botão . Será apresentada a seguinte tela:

Tela para indicação do produto manualmente

*   `Número`: Indica o número sequencial do item, utilizado para identificar e organizar os itens listados na nota.
    
*   `Estoque` ou `Tanque de Combustível`: Indica o estoque, caso o item indicado seja produto diverso, ou o número do tanque, caso o item indicado seja produto do tipo combustível.
    
*   `Cod. Barras`: Código de barras do produto cadastrado.
    
*   `Produto`: Descrição do produto que está sendo inserido na nota fiscal.
    
*   `Atu. Saldo`: Indica se após a emissão da nota, o saldo do item indicado será atualizado ou não no sistema.
    

:note:atlassian-note#B3D4FF

**Observação**: Este campo é atualizado automaticamente de acordo com o **CFOP informado**. Para verificar essa configuração, acesse **Menu Cadastro → Fiscal → Tabelas de CFOP** e consulte, no cadastro do CFOP correspondente, se o campo `Altera o Saldo` está definido como `Sim`.

*   `Pedido`: Número do pedido de compra relacionado à transação que originou a nota fiscal.
    
*   `Número do Item do Pedido`: Identificador específico do item dentro do pedido de compra, garantindo precisão na correspondência entre pedido e nota.
    

Guia REFERÊNCIAS DO PRODUTO:1800

*   `CFOP (Código Fiscal de Operações e Prestações)`: Código que identifica a natureza da circulação da mercadoria ou prestação de serviço, utilizado para fins fiscais.
    
*   `CST (Código de Situação Tributária)`: Identifica a situação tributária do produto quanto ao ICMS (Imposto sobre Circulação de Mercadorias e Serviços).
    
*   `CSOSN (Código de Situação da Operação no Simples Nacional)`: Código utilizado pelas empresas enquadradas no Simples Nacional para indicar a situação tributária da operação quanto ao ICMS.
    
*   `NCM (Nomenclatura Comum do Mercosul)`: Código utilizado para classificar produtos no comércio internacional e determinar a tributação incidente, como o IPI (Imposto sobre Produtos Industrializados).
    
*   `CEST (Código Especificador da Substituição Tributária)`: Código que identifica mercadorias sujeitas ao regime de substituição tributária, utilizado para harmonizar a aplicação do ICMS em diferentes estados.
    

Guia VALORES:1800

*   `Quantidade`: Quantidade de **unidades do produto** que está sendo inserido na nota fiscal.
    
*   `Valor Unitário (R$)`: **Preço por unidade do produto**, utilizado para calcular o valor total da transação.
    
*   `Despesas (R$)`: **Valor de despesas adicionais** que podem ser incluídas no custo do produto (como frete ou seguros).
    
*   `Desconto (R$)`: Valor do desconto concedido sobre o item, reduzindo o valor final da nota.
    
*   `Valor Total (R$)`: Valor total do item na nota fiscal, calculado pela fórmula **Quantidade** x **Valor Unitário**.
    

Guia FUNDO DE COMBATE A POBREZA (FCP)1800

*   `% FCP`: Indica a **alíquota do FCP** aplicada na operação. Esse percentual é utilizado para calcular o valor do FCP a partir da `Base FCP (R$)`.
    
*   `Base FCP (R$)`: Corresponde ao **valor utilizado como base para o cálculo do FCP** na operação. Essa base normalmente segue o **mesmo valor utilizado para a base de cálculo do ICMS**.
    
*   `Valor FCP (R$)`: Mostra o **valor do FCP calculado sobre a alíquota** (`% FCP`) informada na operação. Esse valor representa o adicional destinado ao FCP destacado na nota fiscal, quando aplicável.
    
*   `% FCP ST`: Indica a **alíquota do FCP** **aplicada nas operações sujeitas à Substituição Tributária**. Esse percentual é utilizado para calcular o valor do FCP a partir da `Base FCP (R$)`.
    
*   `Base FCP Subst. (R$)`: Corresponde ao **valor utilizado com base de cálculo do FCP nas operações sujeitas à Substituição Tributária**. Nesse caso, o imposto é recolhido antecipadamente pelo contribuinte, normalmente o fornecedor.
    
*   `Valor FCP Subst. (R$)`: Apresenta o **valor do FCP calculado** sobre a `Base FCP Subst. (R$)`. Esse valor representa o **FCP recolhido antecipadamente pelo fornecedor**, quando a operação está sujeita o regime de Substituição Tributária.
    

:note:atlassian-note#B3D4FF

**Observação:**

O Fundo de Combate à Pobreza (FCP) é um a**dicional de ICMS aplicado em algumas operações**, conforme a legislação de cada estado. Nem todos os produtos ou operações estão sujeitas a esse imposto, portanto os campos de FCP **somente serão preenchidos quando houver incidência do adicional na nota fiscal**.

Guia ICMS1800

*   `% ICMS`: Indica a **alíquota de ICMS** aplicada na operação. Esse percentual é utilizado para calcular o valor do imposto a partir da base ICMS (R$).
    
*   `Base ICMS (R$)`: Corresponde ao **valor utilizado como base para cálculo do ICMS** na nota fiscal de entrada.
    
*   `Valor ICMS (R$)`: Mostra o **valor do ICMS calculado** sobre a `Base ICMS (R$)`, conforme a alíquota (`% ICMS`) aplicada na operação.
    
*   `Base ICMS Sub. (R$)`: Corresponde ao valor utilizado como **base de cálculo para o ICMS por Substituição Tributária (ICMS-ST)**.
    
*   `Valor ICMS Sub. (R$)`: Mostra o **valor do ICMS por Substituição Tributária (ICMS-ST)** calculado sobre a `Base ICMS Sub. (R$)`.
    

:note:atlassian-note#B3D4FF

*   **Combustíveis:** O ICMS segue o regime **monofásico**, sendo recolhido **uma única vez na origem da cadeia**, geralmente pela refinaria. Dessa forma, nas etapas de **distribuição e revenda não há novo recolhimento do ICMS**. O **serviço de transporte**, quando intermunicipal ou interestadual, pode possuir **ICMS próprio**, por se tratar de uma prestação de serviço.
    

**Observação**: Para entradas de combustíveis, recomenda-se realizar o lançamento pelo módulo Compra de Combustíveis.

*   **Produtos Diversos:** Nos produtos classificados como **diversos**, o ICMS segue a **tributação normal**. Quando a mercadoria **não está sujeita à Substituição Tributária (ICMS-ST)**, o imposto é **gerado na venda realizada pelo posto e incluído na apuração do ICMS do período**. Já quando **há ICMS-ST**, o imposto **já foi recolhido anteriormente pelo fornecedor**, não havendo novo recolhimento pelo posto na revenda.
    

Guia CBS/IBS1800

*   `CST`: Código que indica **como a operação será tributada** em relação aos impostos **CBS e IBS**, como por exemplo incidência normal ou isenção.
    
*   `Classificação Tributária`: Define **qual regra de tributação será aplicada à operação**, orientando o sistema sobre **como calcular os impostos CBS e IBS**.
    
*   `Base CBS/IBS`: Valor utilizado como **base para o cálculo dos impostos CBS e IBS**.
    

:note:atlassian-note#B3D4FF

**Observação:**

O sistema possui **dois departamentos padrão vinculados aos tributos CBS e IBS,** utilizados para definir o tratamento tributários dos produtos:

*   **Combustíveis**: Destinado a **produtos com tributação monofásica** (ex.: gasolina, diesel e etanol). Nesses casos, os tributos **CBS e IBS são recolhidos anteriormente na cadeia**, normalmente pelo fornecedor.
    
    *   **Enquadramento comum**: CST 620 e Classificação Tributária 620006.
        
        *   **Exemplo**: Venda de 100 litros de gasolina → Base de cálculo: 100 litros
            

*   **Geral**: Destinado aos **demais produtos comercializados pelo posto**, como lubrificantes, aditivos e itens de conveniência. Nesses casos, os tributos **CBS e IBS são calculados sobre o valor da operação**.
    
    *   **Enquadramento comum**: CST 000 e Classificação Tributária 000001.
        
        *   **Exemplo**: Venda de produto por R$ 500,00 → Base de cálculo: R$ 500,00
            

Guia CBS1800

*   `% Aliq. Nominal`: Indica a **alíquota nominal da CBS** aplicada à operação
    
*   `% Redução`: Indica o **percentual de redução aplicado sobre a alíquota nominal da CBS**, quando houver benefício fiscal ou regra específica para a operação.
    
*   `% Aliq. Efetiva`: Apresenta a **alíquota efetivamente aplicada após considerar eventuais reduções**, sendo utilizada para o cálculo final do imposto.
    
*   `Valor (R$)`: Apresenta o **valor da CBS calculado sobre a** `Base CBS/IBS`, considerando a **alíquota efetiva aplicada na operação**.
    

Guia IBS1800

*   `% Aliq. Nominal`: Indica a **alíquota nominal do IBS** aplicada à operação.
    
*   `% Redução`: Indica o **percentual de redução aplicado sobre a alíquota nominal do IBS**, quando houver benefício fiscal ou regra específica prevista na legislação.
    
*   % Aliq. Efetiva: Apresenta a **alíquota efetiva do IBS após considerar eventuais reduções**, utilizada para o cálculo final do imposto.
    
*   Valor (R$): Apresenta o **valor do IBS calculado sobre a** `Base CBS/IBS`, conforme a **alíquota efetiva aplicada na operação**.
    

Guia IBS Municipal1800

*   `% Aliq. Nominal`: Indica a **alíquota nominal do IBS destinada à parcela municipal do imposto**.
    
*   `% Redução`: Indica o **percentual de redução aplicado sobre a alíquota nominal**, quando houver previsão legal para a operação.
    
*   `% Aliq. Efetiva`: Apresenta a **alíquota efetiva aplicada após considerar eventuais reduções**, utilizada no cálculo do imposto.
    
*   `Valor (R$)`: Apresenta o **valor do IBS referente à parcela municipal**, calculado sobre a `Base CBS/IBS`, conforme a alíquota efetiva aplicada.
    

:note:atlassian-note#B3D4FF

**Observações:**

1.  Os tributos **CBS (Contribuição sobre Bens e Serviços)** e **IBS (Imposto sobre Bens e Serviços)** fazem parte da **Reforma Tributária do consumo** e foram criados para **substituir gradualmente tributos atuais**. A **CBS substituirá o PIS e a COFINS**, enquanto o **IBS substituirá o ICMS e o ISS**, conforme o cronograma de implementação definido na legislação.
    
2.  As **alíquotas aplicáveis aos combustíveis ainda não foram definidas pela legislação**, podendo sofrer alterações conforme a regulamentação da reforma tributária.
    
3.  Para alguns produtos e operações, as **alíquotas apresentadas no sistema podem estar configuradas apenas para fins de teste ou simulação**, até que as regras e percentuais oficiais sejam regulamentados.
    
4.  O cálculo e a incidência dos tributos **CBS e IBS dependem da classificação tributária da operação**, podendo variar conforme o tipo de produto, operação e legislação vigente.
    

Após preencher e conferir os campos das guias de impostos, conforme as regras fiscais da empresa, clique no botão . Caso seja necessário adicionar mais itens à nota, repita o processo até que todos sejam incluídos corretamente.

O sistema retornará para o box de **Itens da Nota**, com a listagem dos itens que foram adicionados e suas respectivas informações resumidas.

Box Itens da Nota após inclusão dos itens manualmente

:note:atlassian-note#B3D4FF

**Observação:** Caso seja necessário realizar a edição de algum item da nota, clique no botão . Para realizar a exclusão de algum item, clique no botão .

No box **Impostos e Totais**, verifique cada campo e certifique-se de que todos estejam com seus valores corretos.

No box **Dados Complementares**, preencha os campos conforme sua necessidade.

Após a verificação e conferência das informações, clique no botão para finalizar a emissão da nota.

:note:atlassian-note#B3D4FF

**Observação:** É possível deixar a nota fiscal pré-cadastrada para que seja emitida posteriormente. Para isso, após clicar no botão , serão apresentadas as seguintes telas para finalização da emissão:

Na tela de confirmação de finalização da nota, clique no botão .

Tela confirmação finalização de nota

Já na tela de confirmação da emissão da nota, clique no Botão .

Tela confirmação de emissão de nota

A tela será redirecionada para a listagem das notas de entrada cadastradas no sistema, onde:

1.  Para notas em que foi confirmada a finalização mas não a emissão, estarão disponíveis os ícones e .
    
    1.  O ícone permitirá a visualização detalhada da nota e a emissão da mesma, clicando no botão localizado no canto superior direito.
        
    2.  O ícone realiza a exclusão da nota.
        

**Atenção**: Uma vez que a nota seja excluída, não poderá ser recuperada.

2.  Para notas em que foi confirmada tanto a finalização como a emissão da mesma, mas que por algum motivo a emissão não foi concluída, ficando com o status de Enviada, estarão disponíveis os ícones e .
    
    1.  O ícone permitirá a visualização detalhada da nota e a consulta do status da mesma na SEFAZ, clicando no botão localizado no canto superior direito.
        
    2.  O ícone realiza uma consulta do status da nota na SEFAZ, verificando o status mais recente da mesma e atualizando no sistema caso haja necessidade.
        

* * *

Emissão de Nota Fiscal de Entrada - Tipo Devolução de Venda
-----------------------------------------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Correção de Estoque**: Quando o cliente devolve um produto, a emissão da Nota Fiscal de Entrada do tipo Devolução de Venda permite que o estoque da empresa seja ajustado automaticamente, restabelecendo a quantidade correta de mercadorias disponíveis.
    
*   **Recuperação de Impostos**: Ao registrar a devolução, a empresa pode recuperar os impostos que foram pagos na venda original, como ICMS e PIS/COFINS, o que evita perdas financeiras e mantém a operação fiscal em conformidade.
    
*   **Transparência nas Operações**: A emissão da nota de devolução garante transparência no processo de devolução, registrando formalmente o retorno dos produtos, o que melhora a comunicação com o cliente e a auditoria das transações.
    

:note:atlassian-note#B3D4FF

**Observação**: Para emitir a nota fiscal de entrada (NF-e) através deste módulo, é indispensável que o computador utilizado possua um **certificado digital válido** instalado, além de um CNPJ ativo e registro regular na SEFAZ (Secretaria da Fazenda). O certificado digital serve para autenticar a identidade da empresa emissora e garantir a segurança e validade jurídica das transações eletrônicas junto à SEFAZ.

Acesse o módulo de Notas Fiscais de Entrada e clique no botão para cadastrar uma nova nota.

No box **Nova Nota Fiscal de Entrada**, preencha os campos de `Empresa`, `Tipo da Emissão`, `Contingência`, `Emissão`, `Data` e `Hora`.

No campo `Cliente`, clique no ícone . Será apresentada a seguinte tela:

Tela para seleção do cliente

Selecione o destinatário da nota.

Box Criar Nova Nota Fiscal - Tipo Devolução de Venda

Verifique e corrija, se necessário, os campos `Usar Preço`, `Pagamento`, `Forma de Pagamento`, `Tipo de Frete`, `Modalidade da Nota` e `Chave Eletrônica da NF-e Referenciada`.

Com essas informações preenchidas no box de **Nova Nota Fiscal de Entrada**, prossiga para o próximo box.

No box de **Dados Adicionais**, caso a **Forma de Pagamento** seja **Cartão de Crédito** ou **Cartão de Débito**, será necessário inserir a administradora e autorização manualmente, caso não tenha integração com o TEF.

Box Dados Adicionais

Ao clicar no botão , a seguinte tela de seleção de vendas será apresentada:

Tela de Seleção de Vendas

Na parte superior da tela, é possível aplicar filtros para a listagem das vendas, facilitando a localização e seleção das vendas relevantes, onde:

*   `Cliente`: O sistema trás preenchido, por padrão, tanto o cliente selecionado no box [Nova Nota Fiscal de Entrada](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/72318998/NF-e+de+Entrada#nota-fiscal-entrada), quanto o **Cliente Padrão**.
    
*   `Administradora`: Filtra somente as vendas que tiveram a(s) administradora(s) selecionada(s) indicadas no momento da emissão do cupom fiscal.
    

:note:atlassian-note#B3D4FF

**Observação:** Esta opção só é habilitada ao marcar a caixa de seleção `Vendas pagas apenas com cartão`.

*   `Produtos`: Filtra somente as vendas que possuam os produtos selecionados nos itens do cupom fiscal.
    
*   `Data Inicial` e `Data Final`: Indica o intervalo de datas em que as vendas a serem listadas foram emitidas.
    
*   `Série`: Número de série das vendas emitidas.
    
*   `Cupom`: Número do cupom fiscal da venda.
    
*   `CPF/CNPJ`: Filtra por CPF ou CNPJ indicado na venda.
    
*   `Placa`: Filtra pela placa do veículo indicada na venda.
    
*   `Preço de Contrato`: Filtra pelo valor acordado em um contrato específico de venda com um cliente cadastrado no sistema.
    
*   `Ordem`: Define a ordem de apresentação das vendas listadas, podendo ser:
    
    *   `Cliente/Data`: Exibe as vendas pelo nome do cliente e a data de emissão.
        
    *   `Cliente/Valor`: Exibe as vendas pelo nome do cliente e o valor da venda.
        
    *   `Valor`: Exibe as vendas pelo valor total.
        
*   `Venda Base para Importação`: Este campo define o parâmetro padrão dos itens da venda que será utilizado na importação, podendo estar fixado para consideração da **Quantidade** ou do **Total** da venda. Caso não esteja bloqueado, o campo permite ao cliente escolher uma dessas opções no momento da importação, conforme a necessidade.
    

:note:atlassian-note#B3D4FF

**Observação**: O bloqueio ou liberação desse campo é configurado em:

**Menu Opções -> Sistema -> Box Fiscal -> Guia Nota Fiscal.**

No campo `Valor base usado na importação das vendas`, defina se o mesmo será bloqueado (`Quantidade` ou `Total`) ou liberado (`Escolher`).

Essas configurações ajudam a garantir que o valor total da nota seja sempre calculado corretamente, evitando problemas com discrepâncias de valores ou quantidades devido a erros de arredondamento.

*   `Agrupar itens por Produto na Nota`: Define se, ao realizar a indicação de cupons (Seleção de Vendas), os itens com o mesmo produto deverão ser agrupados em uma única linha na Nota Fiscal.
    
    *   Quando `Não`: O sistema gera dessa forma
        
        **Gasolina comum 500 lt X 5,00 = R$ 2.500,00**  
        **Gasolina comum 200 lt X 4,50 = R$ 900,00**  
        **Gasolina comum 300 lt X 4,80 = R$ 1.440,00**
        
    *   Quando `Sim`: O sistema consolida as quantidades do mesmo produto e calcula automaticamente o valor unitário médio ponderado com base nos preços praticados nas vendas selecionadas e gera apenas uma única linha por produto na nota fiscal.
        
        **Gasolina comum 1000 lt X 4,84 = R$ 4.840,00**
        
*   `Vendas contendo apenas os produtos relacionados`: Se marcado, serão listadas somente vendas que possuam os produtos selecionados no filtro Produtos.
    
*   `Vendas pagas apenas com cartão`: Se marcado, serão listadas somente vendas com as administradoras de cartão selecionadas.
    

Após aplicar os filtros, clique no botão para atualizar a listagem de vendas. A tela exibirá todas as vendas correspondentes aos critérios selecionados. Marque a(s) venda(s) que deve(m) ser referenciada(s) na nota fiscal.

Na listagem das vendas será possível ver informações como `Emissão`, `Valor (R$)`, `Modelo`, `Série`, `Cupom`, `Cliente`, `CPF/CNPJ`, `Placa` e `Chave`.

Guia PRODUTOS LANÇADOS1800

*   `Cupom`: Documento fiscal associado à venda do produto.
    
*   `Núm.`: Número sequencial que identifica o item na lista de produtos da venda.
    
*   `Cod. Barras`: Código único que identifica o produto.
    
*   `Produto`: Descrição do item incluído na venda.
    
*   `Preço (R$)`: Valor unitário do produto.
    
*   `Qtd.`: Quantidade do produto registrado na venda.
    
*   `Valor (R$)`: Valor total do item, calculado pela fórmula **Preço (R$)** x **Qtd**.
    

Guia VENDAS1800

*   `Valor (R$)`: Total em reais das vendas listadas.
    
*   `Quantidade`: Número total de vendas na listagem.
    

Guia SELECIONADAS1800

*   `Valor (R$)`: Total em reais das vendas selecionadas.
    
*   `Quantidade`: Número total de vendas selecionadas na listagem.
    

Após marcar as vendas desejadas, clique no botão para adicionar os itens das mesmas na nota fiscal.

No box de **Itens da Nota**, o(s) produto(s) da(s) venda(s) será(ão) automaticamente adicionado(s) para o box com suas respectivas informações de valores, quantidade e estoque.

Tela de listagem dos itens adicionados à nota

:note:atlassian-note#B3D4FF

**Observação:** Caso seja necessário realizar a edição de algum item da nota, clique no botão . Para realizar a exclusão de algum item, clique no botão .

No box **Impostos e Totais**, verifique cada campo e certifique-se de que todos estejam com seus valores corretos.

No box **Dados Complementares**, preencha os campos conforme sua necessidade.

Após a verificação e conferência das informações, clique no botão para finalizar a emissão da nota.

* * *

Consulta de Notas Fiscais de Entrada
------------------------------------

Após a emissão de uma nota, o sistema permite a consulta de todas as informações relacionadas à mesma. Para visualizar os detalhes, acesse o módulo de NF-e de Entrada, conforme demonstrado no início do manual. A seguinte tela será exibida:

Tela de listagem de notas de entrada

Clique no ícone localizado no final da linha do registro da nota a ser visualizada. Será exibida a tela com todas as informações da nota lançada nos boxes explicados acima.

Tela de informações detalhadas da nota fiscal emitida

No box **Alterar Nota Fiscal de Entrada**, constam os seguintes botões: , e .

*   Botão : Permite visualizar o DANFE, uma representação gráfica da NF-e. Ele exibe informações como chave de acesso, dados do emitente, produtos e impostos e pode ser usado para consulta rápida, impressão ou envio em PDF.
    
*   Botão : Permite baixar o arquivo XML da NF-e, que é o documento oficial da nota fiscal em formato digital. Esse arquivo contém todas as informações fiscais. Ele é usado para auditorias, integração com sistemas contábeis e compartilhamento com clientes ou autoridades fiscais.
    
*   Botão : Realiza a exclusão da nota fiscal no sistema. Ao clicar nesse botão, será apresentada a seguintes tela de confirmação:
    

Tela de confirmação do cancelamento da nota

Clique no botão para confirmar o cancelamento da nota. A nota continuará cadastrada no sistema, porém com o status de **Cancelada.**

:note:atlassian-note#B3D4FF

**Observação**: O prazo para cancelamento de uma Nota Fiscal de Entrada pode variar de acordo com a legislação estadual e as regras específicas de cada estado no Brasil, mas, em geral, o prazo costuma ser de **24 horas** a partir da emissão da nota fiscal.

É importante verificar a legislação específica do estado em que a empresa está registrada, pois alguns estados podem permitir prazos maiores ou ter restrições adicionais para o cancelamento de notas fiscais. Além disso, uma vez que a mercadoria tenha sido recebida ou que outras obrigações fiscais tenham sido cumpridas, o cancelamento pode ser dificultado ou inviabilizado.

:note:atlassian-note#B3D4FF

Uma vez cancelada a nota, seja por erro na quantidade de produtos, estoque ou forma de pagamento indicada no momento da emissão, a mesma pode ser emitida novamente no sistema de forma mais rápida através da **redigitação**.

Para realizar a redigitação da mesma, utilize os filtros para encontrar mais facilmente a nota desejada.

Tela de consulta das notas canceladas

Clique no ícone localizado no final da linha da nota que será redigitada.

Será apresentada a seguinte tela com todas as informações da nota:

Tela da nota que será redigitada

Clique no botão . Será apresentada a seguinte tela de confirmação:

Tela de confirmação da redigitação da nota

Clique no botão para confirmar a redigitação.

Verifique as informações da nota no box **Redigitando a Compra** e corrija o que for necessário.

Box da nota que está sendo redigitada

No box **Itens da Nota,** clique no botão para importar automaticamente os itens da nota para a tela, permitindo a conclusão do lançamento. Verifique valores e quantidades e, se necessário, realize as correções apropriadas. Clique no botão para concluir o lançamento.

* * *

Envio de Notas Fiscais de Entrada por E-mail
--------------------------------------------

Após a emissão de uma nota, o sistema permite enviar os arquivos XML e Danfe para o e-mail do cliente indicado na nota. Para isso, siga os seguintes passos:

Acesse o módulo de Notas Fiscais de Entrada e clique no ícone para acessar a nota a ser enviada.

No box **Dados Complementares**, clique no botão para que os arquivos sejam enviados para o cliente indicado na nota.

Box Dados Complementares

:note:atlassian-note#B3D4FF

**Observações**:

*   Para que o envio do e-mail seja realizado corretamente, é necessário que os parâmetros de e-mail do sistema estejam previamente configurados com o e-mail do posto. A configuração pode ser realizada no caminho: **Menu Opções -> Sistema -> Guia SMTP**.
    
*   Caso o cliente não possua e-mail cadastrado, o campo E-mail Destinatário deverá ser informado manualmente no momento da emissão da nota fiscal, para que seja possível realizar o envio dos arquivos por e-mail.
    
*   Após a emissão da nota fiscal, o campo E-mail Destinatário ficará bloqueado para edição, não sendo possível realizar alterações.