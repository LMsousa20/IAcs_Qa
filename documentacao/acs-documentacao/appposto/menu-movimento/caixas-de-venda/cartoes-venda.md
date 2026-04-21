---
title: Cartões [Venda]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/73039876
---

# Cartões [Venda]

16truenonelisttrue

Cartões
=======

O **Módulo de Cartões de Vendas** é utilizado para consultar, inserir, modificar e excluir lançamentos de pagamentos com cartões de crédito, débito e pagamento de frete das movimentações do caixa durante o turno de trabalho dos operadores, garantindo que todos estejam corretamente registrados e conciliados com a prestação de contas.

A conferência desses lançamentos é fundamental para assegurar que os dados financeiros estejam corretos, evitando inconsistências nos relatórios.

Existem duas maneiras de acessar o módulo de cartões:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os tipos de cartões (crédito, débito e pagamento de frete).
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > Cartões

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a Prestação de Contas, clique no botão respectivo a finalizadora (, ou ) para ser direcionado ao módulo de cartões daquele tipo selecionado.
    
*   Esse atalho facilita o acesso às transações da prestação de contas que está sendo conferida.
    

Consulta de cartões
-------------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos cartões lançados, tendo como objetivo principal garantir a **conferência precisa dos lançamentos** para evitar falhas ou duplicidades. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Cartões**, a tela de listagem dos cartões apresenta as seguintes características:

Tela inicial módulo de cartões (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtros como `Turno`, `Operador` e `Tipo` de cartão estarão configurados para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de cartão. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data` e `Data Emissão`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de cartões por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de cartões (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas`, `Turno` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Filtro `Tipo` de cartão: Será filtrado de acordo com a finalizadora (, ou ) selecionada na prestação.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de cartão. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Data Emissão`, `Turno` e `Operador` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de cartões, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `PDV`: Permite selecionar em qual Ponto de Venda (PDV) os cartões foram lançados. Se a opção padrão **Todos** for mantida, não haverá restrição quanto ao PDV.
    
*   `Caixas Venda`: Permite selecionar o(s) caixa(s) em que os cartões foram lançados. Se a opção padrão **Todos** for mantida, a pesquisa abrangerá todos os caixas disponíveis. Ao clicar no filtro, será apresentada uma tela para selecionar o(s) caixa(s) desejado(s).
    

Tela para filtrar caixas

É necessário que os campos `Data Inicial` e `Data Final` estejam preenchidos.

*   `Data Utilizada`: Permite escolher o critério de data a ser considerado na consulta.
    
    *   `Data do Caixa`: Data em que o caixa foi aberto.
        
    *   `Data de Emissão`: Data em que o cartão foi emitido.
        
    *   `Data de Vencimento`: Data em que está previsto o recebimento do cartão.
        
    *   `Data de Crédito`: Data em que o cartão foi creditado na conta bancária.
        
*   `Administradora`: Permite filtrar os lançamentos de acordo com a administradora do cartão. É útil quando se deseja visualizar todos os cartões lançados de uma administradora específica. Ao clicar no filtro, será apresentada uma tela para seleção da(s) administradora(s) desejada(s).
    

Tela para filtrar administradoras

Mantendo a opção **Todos**, a pesquisa incluirá lançamentos de todas as administradoras.

*   `Conciliação`: Para empresas que trabalham com conciliação de cartões, este filtro permite indicar a situação dos cartões.
    
    *   `Não Efetuada`: Cartões ainda não conciliados.
        
    *   `Conciliados`: Cartões conciliados (completamente ou com divergência).
        
    *   `Enviados`: Cartões com status de enviado para a conciliadora.
        
    *   `Creditados`: Cartões conciliados pelo extrato de pagamentos.
        

Se a opção **Todos** for mantida, a pesquisa abrangerá todas as situações de conciliação.

*   `Baixa`: Neste campo, é indicada a situação do cartão em relação à baixa, que se refere ao crédito do valor na conta bancária da empresa.
    
    *   `Pendentes`: Filtra somente os cartões com baixa ainda não realizada.
        
    *   `Creditados`: Filtra apenas os cartões que já foram recebidos.
        

Se a opção **Todos** for mantida, a pesquisa incluirá todas as situações, independentemente de já terem sido creditados ou não.

*   `Fatura`: Filtra os cartões vinculados a fatura de cartões indicada.
    
*   `Lote`: Filtra os cartões que possuam o mesmo número de lote.
    
*   `NSU` e `Autorização`: Filtra o cartão específico de acordo com o número de NSU e autorização indicados.
    
*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar os cartões, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    
*   `Documento Fiscal`: Filtra o(s) cartão(ões) de acordo com o número do documento fiscal vinculado.
    
*   `Listagem`: Define o comportamento de exibição da listagem dos cartões.
    
    *   `Paginada`: A listagem será exibida com paginação tradicional, apresentando a navegação entre as páginas.
        
    *   `Contínua`: A listagem será exibida de forma contínua, permitindo visualização direta pela barra de rolagem.
        
*   `Qtd. Registros`: Define a quantidade de registros exibidos por página na listagem. Este campo é habilitado somente quando o tipo de listagem estiver configurado como`Paginada`, permitindo informar no mínimo 10 e no máximo 100 registros por página.
    

Após definir os filtros, clique no botão . A listagem de cartões será exibida conforme os critérios de busca.

Conferência de cartões
----------------------

A conferência dos lançamentos de cartões é um passo crucial para garantir que os valores registrados no sistema estejam corretos e correspondam às transações reais realizadas no ponto de venda. Para realizar essa conferência, siga os passos abaixo:

Acesse o **Módulo de Cartões**.

Aplique os filtros necessários para localizar os lançamentos que precisam ser conferidos, como Data, Turno, Operador e Tipo de Cartão. Esses filtros permitem uma busca mais precisa e focada nos cartões referentes ao movimento que está sendo analisado.

Após aplicar os filtros, clique em para atualizar a listagem dos lançamentos de cartões. As seguintes verificações devem ser feitas para garantir que as transações estão corretas:

*   **Lançamentos de Cartões**: Confirme se todos os cartões foram devidamente lançados no sistema, conforme os comprovantes físicos ou digitais das vendas.
    
*   **Lançamentos Indevidos**: Verifique se há lançamentos que não pertencem ao movimento ou caixa sendo conferido. Isso inclui cartões de outros caixas ou transações que não correspondam a uma venda efetivamente realizada.
    
*   **Comprovantes de Venda**: Assegure-se de que o comprovante de venda do cartão seja a via do estabelecimento e não uma reimpressão (via do cliente) ou comprovante de cancelamento.
    
*   **Verificação dos Dados**: Certifique-se de que os seguintes dados estejam corretamente preenchidos para cada transação:
    
    *   `Valor`: Verifique se o valor lançado corresponde ao valor real da venda.
        
    *   `Administradora`: Confirme se a administradora de cartões está correta, de acordo com o comprovante da venda.
        
    *   `NSU` e `Autorização`: Esses números devem coincidir com os registrados no comprovante do cartão.
        
    *   `Operador`: O operador que realizou a venda deve estar corretamente identificado.
        
*   A conferência de todas essas informações deve ser realizada comparando os valores dos lançamentos no sistema com os **extratos das administradoras de cartões**. Essa verificação é essencial para assegurar que os lançamentos estão corretos e não há divergências entre o sistema e os relatórios das operadoras.
    

:note:atlassian-note#B3D4FF

**Observação**: Todos os passos descritos anteriormente para a verificação de cartões podem ser realizados de forma mais ágil e eficiente utilizando o módulo de **Conciliação de Cartões**. Esse módulo automatiza parte das verificações, facilitando a conferência de lançamentos, comparando diretamente os registros do sistema com os extratos das administradoras de cartões, e destacando possíveis inconsistências.

Inclusão de cartões
-------------------

Durante o processo de conferência, se for identificado que algum lançamento de cartão está faltando, siga os passos abaixo para incluir o lançamento manualmente:

Acesse o **Módulo de Cartões**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo lançamento.

A seguinte tela será apresentada:

Tela para inclusão de novo cartão

Preencha os campos com as informações referentes ao cartão:

*   `Empresa`: Selecione a empresa vinculada à transação.
    
*   `Data`: Informe a data da prestação em que a transação constará.
    
*   `Turno`: Selecione o turno do caixa.
    
*   `PDV`: Indique o Ponto de Venda (PDV) onde o cartão foi lançado.
    

Tela para seleção de PDV

*   `Caixa Venda`: Indique o caixa de venda pertencente ao PDV ao qual o cartão será vinculado.
    

Tela para seleção de caixa de venda

*   `Operador`: Selecione o operador que realizou a transação.
    

Tela para seleção de operador

*   `Venda`: Número de identificação da venda. Ao clicar no campo, será apresentada a seguinte tela para facilitar a busca e seleção da mesma:
    

Tela para seleção de venda

Utilize os filtros disponíveis para localizar a venda desejada com mais precisão. Após localizar a venda correta, selecione-a na listagem.

:note:atlassian-note#B3D4FF

**Observação**: O preenchimento desse campo é opcional.

*   `Data Emissão`: Data da emissão do cartão.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia CARTÃO1800

Nesta guia, devem ser preenchidas as informações específicas relacionadas à transação do cartão:

*   `Administradora`: Selecione a administradora responsável pela transação (ex.: Visa Crédito, Mastercard Débito). A escolha da administradora influencia em outras informações do cartão, como o tipo e as taxas aplicáveis.
    
*   `Tipo`: Este campo será preenchido automaticamente de acordo com a administradora selecionada e pode indicar se a transação é de **crédito**, **débito** ou **frete eletrônico.**
    
*   `Finalidade`: Preenchido automaticamente como **Pagamento**, indicando que o valor corresponde a uma operação de compra. Este campo é padrão e não possibilita alteração.
    
*   `Conectividade`: Definido automaticamente como **POS** quando lançado manualmente.
    

No sistema, as transações com **Cartões** podem ser realizadas de **duas** maneiras, e cada uma delas define como o campo **Conectividade** será preenchido, facilitando a identificação da forma como a operação foi realizada:

*   **Transação via POS**: Neste método, o pagamento é registrado diretamente no terminal POS, sem vínculo automático com o sistema de PDV. Isso exige que o operador insira manualmente os dados da transação no sistema, uma vez que a comunicação entre o terminal e o sistema não ocorre de forma integrada. Esse processo manual aumenta a necessidade de atenção ao registrar informações como valor, administradora, NSU e autorização.
    
*   **Transação via TEF**: A transação via TEF é realizada de forma integrada ao sistema de PDV, conectando o registro da venda com a administradora do cartão. Isso permite que as aprovações das transações e a emissão do cupom fiscal sejam feitas diretamente no sistema, eliminando a necessidade de lançamentos manuais. Todas as informações relevantes, como administradora, valor da venda, NSU e autorização, são capturadas automaticamente, reduzindo a possibilidade de erros.
    

**Observação**: A utilização do TEF integrado ou do PDV Móvel garante que as transações com cartão sejam processadas com rapidez e precisão. Além de evitar falhas operacionais, como a falta de dados essenciais ou a indicação incorreta da forma de pagamento, o sistema assegura que todas as informações necessárias para a conferência e conciliação estejam devidamente registradas.

*   `Valor (R$)`: Informe o valor total da transação realizada com o cartão.
    

:note:atlassian-note#B3D4FF

**Observação**: Caso o campo `Venda` seja indicado, o valor do cartão não pode ser superior ao total da venda, devendo ser igual ou inferior a este.

*   `Parcela`: Preenchido automaticamente como **1**. Se for uma transação parcelada, será atualizado automaticamente após a indicação do campo Qtd. Parcelas.
    
*   `Qtd. Parcelas`: Indica a quantidade de parcelas para a transação. Este campo só será editável após a inclusão do cartão. Caso seja necessário modificar, utilize o ícone para ajuste.
    
*   `Cliente`: O cliente responsável pela transação será preenchido como **CLIENTE PADRÃO**, a menos que haja a necessidade de identificação específica. Esse campo pode ser alterado, conforme o cadastro de clientes do sistema.
    

Guia TRANSAÇÃO1800

Nesta guia podem ser inseridas informações adicionais e técnicas sobre a transação do cartão. Esses dados são importantes para a correta identificação e fundamentais para a conciliação de cartões:

*   `Lote`: Informe o número do lote ao qual a transação pertence. O lote é uma sequência de transações agrupadas que podem ser processadas juntas pela administradora de cartões.
    
*   `NSU da Operadora`: Preencha com o **Número Sequencial Único** gerado pela operadora do cartão. Esse número é fornecido pela administradora de cartões e serve para identificar unicamente cada transação dentro da operadora. O NSU da operadora é fundamental para a conciliação de transações.
    
*   `NSU do TEF`: Caso a transação tenha sido realizada via TEF, preencha este campo com o NSU gerado pelo terminal. O **NSU do TEF** também é um identificador único, mas nesse caso, ele é gerado pelo sistema do terminal de pagamento.
    
*   `Autorização`: Insira o número de autorização da transação fornecido no momento da aprovação do pagamento. Esse número é essencial para garantir que a transação foi devidamente autorizada pela administradora e pode ser utilizado para rastrear a transação junto à operadora de cartões.
    

Guia RECEBIMENTO1800

Esta guia exibe informações detalhadas sobre o recebimento futuro de valores e as taxas associadas à transação com o cartão. Os campos são preenchidos automaticamente, com base nas informações cadastradas da administradora selecionada na guia **CARTÃO**.

*   `Data do Depósito`: Mostra a data em que a transação foi realizada. Esta data corresponde à `Data de Emissão`.
    
*   Data do Repasse: Refere-se à data em que o valor líquido da transação será repassado ao estabelecimento. Esta data é calculada com base no prazo de repasse estipulado no cadastro da administradora.
    
*   `Data do Crédito`: Indica a data em que o valor da transação foi efetivamente creditado na conta do estabelecimento. No momento da inclusão, este campo ficará em branco e será preenchido quando o crédito for realizado.
    
*   `Código da Fatura`: Exibe o número da fatura à qual o cartão foi vinculado após sua baixa. No momento da inclusão do cartão, este campo também ficará em branco.
    
*   `Conciliação`: Mostra o status da conciliação da transação. Inicialmente, o campo é preenchido com Não Efetuada, e será atualizado conforme o processo de conciliação de cartões avançar.
    
*   `Taxa Contratada Valor (R$)`: Valor da taxa acordada entre o estabelecimento e a administradora de cartões para a transação.
    
*   `Taxa Contratada Percentual (%)`: Percentual da taxa contratada sobre o valor da transação.
    
*   `Taxa em espécie`: Valor fixo cobrado pela adquirente por cada transação realizada. Esta taxa é aplicada independentemente do valor da venda e deve ser somada à Taxa Administrativa (%) para cálculo da **taxa total** de cada transação. É utilizada, por exemplo, em administradoras como a **GoodCard**, que aplicam tanto a taxa percentual quanto a taxa fixa por transação.
    
    *   **Exemplo de cálculo:**
        
        *   Transação: R$ 50,00
            
        *   Taxa administrativa (%): 1% → R$ 0,50
            
        *   Valor em Espécie (R$): R$ 2,00
            
        *   **Taxa total cobrada**: R$ 2,50
            
*   `Taxa Conciliada Valor (R$)`: Valor da taxa conciliada, ou seja, a taxa efetiva informada pela administradora durante o processo de conciliação.
    
*   `Taxa Conciliada Percentual (%)`: Percentual da taxa conciliada sobre o valor da transação.
    
*   `Taxa Antecipação Valor (R$)`: Valor da taxa cobrada pela administradora em caso de antecipação de recebíveis. Este campo será preenchido apenas quando houver a utilização de conciliação com valores de antecipação.
    
*   `Taxa Antecipação Percentual (%)`: Percentual cobrado pela administradora referente à antecipação de recebíveis. Assim como o valor, é preenchido somente quando houver conciliação com antecipação.
    
*   `Taxa Total Valor (R$)`: Soma dos valores de todas as taxas (conciliadas e antecipadas) associadas à transação.
    
*   `Taxa Total Percentual (%)`: Soma dos percentuais de todas as taxas conciliadas e antecipadas.
    

Guia DADOS PARA PAGAMENTO ELETRÔNICO DE FRETE (PEF)1800

No caso de lançamentos de cartões do tipo **Frete Eletrônico**, esta guia permite o preenchimento de campos adicionais específicos para o processo de pagamento eletrônico de frete.

*   `Motorista`: Refere-se ao cadastro de um cliente identificado como motorista. Para que o campo seja preenchido, o cliente deve estar cadastrado como **Pessoa Física** na guia **Alterar Cliente** e o campo **Motorista** como **Sim** na guia de **Identificação**.
    
*   `Cartão`: Insira o número do cartão informado no comprovante da transação, gerado pela maquineta de cartão.
    
*   `Venda`: Número da transação que aparece no comprovante emitido pela maquineta de cartão. Esse campo é utilizado para identificar a venda relacionada ao frete.
    
*   `Troco (R$)`: Informe o valor do troco, caso o valor da transação seja maior do que o valor da venda. Este campo é útil quando há sobra no pagamento e é necessário devolver troco ao motorista.
    

:note:atlassian-note#B3D4FF

**Observação**: Esses campos não têm preenchimento obrigatório, exceto se em `Menu Opções > Submenu PARÂMETROS > Opção Sistema > Box Requisitos > Guia CARTÃO`, os campos `Numero do cartão (PEF)`, `Numero da venda (PEF)` e `Motorista (PEF)` estejam selecionados.

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do lançamento no sistema.

Modificação de cartões
----------------------

Caso seja identificado algum erro em um lançamento de cartão durante o processo de conferência, como valor incorreto, data errada ou administradora diferente, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de Cartões**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente à transação que será modificada.

A seguinte tela será apresentada:

Tela para edição de um lançamento de cartão

Realize as correções necessárias nos campos, como:

*   `Administradora`: Selecione a administradora correta para a transação.
    
*   `NSU`: Altere o Número Sequencial Único, se necessário.
    
*   `Autorização`: Corrija o número de autorização.
    
*   `Valor (R$)`: Atualize o valor da transação, conforme necessário.
    

:note:atlassian-note#B3D4FF

**Observação**: O campo `Valor (R$)` pode ser alterado apenas para um valor **menor** que o valor da venda vinculada ao lançamento. Caso o valor precise ser alterado para um valor superior ao da venda atual, podem ser realizadas duas operações. Clique no ícone do campo `Venda`. A seguinte tela será apresentada:

Tela para seleção de venda

1.  Utilize os filtros disponíveis para localizar uma venda com valor igual ou superior ao novo valor desejado. Após encontrar, selecione-a na listagem.
    
2.  Ou clique no botão para desvincular a venda do lançamento.
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de cartões
-------------------

Caso seja identificado algum lançamento de cartão que esteja **duplicado** ou **incorreto** durante o processo de conferência, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de Cartões**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

A seguinte tela será apresentada:

Tela para confirmação da exclusão

Clique no botão para confirmar a exclusão da transação. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.

:note:atlassian-note#B3D4FF

**Observação**: O ícone só fica disponível quando o cartão ainda não foi baixado ou conciliado. Se o cartão já tiver sido faturado ou já tiver sido conciliado, será necessário efetuar o estorno ou desfazer a conciliação, para habilitar a exclusão.