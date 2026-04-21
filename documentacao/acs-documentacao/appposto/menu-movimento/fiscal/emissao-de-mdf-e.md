---
title: Emissão de MDF-e
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/72384555
---

# Emissão de MDF-e

16truenonelisttrue

Emissão de MDF-e
================

O Manifesto Eletrônico de Documentos Fiscais (MDF-e) é um documento fiscal eletrônico que integra o Sistema Público de Escrituração Digital (SPED) e é regulamentado pelo Ajuste SINIEF 21/2010. Ele tem como objetivo simplificar e agilizar o transporte de mercadorias, consolidando informações de outras notas fiscais ou documentos fiscais associados à carga transportada.

**Principais Características do MDF-e**

*   **Documento digital:** É emitido e armazenado eletronicamente, com validade jurídica garantida pelo uso de assinatura digital (certificado digital padrão ICP-Brasil).
    
*   **Consolidação de informações:** Agrupa informações de diversos documentos fiscais (NF-e, CT-e ou NFC-e) em uma única carga.
    
*   **Registro nacional:** Utiliza o ambiente nacional do SPED para validação e controle.
    
*   **Emissão obrigatória em transporte:** Deve ser emitido antes do início da movimentação da carga.
    
*   **QRCode para verificação:** Permite consulta simplificada por fiscais e autoridades, garantindo maior transparência.
    

**Vantagens da Emissão do MDF-e**

*   **Redução de custos:** Elimina documentos físicos e economiza tempo em processos fiscais.
    
*   **Simplificação administrativa:** Centraliza informações em um único documento, facilitando o controle.
    
*   **Rastreamento eficiente:** Permite rastreamento online das mercadorias em transporte.
    
*   **Agilidade na fiscalização:** Minimiza atrasos em barreiras fiscais e aumenta a eficiência logística.
    
*   **Segurança jurídica:** Com assinatura digital e validação no ambiente nacional, reduz fraudes.
    

:note:atlassian-note#B3D4FF

**Observação:** Para realizar a emissão do Manifesto Eletrônico de Documentos Fiscais (MDF-e), é necessário que um certificado digital válido seja cadastrado no sistema. Para configurá-lo, acesse o menu **Cadastro** \> **Fiscal** \> **Certificados Digitais**. Além disso, é necessário que o CNPJ esteja ativo e que a empresa possua registro regular na SEFAZ (Secretaria da Fazenda).

* * *

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > Emissão de MDF-e

* * *

Será apresentada a seguinte tela:

Tela geral do módulo de Criar MDF-e

A imagem acima apresenta uma visão geral do módulo de MDF-e, detalhando como os usuários podem visualizar, filtrar e gerenciar suas emissões. Neste módulo, os usuários podem visualizar todas as emissões realizadas, organizadas de maneira cronológica.

Cada registro exibe detalhes importantes, como empresa, data de emissão, status e valor total.

A interface foi projetada para ser intuitiva e fácil de usar, permitindo que os usuários tenham total controle sobre suas emissões, desde o gerenciamento completo das emissões até a visualização detalhada.

* * *

Apresentação dos Boxes e Campos
-------------------------------

Ao clicar no botão , a tela principal do módulo será exibida, organizada em quinze boxes destacados como abas no canto direito da tela.

### Box 1 - Criar Novo MDF-e

O box **Criar Novo MDF-e** permite o registro e gerenciamento das informações necessárias para a emissão de um Manifesto Eletrônico de Documentos Fiscais (MDF-e). Este box facilita a organização e validação das informações obrigatórias para o transporte, garantindo que os dados estejam completos e corretos para autorização.

Box Criar Novo MDF-e

Abaixo estão os campos e informações que podem ser registrados nesse box para realizar a emissão:

*   Empresa: Empresa que realizará a emissão do documento. É possível selecionar uma empresa diferente da que está atualmente logada para realizar a emissão, sem a necessidade de sair e entrar em cada empresa separadamente para realizar o processo.
    
*   Código: Código gerado automaticamente de forma incremental pelo sistema..
    
*   Emitido: Indica se o documento já foi ou não oficialmente emitido.
    
*   Cancelado: Indica se o documento já foi ou não cancelado.
    
*   Encerrado: Refere-se ao procedimento obrigatório realizado para finalizar oficialmente o documento quando o transporte da carga associado ao MDF-e chega ao seu destino ou é concluído.
    
    *   **Sim**: Indica que o MDF-e foi corretamente finalizado junto à Secretaria da Fazenda (Sefaz). Esse status confirma que o transporte terminou e que não há mais movimentações relacionadas àquele manifesto.
        
    *   **Não**: Indica que o MDF-e ainda está aberto e ativo. É necessário encerrá-lo para evitar problemas fiscais, como bloqueio da emissão de novos manifestos pelo transportador.
        
*   Emissão: Indica a data em que o documento foi emitido, servindo como um registro importante do momento em que a transação foi formalizada.
    
*   Hora: Hora de emissão do MDF-e.
    
*   Série: Número de série do documento MDF-e.
    
*   Documento: Número do documento do MDF-e. Pode ser gerado pelo sistema clicando no ícone .
    
