---
title: Conhecimento de Transporte
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/65142785
---

# Conhecimento de Transporte

16truenonelisttrue

Conhecimento de Transporte (CT-e)
=================================

O **CT-e (Conhecimento de Transporte Eletrônico)** é um documento fiscal eletrônico utilizado para registrar operações de prestação de serviços de transporte de cargas. É essencial, pois regula o transporte de produtos como gasolina, diesel e etanol, que são altamente regulamentados. Ele garante que o transporte esteja de acordo com as normas fiscais, ambientais e de segurança, facilitando o controle de estoque e evitando irregularidades.

Além do transporte de combustíveis, o **CT-e** também pode ser utilizado para registrar o transporte de outros produtos relacionados, como **lubrificantes, óleos automotivos e derivados**, ampliando o controle fiscal e garantindo a conformidade nas operações de transporte desses itens.

As principais vantagens são:

*   **Controle Fiscal**: Registra a movimentação de produtos e garante a conformidade com as obrigações legais, assegurando a transparência nas operações de transporte.
    
*   **Rastreamento de Cargas**: Permite acompanhar o transporte de combustíveis até o posto.
    
*   **Cumprimento de Normas**: Garante a conformidade com leis fiscais e ambientais.
    
*   **Facilita a Fiscalização**: Ajuda nas auditorias e inspeções de órgãos reguladores.
    

* * *

Configuração Inicial
--------------------

Antes de iniciar o processo de cadastro do **Conhecimento de Transporte Eletrônico (CT-e)**, é fundamental garantir que o fornecedor responsável pelo transporte esteja corretamente cadastrado como **transportadora** no sistema. Esse cuidado é necessário para assegurar que as informações do serviço de transporte sejam registradas de forma adequada e conforme as exigências fiscais.

A configuração preliminar necessária é realizada no módulo de Cadastro de Fornecedores do sistema:

Menu Cadastro > Fornecedores

Será apresentada a seguinte tela:

Listagem do cadastro de fornecedores

Localize o cadastro do fornecedor que será verificado utilizando os filtros de Razão Social, CPF/CNPJ ou Situação e clique no ícone .

No box **Complemento**, indique o campo `Transportadora` como `Sim`. Essa seleção é essencial para que o fornecedor seja listado durante o cadastro do Conhecimento de Transporte.

Box Complemento do Cadastro de Fornecedores

Após o ajuste, clique no botão para confirmar as alterações no cadastro.

* * *

Conhecimento de Transporte Eletrônico (CT-e)
--------------------------------------------

Finalizada a conferência do fornecedor, acesse o seguinte módulo para realizar o cadastro de um Conhecimento de Transporte:

Menu Estoque > Conhecimento de Transporte

* * *

Será apresentada a seguinte tela:

Tela Geral de Conhecimento de Transporte

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento dos **conhecimentos de transporte (CT-e)** já cadastrados. Esta tela é organizada para facilitar a navegação, a consulta e o controle dos CT-es.

**Criar Novo Conhecimento de Transporte**

Permite o lançamento de um novo conhecimento de transporte, garantindo que todas as informações necessárias sejam registradas corretamente e incluídas no SPED (Sistema Público de Escrituração Digital), conforme as exigências legais.

**Filtro de Pesquisa**

Facilita a busca de conhecimentos de transporte já cadastrados, por meio de filtros como período, transportadora, número de série e número do documento agilizando a localização das informações necessárias.

**Visualização**

Permite consultar os detalhes de um conhecimento de transporte já cadastrado, possibilitando a visualização das informações fiscais, valores, impostos e dados vinculados ao documento.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , será apresentada a seguinte tela, dividida em quatro boxes destacados em forma de abas no canto direito da tela:

Tela geral de cadastro de conhecimento de transporte

* * *

### Box 1 - Criar Conhecimento de Transporte conhecimento-transporte

O box **Criar Conhecimento de Transporte** permite inserir e gerenciar todos os dados necessários para o registro de novas operações de transporte.

