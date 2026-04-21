---
title: Prestação de Contas - Vendas
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/66322488
---

# Prestação de Contas - Vendas

16truenonelisttrue

Prestação de Contas - Vendas
============================

O módulo de **Prestação de Contas dos Caixas de Venda** é essencial para a gestão financeira, permitindo o controle detalhado das transações realizadas pelos funcionários. Esse módulo registra e confere todas as movimentações de caixa durante o turno de trabalho, como entradas e saídas de valores, vendas, despesas e retiradas. Ele garante a transparência e a integridade das operações, permitindo ao administrador verificar se os valores informados correspondem ao saldo real disponível no caixa.

Este processo é fundamental para:

*   **Transparência financeira**: Assegura que todas as operações de caixa estejam devidamente registradas.
    
*   **Controle de inconsistências**: Detecta eventuais divergências entre o valor registrado no sistema e o montante físico presente no caixa.
    
*   **Monitoramento de funcionários**: Acompanha o desempenho e a responsabilidade de cada colaborador em relação ao caixa.
    

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > Prestação de Contas

Será apresentada a seguinte tela:

Tela geral do módulo de prestação de contas dos caixas de venda

A imagem acima apresenta uma visão geral dos **Caixas de Venda** separados por operador, turno e data, facilitando o processo de conferência individual de cada movimentação.

Na parte superior da tela, estão disponíveis campos de filtros que permitem refinar a busca pelos caixas, agilizando a localização de informações específicas de acordo com critérios predefinidos:

*   **Empresa**: Selecione o nome da empresa cujos caixas serão listados. Este filtro permite a visualização dos caixas de uma empresa diferente da que está atualmente logada, sem a necessidade de sair e entrar em cada empresa separadamente.
    
*   **Data Inicial e Data Final**: Define o intervalo de datas para listar os caixas que correspondem ao período desejado. Recurso útil para realizar conferências específicas por períodos.
    
*   **Turno**: Filtra os caixas conforme o turno em que foram abertos, permitindo a análise de caixas de um período específico do dia.
    
*   **Operador**: Selecione o nome do operador responsável pelo caixa que deseja conferir. Esse filtro é útil para revisar as operações realizadas por determinado funcionário.
    

:note:atlassian-note#B3D4FF

**Observação**: A maneira em que as prestações de contas são criadas está diretamente ligada à configuração realizada no **Menu Cadastro >** **Submenu EMPRESA > Opção Pontos de Venda > Box Caixa**.

*   Se a opção **Inclui frentista automaticamente no caixa** estiver marcada, o sistema criará uma prestação de contas para cada frentista que realizar pelo menos um abastecimento durante o turno. Dessa forma, cada frentista terá suas movimentações de vendas registradas separadamente, facilitando a conferência individual.
    
*   Caso a opção não esteja marcada, será criada apenas uma prestação de contas, centralizada no nome do operador que abriu o caixa. Todo o movimento financeiro ficará registrado nessa única prestação de contas, sem distinção por frentista.
    

Essa configuração é importante para definir como as movimentações serão tratadas e registradas no sistema, impactando diretamente a forma de controle e conferência dos valores.

*   **Situação**: Este filtro permite escolher entre visualizar **Todos** os caixas ou apenas aqueles que estão na situação **Liberados** (caixas que não estão Conferidos nem Bloqueados).
    

Após a aplicação dos filtros, clique no botão . Os caixas de venda serão exibidos na parte inferior da tela com informações detalhadas que facilitam a conferência de cada operador. As colunas apresentadas incluem:

*   **Data**: Exibe a data referente ao caixa em questão.
    
*   **Turno**: Indica o turno em que o caixa foi operado.
    
*   **Operador**: Mostra o nome do operador responsável pelo caixa durante o turno especificado.
    
*   **Caixa PDV**: Indica se o caixa está **Aberto** (ainda em uso) ou **Fechado** (encerrado e pronto para conferência).
    
*   **Conferido**: Mostra se o caixa já foi conferido (**Sim** ou **Não**). Caixas não conferidos devem ser revisados para garantir a precisão das operações.
    
*   **Bloqueado**: Indica se o caixa está **bloqueado**, ou seja, impossibilitado de ser conferido.
    
*   **Valor de Vendas**: Exibe o total das vendas registradas naquele caixa durante o turno.
    
