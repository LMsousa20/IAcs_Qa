---
title: Emissão de CT-e
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/73105429
---

# Emissão de CT-e

16truenonelisttrue

Emissão de CT-e
===============

O Conhecimento de Transporte Eletrônico (CT-e) é um documento fiscal eletrônico que tem o objetivo de registrar operações de prestação de serviços de transporte de cargas. Sua validade jurídica é garantida por assinatura digital e autorização prévia pela Secretaria da Fazenda (SEFAZ). Ele substitui o modelo 8 (antigo Conhecimento de Transporte em papel) e é obrigatório para transportadores em diversas modalidades.

**Principais Características do CT-e**

*   **Formato digital**: É emitido e armazenado exclusivamente em formato eletrônico (arquivo XML).
    
*   **Assinatura digital**: Garante a autenticidade e a integridade do documento.
    
*   **Autorização prévia**: A validade do CT-e depende da autorização pela SEFAZ de origem.
    
*   **Abrangência nacional**: Adotado em todo o território brasileiro.
    
*   **Modalidades de transporte**: Pode ser utilizado para transporte rodoviário, ferroviário, aéreo, aquaviário e dutoviário.
    
*   **Documento auxiliar**: O **DACTE (Documento Auxiliar do CT-e)** acompanha o transporte para facilitar a fiscalização e serve como uma representação simplificada do CT-e.
    

**Vantagens da Emissão do CT-e**

*   **Redução de custos**: Elimina a necessidade de documentos físicos, como formulários e armazenamento de papel.
    
*   **Agilidade no processo**: Simplifica a emissão e controle de documentos fiscais.
    
*   **Integração e rastreabilidade**: Permite a integração com sistemas de logística e contabilidade, melhorando o acompanhamento das operações.
    
*   **Redução de erros**: Automatiza o preenchimento e validação de informações.
    
*   **Conformidade fiscal**: Facilita o cumprimento das obrigações fiscais e minimiza o risco de penalidades.
    

:info:atlassian-info:info:#B3D4FF

**Observação:** Para realizar a emissão do Conhecimento de Transporte Eletrônico (CT-e), é necessário que um certificado digital válido seja cadastrado no sistema. Para configurá-lo, acesse o menu **Cadastro** → **Fiscal** → **Certificados Digitais**. Além disso, é necessário que o CNPJ esteja ativo e que a empresa possua registro regular na SEFAZ (Secretaria da Fazenda).

* * *

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > Emissão de CT-e

* * *

Será apresentada a seguinte tela:

Tela geral do módulo de Emissão de CT-e

A imagem acima apresenta uma visão geral do módulo de emissão de CT-e, detalhando como os usuários podem visualizar, filtrar e gerenciar suas emissões. Neste módulo, os usuários podem visualizar todas as emissões realizadas, organizadas de maneira cronológica.

Cada registro exibe detalhes importantes, como data de emissão, CPF/CNPJ do destinatário, nome do destinatário, status da CT-e e valores da carga.

A interface foi projetada para ser intuitiva e fácil de usar, permitindo que os usuários tenham total controle sobre suas emissões de conhecimento de transporte, desde o gerenciamento completo das emissões até a visualização detalhada.

* * *

Apresentação dos Boxes e Campos
-------------------------------

Ao clicar no botão , a tela principal do módulo será exibida, organizada em nove boxes destacados como abas no canto direito da tela.

### Box 1 - Novo CT-e

O box **Novo CT-e** permite o registro e gerenciamento das informações necessárias para a emissão de um Conhecimento de Transporte Eletrônico (CT-e). Este box facilita a organização e validação das informações obrigatórias para o transporte, garantindo que os dados estejam completos e corretos para autorização.

Box Novo CT-e

Abaixo estão os campos e informações que devem ser registrados nesse box para realizar a emissão:

*   `Código`: Código gerado automaticamente de forma incremental pelo sistema.
    
*   `Emitido`: Indica se o CT-e já foi transmitido e autorizado pela SEFAZ.
    
*   `Cancelado`: Indica se o CT-e foi cancelado após sua emissão.
    
*   `Data`: Indica a data da emissão do CT-e.
    
*   `Hora`: Indica a hora da emissão do CT-e.
    
*   `Série`: Indica a série do CT-e, utilizada para controle da numeração dos documentos fiscais.
    
*   `Documento`: Número único do documento do CT-e. Pode ser gerado pelo sistema clicando no ícone .
    
