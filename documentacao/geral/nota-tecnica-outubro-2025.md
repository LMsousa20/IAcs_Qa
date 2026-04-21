---
title: Nota Técnica - Outubro 2025
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/582385665
---

# Nota Técnica - Outubro 2025

none

* * *

`Geral`
=======

### **1\. Nova Estrutura de Registro de Saldo de Estoque**

*   Foi implementado um novo sistema para o registro de saldos de produtos, centralizado na tabela `MOVIMENTO_ESTOQUE`. A partir de agora, todas as operações de estoque (compras, vendas, transferências, contagens, etc.) passam a gerar **registros de inserção** únicos e imutáveis nesta nova tabela. Este modelo a estabelece como a única fonte de verdade para o cálculo de saldos, eliminando a dependência de múltiplas tabelas e garantindo maior consistência e rastreabilidade dos dados.
    

**Atenção:** Durante a atualização do servidor (**ACS Gerente**), o sistema realizará automaticamente o cálculo e a migração inicial dos saldos. Imediatamente após a atualização dos PDVs, é **obrigatório** realizar uma carga de tabelas completa. Este procedimento é essencial para popular a tabela `MOVIMENTO_ESTOQUE` no banco de dados local do caixa e garantir a integridade do sistema.

* * *

`ACS Gerente - Versão 6.3287.6.660 - 22 de Outubro de 2025`
===========================================================

Menu Cadastro
-------------

### **1\. Cadastro de Clientes**

*   Foram criados dois novos parâmetros no **Cadastro de Clientes** (guia **Geral**):
    
    *   **Usa Cashback**: Define se o cliente participa do programa de cashback.
        
        *   Quando definido como **Sim**, o sistema gera automaticamente o relatório **Comprovante de Resgate para Cashback** após a emissão da venda.
            
        *   O relatório exibe informações do cliente, data e hora da venda, número do cupom fiscal e produtos vendidos, além dos pontos gerados, valor de cada ponto e total em reais a receber.
            
    *   **Valor do Ponto**: Determina o valor em reais atribuído a cada ponto acumulado.
        

Cadastro de Clientes

Comprovante de Resgate para Cashback

**Observações:** O funcionamento do cashback está diretamente vinculado ao **programa de fidelidade do sistema**. É necessário indicar, no **Cadastro de Produtos** (guia **Fidelidade**), que há geração de pontos — seja com base na **quantidade** ou no **valor vendido**.

**Atenção:** No **Cadastro de Clientes** (guia **Vendas**), existe o campo **Acumula Bônus**, que define se o cliente pode acumular pontos para trocas futuras. No caso do cashback, é indicado que esse campo esteja definido como **Não**, evitando que o cliente receba duplo benefício (cashback em dinheiro e acúmulo de pontos para troca).

### **2\. Cadastro de Produtos**

*   Foi implementado um bloqueio no **Cadastro de Produtos** para garantir a integridade das promoções **BR Mania**. Agora, ao tentar salvar uma promoção, o sistema verifica os itens vinculados na guia **Estoque > Componentes**. Se forem encontrados componentes que não fazem parte da promoção, será exibido um **alerta** e o salvamento será **bloqueado** até que os itens incorretos sejam removidos.
    

Cadastro de Produtos

* * *

Menu Financeiro
---------------

### **1\. Conciliação de Cartão**

*   Implementado o registro automático na auditoria sempre que houver alguma alteração nos cartões durante uma conciliação manual. O sistema agora grava as informações anteriores e posteriores à alteração, incluindo dados como tipo, NSU, autorização e administradora.
    

Relatório de Auditoria

### **2\. Faturamento de Convênio (Por Vale)**

*   Foi identificado um erro no cálculo de juros e multa ao realizar o faturamento por vale. Quando múltiplos vales eram selecionados, o sistema considerava apenas os juros do primeiro vale listado e aplicava a multa de forma incorreta, gerando divergências entre os valores exibidos e os efetivamente devidos, o que comprometia a precisão das faturas.
    
    *   O processo de cálculo e exibição dos valores foi revisado e aprimorado, garantindo o comportamento correto e transparente no faturamento.
        
        *   **Substituição dos valores de multa** por indicadores de **“Sim”** ou **“Não”**, facilitando a identificação visual da aplicação de multa.
            
        *   **Inclusão das informações de total de multa e juros** dos vales pendentes e dos vales selecionados na tela de seleção de vales.
            
        *   **Ajuste no cálculo da coluna “Acumulado”**, que agora soma apenas o valor do vale e seus respectivos juros.
            
        *   **Regras de aplicação aprimoradas:** a **multa é aplicada uma única vez por faturamento**, enquanto os **juros são aplicados individualmente sobre cada vale selecionado**.
            

Faturamento de Convênio (Por Vale)

### **3\. Contas a Pagar**

*   A tela de **Quitação de Contas a Pagar** permitia visualizar e quitar apenas as contas da empresa atualmente selecionada, limitando o controle financeiro de grupos empresariais com múltiplas filiais. Foi implementada a **funcionalidade multiempresa** na quitação de contas, onde agora o usuário pode:
    
    *   Selecionar uma **empresa específica** ou a opção **TODAS** no filtro de empresa;
        
    *   Visualizar e quitar contas de qualquer empresa do grupo (desde que tenha permissão de acesso);
        
    *   Identificar facilmente a qual filial cada conta está vinculada por meio da **nova coluna Empresa** na listagem.
        

Quitação de Contas a Pagar

### **4\. Correção do Rateio Automático de Despesas entre Centros de Resultado**

*   Foi ajustada a rotina de rateio para que o sistema passe a distribuir automaticamente o valor total da despesa entre os centros de resultados vinculados à conta (como Escritório, Pista e Loja). O rateio agora é aplicado corretamente quando o lançamento da despesa é feito:
    
    *   Pela quitação de **Contas a Pagar**;
        
    *   Pelo **Caixa da Gerência**;
        
    *   Pelo **Caixa de Vendas**.
        

Para lançamentos realizados **diretamente no Livro Caixa**, o rateio não é aplicado, mantendo o comportamento original.

