---
title: Nota Técnica - Março 2026
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/791478273
---

# Nota Técnica - Março 2026

none

* * *

`ACS Gerente - Versão 6.3287.6.703 - 24 de Março de 2026`
=========================================================

Menu Cadastro
-------------

### **1\. Cadastro de Clientes**

*   Foi implementada uma correção na regra de cálculo da **data de vencimento** dos vales para clientes configurados com:
    
    *   `Tipo de Fechamento`**:** Dias Programados
        
    *   `Fechamento 1`**:** 31
        
    
    Anteriormente, quando o vale era lançado em meses com 28, 29 ou 30 dias, o sistema definia a data de vencimento do vale como **dia 01 do mês seguinte**, em vez de considerar o **último dia do mês vigente**, gerando divergência no controle financeiro.
    
    Com o ajuste, o sistema passa a definir automaticamente como vencimento o **último dia válido do mês** (28, 29 ou 30, conforme o caso).
    

Cadastro de Clientes

Relatório de Relação de Vales

Faturamento por Vale

### **2\. Cadastro de Produtos**

*   Foram implementadas melhorias no **Cadastro de Produtos** para reforçar a integridade, rastreabilidade e controle das promoções integradas (BR Mania).
    

Agora, quando um produto estiver vinculado a uma promoção integrada, os campos `Início da Validade` e `Fim da Validade` (guia **Estoque**) são sincronizados com as datas oficiais da promoção, sobrescrevendo qualquer valor anteriormente ou posteriormente informado.

Além disso, foi implementada uma nova auditoria, onde alterações relacionadas a `Início da validade` e `Fim da validade` (guia **Estoque**) e `Cód. Promoção Br Mania` (guia **Integração**) passam a ser registradas em **auditoria**:

Relatório de Auditoria

Também foi criada uma nova **permissão específica para edição do** `Cód. promoção Br Mania` (guia **Integração**) das promoções.

Cadastro de Operações

Essa permissão nasce habilitada apenas para **Super Usuários**, podendo ser concedida pelo administrador a outros perfis conforme necessidade.

### **3\. Cadastro de Pontos de Vendas**

*   Os parâmetros de controle de litragem máxima no **Cadastro de Pontos de Venda** possuíam limites muito baixos para a realidade de postos de rodovia. Ao atender veículos de grande porte (caminhões e carretas), os abastecimentos legítimos frequentemente ultrapassavam esses limites, sendo descartados ou bloqueados pelo sistema, o que causava atrasos e perda de informações operacionais. Os limites de tolerância no cadastro do PDV foram ampliados para comportar operações de alto volume:
    
    *   `Quantidade máxima de litros do abastecimento` e `Quantidade máxima de litros do encerramento` (guia **Restrições**)**:** O limite máximo para abastecimentos e encerramentos foi elevado para **10.000 litros**.
        
    *   Removido o campo `Valor máximo do abastecimento`.
        

Cadastro de Pontos de Venda

### **4\. Cadastro de Administradoras**

*   Foram adicionadas novas opções de configuração no **Cadastro de Administradoras** (guia **Taxas**):
    
    *   Agora é possível definir `Desconto em Espécie` ou `Acréscimo em Espécie` (além do Desconto e Acréscimo Percentual), permitindo que o sistema reflita com exatidão os contratos firmados com operadoras de cartão que utilizam **taxas fixas**.
        

Cadastro de Administradoras

Os valores de descontos ou acréscimos (percentuais ou em espécie) constam na **Prestação de Contas** como **Desconto de Contrato** e **Acréscimo de Contrato**, respectivamente.

* * *

Menu Estoque
------------

### **1\. Compra de Diversos**

*   A Compra de Diversos foi ajustada com duas melhorias principais:
    

Ao importar uma nota de compra contendo um item inexistente, o usuário utilizava o recurso de **cadastrar o produto diretamente pelo fluxo da nota**. No entanto, o sistema marcava internamente esse novo produto com o parâmetro de atualização de saldo como **"NÃO"**. Como resultado, mesmo após finalizar a compra, o saldo em estoque permanecia zerado, pois o sistema tratava o item como se estivesse bloqueado para movimentação. Ajustada a rotina de cadastro pelo módulo de Compras. Agora, ao criar um produto durante a importação da nota, o sistema habilita automaticamente a atualização de saldo e processa a entrada da mercadoria corretamente, respeitando a data de emissão/entrada do documento fiscal.

O sistema já possuía uma regra de proteção: quando existe **contagem de estoque concluída com data posterior à entrada da nota**, o saldo não é incrementado novamente, pois a contagem passa a ser o saldo oficial. Entretanto, essa mesma regra não era aplicada no **cancelamento da compra**. A regra de validação passou a ser aplicada também no **cancelamento da compra**. Agora, ao cancelar uma nota, o sistema verifica se existe **contagem concluída com data posterior à data de recebimento da compra**. Caso exista, **não realiza a baixa física do estoque** e registra apenas a movimentação histórica com quantidade zero, preservando o saldo oficial da última contagem.

### **2\. Contagem de Estoque**

*   A Contagem de Estoque foi ajustada com duas melhorias principais:
    

Foi implementada uma melhoria na rotina de **Contagem de Estoque (tipo Diferença)**, garantindo maior precisão na apuração dos saldos. Na contagem por diferença, o sistema utilizava como referência o **saldo atual do produto**, independentemente da data e hora informadas pelo usuário na contagem. Isso podia gerar inconsistências quando o objetivo era ajustar o estoque com base em um **saldo válido em um momento específico**, como após uma contagem física anterior ou restauração de backup. A tela de contagem foi ajustada para que, quando selecionado o tipo **Diferença**, o sistema passe a considerar e exibir o **saldo do produto na data e hora informadas pelo usuário**, e não mais o saldo atual.

Relatório de Acompanhamento de Saldo por Produto

Contagem de Estoque por Diferença - Antes das Vendas

Contagem de Estoque por Diferença - Depois das Vendas

