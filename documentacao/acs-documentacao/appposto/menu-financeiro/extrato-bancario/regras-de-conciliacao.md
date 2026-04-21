---
title: Regras de Conciliação
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/489619471
---

# Regras de Conciliação

16truenonelisttrue

Regras de Conciliação
=====================

As **Regras de Conciliação** são instruções configuradas no sistema para que, durante o processo de conciliação, cada movimentação do extrato bancário seja **identificada automaticamente**, com a associação correta da **conta de origem** e da **conta de aplicação**.

Esse recurso **agiliza o processo** e **reduz a necessidade de ajustes manuais**, garantindo maior consistência nas informações.

As regras são especialmente úteis para **transações recorrentes**, como:

*   Recebimentos de cartões de crédito ou débito das operadoras.
    
*   Tarifas bancárias.
    
*   Pagamentos periódicos a fornecedores.
    

**Exemplo prático**

Se o sistema identificar no extrato um lançamento com a descrição **“CIELO VENDAS CRÉDITO”**, previamente configurada em uma regra, ele automaticamente classificará o lançamento como **Recebimento de Cartão** e aplicará as contas de origem e aplicação definidas na configuração. Assim, o processo é concluído de forma rápida, padronizada e sem necessidade de reconfiguração manual.

Para acessar as regras, acesse o seguinte módulo:

Acesse o seguinte módulo:

Menu Financeiro > Regras de Conciliação

* * *

Apresentação da tela e campos
-----------------------------

Ao acessar o módulo **Regras de Conciliação**, será exibida a tela de gerenciamento das regras importadas.

Tela geral do módulo Regras de Conciliação

**Atenção**

*   As **regras de conciliação** só são exibidas **após a importação do arquivo OFX** no módulo de **Conciliação de Extrato**.
    
*   Não é possível cadastrar regras manualmente — elas são criadas automaticamente a partir dos históricos encontrados no extrato.
    
*   Cada novo histórico identificado no arquivo OFX gera uma nova regra a ser configurada.
    

**Particularidade dos recebimentos via PIX**

*   A forma como os lançamentos de **PIX** aparecem no OFX pode variar conforme o banco:
    
    *   Alguns consolidam todos os recebimentos do dia em um único lançamento.
        
    *   Outros detalham transação por transação.
        
*   Para padronizar, sempre que a descrição do lançamento contiver a palavra **PIX**, o sistema consolida automaticamente todos os recebimentos do mesmo dia em **um único lançamento**.
    

### Botão de ação

No canto superior direito da página, está disponível o botão , que permite **visualizar e configurar todas as regras importadas** de forma centralizada. Ao clicar nesse botão, será aberta uma janela com a listagem das regras, possibilitando ajustes rápidos e práticos. Essa tela é a mesma apresentada automaticamente após a importação do arquivo OFX no módulo de **Conciliação de Extrato**.

### Filtros

Na parte superior da tela, estão disponíveis filtros que facilitam a localização e a consulta das regras de conciliação.

Filtro para consulta das regras

*   `Histórico`: Filtra regras conforme a descrição dos lançamentos do extrato bancário.
    
*   `Contas Bancárias`: Exibe regras vinculadas a uma conta bancária específica.
    
*   `Tipo`: Define o tipo de transação exibida:
    
    *   `Todas`: Mostra todas as regras.
        
    *   `Débito`: Exibe apenas lançamentos de débito.
        
    *   `Crédito`: Exibe apenas lançamentos de crédito.
        
*   `Operação`: Filtra regras conforme o tipo de operação:
    
    *   `Todas`: Mostra todas as operações.
        
    *   `Outros`: Lançamentos avulsos que não se enquadram em cartões ou fornecedores.
        
    *   `Cartão`: Recebimentos de cartões de crédito, débito, PEF, PIX e carteiras digitais.
        
    *   `Pagamento de Fornecedor`: Pagamentos vinculados a fornecedores.
        
*   `Ativo`: Permite visualizar regras de acordo com o status de ativação:
    
    *   `Todos`: Exibe todas as regras, ativas e inativas.
        
    *   `Sim`: Exibe apenas regras ativas.
        
    *   `Não`: Exibe apenas regras inativas.
        
*   `Configurada`: Filtra regras conforme o status de configuração:
    
    *   `Todas`: Exibe todas as regras, configuradas ou não.
        
    *   `Configuradas`: Exibe apenas regras já definidas.
        
    *   `Não Configuradas`: Exibe apenas regras ainda não configuradas.
        

### Listagem de Regras de Conciliação

Listagem das regras para conciliação

Abaixo dos filtros, o sistema exibe a listagem das regras conforme os critérios aplicados. Caso nenhum filtro seja utilizado, serão apresentadas todas as regras de todos os arquivos OFX já importados.