Os valores rateados podem ser visualizados nos **relatórios de Demonstrativo de Resultados (DRE)** e **Apuração de Resultado**, onde o total da despesa é exibido proporcionalmente conforme os percentuais definidos por centro de resultado.

:jigsaw:1f9e9🧩#E6FCFF

**Exemplo Prático**

1️⃣ **Configuração da Conta de Despesa com Rateio**

Cadastro de Conta do Caixa do tipo Despesa

2️⃣ **Lançamento e Quitação da Despesa**

Contas a Pagar e Livro Caixa

3️⃣ **Visualização do Rateio no Relatório de DRE**

Relatório de DRE por Centro de Resultado

* * *

Menu Movimento
--------------

### **1\. Caixas de Vendas**

*   Implementado o registro automático das alterações de valores em dinheiro na **auditoria da prestação de contas**, exibindo os valores **antes e depois** da modificação. O comportamento foi padronizado para ambos os campos (**Gaveta** e **Sangria**).
    

Relatório de Auditoria

### **2\. Caixas de Vendas > Vales Funcionário (Venda)**

*   O sistema não permitia definir a conta aplicação no momento da quitação de vales de funcionários, direcionando automaticamente o valor para uma conta padrão. Essa limitação dificultava o controle financeiro em situações onde o pagamento é realizado por contas diferentes. Adicionado o campo **“Conta Aplicação”** na tela de quitação (total ou parcial) de vales de funcionários. Por padrão, o sistema sugere a conta configurada na operação **018 – Quitação de Vale Funcionário**, mas permite que o usuário selecione outra conta conforme a aplicação real do pagamento.
    

Quitação de Vales de Funcionário

### **3\. Notas Fiscais de Entrada e Saída**

*   Clientes da Bahia não estavam conseguindo emitir NF-e de saída porque a SEFAZ-BA **rejeitava a emissão síncrona** (resposta imediata na mesma conexão), um padrão implementado para atender à Nota Técnica 2025/001. Adicionado um **parâmetro de sistema** que permite configurar a forma de emissão de notas fiscais como **Síncrono** ou **Assíncrono**.
    

Parâmetros do Sistema > Guia Fiscal

### **4\. Manifesto de Documentos Fiscais (Emissão de MDF-e)**

*   A Nota Técnica 2025.001 (NT) introduziu regras de validação que exigem novas informações em cenários de **Carga Lotação** (um único DF-e) e para **Transportadores Autônomos de Cargas (TAC)**. O módulo de emissão do MDF-e não possuía os campos necessários para atender a essas exigências, causando rejeições fiscais (códigos 301, 302, 303 e 304). O módulo de emissão de MDF-e foi adaptado com a inclusão de novos campos e guias para cumprir as novas obrigatoriedades fiscais:
    
    *   Nova guia **Pagamento:** Adicionada para agrupar as informações de **Dados Bancários** e de **Pagamento do Frete** (tags `infPag` e `infBanc`), obrigatórias para **Carga Lotação** e para **TAC** (Corrige as Rejeições 302 e 303).
        
    *   Novo campo **Código NCM** na guia **Outros:** Para a inclusão do NCM do produto predominante, obrigatório para **Carga Lotação** (Corrige a Rejeição 301).
        

**Observação:**

O campo **CIOT** (já existente) deve ser preenchido obrigatoriamente para **TAC** (Corrige a Rejeição 304).

Manifesto de Documentos Fiscais

* * *

Menu Opções
-----------

### **1\. Parâmetros do Sistema**

*   Adicionado o campo **Abastecimentos por cupom** em `Parâmetros do Sistema > aba Integração > guia 99 Abastece`, que permite configurar e limitar a quantidade de abastecimentos que podem ser baixados em uma única venda com cupom de resgate 99. O limite configurável é de **no mínimo 1 e no máximo 2** abastecimentos por cupom.
    

Parâmetros do Sistema > Guia Integração

### **2\. Fortes AC Fiscal**

*   O sistema de exportação Fortes foi totalmente ajustado para o novo leiaute (Versão 190). As correções garantem:
    
    *   **Estrutura Correta:** A quantidade exata de campos para os registros (`PAR`, `PRO`, `NFM`, `PNM`, `PNC`, etc.).
        
    *   **Dados Obrigatórios:** O correto preenchimento de campos obrigatórios, como o **Detentores do RET/CE**.
        
    *   **Consistência de Valores:** A validação e a consistência dos valores de ICMS, FCP e outros impostos entre os registros.
        

### **3\. Inutilização de Numeração de NF-e/NFC-e**

*   A tela de inutilização foi otimizada com duas melhorias principais:
    

**Permanece Aberta:** Após a confirmação da inutilização, a tela **permanece aberta**, permitindo que o usuário realize múltiplas inutilizações sequenciais sem precisar reabri-la.

**Nova guia Por Lista:** O sistema passa a aceitar a **inutilização de documentos fora de sequência** (valores aleatórios), onde o mesmo se encarrega de fazer as requisições individuais necessárias para a SEFAZ.

Inutilização de Numeração de NF-e/NFC-e

* * *

Menu Relatórios
---------------

### **1\. Operacional > Movimento Diário Sintético**

*   O relatório _**Movimento Diário Sintético**_ (Resumo Gerência) apresentava divergência porque desconsiderava o valor referente a utilização de crédito de antecipação na quitação de faturas de convênio, fazendo com que o total do recolhimento fosse menor que o total do movimento. O campo **Vale Crédito** no Resumo da Gerência do relatório foi substituído por **Crédito Utilizado**. Agora, este campo passa a contabilizar e exibir corretamente os valores de crédito de antecipação que foram usados na quitação de faturas de convênio ou outras operações.
    

Relatório de Movimento Diário Sintético

### **2\. Operacional > Recebimento das Vendas > Resgates**

*   O relatório de _**Resgates**_ foi aprimorado em duas frentes:
    