*   **Resultado**: Apresenta o saldo final do caixa e o status, indicando se não houve divergências (**Certo**), se houve **Sobra** (quando o valor no caixa após a conferência é **maior** que o registrado), ou se houve **Falta** (quando o valor no caixa após a conferência é **menor** que o registrado).
    

* * *

Conferência dos caixas
----------------------

Para realizar a conferência de um caixa, localize-o na listagem. Clique no ícone ao lado do caixa correspondente para acessar a tela de conferência dos lançamentos.

Tela de conferência do caixa

Na tela de conferência, o sistema exibirá no topo as principais informações sobre o caixa, como **Empresa**, **Data**, **Turno**, **Operador**, **Situação (Conferido ou Não Conferido)** e **Modificação (Liberado ou Bloqueado)**.

:note:atlassian-note#B3D4FF

**Observação**: Se o caixa estiver com o status **bloqueado**, será necessário desbloqueá-lo para realizar a conferência. Para isso, clique no botão , localizado no canto superior direito da tela.

Caso o botão não esteja visível, verifique a seguinte configuração do sistema:

*   Acesse o **Menu Opções > Submenu PARÂMETROS > Opção Sistema** > **Box Caixa / Bonificação > Guia OPÇÕES** e habilite a opção **Bloquear caixa conferido**.
    

Essa configuração permite o bloqueio e desbloqueio de caixas conferidos, garantindo maior controle e segurança sobre o processo de conferência.

Guia RESUMO DE RECOLHIMENTO

A guia **Resumo de Recolhimento** tem como objetivo apresentar os valores recebidos no caixa, separados por finalizadora, facilitando o processo de conferência por parte do responsável. Este procedimento é essencial para garantir que os valores recolhidos estão de acordo com as vendas realizadas e as diferentes formas de pagamento aceitas, assegurando a exatidão do fechamento do caixa.

O processo de conferência consiste em verificar e informar os valores recebidos de cada finalizadora, garantindo que os dados no sistema reflitam com precisão a movimentação financeira real. Existem duas formas de inserir os valores, dependendo da finalizadora:

Finalizadoras com inserção direta

Essas finalizadoras exigem apenas que o valor conferido seja inserido no campo ao lado, com base no montante recebido. São elas:

*   **Dinheiro**: Valor recebido em espécie.
    
*   **Cheque Troco**: Valor de cheque dado como troco ao cliente, quando o valor do pagamento for maior que o dos produtos.
    
*   **Encargos**: Taxas cobradas sobre o valor do troco concedido ou pela efetuação de uma troca de título.
    
*   **Suprimentos**: Dinheiro adicionado ao caixa, geralmente para fornecer troco, podendo ser inserido na abertura do caixa ou durante o turno.
    
*   **Pagamento de Fornecedor**: Retirada de valores para o pagamento de fornecedores. Importante lembrar que este pagamento refere-se apenas à movimentação financeira no PDV, enquanto a nota fiscal deve ser processada separadamente no AppPosto.
    

Finalizadoras com detalhamento de transações

Para estas finalizadoras, a conferência exige que o responsável acesse a **opção** de cada finalizadora, que direciona para uma tela com todas as transações detalhadas da mesma. É importante que todos os valores sejam lançados corretamente para garantir uma conferência precisa:

:note:atlassian-note#B3D4FF

**Observação**: Todas as finalizadoras mencionadas abaixo são explicadas em detalhes em seus respectivos módulos. Esses módulos contêm orientações sobre como realizar a conferência, inserir, editar ou excluir lançamentos, caso necessário.

*   **Cheque à Vista**: Cheques recebidos que têm compensação imediata, ou seja, o valor será descontado da conta do cliente assim que o cheque for processado.
    
*   **Cheque a Prazo**: Cheques com compensação futura. O valor será debitado da conta do cliente em uma data posterior, conforme combinado no momento da venda.
    
*   **Depósito**: Lançamentos realizados diretamente no PDV. Esses valores são transferidos da conta Caixa para a conta bancária da empresa informada no momento do lançamento.
    
