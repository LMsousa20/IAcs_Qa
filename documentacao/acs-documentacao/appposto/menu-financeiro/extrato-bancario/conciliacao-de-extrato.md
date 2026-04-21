---
title: Conciliação de Extrato
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/489291791
---

# Conciliação de Extrato

16truenonelisttrue

Conciliação de Extrato
======================

O módulo de **Extrato Bancário** permite importar, visualizar e conferir as movimentações financeiras registradas na conta bancária da empresa. Com ele, as entradas e saídas da conta podem ser comparadas com os lançamentos internos do sistema, garantindo maior controle, confiabilidade e precisão nas informações.

O objetivo principal é assegurar que todas as transações sejam identificadas, classificadas corretamente e conciliadas, para que os saldos do Livro Caixa reflitam fielmente a movimentação bancária, evitando divergências e aprimorando a gestão financeira.

**Benefícios da conciliação bancária**

*   **Controle financeiro**: mantém o saldo da conta no sistema sempre atualizado em relação ao banco.
    
*   **Automação do processo**: reduz lançamentos manuais, economiza tempo e minimiza erros de digitação ou omissões.
    
*   **Redução de custos operacionais**: diminui o esforço com conciliações manuais e libera a equipe para tarefas estratégicas.
    

**Etapas do processo de conciliação**

**Obtenção do extrato bancário**: coletar o arquivo fornecido pelo banco referente ao período desejado.

**Importação do arquivo no sistema**: importar o arquivo no formato OFX.

**Configuração de regras**: definir regras para classificar automaticamente os lançamentos, como Recebimento de Cartões, Pagamento de Fornecedor ou Outros.

**Comparação com registros internos**: o sistema confronta os lançamentos internos com as transações bancárias.

**Ajustes de discrepâncias**: corrigir diferenças, incluindo transações ausentes ou removendo registros incorretos.

**Conciliação final**: garantir que o saldo do sistema esteja igual ao do banco, refletindo corretamente no Livro Caixa.

* * *

Configurações Iniciais
----------------------

Antes de iniciar a conciliação do **Extrato Bancário**, é fundamental verificar se os cadastros necessários estão corretamente configurados. Isso garante que a importação do arquivo **OFX** seja realizada de forma precisa no sistema.

### Cadastro de Contas Bancárias

Cadastre (ou edite) a conta bancária correspondente ao arquivo OFX que será importado. O passo a passo completo está disponível no módulo Cadastro de Conta Bancária.

### Cadastro de Contas do Caixa

Vincule a conta bancária cadastrada a uma **Conta do Caixa** do tipo _Banco_. O processo detalhado está disponível no módulo Cadastro de Contas do Caixa.

* * *

Obtenção do Arquivo OFX
-----------------------

Com os cadastros prontos, é necessário obter o arquivo **OFX** fornecido pelo banco. Esse arquivo reúne todas as movimentações financeiras da conta e será utilizado na conciliação.

No link a seguir, está disponível o passo a passo para gerar e baixar o arquivo **OFX** nas principais instituições financeiras.