Cada regra é apresentada com as seguintes informações:

*   `Conta Banco`: Conta bancária vinculada ao lançamento.
    
*   `Histórico`: Descrição do lançamento importado do extrato.
    
*   `Ativo`: Indica se a regra está ativa (`Sim`) ou inativa (`Não`).
    
*   `Tipo`: Classificação da movimentação como `Débito` ou `Crédito`.
    
*   `Operação`: Categoria do lançamento, podendo ser:
    
    *   `Outros`: Lançamentos avulsos não relacionados a cartões ou fornecedores.
        
    *   `Pagamento de Fornecedor`: Movimentações vinculadas a contas a pagar.
        
    *   `Cartão`: Recebimentos de operadoras de cartões.
        
*   `Configurada`: Mostra se a regra já foi configurada (`Sim`) ou não (`Não`).
    
*   `Ações`:
    
    *   `Editar`: Representado pelo ícone , permite ajustar a regra.
        
    *   `Excluir`: Representado pelo ícone , remove a regra do sistema.
        

* * *

Configuração de Regras de Conciliação
-------------------------------------

As regras de conciliação podem ser configuradas de duas formas no sistema:

**Forma Consolidada**: Exibe todas as regras em uma única tela, permitindo configurar várias de uma só vez de maneira rápida e prática.

Tela para configurar regras de forma geral

**Forma Individual**: Permite editar cada regra separadamente, oferecendo maior controle e precisão nos ajustes.

Tela para configurar regra de forma individual

### Forma consolidada

Para configurar as regras de forma consolidada:

Acesse o módulo **Regras de Conciliação**.

Clique no botão , localizado no canto superior direito da tela.

Será exibida a tela com a listagem de todas as regras. Nela, alguns campos estão disponíveis apenas para **visualização** (pois refletem informações originais do extrato) e não podem ser alterados, enquanto outros podem ser **configurados ou ajustados** pelo usuário para definir como o sistema aplicará a conciliação.

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
        

**Importante**

*   Uma vez configuradas, as regras serão reaplicadas automaticamente em futuras importações do mesmo banco.
    
*   Caso surjam lançamentos com descrições diferentes no histórico, o sistema entenderá como **novas regras**, exigindo configuração específica.
    

Por fim, clique em para salvar as alterações. As regras serão aplicadas automaticamente sempre que o histórico do extrato corresponder ao configurado.

* * *

### Forma individual

Para configurar uma regra de forma individual:

Acesse o módulo **Regras de Conciliação**.

Clique no ícone ao final da linha para acessar a tela de edição.

Configure os campos:

*   `Ativo`: Define se a regra estará habilitada para uso na conciliação. Regras inativas não são consideradas pelo sistema.
    
*   `Operação`: Selecione o tipo de operação associada à regra: `Cartão`, `Pagamento de Fornecedor` ou `Outros`.
    
*   `Tolerância para Conciliar`: (Opcional) Define a margem máxima de divergência entre o valor do sistema e o valor do extrato, limitada a **R$1,00**. Este recurso é útil em recebimentos de cartões, onde podem ocorrer pequenas diferenças devido a taxas ou arredondamentos.
    
*   `Agrupar por Dia`: Quando configurado como `Sim`, consolida em um único registro todos os lançamentos com a mesma descrição ocorridos no mesmo dia. Esse recurso foi criado especialmente para transações `PIX`, que podem ser apresentadas no arquivo OFX de duas formas, dependendo do banco:
    
    *   **Consolidada**: todos os recebimentos PIX do dia são somados em um único lançamento.
        
    *   **Individual**: cada transação PIX recebida é listada separadamente.
        
    
    No segundo caso, a conciliação direta com a fatura de PIX gerada pelo sistema se torna inviável. Para corrigir isso, é necessário ativar a consolidação por dia, permitindo que os lançamentos sejam agrupados e conciliados corretamente.
    

**Observação:** a opção `Agrupar por Dia` está disponível apenas na tela de edição individual de regras.

*   `Conta Bancária`: Conta vinculada ao extrato em que a regra será aplicada.
    
*   `Conta Origem`: Conta de onde os valores serão debitados no sistema. Nas transações de **saída**, será sempre a conta bancária vinculada ao arquivo OFX importado.
    
*   `Conta Aplicação`: Conta de destino para onde os valores serão creditados no sistema. Nas transações de **entrada**, será sempre a conta bancária vinculada ao arquivo OFX importado.
    
*   `Adquirente`: Identifique a operadora de cartão responsável pela transação (campo aplicável apenas para a operação `Cartão`).
    

Após ajustar os campos, clique em para concluir. A partir disso, a regra será aplicada automaticamente em futuras conciliações que atendam aos critérios configurados.