A alteração da **Hora** é permitida apenas na contagem do tipo **Diferença**. Quando o tipo de contagem for **Saldo**, o campo hora permanece automaticamente preenchido com a hora da criação da contagem, mantendo a regra original do processo.

Incluído novo filtro para seleção de produtos conforme o **Saldo**, com as opções `Todos`, `Maior que zero`, `Maior ou igual a zero`, `Igual a zero`, `Menor ou igual a zero`, `Menor que zero`. Proporcionando maior agilidade na contagem de estoque e facilidade na identificação de divergências (estoque zerado ou negativo).

Contagem de Estoque - Filtro Saldo

* * *

Menu Financeiro
---------------

### **1\. Conciliação de Extrato Bancário**

*   Ao realizar a conciliação de Contas a Pagar e Faturas de Cartão em ambiente multiempresa pelo OFX, foram identificadas duas inconsistências:
    
    *   O sistema estava conciliando títulos de empresas **não vinculadas** à conta bancária do extrato.
        
    *   Estavam sendo listadas parcelas com **vencimento posterior à data da conciliação**.
        
        *   Por exemplo, em lançamentos com múltiplas parcelas (ex.: 12 parcelas), o sistema apresentava incorretamente a **última parcela cadastrada**, em vez da parcela correspondente ao vencimento correto dentro do período conciliado.
            
    
    Foi ajustada a validação para considerar, na conciliação de **Recebimento de cartão** e **Pagamento de Fornecedor**, apenas Faturas de Cartão e Contas a Pagar das empresas vinculadas à conta bancária do extrato. Também foi corrigido o filtro de vencimento, impedindo o retorno de parcelas posteriores à data da conciliação, apresentando somente a parcela correta conforme a data correspondente do extrato.
    

### **2\. Faturamento de Convênio (Por Data)**

*   Ao gerar faturas pelo módulo **Faturamento de Convênio (Por Data)**, quando não existiam vales pendentes para o **período de emissão** ou para a **data de vencimento** informada, o sistema não apresentava nenhuma mensagem ao usuário. Essa ausência de retorno gerava dúvidas e a impressão de que o sistema não estava respondendo corretamente. Foi incluída uma validação no processo de geração de faturas que exibe a mensagem:  
    **“Não há vales pendentes no período informado”**, sempre que não forem encontrados registros para os filtros utilizados.
    

Faturamento de Convênio - Por Data

### **3\. Controle de Faturas de Convênio**

*   Foi implementada a opção de quitação de **Fatura de Convênio** por **Depósito Bancário**, garantindo maior precisão no controle financeiro e nos relatórios de faturas quitadas. Ao selecionar essa opção, o usuário pode acessar a tela de **Depósito Bancário** (via botão ) para informar os dados da operação. Os valores informados são transportados corretamente para a quitação da fatura. O **Relatório de Faturas Quitadas** passa a exibir um resumo separado para **Depósito Bancário**, distinto das outras formas de recebimento.
    

Quitação de Fatura de Convênio

Relatório de Faturas de Quitadas

* * *

Menu Movimento
--------------

### **1\. Caixas de Venda**

*   Ao acessar a tela de **Prestação de Contas**, o sistema aplicava automaticamente um filtro de período para exibir registros recentes. Quando não existiam prestações dentro desse período, ocorria um erro de data inválida (“is not a valid date”) e a tela era fechada automaticamente. Ajustado o tratamento do filtro padrão para que, quando não houver registros no período informado, a tela permaneça aberta e nenhuma mensagem de erro seja exibida. A consulta é apresentada vazia para que o usuário possa alterar o período manualmente.
    

Prestação de Contas

### **2\. Notas Fiscais de Saída**

*   Após atualização do sistema para a primeira versão com as informações da Reforma Tributária, alguns clientes passaram a ter rejeição no envio de arquivos XML ao portal GoodCard/TickeLog. Foi identificado que, no novo modelo de XML, a tag `<vItem></vItem>` estava sendo gerada indevidamente mesmo quando o parâmetro de destaque de IBS/CBS estava configurado como **NÃO**, ocasionando incompatibilidade e rejeição do arquivo. Ajustada a geração do XML para que a tag `<vItem>` não seja incluída quando o parâmetro de destaque IBS/CBS estiver definido como **NÃO**.
    

* * *

Menu Opções
-----------

### **1\. Parâmetros do Sistema**

*   Implementada uma nova camada de segurança na Integração 99:
    

**Novos Parâmetros:** Adicionadas as opções de ativar a validação de tempo e configurar o limite máximo permitido (variando de **1 a 15 minutos**). Por padrão, o sistema inicia configurado para **5 minutos**.

Parâmetros do Sistema > Guia Integração

**Validação no PDV:** Ao tentar aplicar um voucher 99, o sistema cruza o horário do abastecimento registrado no banco com o horário atual. Se a diferença exceder o tempo parametrizado, o PDV bloqueia a operação, garantindo que o desconto seja aplicado apenas a abastecimentos recentes.

Bloqueio Resgate 99 Abastece no PDV

### **2\. Adequações na Geração de Arquivos SPED, Fortes e DLLs Fiscais**

*   Foram implementados **ajustes estruturais e correções críticas na geração de arquivos fiscais**, garantindo conformidade com os leiautes oficiais mais recentes, maior consistência entre dados operacionais e fiscais e estabilidade na exportação dos arquivos obrigatórios.
    

**SPED Fiscal – Registro 1360 (Lacres da Bomba)**

O registro **1360 – Lacres da Bomba** estava sendo exportado com a **data da geração do arquivo SPED**, em vez da **data real de aplicação do lacre cadastrada no sistema**. Foram implementadas as seguintes melhorias:

*   Correção do mapeamento da exportação do Registro 1360.
    
*   Ajuste na DLL do SPED para exportar corretamente:
    
    *   Número do lacre
        
    *   Data de aplicação cadastrada
        
*   Adequação no Sinapse para sincronizar corretamente os dados de manutenção das bombas.
    
