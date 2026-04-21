---
title: Nota Técnica - Dezembro 2024
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/181338113
---

# Nota Técnica - Dezembro 2024

16falsenonelisttrue

* * *

`ACS Gerente - Versão 6.3287.6.569 - 17 de Dezembro de 2024`
============================================================

Menu Cadastro
-------------

### **1\. Cadastro de Administradoras**

Clientes que utilizam a administradora GoodCard enfrentam dificuldades no cálculo correto das cobranças, já que o sistema não permitia incluir a taxa fixa por operação exigida pela GoodCard, além da taxa percentual já existente.

Foi implementado um novo campo no **Cadastro de Administradoras**, permitindo o registro da taxa fixa por transação. Essa funcionalidade segue o mesmo padrão já existente no sistema para o PIX da Fixpay.

Cadastro de Administradoras

No cartão lançado, a informação da nova taxa é apresentada da seguinte forma, garantindo o cálculo correto das taxas cobradas pela GoodCard:

Lançamento do cartão no caixa de venda

### **2\. Cadastro de Clientes**

Quando o preço de contrato do cliente era alterado, o sistema não verificava se o PDV havia sido atualizado corretamente. Isso gerava risco de divergências nos preços aplicados e atrasos na resolução de falhas de comunicação com o PDV.

Agora, sempre que o preço de contrato para algum produto for alterado, o sistema realiza as seguintes verificações:

1.  Aguarda até 10 segundos para confirmar a atualização no PDV.
    

Cadastro de Clientes - Preço diferenciado por produto

2.  Caso os PDVs não sejam atualizados, exibe um alerta:
    

Alerta quando NÃO realiza a atualização dos preços de contrato em todos os PDVs

3.  Gera automaticamente uma auditoria detalhada do evento para acompanhamento e análise.
    

Auditoria gerada quando a atualização do preço de contrato não acontece

4.  Se os PDVs forem atualizados dentro do prazo, exibe a mensagem de sucesso:
    

Alerta quando realiza a atualização dos preços de contrato em todos os PDVs

**Observação**: Essa mensagem de sucesso na alteração do preço é apresentada somente se **todos** os PDVs com **Situação = Ativo** tiverem recebido o preço corretamente. Caso um dos PDVs não receba a informação, será apresentada a mensagem de que o preço não foi atualizado.

### **3\. Cadastro de Pontos de Venda**

Um cliente com duas ilhas de abastecimento (uma para carros pequenos e outra para caminhões) precisava restringir descontos aplicados a Diesel, configurados no cadastro de produtos, apenas aos PDVs da ilha maior destinada a caminhões. Não era possível configurar essa limitação diretamente no sistema.

Foi adicionado um novo campo no **Cadastro de Pontos de Venda** para indicar se aquele PDV permite descontos por produto. No PDV, a aplicação dos descontos passa a considerar essa configuração, bloqueando o desconto para PDVs que não possuem a permissão ativa.

Cadastro de Pontos de Venda

* * *

Menu Estoque
------------

### **1\. Compras de Diversos**

Desde o dia 16 de setembro de 2024, o MEI (Microempreendedor Individual) passou a ser obrigado a incluir o CRT 4 (Código de Regime Tributário específico do MEI) na emissão de NF-e e NFC-e. No entanto, o sistema não realizava a validação dessa tag (`<CRT>4</CRT>`), gerando erros ao importar itens da nota fiscal para a tela de compras.

O sistema foi atualizado para validar automaticamente o CRT 4 nas notas emitidas por MEI. Com isso:

*   As notas fiscais contendo o CRT 4 serão corretamente reconhecidas.
    
*   Os itens poderão ser importados para a tela de compras sem erros ou inconsistências.
    

* * *

Menu Financeiro
---------------

### **1\. Cheque Troco**

Na tela de listagem de cheque troco, ao clicar em , o sistema apresentava um erro, impossibilitando o acesso às informações da venda relacionada.

O sistema foi corrigido para exibir corretamente os detalhes da venda em que o cheque foi utilizado como troco.

Detalhes da venda com cheque troco

**Benefícios:**

*   **Facilidade de Uso:** Permite a consulta imediata das vendas vinculadas a cheques troco.
    

### **2\. Conciliação de Cartões**

O sistema utilizava a data de crédito (`<dataCredito>`) para a baixa de pagamentos na conciliação de cartões Goodcard. Contudo, essa data representa apenas uma previsão de recebimento, enquanto a data correta a ser usada é a data de pagamento (`<datapagamento>`), que indica o pagamento efetivo.

O sistema foi ajustado para considerar a **data de pagamento** (`<datapagamento>`) ao realizar a baixa de pagamentos na conciliação dos cartões Goodcard. Essa alteração substitui o uso da **data de crédito**, garantindo maior precisão nas operações financeiras.

**Benefícios:**

*   **Confiabilidade:** A baixa agora reflete a data real de pagamento, evitando inconsistências financeiras.
    
*   **Conformidade:** Alinhamento com as informações fornecidas pela Goodcard, melhorando a integração com a Statix.
    

### **3\. Conciliação de Extrato Bancário**

A conciliação de extratos bancários no sistema necessitava de melhorias para suportar corretamente os arquivos OFX de diversos bancos. Antes, a funcionalidade estava limitada aos arquivos OFX do Itaú e Caixa Econômica, restringindo a usabilidade para clientes de outras instituições financeiras.

O sistema foi parametrizado para expandir o suporte aos arquivos OFX, abrangendo os seguintes bancos:

*   **Bradesco, Stone, Safra** e **Banco do Brasil**
    

**Benefícios:**

*   Ampliação da compatibilidade com bancos, atendendo a um maior número de clientes.
    
*   Conciliação bancária mais eficiente, reduzindo erros de leitura e processamento dos arquivos OFX.
    

* * *

Menu Movimento
--------------

### **1\. Caixas da Gerência**

O sistema foi ajustado para que, ao estornar uma baixa de uma fatura de convênio quitada via PIX, o valor correspondente ao recebimento seja devidamente removido do caixa da gerência, garantindo a correção automática do registro.

**Benefícios:**

*   **Consistência Financeira:** Evita discrepâncias nos saldos do caixa da gerência.
    

### **2\. Caixas de Venda**

A consulta padrão de cartões ao clicar no botão da finalizadora na tela de prestação de contas utilizava a data de emissão, enquanto o somatório dos valores na prestação considerava a data do caixa. Essa diferença podia causar divergências entre os valores apresentados e os esperados.

A consulta de cartões foi ajustada para usar, por padrão, a data do caixa. Isso garante que os registros exibidos estejam alinhados com os valores calculados na prestação de contas.

**Benefícios:**

*   **Consistência:** Alinha a exibição de dados com o critério de cálculo da prestação de contas.
    
*   **Facilidade:** Elimina a necessidade de ajustes manuais no filtro de consulta.
    

### **3\. Notas Fiscais de Saída e Entrada**