*   Modal: Modalidade de transporte utilizada.
    
    *   **Rodoviário**: Transporte de cargas por estradas, geralmente com caminhões, ideal para médias e curtas distâncias dentro do país.
        
    *   **Aquaviário**: Transporte de cargas por vias aquáticas (rios e oceanos), eficiente para longas distâncias e grandes volumes, principalmente em rotas internacionais.
        
*   Emitente:
    
    *   **Prestador de Serviço**: Empresa ou pessoa física que realiza um serviço de transporte de carga para terceiros, mediante contratação e pagamento.
        
    *   **Transportador de Carga Própria**: Empresa que transporta mercadorias próprias, sem prestar serviço a terceiros, realizando o transporte para abastecimento próprio ou operações internas.
        
*   UF Carga: Unidade federativa onde a carga foi carregada.
    
*   UF Descarga: Unidade federativa onde a carga será descarregada.
    
*   RNTRC: Registro Nacional de Transportadores Rodoviários de Carga, obrigatório no modal Rodoviário.
    
*   CIOT (Código Identificador da Operação de Transporte): Código obrigatório para identificar e rastrear operações de transporte realizadas por autônomos ou cooperativas. Deve ser informado no MDF-e, exceto para transportadoras com frota própria.
    
*   CPF/CNPJ Emissor CIOT: CPF ou CNPJ do responsável pela emissão do CIOT.
    
*   Chave Eletrônica (MDF-e): Chave numérica de 44 dígitos que identifica unicamente o MDF-e. Chave gerada pela SEFAZ.
    
*   Cod. Retorno: Código de retorno fornecido pela SEFAZ após a emissão.
    
*   Mensagem: Mensagem de resposta da SEFAZ sobre o status do MDF-e.
    

* * *

### Box 2 - Dados do Município de Carga

O box **Dados do Município de Carga** é necessário para registrar a origem exata do transporte, permitindo controle e rastreamento da carga desde o município de início. Essas informações são importantes para a fiscalização tributária e logística, assegurando conformidade e clareza no percurso registrado no MDF-e.

Box Dados Município Carga

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   Código: Código do município de acordo com o IBGE.
    
*   Descrição: Nome do município de origem da carga.
    
*   UF: Sigla do estado onde o município de carga está localizado.
    

* * *

### Box 3 - Dados do Município de Descarga

O box **Dados do Município de Descarga** contém informações sobre o município e a UF de destino da carga. Ela é necessária para garantir o correto rastreamento e entrega da mercadoria, além de facilitar a fiscalização e o cumprimento das obrigações fiscais.

Box Dados do Município de Descarga

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   Código: Código do município de acordo com o IBGE.
    
*   Descrição: Nome do município de destino da carga.
    
*   UF: Sigla do estado onde o município de descarga está localizado.
    

* * *

### Box 4 - Dados do Percurso

O box **Dados do Percurso** permite registrar e escolher os estados que o transporte de mercadoria irá atravessar entre o ponto de origem e o destino final. Essa funcionalidade é essencial para garantir o correto registro do trajeto, facilitando a fiscalização do trânsito da carga em diferentes estados e assegurando o cumprimento das obrigações fiscais e tributárias em cada localidade.

Box Dados do Percurso

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   UF: Sigla do estado pelo qual o transporte passará durante o trajeto.
    
*   Ordem: Sequência dos estados que o transporte da carga irá percorrer.
    

* * *

### Box 5 - Dados do Veículo

O box **Dados do Veículo** é utilizado para registrar informações essenciais sobre o veículo responsável pelo transporte da carga. Esse box permite que o emissor insira dados como a identificação do veículo (placa e UF de registro), características físicas (tara e tipo de carroceria), e o tipo de rodagem. Essas informações garantem que o transporte esteja em conformidade com as normas de segurança, peso permitido e regulamentação fiscal, facilitando o controle e a fiscalização por órgãos competentes.

Box Dados do Veículo

Abaixo estão os campos e informações que podem ser registrados nesse box:

Guia VEÍCULO TRAÇÃO

*   Placa: Identificação alfanumérica única do veículo.
    
*   UF: Unidade Federativa do registro do veículo.
    
*   Tara (KG): Peso máximo autorizado para o transporte, em quilogramas. Esse valor é utilizado para verificar a capacidade de carga permitida para o veículo, fundamental para evitar sobrecarga.
    
*   Tipo Carroceria: Designa a estrutura física que caracteriza o compartimento de carga do veículo. A carroceria define o tipo de carga e a forma de carregamento e descarregamento. Os tipos são detalhados a seguir:
    
    *   **Não aplicável:** Categoria de carroceria que indica ausência de compartimento de carga específico ou que o campo não se aplica ao veículo em questão.
        
    *   **Aberta:** Carroceria sem cobertura, geralmente utilizada para transporte de materiais sólidos, como madeira, maquinário e outros itens que podem ficar expostos.
        
    *   **Fechada/Baú:** Carroceria com compartimento fechado, protegendo a carga contra intempéries e facilitando o transporte de produtos que exigem maior segurança.
        
    *   **Graneleira:** Tipo de carroceria destinada ao transporte de carga a granel, como grãos, areia, ou produtos em estado solto que requerem compartimento específico.
        
    *   **Porta Contêiner:** Carroceria adaptada para transportar contêineres, com suportes e encaixes que estabilizam e fixam contêineres em segurança.
        
    *   **Sider:** Tipo de carroceria com laterais que podem ser abertas como lonas deslizantes, facilitando o carregamento e descarregamento lateral de mercadorias.
        
