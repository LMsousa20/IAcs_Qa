---
title: Controle de Faturas do Cartão
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/8945686
---

# Controle de Faturas do Cartão

16truenonelisttrue

* * *

Controle de Faturas do Cartão
=============================

O sistema de controle de faturas do cartão permite gerenciar eficientemente todas as faturas geradas a partir do processo de baixa de cartões, baixa de carteira digital e baixa de PIX. Após a geração das faturas, as mesmas podem estar em duas situações:

*   Quitada: Indica que a fatura foi paga integralmente e não há mais nenhum valor pendente para aquela fatura.
    
*   Pendente: Indica que a fatura ainda não foi paga, e há valores devidos que precisam ser quitados.
    

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Controle de Faturas do Cartão

* * *

Será apresentada a seguinte tela:

Tela geral do módulo faturas de cartão

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento das faturas já cadastradas.

As principais funcionalidades são:

**Gerenciar Faturas de Cartão**

Permite acompanhar as faturas geradas, possibilitando a verificação da situação da fatura (Pendente ou Quitada) e a conferência dos valores registrados.

**Filtro de Pesquisa**

Facilita a visualização das faturas por Empresa, Período de emissão e previsão, Operadora, Contas Bancárias, Situação, Valores mínimo e máximo e Código da fatura, facilitando a localização das informações.

**Visualização**

Permite consultar as informações consolidadas da fatura, possibilitando a conferência dos valores, a quitação da fatura ou, caso seja identificada alguma divergência, a exclusão da fatura para correção das informações.

* * *

Consulta e edição de faturas
----------------------------

Além de acessar a listagem de todas as faturas geradas, nesse módulo é possível consultar detalhadamente cada uma, independente da situação da mesma. Para isso, clique no ícone localizado no final da linha da fatura a ser consultada. Será apresentada a seguinte tela:

Tela de consulta da fatura

O box **Editar fatura cartão** permite aos usuários visualizar dados específicos relacionados à fatura, incluindo o código da fatura, operadora e os valores vinculados, possibilitando a conferência das informações. Ele é essencial para a gestão e ajuste de informações financeiras, caso necessárias. Abaixo serão detalhados cada campo apresentado:

Guia VALORES1800

Nesta guia, constam todos os valores que compõem a fatura, como:

*   `Valor Bruto (R$)`: Valor total das transações que **compõem a fatura**, antes da aplicação das taxas administrativas.
    
*   `Valor Taxa (R$)`: Valor total do somatório das taxas administrativas de cada transação que compõe a fatura.
    
*   `Despesas (R$)`: Valor total das despesas associadas à fatura.
    
*   `Valor Recebido (R$)`: Valor recebido após quitação. Indica que a fatura está quitada caso seja diferente de R$0.
    
*   `Tipo de Baixa`:
    
    *   `Nenhum`: Indica que a fatura ainda não foi baixada, permanecendo pendente, sem registro de quitação.
        
    *   `Manual`: Indica que a baixa da fatura foi feita manualmente pelo usuário.
        
    *   `Extrato Bancário`: Indica que a baixa da fatura foi realizada por meio de conciliação bancária, utilizando o módulo Extrato Bancário, onde os valores da fatura foram conciliados com os lançamentos do extrato bancário.
        

Na guia **DATAS** constam as informações referentes as datas de faturamento, vencimento e recebimento.

Na guia **CONTA BANCÁRIA** consta a conta onde o valor foi creditado, indicada no momento do faturamento.

O box **Despesas** apresenta a listagem das despesas lançadas na fatura, que podem ter sido lançadas tanto no momento do faturamento como por essa tela de consulta após a fatura já gerada.

* * *

Caso a fatura esteja com situação **pendente** de baixa, podem ser realizados 3 processos com a mesma:

1.  Baixa da fatura
    
2.  Alteração de Conta Bancária
    
3.  Inclusão, modificação ou exclusão de despesas.
    
4.  Visualizar o Relatório.
    

Para realizar os pontos 1 e 2, clique no botão localizado no canto superior direito do box **Editar fatura cartão**. As seguintes opções serão apresentadas:

Botão de opções da fatura

*   `Baixa`: Apresenta uma tela para preenchimento das informações de quitação da fatura. Após preenchimento e verificação, clique no botão para concluir o processo.
    

Tela para preenchimento e baixa da fatura

*   `Conta banco`: Libera o campo **Conta** **Bancária** da guia **CONTA** **BANCÁRIA** para modificação.
    

Tela para edição da conta bancária

Para o ponto 3, acesse o box **Despesas**, nele será possível realizar:

*   `Inclusão de despesa`: Clique no botão . Será apresentada a seguinte tela para preenchimento das informações da despesa. Após preenchimento e verificação, clique no botão .
    

Tela para lançamento da despesa

*   Edição de despesa: Clique no ícone localizado no final da linha da despesa a ser modificada. Será apresentada a tela com as informações da despesa. Modifique o que for necessário e clique no botão para finalizar o processo.
    
*   Exclusão de despesa: Clique no ícone localizado no final da linha da despesa a ser excluída. Será apresentada uma tela para confirmação. Clique no botão para finalizar o processo.
    

No ponto 4, ao clicar em **Visualizar Relatório**, será aberta uma nova guia no navegador com o **Relatório de Faturas de Cartões**. Este relatório também pode ser acessado pelo caminho: `Menu Relatórios > Financeiro > Faturas de Cartões`. Será apresentada a seguinte tela:

Relatório de Faturas de Cartões

* * *

Estorno de faturas estorno-fatura
---------------------------------

Caso a fatura esteja com situação **quitada**, a única operação que pode ser realizada além de consulta é o **estorno** da mesma.

O **estorno** da fatura refere-se ao processo de reverter a quitação que já foi paga, devolvendo o status da fatura para "pendente". Esse procedimento é utilizado em situações onde foi detectado um erro ou inconsistência na quitação, como, por exemplo, valores incorretos, pagamento indevido, ou quando a fatura foi quitada em uma conta bancária errada.

Para isso, acesse a fatura específica clicando no ícone na listagem de faturas. No box **Editar fatura cartão**, clique no botão localizado no canto superior direito. Será apresentada a seguinte opção:

Botão de opções da fatura

Clique na opção **Estornar baixa**, será apresentada uma tela de confirmação, clique no botão para finalizar o processo.

* * *

Exclusão de faturas
-------------------

O processo de exclusão da fatura refere-se à ação de remover permanentemente uma fatura específica do sistema. Esta operação é utilizada quando uma fatura foi gerada incorretamente, ou quando a fatura não deveria ter sido registrada, seja por erro de processamento ou outras razões administrativas. Quando a fatura é excluída, todas as transações vinculadas são automaticamente desvinculadas e retornam às telas correspondentes de **Baixa de Cartões**, **Baixa de Carteira Digital** e **Baixa de PIX**, ficando novamente disponíveis para novo faturamento.

Para realizar a exclusão, na tela de listagem das faturas, clique no ícone localizado no final da linha da fatura a ser excluída. Será apresentada uma tela para confirmação. Clique no botão para finalizar o processo.

:note:atlassian-note#B3D4FF

**Observação:** Somente é possível excluir faturas com situação **pendente**, caso a fatura já esteja **quitada**, efetue o estorno da mesma antes de realizar a exclusão.