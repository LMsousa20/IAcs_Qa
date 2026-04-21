---
title: Nota Técnica - Julho 2025
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/321257505
---

# Nota Técnica - Julho 2025

none

* * *

`Geral`
=======

### **1\. Tratamento de caracteres especiais no PDV**

*   Implementado tratamento adequado para codificação e exibição de caracteres especiais (como acentos, cedilha e símbolos) no PDV.
    

### **2\. Correção na Integração com a Vibra – Redução de Consumo Indevido**

*   Ajustada a rotina de integração para controlar e limitar o número de chamadas à API, respeitando os intervalos recomendados e evitando sobrecarga nos servidores da Vibra.
    

`ACS Gerente - Versão 6.3287.6.622 - 07 de Julho de 2025`
=========================================================

Menu Cadastro
-------------

### **1\. Cadastro de Clientes**

*   Quando o preço de contrato do cliente era alterado, o sistema verificava se o PDV havia sido atualizado corretamente, porém não informava detalhadamente quais PDVs (e de quais empresas) não tinham recebido a atualização. Devido a isso, foi implementada a geração de um arquivo de log contendo o(s) código(s) da empresa(s) e o(s) código(s) do(s) PDV(s) que não foi/foram atualizado(s).
    

**Atenção**: O log é criado somente quando há falha na atualização.

Alerta quando NÃO realiza a atualização dos preços de contrato em todos os PDVs

Arquivo de log gerado após não conseguir atualizar o preço

### **2\. Cadastro de Produtos**

*   Melhorias no Cadastro de Produtos:
    

Alterações na guia **Finalizadoras** do Cadastro de Produtos não estavam sendo registradas no **Relatório de Auditoria**, prejudicando o controle de mudanças de preços vinculados a formas de pagamento. Implementado o registro de auditoria para qualquer modificação na guia Finalizadoras do Cadastro de Produtos.

Cadastro de Produtos

Auditoria gerada ao alterar as informações da guia Finalizadoras do Cadastro de Produto

O sistema estava concedendo indevidamente o privilégio de alteração de preços de combustíveis a usuários com a permissão **058 - MUDAR PREÇO DE PRODUTOS DIVERSOS**, além dos que possuem a permissão **537 - EDITAR O PREÇO DO COMBUSTIVEL**. Corrigido o controle de permissões para que apenas usuários com a permissão **537** possam alterar preços de combustíveis, conforme o esperado.

Ao inativar um produto pela guia **Empresas**, o sistema validava o saldo na empresa logada em vez da empresa de destino, bloqueando a inativação indevidamente. Ajustada a validação para considerar corretamente o saldo na empresa de destino, permitindo a inativação apenas quando este for igual a zero.

Cadastro de Produtos

### **3\. Cadastro de Pontos de Venda**

*   Melhorias no Cadastro de Pontos de Venda:
    

O sistema exigia preenchimento dos campos **Número do Token (CSC)** e **Identificador do Token (ID)** para qualquer **Tipo de Documento Fiscal**, gerando exigências incorretas. Corrigido o comportamento para que a obrigatoriedade dos campos seja aplicada apenas quando o campo **Tipo de Documento Fiscal** seja **NFC-e e NF-e** ou quando o PDV está em Modo de Contingência, onde esses campos devem ser preenchidos para o funcionamento correto do mesmo.

Cadastro de Pontos de Venda

Alterações no campo **Liberar Abastecimento Fora do Prazo** não estavam sendo registradas no **Relatório de Auditoria**, apesar da configuração para ‘Gerar Auditoria’ estar ativa. Corrigido o processo de auditoria para registrar corretamente qualquer modificação neste campo, garantindo que as alterações sejam exibidas no relatório.

Cadastro de Pontos de Venda

Auditoria gerada ao alterar o campo

* * *

Menu Estoque
------------

### **1\. Manifesto do Destinatário**

*   A tela de Notas Destinadas Pendentes apresentada ao iniciar o lançamento de uma Compra de Diversos ou Combustíveis exibia apenas notas fiscais já lançadas, em vez de apresentar as notas pendentes trazidas pelo Monitor de NFe. Ajustada a consulta da tela para considerar corretamente apenas as notas fiscais ainda não lançadas.
    

### **2\. Medições de Tanques**

*   A operação **209 - ALTERAR MEDIÇÕES DOS TANQUES** estava configurada para gerar auditoria, mas as alterações realizadas não estavam sendo registradas no relatório. Corrigido o processo de auditoria para garantir o registro de todas as edições nas medições dos tanques.
    

Auditoria gerada ao alterar as medições dos tanques

* * *

Menu Financeiro
---------------

### **1\. Conciliação de Cartão**

*   Durante a conciliação de cartões via Statix, lançamentos com bandeira PIX e Alelo estavam sendo importados sem identificação de bandeira e operadora no sistema, impossibilitando a conciliação das vendas. Implementada a identificação da operadora **ALELO (código 61)** e das bandeiras **ALELO (código 80)** e **PIX (código 66)** no processo de conciliação no sistema Desktop e AppPosto. Além disso, foi criado um parâmetro no cadastro de bandeiras permitindo definir se a bandeira participa ou não da conciliação. Para bandeiras com códigos já configurados, este parâmetro foi mantido como **SIM**.
    

Cadastro de Operadoras

Cadastro de Bandeiras - Alelo

Cadastro de Bandeiras - PIX

### **2\. Faturamento de Cartão / Controle de Faturas de Cartão**

*   Em ambientes multiempresa, não era possível selecionar a empresa desejada nos módulos de Baixa de Cartões e Controle de Faturas, dificultando a gestão individualizada das operações. Adicionados campos para seleção da empresa nas telas de Baixa de Cartões e Controle de Faturas de Cartão.
    

**Baixa de Cartões**

*   O sistema permite o faturamento dos cartões de qualquer empresa selecionada, desde que o usuário logado possua os privilégios necessários nas empresas onde ele deseja efetuar as baixas.
    

Baixa de Cartões

**Controle de Faturas de Cartão**

*   Na tela de consulta das faturas, é possível indicar quais empresas devem ser consultadas, para visualização e edição dos dados.
    
*   O usuário logado deve possuir os privilégios necessários acessar as faturas das empresas que deseja consultar.
    

Controle de Faturas de Cartão

Controle de Faturas de Cartão

### **3\. Controle de Faturas de Convênios**

*   O sistema estava efetuando automaticamente a baixa dos lançamentos do tipo PIX utilizados para quitação de faturas de convênio, mesmo quando a administradora estava configurada para **não realizar baixa automática**. Corrigido o processo para que o lançamento via PIX fique com status **pendente**, respeitando a configuração “**Efetuar Baixa Automática = Não**” da administradora.
    

### **4\. Contas a Pagar**

*   Usuários conseguiam visualizar, editar, quitar e excluir contas de empresas para as quais não possuíam permissão de acesso, comprometendo a segurança e integridade das informações. Ajustado o filtro de empresas na tela de Contas a Pagar, restringindo corretamente o acesso conforme as permissões configuradas no perfil do usuário.
    