*   Tipo Rodado: Refere-se à configuração dos eixos e rodas do veículo, que afetam a estabilidade, capacidade de carga e manobrabilidade do veículo.
    
    *   **Truck:** Configuração de eixos e rodas em que o veículo possui um chassi reforçado, geralmente com capacidade maior de carga e estabilidade para transporte de cargas pesadas.
        
    *   **Toco:** Veículo com chassi menor e apenas um eixo traseiro simples, usado para transportar cargas de menor peso e dimensões reduzidas.
        
    *   **Cavalo Mecânico:** Veículo com cabine e motor projetados para puxar semirreboques, ideal para cargas pesadas e grandes distâncias.
        
    *   **Van:** Veículo de pequeno a médio porte, com capacidade de carga moderada, utilizado principalmente em entregas urbanas e transporte de pequenas cargas.
        
    *   **Utilitário:** Veículo leve, com espaço para carga e/ou passageiros, frequentemente usado para transporte leve e serviços urbanos.
        
    *   **Outros:** Categoria que abrange tipos de veículos e configurações de carroceria que não se enquadram nas definições anteriores, como veículos especiais ou configurações não convencionais.
        

Guia PROPRIETÁRIO

*   Proprietário não é emitente: Indica que o proprietário do veículo não é a mesma pessoa ou entidade que está emitindo o documento ou nota fiscal.
    
*   CPF/CNPJ: Número de identificação do proprietário do veículo. Pode ser o CPF (Cadastro de Pessoa Física) para indivíduos ou o CNPJ (Cadastro Nacional de Pessoa Jurídica) para empresas.
    
*   Nome: Nome completo ou razão social do proprietário do veículo, identificando a pessoa física ou jurídica responsável pelo registro e posse do veículo.
    
*   Tipo Proprietário: Categoria do proprietário do veículo
    
    *   **TAC Agregado:** Refere-se ao Transportador Autônomo de Cargas (TAC) que presta serviços de transporte de forma agregada a uma empresa, realizando operações contínuas e com exclusividade para um contratante.
        
    *   **TAC Independente:** Transportador Autônomo de Cargas que opera de maneira independente, sem vínculo exclusivo com nenhuma empresa, oferecendo seus serviços de transporte a vários contratantes.
        
    *   **Outros:** Categoria que abrange proprietários que não se enquadram nas definições específicas de TAC Agregado ou TAC Independente, podendo incluir empresas transportadoras, cooperativas, ou outras entidades com posse do veículo.
        
*   IE: Inscrição Estadual do proprietário, que é um número de identificação fiscal usado para o recolhimento de ICMS (Imposto sobre Circulação de Mercadorias e Serviços) no estado de registro do veículo. Aplicável a empresas e alguns proprietários.
    
*   RNTRC: Registro Nacional de Transportadores Rodoviários de Carga, emitido pela ANTT (Agência Nacional de Transportes Terrestres). Esse registro é obrigatório para empresas e autônomos que realizam transporte remunerado de cargas no Brasil.
    
*   UF: Unidade Federativa onde o proprietário do veículo está registrado. Indica o estado brasileiro de origem da empresa ou do transportador.
    

* * *

### Box 6 - Dados do Reboque

O box **Dados do Reboque** é necessário para identificar e caracterizar o reboque utilizado no transporte de cargas. Ele fornece informações essenciais sobre a identificação (placa e UF), a capacidade de carga (tara e capacidade máxima), e o tipo de carroceria, assegurando o uso adequado do reboque e o cumprimento das normas de segurança e regulamentação de trânsito. Esses dados permitem também o monitoramento correto da carga transportada, prevenindo sobrecargas e melhorando a eficiência logística.

Box Dados do Reboque

Abaixo estão os campos e informações que podem ser registrados nesse box:

Guia REBOQUE

*   Placa: Identificação alfanumérica única do veículo.
    
*   UF: Unidade Federativa do registro do veículo.
    
*   Tara (KG): Peso máximo autorizado para o transporte, em quilogramas. Esse valor é utilizado para verificar a capacidade de carga permitida para o veículo, fundamental para evitar sobrecarga.
    
*   Tipo Carroceria: Designa a estrutura física que caracteriza o compartimento de carga do veículo. A carroceria define o tipo de carga e a forma de carregamento e descarregamento. Os tipos são detalhados a seguir:
    
    *   **Não aplicável:** Categoria de carroceria que indica ausência de compartimento de carga específico ou que o campo não se aplica ao veículo em questão.
        
    *   **Aberta:** Carroceria sem cobertura, geralmente utilizada para transporte de materiais sólidos, como madeira, maquinário e outros itens que podem ficar expostos.
        
    *   **Fechada/Baú:** Carroceria com compartimento fechado, protegendo a carga contra intempéries e facilitando o transporte de produtos que exigem maior segurança.
        
    *   **Graneleira:** Tipo de carroceria destinada ao transporte de carga a granel, como grãos, areia, ou produtos em estado solto que requerem compartimento específico.
        
    *   **Porta Contêiner:** Carroceria adaptada para transportar contêineres, com suportes e encaixes que estabilizam e fixam contêineres em segurança.
        
    *   **Sider:** Tipo de carroceria com laterais que podem ser abertas como lonas deslizantes, facilitando o carregamento e descarregamento lateral de mercadorias.
        
