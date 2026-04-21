---
title: PIX [Venda]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/73400321
---

# PIX [Venda]

16truenonelisttrue

PIX
===

O **Módulo de PIX de Vendas** é utilizado para consultar, inserir, modificar e excluir lançamentos de pagamentos via PIX, garantindo que todos estejam corretamente registrados e conciliados com a prestação de contas.

A conferência desses lançamentos é fundamental para assegurar que os dados financeiros estejam corretos, evitando inconsistências nos relatórios.

Existem duas maneiras de acessar o módulo de PIX:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os lançamentos.
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > PIX

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a prestação de contas, clique no botão respectivo a finalizadora () para ser direcionado ao módulo de PIX.
    
*   Esse atalho facilita o acesso às transações da prestação de contas que está sendo conferida.
    

Consulta de PIX
---------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem das transações via PIX lançadas, tendo como objetivo principal garantir a **conferência precisa dos lançamentos** para evitar falhas ou duplicidades. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > PIX**, a tela de listagem das transações via PIX apresenta as seguintes características:

Tela inicial módulo de PIX (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtros como `Turno` e `Operador` estarão configurados para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de PIX. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data` e `Data Emissão`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de PIX por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de PIX (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas`**,** `Turno` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de PIX. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Data Emissão`, `Turno` e `Operador` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de PIX, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `PDV`: Permite selecionar em qual Ponto de Venda (PDV) as transações via PIX foram lançadas. Se a opção padrão **Todos** for mantida, não haverá restrição quanto ao PDV.
    
*   `Caixas Venda`: Permite selecionar o(s) caixa(s) em que as transações via PIX foram lançadas. Se a opção padrão **Todos** for mantida, a pesquisa abrangerá todos os caixas disponíveis. Ao clicar no filtro, será apresentada uma tela para selecionar o(s) caixa(s) desejado(s).
    

Tela para filtrar caixas

É necessário que os campos `Data Inicial` e `Data Final` estejam preenchidos.

*   `Data Utilizada`: Permite escolher o critério de data a ser considerado na consulta.
    
    *   `Data do Caixa`: Data em que o caixa foi aberto.
        
    *   `Data de Emissão`: Data em que o PIX foi emitido.
        
    *   `Data de Vencimento`: Data em que está previsto o recebimento do PIX.
        
    *   `Data de Crédito`: Data em que o PIX foi creditado na conta bancária.
        
*   `Conciliação`: Campo referente ao módulo de Conciliação de Cartões, utilizado por empresas que realizam a conciliação de PIX. Permite filtrar e identificar a **situação das transações**, possibilitando a conferência entre os valores registrados no sistema e os efetivamente recebidos.
    
    *   `Não Efetuada`: Pix ainda não conciliados.
        
    *   `Enviado`: Pix com status de enviado para a conciliadora.
        
    *   `Conciliado`: Exibe os lançamentos que foram conciliados no modulo de conciliação de cartões.
        
    *   `Creditado`: Pix conciliados pelo extrato de pagamentos.
        

Se a opção **Todos** for mantida, a pesquisa abrangerá todas as situações de conciliação.

*   `Baixa`: Neste campo é indicada a situação do Pix em relação à baixa.
    
    *   `Pendentes`: Filtra somente os Pix com baixa ainda não realizada.
        
    *   `Creditados`: Filtra apenas os Pix que já foram recebidos.
        
*   `Fatura`:
    

*   `Autorização`: Filtra o PIX específico de acordo com o número autorização indicado.
    
*   `Administradora`: Permite filtrar os lançamentos de acordo com a administradora do PIX. É útil quando se deseja visualizar todas as transações lançadas de uma administradora específica. Ao clicar no filtro, será apresentada uma tela para seleção da(s) administradora(s) desejadas.
    

Tela para filtrar administradoras

*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar as transações, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    
*   Documento Fiscal
    
*   `Listagem`: Define o comportamento de exibição da listagem dos Pix.
    
    *   `Paginada`: A listagem será exibida com paginação tradicional, apresentando a navegação entre as páginas.
        
    *   `Contínua`: A listagem será exibida de forma contínua, permitindo visualização direta pela barra de rolagem.
        
*   `Qtd. Registros`: Define a quantidade de registros exibidos por página na listagem. Este campo é habilitado somente quando o tipo de listagem estiver configurado como `Paginada`, permitindo informar no mínimo 10 e no máximo 100 registros por página.
    

Após definir os filtros, clique no botão . A listagem de transações via PIX será exibida conforme os critérios de busca.

Conferência de PIX
------------------

A conferência dos transações via PIX é um passo crucial para garantir que os valores registrados no sistema estejam corretos e correspondam às transações reais realizadas no ponto de venda. Para realizar essa conferência, siga os passos abaixo:

Acesse o **Módulo de PIX**.

Aplique os filtros necessários para localizar os lançamentos que precisam ser conferidos, como `Data`, `Turno` e `Operador`. Esses filtros permitem uma busca mais precisa e focada nos lançamentos referentes ao movimento que está sendo analisado.

Após aplicar os filtros, clique em para atualizar a listagem das transações via PIX. As seguintes verificações devem ser feitas para garantir que as transações estão corretas:

*   **Lançamentos no Sistema**: Verifique se todos os documentos relacionados a pagamentos via **PIX** foram corretamente lançados no sistema, conforme os comprovantes físicos ou digitais das vendas.
    
*   **Lançamentos Indevidos**: Certifique-se de que não existam **lançamentos indevidos** que não pertencem ao movimento ou caixa sendo conferido.
    
*   **Verificação dos Dados**: Certifique-se de que os seguintes dados estejam corretamente preenchidos para cada transação:
    
    *   `Valor da Transação`: Confirme que o valor registrado no sistema corresponde ao valor real da transação.
        
    *   `Administradora`: Verifique se a administradora correta está indicada no lançamento.
        
    *   `Operador`: Assegure-se de que o operador responsável pela venda está corretamente identificado.
        
*   A conferência de todas essas informações deve ser realizada comparando os valores dos lançamentos no sistema com os **extratos bancários**. Essa verificação é essencial para assegurar que os lançamentos estão corretos e não há divergências entre o sistema e os relatórios do banco.
    

Inclusão de PIX
---------------

Durante o processo de conferência, se for identificado que algum lançamento via PIX está faltando, siga os passos abaixo para incluir o lançamento manualmente:

Acesse o **Módulo de PIX**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo lançamento.

A seguinte tela será apresentada:

Tela para inclusão de novo PIX

Preencha os campos com as informações referentes a transação via PIX:

*   `Empresa`: Selecione a empresa vinculada à transação.
    
*   `Data`: Informe a data da prestação em que a transação constará.
    
*   `Turno`: Selecione o turno do caixa.
    
*   `PDV`: Indique o Ponto de Venda (PDV) onde o PIX foi lançado.
    

Tela para seleção de PDV

*   `Caixa Venda`: Indique o caixa de venda pertencente ao PDV ao qual o PIX será vinculado.
    

Tela para seleção de caixa de venda

*   `Operador`: Selecione o operador que realizou a transação.
    

Tela para seleção de operador

*   `Venda`: Número de identificação da venda. Ao clicar no campo, será apresentada a seguinte tela para facilitar a busca e seleção da mesma:
    

Tela para seleção de venda

Utilize os filtros disponíveis para localizar a venda desejada com mais precisão. Após localizar a venda correta, selecione-a na listagem.

:note:atlassian-note#B3D4FF

**Observação**: O preenchimento desse campo é opcional.

*   `Data Emissão`: Data da emissão do pagamento via PIX.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia PIX1800

Nesta guia, devem ser preenchidas as informações específicas relacionadas à transação via PIX:

*   `Administradora`: Selecione a administradora responsável pela transação. A escolha da administradora influencia em outras informações do registro, como as taxas aplicáveis.
    
*   `Código da Fatura`: Código da fatura à qual o lançamento PIX está vinculado. A ausência do código de vinculo indica que a baixa do PIX ainda não foi realizada.
    
*   `Conciliação`: Mostra o status da conciliação feita através do modulo de conciliação de cartões.
    
*   `Finalidade`: Preenchido automaticamente como **Pagamento**, indicando que o valor corresponde a uma operação de compra. Este campo é padrão e não possibilita alteração.
    
*   `Conectividade`: Definido automaticamente como **POS** quando lançado manualmente.
    

No sistema, as transações via **PIX** podem ser realizadas de **três** maneiras, e cada uma delas define como o campo `Conectividade` será preenchido, seja com **POS** ou **TEF**, facilitando a identificação da forma como a operação foi realizada:

*   **PIX Avulso (POS)**:
    
    *   Esse método ocorre fora do sistema, com o cliente efetuando o pagamento por meio de uma maquineta de cartão sem integração com o sistema, um QR Code fixo impresso, ou uma chave PIX cadastrada pelo posto. Após o pagamento, é necessário registrar manualmente a transação no sistema.
        
    *   A `Conectividade` será preenchida como **POS**, indicando que o processo foi manual e sem integração direta.
        
*   **PIX Integrado a API (TEF)**:
    
    *   Nesse caso, o sistema é integrado diretamente com adquirentes específicas, como **Fixpay** e **Shipay**. O QR Code para pagamento é gerado automaticamente no PDV durante a venda, permitindo ao cliente realizar o pagamento no momento da venda. Todo o processo de pagamento e confirmação é automatizado via API, garantindo que a venda seja registrada com precisão.
        
    *   A `Conectividade` será preenchida como **TEF**, indicando que o processo foi realizado de forma automatizada e integrada.
        
*   **PIX Integrado TEF (TEF)**:
    
    *   Essa modalidade utiliza o Pinpad integrado ao PDV ou o PDV Móvel. O QR Code é gerado diretamente nesses equipamentos no momento da venda, e o pagamento é automaticamente registrado no sistema. Esse método garante maior precisão e agilidade, eliminando a necessidade de inserções manuais e reduzindo o risco de erros.
        
    *   A `Conectividade` será preenchida como **TEF**, indicando que o processo foi realizado de forma automatizada e integrada.
        

*   `Valor (R$)`: Informe o valor total da transação realizada.
    

:note:atlassian-note#B3D4FF

**Observação**: Caso o campo `Venda` seja indicado, o valor do recebimento PIX não pode ser superior ao total da venda, devendo ser igual ou inferior a este.

*   `Autorização`: Insira o número de autorização da transação fornecido no momento da aprovação do pagamento. Esse número é essencial para garantir que a transação foi devidamente autorizada pela administradora e pode ser utilizado para rastrear a transação.
    
*   `Cliente`: O cliente responsável pela transação será preenchido como **CLIENTE PADRÃO**, a menos que haja a necessidade de identificação específica. Esse campo pode ser alterado, conforme o cadastro de clientes do sistema.
    

Guia RECEBIMENTO1800

Esta guia exibe informações detalhadas sobre as taxas associadas à transação. Os campos são preenchidos automaticamente, com base nas informações cadastradas da administradora selecionada na guia **PIX**.

*   `Taxa Contratada Valor (R$)`: Valor da taxa acordada entre o estabelecimento e os bancos para a transação.
    
*   `Taxa Contratada Percentual (%)`: Percentual da taxa contratada sobre o valor da transação.
    
*   `Taxa Em Espécie`: Valor fixo cobrado pela adquirente por cada transação realizada. Esta taxa é aplicada independentemente do valor da venda e deve ser somada à Taxa Administrativa (%) para cálculo da **taxa total** de cada transação. É utilizada, por exemplo, em administradoras como a **GoodCard**, que aplicam tanto a taxa percentual quanto a taxa fixa por transação.
    
    *   **Exemplo de cálculo:**
        
        *   Transação: R$ 50,00
            
        *   Taxa administrativa (%): 1% → R$ 0,50
            
        *   Valor em Espécie (R$): R$ 2,00
            
        *   **Taxa total cobrada**: R$ 2,50
            
*   `Conciliação`: Mostra a situação do lançamento Pix.
    
    *   `Não Efetuada`: Pix ainda não conciliado.
        
    *   `Enviado`: Pix com status de enviado para a conciliadora.
        
    *   `Conciliado`: Pix conciliado.
        
    *   `Creditado`: Pix conciliado pelo extrato de pagamento.
        

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do lançamento no sistema.

Modificação de PIX
------------------

Caso seja identificado algum erro em um lançamento via PIX durante o processo de conferência, como valor incorreto, data errada ou administradora diferente, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de PIX**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente à transação que será modificada.

A seguinte tela será apresentada:

Tela para edição de um lançamento via PIX

Realize as correções necessárias nos campos, como:

*   `Administradora`: Selecione a administradora correta para a transação.
    
*   `Autorização`: Corrija o número de autorização.
    
*   `Valor (R$)`: Atualize o valor da transação, conforme necessário.
    

:note:atlassian-note#B3D4FF

**Observação**: O campo `Venda` pode ser alterado apenas para um valor **menor** que o valor da venda vinculada ao lançamento. Caso o valor precise ser alterado para um valor superior ao da venda atual, podem ser realizadas duas operações. Clique no ícone do campo **Venda**. A seguinte tela será apresentada:

Tela para seleção de venda

1.  Utilize os filtros disponíveis para localizar uma venda com valor igual ou superior ao novo valor desejado. Após encontrar, selecione-a na listagem.
    
2.  Ou clique no botão para desvincular a venda do lançamento.
    

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de PIX
---------------

Caso seja identificado algum lançamento via PIX que esteja **duplicado** ou **incorreto** durante o processo de conferência, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de PIX**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

A seguinte tela será apresentada:

Tela para confirmação da exclusão

Clique no botão para confirmar a exclusão da transação. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.

:note:atlassian-note#B3D4FF

**Observação**: O ícone só estará disponível quando a transação PIX ainda não tiver sido baixada. Caso o lançamento já tenha sido baixado, será necessário realizar o estorno para habilitar a exclusão.