* * *

Menu Movimento
--------------

### **1\. Caixas de Vendas**

*   Ao utilizar a configuração _“Bloquear caixa conferido = SIM”_ na guia **Caixa / Fidelidade** dos **Parâmetros do Sistema**, não havia controle adicional ao tentar desbloquear o caixa da Prestação de Contas, o que poderia permitir alterações não autorizadas. Implementada exigência de **Usuário e Senha** para acesso ao desbloqueio do caixa, com validação do **perfil de acesso** do operador.
    

**Atenção**: Os botões ficarão inativos caso o usuário logado **não** tenha a operação _450 - LIBERAR CAIXA DE VENDA BLOQUEADO_ indicada no seu Perfil de Acesso.

Confirmação para desbloqueio da prestação de contas

Permissão necessária de ser incluída no perfil de acesso

### **2\. Caixas de Vendas > Cheques (Venda)**

*   Na quitação de cheques devolvidos, o sistema utilizava automaticamente a conta padrão do caixa, impedindo a escolha da conta aplicação. Isso gerava inconsistência para empresas que operam com múltiplos bancos. Implementada opção para **selecionar a conta aplicação** no momento da quitação do cheque devolvido, de forma similar à rotina de depósito de cheques.
    

Quitação de cheques devolvidos

### **3\. Caixas da Gerência**

*   Melhorias no Caixas da Gerência:
    

O sistema foi ajustado para impedir a exclusão manual de depósitos bancários no caixa da gerência vinculados a faturas de cartões, evitando a perda de vínculo entre os registros.

Foram ajustadas as rotinas de baixa e estorno para garantir que os lançamentos do tipo PIX atualizem corretamente todos os campos do caixa da gerência, conforme o comportamento esperado para cada cenário.

**Cenários**

**Comportamento Antes da Correção**

**Comportamento Após a Correção**

1.  **Estorno de PIX creditado de forma automática (Caixa de Vendas e Caixa de Gerência)**
    

Ao estornar e excluir um recebimento PIX creditado automaticamente no caixa de vendas ou gerência (**parâmetro** **Baixa Automática = Sim no cadastro da administradora)**, o valor permanecia registrado na linha **PIX** do **Resumo do Movimento** do Caixa da Gerência, gerando divergência entre o total do **Recolhimento** e o total do **Resumo do Movimento**.

O valor da linha **PIX** no **Resumo do Movimento** do Caixa da Gerência é corretamente atualizado após o estorno, eliminando a divergência.

2.  **Quitação e exclusão de fatura de convênio com pagamento via PIX**
    

Ao quitar, os valores eram atualizados corretamente. No entanto, ao excluir a fatura (e automaticamente o recebimento PIX), os valores permaneciam no **Resumo do Movimento**, gerando divergência entre o total do **Recolhimento** e o total do **Resumo do Movimento**.

Os valores das linhas **PIX** e **Faturas Convênio Quitadas** no **Resumo do Movimento**, e **PIX** e **Depósito Bancário** no **Recolhimento**, são devidamente revertidos conforme o parâmetro da administradora:

\- Se **Baixa Automática = Sim**: atualiza todas as linhas.

\- Se **Baixa Automática = Não**: atualiza apenas as linhas relacionadas ao recebimento.

Foi constatado que, ao realizar o **estorno da quitação de um cheque devolvido**, o sistema **não removia o lançamento correspondente no Caixa da Gerência e nem no Livro Caixa**, mantendo um valor indevido no controle financeiro da empresa. O processo de estorno foi ajustado para que, ao desfazer a quitação de um cheque devolvido, o sistema **remova automaticamente o lançamento gerado no Livro Caixa**, garantindo a integridade dos saldos registrados.

### **4\. Notas Fiscais de Entrada e Saída**

*   Melhorias na emissão de Notas Fiscais de Saída/Entrada:
    

Ao gerar Notas Fiscais de acobertamento referenciando cupons que continham itens diversos e combustíveis, os **descontos aplicados individualmente a cada produto não estavam sendo destacados na NFe**. Isso gerava divergência entre os valores dos cupons e os valores apresentados na nota. Foi ajustada a geração da NFe para que os **descontos concedidos por item sejam corretamente discriminados** na nota, respeitando o valor real praticado na venda e mantendo o alinhamento com os cupons de origem.

**Atenção**: Os descontos só serão destacados caso o parâmetro **Usa preço de contrato na Nota** esteja definido como **Não**.

Na tela de Seleção de Vendas, utilizada para selecionar os cupons fiscais na emissão de uma NF-e, o campo **“Série” exigia preenchimento obrigatório** para exibir os documentos, o que dificultava a localização das vendas, especialmente em ambientes com múltiplas séries em uso. O sistema foi ajustado para que **o campo “Série” seja opcional**. Quando deixado em branco, a tela agora **exibe todos os documentos**, independentemente da série.

A partir de **01/09/2025**, entra em vigor a **Nota Técnica 2025/001**, que **proíbe o envio de uma única NF-e no modo assíncrono**. O método atualmente utilizado no sistema (modo assíncrono) não estará mais em conformidade com a SEFAZ para essas situações. Foi ajustado o sistema para que **o envio de uma única NF-e** seja feito **exclusivamente em modo síncrono,** ou seja, o emissor envia o documento fiscal eletrônico (como a NF-e) e, na mesma conexão, recebe a resposta do sistema da SEFAZ, indicando se foi autorizado ou rejeitado de forma integrada e imediata, tanto no **Gerente** quanto no **PDV**, conforme exigência da NT.

* * *

Menu Opções
-----------

### **1\. Parâmetros dos Relatórios**

*   Em ambientes com múltiplas empresas, **não era possível configurar logomarcas distintas** para cada empresa na emissão de notas fiscais, limitando a personalização dos documentos fiscais. Foi implementada a **possibilidade de registrar individualmente o caminho da logomarca para cada empresa**, permitindo que a imagem correta seja utilizada automaticamente na geração das notas fiscais.
    

### **2\. Exportação de arquivos > Produtos p/ Balança**

*   Foi adicionada à tela de exportação de produtos uma **nova opção para informar os dias de validade** para que esta informação seja impressa nas etiquetas geradas pelas balanças. A validade será inserida manualmente pelo usuário e aplicada aos produtos exportados, considerando os filtros de grupo e subgrupo já existentes na tela.
    

**Atenção**: Apenas produtos configurados como **Vendido a peso** **\=** **Sim** serão exportados no arquivo.

Exportação de produtos para Balança Toledo

### **3\. Exportação de arquivos > Fortes AC Fiscal**

*   Melhorias no Fortes AC Fiscal:
    

O sistema foi ajustado para que os **valores do FPC (FECOP)** sejam **levados corretamente aos registros INM e PNM**, conforme especificado no leiaute da Fortes.

Corrigido o problema que impedia a abertura da tela de geração do **Fortes AC Fiscal**, restabelecendo o funcionamento normal da funcionalidade.