*   Capacidade (KG): Indica o peso máximo de carga que o reboque pode transportar com segurança, evitando sobrecarga e garantindo a estabilidade no transporte.
    

Guia PROPRIETÁRIO

*   Proprietário não é emitente: Indica que o proprietário do veículo não é a mesma pessoa ou entidade que está emitindo o documento ou nota fiscal.
    
*   CPF/CNPJ: Número de identificação do proprietário do veículo. Pode ser o CPF (Cadastro de Pessoa Física) para indivíduos ou o CNPJ (Cadastro Nacional de Pessoa Jurídica) para empresas.
    
*   Nome: Nome completo ou razão social do proprietário do veículo, identificando a pessoa física ou jurídica responsável pelo registro e posse do veículo.
    
*   Tipo Proprietário: Categoria do proprietário do veículo
    
    *   **TAC Agregado:** Refere-se ao Transportador Autônomo de Cargas (TAC) que presta serviços de transporte de forma agregada a uma empresa, realizando operações contínuas e com exclusividade para um contratante.
        
    *   **TAC Independente:** Transportador Autônomo de Cargas que opera de maneira independente, sem vínculo exclusivo com nenhuma empresa, oferecendo seus serviços de transporte a vários contratantes.
        
    *   **Outros:** Categoria que abrange proprietários que não se enquadram nas definições específicas de TAC Agregado ou TAC Independente, podendo incluir empresas transportadoras, cooperativas, ou outras entidades com posse do veículo.
        
*   IE: Inscrição Estadual do proprietário, que é um número de identificação fiscal usado para o recolhimento de ICMS (Imposto sobre Circulação de Mercadorias e Serviços) no estado de registro do veículo. Aplicável a empresas e alguns proprietários.
    
*   RNTRC: Registro Nacional de Transportadores Rodoviários de Carga, emitido pela ANTT (Agência Nacional de Transportes Terrestres). Esse registro é obrigatório para empresas e autônomos que realizam transporte remunerado de cargas no Brasil.
    
*   UF: Unidade Federativa onde o proprietário do veículo está registrado. Indica o estado brasileiro de origem da empresa ou do transportador.
    

* * *

### Box 7 - Dados do Reboque 2

O box **Dados do Reboque 2** serve para registrar as informações de um segundo reboque em configurações de transporte onde são utilizados dois reboques, como nas combinações de veículos de carga (CVCs), comuns em operações de transporte de grandes volumes. Esse box armazena dados essenciais, como placa, tara, UF, tipo de carroceria e capacidade do segundo reboque, permitindo o controle individualizado e detalhado de cada unidade. Essa funcionalidade é importante para garantir a segurança, o cumprimento das normas de peso e capacidade e a rastreabilidade completa do conjunto de transporte.

Box Dados do Reboque 2

Abaixo estão os campos e informações que podem ser registrados nesse box:

Guia REBOQUE

*   Placa: Identificação alfanumérica única do veículo.
    
*   UF: Unidade Federativa do registro do veículo.
    
*   Tara (KG): Peso máximo autorizado para o transporte, em quilogramas. Esse valor é utilizado para verificar a capacidade de carga permitida para o veículo, fundamental para evitar sobrecarga.
    
*   Tipo Carroceria: Designa a estrutura física que caracteriza o compartimento de carga do veículo. A carroceria define o tipo de carga e a forma de carregamento e descarregamento. Os tipos são detalhados a seguir:
    
    *   **Não aplicável:** Categoria de carroceria que indica ausência de compartimento de carga específico ou que o campo não se aplica ao veículo em questão.
        
    *   **Aberta:** Carroceria sem cobertura, geralmente utilizada para transporte de materiais sólidos, como madeira, maquinário e outros itens que podem ficar expostos.
        
    *   **Fechada/Baú:** Carroceria com compartimento fechado, protegendo a carga contra intempéries e facilitando o transporte de produtos que exigem maior segurança.
        
    *   **Graneleira:** Tipo de carroceria destinada ao transporte de carga a granel, como grãos, areia, ou produtos em estado solto que requerem compartimento específico.
        
    *   **Porta Contêiner:** Carroceria adaptada para transportar contêineres, com suportes e encaixes que estabilizam e fixam contêineres em segurança.
        
    *   **Sider:** Tipo de carroceria com laterais que podem ser abertas como lonas deslizantes, facilitando o carregamento e descarregamento lateral de mercadorias.
        
*   Capacidade (KG): Indica o peso máximo de carga que o reboque pode transportar com segurança, evitando sobrecarga e garantindo a estabilidade no transporte.
    

Guia PROPRIETÁRIO

*   Proprietário não é emitente: Indica que o proprietário do veículo não é a mesma pessoa ou entidade que está emitindo o documento ou nota fiscal.
    
*   CPF/CNPJ: Número de identificação do proprietário do veículo. Pode ser o CPF (Cadastro de Pessoa Física) para indivíduos ou o CNPJ (Cadastro Nacional de Pessoa Jurídica) para empresas.
    
