---
title: Medições dos Tanques
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/2195465
---

# Medições dos Tanques

16truenonelisttrue

Medições dos Tanques
====================

O módulo de **Medições dos Tanques** é uma ferramenta essencial para o controle diário de estoque de combustíveis comercializados no posto, realizada por meio do **LMC (Livro de Movimentação de Combustíveis)**. Além de ser uma obrigação fiscal, o correto preenchimento deste módulo é fundamental para a gestão eficiente do posto, permitindo:

*   Verificar possíveis **perdas** de combustível;
    
*   **Detectar vazamentos**;
    
*   Identificar outros problemas relacionados ao controle de estoque.
    

Esse registro detalhado não só garante o cumprimento das exigências fiscais, mas também oferece uma visão clara e precisa do desempenho operacional, auxiliando na administração do estoque de combustíveis.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Estoque > Medições dos tanques

* * *

Será apresentada a seguinte tela:

Tela geral do módulo de medições de tanques

Na parte superior da tela, é possível **filtrar o período de datas** que deseja consultar. Já na parte inferior, serão listadas todas as datas criadas no sistema.

Existem duas maneiras de criar as datas:

1.  **Criação Automática**: Sempre que um caixa é aberto no **PDV Principal** em determinada data, o sistema cria automaticamente essa mesma data no módulo de Medições dos Tanques.
    
2.  **Criação Manual**: Para criar uma data manualmente, clique no botão localizado no canto superior direito. Será apresentada a seguinte tela:
    

Tela para criação de data manualmente

Informe a `Data de medição` que será criada e clique no botão para finalizar a criação do dia.

:info:atlassian-info:info:#B3D4FF

**Observação**: Caso já possua as informações de **Altura** ou **Volume** de cada tanque para a data em questão, esses campos podem ser preenchidos diretamente nessa etapa.

* * *

Apresentação da tela e campos
-----------------------------

Ao acessar o módulo e clicar no ícone de alguma data, será apresentada a seguinte tela:

Tela de lançamento manual das medições

### Box 1 - Alterar Medição de Tanque

Na parte superior do box, são exibidas informações sobre a **data** para a qual as medições serão registradas, além de alguns **botões de ação** para facilitar a navegação e o preenchimento das informações:

#DEEBFF

Exibe a data selecionada para o registro das medições. Utilize os botões e para transitar facilmente entre as datas.

* * *

#DEEBFF

Mostra o dia da semana correspondente à data selecionada, auxiliando na organização e controle das medições.

#DEEBFF

Botões de ação que oferecem funcionalidades adicionais para facilitar o preenchimento das informações na guia **Tanques**, como a inserção rápida de dados e atualização dos saldos.

*   Botão : Gera automaticamente as medições dos líquidos dos tanques. Repete o **saldo escritural** do dia anterior na **abertura** do dia atual, eliminando a necessidade de inserir manualmente os valores.
    
*   Botão : Se o posto possuir bicos de **GNV (Gás Natural Veicular)**, este botão, assim como para os líquidos, repete o saldo escritural do dia anterior ao abrir o novo dia.
    
*   Botão : Atualiza os saldos dos tanques nos dashboards, tanto do **PDV** quanto do **AppPosto**. Isso garante que os valores estejam sempre corretos e sincronizados com as movimentações mais recentes.
    
    *   **Observação:** Esse botão consta **somente** no dia respectivo a data atual.
        

Guia TANQUES760

A guia **Tanques** é fundamental para garantir o correto lançamento de volume dos combustíveis armazenados, permitindo que o posto mantenha registros precisos das medições realizadas, seja por altura ou volume, e assegure a conformidade fiscal e operacional.

Guia Tanques

Nesta guia, são exibidos os **Tanques** e seus respectivos **Combustíveis** cadastrados, juntamente com as seguintes colunas: **Altura**, **Volume**, **Medição** e **Horário**. Cada uma dessas colunas tem uma função específica no controle das medições diárias dos tanques de combustível.

*   `Altura`: Indica a altura do combustível no tanque, medida em **centímetros**, após a medição realizada com a régua. Para lançar a medição com base apenas na altura, é necessário que os volumes correspondentes a cada altura já estejam cadastrados no módulo de **Cadastro de Tabelas de Medição**.
    
*   `Volume`: Indica o volume de combustível no tanque, medido em centímetros e convertido para **litros**, após a medição com a régua. Quando o lançamento é feito pelo volume, não é necessário o cadastro prévio das alturas e volumes no sistema, pois a conversão é realizada manualmente.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Caso o parâmetro "**Usa apenas volume já cadastrado na tabela de medição?**", localizado no **Menu Opções > submenu PARÂMETROS > opção Sistema > box Movimento > guia OPÇÕES**, esteja configurado como `Sim`, o sistema só aceitará volumes que tenham sido previamente cadastrados no módulo de **Cadastro de Tabelas de Medição**.

*   `Medição`: Exibe como a medição foi inserida no sistema, podendo ser de forma **manual** (quando o operador insere os dados) ou **automática** (capturada pelo aplicativo de Monitor de Tanques).
    
*   `Horário`: Registra o horário da primeira medição do dia. Esse campo é preenchido **apenas** quando a medição é realizada de forma **automática**.
    

Guia CONFERÊNCIA760

A guia **Conferência** é fundamental para garantir que as medições estejam corretas e para detectar possíveis perdas ou irregularidades no estoque de combustíveis.

Guia Conferência