### **4\. Exportação de arquivos > SPED Fiscal**

*   Melhorias no SPED Fiscal:
    

Corrigida a lógica de apuração do valor no **registro C190**, garantindo que o desconto seja considerado apenas **uma única vez**, de forma compatível com os demais registros da nota fiscal.

Foram aplicadas as seguintes adequações no gerador de SPED Fiscal:

1.  **Atualização do código de leiaute** de “018” para **“019”**.
    
2.  **Registro D100**: ajuste na **descrição do campo CHV\_CTE\_REF** (sem impacto no conteúdo gerado).
    
3.  **Registro D130**: atualização do título conforme nova descrição oficial para incluir documentos de transporte eletrônico simplificado (código 57).
    
4.  Reconhecimento das **novas inclusões nos registros D700 e D750**:
    
    *   Campo 32 no D700
        
    *   Campo 17 no D750  
        _(Observação: esses registros não são gerados pelo sistema atualmente, portanto, nenhuma ação prática foi necessária nesses pontos.)_
        

Ajustado o processo de geração do SPED Fiscal para garantir que todos os produtos utilizados no inventário sejam corretamente incluídos no **registro 0200**, evitando falhas de validação do arquivo.

### **5\. Exportação de arquivos > SPED Contribuições**

*   Notas fiscais eletrônicas emitidas pelo PDV não estavam sendo levadas corretamente para o **SPED Contribuições**, ocasionando **inconsistências nos registros M400 e M800**. Corrigido o processo de geração do SPED Contribuições para garantir que as **notas fiscais emitidas pelo PDV sejam consideradas** nos registros fiscais (M400 e M800).
    

* * *

Menu Relatórios
---------------

### **1\. Operacional > Mudança de Preços**

*   Foi ajustada a lógica de consulta do relatório para **respeitar corretamente os filtros de data e de usuário**, garantindo a fidelidade dos dados exibidos com base nos parâmetros definidos.
    

### **2\. Estoque > Acompanhamento de Saldo por Tanques**

*   No relatório _**Acompanhamento de Saldo por Tanques**_, ao utilizar a apresentação **Resumo do Período**, a coluna de **Abertura** exibia um total **zerado** quando a **data final do filtro** não correspondia a nenhuma medição registrada, mesmo que a **data inicial** possuísse medições válidas. O sistema foi ajustado para considerar corretamente o saldo de abertura da **data inicial** independentemente da **data final** possuir medição lançada ou não, evitando exibição incorreta de saldo zerado.
    

### **3\. Estoque > Compras - Apresentação por Compra Detalhado**

*   O relatório _**Relação de Compras > Apresentação Detalhada**_ apresentava o **preço de venda atual** do produto, mesmo ao exibir **compras registradas antes da alteração de preço**, o que gerava distorções nas informações históricas. A lógica do relatório foi corrigida para que **o preço de venda exibido seja o vigente na data da compra**, garantindo a integridade histórica das informações.
    

### **4\. Estoque > CTEs de Entrada**

*   Clientes que utilizam a funcionalidade de **entrada de CTE** enfrentavam dificuldades para consultar os documentos cadastrados de forma consolidada. A visualização exigia acesso individual a cada CTE, dificultando a conferência e o repasse de informações para a contabilidade. Foi criado o relatório de _**CTEs de Entrada**_, permitindo a consulta centralizada e organizada dos CTEs registrados na entrada.
    

Acesso ao relatório

Relatório de CTEs de Entrada

### **5\. Vendas > Vendas e Rentabilidade**

*   O relatório de _**Vendas e Rentabilidade**_ não exibia as vendas dos produtos compostos de forma consolidada quando configurados para **usar os componentes no cupom**, mostrando apenas os itens que compõem o produto. Essa forma de registro dificultava o controle gerencial, impedindo o cliente de acompanhar as vendas totais dos produtos compostos (promoções). Foi ajustado o relatório para identificar exibir o produto composto principal associado à venda, mesmo quando os itens aparecem discriminados no documento fiscal.
    

### **6\. Vendas > Demonstrativo Mensal**

*   O relatório _**Demonstrativo Mensal**_ não estava totalizando as vendas de recargas integradas (_RV/Tendência_), o que gerava divergência ao comparar com o relatório de _**Vendas por Grupo e Subgrupo**_. Além disso, ao filtrar exclusivamente o grupo de recargas, nenhum dado era exibido e o sistema não informava a ausência de registros. Foram realizados os seguintes ajustes:
    
    *   Ajustado o relatório para incluir corretamente a totalização das vendas de recarga.
        
    *   Implementada uma mensagem informativa (“Não há dados para apresentar o relatório”) quando não houver movimentação para o grupo selecionado, garantindo uma melhor experiência ao usuário.
        

### **7\. Cobrança > Relação de Vales por Produto**

*   No relatório _**Relação de Vales por Produto**_, ao utilizar a apresentação **Pré-nota**, o sistema apenas totalizava os lançamentos por empresa, sem detalhar a qual empresa cada registro pertencia, dificultando a análise em ambientes com múltiplas empresas. Foi acrescentado o filtro **Agrupar por empresa** ao relatório, para destacar claramente os lançamentos por empresa, mantendo a totalização, mas agora com separação visível entre as movimentações de cada CNPJ.
    

Relatório de Vales por Produto

### **8\. Cobrança > Relação de Vales por Produto**

*   No relatório _**Relação de Faturas**_, ao selecionar a apresentação **Faturas em Atraso**, os campos **Data Inicial** e **Data Final** eram desabilitados, impedindo o usuário de filtrar por um período específico. Os campos de data foram habilitados mesmo quando a opção **Faturas em Atraso** estiver selecionada, permitindo ao usuário definir livremente o intervalo de datas a ser consultado.
    

Relatório de Relação de Vales

### **9\. Financeiro > Acompanhamento das Despesas**

*   Na apresentação **Por Fornecedor** do relatório de _**Acompanhamento de Despesas**_, o nome do fornecedor não era exibido, pois o sistema não gravava essa informação nos lançamentos automáticos do Livro Caixa gerados pelo Contas a Pagar. Implementada a gravação do código do fornecedor na tabela de lançamentos automáticos, permitindo que o relatório apresente corretamente o nome do fornecedor.
    

### **10\. Financeiro > Controle de Cheques**

*   Melhorias no Relatório de Controle de Cheques:
    

A apresentação **Por Data - Resumido** do relatório _**Controle de Cheques**_ não permitia a separação por empresa em bases multiempresa, dificultando a análise por parte das equipes financeira e administrativa. A funcionalidade de agrupamento por empresa, já disponível na visualização **Por Data - Detalhado**, foi estendida também à opção **Por Data - Resumido**, permitindo melhor organização dos dados em ambientes com múltiplos CNPJs.

O valor de cheques depositados exibido no Caixa da Gerência estava divergente do relatório de _**Controle de Cheques**_, devido à exclusão, no somatório, de cheques lançados diretamente no Caixa da Gerência. Ajustado o cálculo do valor total de cheques depositados para incluir corretamente os cheques registrados diretamente no Caixa da Gerência.