*   Nome: Nome completo ou razão social do proprietário do veículo, identificando a pessoa física ou jurídica responsável pelo registro e posse do veículo.
    
*   Tipo Proprietário: Categoria do proprietário do veículo
    
    *   **TAC Agregado:** Refere-se ao Transportador Autônomo de Cargas (TAC) que presta serviços de transporte de forma agregada a uma empresa, realizando operações contínuas e com exclusividade para um contratante.
        
    *   **TAC Independente:** Transportador Autônomo de Cargas que opera de maneira independente, sem vínculo exclusivo com nenhuma empresa, oferecendo seus serviços de transporte a vários contratantes.
        
    *   **Outros:** Categoria que abrange proprietários que não se enquadram nas definições específicas de TAC Agregado ou TAC Independente, podendo incluir empresas transportadoras, cooperativas, ou outras entidades com posse do veículo.
        
*   IE: Inscrição Estadual do proprietário, que é um número de identificação fiscal usado para o recolhimento de ICMS (Imposto sobre Circulação de Mercadorias e Serviços) no estado de registro do veículo. Aplicável a empresas e alguns proprietários.
    
*   RNTRC: Registro Nacional de Transportadores Rodoviários de Carga, emitido pela ANTT (Agência Nacional de Transportes Terrestres). Esse registro é obrigatório para empresas e autônomos que realizam transporte remunerado de cargas no Brasil.
    
*   UF: Unidade Federativa onde o proprietário do veículo está registrado. Indica o estado brasileiro de origem da empresa ou do transportador.
    

* * *

### Box 8 - Dados dos Condutores

O box **Dados dos Condutores** é essencial para identificar e registrar os motoristas responsáveis pelo transporte, garantindo que sejam habilitados e permitindo o controle sobre a segurança e legalidade da operação.

Box Dados dos Condutores

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   CPF: Número do Cadastro de Pessoa Física do condutor, usado para identificação única e obrigatória do motorista.
    
*   Nome: Nome completo do condutor, necessário para identificar quem está operando o veículo durante o transporte.
    

* * *

### Box 9 - Dados dos Documentos

O box **Dados dos Documentos** é fundamental para assegurar a regularidade fiscal do transporte, registrando documentos obrigatórios como notas fiscais (**NF-e**) e conhecimentos de transporte (**CT-e**). Esses dados permitem a verificação eletrônica, garantem a conformidade legal e facilitam o acompanhamento da carga desde a origem até o destino.

Box Dados dos Documentos

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   Município de Descarga: Código IBGE do município onde a carga será descarregada, essencial para localização precisa e para atender exigências fiscais.
    
*   Chave: Código numérico único gerado para cada documento eletrônico (CT-e ou NF-e), utilizado para consulta e validação da autenticidade do documento fiscal.
    
*   Cód. Barras: Código de barras específico para garantir a autenticidade do formulário de segurança utilizado em documentos fiscais em papel, quando aplicável.
    

:note:atlassian-note#B3D4FF

**Observação:** É possível incluir dois tipos de documentos: **NF-e** e **CT-e**. Esses documentos serão detalhados posteriormente, durante o processo de inclusão do MDF-e.

* * *

### Box 10 - Dados dos Lacres

O box **Dados dos Lacres** é essencial para registrar os lacres de segurança das cargas, garantindo sua integridade e prevenindo violações durante o transporte.

Box Dados dos Lacres

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   Lacre: Código de segurança que identifica o lacre aplicado na carga, garantindo a integridade e inviolabilidade do compartimento durante o transporte.
    

* * *

### Box 11 - Dados dos Pedágios

O box **Dados dos Pedágios** registra os custos de pedágio durante o transporte, essencial para o controle financeiro da viagem e para cálculo preciso do custo total do frete.

Box Dados dos Pedágios

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   Num. Vale: Número de identificação do vale pedágio utilizado, permitindo o rastreamento e comprovação do pagamento de pedágios específicos.
    
*   CNPJ Fornecedor: Cadastro do CNPJ da empresa fornecedora do vale pedágio, que é responsável pela emissão e administração do pagamento.
    
*   CNPJ Responsável: Cadastro do CNPJ da empresa responsável pelo pagamento do pedágio, geralmente o contratante do serviço de transporte.
    

* * *

### Box 12 - Dados dos Totais

O box **Dados dos Totais** é crucial para registrar informações financeiras e de segurança da carga, como o valor, peso, e detalhes do seguro, garantindo a transparência, conformidade fiscal e proteção da carga durante o transporte.

Box Dados dos Totais

Abaixo estão os campos e informações que podem ser registrados nesse box:

Guia TOTALIZADORES

*   Valor Total da Carga: Valor monetário total das mercadorias transportadas, utilizado para fins fiscais e de seguro.
    
*   Unidade de Medida: Unidade usada para quantificar o peso da carga, geralmente em quilogramas (KG) ou toneladas (T).
    
*   Peso Bruto Total da Carga: Peso total das mercadorias incluindo embalagens, importante para controle de capacidade e segurança.
    

Guia SEGURO

*   Responsável: Parte responsável pela carga durante o transporte, podendo ser o **Emitente** (quem emite o documento) ou o **Contratante** (quem contrata o transporte).
    