*   `CFOP`: Código que identifica a operação fiscal, importante para a tributação e contabilização correta.
    
*   `Finalidade`: Define o objetivo da emissão do CT-e.
    
    *   `Normal`: Emissão regular de CT-e para registrar o transporte de mercadorias.
        
    *   `Anulação`: Emissão de CT-e para cancelar um documento anterior devido a erro ou necessidade de ajuste.
        
*   `Tomador do Serviço`: Indica quem é o responsável pelo pagamento do transporte, conforme a operação realizada.
    
    *   `Remetente`: Responsável pelo envio da mercadoria e pagamento do transporte.
        
    *   `Destinatário`: Responsável pelo recebimento da mercadoria e pelo pagamento do transporte.
        
*   `Papel do Tomador`: Define a classificação fiscal do tomador do serviço em relação ao ICMS.
    
    *   `Contribuinte do ICMS`: Tomador que recolhe ICMS sobre a operação de transporte e possui inscrição estadual ativa.
        
    *   `Isento`: Tomador com isenção de ICMS, mas possui inscrição estadual.
        
    *   `Não contribuinte`: Tomador que não recolhe ICMS e não possui inscrição estadual.
        
*   `RNTRC`: Campo numérico que identifica de forma única os transportadores de carga no Brasil, composto por 8 dígitos obrigatórios para regularização e fiscalização das atividades de transporte rodoviário.
    
*   `Chave Eletrônica (CT-e)`: Este campo exibe a chave eletrônica gerada pela SEFAZ após o envio do CT-e, concluindo o processo de emissão.
    
*   `Série CT-e anulado`: Indica a série do CT-e que foi cancelado, conforme retornado pela SEFAZ. Caso seja aplicável.
    
*   `Documento CT-e anulado`: Exibe o número do CT-e cancelado, conforme informado pela SEFAZ. Caso seja aplicável.
    
*   `Cód. Retorno` e `Mensagem`: Esses campos exibem o código e a mensagem de retorno gerados pela Secretaria da Fazenda (SEFAZ) após o envio do CT-e. Eles indicam se o documento foi aprovado, rejeitado ou se há pendências a corrigir.
    

* * *

### Box 2 - Remetente

O box **Remetente** identifica o responsável pelo envio da mercadoria, assegurando a conformidade legal e facilitando a comunicação entre as partes envolvidas no transporte.

Box Remetente

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `Cliente`: Indica o cliente responsável pelo envio da mercadoria. Essa informação é obrigatória e baseia-se no cadastro previamente realizado no sistema.
    
*   `CPF/CNPJ`: Documento de identificação fiscal do cliente, necessário para validação fiscal. CPF para pessoas físicas e CNPJ para empresas.
    
*   `Endereço`: Localização completa do remetente, incluindo logradouro, número, bairro e CEP, garantindo que a mercadoria seja remetida corretamente.
    
*   `Número`: Especifica o número da residência ou estabelecimento do cliente.
    
*   `Município`: Indica a cidade onde o cliente está localizado, essencial para definir a rota do transporte e calcular impostos incidentes.
    
*   `UF`: Sigla de duas letras que representa o estado de localização do cliente, fundamental para a emissão fiscal correta do CT-e.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Os campos `CPF/CNPJ`, `Endereço`, `Número`, `Município` e `UF` são preenchidos automaticamente com base na seleção realizada no campo `Cliente`. Essas informações são extraídas do cadastro do cliente registrado no sistema, simplificando o processo e reduzindo erros operacionais.

* * *

### Box 3 - Documentos

No box **Documentos** são inseridas as informações sobre os documentos fiscais, como as **Notas Fiscais Eletrônicas (NF-e)**, que comprovam e detalham a mercadoria transportada. O preenchimento adequado garante a conformidade fiscal e a vinculação correta entre o transporte e os itens transportados.

Box Documentos

Os documentos fiscais adicionados apresentam as seguintes informações:

*   `Num.`: Número sequencial atribuído ao documento incluído no CT-e. Facilita a organização e o rastreamento dos registros.
    
*   `Emissão`: Data em que o documento fiscal foi emitido. Informação obrigatória para fins de validação e registro.
    
*   `Chave`: Número da chave eletrônica do documento fiscal, composto por 44 dígitos. Essa chave é única e permite a consulta e validação do documento junto à SEFAZ.
    