**Novo Filtro de Tempo:** O usuário pode agora filtrar transações com base no **intervalo de tempo (em minutos)** entre o **Horário do Abastecimento** e o **Horário da Baixa**, podendo selecionar se a diferença é menor, maior ou está entre um intervalo definido.

Recebimento de Resgates

**Colunas de Detalhamento:** Inclusão de colunas essenciais como **Número do Cupom Fiscal**, **Código do Cupom de Resgate**, **Produto**, **Valores, Data/Hora de Abastecimento**, **Data/Hora da Baixa** e **Frentista**.

Relatório de Resgates

### **3\. Vendas > Vendas por Combustível e Bico**

*   Criada uma nova apresentação (_**Por Diferença e Bico**_) no relatório de _**Vendas por Combustível e Bico**_ para destacar possíveis diferenças entre o encerrante final e o inicial do turno seguinte.
    

Vendas por Combustível e Bico

Relatório de Vendas de Combustível por Diferença de Bico

Além do relatório, também foi adicionado um novo campo na tela _**Consulta de Vendas de Combustível**_ para indicar o **Valor da diferença** e **Quantidade** entre o encerrante final de um caixa e o encerrante inicial do próximo.

Consulta de Combustível

### **4\. Vendas > Demonstrativo Mensal**

*   O relatório de _**Demonstrativo Mensal**_ foi aprimorado para focar na análise de clientes:
    

**Novas Apresentações:** O filtro **Apresentação** recebeu as novas opções **Por Cliente / Grupo** e **Por Cliente / Produto**, que detalham individualmente as vendas realizadas para cada cliente.

**Novo Filtro de Clientes:** Foi adicionado o filtro **Clientes**, que é habilitado apenas nas novas apresentações. Ele permite que o usuário selecione um ou mais clientes específicos para a geração do relatório, restringindo o resultado da análise.

Demonstrativo Mensal das Vendas

Relatório de Demonstrativo Mensal das Vendas por Cliente

### **5\. Cobrança > Relação dos Vales de Funcionário**

*   Ao utilizar o filtro de **"Ignorar baixas a partir"** no relatório de _**Relação de Vales de Funcionário**_, os vales que foram quitados após a data configurada estavam sendo indevidamente **ocultados** do relatório, em vez de serem exibidos como _pendentes_. Agora, os vales que foram quitados a partir da data definida pelo usuário são apresentados corretamente no relatório com o _status_ de **pendentes**.
    

* * *

`ACS PDV - Versão 6.3287.6.406 - 22 de Outubro de 2025`
=======================================================

### **1\. Remoção do Bloqueio de Venda por Saldo Negativo para GNV**

*   O PDV impedia o lançamento de vendas de combustível quando o saldo do tanque estava negativo. Esse bloqueio ocorria com maior frequência no **GNV**, que não possui medições de tanque, interrompendo o fluxo de vendas e impactando o atendimento. A validação de saldo negativo foi **removida exclusivamente para o GNV**, permitindo a realização das vendas independentemente do saldo. Para os **demais combustíveis (líquidos)**, a validação foi ajustada conforme o nível de saldo:
    
    *   **De 0 a -300.000:** nenhuma mensagem exibida;
        
    *   **De -300.001 a -900.000:** exibe alerta, mas permite a venda;
        
    *   **Abaixo de -900.000:** exibe alerta e bloqueia a venda.
        

Alerta de saldo do tanque negativo

### **2\. Validação da Data de Vigência de Promoções (Shell Select e BR Mania)**

*   O PDV permitia a venda de produtos promocionais fora do período de vigência configurado no cadastro (guia **Estoque**, campos **Início da validade** e **Fim da validade**), o que gerava prejuízos, pois as franqueadoras não reembolsam o lojista por vendas feitas fora da vigência. Foi implementada a **validação obrigatória da data de vigência dos produtos promocionais** no PDV. Agora, o sistema:
    
    *   Permite normalmente a venda de promoções **dentro da vigência configurada**.
        
    *   Bloqueia a venda de promoções **fora do período válido**, exibindo mensagens específicas:
        

Vigência futura

Alerta de vigência futura - Shell Select

Alerta de vigência futura - BR Mania

Promoção vencida

Alerta de promoção vencida - Shell Select

Alerta de promoção vencida - BR Mania

### **3\. Ajuste no Tempo Mínimo de Resposta da SEFAZ para Emissão de NFC-e**

*   O PDV exibia a mensagem _“Tempo limite da operação atingido”_ durante a emissão de cupons fiscais (NFC-e), devido ao tempo de espera configurado para o retorno da SEFAZ ser inferior ao necessário. O sistema permitia definir tempos menores que 15 segundos, o que causava falhas em casos de lentidão na comunicação com a SEFAZ. Foi ajustada a validação do parâmetro **“Timeout para resposta do servidor da SEFAZ”**, permitindo agora apenas valores entre **15 e 60 segundos**. Além disso, caso o valor configurado no arquivo INI seja inferior a 15 segundos, o PDV aplica automaticamente o mínimo de **15 segundos**.
    

Parâmetros do Sistema (PDV) > Guia Fiscal

### **4\. Ajuste na Inclusão de Itens Opcionais em Promoções via Bipador**

*   Na tela de Seleção de Componentes (venda de promoções com itens opcionais), o uso do bipador causava uma falha: ao bipar o código de barras do produto opcional, o sistema preenchia o campo **Cód. Barras**, mas **não preenchia o campo de Opção**. O operador era forçado a **selecionar o produto manualmente**, o que aumentava o risco de **erros de estoque** (ao selecionar um item incorreto) e tornava o processo lento. O PDV foi ajustado para que, ao **bipar o código de barras**, o sistema **preencha automaticamente o campo de opção** e prossiga corretamente com a inclusão do item na promoção.
    

### **5\. Otimização e Detalhamento no Relatório de Fechamento de Caixa**

*   O relatório de fechamento de caixa não diferenciava a **Abertura de Caixa** do **Suprimento** e não oferecia um resumo claro das finalizadoras. Isso dificultava o controle financeiro, a conferência do valor em mãos e a identificação de divergências. O relatório de fechamento de caixa foi reformulado com duas novas seções e lógica aprimorada:
    