*   CPF/CNPJ Responsável: Documento do responsável pela carga, para identificação fiscal e jurídica.
    
*   Seguradora: Nome da empresa seguradora que cobre a carga durante o transporte.
    
*   CNPJ da Seguradora: CNPJ da empresa seguradora, para identificação legal da cobertura.
    
*   Apólice: Número da apólice de seguro, garantindo a cobertura de riscos da carga.
    
*   Averbação: Registro específico da carga na apólice de seguro, validando sua inclusão na cobertura.
    

Guia INFORMAÇÕES ADICIONAIS DE INTERESSE AO FISCO

*   Informações adicionais de interesse ao fisco: É usado para registrar dados suplementares relevantes para a fiscalização, como legislações, benefícios fiscais ou eventos logísticos específicos.
    

Guia INFORMAÇÕES COMPLEMENTARES DE INTERESSE DO CONTRIBUINTE

*   Informações complementares de interesse do contribuinte: Permite registrar, em documentos fiscais eletrônicos, dados adicionais não obrigatórios, mas relevantes para fins comerciais, operacionais ou contratuais. Esse campo facilita a comunicação, detalha operações e melhora o gerenciamento interno.
    

* * *

### Box 13 - Produtos

O box **Dados do Produto** é fundamental para identificar e classificar corretamente os tipos de carga, garantindo o transporte adequado, o cumprimento das normas de segurança e a eficiência na logística, especialmente para produtos perigosos ou com requisitos específicos de manuseio.

Box Produto

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   Tipo do Produto: Classificação do produto conforme a natureza e forma de transporte, podendo ser:
    
    *   **Granel sólido:** Produtos sólidos transportados sem embalagem, como grãos ou minérios.
        
    *   **Granel liquido:** Produtos líquidos transportados a granel, como óleos ou combustíveis.
        
    *   **Frigorificada:** Cargas que necessitam de refrigeração, como carnes ou produtos perecíveis.
        
    *   **Conteinerizada:** Produtos transportados em contêineres, garantindo proteção e facilidades logísticas.
        
    *   **Carga Geral:** Produtos diversos que não se enquadram nas categorias anteriores.
        
    *   **Neogranel:** Produtos a granel, mas com características específicas ou novas tecnologias de transporte.
        
    *   **Perigosa (Granel sólido):** Produtos sólidos a granel com risco de perigo, como produtos químicos ou tóxicos.
        
    *   **Perigosa (Granel liquido):** Produtos líquidos perigosos, como ácidos ou combustíveis inflamáveis.
        
    *   **Perigosa (Carga Frigorificada):** Produtos refrigerados que são perigosos, como certos produtos químicos ou biológicos.
        
    *   **Perigosa (Conteinerizada):** Produtos perigosos embalados em contêineres, como materiais inflamáveis ou reativos.
        
    *   **Perigosa (Carga Geral):** Produtos diversos classificados como perigosos, como cargas radioativas ou explosivas.
        
*   Descrição do produto: Detalhamento específico do tipo de carga transportada.
    
*   CEP Carga: Código de Endereçamento Postal do local onde a carga se origina, essencial para a logística de transporte e rastreamento.
    
*   CEP Descarga: Código de Endereçamento Postal do local de destino da carga, utilizado para planejamento e gestão da entrega.
    

* * *

### Box 14 - Dados dos Contratantes

O box **Dados dos Contratantes** é crucial para identificar as partes envolvidas no transporte, como o contratante do serviço e seus detalhes fiscais, garantindo a transparência, a responsabilidade legal e o correto acompanhamento das obrigações contratuais durante a operação de transporte.

Box Dados dos Contratantes

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   CNPJ: Documento da contratante. Pode ser o CPF (Cadastro de Pessoa Física) para indivíduos ou o CNPJ (Cadastro Nacional de Pessoa Jurídica) para empresas.
    
*   Nome: Razão social da empresa ou nome completo do contratante.
    

* * *

### Box 15 - Dados do Aquaviário

O box **Dados do Aquaviário** é essencial para registrar informações sobre o transporte marítimo e fluvial, garantindo o rastreamento da carga, a segurança na navegação e a conformidade com as normas regulatórias em cada etapa da viagem.

Box Dados do Aquaviário

Abaixo estão os campos e informações que podem ser registrados nesse box:

*   IRIN: Identificação única da embarcação na Marinha do Brasil, necessária para o controle e rastreamento de embarcações nacionais.
    
*   Tipo de Navegação: Classificação da operação de transporte:
    
    *   **Interior**: Transporte realizado em rios e vias interiores.
        
    *   **Cabotagem**: Transporte entre portos do mesmo país ao longo da costa.
        
*   Número da Viagem: Identificador específico para a viagem realizada pela embarcação, útil para controle e rastreamento da carga durante o trajeto.
    
*   Tipo de Embarcação: Categoria da embarcação utilizada, como cargueiro, barcaça ou navio tanque, que define a capacidade e características de transporte.
    
*   Código da Embarcação: Código alfanumérico que identifica a embarcação, utilizado para facilitar o registro e controle de operações de transporte aquaviário.
    
*   Nome da Embarcação: Nome oficial registrado da embarcação, que facilita sua identificação e rastreamento.
    
*   Porto de Embarque: Porto onde a carga foi carregada na embarcação, marcando o início da viagem marítima.
    