Box Criar Conhecimento de Transporte

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `Transportadora`: Refere-se à empresa responsável pela execução do serviço de transporte de mercadorias.
    
*   `Tipo de frete`: Indica o método pelo qual o transporte das mercadorias é realizado, podendo ser:
    
    *   `Sem cobrança de Frete`: O vendedor assume o custo do transporte, não sendo cobrado do comprador.
        
    *   `Por conta do Remetente - CIF`: O vendedor paga o frete até o destino final da mercadoria e assume o risco durante o transporte.
        
    *   `Por conta do Destinatário - FOB`: O comprador paga o frete e assume o risco a partir do momento em que a mercadoria é entregue ao transportador.
        
    *   `Por conta de Terceiros`: O frete é pago por uma pessoa ou empresa que não seja o vendedor ou o comprador, conforme acordado.
        
    *   `Próprio por conta do Remetente`: O vendedor utiliza sua própria frota ou transporte para realizar a entrega da mercadoria.
        
    *   `Próprio por conta do Destinatário`: O comprador utiliza sua própria frota ou transporte para receber a mercadoria no destino final.
        
*   `Data do Serviço`: Data em que o serviço de transporte foi realizado ou iniciou, usada para referência cronológica e tributária.
    
*   `Série`: Uma numeração que agrupa documentos fiscais emitidos de forma distinta, com o objetivo de classificar e organizar as emissões fiscais.
    
*   `Subsérie`: Utilizada para subdividir a série em categorias adicionais, permitindo um controle mais especifico de documentos fiscais.
    
*   `Documento`: Refere-se ao número de Conhecimento de Transporte Eletrônico (CT-e), que identifica unicamente um documento fiscal.
    
*   `CFOP`: Código que define a natureza da operação fiscal de transporte registrada no CT-e. Indica se a prestação do serviço de transporte ocorreu:
    
    *   **Com origem no mesmo estado (operação interna)** → CFOP iniciado por 1.
        
    *   **Com origem em outro estado (operação interestadual)** → CFOP iniciado por 2.
        

**Observação**: Os demais dígitos do CFOP devem ser definidos conforme a natureza da prestação do serviço, considerando o tipo de estabelecimento, a finalidade da operação e a orientação da contabilidade ou do setor fiscal.

*   `CST PIS`: Código que especifica a situação tributária da operação em relação ao PIS, indicando a base de cálculo e a alíquota aplicável.
    
*   `CST COFINS`: Código que especifica a situação tributária da operação em relação ao COFINS, influenciando o cálculo do tributo.
    
*   `Data de Emissão`: Data em que o CT-e foi emitido eletronicamente. Essa data é usada para efeitos fiscais e controle do serviço de transporte.
    
*   `Chave Eletrônica (CT-E)`: Sequência numérica única, gerada eletronicamente, que identifica o CT-e de forma exclusiva.
    
*   `Modelo do Documento`: Indica o modelo fiscal do documento de transporte emitido pela transportadora.
    
    *   `Conhecimento de Transporte Eletrônico (CT-e)`: Documento fiscal modelo 57, utilizado para registrar transporte de mercadorias. É o modelo atualmente mais utilizado e autorizado eletronicamente pela SEFAZ.
        
    *   `Conhecimento de Transporte Rodoviário de Cargas`: Documento fiscal modelo 8, utilizado para registrar transporte rodoviário de mercadorias, documento antigo, emitido em papel.
        
    *   `Nota Fiscal de Serviços de Transporte`: Documento fiscal modelo 7, utilizado para comprovar a prestação de serviço de transporte, assim como o CTRC (Conhecimento de Transporte Rodoviário de Cargas), é um modelo antigo.
        

* * *

### Box 2 - Valores

O box **Valores** é a área do sistema que exibe detalhadamente os custos envolvidos na operação de transporte, como o valor do frete, impostos e outros encargos.