[https://ajuda.fintera.com.br/article/661-como-exportar-o-extrato-ofx-no-meu-banco](https://ajuda.fintera.com.br/article/661-como-exportar-o-extrato-ofx-no-meu-banco)

* * *

Conciliação
-----------

Com os cadastros configurados e o arquivo OFX baixado, acesse o módulo de **Conciliação de Extrato** no sistema para iniciar o processo.

Menu Financeiro > Conciliação de Extrato

* * *

Apresentação da tela e campos
-----------------------------

Ao acessar o módulo de conciliação de extrato, a tela a seguir será exibida:

Tela geral do módulo Conciliação de Extrato

### Botão de ação

No canto superior direito da página, está disponível o botão , utilizado para carregar o arquivo **OFX** no sistema. Ao clicar nesse botão, será exibida uma janela para que o usuário localize e selecione o arquivo salvo em seu computador.

### Filtros

Os filtros exibidos abaixo permitem localizar e consultar os extratos que serão utilizados no processo de conciliação:

Filtros para consulta dos extratos

*   `Data Inicial e Data Final`: Período inicial e final dos extratos bancários a serem consultados e incluídos no processo de conciliação.
    
*   `Conta Bancária`: Este filtro permite selecionar uma ou mais contas bancárias específicas, exibindo apenas os extratos correspondentes às contas escolhidas para o processo de conciliação.
    
*   `Status`:
    
    *   `Não Processado`: Exibe os extratos importados que ainda não tiveram as regras de conciliação configuradas.
        
    *   `Não Conciliado`: Exibe os extratos que foram importados e configurados, mas que ainda não possuem nenhuma movimentação conciliada.
        
    *   `Parcialmente Conciliado`: Exibe os extratos que possuem algumas movimentações conciliadas, mas ainda contêm lançamentos pendentes de conciliação.
        
    *   `Totalmente Conciliado`: Exibe os extratos cujas todas as movimentações foram conciliadas com sucesso.
        

### Listagem de Extratos Bancários

Listagem de extratos

Abaixo dos filtros, são listados os extratos bancários de acordo com os critérios selecionados. Quando nenhum filtro é aplicado, o sistema exibe todos os arquivos importados. Para conciliação, é possível selecionar apenas um extrato por vez. A listagem apresenta informações como:

*   `Código`: Identificador único do extrato na listagem.
    
*   `Conta Bancária`: Indica a conta à qual o extrato pertence.
    
*   `Data Inicial e Final`: Período abrangido pelo extrato, definido pelas datas de início e término das movimentações.
    
*   `Status`: Mostra a situação do extrato no processo de conciliação.
    
*   `Visualizar Lançamentos`: Permite acessar os detalhes das movimentações contidas no extrato. Ao clicar no ícone , uma tela com os lançamentos do extrato será exibida, possibilitando a consulta e a configuração das regras.
    

**Restrição de remoção:**

A exclusão de extratos importados só é permitida quando o status estiver **Não Processado**. Para remover, basta clicar no ícone correspondente ao extrato desejado.

### Visualizar Lançamentos

Clique no ícone para visualizar todos os lançamentos contidos no arquivo OFX importado, permitindo analisar detalhadamente as transações que serão conciliadas no sistema.

Tela de listagem de lançamentos

Nesta tela, é possível filtrar os lançamentos por:

*   `Tipo de Lançamento`: Permite filtrar os lançamentos exibidos de acordo com a natureza da transação.
    
    *   `Todas`: Exibe todos os lançamentos, independentemente de serem créditos ou débitos.
        
    *   `Crédito`: Exibe apenas os lançamentos que representam **entradas** de recursos na conta.
        
    *   `Débito`: Exibe apenas os lançamentos que representam **saídas** de recursos da conta.
        
*   `Histórico`: Permite pesquisar os lançamentos por informações contidas no histórico da transação.
    
*   `Valor Mínimo (R$)`: Mostra apenas os lançamentos com valor igual ou acima do informado.
    
*   `Valor Máximo (R$)`: Mostra apenas os lançamentos com valor igual ou abaixo do informado.
    

Na parte inferior é possível visualizar cada lançamento contido no extrato:

*   `Lançamento`: Identificador único do lançamento dentro do extrato, permitindo sua individualização.
    
*   `Data`: Data em que a movimentação foi registrada no extrato bancário.
    
*   `Transação`: Indica a natureza da movimentação, como crédito ou débito.
    
*   `Valor`: Valor monetário da transação correspondente.
    
*   `Histórico`: Descrição detalhada da movimentação, conforme informado pelo banco no arquivo OFX.
    
*   `Status`: Situação do lançamento no processo de conciliação (`Não Processado`, `Não Conciliado`, `Parcialmente Conciliado`, `Totalmente Conciliado`).
    
*   `Configurar Regra:` Permite categorizar como os lançamentos do extrato serão tratados durante o processo de conciliação.
    

**Importante**

As **regras de conciliação** podem ser configuradas de três formas no sistema:

**Durante a importação do arquivo OFX:** Ao importar o arquivo pela primeira vez e clicar no botão .

**Na tela de Lançamentos:** Ao clicar no ícone para visualizar os lançamentos associados ao extrato. É possível ajustar as regras individualmente de cada lançamento clicando no ícone .

**No módulo** **Regras de Conciliação****:** Acesse: **Menu Financeiro > Regras de Conciliação**. Configure de forma geral pelo botão ou edite individualmente pelo ícone .

* * *

Importação de Extratos Bancários
--------------------------------

Acesse o módulo **Conciliação de Extrato** no sistema.

Na tela exibida, clique no botão e selecione o arquivo **OFX** que será utilizado na conciliação.

Após a importação, selecione o extrato desejado e clique no botão .

Quando uma nova regra é encontrada no extrato importado, o sistema abre automaticamente a tela de **Configurar Regras**, permitindo ajustar as classificações antes da conciliação.

Tela de configuração de regras ao importar arquivo

Cada campo possui uma função específica. A seguir, o detalhamento de cada um deles:

*   `Código`: Identificador incremental que diferencia cada lançamento no extrato.
    
*   `Regra`: Histórico utilizado para identificar automaticamente os lançamentos no extrato bancário.
    
*   `Transação`: Define o tipo de movimentação:
    
    *   `Crédito`: Entrada de valores na conta.
        
    *   `Débito`: Saída de valores da conta.
        
*   `Configurada`: Indica se a regra já foi configurada no sistema.
    
*   `Ativo`: Define se a regra está habilitada para uso. Quando marcado como `Não`, os lançamentos dessa regra não serão considerados na conciliação.
    
*   `Operação`: Define a natureza da conciliação aplicada a cada lançamento do extrato bancário. Existem três tipos disponíveis no sistema:
    
    *   `Outros`: Utilizado para movimentações que não se enquadram como recebimento de cartões ou pagamento de fornecedores, como tarifas bancárias, rendimentos ou transferências entre contas.
        
        *   Nessa operação, **não há conciliação com registros existentes no sistema.**
            
        *   O sistema apenas gera o **lançamento no Livro Caixa**, com base no valor e histórico informados no arquivo OFX, de acordo com a configuração definida.
            
        *   O tipo de `Transação` pode ser `Crédito` ou `Débito`, e a configuração da Conta Bancária seguirá essa lógica:
            
            *   `Débito`: A `Conta Bancária` deverá ser indicada na `Conta Origem`.
                
            *   `Crédito`: A `Conta Bancária` deverá ser indicada na `Conta Aplicação`.
                
    *   `Cartão`: Utilizado para movimentações de recebimento de **cartões de crédito, débito, PIX, PEF e carteiras digitais**.
        
        *   Para que o lançamento seja conciliado, é necessário que exista uma **fatura de cartão** previamente registrada no sistema. O **valor líquido da fatura** deve ser igual (ou próximo, caso haja `Tolerância` configurada) ao valor do lançamento no extrato.
            
        *   O tipo de `Transação` é sempre `Crédito`, ou seja, a `Conta Bancária` será configurada como `Conta Aplicação`.
            
        *   Configurações necessárias:
            
            *   `Conta Origem`: conta de recebimento (ex.: _Cartões de Crédito CIELO_).
                
            *   `Conta Aplicação`: conta bancária vinculada ao arquivo OFX.
                
            *   `Adquirente`: operadora responsável pelo processamento (ex.: _CIELO_).
                
    *   `Pagamento de Fornecedor`: Utilizado para movimentações relacionadas a **contas a pagar**, como compras (combustível ou diversos), serviços gerais (água, energia, sistema) ou impostos.
        
        *   Para que o lançamento seja conciliado, deve existir uma **parcela de conta a pagar** previamente cadastrada no sistema.
            
        *   O valor da parcela, considerando possíveis **juros, multas e descontos**, deve ser igual ao valor do lançamento no extrato.
            
        *   O tipo de `Transação` é sempre `Débito`, ou seja, a `Conta Bancária` será configurada como `Conta Origem`.
            

**Resumindo**

*   `Outros`: Apenas registra no **Livro Caixa**, sem depender de outros módulos. A transação pode ser **Crédito** ou **Débito**.
    
*   `Cartão`: Depende da **Baixa de Cartões**. A transação é sempre **Crédito** (Conta Bancária = Conta Aplicação).
    
*   `Pagamento de Fornecedor`: Depende de **Contas a Pagar**. A transação é sempre **Débito** (Conta Bancária = Conta Origem).
    

*   `Tolerância`: Define a margem máxima de divergência entre o valor do lançamento no sistema e o valor do extrato. Permitido configurar até **R$ 1,00**. Recurso útil principalmente para recebimentos de cartões, onde podem ocorrer pequenas diferenças por taxas administrativas ou arredondamentos.
    
*   `Conta Origem`: Indica de onde os recursos saem ou se originam. Em transações de `Débito`, a `Conta Origem` deve ser a **conta bancária do arquivo OFX**.
    
*   `Conta Aplicação`: Indica o destino dos recursos. Em transações de `Crédito`, a `Conta Aplicação` deve ser a **conta bancária do arquivo OFX**.
    
*   `Adquirente`: Define a operadora de cartão responsável pela transação. Aplicável apenas quando a `Operação` for do tipo `Cartão`.
    

**Atenção**

Por padrão, todos os lançamentos importados do extrato são definidos como `Operação` **=** `Outros`, até que seja configurada a regra específica para cada lançamento.

Enquanto a regra não for ajustada, o sistema aplica automaticamente os seguintes padrões de configuração, de acordo com o tipo de `Transação`:

*   `Transação` **=** `Débito`
    
    *   `Conta Origem`: Conta Bancária
        
    *   `Conta Aplicação`**:** Pagamento de Despesas
        
*   `Transação` **=** `Crédito`
    
    *   `Conta Origem`: Caixa
        
    *   `Conta Aplicação`: Conta Bancária
        

Após configurar as regras dos lançamentos, clique no botão . O sistema abrirá uma nova tela, onde o processo será realizado em etapas:

**REC. CARTÃO** → conciliação das movimentações vinculadas às faturas de cartões.

**PGTO. FORNECEDORES** → conciliação das parcelas de contas a pagar já registradas no sistema.

**OUTROS** → registro direto no **Livro Caixa** dos lançamentos que não dependem de outros módulos.

* * *

Conciliação de Extrato
----------------------

Durante o processo de conciliação, todas as operações compartilham a mesma estrutura de cabeçalho. O que muda é apenas o título exibido no mesmo, de acordo com a operação selecionada:

*   **Conciliação de Extrato (Rec. Cartão)**
    
*   **Conciliação de Extrato (Pgto. Fornecedores)**
    
*   **Conciliação de Extrato (Outros)**
    

**Cabeçalho da Conciliação**

Na parte superior da tela, são exibidas as informações principais do extrato:

*   `Conta Bancária`: Identifica a conta vinculada ao extrato importado.
    
*   `Período`: Mostra a data inicial e final das movimentações contidas no arquivo OFX.
    
*   `Status`: Indica a situação atual do extrato dentro do processo de conciliação.
    

**Bloco de Seleção de Operações**

Logo abaixo do cabeçalho, encontra-se a área que permite alternar entre os três tipos de conciliação disponíveis: **REC. CARTÃO**, **PGTO. FORNECEDORES** e **OUTROS**.

**Botões de Seleção**

Na listagem do sistema, apresentada no lado esquerdo, é possível utilizar botões para facilitar a marcação ou desmarcação dos itens:

*   : Remove a seleção de todos os lançamentos selecionados.
    
*   : Seleciona todos os lançamentos não conciliados da listagem.
    
*   : Realiza a vinculação entre os lançamentos selecionado do extrato e do sistema, estabelecendo a conciliação entre eles.
    
*   : Remove a vinculação dos lançamentos previamente conciliados, retornando-os ao estado de não conciliado.
    
*   : Limpa os campos de filtragem.
    
*   : Aplica os filtros informados nos campos.
    

### Conciliação de Extrato (Rec. Cartão)

Por padrão, o processo de conciliação inicia pela tela de **Recebimentos de Cartões**, que corresponde à etapa inicial de análise e validação das movimentações.

Onde, no lado esquerdo, são apresentados os **lançamentos internos do sistema**, enquanto no lado direito são exibidos os **lançamentos importados do extrato bancário**.

Listagem de recebimento de cartões

É possível aplicar filtros nos lançamentos do sistema e do extrato bancário por período, valor inicial, valor final e status de conciliação.

**Funcionamento da Conciliação**

Para lançamentos do extrato configurados com a operação `Cartão`, o sistema realiza uma verificação automática para identificar faturas com o **mesmo valor líquido**. O resultado dessa verificação pode ser:

Lançamentos com os 3 retornos de verificação possíveis

*   **Nenhuma fatura compatível (primeiro e segundo lançamento da imagem acima)**
    
    *   O lançamento não será destacado e não poderá ser conciliado até que seja gerada uma fatura de cartão com o mesmo valor.
        
*   **Uma fatura já conciliada (terceiro lançamento da imagem acima)**
    
    *   O lançamento é exibido em **fundo azul**, indicando que que o lançamento foi conciliado e baixado.
        
*   **Uma fatura compatível (quarto lançamento da imagem acima)**
    
    *   O lançamento é exibido em **fundo verde**, indicando que a conciliação foi encontrada.
        

**Detalhamento de Fatura Conciliada**

Ao clicar no ícone , será exibida a informação do lançamento do sistema que foi vinculado durante a conciliação.

Mudar a imagem abaixo e colocar de novo pegando a imagem que foi modificado com a data 06/10/2025

Box Conciliados

Os campos apresentados são:

*   `Descrição`: Instituição responsável pelo pagamento da fatura. (Ex.: Cielo, Rede, Getnet)
    
*   `Data`: Informa a data de referência do extrato bancário utilizado na conciliação.
    
*   `Valor`: Apresenta o valor da fatura. Quando houver parcelamento, a divisão do valor pode gerar variações (Ex.: 0,01), sendo essas diferenças tratadas conforme tolerância configurada.
    
*   `Empresa`: Indica a empresa vinculada aos lançamentos conciliados.
    
*   `Fatura`: Número da fatura vinculada.
    
*   `Emissão`: Data em que a fatura foi emitida.
    
*   `Vencimento`: Data prevista para pagamento da fatura.
    
*   `Quitação`: Situação da fatura, podendo estar **pendente** (campo em branco) ou **quitada** (campo preenchido com a data de quitação).
    
*   `Valor Bruto`: Valor total da fatura antes da aplicação de taxas e despesas.
    
*   `Valor Taxa`: Soma das taxas cobradas pela adquirente.
    
*   `Despesas`: Total de despesas adicionais vinculadas à fatura, como taxas de antecipação ou aluguel de maquinetas.
    
*   `A Receber`: Valor líquido a ser recebido após a dedução de taxas e despesas.
    

**Finalizando a Conciliação**

Para concluir a conciliação dos lançamentos do extrato com as faturas de cartões:

Clique no botão .

O sistema aplicará as seguintes regras:

*   **Fatura Pendente**: a fatura será automaticamente quitada, e o `Tipo de Baixa` da mesma será registrado como `Extrato Bancário`.
    

**Antes da quitação**

Fatura Pendente

**Depois da quitação**

Fatura Quitada pelo OFX

*   **Fatura Quitada**: o lançamento será apenas removido da listagem, sem alterar nada na fatura já quitada **manualmente**.
    

* * *

### Conciliação de Extrato (Pgto. Fornecedores)

Nesta etapa, o sistema cruza os lançamentos do **Contas a Pagar** com as movimentações do **extrato bancário**, identificando automaticamente as parcelas que correspondem aos pagamentos registrados.

Listagem de pagamentos de fornecedores

**Funcionamento da Conciliação**

Para lançamentos do extrato configurados com a operação `Pagamento de Fornecedor`, o sistema realiza uma busca por parcelas cadastradas no módulo de **Contas a Pagar**, utilizando como referência a **data do lançamento no extrato**. Cada registro encontrado é verificado em até **3 etapas**, levando em conta as possíveis variações de valor:

*   **Valor original da parcela**, dentro da tolerância configurada.
    
*   **Valor com desconto** aplicado para pagamento até a data de vencimento, dentro da tolerância.
    
*   **Valor com acréscimo de juros e multa**, calculados entre a data de vencimento e a data do lançamento do extrato, dentro da tolerância.
    

O resultado dessa verificação pode retornar:

*   **Nenhuma parcela compatível**
    
    *   O lançamento não será destacado e não poderá ser conciliado até que seja gerada uma parcela no contas a pagar com o mesmo valor.
        
*   **Uma parcela compatível**
    
    *   O lançamento é exibido em **fundo verde**, indicando que a conciliação foi encontrada.
        
*   **Mais de uma parcela compatível**
    
    *   O sistema exibirá um alerta, indicado pelo ícone no final da linha do lançamento.
        
    *   Nesse caso, o usuário deve revisar a sugestão e selecionar manualmente a parcela correta. Para isso:
        

*   Clique no ícone .
    
*   A janela **Modificar Conciliação** será apresentada:
    

Modificar Conciliação

*   Associe o lançamento à parcela adequada e finalize clicando em .
    

**Detalhamento do Pagamento Conciliado**

Na guia **Pagamento Conciliado**, são exibidos os dados da conta a pagar vinculada ao lançamento do extrato durante a conciliação.

Guia Pagamento Conciliado

Os campos apresentados são:

*   `Conta a Pagar:` Código da conta a pagar cadastrada no sistema.
    
*   `Parcela`: Número da parcela vinculada. Em caso de parcela única, será exibido 1.
    
*   `Fornecedor`: Nome do fornecedor associado.
    
*   `Documento`: Identificador único do lançamento da conta a pagar.
    
*   `Emissão`: Data de emissão do documento.
    
*   `Vencimento`: Data de vencimento da conta.
    
*   `Quitação`: Situação da conta a pagar — em branco (**pendente**) ou preenchido (**quitada**), como em casos de pagamento antecipado.
    

**Finalizando a Conciliação**

Para concluir a conciliação dos lançamentos do extrato com as contas a pagar:

Clique no botão .

O sistema aplicará as seguintes regras:

*   **Conta a Pagar Pendente**: a conta será automaticamente quitada, e `Baixa` da mesma será registrado como `Automática`.
    

**Antes da quitação**

**Depois da quitação**

*   **Conta a Pagar Quitada**: o lançamento será apenas removido da listagem, sem alterar nada na parcela já quitada **manualmente**.
    

* * *

### Conciliação de Extrato (Outros)

A operação **Outros** trata das movimentações que não se enquadram em **Recebimentos de Cartões** ou **Pagamentos de Fornecedores**.

Listagem de outros lançamentos

**Funcionamento da Conciliação**

Para lançamentos do extrato configurados com a operação `Outros`, o sistema gera lançamentos **avulsos** no **Livro Caixa**, utilizando as regras configuradas no momento da importação do arquivo OFX. Se alguma movimentação não estiver configurada corretamente, o usuário poderá ajustar diretamente na tela de conciliação, garantindo que o lançamento seja registrado nas contas corretas. Para isso:

*   Clique no ícone .
    
*   A janela **Modificar Conciliação** será apresentada:
    

*   Configure o `Centro de Resultado` e as `Contas de Origem` e `Aplicação` do lançamento, de forma adequada para que o lançamento no Livro Caixa esteja de acordo com o recebimento na conta.
    
*   Finalize clicando em .
    

**Finalizando a Conciliação**

Para concluir a conciliação dos lançamentos do tipo Outros e registrá-los no **Livro Caixa**:

Clique no botão .

O sistema realizará automaticamente o lançamento no Livro Caixa, utilizando:

*   `Conta Origem` e `Conta Aplicação` configuradas.
    
*   `Valor` e `histórico` conforme registrado no extrato.
    

Após o lançamento, o registro será removido da listagem de conciliação.