**Nova Seção "RESUMO DO CAIXA":** Diferencia claramente os valores de **Abertura de Caixa** (fundo inicial) e **Suprimento** (lançamentos após a abertura). Esta seção também consolida os valores totais de **Sangria**, **Encargos**, **Despesas** e **Gaveta**.

**Nova Seção "RESUMO FINALIZADORAS":** Apresenta as vendas separadas por finalizadora em três colunas: **Em Caixa** (recebimentos), **Sangria** (valores retirados) e **Diferença** (a conferência entre os dois).

Comprovante de encerramento do caixa

**Observação:**

Para manter a consistência com essa nova lógica, na tela de **Prestação de Contas** do ACS Gerente, o campo "Suprimento" também foi dividido em dois campos distintos: **Fundo de Caixa** e **Suprimento de Caixa**.

Prestação de Contas

* * *

`Novas Funcionalidades`
=======================

### **1\. Autorização Remota de Aferições via Aplicativo Mobile (Verificação 2 Fatores)**

*   Para trazer mais segurança no processo de lançamento de aferições, foi implementado um processo de **Autorização de Aferições (Verificação de 2 Fatores)**.
    

**Benefícios:**

➡️ **Maior Segurança:** Permite que o usuário autorizado aprove ou negue as aferições remotamente, controlando o risco de desvio de valores.

➡️ **Rastreabilidade e Controle:** Todas as solicitações de aferição são registradas no aplicativo (Pendentes, Autorizadas ou Rejeitadas), oferecendo controle total sobre o processo.

**Configuração Necessária:**

Acesse o menu **Opções** > **Parâmetros do Sistema** > aba **PDV**.

Localize o parâmetro **“Ativar verificação de 2 fatores para aferição”** e defina-o como **Sim**.

Parâmetros do Sistema > Guia PDV

**Observações:**

*   Quando definido como **Não**, o processo segue como anteriormente: basta a permissão **503 – REALIZAR AFERIÇÃO** para o frentista transformar o abastecimento em aferição e lançá-la no PDV.
    
*   Quando definido como **Sim**, toda transformação de abastecimento em aferição no PDV exigirá autorização, que pode ocorrer:
    
    *   No aplicativo **Mobile**, por meio do novo menu **Aferição**, disponível para usuários com permissão de autorização.
        
    *   No próprio **PDV**, desde que o usuário tenha a permissão **494 – AUTORIZAR AFERIÇÃO** adicionada em seu perfil. Esse modo é utilizado principalmente quando o PDV estiver offline, sem comunicação com o servidor.
        

note70b3b69d-5c02-4312-855c-cdc2d94c26e0

**Funcionamento:**

Ao transformar um abastecimento em aferição no PDV, o registro entra em _status_ **"AF. PENDENTE"**.

Listagem de abastecimentos

O usuário autorizado a utilizar o aplicativo mobile recebe em seu celular a notificação: **“Nova aferição aguardando análise”**.

Notificação

No novo menu **Aferição** do aplicativo, o usuário pode **AUTORIZAR** ou **NEGAR** a solicitação.

ACS Mobile

**Funcionamento:**

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Ao transformar um abastecimento em aferição no PDV, o registro entra em _status_ **"AF. PENDENTE"**.

![image-20251028-204012.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/image-20251028-204012.png?version=1&modificationDate=1761684016777&cacheVersion=1&api=v2&width=700&height=408)

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) O usuário autorizado a utilizar o aplicativo mobile recebe em seu celular a notificação: **“Nova aferição aguardando análise”**.

![image-20251028-204212.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/image-20251028-204212.png?version=1&modificationDate=1761684135425&cacheVersion=1&api=v2&width=500&height=379)

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) No novo menu **Aferição** do aplicativo, o usuário pode **AUTORIZAR** ou **NEGAR** a solicitação.

![afericao\_mobile-20251028-205259.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/afericao_mobile-20251028-205259.png?version=2&modificationDate=1761684807111&cacheVersion=1&api=v2&width=856&height=370)

#EAE6FF

Se autorizada, a observação no PDV muda para **"AF. AUTORIZ"**, liberando o lançamento do abastecimento como aferição.

Listagem de abastecimentos

No **Mobile**, o registro migra de **Pendentes** para **Autorizadas**, com os seguintes comportamentos: **LIBERADO** → até que o lançamento seja realizado no PDV. **BAIXADO** → após o lançamento da aferição no PDV, indicando que a aferição foi concluída.

ACS Mobile

#EAE6FF

Se negada, a observação no PDV muda para **"AF. NEGADA"**, exigindo que o frentista reverta a aferição para um abastecimento normal.

Listagem de abastecimentos

No **Mobile**, o registro migra automaticamente de **Pendentes** para **Rejeitadas**, até que o frentista transforme a aferição em **abastecimento normal**. Após essa reversão, o registro deixa de aparecer no menu de aferição do aplicativo.

ACS Mobile

**ATENÇÃO**

Caso o frentista tente lançar a aferição mesmo com o status **negada**, o sistema exibirá uma mensagem impedindo o procedimento e orientando a transformação de volta para abastecimento.

Listagem de abastecimentos

### **2\. Mudança de Preço para Vendas de Delivery Direto no PDV**

*   Implementada a funcionalidade que permite a **alteração de preço de venda de produtos diretamente na tela do PDV**. Ao lançar um produto para um cliente configurado como "Parceiro de delivery", o sistema exibe uma caixa de diálogo para que o operador (com a devida permissão) altere o preço na hora.
    

**Benefícios**

➡️ **Agilidade Operacional:** Elimina a necessidade de acessar a retaguarda, permitindo que a alteração de preço seja feita diretamente no ponto de venda.

➡️ **Independência:** Reduz a dependência da sincronização de dados e da disponibilidade do servidor da retaguarda, garantindo a eficiência das vendas de delivery.

**Configurações Necessárias:**

É obrigatório habilitar 3 parâmetros no sistema para liberar a funcionalidade:

Acesse o menu **Cadastro > Pontos de Venda**. Identifique o PDV que será utilizado para vendas do delivery.

Na guia **Geral**, localize o parâmetro **“Utilizar serviço de delivery”** e defina-o como **Sim**.

Cadastro de Pontos de Venda

Acesse o menu **Cadastro > Clientes > Clientes**. Identifique o cliente que poderá ter os preços de contrato alterados diretamente no PDV.

Na guia **Identificação**, localize o parâmetro **“Parceiro Delivery”** e defina-o como **Sim**.

Cadastro de Clientes

Acesse o menu **Cadastro > Perfil de Acesso**. Identifique o perfil de acesso do operador de caixa e inclua a operação **“MUDAR O PREÇO EM VENDA DE DELIVERY”** no mesmo.

Cadastro de Perfis de Acesso

📌 **Importante:**

*   Se o PDV for acessado por um usuário **sem a permissão** para modificar preços, o sistema solicitará a senha de um usuário autorizado sempre que houver lançamento de produtos em vendas para clientes de delivery.
    
*   Se o PDV for acessado por um usuário **com a permissão habilitada**, não será solicitada senha, permitindo que o operador altere os preços quando necessário.
    

noted3165ae6-e0c4-47ea-94c9-5fd3ad3e90fd

**Funcionamento:**

No PDV, o operador identifica o cliente parceiro de delivery pelo botão **'Consulta Clientes F3'**.

Ao lançar qualquer produto (via bipe ou Lista Produtos F4), uma **tela de modificação de preço é exibida** _antes_ da inserção do item na venda.

Mudança de Preço de Venda

O operador insere o novo **Preço para a venda** daquele item na transação e prossegue para a finalização.

📌 **Importante:**

*   Esse novo preço é aplicado apenas àquela venda, como preço de contrato.
    
*   A modificação de preço possui limites de segurança: é permitido um **acréscimo de até 50%** e um **desconto de até 70%** em relação ao preço original do produto.
    
    *   (Exemplo: Produto de R$ 1,00 pode variar entre R$ 0,30 e R$ 1,50).
        

**Funcionamento:**

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) No PDV, o operador identifica o cliente parceiro de delivery pelo botão **'Consulta Clientes F3'**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Ao lançar qualquer produto (via bipe ou Lista Produtos F4), uma **tela de modificação de preço é exibida** _antes_ da inserção do item na venda.

![mudanca\_preco\_delivery-20251029-122421.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/mudanca_preco_delivery-20251029-122421.png?version=1&modificationDate=1761740887091&cacheVersion=1&api=v2&width=700&height=253)

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) O operador insere o novo **Preço para a venda** daquele item na transação e prossegue para a finalização.

📌 **Importante:**

*   Esse novo preço é aplicado apenas àquela venda, como preço de contrato.
    
*   A modificação de preço possui limites de segurança: é permitido um **acréscimo de até 50%** e um **desconto de até 70%** em relação ao preço original do produto.
    
    *   (Exemplo: Produto de R$ 1,00 pode variar entre R$ 0,30 e R$ 1,50).
        

### **3\. Pagamento de Comandas no PDV Móvel**

*   Implementado a nova aba **"COMANDAS"** no PDV Móvel, permitindo que o pagamento de comandas abertas seja realizado remotamente, fora do caixa principal.
    

**Benefícios:**

➡️ **Agilidade no Pagamento:** Otimiza o processo de quitação, permitindo que o pagamento seja feito de forma remota, reduzindo filas no caixa principal.

➡️ **Melhor Atendimento:** Oferece maior conveniência ao cliente, especialmente em estabelecimentos que utilizam o sistema de comandas para consumo no local.

**Configurações Necessárias:**

No **PdvPooConfig**, a opção **“Desabilitar comandas” NÃO** deve ser selecionada, para que a aba seja exibida no PDV Móvel.

Além disso, a configuração do PDV Principal deve apontar para o banco caixa do PDV de Vendas, e não para o banco caixa do PDV de Comandas.

Configuração PDV Móvel

note95fda70f-2dc1-445b-a906-86e979a2cd9f

**Funcionamento:**

O processo de pagamento de comandas no PDV Móvel segue os seguintes passos:

Na tela inicial do PDV Móvel, clicar no botão **VENDAS**.

Informar o **código do operador**.

Acessar a nova aba **COMANDAS** (ao lado de **ABAST** e **DIVERSOS**).

Realizar a venda: incluir a(s) comanda(s) digitando o código e clicando no ícone de **lupa**. É possível agrupar várias comandas para um pagamento único.

Ao clicar no ">" da comanda listada, são exibidos os detalhes (valores, itens e códigos). O **ícone da impressora** permite imprimir a comanda.

**Atenção:** A comanda só é impressa se o parâmetro **"Imprimir Comanda"** na guia **Geral** do cadastro do PDV principal (emissor do cupom) estiver definido como **'Confirmar'** ou **'Sempre'**.

**Identificar o cliente**, se desejar vincular a venda a um cadastro específico (opcional).

Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, Convênio ou Mista).

Indicar o **valor pago** (para finalizadora Dinheiro).

**Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir o cupom fiscal.

Fluxo de pagamento das comandas no PDV Móvel com a finalizadora Dinheiro

**Funcionamento:**

O processo de pagamento de comandas no PDV Móvel segue os seguintes passos:

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Na tela inicial do PDV Móvel, clicar no botão **VENDAS**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Informar o **código do operador**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Acessar a nova aba **COMANDAS** (ao lado de **ABAST** e **DIVERSOS**).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Realizar a venda: incluir a(s) comanda(s) digitando o código e clicando no ícone de **lupa**. É possível agrupar várias comandas para um pagamento único.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Ao clicar no ">" da comanda listada, são exibidos os detalhes (valores, itens e códigos). O **ícone da impressora** permite imprimir a comanda.

![(aviso)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/warning.png) **Atenção:** A comanda só é impressa se o parâmetro **"Imprimir Comanda"** na guia **Geral** do cadastro do PDV principal (emissor do cupom) estiver definido como **'Confirmar'** ou **'Sempre'**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) **Identificar o cliente**, se desejar vincular a venda a um cadastro específico (opcional).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, Convênio ou Mista).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Indicar o **valor pago** (para finalizadora Dinheiro).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) **Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir o cupom fiscal.