*   Porto de Destino: Porto final onde a carga será descarregada, determinando o término da viagem marítima.
    
*   Porto de Transbordo: Porto intermediário onde a carga pode ser transferida para outra embarcação antes de seguir para o destino final, permitindo a logística de carga em etapas. Esses dados são fundamentais para gerenciar o transporte aquaviário, garantindo o controle sobre o percurso, a segurança e a eficiência do transporte de cargas via embarcações.
    

:note:atlassian-note#B3D4FF

**Observação:** Se o modal selecionado for rodoviário, o box de dados aquaviários será desabilitado. Da mesma forma, ao escolher o modal aquaviário, os boxes **Dados de Veículos**, **Reboque** e **Reboque 2** serão desabilitados.

* * *

Emissão de MDF-e - Rodoviário
-----------------------------

Alguns benefícios desse tipo de lançamento são:

*   **Centralização de Documentos**: Consolida as informações de diferentes documentos fiscais (como CT-e e NF-e) em um único documento eletrônico, facilitando a gestão e organização.
    
*   **Redução do Tempo em Postos de Fiscalização**: Com o MDF-e digitalizado, os dados ficam acessíveis para as autoridades, agilizando a liberação nos postos de controle.
    

Acesse o módulo de criação de MDF-e e clique no botão para emitir um novo documento:

No box **Criar Novo MDF-e**, preencha os campos **UF de Carga** e **UF de Descarga**, que servirão como base para a seleção do código IBGE do município. Lembre-se também de informar o **RNTRC**, um campo obrigatório.

Box Criar Novo MDF-e

:note:atlassian-note#B3D4FF

**Observação:** Os campos **CIOT** e **CPF/CNPJ do Emissor do CIOT** devem ser preenchidos apenas nos casos em que o transporte de carga é realizado como prestação de serviço por terceiros.

No segundo box, **Dados do Município da Carga**, clique no botão . A seguinte tela será apresentada:

Tela para incluir os municípios de carga

Selecione o município de carga clicando no ícone . Após escolher o código do município, os campos seguintes serão preenchidos automaticamente. Clique no botão para confirmar e avance para o próximo box.

No terceiro box, **Dados do Município da Descarga**, clique no botão e selecione o município de descarga, realizando o mesmo procedimento do segundo box, e finalize clicando novamente no botão .

:note:atlassian-note#B3D4FF

**Observação:** A listagem dos municípios de Carga e Descarga serão de acordo com os estados selecionados nos campos **UF Carga** e **UF Descarga** preenchidos no primeiro box, **Criar Novo MDF-e.**

No box **Dados do Percurso**, clique no botão . A seguinte tela será apresentada:

Tela para incluir o percurso do MDF-e

Digite a sigla da **UF** correspondente a cada estado por onde o transporte passará e clique no botão para adicionar a UF à lista do percurso. Caso o transporte passe por outros estados, repita o processo para incluir todas as UF's necessárias.

O próximo box a ser preenchido é o de **Dados do Veículo**. Indique os campos **Placa,** **Tara (KG), Tipo Carroceria** e **Tipo Rodado.**

Box Dados do Veículo

:note:atlassian-note#B3D4FF

**Observação:** Caso o proprietário do veiculo não seja o emitente, selecione a caixa de seleção **Proprietário não é emitente** e preencha os campos obrigatórios como **CPF/CNPJ, Nome, RNTRC** e **UF**.

Os boxes **Reboque** e **Reboque 2** são opcionais. Caso seja necessário preenchê-los, insira as informações correspondentes.

No box **Dados dos Condutores**, clique no botão . A seguinte tela será apresentada:

Tela para incluir condutores

Preencha os dados do(s) condutor(es) e clique no botão . Caso o transporte seja realizado por mais de um condutor, repita o processo para incluir todos os condutores necessários.

O box **Dados dos Documentos** desempenha um papel crucial no processo, a correta inserção desses dados é fundamental para garantir a integração e a conformidade das operações logísticas. Clique no botão .

Tela para incluir documentos

Clique no campo **Tipo Documento** e escolha entre incluir uma **NF-e** ou um **CT-e**. Em seguida, insira a chave eletrônica correspondente e o código do município de descarga. Após preencher os campos, revise atentamente as informações e clique no botão . Caso seja necessário adicionar mais de uma **NF-e** ou **CT-e**, repita o processo.

No box **Dados dos Lacres**, clique no botão . Será apresentada a seguinte tela:

Tela para incluir lacres

Insira o número do lacre e clique no botão . Se for necessário adicionar mais de um lacre, repita o processo.

No box **Dados dos Pedágios**, clique no botão . Será apresentada a seguinte tela:

Tela para incluir pedágios

Após preencher os campos, avance para o próximo box.

No box **Dados dos Totais**, insira as informações de acordo com sua necessidade. É imprescindível preencher os campos **Valor Total da Carga** e **Peso Bruto Total da Carga**. Antes de prosseguir, verifique cuidadosamente se os valores inseridos estão corretos.

Box Dados dos Totais

Revise as informações preenchidas e, em seguida, avance para o próximo box.