Box Valores

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `Valor do Documento`: Refere-se ao valor total registrado no CT-e, somando o custo do serviço de transporte e os impostos aplicáveis.
    
*   `Valor do Desconto`: Indica o valor de qualquer desconto concedido no serviço de transporte. Esse desconto pode ser dado ao destinatário ou ao contratante do frete.
    
*   `Valor do Serviço`: O custo do serviço de transporte em si, sem a adição de tributos. É a base para o cálculo de outros valores no documento.
    

:note:atlassian-note#B3D4FF

**Observação**: Os campos **Base ICMS**, **Valor ICMS**, **Valor ICMS Substituição** e **Valor ICMS Não Tributado** são totalizadores, cujos valores são automaticamente preenchidos no box **Impostos**.

* * *

### Box 3 - Impostos

O box **Impostos** apresenta os tributos incidentes sobre a operação de transporte, como ICMS e outros impostos aplicáveis. Nessa guia, os valores são calculados e exibidos de forma detalhada, assegurando o correto recolhimento fiscal e a conformidade com as legislações vigentes.

Box Impostos

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `CST ICMS`: Código que define a situação tributária da operação em relação ao ICMS. Isso indica se a operação é tributada, isenta, sujeita a substituição tributária, entre outros.
    
*   `CFOP`: Define a natureza da operação de transporte para fins de apuração do ICMS. Deve ser informado conforme a classificação fiscal aplicável à prestação do serviço registrado no CT-e, respeitando o prefixo correspondente ao tipo de entrada (**1 - interna** / **2 - interestadual**)
    