Nesta guia, são exibidos os campos de **Abertura**, **Compras**, **Vendas**, **Escritural**, **Fechamento** e **Diferença** essenciais para a conferência diária dos volumes nos tanques, permitindo o acompanhamento preciso do estoque.

*   `Abertura`: Corresponde à medição realizada no início do dia, antes de qualquer movimentação ser realizada.
    
*   `Compras`: Reflete os volumes de combustível recebidos no tanque, considerando a data de entrada do combustível, que é registrada no campo **"Data do LMC"** no módulo de Compras de Combustível.
    
*   `Vendas`: As vendas são calculadas pela diferença entre os **encerrantes** final e inicial do dia para cada bico vinculado ao tanque, excluindo as aferições.
    
*   Escritural: Este campo exibe o saldo atual do tanque, calculado pela seguinte fórmula: **Abertura + Compras - Vendas.** O valor escritural é um cálculo teórico baseado nas movimentações registradas.
    
*   `Fechamento`: Apresenta o volume de combustível após o fechamento do dia. Este campo será preenchido com a **medição de abertura do dia seguinte**, fornecendo uma referência direta para a conferência.
    
*   `Diferença`: Refere-se à diferença entre o saldo escritural (calculado pelo sistema) e o saldo real informado no fechamento.
    

:note:atlassian-note#B3D4FF

**Observação**: Conforme a [Resolução ANP Nº 884 de 05/09/2022](https://www.in.gov.br/en/web/dou/-/resolucao-anp-n-884-de-5-de-setembro-de-2022-427633674), a variação permitida é de 0,60% do volume disponível no tanque, ou seja, do saldo escritural. Isso implica que a diferença (positiva ou negativa) entre o saldo escritural e o informado no fechamento **não deve exceder 0,60% do saldo escritural de cada tanque**.

### Box 2 - Observação LMC

O box **Observação LMC** permite o registro de observações relevantes no **Livro de Movimentação de Combustíveis (LMC)**, funcionando como uma ferramenta adicional para documentar informações específicas que possam impactar a gestão do estoque ou o controle fiscal. Essas observações podem ser inseridas manualmente pelo operador sempre que uma situação incomum ou excepcional for identificada.

Registrar observações detalhadas no **LMC** ajuda a manter o histórico completo das operações diárias e assegura que todas as inconsistências ou eventos extraordinários sejam devidamente documentados. Isso facilita auditorias internas, aumenta a transparência no controle do estoque e assegura conformidade com as exigências fiscais.

Ao clicar no botão , será aberta uma tela para preenchimento das informações da nova observação.

Tela para criação de observação

Selecione o **Combustível** ao qual a observação se refere. Esse campo é obrigatório, pois garante que a observação seja corretamente vinculada ao combustível específico. No campo destinado à **Observação**, descreva as informações relevantes. Certifique-se de incluir detalhes suficientes para explicar a situação ou problema detectado, como divergências de volume, falhas de equipamento, ou quaisquer eventos extraordinários.

Após preencher todos os campos, clique no botão para finalizar o lançamento da observação. O sistema salvará a entrada e a mesma será exibida na listagem de observações do box.

Box Observação LMC

Depois de criada, a observação poderá ser editada ou excluída conforme necessário:

*   Caso seja necessário alterar alguma informação da observação, clique no ícone ao lado da observação correspondente. A tela de edição será aberta, permitindo as alterações.
    
*   Para remover uma observação, clique no ícone . O sistema pedirá uma confirmação antes de excluir a observação permanentemente.
    

Lançamento das medições
-----------------------

As medições dos tanques podem ser realizadas de duas formas: **automaticamente**, utilizando equipamentos de medição conectados ao sistema, ou **manualmente**, através da inserção direta dos valores no módulo de medições.

### Lançamento Automático

Para postos que utilizam **equipamentos medidores de tanques**, foi disponibilizado um aplicativo que monitora automaticamente o saldo dos combustíveis armazenados. Com esse recurso, o registro das medições é feito diariamente de forma automatizada, eliminando a necessidade de inserção manual e garantindo maior precisão no controle do estoque.

**Lançamentos automáticos** oferecem mais precisão e eliminam erros humanos, sendo recomendados para postos que possuem equipamentos de medição compatíveis.

### Lançamento Manual

Caso o posto não utilize equipamentos automatizados, ou se for necessário fazer ajustes manuais, o procedimento é simples:

Acesse o módulo **Medições dos Tanques**. Localize a data na qual deseja realizar o lançamento das medições. Ao encontrar a data correta, clique no ícone para acessar a tela de edição e lançamento das medições.

Informe a **Altura** do combustível (em centímetros) no tanque, caso a tabela de medição já tenha sido cadastrada previamente no sistema. Essa tabela faz a conversão automática da altura em volume de combustível. Ou, se não houver tabela de medição cadastrada, insira diretamente o **Volume** de combustível (em litros) medido no tanque.

Após inserir os dados, clique no botão para salvar a medição e finalizar o processo.

**Observações:**

1.  Para postos sem medidores de tanques, o **lançamento manual** deve ser feito com atenção, assegurando que as medições estejam corretas e que as tabelas de conversão de altura para volume estejam configuradas corretamente no sistema.
    
2.  É importante verificar a coluna **Diferença** do dia anterior ao que está sendo lançado. Essa diferença deve sempre ser monitorada e respeitar o limite de **0,60%** do saldo escritural do tanque. Se ultrapassado, deve-se investigar possíveis causas, como vazamentos ou erros de medição.