*   `Valor`: Valor total do documento fiscal, correspondente ao montante da mercadoria descrita.
    

* * *

### Box 4 - Destinatário

No box **Destinatário** são registradas as informações do cliente que receberá a mercadoria, garantindo a conformidade legal, a eficiência no transporte e a comunicação clara entre as partes envolvidas.

Box Destinatário

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   `Cliente`: Indica o cliente responsável pelo recebimento da mercadoria. Essa informação é obrigatória e baseia-se no cadastro previamente realizado no sistema.
    
*   `CPF/CNPJ`: Documento de identificação fiscal do cliente, necessário para validação fiscal. CPF para pessoas físicas e CNPJ para empresas.
    
*   `Endereço`: Localização completa do destinatário, incluindo logradouro, número, bairro e CEP, garantindo que a mercadoria seja destinada corretamente.
    
*   `Número`: Especifica o número da residência ou estabelecimento do destinatário.
    
*   `Município`: Indica a cidade onde o destinatário está localizado, essencial para definir a rota do transporte e calcular impostos incidentes.
    
*   `UF`: Sigla de duas letras que representa o estado de localização do destinatário, fundamental para a emissão fiscal correta do CT-e.
    

Guia INFORMAÇÕES COMPLEMENTARES DE INTERESSE DO CONTRIBUINTE1800

*   `Observação`: Campo destinado para inserção de observações adicionais relevantes para o contribuinte, como instruções específicas para o transporte, detalhes adicionais sobre a mercadoria ou informações que não se enquadram nos demais campos do CT-e. Este preenchimento é opcional, mas pode facilitar a comunicação entre as partes envolvidas no transporte.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Os campos `CPF/CNPJ`, `Endereço`, `Número`, `Município` e `UF` são preenchidos automaticamente com base na seleção realizada no campo `Cliente`. Essas informações são extraídas do cadastro do cliente registrado no sistema, simplificando o processo e reduzindo erros operacionais.

* * *

### Box 5 - Local

O box **Local** foi projetado para centralizar as informações de localização envolvidas no processo de emissão do **CT-e**. Ele agrupa os dados de endereço dos boxes **Remetente** e **Destinatário**, além da localização da empresa emitente, proporcionando uma visão completa e organizada das localidades de origem e destino.

Box Local

Guia EMISSÃO DO CT-E1800

Exibe as informações de localização da empresa emitente. Os campos são preenchidos automaticamente com base no cadastro da empresa.

*   `Cód. Município IBGE`: Código numérico de 7 dígitos que identifica de forma padronizada o município, utilizado para validação das informações fiscais junto à SEFAZ.
    
*   `Município`: Indica o nome do município vinculado à empresa emitente.
    
*   `UF`: Indica a sigla do estado correspondente ao município informado.
    

Guia INÍCIO DA PRESTAÇÃO1800

Refere-se ao local de origem do transporte, identificando a localização do **remetente**. Os dados são preenchidos automaticamente conforme o remetente informado no box Remetente.

*   `Cód. Município IBGE`: Código numérico de 7 dígitos que identifica o município de início da prestação, utilizado para validação das informações fiscais junto à SEFAZ.
    
*   `Município`: Mostra o nome do município de origem do transporte.
    
*   `UF`: Mostra a sigla do estado correspondente ao município de início da prestação.
    

Guia TÉRMINO DA PRESTAÇÃO1800

*   Indica o destino final do transporte, correspondendo à localização do **destinatário**. Os dados são preenchidos automaticamente conforme o destinatário informado no box Destinatário.
    
*   `Cód. Município IBGE`:Código numérico de 7 dígitos que identifica o município de término da prestação, utilizado para validação fiscal junto à SEFAZ.
    
*   `Município`: Mostra o nome do município de destino do transporte.
    
*   `UF`: Mostra a sigla do estado correspondente ao município de término da prestação.
    

* * *

### Box 6 - Produtos

O box **Produtos** é utilizado para detalhar as características dos itens transportados, como unidade de medida, quantidade, peso ou volume. Essas informações garantem que os produtos sejam descritos de forma precisa e estejam de acordo com as normas fiscais.

Box Produtos

Os registros adicionados apresentam as seguintes informações:

*   `Núm.`: Número sequencial que identifica cada item da lista.
    
*   `Unidade`: Símbolo que representa a unidade de medida utilizada.
    
*   `Tipo medida`: Mostra a descrição da unidade de medida, auxiliando na interpretação da unidade informada.
    