*   Atualização de dados no banco para refletir corretamente as informações históricas de lacre.
    

**Fortes Fiscal – Adequação ao Leiaute 190 (Registro CTC)**

Após a atualização do leiaute 175 para o **leiaute 190**, o arquivo Fortes apresentava inconsistências no **registro CTC (Conhecimento de Transporte)**, como novos campos não tratados corretamente (120 a 124, regras de preenchimento não atendidas e Município de Coleta (`cMunIni`) sendo exportado incorretamente (informando município da transportadora em vez do município da coleta). Foram implementadas as seguintes melhorias:

*   Adequação completa ao leiaute 190.
    
*   Implementação das novas regras de preenchimento:
    
    *   Campo 120 (Data substituição)
        
    *   Campo 121 (Chave CT-e substituído)
        
    *   Campo 122 (Lei 14.237/2008 – CE)
        
    *   Campo 123 (CT-e Simplificado)
        
    *   Campo 124 (Data de Escrituração)
        
*   Correção do campo Município de Coleta:
    
    *   Uso correto do `<cMunIni>` da XML
        
    *   Remoção dos dois primeiros dígitos da UF conforme regra do Fortes
        
    *   Não preenchimento para documentos cancelados
        

**Fortes Fiscal – Adequação ao Leiaute 195 (Reforma Tributária)**

Foi realizada a atualização do sistema para adequação ao **leiaute 195 do Fortes Fiscal**, atendendo às exigências da Reforma Tributária, incluindo suporte aos tributos **IBS, CBS e Imposto Seletivo (IS)**.

*   Atualização do arquivo para o **leiaute 195**, com ajuste do identificador de versão.
    
*   Adequação de registros existentes (PAR, NFM, PNM, NVC, PNC, CTC), incluindo:
    
    *   Ampliação de campos;
        
    *   Inclusão de novos códigos e validações;
        
    *   Suporte às novas classificações fiscais.
        
*   Implementação de **novos registros da Reforma Tributária** (IRM, IIC e ICT), responsáveis pelo detalhamento dos tributos IBS, CBS e IS.
    
*   Aplicação das novas regras de validação:
    
    *   Consistência entre registros pai e filho;
        
    *   Cálculo correto dos tributos;
        
    *   Preenchimento condicional conforme tipo de operação.
        
*   Tratamento adequado para cenários específicos, como:
    
    *   Operações monofásicas;
        
    *   Operações governamentais;
        
    *   Zona Franca de Manaus;
        
    *   Documentos cancelados.
        

**Ajuste no Registro NFM – NF-e (Modelo 55) – Fortes**

O arquivo `.fs` estava sendo rejeitado pelo Fortes ao importar NF-e (modelo 55) emitidas pelo PDV, devido os campos 10 – Formulário Inicial e 11 – Formulário Final estarem sendo preenchidos indevidamente para NF-e, contrariando o leiaute. Foram implementadas as seguintes melhorias:

*   Ajuste na geração do registro NFM:
    
    *   Para documentos modelo 55 (NF-e), os campos 10 e 11 passam a ser enviados em branco.
        
    *   Mantida a regra correta para demais espécies documentais.
        

**Ajustes nas DLLs Fiscais (Lib\_Sped e Dependências)**

Havia uma falha no registro e identificação das versões das DLLs fiscais, especialmente da **Lib\_Sped**, causando incompatibilidade entre Gerente e DLLs, bloqueio na geração/exportação de arquivos fiscais e risco de descumprimento de obrigações fiscais. Foram implementadas as seguintes melhorias:

*   Correção no mecanismo de verificação de versão.
    
*   Passagem a considerar os arquivos **BUILD** para validação da versão correta.
    
*   Atualização das constantes do Gerente.
    
*   Ajuste nas DLLs para registrar corretamente a versão.
    

**SPED ICMS/IPI – Leiaute v3.2.1 (Adequações Prioritárias)**

Atualização estrutural para garantir geração consistente do **SPED ICMS/IPI v3.2.1**, com foco nos registros operacionais prioritários. Foram implementadas as seguintes adequações:

🔹 Registro 1310 – Movimentação Diária de Combustíveis

Disponibilização por bico e por dia:

Quantidade total abastecida

Valor total (VL\_ABAST)

Garantia de compatibilidade com NF-e/NFC-e/CF-e.

🔹 Registro H005 – Inventário

Ajustes para compatibilizar estoque físico × estoque fiscal.

Redução de divergências na consolidação do inventário.

🔹 Registros D100 e D190 – CT-e

Correta disponibilização de dados para:

CT-e de entrada

CT-e de saída

Garantia de consistência entre transporte e documentos fiscais vinculados.

* * *

Menu Relatórios
---------------

### **1\. Cobrança > Relação de Faturas**

*   Houveram duas melhorias no Relatório de Relação de Faturas:
    

Na apresentação **Faturas Quitadas**, os agrupamentos eram exibidos apenas de forma resumida. Para visualizar os detalhes, era necessário clicar manualmente no símbolo “+” em cada fatura, tornando o processo demorado quando o relatório continha muitos registros. Incluído o filtro **Expandir agrupamentos**, semelhante ao modelo do relatório DRE. Quando definido como **Sim**, o relatório já é exibido com todas as faturas do período automaticamente expandidas, apresentando seus detalhes e respectivas formas de pagamento.

Relatório de Relação de Faturas

Relação de Faturas Quitadas - Expandir Agrupamentos = Não

Relação de Faturas Quitadas - Expandir Agrupamentos = Sim

O filtro **Expandir Agrupamentos** é habilitado **somente** na apresentação **Faturas Quitadas**.

Na apresentação **Faturas a Receber**, o campo **Emissão de** da seleção de período permanecia desabilitado, impedindo o filtro por período específico. Ajustado o comportamento do filtro para que, ao selecionar a apresentação de **Faturas a Receber**, os campos de data permaneçam habilitados, permitindo consulta:

Por intervalo completo (**De / Até**)

Ou a partir de uma data inicial específica

Relatório de Relação de Faturas

### **2\. Financeiro > Apuração de Resultados**

*   Ao emitir o relatório **Apuração de Resultado** para múltiplas empresas com a apresentação **Resumido por Centro de Resultado**, os lançamentos eram exibidos de forma intercalada, sem identificação clara da empresa de origem. Essa estrutura dificultava a conferência, conciliação e análise dos resultados em ambientes multiempresa. Foi realizada a inclusão de nova coluna no início do relatório com a identificação da **Empresa (Nome Fantasia)**, seguindo o seguinte agrupamento hierárquico:
    
    *   **Empresa**
        
    *   **Centro de Resultado**
        
    *   **Valores detalhados**
        
    
    A nova organização elimina a mistura de lançamentos entre empresas.
    

Relatório de Apuração de Resultados - Resumido por Centro de Resultado

### **3\. Financeiro > Contas a Pagar**

*   O relatório de **Contas a Pagar** permitia agrupamento apenas por **Centro de Resultado**, dificultando a análise das obrigações por ordem cronológica de vencimento. Além disso, a ordenação dos registros gerava confusão visual, com contas do mesmo período aparecendo em momentos distintos do relatório. Foi aprimorada a apresentação existente, onde cada grupo de data apresenta os lançamentos correspondentes organizados de forma sequencial.
    

Inclusão automática de cabeçalhos por data, conforme o filtro **Consultar por Data** selecionado (Data de Vencimento, Data de Emissão ou Data de Pagamento).

Relatório de Contas a Pagar

Relatório de Contas a Pagar - Por Data de Emissão

Relatório de Contas a Pagar - Por Data de Vencimento

Relatório de Contas a Pagar - Por Data de Pagamento

* * *

`ACS PDV - Versão 6.3287.6.435 - 24 de Março de 2026`
=====================================================

### **1\. Correção na Importação de Comanda com Produto Composto Configurado Como Componentes no Cupom = SIM**

*   O PDV apresentava o erro **"CFOP não cadastrado no Departamento Fiscal"** ao tentar finalizar a venda de uma comanda que continha um produto composto. O erro ocorria especificamente quando o produto estava configurado para exibir os **"Componentes no Cupom = SIM"**. Essa falha na validação fiscal dos itens filhos impedia a conclusão da venda, gerando travamentos no atendimento de conveniências e restaurantes. Foi corrigida a lógica de validação fiscal durante a importação de comandas. O sistema agora reconhece e aplica corretamente as regras de CFOP tanto para o produto principal quanto para seus componentes, garantindo que a configuração de exibição dos itens no cupom não interrompa o fluxo de venda.
    

### **2\. Ajuste na Emissão de NF-e para Combustíveis Monofásicos (Reforma Tributária)**

*   Ao emitir NF-e de combustíveis com os parâmetros de **IBS e CBS ativos**, o PDV gerava a rejeição _"Informada tributação monofásica de combustível indevidamente"_ quando utilizada a **Classificação Tributária 620006** (Tributação monofásica cobrada anteriormente). Isso ocorria porque o sistema estava enviando as tags correspondentes ao código 620001 (operação em que o imposto monofásico está sendo tratado na própria operação) mesmo quando a classificação informada era 620006 (mercadorias cujo IBS/CBS já foi recolhido em etapa anterior da cadeia). O motor de cálculo e a geração do XML foram ajustados para a Classificação 620006:
    
    *   **Base de Dados:** A classificação 620006 foi devidamente integrada à tabela de classes tributárias do sistema, garantindo a persistência correta dos dados.
        
    *   **Mapeamento de Tags:** Os valores agora são direcionados corretamente para as tags de imposto retido anteriormente (**<vIBSMonoRet>** e **<vCBSMonoRet>**), dentro do grupo **<gMono>** do totalizador.
        

### **3\. Correção de Instabilidade no PDV após Manutenção de Bombas (Descontinuidade)**

*   Ao registrar uma **Descontinuidade de Encerrantes**, o PDV entrava em modo _offline_ inesperadamente. O problema era causado por um erro de sintaxe SQL no comando responsável por gravar a data do lacre (**DT\_LACRE**) no banco de dados. Essa falha interrompia a comunicação do Sinapse com a retaguarda, bloqueando o envio de dados. A instrução SQL de registro de manutenção foi corrigida, eliminando o erro de sintaxe próximo ao campo de data do lacre. O processo de sincronização foi normalizado, garantindo que o registro de descontinuidade ocorra sem afetar o status de conexão do terminal.
    

### **4\. Correção na Reimpressão de NF-e Emitida pelo PDV**

*   O PDV apresentava um erro impeditivo ao tentar realizar a **reimpressão de uma NF-e** (Nota Fiscal Eletrônica de modelo 55) após a sua emissão (F2). A falha interrompia a operação e impossibilitava a entrega da via física ao cliente para conferência ou transporte, gerando transtornos operacionais no caixa. Corrigido o mecanismo de recuperação de dados fiscais do PDV. O sistema foi ajustado para localizar e processar corretamente o XML da nota autorizada, restaurando a funcionalidade de reimpressão sem apresentar erros de comunicação ou de banco de dados.
    

### **5\. Melhoria na Identificação de Produtos para Resgate com PontuaX no PDV**

*   O resgate de produtos via integração PontuaX exigia que a descrição do item no portal fosse **exatamente igual** à descrição no sistema. Caso houvesse qualquer divergência (como uma abreviação), o sistema tentava buscar pelo código interno, mas não consultava o **código de barras**, resultando em falhas na localização do produto e impedindo o resgate. A rotina de busca e resgate foi aprimorada para incluir uma nova camada de validação. Agora, se o sistema não localizar o produto pelo código interno ou pela descrição, ele realiza automaticamente a busca pelo **Código de Barras (EAN)**.
    

### **6\. Detalhamento de Recebimentos PIX por Administradora no Fechamento de Caixa**

*   No comprovante de **fechamento de caixa**, quando configurado no **Cadastro de Pontos de Venda** o campo **Recebimentos no resumo** como **Por Administradora** (guia **Comprovantes**), os cartões (Elo, Master, Visa etc.) eram detalhados por administradora. Entretanto, os recebimentos via **PIX** eram exibidos de forma agrupada, mesmo quando existiam múltiplas administradoras/cadastros (ex.: PIX Banco do Brasil, PIX Bradesco, PIX Integrado, PIX POS Manual). Aplicada a mesma regra de detalhamento por administradora também para o PIX:
    

Quando configurado como **Por Administradora**, o comprovante passa a exibir cada administradora PIX separadamente, com **quantidade e valor total**.

Comprovante Caixa

### **7\. Liberação da Identificação do Cliente na Finalização (NFC-e)**

*   Para viabilizar aplicação de níveis de preço em um cliente que a automação não permitia esse gerenciamento, foi adotado o uso de um **cliente técnico** configurado com o parâmetro **Nominar Cupom = Não** (guia **Venda**). Entretanto, na finalização da venda, a tela de identificação do cliente era exibida já preenchida com os dados desse cliente técnico, impedindo a informação do **cliente real** para emissão correta da NFC-e e envio à TicketLog. Na prática, o PDV fixava o cliente selecionado no F3, mesmo quando configurado para não ser nominado no cupom. Foi ajustado o comportamento para:
    

Quando o cliente selecionado via F3 estiver configurado como **Nominar Cupom = Não,** a tela de identificação final será aberta **com os campos em branco**, permitindo informar o cliente fiscal real e garantindo a manutenção do nível de preço aplicado pelo cliente técnico.

Cadastro de Clientes

Identificação de Cliente no PDV

### **8\. Correção no Registro de Usuário na Auditoria do PDV**

*   Os registros de auditoria do PDV estavam sendo gravados com o **usuário atualmente logado no sistema**, independentemente de qual operador realmente executou a ação. Esse comportamento comprometia a rastreabilidade das operações e a confiabilidade dos controles internos. Ajustado o processo de auditoria para que cada operação passe a registrar corretamente o **usuário que efetivamente realizou a ação**, vinculando o evento ao operador responsável.
    

### **9\. Correção na Aplicação do Tipo de Preço no Lançamento de Notas (PDV e Gerente)**

*   O PDV estava desconsiderando o parâmetro configurado para definição do tipo de preço no lançamento de notas, utilizando sempre o **Preço de Venda (bomba)**, mesmo quando o selecionado era **Último Custo** ou **Custo Médio**. O comportamento também ocorria no módulo Gerente. Ao alterar o filtro do tipo de preço e incluir o item diretamente na nota, o sistema não atualizava corretamente o foco do componente selecionado, mantendo o último tipo de preço aplicado. Ajustado o comportamento do componente de inclusão de itens para que o sistema passe a considerar corretamente o tipo de preço selecionado no momento do lançamento da nota, tanto no **PDV** quanto no **Gerente**.
    

Emissão de Notas Fiscais de Saída - PDV

### **10\. Relatório de Apontamento de Vendas no PDV com “Saldo Atual” como Padrão**

*   No relatório de **Apontamento de Vendas** do PDV, a opção padrão exibida para o filtro **Saldo** era **Início do Turno**. Durante a troca de turno, quando já existem vendas em andamento, o relatório podia ser emitido após movimentações no estoque, gerando divergência entre o saldo apresentado e o saldo real naquele momento. Essa situação ocasionava dúvidas operacionais e chamados de suporte por suposta inconsistência no estoque. Alterado o padrão do relatório para que a opção inicial seja **Saldo Atual**, garantindo que, ao emitir o relatório, o sistema apresente automaticamente o saldo real após as movimentações já realizadas.
    

Relatório de Apontamento de Vendas

* * *

`Serviços`
==========

### **1\. Vibra**

*   O serviço Vibra foi atualizado para incluir os campos `codigoAnp` e `codigoNcm` no objeto de itens do cupom fiscal. O sistema agora realiza o mapeamento automático desses códigos a partir do cadastro de produtos e os envia em cada transação, respeitando a formatação técnica exigida (ANP com 12 dígitos e NCM com 8 dígitos).
    

### **2\. Vem (BR Mania)**

*   Houveram duas melhorias no serviço da Vem:
    

A VEM passou a validar os **sequenciais completos dos cupons** ao receber a relação de vendas do dia. O sistema, porém, enviava apenas vendas contendo produtos de loja, desconsiderando vendas compostas exclusivamente por produtos de pista (ex.: combustíveis). Isso gerava inconsistência na sequência de cupons enviados e divergência entre o total do cupom e a soma dos itens transmitidos. O sistema passou a **enviar todas as vendas**, independentemente dos itens contidos no cupom, quando o PDV estiver configurado para envio à franqueadora (guia **Integração**). O ajuste na lógica de identificação do setor do item consiste no campo `Enviar para Franqueadora` no grupo de produtos:

**Sim → L (Loja)**

**Não → P (Pista)**

Com isso, combustíveis e demais produtos de pista passam a ser enviados corretamente, com a soma dos itens passando a refletir fielmente o total do cupom, além da sequência de cupons que permanece íntegra para validação da VEM.

A VEM/BRMania solicitou o envio da informação do **Canal de Vendas** no JSON das vendas transmitidas diariamente. O layout anterior não contemplava o campo `nomeCanalVenda`, conforme exigido no manual da integração, nem enviava a informação do **código NCM** dos produtos. Incluído no JSON de vendas o campo `nomeCanalVenda`, enviando:

**PDV fixo:** `PDV <id_do_pdv>`

**PDV móvel:** `PDV <id_do_pdv> Móvel`

Vendas realizadas em PDV móvel são identificadas pelo valor **“M”** no campo **SITUACAO** da tabela VENDAS.

Adicionada também a informação do **código NCM** conforme previsto no manual da integração.

### **3\. Shell Select**

*   Na rotina de reenvio de movimentações para a Shell, estava ocorrendo retorno **HTTP 409 (dados duplicados)**. O erro acontecia porque o payload do reenvio era interpretado como idêntico ao envio original, impedindo o reprocessamento da movimentação. Conforme alinhamento com a Shell, foi incluída a tag `reenvio` no objeto principal do payload, exclusivamente na rotina de reenvio manual.
    
    *   **Tag:** `reenvio`
        
    *   **Formato:** `YYYY-MM-DD HH:MM:SS`
        
    *   **Aplicação:** somente em reenvios
        
    *   **Envio normal:** permanece sem a tag
        

Também foi ajustada a lógica interna de reenvio, eliminando a necessidade de alteração manual na tabela **MOVIMENTACAO\_THOTH** (PROCESSADO = N) para efetuar novos envios.

* * *

`Novas Funcionalidades`
=======================

### **1\. Integração com a Solução Clover (Fiserv)**

*   Implementada a integração oficial com o ecossistema **Clover Flex (Fiserv)**. Esta solução permite que o PDV Móvel opere diretamente no dispositivo Clover, aproveitando sua impressora integrada e conectividade segura. A integração abrange as principais credenciadoras que utilizam a tecnologia: **Bin**, **Azulzinha (CAIXA)** e **Sicoob**.
    

**Benefícios:**

➡️ **Mobilidade e Agilidade:** O Clover Flex atua como um PDV completo nas mãos do frentista ou atendente, permitindo realizar a venda e o pagamento em qualquer lugar do posto.

➡️ **Multimeios de Pagamento:** Suporte nativo para mais de 240 bandeiras, carteiras digitais e pagamentos instantâneos, com criptografia de ponta a ponta e sincronização automática com a retaguarda.

**Configurações Necessárias:**

No **ACS Gerente**, devem ser realizados cadastros em **três módulos**:

*   **Cadastro de Operadoras:** Cadastrar a operadora com atenção especial ao preenchimento do campo **Código no PDV Móvel** como **CLOVER**, que será utilizado para o retorno das transações.
    

Cadastro de Operadora

*   **Cadastro de Bandeiras:** Cadastrar as bandeiras correspondentes, informando corretamente o **Código no PDV Móvel** de cada uma.
    

Cadastro de Bandeira - Exemplo Mastercard Crédito

*   **Cadastro de Administradoras:** Cadastrar as administradoras vinculando a Operadora e Bandeira cadastradas anteriormente, além de informar o Tipo de cartão, Taxa administrativa e Prazo de repasse de cada uma.
    

Cadastro de Administradora - Exemplo Mastercard Crédito

⚠️ **Importante:** Para as demais administradoras, utilize a tabela de retornos para referência. Essas configurações são essenciais para que o sistema identifique corretamente as transações realizadas na máquina Clover e direcione automaticamente para as administradoras correspondentes.

No **PdvPooConfig**, configure a **Administradora** como **CLOVER**.

Configuração PDV Móvel

Na **máquina Clover Flex**:

Acesse a loja de aplicativos da máquina.

Faça o download do aplicativo **ACS PDV Móvel**.

Configure o aplicativo informando:

*   IP do PDV onde o serviço do PDV Móvel está instalado e ativo (com os monitores abertos).
    
*   Numeração correspondente de cada máquina (acspoo).
    

O funcionamento do aplicativo na máquina é igual ao das outras adquirentes.

### **2\. Automação da Inutilização de Numeração Rejeitada ou Pendente**

*   Implementada uma nova rotina de varredura automática no Monitor de NFC-e. Agora, o sistema identifica e inutiliza individualmente as numerações que atendam aos seguintes critérios:
    
    *   **Critérios de Seleção:** Vendas de **caixas já fechados**, com status "Nenhum" ou "Rejeitado" (não autorizadas ou em contingência), emitidas em um período de até 40 dias.
        
    *   **Processamento Granular:** O sistema envia a solicitação de inutilização para a SEFAZ de forma individual para cada cupom e atualiza automaticamente o status na tabela de vendas conforme o retorno do órgão fiscal.
        

**Benefícios:**

➡️ **Conformidade Fiscal Automática:** Garante que todas as quebras de sequência sejam devidamente justificadas à SEFAZ sem a necessidade de monitoramento humano constante.

➡️ **Redução de Passivo Fiscal:** Elimina o acúmulo de notas pendentes ou "puladas", prevenindo notificações fiscais por falta de continuidade na numeração.

### **3\. Melhorias na Integração Treinacon**

Após a liberação da integração entre o ACS e a Treinacon, foram implementadas diversas melhorias com foco em **confiabilidade, rastreabilidade e automação do envio de documentos fiscais eletrônicos**. Essas melhorias garantem que **todos os documentos fiscais sejam transmitidos com maior precisão**, reduzindo perdas e facilitando o suporte técnico.

**Principais Melhorias Implementadas**

**Fila de retransmissão automática de documentos**

Foi implementado um mecanismo automático de reenvio de documentos não transmitidos.

🔎 Como funciona:

*   Ao iniciar o **ACS Gerente**, o sistema:
    
    *   Identifica documentos não enviados com base na tabela `TREINACON_ENVIO`
        
    *   Gera novamente os XMLs a partir da tabela `XML_VENDAS`
        
    *   Armazena os arquivos nas respectivas pastas:
        
        *   `C:\ACS_Pendencias\NFCe`
            
        *   `C:\ACS_Pendencias\NFe`
            
    *   Realiza automaticamente o envio para a API da Treinacon
        
*   O processo ocorre:
    
    *   Apenas no **primeiro Gerente iniciado,** evitando concorrência entre máquinas
        
*   Após o envio concluído:
    
    *   O status é atualizado no banco de dados
        
    *   Os arquivos XML permanecem na pasta para rastreabilidade
        

**Reprocessamento manual aprimorado**

Além do envio automático, o reprocessamento manual foi mantido e melhorado.

🔎 Como funciona:

*   Ao acessar **Opções >** **Monitor Treinacon** e filtrar um período, quando clicar no botão **Enviar Pendentes**:
    
    *   O sistema recria os XMLs com base na tabela `XML_VENDAS` dos documentos com status **Não Emitido**
        
    *   Realiza o envio via API
        
    *   Atualiza o status conforme retorno
        

**Novo filtro por status no Monitor Treinacon**

Foi implementado um filtro para melhor visualização dos documentos a partir do seu **status de transmissão**:

*   **Emitidos (retorno 200)**
    
*   **Não Emitidos (retorno E01, por exemplo)**
    

🎯 Benefícios:

*   Identificação rápida de falhas
    
*   Facilidade no suporte e auditoria
    
*   Redução do tempo de análise
    

**Geração de logs detalhados de integração**

Foi implementado um sistema de logs para rastrear o envio dos documentos, que permitem identificar falhas de comunicação com a API, retornos recebidos e tentativas de envio.

Log de Envio

⚠️ **Considerações Técnicas Importantes**

*   A pasta `ACS_Pendencias` serve para geração e envio dos XMLs e não representa o status real de envio
    
*   O status correto deve sempre ser verificado no Monitor Treinacon
    
*   Um documento só é considerado enviado quando o retorno da API = **200**
    

**Benefícios:**

➡️ Envio automático reduz falhas operacionais

➡️ Maior visibilidade dos documentos não transmitidos

➡️ Logs para suporte e auditoria

➡️ Mais segurança e confiabilidade na integração

### **4\. Integração Shipay no PDV Móvel (PIX)**

*   A integração Shipay foi estendida para o **PDV Móvel**. Agora, o operador pode gerar o QR Code de pagamento PIX diretamente no dispositivo móvel. O sistema realiza a comunicação com a API da Shipay, aguarda a confirmação do pagamento em tempo real e finaliza a venda de forma automática, sem a necessidade de conferência manual de comprovantes.
    

**Benefícios:**

➡️ **Multimeios de Pagamento no Pátio:** Permite aceitar PIX em um único fluxo integrado, aumentando a conveniência para o cliente.

➡️ **Segurança e Agilidade:** Elimina erros de digitação e fraudes, pois a venda só é concluída após a confirmação sistêmica do pagamento pela plataforma Shipay.

**Configurações Necessárias:**

A configuração segue o mesmo processo já descrito na nota técnica original da integração Shipay:

**No ACS Gerente**

Acesse o menu **Opções** > **Parâmetros do Sistema** > guia **Integração**.

Defina o parâmetro **Plataforma para emissão do PIX** como **Shipay**.

Acesse a guia **Shipay** e configure os seguintes campos:

**URL de Integração**: [https://api.shipay.com.br/](https://api.shipay.com.br/)

**Token de Acesso** e **Chave Secreta**: Essas informações são fornecidas pela **Shipay no momento da ativação da integração**.

Parâmetros do Sistema > Guia Integração

Acesse o menu **Cadastro** > **Pontos de Venda** \> guia **Integração**.

No PDV onde os **PDVs móveis estão vinculados**, configure o campo **Token Pix / PicPay.** Este token também é fornecido pela **Shipay durante o processo de integração**.

⚠️ **Importante:** O token é **individual por PDV**. Caso existam vários PDVs, cada um possuirá **um token diferente**.

Cadastro de Pontos de Venda > Guia Integração

**Cadastro de Operadoras de Cartão:** Cadastre uma operadora com atenção especial ao preenchimento do campo **Código no PDV Móvel** como **SHIPAY**, que será utilizado para o retorno das transações.

Cadastro de Operadora Shipay

**Cadastro de Bandeiras de Cartão:** Cadastre uma bandeira sem **nenhuma informação** no campo **Código no PDV Móvel**.

Cadastro de Bandeiras PIX Shipay

**Cadastro de Administradoras:** Cadastre uma administradora vinculando a **Operadora** e **Bandeira** cadastradas anteriormente, além de:

**Tipo de Cartão:** PIX

**Operação:** Integrado API

**Prazo de Repasse** e **Taxa Administrativa** devem ser definidos conforme o acordo com a instituição financeira.

Cadastro de Administradora PIX Shipay

**No PdvPooConfig**

Marque a opção **Habilitar Shipay**. Essa configuração permite que o **PDV Móvel utilize a integração com a Shipay para pagamentos via PIX**.

Configuração PDV Móvel

noteb63959dfc124

**Funcionamento:**

Após a configuração da integração, o pagamento via PIX no **PDV Móvel** ocorre da seguinte forma:

Na tela inicial do **PDV Móvel**, selecione **VENDAS**.

Informe o **código do operador**.

Selecione o item da venda:

**ABAST** → para abastecimentos

**DIVERSOS** → para produtos da loja.

Caso necessário, **identifique o cliente** para vincular a venda a um cadastro específico (opcional).

Escolha a **forma de pagamento**:

**Pix**

**Dinheiro e Pix** (pagamento misto)

O sistema irá **gerar um QR Code de pagamento**.

O cliente realiza a **leitura do QR Code pelo aplicativo do banco** e efetua o pagamento.

Após a confirmação da transação pela **Shipay**, a venda é **automaticamente concluída no PDV**.

**Funcionamento:**

Após a configuração da integração, o pagamento via PIX no **PDV Móvel** ocorre da seguinte forma:

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Na tela inicial do **PDV Móvel**, selecione **VENDAS**.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Informe o **código do operador**.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Selecione o item da venda:

**ABAST** → para abastecimentos

**DIVERSOS** → para produtos da loja.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Caso necessário, **identifique o cliente** para vincular a venda a um cadastro específico (opcional).

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Escolha a **forma de pagamento**:

**Pix**

**Dinheiro e Pix** (pagamento misto)

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) O sistema irá **gerar um QR Code de pagamento**.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) O cliente realiza a **leitura do QR Code pelo aplicativo do banco** e efetua o pagamento.