*   [**Cartão de Crédito**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/73039876/Cart+es#Confer%C3%AAncia-de-cart%C3%B5es): Pagamentos feitos por meio de cartão de crédito, onde o valor da compra será pago pelo cliente posteriormente à administradora do cartão.
    
*   [**Cartão de Débito**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/73039876/Cart+es#Confer%C3%AAncia-de-cart%C3%B5es): Pagamentos realizados via cartão de débito, onde o valor é imediatamente debitado da conta do cliente no momento da compra.
    
*   [**Frete Eletrônico**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/73039876/Cart+es#Confer%C3%AAncia-de-cart%C3%B5es): Pagamentos efetuados por cartão de frete eletrônico, comum em transportadoras e empresas de logística.
    
*   **Resgate**: Resgate de benefícios que foram previamente acumulados pelo cliente, usados para quitar parte ou o valor total da compra.
    
*   **Convênio**: Pagamentos realizados através de convênios firmados entre a empresa e seus clientes, onde o valor será faturado posteriormente.
    
*   **CTF (Controle de Frete)**: Funciona de maneira similar ao **Convênio**, mas com uma diferença importante: ele identifica que o abastecimento foi liberado por uma bomba específica. Esse controle permite que o posto gerencie de forma mais eficiente os abastecimentos realizados para a frota do cliente, garantindo que esses abastecimentos sejam rastreados com mais precisão.
    
*   **Vale Funcionário**: Possui três tipos principais de lançamentos, que devem ser monitorados durante a conferência:
    
    1.  **Adiantamento**: Refere-se a uma antecipação de parte do salário ou valor devido ao funcionário.
        
    2.  **Compra**: Valor de compras realizadas pelos funcionários no próprio estabelecimento, utilizando seu vale como forma de pagamento.
        
    3.  **Falta na Renda**: Refere-se a valores que o funcionário deveria ter em caixa e que estão faltando. Esse valor pode ser cobrado ou descontado do funcionário, conforme a política da empresa.
        
*   **Crédito Utilizado**: Valores de créditos gerados anteriormente para clientes e que foram utilizados para pagamento de uma venda atual.
    
*   **Crédito Emitido**: Crédito gerado para um cliente, geralmente em situações onde o pagamento da venda foi maior que o valor dos produtos adquiridos. Esse crédito pode ser utilizado em compras futuras.
    
*   **Carta Frete**: Pagamentos realizados através de carta frete, um meio de pagamento utilizado por transportadoras para pagar por combustíveis e serviços em postos.
    
*   **Carteira Digital**: Pagamentos realizados por meio de carteiras digitais, como aplicativos de pagamento (ex.: PicPay, MercadoPago, etc.), onde o valor é transferido eletronicamente.
    
*   **PIX**: Pagamentos realizados através do sistema PIX, uma forma de pagamento instantâneo entre contas bancárias no Brasil.
    
*   **Pagamento de Despesa**: Pagamentos realizados para cobrir despesas operacionais do posto, como compras de materiais ou contratação de serviços. Esses valores são retirados do caixa.
    

Colunas de informações

*   **Total**: Exibe o valor total das vendas até o momento do fechamento do turno.
    
*   **Sangria**: Mostra o valor total retirado (sangrado) do caixa durante o turno. Este valor não é subtraído do total da finalizadora, mas serve como referência da quantia total que foi retirada para cofres ou depósitos.
    

Finalização do processo

Ao final da conferência, todos os valores devem ter sido revisados e corrigidos, se necessário, assegurando que o caixa seja fechado corretamente e a prestação de contas do operador seja precisa. Este processo é fundamental para evitar discrepâncias e garantir o controle financeiro adequado.

Guia RESUMO DAS VENDAS

A guia **Resumo das Vendas** é uma área essencial no módulo de prestação de contas. Ela fornece um panorama detalhado dos valores movimentados no caixa, incluindo descontos aplicados, acréscimos e o total a receber. Abaixo está uma descrição de cada campo presente na guia:

*   **Total das Vendas:** Este campo apresenta o valor total das vendas realizadas no caixa selecionado. Ele reflete a soma de todas as transações de vendas, sem considerar os descontos ou acréscimos aplicados.
    
*   **Desconto de Balcão:** Este campo exibe o valor total dos descontos concedidos diretamente no balcão, no momento da venda. Esses descontos podem ser aplicados pelo operador do caixa conforme as políticas da empresa ou por campanhas promocionais.
    
*   **Desconto de Contrato:** Este campo exibe o valor total dos descontos aplicados às vendas realizadas para os clientes com base em contratos. O **Desconto de Contrato** refere-se a descontos pré-definidos em contratos com clientes, especialmente no caso de grandes volumes ou acordos comerciais especiais.
    
*   **Acréscimo de Contrato:** Este campo mostra os valores adicionais cobrados sobre vendas realizadas com base em contratos. Os acréscimos podem ocorrer devido a tarifas extras ou condições especiais previstas no contrato, como ajustes no preço por prazos de pagamento diferenciados.
    
*   **Valor a Receber:** Reflete a quantia líquida a ser recebida pelo estabelecimento após a aplicação de descontos e acréscimos. Ele é calculado subtraindo-se os descontos de balcão e contrato e adicionando os acréscimos de contrato.
    
*   **Total do Recolhimento:** Indica o valor total efetivamente recolhido no caixa após a conferência do caixa, considerando todas as formas de pagamento (dinheiro, cartão, PIX, convênio etc.). Esse valor é a soma de todas as transações líquidas realizadas durante o período.
    
*   **Resultado:** É o saldo final após a conferência, indicando se o caixa está com valores corretos (certo), se houve sobra (valores excedentes no caixa) ou falta (valores insuficientes). O sistema compara o **Total do Recolhimento** com o **Valor a Receber** para determinar se há alguma discrepância.
    

:info:atlassian-info#B3D4FF

**Conferência**: Verifique se o **resultado** está em conformidade com o valor total das transações. Caso haja sobra ou falta, identifique as causas e faça as devidas correções antes de finalizar o fechamento do caixa.

Guia RESUMO DAS SAÍDAS

A guia **Resumo das Saídas** oferece uma visão detalhada das retiradas de valores do caixa, essenciais para manter um controle preciso das transações de saída, como sangrias e pagamentos realizados durante o turno. Abaixo estão as descrições de cada campo presente na guia:

*   **Total das Sangrias:** Exibe o valor total retirado do caixa durante o período de operação do mesmo. A sangria é uma prática comum utilizada para retirar dinheiro em espécie do caixa, evitando que grandes quantidades se acumulem. Esse valor é normalmente guardado em cofres ou enviado ao banco para segurança.
    

Verifique se o total das sangrias foi devidamente registrado no sistema e corresponde ao valor efetivamente retirado do caixa.

*   **Total dos Pagamentos:** Apresenta o valor total dos pagamentos realizados pelo operador do caixa. Isso inclui:
    
    *   **Pagamentos de Fornecedor**: Valores pagos diretamente a fornecedores por meio do caixa. Estes pagamentos são geralmente usados para quitar compras imediatas ou acordos comerciais.
        
    *   **Pagamentos de Despesas**: Despesas operacionais do estabelecimento, como pagamento de contas de água, luz, ou outros custos correntes, retirados diretamente do caixa.
        

Certifique-se de que todos os pagamentos estão corretamente registrados no sistema e conferidos com os recibos ou comprovantes. É essencial que todos os pagamentos sejam documentados para evitar divergências no fechamento do caixa.

Guia RESUMO DAS VENDAS POR TIPO

A guia **Resumo das Vendas por Tipo** exibe uma separação detalhada das vendas realizadas no caixa de acordo com a natureza dos produtos vendidos. Essa divisão permite que o usuário identifique com clareza os valores provenientes das vendas de combustíveis e de itens diversos, facilitando a conferência e o controle de cada categoria de produto. Os valores destacados já consideram eventuais acréscimos e descontos aplicados nas vendas. A seguir estão as descrições dos campos presentes nesta guia:

*   **Valor em Combustível:** Este campo exibe o valor das vendas de **combustíveis** realizadas durante o período de operação do caixa. Inclui as vendas de gasolina, etanol, diesel e quaisquer outros combustíveis comercializados no estabelecimento. Verifique se o valor total corresponde ao montante de combustível vendido. Esse valor deve estar de acordo com as medições dos tanques de combustível e os registros das bombas.
    
*   **Valor em Diversos:** Este campo representa o valor total das vendas de **itens diversos**, como produtos de conveniência (bebidas, alimentos, produtos automotivos). O total deve refletir corretamente todas as vendas de itens que não são combustíveis. A conferência pode ser feita comparando o valor registrado com os relatórios de vendas do turno.
    

A prestação de contas deve ser realizada diariamente, no final de cada turno de trabalho. É recomendável que essa conferência seja feita sempre que houver uma mudança de responsável pelo caixa (troca de turno) ou no encerramento do dia. Isso evita a acumulação de inconsistências e permite identificar erros ou desvios de maneira rápida e eficaz.

Ao seguir esses passos regularmente, a empresa mantém um controle rigoroso sobre suas finanças, minimizando riscos e garantindo uma operação financeira saudável e transparente.