### **11\. Financeiro > Controle de Cartões**

*   Melhorias no Relatório de Controle de Cheques:
    

O filtro **Operação** no relatório _**Controle de Cartões**_ não aplicava corretamente os critérios definidos, exibindo registros fora do tipo selecionado (Manual, TEF ou POS). Corrigida a lógica do filtro para considerar corretamente a origem da transação.

O relatório de _**Controle de Cartões**_ não permitia definir o critério de data para consulta, restringindo a visualização e análise conforme a necessidade operacional. Implementada a opção de consulta da data entre data do **Caixa** e **Emissão** como critério de consulta no relatório.

O relatório de _**Controle de Cartões**_ não permitia filtrar e visualizar movimentações conforme a quantidade de parcelas realizadas, dificultando a análise de parcelamentos específicos. Implementado novo filtro que possibilita ao usuário consultar as movimentações de cartões por quantidade de parcelas, exibindo o somatório por administradora e o total consolidado.

### **12\. Financeiro > Contas a Receber - Cliente**

*   O relatório de _**Contas a Receber - Cliente**_ apresentava todos os títulos abertos até a data final, sem permitir a definição de um intervalo de datas, dificultando a consulta de lançamentos específicos por período. Adicionado filtro de Data Inicial (opcional), permitindo a seleção precisa do período a ser analisado.
    

* * *

`ACS PDV - Versão 6.3287.6.380 - 07 de Julho de 2025`
=====================================================

### **1\. Adequação da tela do PDV para monitores de alta resolução**

*   Em monitores com resolução maior que a projetada originalmente, a tela principal de vendas do PDV ficava **pequena e centralizada**, prejudicando a experiência do usuário. Essa limitação gerava **reclamações recorrentes** de clientes e revendas. Ajustados os controles da tela de vendas para que o PDV agora **se adapte automaticamente à resolução do monitor**:
    
    *   A tela de **lançamento de itens** passa a **preencher toda a área disponível**, exceto a barra de tarefas do Windows.
        
    *   A tela de **fechamento de venda** também foi **ampliada**.
        

➡️ **Benefício:** Melhor aproveitamento do espaço da tela, proporcionando uma **experiência visual mais confortável e moderna**.

### **2\. Inclusão de botão de consulta do registro no PDV**

*   Quando um **cliente bloqueado** era **liberado**, o operador precisava inserir manualmente o registro para liberar o PDV para uso, tornando o processo **mais lento e suscetível a erros**. Implementado um **botão de consulta do registro** no PDV, assim como já existia no ACS Gerente, permitindo a **verificação e atualização rapidamente do registro no PDV**, sem necessidade de inserção manual.
    

➡️ **Benefício:** Agilidade para consulta e liberação do PDV para uso.

Registro - ACS PDV

### **3\. Auditoria de alterações de preço de combustível**

*   Alterações no **preço de combustíveis** realizadas via **Gerente** ou **PDV** não eram registradas na auditoria, dificultando a **identificação do usuário responsável** e o **controle das modificações**. Implementada a **auditoria automática** para toda e qualquer **alteração de preço** realizada por meio do **Gerente** ou **PDV**.
    

➡️ **Benefício:** Garante **rastreabilidade** das alterações, fortalecendo o **controle gerencial** e a **segurança das operações**.

**Observação:** A auditoria para alterações via **aplicativo Mobile** ainda não é gerada.

Auditorias geradas por alterar o preço de combustível no Gerente e no PDV, respectivamente

### **4\. Registro do sequencial da venda na tabela de abastecimentos**

*   O **sequencial da venda** não estava sendo registrado na **tabela de abastecimentos** quando a venda era concluída no momento do **encerramento do caixa**, dificultando o **rastreio e a conciliação** das vendas. Corrigido o processo para que o **sequencial da venda seja sempre gravado** na **tabela de abastecimentos**, independentemente do momento da sua efetivação.
    

➡️ **Benefício:** Garante maior **consistência nas informações**, facilita o **controle das vendas** e melhora a **conciliação** no fechamento de caixa.

### **5\. Ajuste no campo de quantidade de parcelas no PDV**

*   Ajustado o PDV para que, quando a **administradora aceitar parcelamento**, o **campo de quantidade de parcelas fique em branco**, **obrigando o operador a preencher** com o número correto de parcelas (1, 2, 3, etc.).
    

➡️ **Benefício:** Reduz os **erros de operação**, evita **retrabalhos** e assegura a **consistência das informações financeiras**.

### **6\. Adequação do PDV para emissão de NFC-e com contingência Off-Line no Ceará**

*   Com a publicação do **Decreto Nº 34.417/2025**, a **SEFAZ-CE** autorizou a emissão de **NFC-e** (Nota Fiscal de Consumidor Eletrônica) com **contingência off-line**, inclusive para contribuintes que já utilizam **MFE**. O PDV precisava ser **ajustado** para permitir essa nova modalidade, conforme já implementado em outros estados.  
    O PDV foi **adaptado** para possibilitar a emissão de **CF-e via MFE** ou **NFC-e com contingência Off-Line**, conforme a **opção e necessidade do contribuinte**.
    

➡️ **Benefício:** Garantir **conformidade legal** no estado do **Ceará**, oferecendo **flexibilidade** na escolha do modelo fiscal e adequando-se às novas regras da SEFAZ.

### **7\. Correção na exibição do operador no comprovante PIX**

*   Ajustado o sistema para que o **comprovante PIX** exiba corretamente o **mesmo operador** que consta no **cupom fiscal**, garantindo **coerência** e **confiabilidade** nas informações apresentadas ao cliente.
    

➡️ **Benefício:** Evita **equívocos** e **retrabalho** no suporte, além de assegurar **transparência** nos registros de vendas.

### **8\. Ajuste para descartar abastecimentos com valor total zerado ou divergente**

*   Foram identificadas **duplicidades de encerrantes** causadas por **abastecimentos com valor total zerado** ou com divergências significativas entre o total capturado e o total calculado. Esse cenário gera **inconsistências no controle de abastecimentos** e demanda intervenção do suporte técnico.
    

Implementada uma regra para:

*   **Descartar automaticamente** abastecimentos com **valor total igual a zero**.
    
*   Em `Opções > Parâmetros do Sistema`, aba **PDV,** foi criado um parâmetro para configurar uma **margem de tolerância** para divergência entre o total calculado e o total capturado.
    

Opções > Parâmetros do Sistema > aba PDV

*   Exemplo: Configurado para descartar divergências acima de **R$ 0,05**.
    
*   Assim, abastecimentos com valores capturados muito inferiores ao calculado são automaticamente descartados, evitando registros incorretos.
    

➡️ **Benefício:** Reduz **duplicidades**, melhora a **confiabilidade dos dados** e minimiza a necessidade de **intervenção manual** pelo suporte.