*   `Quantidade`: Informa a quantidade do item, de acordo com a unidade de medida definida.
    

* * *

### Box 7 - Carga

O box **Carga** é utilizado para registrar informações essenciais sobre o produto predominante na carga transportada. Este é o item principal em termos de volume, peso ou relevância no envio, e sua definição precisa é fundamental para o correto manuseio, armazenamento e transporte, além de facilitar a organização e a rastreabilidade da carga.

Box Carga

*   `Valor Total (R$)`: Informa o valor total da carga transportada.
    
*   `Produto predominante`: Indica o principal item da carga, definido com base em sua relevância, como maior volume, peso ou valor.
    
*   `Outras características do produto`: Campo destinado à descrição complementar do produto predominante, permitindo informar atributos relevantes para identificação do transporte, como cor, tamanho, composição ou outras especificações.
    

* * *

### Box 8 - Componentes

O box **Componentes** é uma funcionalidade opcional que permite registrar informações adicionais relacionadas ao transporte, como pedágios, seguros, despesas extras e outros custos associados à operação. Seu uso facilita o controle e o gerenciamento de despesas, garantindo maior precisão na apuração dos custos totais do frete.

Box Componentes

Os componentes adicionados apresentam as seguintes informações:

*   `Núm.`: Número sequencial que identifica cada componente da lista.
    
*   `Descrição`: Campo destinado à identificação do componente adicional, onde devem ser informadas as despesas ou encargos vinculados ao transporte. (Ex.: Pedágio, Seguro, Estacionamento).
    
*   `Valor do Componente (R$)`: Indica o valor correspondente ao componente adicional.
    

* * *

### Box 9 - Serviços

O box **Serviços** é onde são registradas as informações financeiras e tributárias do serviço de transporte. Ele está dividido em duas guias principais: **Totais** e **ICMS**, permitindo o cálculo e a apuração precisa do valor total do serviço e das obrigações fiscais.

Box Serviços

Guia TOTAIS1800

Nesta guia, são registrados os valores relacionados ao custo total do serviço e o valor líquido a ser recebido pelo prestador.

*   `Total do Serviço (R$)`: Valor total do transporte, incluindo frete, seguros, pedágios e quaisquer outros custos associados.
    
*   `Valor a Receber (R$)`: Valor líquido que será efetivamente cobrado pelo serviço prestado, excluindo descontos ou abatimentos.
    

Guia ICMS1800

Apresenta as informações referentes à tributação do ICMS incidente sobre a prestação de serviço de transporte.

*   `Situação Tributária`: Define o regime de tributação do ICMS aplicado à operação.
    
    *   `ICMS Tributação Normal`: Aplica a alíquota padrão do ICMS.
        
    *   `ICMS Base de Cálculo Reduzida`: A base de cálculo do ICMS é reduzida em função de benefícios fiscais.
        
    *   `ICMS Isento`: Operação isenta de ICMS, conforme legislação.
        
    *   `ICMS Não Tributado`: Operação não sujeita à tributação de ICMS.
        
    *   `ICMS Diferido`: Pagamento do ICMS postergado para uma etapa posterior da cadeia de comercialização.
        
    *   `ICMS Substituição Tributária`: ICMS pago por outra parte da cadeia (normalmente o fornecedor).
        
    *   `ICMS Outros`: Situações tributárias não contempladas nas categorias anteriores.
        
*   `Valor Base (R$)`: Valor utilizado como base de cálculo para apuração do ICMS.
    
*   `Red. Base (R$)`: Valor de redução aplicada na base de cálculo, quando aplicável.
    
*   `Alíquota`: Percentual do ICMS aplicado sobre a base de cálculo.
    
*   `Total ICMS (R$)`: Valor total do ICMS calculado, com base na alíquota aplicada sobre a base de cálculo.
    

* * *

### Box 10 - CBS/IBS

O box CBS/IBS apresenta as informações referente aos tributos CBS e IBS aplicáveis à prestação de serviço de transporte no CT-e. Nele são informados os dados necessários para cálculo, apuração e detalhamento dos tributos.

Guia CBS/IBS1800

*   `CST`: Código de Situação Tributária que identifica o enquadramento fiscal da operação.
    
*   `Classificação Tributária`: Define o tipo de tributação aplicável na operação.
    