Após a confirmação da transação pela **Shipay**, a venda é **automaticamente concluída no PDV**.

[pdv movel shipay.mp4](/wiki/download/attachments/791478273/pdv%20movel%20shipay.mp4?version=1&modificationDate=1772739262238&cacheVersion=1&api=v2&width=500)

### **5\. Integração com 99Abastece: Resgate Habilitado no PDV Móvel**

*   Foi ampliada a integração com o programa de fidelidade **99Abastece**, permitindo agora **o resgate de descontos diretamente pelo PDV Móvel**. Antes, a integração estava disponível apenas no PDV Desktop. Com esta atualização, o processo de fidelização passa a ocorrer também no PDV Móvel, oferecendo maior praticidade ao frentista e ao cliente durante o atendimento.
    

**Benefícios:**

➡️ **Experiência na Pista:** Permite que o cliente utilize descontos sem precisar se deslocar até o PDV, agilizando o atendimento.

➡️ **Confiabilidade:** O sistema informa o status do cupom de forma imediata, garantindo que apenas cupons válidos sejam usados para pontuação ou resgate.

**Configurações Necessárias:**

A configuração segue o mesmo processo já descrito na nota técnica original da integração 99Abastece:

Acesse o menu **Opções** > **Parâmetros do Sistema** > aba **Integração** \> guia **99 Abastece**.