O sistema foi ajustado para incluir no DANFE os campos de base de cálculo, alíquota e valor do ICMS monofásico.

**Benefícios:**

*   **Clareza:** Garante que todas as informações relevantes sejam apresentadas no DANFE.
    

* * *

Menu Opções
-----------

### **1\. Exportação de arquivos > Fortes AC Fiscal**

Melhorias no Fortes AC Fiscal:

*   Foi implementado o preenchimento automático do campo 71 (Natureza da Operação) no arquivo AC FORTES para as notas emitidas pelo PDV, garantindo que a informação seja corretamente registrada no layout do arquivo.
    
*   Foi identificado que, em compras com destaque de FCP Substituição Tributária (FCP ST), o campo 90 do registro NFM no arquivo Fortes estava sendo enviado vazio. Essa falha resultava em divergências nos totais das notas fiscais no sistema contábil Fortes, impactando o cálculo correto do imposto. O sistema foi ajustado para garantir o preenchimento automático do campo 90 do registro NFM com o valor do FCP Substituição Tributária sempre que este imposto for destacado na nota fiscal.
    

### **2\. Exportação de arquivos > SPED**

Melhorias no SPED:

*   Foi ajustado o sistema para que o valor do registro C190 seja gerado de acordo com o valor informado no registro C100, garantindo alinhamento entre os registros. Além disso, foi implementada uma advertência no registro C100 quando houver divergência de valores, para sinalizar possíveis inconsistências.
    
*   A rotina do SPED Fiscal foi ajustada para que produtos do tipo Arla 32 sejam excluídos do registro 1300 (LMC), atendendo ao manual atualizado do SPED e às especificações legais que delimitam o registro apenas para combustíveis como gasolina, óleo diesel, querosene, álcool e misturas regulamentadas pela ANP.
    

### **3\. Parâmetros do Sistema**

Foi adicionada uma nova configuração nos parâmetros do sistema que permite habilitar a geração de troco para o tipo de cartão **Pagamento de Frete** (comumente utilizado para a administradora GoodCard), quando os clientes pagarem valores superiores ao consumo, podendo esse troco ser gerado em forma de Crédito, Dinheiro ou Cheque, assim como ocorre com as outras formas de pagamento.

Parâmetros do Sistema > guia TEF / Troco

### **4\. Titular do Certificado Digital**

Foram adicionados novos campos na configuração do certificado digital, para permitir o registro do número PIN e o tipo de certificado, garantindo o funcionamento adequado da emissão de NF-e e da Manifestação do Destinatário com certificados A3 (cartão ou token USB).

Configuração do Certificado Digital

* * *

Menu Relatórios
---------------

### **1\. Operacional > LMC**

Foi ajustado o processo de registro para que a informação da devolução de combustível seja apresentada exclusivamente no dia em que a devolução ocorreu. A informação é apresentada tanto no **Quadro 4 - Volume Recebido no Dia** quanto no **Quadro 13 - Observações**.

### **2\. Operacional > Movimento Diário Analítico**

*   Foi ajustado o sistema para garantir que, ao realizar o pagamento de uma parcela de **Contas a Pagar** pela tela de **Múltiplas Quitações**, o valor seja registrado corretamente no **caixa da gerência**, além de no **livro caixa**, garantindo a consistência dos valores no relatório.
    
*   Foi implementada a opção de **filtro** no relatório para permitir a consulta dos lançamentos utilizando a **Data do Caixa** ou **Data da Venda**.
    

### **3\. Operacional > Extrato do Caixa**

Foi ajustada a funcionalidade de ordenação no relatório, garantindo que as contas de **origem** e de **aplicação** sejam organizadas corretamente, seja por **código** ou em **ordem alfabética**.

### **4\. Estoque > Custo da Mercadoria Vendida**

O sistema foi ajustado para exibir a tela de geração do relatório de CMV independentemente do tipo de movimentação presente no banco de dados (Diversos ou Combustíveis).

### **5\. Estoque > Inventário**

O sistema foi ajustado para calcular e exibir corretamente os custos dos produtos no relatório quando o filtro é aplicado para múltiplas empresas, garantindo a precisão dos dados.

### **6\. Estoque > Compras**

*   Adicionado um filtro para o **Tipo de Frete** no relatório de compras, com as mesmas opções exibidas no lançamento da nota fiscal, quando selecionada a apresentação **Por Compra - Resumido**.
    
*   Incluída uma coluna no relatório para exibir e totalizar o valor destacado do frete.
    

**Benefícios:**

*   **Maior Controle:** Facilita a análise e identificação de compras com base no tipo de frete.
    
*   **Relatórios Detalhados:** Proporciona uma visão mais completa e resumida dos custos de frete, auxiliando no planejamento financeiro.
    

Relatório de Compras - Apresentação Por Compra - Resumido

Relação de Compras Resumida

### **7\. Vendas > Vendas por Data e Produto**

Corrigido o relatório de **Vendas por Data e Produto** quando indicada uma data sem movimentação. O sistema exibia uma mensagem de erro inadequada. A mensagem foi ajustada para exibir: **"Não há dados para apresentar o relatório"** quando não houver registros na data selecionada.

### **8\. Cobrança > Relação de Vales**

Corrigido o relatório de **Relação de Vales** quando filtrado um PDV específico. O sistema retornava um erro e não gerava o relatório. Foi corrigido o processo de filtragem para o PDV no relatório, permitindo a geração correta dos dados.

### **9\. Fiscal > Vendas de Combustível e Formas de Pagamento**

*   Incluídas as finalizadoras **Carteira Digital**, **Pagamento de Frete** e **Vale Funcionário**, garantindo que o valor total no relatório corresponda corretamente ao valor dos outros relatórios que já contabilizavam essas finalizadoras.
    
*   Adicionadas novas finalizadoras para a opção de expansão das mesmas.
    
*   Corrigido erro de geração do relatório quando a base era SQL Server.
    

**Benefícios:**

*   **Precisão nos relatórios:** Elimina divergências e garante que todas as finalizadoras sejam consideradas.
    

Relatório de Vendas por Combustível e Formas de Pagamento

Relatório de Vendas de Combustível e Formas de Pagamento

* * *

`Novas Funcionalidades`
=======================

### **1\. Integração com BBPay no PDV Móvel da Cielo**

Implementada a integração do PDV Móvel da Cielo com a API do BBPay, permitindo pagamentos via QR Code Pix de forma rápida e segura. Essa funcionalidade oferece maior economia ao eliminar as taxas de adquirentes, restando apenas a taxa do banco emissor, que é geralmente mais vantajosa para os estabelecimentos comerciais.

**Configurações no Sistema:**