*   `Base CBS/IBS`: Valor da base de cálculo utilizada para apuração dos tributos CBS e IBS sobre a operação.
    

Guia CBS1800

*   `% Alíquota Nominal`: Percentual base do tributo definido em legislação, utilizado como referência para cálculo do CBS, antes da aplicação de reduções.
    
*   `% Redução`: Percentual de redução aplicado sobre a alíquota nominal, quando aplicável.
    
*   `% Alíquota Efetiva`: Percentual final aplicado após considerar a redução, utilizado no cálculo do tributo.
    
*   `Valor (R$)`: Valor do CBS calculado com base na alíquota efetiva sobre a base de cálculo.
    

Guia IBS 1800

*   `% Alíquota Nominal`: Percentual base do tributo definido em legislação, utilizado como referência para cálculo do IBS, antes da aplicação de reduções.
    
*   `% Redução`: Percentual de redução aplicado sobre a alíquota nominal, quando aplicável.
    
*   `% Alíquota Efetiva`: Percentual final aplicado após considerar a redução, utilizado no cálculo do tributo.
    
*   `Valor (R$)`: Valor do IBS calculado com base na alíquota efetiva sobre a base de cálculo.
    

Guia IBS MUNICIPAL1800

*   `% Alíquota Nominal`: Percentual base do tributo definido pelo município para cálculo do IBS Municipal.
    
*   `% Redução`: Percentual de redução aplicado sobre a alíquota nominal, quando aplicável.
    
*   `% Alíquota Efetiva`: Percentual final aplicado após considerar a redução, utilizado no cálculo do tributo.
    
*   `Valor (R$)`:Valor do IBS Municipal calculado com base a alíquota efetiva sobre a base de cálculo.
    

:info:atlassian-info#B3D4FF