### **9\. Integração do Sinapse com a validação do registro mensal**

*   Atualmente, o **Sinapse** continua funcionando mesmo que o **registro mensal** não esteja válido, o que permite que empresas que deixaram de ser clientes sigam utilizando o serviço, gerando **tráfego desnecessário** e **custos na AWS** (**AppPosto)**.
    
*   Devido a isso, foi implementada validação no **Sinapse Cliente**, que torna o PDV offline se o **registro mensal** não estiver **válido**.
    

**Nova regra de validação:**

1.  Verifica se há registro mensal no banco.
    
2.  Confere se o **CNPJ** registrado corresponde ao da empresa.
    
3.  Verifica se a **data atual** está dentro do prazo de validade, com **tolerância de 16 dias**.
    
4.  Caso não haja registro, verifica se existem caixas lançados:
    
    *   Se não houver, bloqueia o funcionamento.
        
    *   Se houver, permite o uso apenas até **31 dias após a data do primeiro caixa**.
        

➡️ **Benefício:** Garante que apenas empresas **com registro ativo** tenham o PDV operando normalmente, reduzindo **custos operacionais** e garantindo **conformidade contratual**.

### **10\. Novo leiaute para impressão de Relatório no PDV**

*   O relatório _**Saldo dos Produtos (Apontamento das Vendas)**_ no PDV não possuía leiaute compatível para impressão nas impressoras de cupom, limitando sua utilização operacional. Desenvolvido novo leiaute específico para permitir a impressão do relatório em impressoras além das impressoras A4, ampliando as opções de uso diretamente pelo menu de relatórios do PDV.
    

Apresentação Resumida para o relatório de Apontamento de Vendas

### **11\. Reinício automático do Sinapse Cliente pelo Guardião**

*   Foi implementado um mecanismo automático no **Guardião** para monitorar a quantidade de pendências. Quando forem detectadas **31 ou mais pendências**, o Guardião passa a tentar reiniciar o serviço **Sinapse Cliente**.
    

* * *

`ACS PDV Móvel - Versão 6.3287.6.14 - 07 de Julho de 2025`
==========================================================

### **1\. Salvamento automático da configuração das máquinas**

*   Em casos de perda de comunicação, as maquinetas perdiam a configuração de endereço, exigindo intervenção manual do suporte e gerando demora no atendimento. Implementada rotina para **salvar automaticamente a configuração de cada maquineta**, permitindo sua **recuperação automática** após falhas, reduzindo o tempo de suporte e melhorando a estabilidade da operação.
    

### **2\. Melhorias na usabilidade do PDV Móvel**

*   **Exclusão automática de produtos inativos** da listagem.
    
*   **Sincronização do filtro de saldo**: caso configurado no PDV Desktop para ocultar produtos com saldo inferior a 1, o PDV Móvel agora respeita a mesma configuração, exibindo apenas itens com saldo igual ou superior a 1.
    

### **3\. Conexão do PDV Móvel via hostname**

*   Configuração dependia do IP fixo do PDV Desktop; mudanças no IP exigiam nova configuração, causando falhas de conexão. Agora o PDV Móvel permite **conexão via hostname** (nome do computador), facilitando a configuração e evitando falhas causadas por mudanças de IP.
    

**Observação:**

*   A conexão via hostname exige **mapeamento de rede adequado** (ajustes em DNS, firewall e DHCP).
    
*   O usuário pode escolher entre **hostname ou IP fixo** na nova tela de configuração.
    

### **4\. Correção de duplicidade de vendas**

*   Vendas de produtos diversos eram registradas em duplicidade devido à execução simultânea de múltiplas instâncias do monitor de vendas, resultando em erros no estoque e nas transações. Implementada **restrição para impedir a execução simultânea** de mais de uma instância do monitor, garantindo que cada venda seja registrada apenas uma vez.
    

### **5\. Melhoria na impressão dos comprovantes das maquinas**

*   Clientes relataram que os comprovantes impressos, especialmente em maquinetas CIELO, apresentavam textos muito claros e de difícil leitura. Ajustada a **configuração de impressão**, proporcionando **maior nitidez e legibilidade** nos comprovantes de todas as adquirentes.
    

### **6\. Melhoria na tela de configuração do PDV Móvel**

*   A configuração exigia inserir uma URL completa, dificultando a operação, especialmente em telas pequenas, e aumentando o risco de erros. Substituída a entrada de URL única por duas caixas separadas para o usuário informar **apenas o IP ou hostname do micro** e o **número do POO**, **simplificando e agilizando** o processo de configuração.
    

### **7\. Correção no retorno do tipo de cartão (Laranjinha Rede)**

*   Em algumas vendas, o PDV Móvel registrava incorretamente o tipo de cartão: transações feitas com **cartão de crédito** eram registradas como **débito**. Corrigido o processo de identificação e registro do **tipo correto de cartão**, garantindo maior precisão nas transações e relatórios financeiros.
    

* * *

`Novas Funcionalidades`
=======================

### **1\. Integração ACS x Treinacon**

A Treinacon, empresa de contabilidade, precisava de uma forma mais segura e automatizada para coletar os documentos fiscais eletrônicos dos clientes, substituindo a coleta manual em pastas. Implementada integração entre o ACS e a API da Treinacon, possibilitando o envio automático, seguro e estruturado dos documentos fiscais eletrônicos emitidos.

**Benefícios:**

*   Elimina a necessidade de coleta manual.
    
*   Garante maior segurança no compartilhamento das informações.
    
*   Otimiza o processo contábil dos clientes integrados.
    

**Configuração Necessária:**

*   Acesse **Parâmetros do Sistema > Backup > Treinacon**.
    
*   Informe a **URL**: `https://api.webanalisys.com.br/coletor`.
    
*   Insira o **Token** e a **Validade** fornecidos pela contabilidade.
    

Opções > Parâmetros do Sistema

*   Após a configuração, acompanhe os envios no **Monitor Treinacon**: `Opções > Monitor Treinacon`.
    

Opções > Monitor Treinacon

### **2\. Montagem de Insumos**

Postos com restaurantes necessitavam controlar o estoque de produtos porcionados a partir de um item principal, o que antes era realizado manualmente, com risco de erros e sem rastreabilidade. Foi desenvolvido um novo módulo de **Montagem de Insumos**, que permite automatizar e controlar a transformação de um produto principal em diversos insumos, com atualização automática de saldos de estoque e cálculo de perdas.

**Benefícios:**

*   Automatiza o controle de insumos fabricados a partir de produtos principais.
    
*   Reduz erros no controle de estoque e perdas de produto.
    
*   Rastreia a fabricação com número de ordem e atualização automática dos saldos.
    
*   Facilita a rotina de porcionamento com opção de clonagem de processos.
    

**Configuração Necessária:**

No **Cadastro de Produtos**, guia **Estoque**, configure para cada insumo a quantidade consumida do produto principal para fabricação de uma unidade do insumo.

Cadastro de Produtos > Guia Estoque