No box **Produto**, forneça os dados do item que está sendo transportado. Selecione o **Tipo do Produto**, que por padrão está configurado como "Carga Geral", e preencha o campo **Nome do Produto**, que é obrigatório. Certifique-se de que todas as informações estão corretas antes de continuar.

Box Produto

No box **Dados dos Contratantes**, clique no botão . Será apresentada a seguinte tela:

Tela para incluir contratantes

Após preencher os contratantes envolvidos no transporte, clique no botão e avance para o próximo box. Caso haja mais de um contratante, repita o procedimento para cada um.

Depois de preencher os dados, revise cuidadosamente as informações inseridas e, em seguida, clique no botão para emitir o MDF-e.

:info:atlassian-info#B3D4FF

No modal Rodoviário, o box **Dados do Aquaviário** é desabilitado e será detalhado na seção seguinte.

* * *

Inclusão de MDF-e - Aquaviário
------------------------------

:info:atlassian-info#B3D4FF

Para a inclusão de um MDF-e do tipo **Modal Aquaviário**, o preenchimento dos campos segue o mesmo padrão, com exceção de que os boxes **Dados do Veículo**, **Reboque** e **Reboque 2** são desabilitados, enquanto o box **Dados do Aquaviário** é habilitado.

Box Dados do Aquaviário

Preencha os campos **IRIN, Número da viagem, Tipo de Embarcação, Código da Embarcação, Nome da Embarcação, Porto de Embarque** e **Porto de Destino.**

Verifique todos os campos, revise as informações e clique no botão para concluir a operação e emitir o MDF-e.

* * *

Edição de Manifesto Eletrônico de Documentos Fiscais
----------------------------------------------------

O **Manifesto Eletrônico de Documentos Fiscais (MDF-e)** pode ser editado apenas antes de sua emissão. Após emitido e autorizado pela Sefaz, não é possível alterar as informações, e o documento estará disponível somente para consulta. Caso seja necessário corrigir dados, o MDF-e deve ser cancelado ou encerrado, dependendo da situação, seguido da emissão de um novo MDF-e, se necessário.

A edição de um **Manifesto Eletrônico de Documentos Fiscais (MDF-e)** permite atualizar as informações previamente cadastradas. Para editar um MDF-e, acesse o módulo **Emissão de MDF-e**, localize o documento desejado na lista e clique no ícone .

Na tela de edição, faça os ajustes necessários nos campos dos boxes conforme descrito nas instruções iniciais do módulo. Após realizar todas as alterações e revisar as informações, clique em para confirmar as modificações.

Para realizar a emissão do conhecimento, clique no botão localizado no canto superior direito da tela.

* * *

Exclusão de Manifesto Eletrônico de Documentos Fiscais
------------------------------------------------------

A exclusão de um **Manifesto Eletrônico de Documentos Fiscais (MDF-e)** só é possível antes de sua emissão. Após emitido, o documento não pode ser excluído, sendo necessário realizar o cancelamento dentro do prazo legal (geralmente 24 horas) ou o encerramento, caso o transporte tenha sido finalizado. Se necessário, um novo MDF-e deve ser emitido.

Para excluir um **MDF-e**, acesse o módulo **Emissão de MDF-e**, localize o documento desejado na listagem e clique no ícone . Uma tela de confirmação será exibida, solicitando que você confirme a exclusão. É importante ressaltar que a exclusão de um MDF-e é uma ação permanente e não pode ser desfeita. Após confirmar a exclusão, o sistema atualizará a listagem, removendo o documento excluído.

* * *

Consulta de Manifesto Eletrônico de Documentos Fiscais
------------------------------------------------------

Após a emissão de um MDF-e, o sistema permite a consulta de todas as informações relacionadas ao mesmo. Para visualizar os detalhes, acesse o módulo de Emissão de MDF-e, como mostrado no inicio do manual. Será apresentada a seguinte tela:

Tela geral do módulo de Emissão de MDF-e

Clique no ícone localizado no final da linha do registro do MDF-e a ser visualizado. Será exibida uma tela com todas as informações do documento emitido nos boxes explicados acima.

Tela de alterar MDF-e

No box **Alterar MDF-e**, constam os seguintes botões: , e .

*   Botão : Permite visualizar o DAMDFE, uma representação gráfica do MDF-e. Ele exibe informações como chave de acesso, dados do emitente, documentos vinculados e pode ser usado para consulta rápida, impressão ou envio em PDF.
    
*   Botão : Permite ao usuário cancelar o MDF-e emitido. Ao clicar nesse botão, será apresentada a seguinte tela de confirmação:
    

Tela de confirmação do cancelamento do MDF-e

Clique no botão para confirmar o cancelamento do MDF-e. O documento continuará cadastrado no sistema, porém com o status de **Cancelada.**

*   Botão : Encerrar o MDF-e informa à SEFAZ a conclusão do transporte, garantindo regularidade fiscal, liberando o veículo para novas operações e evitando penalidades.
    

:note:atlassian-note#B3D4FF

**Observação:** Se algum campo foi informado incorretamente, você receberá uma mensagem de rejeição, e precisará corrigir essa informação antes de tentar transmitir novamente. Se for necessário, você pode cancelar o MDF-e, desde que não tenha se passado **mais de 24 horas** desde a sua autorização. É possível também incluir novos condutores no MDF-e autorizado, caso você precise alterar o motorista informado antes.