Para consultar, acompanhar e validar informações relacionadas aos tributos CBS e IBS, acesse o [https://dfe-portal.svrs.rs.gov.br/Cff/ClassificacaoTributaria](https://dfe-portal.svrs.rs.gov.br/Cff/ClassificacaoTributaria).

* * *

Emissão de Novo CT-e - Normal
-----------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Agilidade no processo de transporte**: Simplifica a emissão e o envio de documentos fiscais, facilitando a fiscalização e o despacho das mercadorias.
    
*   **Confiabilidade dos Dados**: Com processos automatizados e validados eletronicamente, os dados se tornam mais confiáveis e seguros, melhorando a precisão das informações.
    

Acesse o módulo de Emissão de CT-e e clique no botão para emitir um novo documento:

No box **Nova Emissão de CT-e**, preencha os campos de **Data, Hora** e **Documento.**

No campo **CFOP**, clique no ícone . Será apresentada a seguinte tela para selecionar CFOP a ser utilizado no CT-e:

Tela pesquisa CFOP

No campo **Finalidade**, indique a opção **Normal**. Verifique e, se necessário, corrija os campos **Tomador de Serviço**, **Papel do Tomador** e **RNTRC**, sendo este último um campo obrigatório.

Box Novo CT-e

Com essas informações preenchidas no box **Novo CT-e**, prossiga para o próximo box.

No box de **Remetente**, clique no campo de cliente para selecionar o remetente do conhecimento de transporte.

Box Remetente

Com as informações preenchidas nos boxes anteriores, prossiga para o próximo box.

No box **Documentos**, clique no botão para adicionar um ou mais documentos fiscais ao conhecimento de transporte. A seguinte tela será apresentada:

Tela inserir documento

Digite a **Chave Eletrônica** válida, a **Data** de emissão e o **Valor do Documento (R$)**. Clique em para concluir a inclusão. Caso seja necessário incluir mais documentos, repita o processo.

No box **Destinatário**, clique no campo de cliente para selecionar o destinatário do conhecimento de transporte.

O box **Local** será preenchido automaticamente com base nas informações cadastradas da empresa e nas seleções de **Remetente** e **Destinatário**.

Avance para o box **Produtos** e clique no botão para selecionar especificamente o(s) tipo(s) de medida(s) do(s) produto(s) que está(ão) sendo transportado(s). A seguinte tela será apresentada:

Tela de indicação de tipo de medida

Após preencher os campos e conferir, clique no botão para prosseguir para o próximo box. Caso seja necessário incluir mais medidas, repita o processo.

No box **Carga,** preencha o valor total da carga, e digite o produto predominante sendo transportado.

Tela de indicação de carga

O preenchimento do box **Componentes** é opcional e pode ser utilizado para incluir informações adicionais, como pedágios, seguros, despesas e outros itens relacionados ao transporte. Para adicionar um componente, clique no botão . A seguinte tela será exibida:

Tela de indicação de componente

Após o preenchimento clique no botão .

O último box a ser preenchido é o de **Serviços**, onde devem ser informados o **Valor Total do Serviço (R$)** e o **Valor a Receber (R$)** na guia **Totais**. Na guia **ICMS**, preencha as informações conforme o regime tributário da sua empresa.

Após conferir todas as informações, clique no botão . A tela de listagem será exibida. Para realizar a emissão do documento, localize o CT-e desejado na listagem, clique no ícone para editar, e, na tela apresentada, clique no botão no canto superior direito.

* * *

Emissão de Novo CT-e - Anulação
-------------------------------

O Conhecimento de Transporte Eletrônico (CT-e) do tipo **Anulação** oferece diversos benefícios em situações onde é necessário corrigir erros ou cancelar operações de transporte já registradas. Esse tipo de CT-e é utilizado para anular documentos de transporte emitidos incorretamente e substituí-los, facilitando o ajuste de informações fiscais e operacionais.

Alguns benefícios desse tipo de lançamento são:

*   **Correção de Erros**: Permite corrigir lançamentos de CT-e emitidos com dados incorretos, como valores, destinatário, remetente ou outros dados essenciais. Isso ajuda a manter a precisão das informações fiscais e operacionais.
    
*   **Transparência e Conformidade**: Com o CT-e de anulação, a empresa mantém um registro adequado e transparente das correções realizadas, facilitando auditorias e inspeções fiscais.
    

Acesse o módulo **Emissão de CT-e** e clique no botão para emitir um novo documento.

No box **Nova Emissão de CT-e**, preencha os campos de **Data, Hora** e **Documento.**

No campo **CFOP**, clique no ícone . Será apresentada a seguinte tela para selecionar CFOP a ser utilizado no CT-e:

Tela pesquisa CFOP

No campo **Finalidade**, indique a opção **Anulação**. Verifique e, se necessário, corrija os campos **Tomador de Serviço**, **Papel do Tomador** e **RNTRC**, sendo este último um campo obrigatório.

Box Novo CT-e

No campo **Finalidade**, selecione a opção **Anulação**. Verifique e, se necessário, corrija os campos **Tomador de Serviço**, **Papel do Tomador** e **RNTRC**, sendo este último um campo obrigatório.

A emissão de um **CT-e de Anulação de Valores** é um procedimento específico utilizado para corrigir erros em um CT-e já autorizado, especialmente quando o serviço não foi realizado e não há possibilidade de cancelamento dentro do prazo regulamentar. Este processo deve ser realizado conforme as orientações estabelecidas no **Manual de Orientação do Contribuinte** e respeitar os prazos e condições definidos pela legislação vigente.

**Passos para a emissão do CT-e de Anulação de Valores:**

1.  \*\*Identificação da necessidade de anulação:\*\*
    
    *   Certifique-se de que o CT-e original contém erros que não podem ser corrigidos por meio de Carta de Correção Eletrônica (CC-e) ou que o serviço de transporte não foi realizado.
        
2.  \*\*Obtenção de declaração do tomador do serviço:\*\*
    
    *   Para tomadores não contribuintes do ICMS, é necessário obter uma declaração formal do tomador atestando que o serviço não foi prestado e que não houve aproveitamento de crédito fiscal relacionado ao CT-e original.
        
3.  \*\*Emissão do CT-e de Anulação:\*\*
    
    *   No sistema emissor de CT-e, selecione a opção para emitir um novo CT-e com finalidade de "Anulação de Valores".
        
    *   Preencha os campos obrigatórios, incluindo:
        
        *   **Chave de acesso do CT-e original:** Referencie o documento que está sendo anulado.
            
        *   **Justificativa da anulação:** Detalhe o motivo pelo qual a anulação está sendo realizada.
            
        *   **Valores negativos:** Insira os valores correspondentes de forma negativa, anulando os valores do CT-e original.
            
4.  \*\*Assinatura digital:\*\*
    
    *   Assine o CT-e de Anulação com o certificado digital da empresa, garantindo a autenticidade e integridade do documento.
        
5.  \*\*Transmissão para a SEFAZ:\*\*
    
    *   Envie o CT-e de Anulação para a Secretaria da Fazenda (SEFAZ) do seu estado para validação e autorização.
        
6.  \*\*Recebimento da autorização:\*\*
    
    *   Aguarde o retorno da SEFAZ com o protocolo de autorização. Uma vez autorizado, o CT-e de Anulação estará válido.
        
7.  \*\*Emissão do CT-e Substituto (se aplicável):\*\*
    
    *   Após a anulação, caso seja necessário, emita um novo CT-e correto (CT-e Substituto) para substituir o documento original.
        

**Prazos e Considerações Importantes:**

*   A emissão do CT-e de Anulação e do CT-e Substituto deve ocorrer em até **60 dias** a partir da data de emissão do CT-e original.
    
*   É obrigatório emitir o CT-e Substituto após a anulação para regularizar a operação fiscalmente.
    
*   Certifique-se de que o CT-e original não possua eventos que impeçam a anulação, como já ter sido cancelado ou substituído.
    
*   Mantenha toda a documentação comprobatória, incluindo a declaração do tomador e justificativas, para eventuais fiscalizações.
    

Para detalhes técnicos e layouts dos arquivos XML necessários, consulte o **Manual de Orientação do Contribuinte**, disponível no portal da SEFAZ do seu estado.

Lembre-se de que o não cumprimento dos procedimentos corretos pode resultar em penalidades fiscais. Portanto, é fundamental seguir rigorosamente as orientações oficiais e manter-se atualizado com as legislações pertinentes.

* * *

Edição de Conhecimento de Transporte Eletrônico
-----------------------------------------------

:info:atlassian-info#B3D4FF

A edição do **Conhecimento de Transporte Eletrônico (CT-e)** só é permitida enquanto o documento não tiver sido emitido. Após a emissão, o CT-e estará disponível apenas para consulta, não sendo possível alterar suas informações. Caso seja necessário corrigir algum dado de um CT-e que já tenha sido emitido, o mesmo deverá ser cancelado ou realizado a emissão de um novo CT-e com a finalidade Anulação.

A edição de um **Conhecimento de Transporte Eletrônico (CT-e)** permite atualizar as informações previamente cadastradas. Para editar um CT-e, acesse o módulo **Emissão de CT-e**, localize o documento desejado na lista e clique no ícone .

Na tela de edição, faça os ajustes necessários nos campos dos boxes conforme descrito nas instruções iniciais do módulo. Após realizar todas as alterações e revisar as informações, clique em para confirmar as modificações.

Para realizar a emissão do conhecimento, clique no botão localizado no canto superior direito da tela.

* * *

Exclusão de Conhecimento de Transporte Eletrônico
-------------------------------------------------

:info:atlassian-info#B3D4FF

A exclusão do **Conhecimento de Transporte Eletrônico (CT-e)** só é permitida enquanto o documento não tiver sido emitido. Após a emissão, o CT-e não poderá ser excluído, apenas cancelado caso haja necessidade.

Para excluir um **CT-e**, acesse o módulo **Emissão de CT-e**, localize o documento desejado na listagem e clique no ícone . Uma tela de confirmação será exibida, solicitando que você confirme a exclusão. É importante ressaltar que a exclusão de um CT-e é uma ação permanente e não pode ser desfeita. Após confirmar a exclusão, o sistema atualizará a listagem, removendo o documento excluído.

* * *

Consulta de Conhecimento de Transporte Eletrônico
-------------------------------------------------

Após a emissão de um CT-e, o sistema permite a consulta de todas as informações relacionadas ao mesmo. Para visualizar os detalhes, acesse o módulo de Emissão de CT-e, conforme demonstrado no início do manual. A seguinte tela será exibida:

Tela geral do módulo de Emissão de CT-e

Clique no ícone localizado no final da linha do registro do CT-e a ser visualizado. Será exibida uma tela com todas as informações do documento emitido nos boxes explicados acima.

Tela de alterar CT-e

No box **Alterar CT-e**, constam os seguintes botões: e .

*   Botão : Permite ao usuário baixar uma cópia do DACTE em formato PDF.
    
*   Botão : Permite ao usuário cancelar o CT-e emitido. Ao clicar nesse botão, será apresentada a seguinte tela de confirmação:
    

Tela de confirmação do cancelamento da nota

Clique no botão para confirmar o cancelamento do CT-e. O documento continuará cadastrado no sistema, porém com o status de **Cancelada.**