**Como realizar uma fabricação no módulo de Montagem de Insumos:**

**Acesse o módulo:** `Estoque > Montagem de Insumos`.

Montagem de Insumos

**Inicie uma nova fabricação clicando em** .

**Configure os estoques:**

*   **Estoque de Entrada:** onde o produto principal possui saldo.
    
*   **Estoque de Saída:** onde os insumos produzidos terão seus saldos atualizados.
    

**Selecione o produto principal:**

*   Escolha o produto que será a base para a fabricação dos insumos.
    

**Verifique os saldos:**  
O sistema exibirá automaticamente:

*   **Saldo Antes:** quantidade atual do produto principal.
    
*   **Saldo Depois:** atualizado conforme os insumos forem adicionados.
    

**Importante:**

*   O campo de Saldo **Depois** é calculado automaticamente conforme o consumo dos insumos.
    
*   Caso o peso real do produto principal seja diferente do calculado pelo sistema ao final da fabricação de todos os insumos, ajuste manualmente o campo **Depois** para que o sistema calcule corretamente a **perda**.
    

**Inclua os insumos:**

Clique em e preencha:

Inclusão de insumos

*   **Produto:** selecione o insumo a ser fabricado.
    
*   **Qtd. Produzida:** informe quantas porções serão geradas.
    

O sistema calculará automaticamente:

*   **Qtd. Porção:** conforme configurado no cadastro do produto.
    
*   **Total Consumido:** quantidade total consumida do produto principal (Qtd. Porção x Qtd. Produzida).
    
*   **Saldo Inicial:** quantidade atual do insumo no estoque de saída.
    
*   **Saldo Final:** saldo que o insumo terá após a fabricação.
    

**Finalize a fabricação:**

Após incluir todos os insumos desejados, clique em para concluir o processo.

**DICA: Utilize a função de clonagem:**

*   Para facilitar processos recorrentes, utilize a opção , replicando rapidamente montagens com os mesmos produtos e quantidades.
    

**Acompanhamento das Montagens no Relatório**

As montagens realizadas podem ser acompanhadas através do relatório de _**Acompanhamento de Saldo por Produto**_. Nele, os produtos envolvidos na fabricação são exibidos com as seguintes identificações na coluna **Movimento**:

*   **Produto Principal:** registrado como **“Fabr. Produto”**, indicando a quantidade do item utilizada na fabricação.
    
*   **Produto Insumo:** registrado como **“Fabr. Insumo”**, demonstrando a quantidade do insumo que foi gerada a partir do produto principal.
    

Além dessas descrições, o relatório também apresenta o **número da Ordem de Fabricação**, facilitando o rastreamento e controle de cada processo realizado.

Relatório de Acompanhamento de Saldo por Produto

### **3\. Campanhas de Metas de Vendas**

A funcionalidade de Campanhas de Metas de Vendas permite a criação e configuração de campanhas voltadas ao incentivo e monitoramento das vendas realizadas. A nova funcionalidade oferece maior flexibilidade na definição de metas e recompensas, possibilitando um controle mais preciso sobre os objetivos comerciais da empresa.

Com essa novidade, o sistema passa a oferecer uma ferramenta robusta para a criação de campanhas promocionais e incentivos de vendas, permitindo um acompanhamento detalhado do desempenho dos vendedores e estabelecendo metas alinhadas às estratégias comerciais da empresa.

**Benefícios**

*   **Incentivo ao time de vendas**: Definição de metas e recompensas para impulsionar os resultados.
    
*   **Flexibilidade na configuração**: Possibilidade de definir regras específicas para diferentes tipos de campanhas.
    
*   **Acompanhamento transparente**: Dashboards detalhados para análise das campanhas em tempo real.
    

note

**Configuração da Campanha:**

**Informações Gerais**

Ao criar uma campanha, é possível configurar as seguintes informações:

*   **Empresa**: Definir a qual empresa a campanha estará vinculada.
    
*   **Descrição**: Inserir um nome ou breve descrição para a campanha.
    
*   **Data Inicial e Data Final**: Determinar o período de validade da campanha, ou seja, o intervalo de tempo em que as vendas serão contabilizadas para os objetivos estabelecidos.
    

**Tipos de Campanhas**

As campanhas podem ser criadas para diferentes categorias de produtos:

*   **Combustíveis**: Selecionar quais combustíveis farão parte da campanha.
    
*   **Diversos por Produto**: Definir individualmente os produtos que serão contabilizados.
    
*   **Diversos por Subgrupo**: Escolher subgrupos de produtos, incluindo todos os itens pertencentes a esses subgrupos na campanha.
    

**Definição de Super Meta**

Cada campanha pode conter um valor de **Super Meta (%)**, utilizado para calcular automaticamente o valor da **Super Meta** com base na **Meta** definida. Essa opção está disponível para todos os tipos de campanha. O valor da **Super Meta** pode ser modificado manualmente.

**Configurações Adicionais para Campanhas de Combustível**

As campanhas voltadas a combustíveis possuem configurações específicas, como:

*   **Tanque Cheio (litros)**: Define a quantidade de litros abastecidos que será considerada para caracterizar um abastecimento como tanque cheio.
    
*   **Remuneração Mix Aditivada**:
    
    *   **Variável**: A remuneração é calculada multiplicando a litragem total de gasolina aditivada vendida pelo valor da recompensa da **Meta** ou **Super Meta**.
        
    *   **Fixa**: A remuneração é um valor fixo predefinido na **Meta** ou **Super Meta** do indicador **Mix Aditivada**.
        

**Regras Condicionantes**

As campanhas permitem definir regras condicionantes, que determinam se a recompensa de determinados indicadores será contabilizada ou não.

*   É possível selecionar apenas uma regra condicionante por campanha, mas vários indicadores podem ser vinculados a essa regra.
    
*   Se a regra condicionante for ativada, a(s) recompensa(s) só será(ão) contabilizada(s) caso tanto o(s) indicador(es) vinculado(s) quanto a regra condicionante alcancem ao menos a **Meta** definida.
    
*   Se não houver uma regra condicionante, as recompensas serão concedidas normalmente caso os indicadores atinjam suas **Metas** ou **Super Metas**.
    

**Indicadores das Campanhas**

Os indicadores variam conforme o tipo de campanha:

**Indicadores para Campanhas de Combustíveis**

*   **Quantidade de Abastecimentos**: Contagem de abastecimentos realizados e baixados dos combustíveis participantes da campanha.
    
*   **Ticket Médio**: Calculado pela fórmula: faturamento total das vendas dos combustíveis incluídos na campanha dividido pelo número de cupons contendo esses combustíveis.
    
*   **Tanque Cheio**: Contagem de abastecimentos em que a litragem é igual ou superior ao valor configurado no campo "**Tanque Cheio**". Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são estabelecidas com base em um número fixo de abastecimentos que atendam ao critério de tanque cheio (Exemplo: Meta de 10 abastecimentos com tanque cheio).
        
    *   **Percentual**: A Meta e a Super Meta são definidas como uma proporção do total de abastecimentos realizados (Exemplo: Meta de 10% do total de abastecimentos)
        