Informe a **URL de Integração** ([http://drvlab-api.didiglobal.com](http://drvlab-api.didiglobal.com/)) com a API da 99 Abastece. Esta URL é padrão e deve ser utilizada em todos os clientes que serão configurados.

Realize os testes de conexão e envio de produtos/preços para sincronização inicial.

Após configurado, o sistema enviará automaticamente as atualizações de preços e produtos ao 99 Abastece.

📌 **Importante:**

*   Não há configurações adicionais específicas para o PDV Móvel. A integração utiliza as mesmas credenciais e parâmetros definidos no ACS Gerente.
    

notea0625af9c229

**Funcionamento:**

O processo de resgate de descontos da **99** no **PDV Móvel** é simples e totalmente integrado ao fluxo de venda.

Na tela inicial do **PDV Móvel**, clicar no botão **VENDAS**.

Informar o **código do operador**.

Na aba **ABAST**, selecionar o(s) abastecimento(s) que serão incluídos na venda.

**Identificar o cliente**, se desejar vincular a venda a um cadastro específico (opcional).

Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, ou Mista).

Após definir a forma de pagamento, será exibida a **tela de opção de Resgate**, onde é possível informar o tipo de resgate a ser utilizado e o **cupom de desconto**.

*   **Informe o código do cupom** e clique no **ícone da lupa** para que o PDV Móvel realize a **consulta na API da 99**.
    
*   No quadro **“Status consulta do cupom”**, o sistema exibirá o retorno da API, indicando, `Integração 99`.
    
*   No quadro **“Informações retornadas”**, o sistema mostrará o **valor de desconto** aplicado.
    

Ao **avançar**, será apresentado um **resumo da venda**, com os valores de **Total da Venda**, **Valor do Resgate** e **Valor a Pagar**.

Após o resumo, é exibido a tela para definição do valor pago (no caso da finalizadora Dinheiro).

**Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir o cupom fiscal.

**Funcionamento:**

O processo de resgate de descontos da **99** no **PDV Móvel** é simples e totalmente integrado ao fluxo de venda.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Na tela inicial do **PDV Móvel**, clicar no botão **VENDAS**.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Informar o **código do operador**.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Na aba **ABAST**, selecionar o(s) abastecimento(s) que serão incluídos na venda.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) **Identificar o cliente**, se desejar vincular a venda a um cadastro específico (opcional).

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, ou Mista).

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Após definir a forma de pagamento, será exibida a **tela de opção de Resgate**, onde é possível informar o tipo de resgate a ser utilizado e o **cupom de desconto**.

