---
title: Autorização de Aferições no Aplicativo Mobile
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/529203201
---

# Autorização de Aferições no Aplicativo Mobile

1\. Introdução
--------------

A aferição é um procedimento utilizado para verificar o funcionamento das bombas de combustível. Como ela não gera cobrança ao cliente, pode representar risco de desvio de valores caso seja utilizada de forma inadequada.

Para aumentar a segurança, foi implementado no sistema um processo de **autorização de aferições**, que permite ao proprietário, diretamente pelo aplicativo mobile, aprovar ou negar solicitações feitas pelos frentistas antes que sejam registradas no PDV.

* * *

2\. Configuração Necessária
---------------------------

Antes de utilizar a funcionalidade, é necessário ativar o parâmetro no retaguarda:

**Passo a passo:**

1.  Acesse o menu **Opções** > **Parâmetros do Sistema**.
    
2.  Clique na aba **PDV**.
    
3.  Localize o parâmetro **“Ativar verificação de 2 fatores para aferição”**.
    
4.  Defina o valor como **Sim**.
    

:mag:1f50d🔍#DEEBFF

**Observações:**

*   Quando definido como **Não**, o processo segue como anteriormente: basta a permissão **503 – Realizar Aferição** para o frentista transformar o abastecimento em aferição e lançá-la no PDV.
    
*   Quando definido como **Sim**, toda transformação de abastecimento em aferição no PDV exigirá autorização, que pode ocorrer:
    
    *   No aplicativo **Mobile**, por meio do novo menu **Aferição**, disponível para usuários com permissão de autorização.
        
    *   No próprio **PDV**, desde que o usuário tenha a permissão **494 – Autorizar Aferição** adicionada em seu perfil. Esse modo é utilizado principalmente quando o PDV estiver offline, sem comunicação com o servidor.
        

* * *

3\. Fluxo com Autorização via Mobile
------------------------------------

### 3.1 Aferição Autorizada

**Transformação no PDV**

No PDV, o frentista transforma o abastecimento em aferição.

Necessária a permissão (**503 – REALIZAR AFERIÇÃO**).

O registro passa a ser exibido com a observação **“AF. PENDENTE”**.

**Notificação no Mobile**

O usuário autorizado a utilizar o aplicativo mobile recebe em seu celular a notificação: **“Nova aferição aguardando análise”**.

**Acesso ao menu no aplicativo**

Ao abrir o aplicativo, estará disponível o menu **Aferição**. acsacsacs

Nesta tela, é possível filtrar os registros por: **Pendentes**, **Autorizadas** ou **Rejeitadas**.

**Visualização dos registros pendentes**

Em **Pendentes**, o(s) abastecimento(s) são listados com as seguintes informações:

*   Bico, Combustível, Data, Tanque, Frentista, Quantidade de litros.
    

Também são exibidos os botões e .

**Autorização da aferição**

Ao clicar em , o sistema apresenta uma mensagem de confirmação.

Após a confirmação:

*   No **PDV**, a observação muda para **“AF. AUTORIZ”**, liberando o lançamento da aferição.
    

**Comportamento no aplicativo**

*   No **Mobile**, o registro migra de **Pendentes** para **Autorizadas**, com os seguintes comportamentos:
    

**LIBERADO** → até que o lançamento seja realizado no PDV. acsacs

**BAIXADO** → após o lançamento da aferição no PDV, indicando que a aferição foi concluída.

* * *

### 3.2 Aferição Negada

**Transformação no PDV**

No PDV, o frentista transforma o abastecimento em aferição.

Necessária a permissão (**503 – REALIZAR AFERIÇÃO**).

O registro passa a ser exibido com a observação **“AF. PENDENTE”**.

**Notificação no Mobile**

O usuário autorizado a utilizar o aplicativo mobile recebe em seu celular a notificação: **“Nova aferição aguardando análise”**.

**Acesso ao menu no aplicativo**

Ao abrir o aplicativo, estará disponível o menu **Aferição**.

Nesta tela, é possível filtrar os registros por: **Pendentes**, **Autorizadas** ou **Rejeitadas**.

**Visualização dos registros pendentes**

Em **Pendentes**, o(s) abastecimento(s) são listados com as seguintes informações:

*   Bico, Combustível, Data, Tanque, Frentista, Quantidade de litros.
    

Também são exibidos os botões e .

**Negação da aferição**

Ao clicar em , o sistema apresenta uma mensagem de confirmação.

Após a confirmação:

*   No **PDV**, a observação muda para **“AF. NEGADA”**, sendo necessário que o frentista reverta o registro para **abastecimento normal**.
    

**ATENÇÃO**

Caso o frentista tente lançar a aferição mesmo com o status **negada**, o sistema exibirá uma mensagem impedindo o procedimento e orientando a transformação de volta para abastecimento.

**Comportamento no aplicativo**

*   No **Mobile**, o registro migra automaticamente de **Pendentes** para **Rejeitadas**.
    

**ATENÇÃO**

O abastecimento permanecerá listado em **Rejeitadas** até que o frentista o transforme novamente em **abastecimento normal**. Após essa reversão, o registro deixa de aparecer no menu de aferição do aplicativo.

* * *

Assista ao vídeo abaixo para acompanhar o fluxo completo do processo em funcionamento:

[Autorização de Aferição no Mobile](https://acssoftware-my.sharepoint.com/:f:/g/personal/brunonovais_acsapps_com_br/EsS1_YMs61RPs4sbnodCujgB_OZ43XYkCijDBKcI__Pjxg?e=UBhceW)