Observação: O CFOP informado no box Impostos **dever ser idêntico ao CFOP informado no box** [Criar Conhecimento de Transporte](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/65142785/Conhecimento+de+Transporte#conhecimento-transporte). Caso os códigos estejam divergentes, o sistema não permitirá o salvamento do cadastro.

*   `Valor Serviço`: Valor do serviço de transporte efetivamente prestado, que serve de base para os cálculos fiscais.
    
*   `Base ICMS`: Valor sobre o qual o ICMS será calculado, usualmente equivalente ao valor do serviço de transporte.
    
*   `Valor ICMS`: Quantia a ser paga referente ao ICMS, calculada a partir da alíquota aplicada à base de cálculo.
    
*   `Valor ICMS Subst.`: Valor do ICMS recolhido antecipadamente por substituição tributária, quando aplicável.
    
*   `Valor ICMS não Trib`: Valor correspondente à parcela não tributada pelo ICMS, em situações de isenção ou não incidência.
    

* * *

### Box 4 - Compras Relacionadas

O box **Compras Relacionadas**, conforme mostrada na imagem, permite vincular o Conhecimento de Transporte Eletrônico (CT-e) à Nota Fiscal da compra correspondente. Esse vínculo facilita o controle e o rastreamento das operações, garantindo que o transporte esteja associado às mercadorias compradas.

Box Compras Relacionadas

Os campos apresentados nesse box são:

*   `Emissão`: Data em que a Nota Fiscal foi gerada, representando o momento em que a operação fiscal ocorreu.
    
*   `Valor (R$)`: Montante total da operação comercial descrita na Nota Fiscal, expresso em reais (R$).
    
*   `Fornecedor`: Empresa ou pessoa responsável pelo fornecimento dos produtos ou serviços mencionados na Nota Fiscal.
    
*   `Série`: Sequência numérica que organiza e diferencia as Notas Fiscais emitidas, facilitando o controle fiscal.
    
*   `Documento`: Número que identifica individualmente a Nota Fiscal, garantindo sua rastreabilidade.
    
*   `Chave`: Código numérico único de 44 dígitos que identifica a Nota Fiscal Eletrônica (NF-e) e permite sua consulta no sistema fiscal.
    

* * *

Inclusão de Conhecimento de Transporte - Manual
-----------------------------------------------

Acesse o módulo de Conhecimento de Transporte e clique no botão para cadastrar um novo CT-e.

No box **Criar Conhecimento de Transporte**, selecione a empresa **Transportadora.**

Tela para seleção da transportadora

Indique o `Tipo de Frete` e `Data do Serviço`.

Digite os 44 dígitos da `Chave Eletrônica (CT-e)`. Isso preencherá automaticamente os campos `Série`, `Documento`, `Data de Emissão` de acordo com as informações presentes no número da chave. Indique o `CFOP` conforme as informações provenientes do CT-e. Os códigos `CST PIS` e `CST COFINS` devem ser preenchidos de acordo com as orientações definidas pela contabilidade ou pelo setor fiscal da sua empresa, uma vez que esses códigos variam conforme o regime tributário adotado.

Box Criar Conhecimento de Transporte - Inclusão Manual

Com essas informações preenchidas de forma manual no box de **Criar Conhecimento de Transporte**, prossiga para o próximo box.

No box de **Valores**, será necessário inserir os valores manualmente nos campos **Valor do Serviço**, **Valor de Desconto** e **Valor do Documento**, de acordo com as informações do documento.

Box Valores

Os campos **Base do ICMS, Valor do ICMS, Valor do ICMS Subst.** e **Valor do ICMS Não Trib**., são totalizadores dos valores preenchidos no **Box Impostos**, caso sejam aplicáveis.

No box de **Impostos**, clique no botão . A seguinte tela será apresentada:

Tela para incluir imposto

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `CST ICMS`: Código que determina a situação tributária da operação em relação ao ICMS, indicando se a operação é tributada, isenta, sujeita à substituição tributária, entre outras condições. Essa informação deve ser fornecida pela contabilidade ou pelo setor fiscal da empresa.
    
*   `CFOP`: Código fiscal que define a natureza da operação, tanto no aspecto de transporte quanto nas implicações fiscais.
    

:note:atlassian-note#B3D4FF

**Observação:** Este campo virá preenchido, de acordo com a informação preenchida no primeiro box **Criar Conhecimento de Transporte.**

*   `Valor (R$)`: Valor do serviço de transporte efetivamente prestado, que serve de base para os cálculos fiscais.
    
*   `Base ICMS`: Valor sobre o qual o ICMS será calculado, usualmente equivalente ao valor do serviço de transporte.
    
*   `Alíquota ICMS`: Percentual aplicado sobre a base de cálculo para determinar o valor do ICMS a ser recolhido.
    
*   `Valor ICMS`: Quantia a ser paga referente ao ICMS, calculada a partir da alíquota aplicada à base de cálculo.
    
*   `Valor ICMS Subst.`: Valor do ICMS recolhido antecipadamente por substituição tributária, quando aplicável.
    
*   `Valor ICMS não Trib`: Valor correspondente à parcela não tributada pelo ICMS, em situações de isenção ou não incidência.
    

Tela incluir imposto preenchida

Após preencher os campos e realizar a verificação das informações, clique no botão .

Aparecerá a listagem com os impostos incluídos:

Listagem de impostos incluídos

O box **Compras Relacionadas**compras-relacionadas, destina-se a vincular o CT-e (Conhecimento de Transporte Eletrônico) à compra correspondente. Para realizar essa ação, clique no botão . A seguinte tela será exibida:

Tela seleção de compras

Na parte superior da tela, é possível aplicar filtros para refinar a listagem de compras cadastradas no módulo de Compra de Combustíveis ou Compra de Diversos. Os filtros disponíveis permitem buscar compras com base em diferentes critérios, conforme descrito a seguir:

*   `Fornecedor`: Permite selecionar o fornecedor da compra, filtrando apenas as compras associadas a ele.
    
*   Data inicial e Data Final: Define o intervalo de datas para a busca.
    
*   Tipo de Compra:
    
    *   `Todas`: Mostra todos os tipos de compras registradas, sem distinção.
        
    *   `Combustíveis`: Filtra apenas as compras relacionadas à aquisição de combustíveis.
        
    *   `Diversos`: Exibe apenas as compras de itens diversos.
        
*   `Situação`:
    
    *   `Todas`: Apresenta todas as compras, independentemente do seu status.
        
    *   `Concluídas`: Mostra apenas as compras que foram finalizadas.
        
    *   `Canceladas`: Exibe compras que foram canceladas.
        
*   `Cupom`: Filtra as compras com base no número do documento da NF-e.
    
*   `Chave`: Permite buscar a compra utilizando a chave de acesso da Nota Fiscal Eletrônica (NF-e), facilitando a vinculação de documentos fiscais.
    

Este box não possui preenchimento obrigatório, já que pode ocorrer de a Nota Fiscal ainda não ter sido lançada no sistema. A compra pode ser vinculada ao documento fiscal em um momento posterior, conforme necessário.

Após preenchimento dos campos, verifique as informações e clique no botão .

* * *

Inclusão de Conhecimento de Transporte - Importação XML
-------------------------------------------------------

Alguns benefícios da importação de arquivo XML são:

*   **Segurança e confiabilidade**: Utilizar o arquivo XML do Conhecimento de Transporte, assegura maior precisão de dados fiscais e de transporte, reduzindo a possibilidade de inconsistências nas informações registradas.
    
*   **Backup e Referência**: Mantém um registro digital do XML do Conhecimento de Transporte, facilitando auditorias, conferências e consultas futuras.
    

Acesse o módulo de Conhecimento de Transporte e clique no botão para cadastrar um novo CT-e.

No box **Criar Conhecimento de Transporte**, clique no botão . Será apresentado o explorador de arquivos do computador para indicação do arquivo XML baixado anteriormente no Portal de Conhecimento de Transporte eletrônico ([www.cte.fazenda.gov.br/portal](http://www.cte.fazenda.gov.br/portal)). Encontre o arquivo em seu computador e clique em **Abrir**.

O XML será importado para o sistema e os campos dos três boxes (Criar Conhecimento de Transporte, Valores e Impostos) serão preenchidos automaticamente de acordo com as informações do arquivo.

A partir desse momento, o preenchimento do box **Compras Relacionadas** é idêntico ao exemplificado em [Compras Relacionadas](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/65142785/Conhecimento+de+Transporte#compras-relacionadas), em **Inclusão de Conhecimento Eletrônico - Manual**.

**Atenção!**  
Para este tipo de inclusão, é **obrigatório ajustar o código CFOP** no box **Criar Conhecimento de Transporte** e o campo **CFOP** no box **Impostos**, garantindo que ambos utilizem CFOP compatível com a operação, com prefixo 1 ou 2, conforme o tipo de entrada.  
Caso o prefixo do CFOP não esteja correto ou os códigos estejam incompatíveis, o sistema não permitirá o salvamento do cadastro.

* * *

Edição de Conhecimento de Transporte - Manual
---------------------------------------------

A edição de um Conhecimento de Transporte Eletrônico (CT-e) permite atualizar informações previamente cadastradas.

Para editar um CT-e, acesse o módulo de Conhecimento de Transporte, localize o documento na listagem e clique no ícone .

Na tela de edição, realize os ajustes necessários nas informações dos boxes previamente apresentados no início do módulo, de acordo com suas necessidades. Após finalizar as alterações e fazer a conferência, clique em para confirmar e registrar as modificações.

* * *

Exclusão de Conhecimento de Transporte - Manual
-----------------------------------------------

Para excluir um CT-e, acesse o módulo de Conhecimento de Transporte Eletrônico (CT-e), localize o documento na listagem e clique no ícone .

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

:info:atlassian-info#B3D4FF

É importante ressaltar que a exclusão de um CT-e é uma ação permanente e não pode ser desfeita. Após confirmar, o sistema atualizará a listagem, removendo o documento excluído. Certifique-se de que a exclusão é realmente necessária, considerando as implicações fiscais e operacionais.