*   **Informe o código do cupom** e clique no **ícone da lupa** para que o PDV Móvel realize a **consulta na API da 99**.
    
*   No quadro **“Status consulta do cupom”**, o sistema exibirá o retorno da API, indicando, `Integração 99`.
    
*   No quadro **“Informações retornadas”**, o sistema mostrará o **valor de desconto** aplicado.
    

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Ao **avançar**, será apresentado um **resumo da venda**, com os valores de **Total da Venda**, **Valor do Resgate** e **Valor a Pagar**.

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) Após o resumo, é exibido a tela para definição do valor pago (no caso da finalizadora Dinheiro).

![(estrela azul)](/wiki/s/-602379922/6452/11f87e110965d0b75e5aff202c8f9337903f4160/_/images/icons/emoticons/star_blue.png) **Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir o cupom fiscal.

pdv movel 99 (1) (1).mp4

### **6\. Tratamento de Resgates como Desconto - PDV e Prestação de Contas**

*   Foi implementada uma melhoria no tratamento dos **resgates (ex.: 99 Abastece)**, garantindo que sejam considerados como **desconto na venda**, e não mais como forma de recebimento, ajustando também sua apresentação na Prestação de Contas. Antes, os valores de resgate estavam sendo tratados como **forma de pagamento (vale presente)** no PDV e cupom, o que fazia com que o valor total da venda fosse considerado integralmente na base de cálculo de impostos e o posto pagasse tributos sobre valores que não foram efetivamente recebidos.
    

#EAE6FF

*   **No PDV:**
    
    *   O valor do resgate passa a ser aplicado como **desconto no cupom fiscal**;
        
    *   A base de cálculo dos impostos é ajustada, considerando apenas o valor líquido da venda;
        
    *   As informações do resgate continuam sendo registradas para controle e auditoria.
        

#EAE6FF

*   **Na Prestação de Contas:**
    
    *   Os resgates passam a ser tratados como **desconto (valor zerado como recebimento)**;
        
    *   Bloqueadas operações de inclusão, edição ou exclusão manual de resgates;
        
    *   Disponibilizada a consulta dos resgates via botão específico, sem impacto no caixa.
        

**Benefícios:**

➡️ Correção da base de cálculo de impostos (tributação sobre valor líquido).

➡️ Consistência entre PDV, Prestação de Contas e financeiro.