![junto-20251029-171303.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/junto-20251029-171303.png?version=1&modificationDate=1761758005093&cacheVersion=1&api=v2&width=1316&height=259)

### **4\. Cadastro Simplificado de Cliente no PDV para Emissão de NF-e**

*   Em atendimento ao **Decreto 36.729/2025**, que exige emissão de **NF-e (modelo 55) para clientes pessoa jurídica**, o PDV passa a permitir o **cadastro simplificado de clientes** diretamente na frente de caixa. Essa funcionalidade facilita o preenchimento dos dados obrigatórios para emissão fiscal, sem depender do acesso à retaguarda.
    

**Benefícios:**

➡️ **Conformidade Fiscal:** Atende prontamente à exigência do Decreto 36.729/2025 para emissão de NF-e para Pessoas Jurídicas.

➡️ **Agilidade no Atendimento:** Permite que o cadastro seja feito no momento da venda, sem interromper o fluxo de caixa, e de forma segura (mediante permissão).

**Configurações Necessárias:**

Não há configuração prévia. O usuário que realizará o cadastro deve possuir a operação de **“INCLUIR CLIENTES”** habilitada em seu perfil de acesso.

notee82222b4-f95b-41e8-a476-7efb28f08b35

**Funcionamento:**

No PDV, acesse **Consulta de Clientes \[F3\]** e clique no novo botão **“+”** para adicionar um cliente.

Consulta de Clientes

O sistema solicitará **usuário e senha** — a inclusão ou edição só é permitida para perfis com permissão de cadastro.

Verificação de permissão

A tela de cadastro exibe os campos essenciais para emissão de NF-e (CPF/CNPJ, nome, endereço, telefone e e-mail).

*   **Clientes CNPJ:** os dados são preenchidos automaticamente via consulta online, exceto a **Inscrição Estadual**.
    
*   **Clientes CPF:** o preenchimento é manual, com alguns campos opcionais (**Número**, **Complemento**, **Telefone** e **E-mail**).
    

Cadastro do Cliente (PDV)

Caso o CPF/CNPJ consultado (ao clicar na lupa) já esteja cadastrado, o sistema permite **edição dos dados existentes**.

Edição do Cliente (PDV)

O cadastro ou a atualização é enviado automaticamente para a **retaguarda (ACS Gerente)** e pode ser complementado posteriormente.

**Atenção:** O cadastro é criado com valores padrão, com atenção em especial para os seguintes campos:

**Documento Fiscal:** Cupom

**Nominar Cupom:** Não

**Finalizadoras:** Dinheiro, Cartão, Carteira Digital, Pix e Resgate

**Tipo do Fechamento:** Solicitado pelo cliente

**Funcionamento:**

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) No PDV, acesse **Consulta de Clientes \[F3\]** e clique no novo botão **“+”** para adicionar um cliente.

![cliente\_pdv-20251030-114923.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/cliente_pdv-20251030-114923.png?version=1&modificationDate=1761824981393&cacheVersion=1&api=v2&width=700&height=404)

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) O sistema solicitará **usuário e senha** — a inclusão ou edição só é permitida para perfis com permissão de cadastro.

![cliente\_pdv\_2-20251030-115115.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/cliente_pdv_2-20251030-115115.png?version=1&modificationDate=1761825101648&cacheVersion=1&api=v2&width=700&height=404)

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) A tela de cadastro exibe os campos essenciais para emissão de NF-e (CPF/CNPJ, nome, endereço, telefone e e-mail).

*   **Clientes CNPJ:** os dados são preenchidos automaticamente via consulta online, exceto a **Inscrição Estadual**.
    
*   **Clientes CPF:** o preenchimento é manual, com alguns campos opcionais (**Número**, **Complemento**, **Telefone** e **E-mail**).
    

![cliente\_pdv\_3-20251029-212636.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/cliente_pdv_3-20251029-212636.png?version=1&modificationDate=1761825157951&cacheVersion=1&api=v2&width=500&height=347)

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Caso o CPF/CNPJ consultado (ao clicar na lupa) já esteja cadastrado, o sistema permite **edição dos dados existentes**.

![cliente\_pdv\_4-20251030-115644.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/cliente_pdv_4-20251030-115644.png?version=1&modificationDate=1761825420521&cacheVersion=1&api=v2&width=500&height=347)

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) O cadastro ou a atualização é enviado automaticamente para a **retaguarda (ACS Gerente)** e pode ser complementado posteriormente.

![(aviso)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/warning.png) **Atenção:** O cadastro é criado com valores padrão, com atenção em especial para os seguintes campos:

**Documento Fiscal:** Cupom

**Nominar Cupom:** Não

**Finalizadoras:** Dinheiro, Cartão, Carteira Digital, Pix e Resgate

**Tipo do Fechamento:** Solicitado pelo cliente

### **5\. Habilitação da Emissão de NF-e (Modelo 55) no PDV Móvel**

*   Agora o **PDV Móvel** também permite a **emissão de NF-e (Modelo 55)**, ampliando as opções fiscais disponíveis para operações realizadas fora do caixa principal.
    

**Benefícios:**

➡️ **Conformidade e Flexibilidade:** Permite atender às exigências fiscais de clientes Pessoa Jurídica (NF-e) com a agilidade do PDV Móvel.

➡️ **Otimização na Pista:** Elimina a necessidade de o cliente ir ao caixa principal apenas para a emissão de um documento fiscal diferente do cupom, melhorando o fluxo de atendimento na pista.

**Configuração Necessária:**

Acesse o menu **Cadastro > Clientes > Clientes**. Identifique o cliente para o qual será emitida a NF-e diretamente no PDV Móvel.

Na guia **Venda**, localize o parâmetro **“Documento Fiscal”** e defina-o como **Nota**. Essa configuração informa ao sistema que as vendas para esse cliente devem gerar **NF-e (modelo 55)**, e não **cupom fiscal (NFC-e ou CF-e)**.