1.  No **Cadastro da Empresa**, acesse a guia **Complemento** e configure as [informações](#credenciais) referentes ao BBPay.
    

Cadastro de Empresas

2.  No **Cadastro de Operadoras**, clique em e preencha os campos conforme mostrado na imagem abaixo:
    

Cadastro de Operadoras

3.  No **Cadastro de Bandeiras**, clique em e insira as informações conforme indicado na imagem abaixo:
    

Cadastro de Bandeiras

4.  No **Cadastro de Administradoras**, clique em e preencha os campos conforme exibido na imagem abaixo:
    

Cadastro de Administradoras

Após realizar todas as configurações acima, o **PDV Móvel** estará habilitado para processar vendas via BBPay ao selecionar a finalizadora PIX.

**Demonstração do uso:**

Demonstração de venda no PDV Móvel

Transação após lançamento pelo PDV Móvel

**Observação:** Após a configuração do PDV Móvel com o BBPay, todas as cobranças realizadas com a finalizadora PIX pelo aplicativo ACS PDV Móvel serão processadas diretamente pela API do Banco do Brasil. Ou seja, a listagem de vendas no terminal exibirá apenas as vendas realizadas com cartão, pois estas são transacionadas pelo launcher de pagamentos do terminal. Já os recebimentos via PIX integrado com o BBPay efetuados através do PDV Móvel, estarão disponíveis exclusivamente para consulta na conta bancária do posto.

**Passo a Passo para Obter as Credenciais do Banco** credenciais

1.  **Acesse o site do Banco do Brasil para desenvolvedores:**
    
    *   Entre no endereço: [http://developers.bb.com.br](http://developers.bb.com.br).
        
2.  **Realize o login:**
    
    *   Faça o login utilizando as credenciais criadas pelo time ACS:
        
        *   CPF: 043.426.123-80
            
        *   Senha: Acs@2410
            
    *   Não é necessário acessar esse portal com as credenciais do proprietário ou responsável pela conta.
        

Tela inicial da plataforma

3.  **Crie uma nova aplicação para a empresa que irá utilizar a integração clicando no botão** .
    
4.  **Defina o nome da aplicação como o nome da empresa que irá utilizar:**
    

5.  **Selecione a API 'Pix Versão 2' e clique no botão** **para finalizar o processo.**
    

6.  **Encontre a aplicação da empresa:**
    
    *   Na tela de **Aplicações**, localize a aplicação vinculada à empresa que está sendo configurada e clique na mesma.
        

Aplicação da empresa

7.  **Clique no botão** .
    
8.  **Na tela apresentada, informe o CNPJ da empresa e clique no botão** **. Será apresentado o nome da empresa para confirmação. Clique no botão** **.**
    
9.  **Na tela apresentada, clique no botão** **.**
    
10.  **Nesse momento, é necessário solicitar ao proprietário da conta que acesse o BB Digital. No menu superior, haverá a opção Pendências para que ele realize o aceite do termo. Após o aceite, retorne para a plataforma de devolopers.**
     
11.  **Acesse a aplicação criada:**
     
     1.  Selecione a opção **Credenciais**.
         

5.  **Identifique os dados necessários:**
    
    *   **developer\_application\_key** corresponde à **Chave App BBPay** no sistema.
        
    *   **client\_id (site):** corresponde ao **Id Cliente BBPay** no sistema.
        
    *   **client\_secret (site):** corresponde ao **Token BBPay** no sistema.
        

6.  **Registre as credenciais no sistema:**
    
    *   Copie e insira as credenciais obtidas nos campos específicos do sistema para concluir a configuração.
        
    *   **Observação:** A **Chave Pix** será informada pelo proprietário.
        

### **2\. Faturamento de Convênio Multiempresa**

Implementação da funcionalidade de Faturamento de Convênio Multiempresa.

**Principais mudanças:**

1.  **Faturamento por Data** e **Faturamento por Vale:**
    
    1.  Em ambos os módulos, foi adicionado o filtro de **Empresa**, permitindo selecionar múltiplas empresas para faturar os vales dos clientes simultaneamente. Assim, ao logar em uma única empresa, o sistema gera faturas individuais para cada empresa relacionada aos vales do cliente.
        
    2.  O usuário logado deve possuir os privilégios necessários para faturamento nas empresas que deseja realizar o processo.
        

Faturamento por Data

No módulo **Faturamento por Data**, estão disponíveis três opções para filtrar os vales de clientes a serem faturados:

1.  **Todos com a mesma data de vencimento**: Fatura os vales em aberto de todos os clientes com o mesmo dia de vencimento, conforme configurado em _**Cadastro** \> **Clientes**_ na aba _**Cobrança**_.
    
2.  **Período de Emissão**: Permite selecionar um intervalo de datas de emissão dos vales para faturamento.
    
3.  **Escolha do Cliente**: Fatura todos os vales em aberto de um cliente específico, podendo incluir um autorizado (opcional).
    

Além disso, o processo conta com duas operações distintas:

*   **Conferir a soma dos vales**: Gera relatórios com os vales em aberto por cliente e empresa, permitindo ajustes antes do faturamento.
    
*   **Gerar as faturas**: Cria as faturas individualmente para cada cliente e empresa, com opções adicionais de personalização no box _Opções do Relatório_.
    

Faturamento por Vale

No módulo **Faturamento por Vale**, após selecionar a(s) empresa(s), indicar o cliente a ser faturado e clicar no botão , será apresentada a seguinte tela com os vales em aberto do cliente com uma coluna de identificação da empresa a qual aquele vale corresponde.

Tela para seleção de vales

Após a seleção, o sistema gera faturas individualmente para cada empresa, consolidando os vales selecionados para o cliente em cada empresa correspondente.

2.  **Controle de Faturas de Convênio**
    
    1.  Na tela de consulta das faturas, é possível indicar quais empresas devem ser consultadas, para visualização e edição dos dados;
        
    2.  O usuário logado deve possuir os privilégios necessários acessar as faturas das empresas que deseja consultar.
        

Controle de Faturas de Convênios

3.  **Quitação de Faturas**
    
    1.  O sistema permite a quitação de faturas de qualquer empresa selecionada.
        
    2.  O usuário logado deve possuir os privilégios necessários para quitação de convênios nas empresas onde ele deseja efetuar as quitações.
        

Quitação de Faturas

**Benefícios:**

*   Agilidade: Usuários podem gerenciar faturas de convênio para múltiplas empresas sem precisar efetuar múltiplos logins.
    
*   Centralização: Permite a consulta e visualização dos dados de várias empresas, facilitando a gestão da rede de postos.
    

Essa nova funcionalidade traz uma significativa melhoria operacional, permitindo que o setor financeiro trabalhe de forma mais integrada e eficiente

### **3\. Integração BR Mania VEM**

A integração entre o sistema ACS e a BR Mania oferece uma solução robusta para otimizar o cadastro padrão, envio de vendas, gestão e controle de posições livres para produtos. Este guia detalha o processo desde as configurações iniciais até o cadastro e vinculação de produtos, garantindo um funcionamento pleno desta integração.

**Configurações Iniciais**

1.  **Configurar o serviço da VEM**
    
    *   Crie uma pasta chamada ACS\_VEM no Disco Local C, de preferência no servidor para que a comunicação com o banco de dados não seja interrompida e instale o serviço.
        
    *   Aponte o caminho do banco de dados e teste a comunicação com o mesmo.
        
    *   Defina um horário para que seja realizado o envio diário das informações de vendas e compras.
        
    *   Preencha corretamente o campo da URL de comunicação ([https://br-api.azure-api.net/](https://br-api.azure-api.net//)).
        
    *   Clique em e inicie o serviço.
        

Configuração Serviço Vem

2.  **Parâmetros do Sistema**
    
    *   No ACS Gerente, acesse _**Parâmetros do Sistema**_ > guia _**Integração**_ \> aba _**VEM**_.
        
    *   Configure a **data inicial** e o **ZBRM** (informações fornecidas pelo consultor da loja).
        
    *   Caso essas informações não tenham sido fornecidas, clique em para que seja realizada uma consulta e preenchimento automático.
        

Opções > Parâmetros do Sistema

3.  **Carga inicial**
    
    *   Retorne ao **Configurador Vem** e clique em . Será realizada uma consulta e baixa de todas as Categorias, Produtos e Promoções da base da BR Mania para o sistema ACS.
        
    *   Durante o processo da Carga Inicial, é realizada a vinculação automática dos produtos pelo código de barras dos mesmos.
        

Carga de Categorias

Carga de Promoções

Carga de Produtos

4.  **Configuração dos seguintes cadastros:**
    

**Cadastro de Pontos de Venda**

Na guia Integração do Cadastro de Pontos de Venda, deve ser indicado que as movimentações realizadas no PDV serão enviadas para a Br Mania.

**Cadastro de Grupos de Produtos**

No Cadastro de Grupos de Produtos, deve ser indicado individualmente em cada grupo de produtos da loja de conveniência que as compras e vendas desses produtos vinculados ao grupo serão transmitidas para a Br Mania, indicando o campo ‘Enviar p/ Shell’ como ‘Sim’.

**Cadastro de Estoques**

No Cadastro de Estoques, deve ser indicado nos estoques de venda que as vendas dos produtos vinculados a esse estoque serão transmitidas para a Br Mania, indicando o campo ‘Enviar p/ Shell’ como ‘Sim’.

5.  **Verificação de produtos não vinculados**
    
    *   Após o processo da Carga Inicial, caso ainda existam produtos não vinculados, acesse o menu _**Relatórios**_ **\>** _**Listagem**_ **\>** _**Produtos**_ para identificar quais produtos deverão ter sua vinculação realizada de forma manual.
        

Relatório de Listagem de Produtos

Defina os filtros da seguinte forma para localizar os produtos que necessitam da vinculação manual:

Situação: **Ativos**

Tipo (Loja/Pista): **Loja**

Br Mania: **Não Vinculados**

**Processo de Vinculação Manual** vinc\_manual

1.  **Acessando o Mapeamento Br Mania**
    
    *   Acesse _**Opções**_ **\>** _**Configurar VEM**_.
        

Opções > Configurar Vem

Na parte superior, estão localizados os **Produtos** (produtos da base da BR Mania). Pesquise o produto a ser vinculado pela **descrição** ou **código de barras** do mesmo.

Mapeamento Br Mania VEM - Produtos

Selecione o produto e clique em . Uma nova janela será exibida com os produtos da base da ACS.

Listagem de produtos da ACS para vinculação

2.  **Vinculando produtos**
    
    *   Pesquise o produto na tela apresentada pela descrição ou código, deixe o mesmo selecionado e clique em para finalizar a vinculação manual.
        
    *   Repita o processo para todos os produtos não vinculados.
        

*   Caso o produto pesquisado no **Mapeamento** não seja localizado pelo código de barras ou descrição, será necessário solicitar o cadastro do mesmo no portal da BR Mania.
    

1.  Acesse o seguinte link [https://cn.vibraenergia.com.br/login/](https://cn.vibraenergia.com.br/login/) e realize o login.
    
2.  Clique no ícone do Menu Lateral.
    

3.  Acesse o menu **Franquias** e opção **Solicitação Novo Produto**.
    

4.  Na tela apresentada, clique no botão e realize o cadastro do produto.
    
5.  Com esse cadastro realizado, existem dois cenários que podem ocorrer:
    
    1.  **Cadastro concluído:** O produto é aceito e incluído na base da Br Mania. Na próxima Carga Parcial, o mesmo será baixado para o sistema da ACS e poderá ser vinculado manualmente ao produto da base da ACS.
        
    2.  **Cadastro não aceito:** O produto não teve o cadastro no portal aceito e deverá ser tratado como **Posição Livre** (produtos fora da base BR Mania).
        

note

As lojas de conveniência possuem, por padrão, um limite de 50 posições livres para cadastrar produtos não existentes na base da BR Mania. Este limite é definido pela franqueadora.

**Como configurar um produto como Posição Livre:**

1.  **Acesse o cadastro do produto** no sistema.
    
2.  Na guia **Integração**, configure o campo **Tipo Composto (Integração)** como **Livre**.
    
3.  Salve o cadastro para habilitar o campo **Posição Livre BR Mania**.
    
4.  Edite novamente o produto e clique no ícone para gerar o código de Posição Livre.
    

Com essa configuração, o produto será tratado como Posição Livre.

**Como verificar se um produto está como Posição Livre:**

1.  Acesse _**Opções**_ **\>** _**Configurar VEM**_.
    
2.  Na guia **Posição Livre**, serão apresentados todos os produtos configurados dessa forma.
    

Mapeamento Br Mania VEM - Guia Posição Livre

As lojas de conveniência possuem, por padrão, um limite de 50 posições livres para cadastrar produtos não existentes na base da BR Mania. Este limite é definido pela franqueadora.

**Como configurar um produto como Posição Livre:**

1.  **Acesse o cadastro do produto** no sistema.
    
2.  Na guia **Integração**, configure o campo **Tipo Composto (Integração)** como **Livre**.
    
3.  Salve o cadastro para habilitar o campo **Posição Livre BR Mania**.
    
4.  Edite novamente o produto e clique no ícone ![icone\_lampada-20241223-181719.png](https://acsapps.atlassian.net/wiki/download/attachments/181338113/icone_lampada-20241223-181719.png?version=2&modificationDate=1734980168280&cacheVersion=1&api=v2) para gerar o código de Posição Livre.
    

Com essa configuração, o produto será tratado como Posição Livre.

**Como verificar se um produto está como Posição Livre:**

1.  Acesse _**Opções**_ **\>** _**Configurar VEM**_.
    
2.  Na guia **Posição Livre**, serão apresentados todos os produtos configurados dessa forma.
    

![mapeamento\_shell\_posicao\_livre-20241223-191805.png](https://acsapps.atlassian.net/wiki/download/thumbnails/181338113/mapeamento_shell_posicao_livre-20241223-191805.png?version=1&modificationDate=1734981653361&cacheVersion=1&api=v2&width=765&height=420)

**Cadastro de Promoções do Catálogo**

1.  **Acessando o Mapeamento Br Mania**
    
    *   Acesse _**Opções**_ **\>** _**Configurar VEM**_.
        

Opções > Configurar Vem

Na parte inferior, estão localizados os **Combos**. Pesquise pelo código da promoção no campo **Cód. Promoção Mix**.

Mapeamento Br Mania VEM - Combos

Após localizar a promoção, deixe a mesma selecionada e clique em para que na parte superior de **Produtos** sejam apresentados todos os itens que fazem parte da mesma.

2.  **Vinculação de itens**
    
    *   Verifique se os itens apresentados na parte superior possuem o status **Vinculados** na coluna **BR Mania**.
        

Mapeamento Br Mania VEM

Caso não estejam, realize a [vinculação manual](#vinc_manual). Esse processo é essencial devido só poderem ser incluídos na promoção os produtos com o status de **Vinculado**.

3.  **Cadastro da promoção**
    

**Dica:** Cadastre um grupo chamado **PROMOCOES VEM** no menu _**Cadastro**_ **\>** _**Produtos**_ **\>** _**Grupos**_ e crie subgrupos para organizar as promoções que serão cadastradas por **mês**.

Exemplo do cadastro de Grupo e Subgrupos

No menu _**Cadastro**_ **\>** _**Produtos**_ **\>** _**Produtos**_, pesquise por um produto que fará parte da promoção a ser cadastrada e **clone** o cadastro do mesmo.

Na guia Geral, atualize os campos de **Grupo** e **Subgrupo** de acordo com o grupo criado. No campo **Código de Barras - GTIN**, informe o código da promoção presente no catálogo. Dessa forma, os campos de **Descrição** e **Preço** serão preenchidos automaticamente.

Cadastro da promoção - Guia Geral

Acesse a guia **Integração** e configure o **Cód. Produto AC Fortes** clicando no ícone .

Cadastro da promoção - Guia Integração

Clique no botão e vincule ao estoque apropriado para finalizar o cadastro da promoção.

4.  **Verificação final**
    
    *   Na guia **Estoque** do cadastro do produto, clique no botão para confirmar se os itens da promoção foram configurados corretamente de forma automática. Ajuste, se necessário.
        

Componentes da promoção

### **4\. Integração ACS x Connecttec**

A Connecttec é uma empresa especializada na automação de rotinas de pagamento, integrando-se com a automação de bombas de combustível para oferecer mais praticidade tanto para consumidores quanto para frentistas no momento do abastecimento. Uma das funcionalidades automatizadas é a realização de pagamentos via aplicativo Ticket Log, cujo processo ocorre da seguinte forma:

1.  O cliente/usuário do aplicativo Ticket Log, ao chegar no posto, seleciona o tipo de combustível e o valor do abastecimento. Após confirmar a operação, a bomba recebe essas informações automaticamente.
    
2.  Ao finalizar o abastecimento, é impresso um comprovante de pagamento referente ao valor abastecido, encerrando o ciclo de comunicação entre o aplicativo e a automação de bombas.
    

Além dessa praticidade, o cliente também pode configurar previamente no aplicativo o tipo de documento fiscal que deseja receber após a venda ser concluída.

**Configurações Iniciais:**

1.  No **Cadastro da Administradora** Ticket Log, preencha no campo **Código Connecttec** o código do cartão Connecttec, que será o 19.
    

Cadastro de Administradoras

2.  No **Cadastro de Operadoras**, clique em e preencha os campos conforme mostrado na imagem abaixo:
    

Cadastro de Operadoras

3.  No **Cadastro de Bandeiras**, clique em e insira as informações conforme indicado na imagem abaixo:
    

Cadastro de Bandeiras

4.  No **Cadastro de Administradoras**, clique em e preencha os campos conforme exibido na imagem abaixo:
    

Cadastro de Administradoras

Esta administradora será utilizada como **padrão** para as vendas. Caso o sistema não encontre a finalizadora pelo código Connecttec, a venda será automaticamente registrada nela.

5.  **Parâmetros do Sistema**
    
    *   Acesse **Parâmetros do Sistema** > guia **Integração** > aba **Connecttec.**
        
    *   Configure o id do **Posto**, a **URL Integração** ([http://ecr.conecttec.com.br](http://ecr.conecttec.com.br)) e a **Administradora padrão** cadastrada no passo anterior.
        

Opções > Parâmetros do Sistema

6.  **Instalação e configuração do serviço ACS Conecttec**
    

O serviço ACS Conecttec é responsável por associar os abastecimentos realizados via aplicativo Ticket Log às informações correspondentes no sistema ACS PDV, incluindo nome do cliente, CPF/CNPJ e tipo de documento fiscal.

*   Crie uma pasta chamada ACS\_Connecttec no Disco Local C do computador do PDV principal da Pista e instale o serviço.
    
    *   Caso haja mais de um PDV principal, o serviço deverá ser instalado no(s) outro(s) PDV(s) também.
        
*   Aponte o caminho do banco de dados e teste a comunicação com o mesmo.
    
*   Aponte o caminho do arquivo de configuração no campo **Local MQTT** (`C:\ACS_Conecttec\MQTT\Conecttec-mqtt\config`)
    
*   Clique em e inicie o serviço.
    

Com isso, a instalação estará concluída, e o PDV estará apto para emitir as vendas integradas.

**Observação:** As configurações no concentrador do cliente são realizadas previamente pelos técnicos da Connecttec.

**Emissão de Vendas no PDV**

O cliente realiza a liberação do abastecimento pelo seu aplicativo da Ticket Log. Após a finalização do abastecimento:

1.  O abastecimento será exibido no PDV com uma observação indicando a vinculação à **Connecttec**.
    

Abastecimentos pendentes no PDV

2.  Ao selecionar o abastecimento e clicar em , o sistema emitirá automaticamente a venda e o documento fiscal correspondente (_CFe, NFCe_ ou _NFe_).
    
    *   Apenas uma venda pode ser emitida por vez, já que cada abastecimento está vinculado a um cliente específico.
        
    *   O documento fiscal será enviado automaticamente ao cliente após a autorização da venda.
        

note

**Observação:** Para a emissão de NF-e no estado do Ceará, é necessário que o PDV esteja configurado com o certificado digital instalado no micro. Caso contrário, o PDV emitirá automaticamente um cupom fiscal (CFe) e exibirá um alerta informando sobre as dependências para a emissão do documento solicitado pelo cliente.

Alerta com relação ao documento fiscal.

**Observação:** Para a emissão de NF-e no estado do Ceará, é necessário que o PDV esteja configurado com o certificado digital instalado no micro. Caso contrário, o PDV emitirá automaticamente um cupom fiscal (CFe) e exibirá um alerta informando sobre as dependências para a emissão do documento solicitado pelo cliente.

![alerta\_nfce-20241226-141751.png](https://acsapps.atlassian.net/wiki/download/thumbnails/181338113/alerta_nfce-20241226-141751.png?version=1&modificationDate=1735222713428&cacheVersion=1&api=v2&width=344&height=143)

* * *

`ACS PDV - Versão 6.3287.6.362 - 17 de Dezembro de 2024`
========================================================

### **1\. Venda de produtos com opcionais**

Ajustada a lógica de seleção de componentes de um produto composto para garantir que todas as opções permaneçam disponíveis independentemente da ordem de seleção.

### **2\. TEF PayGo**

Ajustada a rotina de gravação da administradora do cartão para que a informação correta, capturada após a finalização do TEF, seja exibida no cupom fiscal.

### **3\. CST ICMS no XML**

Corrigida a regra de substituição do CST ICMS no XML do cupom fiscal quando o PDV está configurado para o modo contingência no Ceará. Agora, o sistema ajustará o CST conforme as regras fiscais locais.

**Detalhes da Implementação:**

*   O CST 060 será automaticamente substituído pelo CST 061 na emissão de NFC-e, exceto para produtos classificados como Etanol.
    
*   Essa lógica foi ajustada para corrigir o comportamento incorreto observado anteriormente.
    

**Benefício:**

*   Atende às exigências da SEFAZ no estado do Ceará, garantindo conformidade tributária e maior precisão nas emissões de documentos fiscais.
    

### **4\. Produto composto com componentes de departamentos fiscais diferentes**

Nas vendas de produtos compostos configurados para destacar os componentes no cupom fiscal (`Componentes no cupom = SIM`), o preenchimento do XML foi ajustado para que cada componente destacado siga sua própria classificação fiscal, conforme configurado no departamento fiscal indicado no cadastro de cada produto.

### **5\. Validação dos níveis de preços de combustível**

Implementados novos campos no **Cadastro de Produtos**, **Cadastro de Funcionários** e **Cadastro de Concentradores** para realizar validações adicionais de preços diferenciados por finalizadora, trazendo mais flexibilidade na gestão de preços.

**Contexto:**

Com a possibilidade de configurar até três níveis de preços na bomba, muitos postos aderiram a essa prática para repassar aos clientes os custos das taxas cobradas pelas adquirentes no preço do combustível, conforme a forma de pagamento que seria utilizada. Isso oferece maior flexibilidade na precificação, ajustando os valores conforme as taxas aplicadas em diferentes finalizadoras.

**Exemplo da Utilização:**

Para o combustível **Gasolina Comum**, a estrutura de preços pode ser configurada da seguinte maneira:

*   Preço à Vista: R$5,79
    
    *   Formas de pagamento atribuídas a esse preço: Dinheiro, Cartão de Débito e PIX.
        
    *   Motivo: Essas formas de pagamento possuem taxas inexistentes ou menores.
        
*   Preço Nível 1 (A Prazo): R$5,99
    
    *   Forma de pagamento atribuída a esse preço: Cartão de Crédito.
        
    *   Motivo: Taxas mais altas aplicadas pelas adquirentes para vendas a prazo.
        
*   Preço Nível 2 (A Prazo): R$6,19
    
    *   Forma de pagamento atribuída a esse preço: Pagamento de Frete.
        
    *   Motivo: Forma de pagamento com taxa maior em consideração as duas anteriores.
        

:note:atlassian-note#B3D4FF

**Observação:** O Tipo de Cartão **Pagamento de Frete** é geralmente associado a administradoras específicas, como GoodCard e Libercard, que cobram taxas mais elevadas. Isso explica o preço mais alto aplicado para essas transações.

**Configurações necessárias para funcionamento no sistema:**

No ACS Gerente:

*   No **Cadastro de Administradoras**, é necessário configurar corretamente o **Tipo de Cartão** para cada administradora, garantindo que o sistema reconheça os preços aplicados a cada uma.
    

Administradora do tipo PIX

Administradora do tipo Crédito

Administradora do tipo Pagamento de Frete

No **PDV**, é necessário informar os três níveis de preços para cada combustível, distribuindo os valores nas respectivas colunas de preço.

Mudança de preço no PDV

Na **Automação**:

*   É necessário cadastrar os cartões de liberação dos frentistas, configurando-os corretamente para cada nível de preço, para que as bombas apliquem o valor correto antes de iniciar o abastecimento.
    

**Fixação de preços:**

Para garantir que os níveis de preços fossem obedecidos para a forma de pagamento utilizada na finalização da venda, era necessário que no **Cadastro de Produtos** dos combustíveis, na aba **Finalizadoras**, fossem fixados os preços (Preço, Preço Nível 1 e Preço Nível 2) em cada forma da pagamento manualmente. Essa configuração evitava prejuízos, pois o preço do abastecimento era atualizado automaticamente no momento da venda, de acordo com a forma de pagamento escolhida. Um exemplo prático dessa funcionalidade é quando um cliente opta por abastecer com o preço de débito (mais barato, à vista), mas no momento de pagar decide utilizar o crédito (mais caro, a prazo). Com o sistema devidamente configurado, o preço é ajustado automaticamente conforme a finalizadora selecionada.

**Problema Identificado:**

Com a integração ao programa de fidelidade **PontuaX**, que oferece um desconto direto na bomba antes do abastecimento, a lógica de preços fixos gerou inconsistências. O desconto oferecido pelo programa não era aplicado corretamente, pois o preço fixo da finalizadora prevalecia, ignorando o benefício do cliente.

**Solução Implementada:**

Para melhorar a precisão no cálculo de descontos e assegurar a correta aplicação de preços para os clientes, foram adicionados novos campos nas telas de **Cadastro de Produtos**, **Cadastro de Funcionários** e **Cadastro de Concentradores**. Agora, além da validação por finalizadora, o sistema considera também o tipo de preço (À vista ou A prazo) informado em cada um desses módulos de cadastro, garantindo que o desconto aplicado pelo programa de fidelidade seja ajustado corretamente para o cliente.

:note:atlassian-note#B3D4FF

**Observação:** A forma de validação do tipo de preço varia conforme o concentrador utilizado no posto. Uma configuração comum a todos os modelos de concentradores é a do Cadastro de Produtos, onde é indicado o desconto ou acréscimo por forma de pagamento.

*   **Automação EZTech**: Para clientes com automação EZTech, a mudança do preço é realizada através de um cartão específico para isso, independente do cartão de identificação do frentista. Com isso, a configuração dos tipos de preço deve ser realizada no **Cadastro de Concentradores**, onde será indicado para cada nível de preço se é para pagamento À Vista ou A Prazo.
    
*   **Automação Companytec**: Para clientes com automação Companytec, a mudança do preço é realizada com o mesmo cartão que serve para identificar o frentista. Com isso, a configuração dos tipos de preço deve ser feito no **Cadastro de Funcionários**, onde será indicado para cada cartão do frentista se é para pagamento À Vista ou A Prazo.
    

**Demonstração das configurações necessárias:**

As configurações a serem realizadas no sistema são as seguintes:

applescript Produtos > Produtos\]\]>

Na guia **Geral**, indique da seguinte maneira as modalidades de pagamento **À Vista** e **A Prazo** nos preços dos combustíveis (utilizado o combustível Gasolina Comum para os exemplos):

Cadastro de Produtos > Guia Geral

Na guia **Finalizadoras**, indique os campos das colunas **Tipo**, **Valor** e **Aplicar p/ preço** da seguinte maneira nas finalizadoras listadas:

Cadastro de Produtos > Guia Finalizadoras

Para a finalizadora **Cartão de Crédito** (destacada na cor vermelha), devem ser realizadas as seguintes configurações:

*   **Tipo**: Acréscimo em Espécie.
    
*   **Valor**: Deve ser o valor da diferença entre o **Preço** (R$5,79) e o **Preço Nível 1** (R$5,99). Nesse exemplo, R$0,20.
    
*   **Aplicar p/ preço**: À Vista.
    

Dessa forma, quando for realizado um abastecimento com o cartão de liberação do **Preço** mais barato (R$5,79 | À Vista), e indicada no momento do pagamento uma administradora do tipo **Cartão de Crédito** (R$5,99 | A Prazo), o sistema acrescentará R$0,20 por litro ao valor final, ajustando o total conforme a forma de pagamento utilizada.

Para a finalizadora **Pagamento de Frete** (destacada na cor azul), devem ser realizadas as seguintes configurações:

*   **Tipo**: Acréscimo em Espécie.
    
*   **Valor**: Deve ser o valor da diferença entre o **Preço** (R$5,79) e o **Preço Nível 2** (R$6,19). Nesse exemplo, R$0,40.
    
*   **Aplicar p/ preço**: À Vista.
    

Dessa forma, quando for realizado um abastecimento com o cartão de liberação do **Preço** mais barato (R$5,79 | À Vista), e indicada no momento do pagamento uma administradora do tipo **Pagamento de Frete** (R$6,19 | A Prazo), o sistema acrescentará R$0,40 por litro ao valor final, ajustando o total conforme a forma de pagamento utilizada.

applescript Concentradores\]\]>

Conforme explicado anteriormente, a validação com o **Cadastro de Concentradores** ocorrerá apenas quando o concentrador utilizado for EZTech, onde a liberação do abastecimento é realizada sempre com o mesmo cartão, necessitando das configurações a seguir para que o sistema identifique o nível de preço liberado para não gerar acréscimos indevidos.

Na guia **Complemento**, indique as modalidades de pagamento **À Vista** e **A Prazo** da seguinte maneira:

Cadastro de Concentradoras > Guia Complemento

*   Para o campo **Cartão nível 1**, indique a mesma modalidade informada no campo **Preço** do Cadastro do Produto. Dessa forma, ao ser realizado um abastecimento com o cartão de liberação do **Preço** (R$5,79 | À Vista), o sistema registrará na tabela de abastecimentos que aquele abastecimento foi À Vista, e a depender da forma de pagamento indicada na finalização da venda, gerará o acréscimo ou não.
    
*   Para o campo **Cartão nível 2**, indique a mesma modalidade informada no campo **Preço Nível 1** do Cadastro do Produto. Dessa forma, ao ser realizado um abastecimento com o cartão de liberação do **Preço Nível 1** (R$5,99 | A Prazo), o sistema registrará na tabela de abastecimentos que aquele abastecimento foi A Prazo, não gerando um novo acréscimo independente da forma de pagamento indicada na finalização da venda.
    
*   Para o campo **Cartão nível 3**, indique a mesma modalidade informada no campo **Preço Nível 2** do Cadastro do Produto. Dessa forma, ao ser realizado um abastecimento com o cartão de liberação do **Preço Nível 2** (R$6,19 | A Prazo), o sistema registrará na tabela de abastecimentos que aquele abastecimento foi A Prazo, não gerando um novo acréscimo independente da forma de pagamento indicada na finalização da venda.
    

applescript Funcionários\]\]>

Conforme explicado anteriormente, a validação com o **Cadastro de Funcionários** ocorrerá apenas quando o concentrador utilizado for Companytec, onde a mudança do preço é realizada pelo mesmo cartão que identifica o frentista.

Na guia **Identificação**, configure as modalidades de pagamento **À Vista** e **A Prazo** para cada código de cartão conforme o nível de preço liberado pelo cartão:

**Dica:** Para garantir a configuração correta, acesse o concentrador do posto e consulte os códigos de cartão de cada funcionário. Organize as modalidades de pagamento conforme necessário, mantendo a mesma sequência configurada no **Cadastro de Produtos**.

Cadastro de Funcionários > Guia Identificação

**Aplicação prática com exemplos:**

A seguir, serão destacados cenários práticos para demonstrar o funcionamento do sistema, tanto com o programa de fidelidade **PontuaX** quanto sem:

**Cenário 1 - Sem PontuaX**

Um cliente solicita R$50 de Gasolina Comum, informando que o pagamento será em **Dinheiro**. O frentista realiza o abastecimento liberando a bomba com o cartão de preço À Vista (R$5,79).

Durante o pagamento, podem ocorrer três situações distintas:

1.  **Pagamento em dinheiro**: O cliente confirma o pagamento em dinheiro, e o sistema assume que o preço do abastecimento (R$5,79) está correto. Não há acréscimos ou descontos, já que a finalizadora Dinheiro no Cadastro do Produto não possui ajustes configurados.
    

2.  **Pagamento com cartão do tipo crédito**: O cliente informa que irá realizar o pagamento com cartão de crédito. Dessa forma, o sistema irá realizar a seguinte validação:
    
    1.  Verifica se a modalidade de pagamento do **preço** do abastecimento (À Vista ou A Prazo) corresponde ao campo “**Aplicar para o preço**” da finalizadora selecionada. Neste caso, a modalidade de pagamento indicada no campo “**Aplicar para o preço**” da finalizadora (Cartão de Crédito) é **À Vista**, e a modalidade de pagamento do **preço** do abastecimento (R$5,79) também é **À Vista**. Sendo assim, o sistema adiciona um acréscimo de **R$0,20** por litro, ajustando o valor total do abastecimento para refletir o pagamento com crédito.
        

#E6FCFF

*   **Preço original do abastecimento**: R$5,79.
    
*   **Acréscimo aplicado pela finalizadora**: R$0,20.
    
*   **Novo preço com acréscimo**: R$5,99.
    

O novo valor total do abastecimento é calculado da seguinte forma:

*   **Quantidade abastecida**: 8,636 litros.
    
*   **Cálculo**: R$5,99 x 8,636 litros = R$51,72.
    

**Acréscimo total** gerado ao valor final do abastecimento: **R$1,72**.

3.  **Pagamento com cartão do tipo pagamento de frete:** O cliente informa que irá realizar o pagamento com cartão de frota (GoodCard, por exemplo). Dessa forma, o sistema irá realizar a seguinte validação:
    
    1.  Verifica se a modalidade de pagamento do **preço** do abastecimento (À Vista ou A Prazo) corresponde ao campo “**Aplicar para o preço**” da finalizadora indicada. Nesse caso, a modalidade de pagamento indicada no campo “**Aplicar para o preço**” da finalizadora (Pagamento de Frete) é **À Vista**, e a modalidade de pagamento do **preço** do abastecimento (R$5,79) também é **À Vista**. Sendo assim, o sistema adiciona um acréscimo de **R$0,40** por litro, ajustando o valor total do abastecimento para refletir o pagamento com cartão de frota.
        

#E6FCFF

*   **Preço original do abastecimento**: R$5,79.
    
*   **Acréscimo aplicado pela finalizadora**: R$0,40.
    
*   **Novo preço com acréscimo**: R$6,19.
    

O novo valor total do abastecimento é calculado da seguinte forma:

*   **Quantidade abastecida**: 8,636 litros.
    
*   **Cálculo**: R$6,19 x 8,636 litros = R$53,45.
    

**Acréscimo total** gerado ao valor final do abastecimento: **R$3,45**.

**Cenário 2 - Com PontuaX**

Um cliente solicita R$100 de Gasolina Comum, informando que possui um **desconto de R$0,10** **centavos** pelo programa de fidelidade **PontuaX** e que o pagamento será em **Dinheiro**. O frentista realiza o abastecimento liberando a bomba com o cartão de preço À Vista (R$5,79). Porém, com o desconto do cliente, o abastecimento é realizado com o preço de R$5,69.

Durante o pagamento, podem ocorrer três situações distintas:

1.  **Pagamento em dinheiro**: O cliente confirma o pagamento em dinheiro, e o sistema assume que o preço do abastecimento (R$5,69) está coreto. Não há acréscimos ou descontos, já que a finalizadora Dinheiro no Cadastro do Produto não possui ajustes configurados.
    

2.  **Pagamento com cartão do tipo crédito**: O cliente informa que irá realizar o pagamento com cartão de crédito. Dessa forma, o sistema irá realizar a seguinte validação:
    
    1.  Verifica se a modalidade de pagamento do **preço** do abastecimento (À Vista ou A Prazo) corresponde ao campo “**Aplicar para o preço**” da finalizadora selecionada. Neste caso, a modalidade de pagamento indicada no campo “**Aplicar para o preço**” da finalizadora (Cartão de Crédito) é **À Vista**, e a modalidade de pagamento do **preço** do abastecimento (R$5,69) também é **À Vista**. Sendo assim, o sistema adiciona um acréscimo de **R$0,20** por litro, ajustando o valor total do abastecimento para refletir o pagamento com crédito.
        

#E6FCFF

*   **Preço original do abastecimento**: R$5,69.
    
*   **Acréscimo aplicado pela finalizadora**: R$0,20.
    
*   **Novo preço com acréscimo**: R$5,89.
    

O novo valor total do abastecimento é calculado da seguinte forma:

*   **Quantidade abastecida**: 17,576 litros.
    
*   **Cálculo**: R$5,89 x 17,576 litros = R$103,52.
    

**Acréscimo total** gerado ao valor final do abastecimento: **R$3,52**.

3.  **Pagamento com cartão do tipo pagamento de frete:** O cliente informa que irá realizar o pagamento com cartão de frota (GoodCard, por exemplo). Dessa forma, o sistema irá realizar a seguinte validação:
    
    1.  Verifica se a modalidade de pagamento do **preço** do abastecimento (À Vista ou A Prazo) corresponde ao campo “**Aplicar para o preço**” da finalizadora indicada. Nesse caso, a modalidade de pagamento indicada no campo “**Aplicar para o preço**” da finalizadora (Pagamento de Frete) é **À Vista**, e a modalidade de pagamento do **preço** do abastecimento (R$5,69) também é **À Vista**. Sendo assim, o sistema adiciona um acréscimo de **R$0,40** por litro, ajustando o valor total do abastecimento para refletir o pagamento com cartão de frota.
        

#E6FCFF

*   **Preço original do abastecimento**: R$5,69.
    
*   **Acréscimo aplicado pela finalizadora**: R$0,40.
    
*   **Novo preço com acréscimo**: R$6,09.
    

O novo valor total do abastecimento é calculado da seguinte forma:

*   **Quantidade abastecida**: 17,576 litros.
    
*   **Cálculo**: R$6,09 x 17,576 litros = R$107,03.
    

**Acréscimo total** gerado ao valor final do abastecimento: **R$7,03**.

### **6\. Envio de abastecimento para a Vibra**

O produto Arla 32 estava sendo enviado para a Vibra, mesmo não tendo um código correspondente na tabela de combustíveis da administradora, resultando em erros no envio. Foi ajustado o sistema para impedir o envio do produto Arla 32 para a Vibra, evitando o envio de produtos sem código válido na tabela.

### **7\. Venda de comanda com taxa**

Ajuste no sistema para incluir a taxa no cálculo do total da venda, permitindo a finalização correta de vendas de comanda com taxa em que os valores são superiores a R$200.

### **8\. Estorno de PIX efetuado via Sitef**

Ajuste no sistema para evitar o estorno de transações Pix aprovadas via Sitef, garantindo que, em vez de enviar o cancelamento, seja enviada a confirmação da transação.

### **9\. Produto composto em comandas**

Melhorias nos PDVs de comanda:

*   Permite o lançamento de duas comandas com produtos compostos na mesma venda.
    
*   Permite incluir produto composto no PDV de comanda.
    

* * *

`ACS PDV Móvel - Versão 6.3287.6.14 - 17 de Dezembro de 2024`
=============================================================

### **1\. Melhorias no processo de impressão do comprovante (Terminal Stone)**

Uma nova versão do ACS PDV Móvel da Stone está disponível, trazendo as seguintes melhorias:

1.  Reordenação dos comprovantes de pagamento e cupom fiscal:
    
    1.  A ordem de impressão foi ajustada para: via do estabelecimento, via do cliente e, por último, o cupom fiscal. Além disso, foi implementado um temporizador de 30 segundos para a decisão de impressão do comprovante de pagamento do cliente. Caso o frentista não interaja dentro desse prazo, a via do cliente não será impressa, e o sistema avançará automaticamente para a finalização da venda, onde as opções de impressão do cupom fiscal estarão disponíveis.
        
2.  Desbloqueio do abastecimento:  
    Após o cancelamento da ordem de pagamento, o abastecimento agora é liberado instantaneamente, permitindo seu uso imediato em outra venda.
    

* * *

`Monitor de Medição - Versão 6.3287.6.6 - 17 de Dezembro de 2024`
=================================================================

### **1\. Comunicação com o medidor Concept**

Foi realizado um ajuste na integração para estabelecer a comunicação entre o **Monitor de Tanques** e o medidor Concept, garantindo o correto funcionamento da automação e atualização das medições.

**Benefícios:**

*   Captura de saldos dos tanques utilizando o medidor Concept.
    
*   Maior flexibilidade e compatibilidade com diferentes protocolos de comunicação.
    

* * *