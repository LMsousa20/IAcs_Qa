---
title: Convênios [Venda]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/72515597
---

# Convênios [Venda]

16truenonelisttrue

Convênios
=========

O **Módulo de Convênios de Vendas** é utilizado para consultar, inserir, modificar e excluir lançamentos de vales de clientes, garantindo que todos estejam corretamente registrados na prestação de contas.

A conferência desses lançamentos é fundamental para assegurar a integridade e a precisão das transações realizadas a prazo ou com condições diferenciadas.

Existem duas maneiras de acessar o módulo de convênios:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os lançamentos.
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > Convênios

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a prestação de contas, clique no botão respectivo a finalizadora () para ser direcionado ao módulo de convênios.
    
*   Esse atalho facilita o acesso às transações da prestação de contas que está sendo conferida.
    

Consulta de convênios
---------------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos vales de cliente lançados, tendo como objetivo principal garantir a **conferência precisa dos lançamentos** para evitar falhas ou duplicidades. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Convênios**, a tela de listagem dos vales de cliente apresenta as seguintes características:

Tela inicial módulo de convênios (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtros como `Turno`, `Operador` e `Tipo` do cliente estarão configurados para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de convênio. Na tela que é apresentada ao clicar no botão, todos os campos estarão vazios para preenchimento manual, exceto `Empresa`, `Data` e `Data Emissão`.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de convênios por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de convênios (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas`, `Turno` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Filtro `Tipo do Cliente`: Será filtrado de acordo com a finalizadora ( ou ) selecionada na prestação.
    
*   Botão : Localizado no canto superior direito, permite criar um novo lançamento de vale de cliente. Na tela que é apresentada ao clicar no botão, os campos `Empresa`, `Data`, `Data Emissão`, `Turno` e `Operador` já vêm preenchidos com base nas informações da prestação, agilizando o processo de inclusão.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de convênios, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `PDV`: Permite selecionar em qual Ponto de Venda (PDV) os vales de cliente foram lançados. Se a opção padrão **Todos** for mantida, não haverá restrição quanto ao PDV.
    
*   `Caixa Venda`: Permite selecionar o(s) caixa(s) em que os vales de cliente foram lançados. Se a opção padrão **Todos** for mantida, a pesquisa abrangerá todos os caixas disponíveis. Ao clicar no filtro, será apresentada uma tela para selecionar o(s) caixa(s) desejado(s).
    

Tela para filtrar caixas

É necessário que os campos `Data Inicial` e `Data Final` estejam preenchidos.

*   `Cliente`: Nesse campo é selecionado o cliente para qual os vales foram lançados. É um recurso útil quando se deseja relacionar todos os vales lançados para um cliente específico. Se a opção padrão (**Todos**) for mantida, a pesquisa se dará em todos os clientes.
    
*   `Número do Vale`: Filtra o vale específico de acordo com o número do vale indicado.
    
*   `Número do Cupom`: Filtra o(s) vale(s) de acordo com o número do documento fiscal vinculado.
    
*   `Placa`: Filtra o(s) vale(s) de acordo com o número da placa indicada no momento do lançamento do vale.
    
*   `Fatura`: Filtra todos os vales vinculados a fatura indicada.
    
*   `Cobrança`: Neste campo, é indicado a situação do vale em relação à cobrança, que se refere ao processo de faturamento.
    
    *   `Faturados`: Filtra somente os vales já vinculados a uma fatura.
        
    *   `Não Faturados`: Filtra apenas os vales que ainda não foram vinculados a uma fatura.
        

Se a opção `Todos` for mantida, a pesquisa incluirá todas as situações, independentemente de já terem sido faturados ou não.

*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar os vales, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    
*   `CPF/CNPJ do Cliente`: Nessa opção é indicado o CPF ou CNPJ do cliente para qual os vales foram lançados.
    

Após definir os filtros, clique no botão . A listagem de vales será exibida conforme os critérios de busca.

Conferência de convênios
------------------------

A conferência dos lançamentos de vales é um passo crucial para garantir que os valores registrados no sistema estejam corretos e correspondam às transações reais realizadas no ponto de venda. Para realizar essa conferência, siga os passos abaixo:

Acesse o **Módulo de Convênios**.

Aplique os filtros necessários para localizar os lançamentos que precisam ser conferidos, como `Data`, `Turno` e `Operador`. Esses filtros permitem uma busca mais precisa e focada nos vales referentes ao movimento que está sendo analisado.

Após aplicar os filtros, clique em para atualizar a listagem dos lançamentos de vales. As seguintes verificações devem ser feitas para garantir que as transações estão corretas:

*   **Lançamentos de Convênios**: Confirme se todos os vales foram devidamente lançados no sistema.
    
*   **Lançamentos Indevidos**: Verifique se há lançamentos que não pertencem ao movimento ou caixa sendo conferido. Isso inclui vales de outros caixas ou que não correspondam a uma venda efetivamente realizada.
    
*   **Verificação dos Dados:** Certifique-se de que os seguintes dados estejam corretamente preenchidos para cada lançamento:
    
    *   **Cliente**: Confirme se o cliente indicado é o correto e está autorizado para emissão de vales.
        
    *   **Valor**: Verifique se o valor lançado corresponde ao valor real do vale.
        
    *   **Operador**: Certifique-se de que o operador que realizou o lançamento está corretamente identificado.
        
    *   **Itens:** Confirme que os produtos listados nos vales apresentam as quantidades e valores corretos.
        

Para clientes que possuem preços de contrato, verifique a vigência e se houve reajustes aplicáveis. Isso assegura que os vales estejam sempre atualizados com os preços corretos, evitando lançamentos com valores defasados.

Inclusão de convênios
---------------------

Durante o processo de conferência, se for identificado que algum lançamento de convênio está faltando, siga os passos abaixo para incluir o lançamento manualmente:

Acesse o **Módulo de Convênios**.

Clique no botão localizado no canto superior direito da tela para iniciar a inclusão de um novo convênio.

A seguinte tela será apresentada:

Tela para inclusão de novo convênio

No box **Novo Convênio**, preencha os campos com as informações referentes ao vale:

*   `Empresa`: Selecione a empresa vinculada à transação.
    
*   `Data`: Informe a data da prestação em que a transação constará.
    
*   `Turno`: Selecione o turno do caixa.
    
*   `PDV`: Indique o Ponto de Venda (PDV) onde o vale foi lançado.
    

Tela para seleção de PDV

*   `Caixa Venda`: Indique o caixa de venda pertencente ao PDV ao qual o vale será vinculado.
    

Tela para seleção de caixa de venda

*   `Operador`: Selecione o operador que realizou a venda.
    

Tela para seleção de operador

*   `Venda`: Número de identificação da venda. Ao clicar no campo, será apresentada a seguinte tela para facilitar a busca e seleção da mesma:
    

Tela para seleção de venda

Utilize os filtros disponíveis para localizar a venda desejada com mais precisão. Após localizar a venda correta, selecione-a na listagem.

:note:atlassian-note#B3D4FF

**Observação**: O preenchimento desse campo é opcional. Caso seja preenchido, os itens do cupom serão importados para o box **Lista de Itens do Convênio**, não permitindo a modificação ou exclusão.

*   `Data Emissão`: Data da emissão do vale.
    
*   `Observação`: Campo livre para informações adicionais.
    

Guia DADOS DO CLIENTE1800

Nesta guia, informe os dados do cliente relacionado ao vale de convênio.

*   `Cliente`: Indique o cliente ao qual o vale está vinculado.
    

Tela para seleção de cliente

:note:atlassian-note#B3D4FF

**Observação**: Não é permitido o uso do cliente **"Cliente Padrão"** e é necessário que o cliente indicado tenha situação **Ativa** em seu cadastro.

*   `Autorizado`: Informe o autorizado conforme cadastro prévio na guia **Autorizados** do cliente informado.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: A obrigatoriedade deste campo é definida no cadastro do cliente. Para verificar, acesse o **Menu Cadastro> Submenu CLIENTES > Opção Clientes > Ícone** **do cliente em questão >** **Box Venda > Guia IDENTIFICAÇÃO DO CLIENTE**. Se o campo `Autorizado` constar como `Obrigatório`, o preenchimento deste campo será obrigatório, caso contrário, o preenchimento será opcional.

*   `Placa`: Informe a placa do veículo do cliente.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: A obrigatoriedade deste campo é definida no cadastro do cliente. Para verificar, acesse o **Menu Cadastro> Submenu CLIENTES > Opção Clientes > Ícone** **do cliente em questão >** **Box Venda > Guia IDENTIFICAÇÃO DO CLIENTE**. Se o campo `Controle de Frota` constar como `Exige placa do veículo e Km`, o preenchimento deste campo será obrigatório, caso contrário, o preenchimento será opcional.

*   `KM Anterior e KM Atual`: Estes campos referem-se aos registros do hodômetro do veículo:
    
    *   `KM Anterior` indica o valor registrado na última operação de venda.
        
    *   `KM Atual` indica o valor no momento atual da transação.
        

Guia DADOS DO CONVÊNIO1800

Nesta guia, são informados os dados gerais do convênio.

*   `Documento`: Indique o número do vale usado na venda. Este campo identifica o vale específico vinculado à transação.
    
*   `Tipo do Cliente`: Especifica se o lançamento é de um documento do tipo `Convênio` ou `CTF`.
    

:info:atlassian-info:info:#B3D4FF

**Observação:** A opção **CTF** será utilizada para identificar abastecimentos liberados por uma bomba específica, garantindo um controle mais preciso da frota do cliente do posto.

*   `Cheque Vinculado`: Indica se o vale possui um cheque de garantia associado.
    
*   `Fatura`: Informa o número da fatura à qual o vale está vinculado. Se o campo estiver vazio, o vale ainda não foi faturado. Por padrão, no momento da inclusão o mesmo consta sem nenhuma informação.
    

Com essas informações preenchidas de forma manual no box **Novo Convênio**, prossiga para o próximo box.

No box **Lista de Itens do Convênio**, é possível adicionar o(s) item(ns) que compõe(m) o vale. Para inseri-lo(s), clique no botão . A seguinte tela será apresentada:

Tela para seleção de itens do vale

Onde:

*   `Número`: Indica o número do item sendo adicionado. É gerado automaticamente pelo sistema a cada inclusão.
    
*   `Cod. Barras` e `Produto`: Informe o código de barras e descrição do produto adquirido pelo cliente. Para selecionar o produto, clique no ícone . Uma tela com os produtos cadastrados no sistema será exibida para que o item vendido seja escolhido.
    
*   `Quantidade`: Insira a quantidade adquirida do produto.
    

Guia VALORES DE CADASTRO1800

*   `Preço Cadastro (R$)`: Campo preenchido automaticamente com o preço unitário do produto selecionado conforme seu cadastro no sistema. Este campo pode ser editado no momento da inclusão.
    
*   `Valor Cadastro (R$)`: Exibe o valor total das unidades do produto baseado no preço de cadastro, calculado automaticamente multiplicando-se a `quantidade` pelo `preço de cadastro`.
    

Guia VALORES DE CONTRATO1800

*   `Preço Contrato (R$)`: Campo preenchido automaticamente com o preço de contrato do produto, conforme registrado no cadastro do cliente. Caso não haja um preço de contrato configurado para aquele produto, será utilizado o preço normal de venda. Este campo pode ser editado no momento da inclusão.
    
*   `Valor Contrato (R$)`: Exibe o valor total das unidades do produto baseado no preço de contrato, calculado automaticamente multiplicando-se a `quantidade` pelo `preço de contrato`.
    

Após preenchimento e conferência das informações do item, clique no botão . Caso seja necessário incluir mais de um item no vale, repita o processo de inclusão até que todos os itens estejam incluídos.

O sistema retornará para o box de **Lista de Itens do Convênio**, com a listagem dos itens que foram adicionados e suas respectivas informações resumidas.

Box Lista de Itens do Convênio após inclusão do item

Sendo possível a edição ou exclusão dos itens adicionados, clicando nos botões ou , respectivamente.

No box **Valores da Venda**, são destacados os totais relacionados ao vale, conforme os detalhes a seguir:

*   `Valor do Vale (R$)`: Indica o valor final do vale, calculado como a somatória dos `Valores de Contrato` menos o `Desconto Concedido`. Este é um campo obrigatório e representa o total que será cobrado do cliente.
    
*   `Desconto Concedido (R$)`: Valor de desconto aplicado sobre o total do vale. Caso algum desconto não contratual tenha sido concedido ao cliente, ele será exibido aqui.
    
*   `Valor Normal da Venda (R$)`: Exibe a soma dos valores dos produtos incluídos no vale com base no preço de cadastro dos produtos. Este valor reflete o preço regular sem contratos específicos.
    
*   `Valor Contrato do Vale (R$)`: Exibe a soma dos valores dos produtos no vale com base no preço de contrato, conforme acordado no cadastro de cliente. Este valor pode diferir do `Valor Normal da Venda` caso o cliente tenha preços diferenciados por contrato.
    
*   `Crédito Emitido (R$)`: Este campo é apenas informativo e indica o valor de crédito gerado para o cliente se o `Valor do Vale (R$)` for superior ao `Valor Normal da Venda (R$)`.
    

Após preencher e revisar todas as informações necessárias, clique em para concluir a inclusão do lançamento no sistema.

Modificação de convênios
------------------------

Caso seja identificado algum erro em um lançamento de vale durante o processo de conferência, como valor incorreto ou cliente errado, siga os passos abaixo para editar o lançamento corretamente:

Acesse o **Módulo de Convênios**.

Na parte superior da tela, utilize os filtros para localizar o vale desejado de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente à transação que será modificada.

A seguinte tela será apresentada:

Tela para edição de um lançamento de convênio

Realize as correções necessárias nos campos, como:

*   **Cliente identificado no vale:** Selecione o cliente correto do vale.
    
*   **Produtos:** Verifique se os produtos inseridos no box Lista de Itens do Convênio possuem as quantidades e valores corretos para aquele cliente, atualizando caso haja necessidade.
    

:info:atlassian-info:info:#B3D4FF

**Observação**: Os itens só poderão ser alterados caso o vale não possua nenhuma venda vinculada. Para desvincular, clique no ícone do campo `Venda`. A seguinte tela será apresentada:

Tela para seleção de venda

Clique no botão para desvincular a venda do lançamento.

Após realizar todas as correções e revisar as informações, clique no botão para salvar as modificações. O sistema recalculará automaticamente o valor total de recebimentos da prestação de contas com base nas novas informações inseridas, garantindo a consistência dos dados.

Exclusão de convênios
---------------------

Caso seja identificado algum lançamento de convênio que esteja **duplicado** ou **incorreto** durante o processo de conferência, siga os passos abaixo para excluir o lançamento corretamente:

Acesse o **Módulo de Convênios**.

Na parte superior da tela, utilize os filtros para localizar a transação desejada de forma rápida e precisa. Clique no ícone localizado no final da linha correspondente ao registro que será excluído.

A seguinte tela será apresentada:

Tela para confirmação da exclusão

Clique no botão para confirmar a exclusão do lançamento. Após a confirmação, o sistema recalculará automaticamente o valor do recolhimento do caixa, garantindo que todos os dados financeiros estejam atualizados e precisos.

:info:atlassian-info:info:#B3D4FF

**Observação**: O ícone é habilitado apenas para vales que ainda não foram faturados. Se o vale já tiver sido faturado, será necessário realizar o estorno e a exclusão da fatura para permitir edições.