Cadastro de Clientes

📌 **Importante:**

*   No **PdvPooConfig,** devem ser configurados corretamente os campos **Nº de série da NF-e / Nota Inicial** para que não ocorra erros de duplicidade na emissão das notas.
    

note014bf60c-64be-4d16-992b-56656cc708af

**Funcionamento:**

O processo de emissão de NF-e no PDV Móvel segue os seguintes passos:

Na tela inicial do **PDV Móvel**, clicar no botão **VENDAS**.

Informar o **código do operador**.

Na aba **ABAST**, selecionar o(s) abastecimento(s) que serão incluídos na venda.

Buscar o cliente pelo **Nome** e clicar na lupa para listar os cadastros.

Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, Convênio ou Mista).

Indicar o **valor pago** (para finalizadoras Convênio ou Dinheiro).

*   Campos de **Placa**, **Hodômetro** e **Observação** são opcionais para o Convênio.
    

**Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir a NF-e (modelo 55).

Fluxo de emissão de NF-e no PDV Móvel com a finalizadora Convênio

**Funcionamento:**

O processo de emissão de NF-e no PDV Móvel segue os seguintes passos:

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Na tela inicial do **PDV Móvel**, clicar no botão **VENDAS**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Informar o **código do operador**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Na aba **ABAST**, selecionar o(s) abastecimento(s) que serão incluídos na venda.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Buscar o cliente pelo **Nome** e clicar na lupa para listar os cadastros.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, Convênio ou Mista).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Indicar o **valor pago** (para finalizadoras Convênio ou Dinheiro).

*   Campos de **Placa**, **Hodômetro** e **Observação** são opcionais para o Convênio.
    

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) **Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir a NF-e (modelo 55).

![junto-20251030-150012.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/junto-20251030-150012.png?version=1&modificationDate=1761836429462&cacheVersion=1&api=v2&width=1024&height=260)

### **6\. Integração com ClubPetro**

*   O sistema agora conta com **integração direta via API com o ClubPetro**, eliminando a necessidade de uso do aplicativo auxiliar na pista. Com isso, os **descontos do programa de fidelidade** podem ser **validados e aplicados automaticamente pelo PDV**, tornando o processo mais rápido e integrado à rotina de venda.
    

**Benefícios:**

➡️ **Eficiência Operacional:** Agiliza drasticamente o processo de venda na pista, reduzindo o tempo de espera do cliente.

➡️ **Melhor Experiência:** Garante que a aplicação do benefício seja mais rápida, fluida e com menor chance de erros manuais.

**Configurações Necessárias:**

É preciso configurar as credenciais da integração e sincronizar os produtos dos combustíveis:

Acesse o menu **Opções** > **Parâmetros do Sistema** > aba **Integração** \> guia **ClubPetro**.

Informe a **URL de Integração** ([https://gateway.clubpetro.com/core/](https://gateway.clubpetro.com/core/)) e o **Token** fornecidos pelo ClubPetro.

Parâmetros do Sistema > Guia Integração

Acesse o menu **Cadastro** > **Produtos** \> **Produtos** e filtre o grupo de **Combustíveis**.

Na guia **Integração**, localize o parâmetro **“Cod. Produto ClubPetro”** e clique na lupa.

Associe cada combustível ao seu código correspondente do ClubPetro para que o sistema reconheça qual produto está sendo bonificado.

Cadastro de Produtos

noteee32d432-40e6-4f7f-ae83-46620a0aa6a2

**Funcionamento:**

O processo de resgate do desconto do ClubPetro no PDV segue o seguinte fluxo:

O frentista pressiona **P + ENTER** para listar os abastecimentos pendentes de baixa.

Seleciona o(s) abastecimento(s) que terão desconto via programa de fidelidade.

Clica em **Encerra Venda \[F2\]** para abrir a tela de **Encerramento da Venda**.

Aciona a finalizadora **Resgate \[F8\]**.

Indica a **Op. Resgate** como **ClubPetro**, informa o código do voucher no campo **Cupom para resgate** e clica no botão **'Consultar Cupom'**.

O PDV consulta a API do ClubPetro para **validar o desconto**, que é aplicado automaticamente à venda.

O valor restante da venda deve ser indicado em outra finalizadora (como Dinheiro, Cartão, PIX, etc.).

Clica em **Finaliza Venda \[F2\]** para concluir a emissão do documento fiscal.

**Atenção:** O desconto pode ser aplicado a **no máximo dois abastecimentos por venda**.

Demonstração do Resgate com o ClubPetro

**Funcionamento:**

O processo de resgate do desconto do ClubPetro no PDV segue o seguinte fluxo:

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) O frentista pressiona **P + ENTER** para listar os abastecimentos pendentes de baixa.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Seleciona o(s) abastecimento(s) que terão desconto via programa de fidelidade.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Clica em **Encerra Venda \[F2\]** para abrir a tela de **Encerramento da Venda**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Aciona a finalizadora **Resgate \[F8\]**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Indica a **Op. Resgate** como **ClubPetro**, informa o código do voucher no campo **Cupom para resgate** e clica no botão **'Consultar Cupom'**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) O PDV consulta a API do ClubPetro para **validar o desconto**, que é aplicado automaticamente à venda.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) O valor restante da venda deve ser indicado em outra finalizadora (como Dinheiro, Cartão, PIX, etc.).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Clica em **Finaliza Venda \[F2\]** para concluir a emissão do documento fiscal.

![(aviso)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/warning.png) **Atenção:** O desconto pode ser aplicado a **no máximo dois abastecimentos por venda**.

![ClubPetro Resgate.gif](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/ClubPetro%20Resgate.gif?version=1&modificationDate=1761851036871&cacheVersion=1&api=v2&width=700&height=393)

**Importante:**

Para que os **descontos** concedidos via resgate (de qualquer programa de fidelidade) sejam corretamente refletidos nos relatórios de **DRE** e **Apuração de Resultado**, são necessárias as seguintes configurações:

**Cadastro de Contas do Caixa:** Criar uma nova conta no grupo **'Despesas Financeiras'** (Exemplo: 'Descontos Concedidos'). O **Plano de Contas** sugerido é o código **'3301 - Despesas de Vendas'**.

Exemplo do Cadastro da Conta de Despesa

**Contas Padrão:** Indicar essa nova conta como Conta Aplicação da **Operação 013 (RESGATES)** nas Contas Padrão, usando a conta CAIXA como Conta Origem.

Contas Padrão

### **7\. Integração com PostoAki: Pontuação e Resgate Habilitados no PDV Móvel da Cielo**

*   Foi ampliada a integração com o programa de fidelidade **PostoAki**, permitindo agora a **pontuação e o resgate de descontos diretamente pelo PDV Móvel Cielo**. Antes, a integração estava disponível apenas no PDV Desktop. Com esta atualização, o processo de fidelização passa a ocorrer também no PDV Móvel, oferecendo maior praticidade ao frentista e ao cliente durante o atendimento.
    

**Benefícios:**

➡️ **Experiência na Pista:** Permite que o cliente acumule pontos e utilize descontos sem precisar se deslocar até o PDV, agilizando o atendimento.

➡️ **Confiabilidade:** O sistema informa o status do cupom de forma imediata, garantindo que apenas cupons válidos sejam usados para pontuação ou resgate.

**Configurações Necessárias:**

A configuração segue o mesmo processo já descrito na nota técnica original da integração PostoAki:

Acesse o menu **Opções** > **Parâmetros do Sistema** > aba **Integração** \> guia **Posto Aki**.

Informe a **URL de Integração** (única por empresa) e a **Chave Secreta** fornecidos pelo PostoAki.

Realize os testes de conexão e envio de produtos/preços para sincronização inicial.

Após configurado, o sistema enviará automaticamente as atualizações de preços e produtos ao PostoAki.

Parâmetros do Sistema > Guia Integração

📌 **Importante:**

*   Não há configurações adicionais específicas para o PDV Móvel. A integração utiliza as mesmas credenciais e parâmetros definidos no ACS Gerente.
    

note83bc2518-7804-44f5-af7b-1b8bf4acbe1b

**Funcionamento:**

O processo de pontuação e resgate de descontos do **PostoAki** no **PDV Móvel Cielo** é simples e totalmente integrado ao fluxo de venda.

Na tela inicial do **PDV Móvel**, clicar no botão **VENDAS**.

Informar o **código do operador**.

Na aba **ABAST**, selecionar o(s) abastecimento(s) que serão incluídos na venda.

**Identificar o cliente**, se desejar vincular a venda a um cadastro específico (opcional).

Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, Convênio ou Mista).

Após definir a forma de pagamento, será exibida a **tela de integração com o PostoAki**, onde é possível informar um **cupom de pontuação** ou **cupom de desconto**.

*   **Informe o código do cupom** e clique no **ícone da lupa** para que o PDV Móvel realize a **consulta na API do PostoAki**.
    
*   No quadro **“Status Consulta do Cupom”**, o sistema exibirá o retorno da API, indicando, por exemplo:
    
    *   `Cupom ok para PONTUAÇÃO. Saldo: xxxx,xx`
        
    *   `Cupom ok para DESCONTO. Saldo: xxxx,xx`
        
*   No quadro **“Informações Retornadas”**, o sistema mostrará o **valor de desconto** aplicado (caso o cupom seja de resgate).
    

Ao **avançar**, será apresentado um **resumo da venda**, com os valores de **total da venda**, **valor do resgate** e **valor a pagar**.

Após o resumo, é exibido o **launcher da máquina Cielo**, solicitando o **pagamento pelo cartão de débito**, conforme a forma de pagamento definida no passo 5.

**Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir o cupom fiscal.

Fluxo de venda no PDV Móvel com a finalizadora Cartão de Débito e Resgate

**Funcionamento:**

O processo de pontuação e resgate de descontos do **PostoAki** no **PDV Móvel Cielo** é simples e totalmente integrado ao fluxo de venda.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Na tela inicial do **PDV Móvel**, clicar no botão **VENDAS**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Informar o **código do operador**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Na aba **ABAST**, selecionar o(s) abastecimento(s) que serão incluídos na venda.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) **Identificar o cliente**, se desejar vincular a venda a um cadastro específico (opcional).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Definir a **forma de pagamento** (Ex: Dinheiro, PIX, Cartão, Convênio ou Mista).

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Após definir a forma de pagamento, será exibida a **tela de integração com o PostoAki**, onde é possível informar um **cupom de pontuação** ou **cupom de desconto**.

*   **Informe o código do cupom** e clique no **ícone da lupa** para que o PDV Móvel realize a **consulta na API do PostoAki**.
    
*   No quadro **“Status Consulta do Cupom”**, o sistema exibirá o retorno da API, indicando, por exemplo:
    
    *   `Cupom ok para PONTUAÇÃO. Saldo: xxxx,xx`
        
    *   `Cupom ok para DESCONTO. Saldo: xxxx,xx`
        
*   No quadro **“Informações Retornadas”**, o sistema mostrará o **valor de desconto** aplicado (caso o cupom seja de resgate).
    

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Ao **avançar**, será apresentado um **resumo da venda**, com os valores de **total da venda**, **valor do resgate** e **valor a pagar**.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) Após o resumo, é exibido o **launcher da máquina Cielo**, solicitando o **pagamento pelo cartão de débito**, conforme a forma de pagamento definida no passo 5.

![(estrela azul)](/wiki/s/-2134469506/6452/08eb2178808393e91332b3b910588917f6eb3efc/_/images/icons/emoticons/star_blue.png) **Confirmação:** O sistema finaliza a venda e pergunta se o usuário deseja imprimir o cupom fiscal.

![junto-20251031-172119.png](https://acsapps.atlassian.net/wiki/download/thumbnails/582385665/junto-20251031-172119.png?version=1&modificationDate=1761931305288&cacheVersion=1&api=v2&width=1609&height=260)

* * *