*   **Mix Aditivada**: Percentual das vendas de gasolina aditivada em relação ao total de gasolinas comercializadas.
    
*   **Vendas Fidelizadas**: Contagem de cupons emitidos onde houve identificação de um cliente cadastrado. Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são baseadas no número total de cupons emitidos onde houve identificação de um cliente cadastrado.
        
    *   **Percentual**: A Meta e a Super Meta são definidas como a proporção de cupons fidelizados em relação ao total de vendas registradas na campanha.
        

**Importante:** Não são contabilizadas as vendas em que houve apenas a inclusão dos dados do cliente padrão (Consumidor Final) ao final da venda no PDV.

*   **Vendas Cruzadas**: Quantidade de cupons contendo combustível da campanha e ao menos um produto diverso. Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são estabelecidas como um número fixo de cupons que atendam ao critério de venda cruzada.
        
    *   **Percentual**: A Meta e a Super Meta são definidas como a proporção de cupons com venda cruzada em relação ao total de vendas.
        
*   **Litragem**: Soma total dos litros abastecidos dos combustíveis participantes da campanha.
    

**Indicadores para Campanhas de Diversos (por Produto ou por Subgrupo)**

*   **Ticket Médio**: Calculado pelo faturamento total das vendas dos produtos incluídos na campanha dividido pelo número de cupons contendo esses produtos.
    
*   **Vendas Fidelizadas**: Contagem de cupons emitidos onde houve identificação de um cliente cadastrado. Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são baseadas no número total de cupons emitidos com produtos da campanha onde houve identificação de um cliente cadastrado.
        
    *   **Percentual**: A Meta e a Super Meta são baseadas como a proporção de cupons fidelizados em relação ao total de vendas registradas na campanha.
        

**Importante:** Não são contabilizadas as vendas em que houve apenas a inclusão dos dados do cliente padrão (Consumidor Final) ao final da venda no PDV.

*   **Quantidade Vendida**: Soma do total de produtos vendidos.
    
*   **Quantidade de Vendas**: Contagem de cupons que incluam ao menos um dos produtos participantes da campanha.
    
*   **Valor de Venda**: Faturamento gerado pela venda dos produtos participantes.
    

**Metas, Super Metas e Recompensas**

Para cada indicador da campanha, é possível definir:

*   **Meta**
    
*   **Super Meta**
    
*   **Recompensa correspondente**
    

Caso a **Meta** seja atingida, a recompensa correspondente é concedida. Se a **Super Meta** for alcançada, a recompensa aplicada será **somente** a da **Super Meta**.

**Participantes e Produtos**

Para finalizar o cadastro de uma campanha, é necessário definir:

*   **Participantes** que serão avaliados conforme seu desempenho.
    

*   **Produtos** que serão considerados para a contabilização dos indicadores da campanha.
    

**Configuração da Campanha:**

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Informações Gerais**

Ao criar uma campanha, é possível configurar as seguintes informações:

![campanha\_comb - Copia-20250320-204657.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/campanha_comb%20-%20Copia-20250320-204657.png?version=1&modificationDate=1742503646927&cacheVersion=1&api=v2&width=900&height=147)

*   **Empresa**: Definir a qual empresa a campanha estará vinculada.
    
*   **Descrição**: Inserir um nome ou breve descrição para a campanha.
    
*   **Data Inicial e Data Final**: Determinar o período de validade da campanha, ou seja, o intervalo de tempo em que as vendas serão contabilizadas para os objetivos estabelecidos.
    

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Tipos de Campanhas**

As campanhas podem ser criadas para diferentes categorias de produtos:

![campanha\_comb - Copia-20250320-204852.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/campanha_comb%20-%20Copia-20250320-204852.png?version=1&modificationDate=1742503744661&cacheVersion=1&api=v2&width=900&height=64)

*   **Combustíveis**: Selecionar quais combustíveis farão parte da campanha.
    
*   **Diversos por Produto**: Definir individualmente os produtos que serão contabilizados.
    
*   **Diversos por Subgrupo**: Escolher subgrupos de produtos, incluindo todos os itens pertencentes a esses subgrupos na campanha.
    

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Definição de Super Meta**

Cada campanha pode conter um valor de **Super Meta (%)**, utilizado para calcular automaticamente o valor da **Super Meta** com base na **Meta** definida. Essa opção está disponível para todos os tipos de campanha. O valor da **Super Meta** pode ser modificado manualmente.

![campanha\_comb - Copia-20250320-204958.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/campanha_comb%20-%20Copia-20250320-204958.png?version=1&modificationDate=1742503823578&cacheVersion=1&api=v2&width=900&height=60)

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Configurações Adicionais para Campanhas de Combustível**

As campanhas voltadas a combustíveis possuem configurações específicas, como:

*   **Tanque Cheio (litros)**: Define a quantidade de litros abastecidos que será considerada para caracterizar um abastecimento como tanque cheio.
    
*   **Remuneração Mix Aditivada**:
    
    *   **Variável**: A remuneração é calculada multiplicando a litragem total de gasolina aditivada vendida pelo valor da recompensa da **Meta** ou **Super Meta**.
        
    *   **Fixa**: A remuneração é um valor fixo predefinido na **Meta** ou **Super Meta** do indicador **Mix Aditivada**.
        

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Regras Condicionantes**

As campanhas permitem definir regras condicionantes, que determinam se a recompensa de determinados indicadores será contabilizada ou não.

![campanha\_comb - Copia-20250320-205139.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/campanha_comb%20-%20Copia-20250320-205139.png?version=1&modificationDate=1742503918333&cacheVersion=1&api=v2&width=900&height=67)

*   É possível selecionar apenas uma regra condicionante por campanha, mas vários indicadores podem ser vinculados a essa regra.
    
*   Se a regra condicionante for ativada, a(s) recompensa(s) só será(ão) contabilizada(s) caso tanto o(s) indicador(es) vinculado(s) quanto a regra condicionante alcancem ao menos a **Meta** definida.
    
*   Se não houver uma regra condicionante, as recompensas serão concedidas normalmente caso os indicadores atinjam suas **Metas** ou **Super Metas**.
    

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Indicadores das Campanhas**

Os indicadores variam conforme o tipo de campanha:

⛽ **Indicadores para Campanhas de Combustíveis**

![campanha\_comb - Copia-20250320-205313.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/campanha_comb%20-%20Copia-20250320-205313.png?version=1&modificationDate=1742504028572&cacheVersion=1&api=v2&width=780&height=215)

*   **Quantidade de Abastecimentos**: Contagem de abastecimentos realizados e baixados dos combustíveis participantes da campanha.
    
*   **Ticket Médio**: Calculado pela fórmula: faturamento total das vendas dos combustíveis incluídos na campanha dividido pelo número de cupons contendo esses combustíveis.
    
