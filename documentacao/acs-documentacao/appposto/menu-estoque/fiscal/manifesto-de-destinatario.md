---
title: Manifesto de Destinatário
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/3014657
---

# Manifesto de Destinatário

16truenonelisttrue

* * *

Manifesto de Destinatário
=========================

O **Manifesto de Destinatário** é um processo no qual o destinatário de uma Nota Fiscal Eletrônica (NF-e) comunica à Secretaria da Fazenda (SEFAZ) que tomou conhecimento da emissão de uma nota fiscal em que seu CNPJ está envolvido. A manifestação permite ao destinatário validar, recusar ou declarar desconhecimento da transação comercial registrada na nota fiscal.

Esse mecanismo garante maior controle e segurança, protegendo empresas contra fraudes e uso indevido de seu CNPJ em operações fraudulentas, além de permitir o acompanhamento mais preciso das operações fiscais.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Estoque > Manifesto de Destinatário

* * *

Será apresentada a seguinte tela:

Tela geral de manifesto do destinatário

Box 1 - Consulta das Notas na Sefaz
-----------------------------------

O box **Consulta das Notas na Sefaz** possui os seguintes campos:

*   `NSU final`: Representa o último Número Sequencial Único gerado para o rastreamento de documentos fiscais eletrônicos, sendo utilizado para a consulta ou sincronização de informações fiscais. É como um “rastro” que o sistema usa para saber onde parou da última vez que consultou suas notas.
    
*   `Último NSU disponível`: Refere-se ao número sequencial mais recente dos documentos fiscais eletrônicos, utilizado para a consulta de atualizações e para garantir a sincronização precisa dos dados fiscais. Ajuda o sistema a verificar se há novas notas fiscais que ainda não foram consultadas ou sincronizadas.
    
*   Botão : Realiza a consulta e sincronização das notas fiscais diretamente do portal da SEFAZ para o sistema. Essa funcionalidade permite que os usuários acessem e recuperem informações fiscais de forma eficiente e segura, garantindo que todas as notas fiscais sejam gerenciadas e monitoradas diretamente no **AppPosto**, sem a necessidade de acessar o site externo da SEFAZ.
    

Box 2 - Manifesto do Destinatário
---------------------------------

Na parte superior do box **Manifesto do Destinatário**, é possível aplicar filtros para a listagem das notas consultadas, como:

*   `Emissão Inicial` e `Emissão Final`: Intervalo de data da emissão das notas fiscais.
    
*   `Compra`: Situação da compra referente à nota fiscal.
    
    *   `Todas`: Filtra todas as situações.
        
    *   `Cadastradas`: Notas fiscais lançadas no sistema.
        
    *   `Não Cadastradas`: Notas fiscais não cadastradas no sistema.
        
    *   `Canceladas`: Notas fiscais canceladas na SEFAZ, podendo ou não estar cadastrada no sistema.
        
*   `CNPJ`: Filtra as notas consultadas pelo CNPJ do emitente.
    
*   `Emitente`: Filtra as notas consultadas pelo nome do emitente.
    

Guia Manifesto1800

*   `Sem manifestação`: A nota fiscal foi emitida, mas o destinatário ainda não se manifestou. Não há registro de reconhecimento ou rejeição da transação.
    
*   `Ciência da Operação`: O destinatário reconhece que a nota fiscal foi emitida, mas ainda não confirma a operação. Isso significa que a empresa está ciente da emissão, mas o translado dos produtos ainda não foi concluído. O destinatário tem um prazo de **10 dias** para se manifestar de forma definitiva.
    
*   `Operação Confirmada`: O destinatário confirma que está ciente, concorda com a operação registrada na NF-e e que a mercadoria (quando há circulação) foi recebida. O prazo para confirmar a operação é de até **180 dias** a partir da disponibilização da NF-e.
    
*   `Operação Não Realizada`: O destinatário confirma que a NF-e foi emitida para o seu CNPJ, mas a operação comercial não foi realizada. Isso significa que o translado dos produtos não foi realizado conforme esperado, houve algum problema na entrega ou há alguma divergência na documentação, como CFOP incorreto, ou até mesmo uma tributação indevida, por exemplo. Assim como o status de confirmação e desconhecimento, o prazo para manifestar a Operação Não Realizada é de **180 dias** após a data de disponibilização da NF-e.
    
*   `Operação Desconhecida`: O destinatário informa que não reconhece a transação registrada na NF-e. Esse status é usado quando a nota fiscal foi emitida de forma indevida. O prazo para informar o Desconhecimento da Operação é também de **180 dias** a partir da disponibilização da NF-e.
    

**Atenção**: No módulo de Manifesto do Destinatário, é obrigatório que o usuário registre a manifestação sobre as NF-e recebidas dentro do prazo legal. Caso o prazo expire sem a manifestação, a SEFAZ não permitirá o envio do status do manifesto, e o sistema exibirá uma mensagem de **rejeição**, indicando a impossibilidade de concluir o envio.

Após aplicar os filtros desejados, clique no botão . Serão exibidas todas as notas fiscais que atendem aos critérios selecionados. Cada nota fiscal listada apresentará as seguintes informações:

*   Status de cadastro no sistema
    
*   Nome e CNPJ do emitente
    
*   Número do documento
    
*   Data de emissão
    
*   Valor da nota
    
*   Status da manifestação
    
*   Chave da nota fiscal
    

Além disso, haverá ícones de ação disponíveis para cada nota, permitindo realizar operações específicas de acordo com a necessidade:

**Detalhes da Nota**

Exibe um resumo das informações da nota fiscal, incluindo:

*   Dados do emitente
    
*   Valor da nota
    
*   Número da chave da NF-e
    

Além disso, é possível visualizar um guia com o histórico de manifestações, que registra todas as interações relacionadas àquela nota fiscal.

Tela de detalhes da nota

**Download PDF**

Permite ao usuário baixar uma cópia da nota fiscal em formato PDF.

**Lançar Nota**

Exibe um resumo das informações da nota fiscal, permitindo ao usuário escolher a associação correta, seja com o **estoque** ou com o **tanque**, dependendo do tipo de produto listado na nota.

Clique no botão de lançamento para ser redirecionado para o módulo adequado e registrar a nota fiscal no sistema:

*   **Compra de Diversos**: Para lançar notas com produtos diversos.
    
*   **Compra de Combustíveis**: Para lançar notas relacionadas a combustíveis.
    

Tela para lançamento da nota de diversos

:note:atlassian-note#B3D4FF

**Observação**: Os ícones de ação só estarão habilitados para uso em notas fiscais que possuam uma situação de manifesto diferente de **Sem Manifestação**..

Tela de listagem das notas fiscais

Na parte inferior do box, há dois resumos que facilitam a visualização rápida dos valores e quantidades das notas listadas e selecionadas:

Guia TOTAL1800

`QTD`: Quantidade total de notas fiscais listadas no período selecionado. 

`Valor (R$)`: Total de todas as notas fiscais listadas.

Guia SELECIONADAS1800

QTD: Quantidade total de notas fiscais selecionadas para serem manifestadas. 

Valor (R$): Total de todas as notas fiscais selecionadas.

Ao lado de cada nota listada, há uma caixa de seleção que pode ser marcada para incluir a mesma no processo de manifestação. Para marcar todas as notas exibidas na listagem de uma vez, utilize o botão . Se desejar remover a seleção de todas as notas, clique no botão .

Para finalizar o processo de manifestação da(s) nota(s) selecionada(s), clique no botão . Será apresentada a seguinte tela:

Escolha a opção do manifesto e clique no botão para concluir a manifestação.