*   **Tanque Cheio**: Contagem de abastecimentos em que a litragem é igual ou superior ao valor configurado no campo "**Tanque Cheio**". Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são estabelecidas com base em um número fixo de abastecimentos que atendam ao critério de tanque cheio (Exemplo: Meta de 10 abastecimentos com tanque cheio).
        
    *   **Percentual**: A Meta e a Super Meta são definidas como uma proporção do total de abastecimentos realizados (Exemplo: Meta de 10% do total de abastecimentos)
        
*   **Mix Aditivada**: Percentual das vendas de gasolina aditivada em relação ao total de gasolinas comercializadas.
    
*   **Vendas Fidelizadas**: Contagem de cupons emitidos onde houve identificação de um cliente cadastrado. Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são baseadas no número total de cupons emitidos onde houve identificação de um cliente cadastrado.
        
    *   **Percentual**: A Meta e a Super Meta são definidas como a proporção de cupons fidelizados em relação ao total de vendas registradas na campanha.
        

⚠️ **Importante:** Não são contabilizadas as vendas em que houve apenas a inclusão dos dados do cliente padrão (Consumidor Final) ao final da venda no PDV.

*   **Vendas Cruzadas**: Quantidade de cupons contendo combustível da campanha e ao menos um produto diverso. Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são estabelecidas como um número fixo de cupons que atendam ao critério de venda cruzada.
        
    *   **Percentual**: A Meta e a Super Meta são definidas como a proporção de cupons com venda cruzada em relação ao total de vendas.
        
*   **Litragem**: Soma total dos litros abastecidos dos combustíveis participantes da campanha.
    

🛒 **Indicadores para Campanhas de Diversos (por Produto ou por Subgrupo)**

![campanha\_div - Copia-20250320-205654.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/campanha_div%20-%20Copia-20250320-205654.png?version=1&modificationDate=1742504234419&cacheVersion=1&api=v2&width=780&height=218)

*   **Ticket Médio**: Calculado pelo faturamento total das vendas dos produtos incluídos na campanha dividido pelo número de cupons contendo esses produtos.
    
*   **Vendas Fidelizadas**: Contagem de cupons emitidos onde houve identificação de um cliente cadastrado. Pode ser avaliado de duas formas:
    
    *   **Quantidade Absoluta**: A Meta e a Super Meta são baseadas no número total de cupons emitidos com produtos da campanha onde houve identificação de um cliente cadastrado.
        
    *   **Percentual**: A Meta e a Super Meta são baseadas como a proporção de cupons fidelizados em relação ao total de vendas registradas na campanha.
        

⚠️ **Importante:** Não são contabilizadas as vendas em que houve apenas a inclusão dos dados do cliente padrão (Consumidor Final) ao final da venda no PDV.

*   **Quantidade Vendida**: Soma do total de produtos vendidos.
    
*   **Quantidade de Vendas**: Contagem de cupons que incluam ao menos um dos produtos participantes da campanha.
    
*   **Valor de Venda**: Faturamento gerado pela venda dos produtos participantes.
    

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Metas, Super Metas e Recompensas**

Para cada indicador da campanha, é possível definir:

*   **Meta**
    
*   **Super Meta**
    
*   **Recompensa correspondente**
    

Caso a **Meta** seja atingida, a recompensa correspondente é concedida. Se a **Super Meta** for alcançada, a recompensa aplicada será **somente** a da **Super Meta**.

![(estrela azul)](/wiki/s/-1547647223/6452/12912c93c0fa8830375fb56019858f3a89f8538e/_/images/icons/emoticons/star_blue.png) **Participantes e Produtos**

Para finalizar o cadastro de uma campanha, é necessário definir:

*   **Participantes** que serão avaliados conforme seu desempenho.
    

![image-20250320-210051.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/image-20250320-210051.png?version=1&modificationDate=1742504454171&cacheVersion=1&api=v2&width=650&height=454)

*   **Produtos** que serão considerados para a contabilização dos indicadores da campanha.
    

![image-20250320-210235.png](https://acsapps.atlassian.net/wiki/download/thumbnails/321257505/image-20250320-210235.png?version=1&modificationDate=1742504557720&cacheVersion=1&api=v2&width=650&height=461)

**Acompanhamento em tempo real das campanhas**

Para garantir um monitoramento eficiente das campanhas e facilitar o acompanhamento do desempenho dos operadores, foram disponibilizadas novas ferramentas que permitem tanto a visualização em tempo real do progresso das metas quanto a consulta detalhada das recompensas a serem pagas.

**Dashboard de monitoramento no ACS Gerente**

No **Menu Movimento** do **ACS Gerente**, foi incorporado um **dashboard** que exibe, de forma clara e intuitiva, os principais indicadores de cada campanha ativa. Esse painel permite que gestores e administradores acompanhem em tempo real o desempenho da equipe, podendo filtrar tanto a **Empresa**, como a **Campanha** e a **Data**, para analisar dados como:

*   Percentual de atingimento das metas por operador.
    
*   Comparativo entre o desempenho atual e o esperado para o atingimento da Meta e Super Meta de cada indicador.
    
*   Evolução dos principais indicadores definidos para a campanha.
    

Com essa funcionalidade, os responsáveis pelo gerenciamento das campanhas podem tomar decisões estratégicas de forma ágil, ajustando abordagens e incentivando a equipe para maximizar os resultados.

Dashboard de acompanhamento no ACS Gerente

**Aplicativo de dashboard para acompanhamento pelo operador**

Além do dashboard no ACS Gerente, foi desenvolvido um **aplicativo complementar**, que permite aos frentistas ou operadores do caixa acompanharem individualmente seu progresso na campanha independente do uso do sistema PDV ou Gerente.

Esse aplicativo exibe as mesmas informações do dashboard no Gerente, porém apenas para o dia atual e sem a necessidade de se logar no sistema.

Com essa ferramenta, os operadores ganham autonomia e clareza sobre seu desempenho, podendo ajustar suas estratégias de atendimento e vendas para alcançar as metas estabelecidas.

Dashboard de acompanhamento no aplicativo complementar

**Relatório de Recompensas e Desempenho**

O relatório de _**Apuração da Campanha**_, disponível em `Relatórios > Operacional`, foi criado para simplificar o acompanhamento e o pagamento das recompensas com base no desempenho de cada participante.

Esse relatório permite que gestores e administradores:

*   Visualizem, de forma individual ou consolidada, o desempenho de cada operador.
    
*   Identifiquem quais operadores atingiram as metas e quais ficaram abaixo do esperado.
    
*   Consultem o valor exato das recompensas a serem pagas diariamente.
    
*   Verifiquem o total de obtido de cada indicador no período.
    
*   Emitam relatórios periódicos para auditoria e acompanhamento financeiro da campanha.
    

Com essa nova funcionalidade, o processo de conferência e pagamento das premiações torna-se mais transparente e eficiente, garantindo que as campanhas sejam gerenciadas com precisão e proporcionando um maior engajamento da equipe de vendas.

Relatório de Apuração das Campanhas de Venda

* * *