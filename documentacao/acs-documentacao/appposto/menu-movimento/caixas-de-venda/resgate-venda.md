---
title: Resgate [Venda]
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/72810502
---

# Resgate [Venda]

16truenonelisttrue

Resgate
=======

O **Módulo de Resgates** é utilizado para **consultar** valores de desconto aplicados durante a **finalização de uma venda no PDV**, provenientes de programas de fidelidade. Esses programas, como **PontuaX, PostoAki, 99 Abastece** e **Apetrus**, permitem que o cliente utilize pontos acumulados ou descontos exclusivos no **momento do pagamento**.

Cada um desses resgates é processado como uma forma de recebimento que, ao ser utilizado, é automaticamente agrupado com a finalizadora de pagamento escolhida (como cartão de crédito, débito ou dinheiro), permitindo controle total sobre as transações.

Existem duas maneiras de acessar o módulo de resgates:

**Diretamente pelo Menu Movimento**

*   Esta opção oferece uma visão geral de todos os lançamentos.
    
*   Permite consultas amplas, com filtros mais gerais por padrão.
    

Menu Movimento > Resgate

**Botão correspondente à finalizadora** **dentro da Prestação de Contas**

*   Ao acessar a prestação de contas, clique no botão respectivo a finalizadora () para ser direcionado ao módulo de resgates.
    
*   Esse atalho facilita o acesso às transações da prestação de contas que está sendo conferida.
    

Consulta de resgate
-------------------

Seja qual for a forma de acesso, a tela inicial exibida é a de listagem dos resgates lançados, tendo como objetivo principal garantir a **conferência precisa dos lançamentos**. Contudo, há diferenças nos filtros de busca e nos botões da tela dependendo de como o módulo foi acessado:

#DEEBFF

**Acesso pelo Menu Movimento**

Quando acessado diretamente pelo menu **Movimento > Resgate**, a tela de listagem dos resgates apresenta as seguintes características:

Tela inicial módulo de resgate (Menu Movimento)

*   Filtro da `Empresa`: Está **disponível** para alteração, permitindo que o usuário alterne entre as empresas disponíveis para realizar a consulta, sem a necessidade de deslogar e logar novamente.
    
*   Filtro de `Período de Datas`: É preenchido automaticamente com a data do dia em que o acesso foi realizado.
    
*   Filtros como `Turno` e `Operador` estarão configurados para **Todos**, permitindo uma busca mais abrangente das transações.
    
*   Botão : Não é exibido nessa forma de acesso.
    

#DEEBFF

**Acesso pela Prestação de Contas**

Ao acessar o módulo de resgate por meio da **prestação de contas**, os filtros da tela são ajustados conforme as informações da prestação em análise:

Tela inicial módulo de resgate (Prestação)

*   Filtro da `Empresa`: Ficará **bloqueado** para alteração, pois a empresa será a mesma associada a prestação.
    
*   Filtro do `Período de Datas`, `Turno` e `Operador`: São preenchidos automaticamente com base nas informações da prestação de contas em questão, facilitando a conferência direta das transações.
    
*   Botão : Também localizado no canto superior direito, serve como um atalho para retornar à prestação de contas, facilitando a navegação entre as telas.
    

Independentemente da forma de acesso ao módulo de resgate, os seguintes filtros são sempre preenchidos da mesma maneira, onde:

*   `PDV`: Permite selecionar em qual Ponto de Venda (PDV) os resgate foram lançados. Se a opção padrão **Todos** for mantida, não haverá restrição quanto ao PDV.
    
*   `Caixa Venda`: Permite selecionar o(s) caixa(s) em que os resgates foram lançados. Se a opção padrão **Todos** for mantida, a pesquisa abrangerá todos os caixas disponíveis. Ao clicar no filtro, será apresentada uma tela para selecionar o(s) caixa(s) desejado(s).
    

Tela para filtrar caixas

É necessário que os campos `Data Inicial` e `Data Final` estejam preenchidos.

*   `Valor Mínimo (R$)` e `Valor Máximo (R$)`: Permitem indicar um intervalo de valores para relacionar os resgates, sendo útil para pesquisar lançamentos em um determinado valor ou em uma faixa específica.
    

Após definir os filtros, clique no botão . A listagem de resgates será exibida conforme os critérios de busca.

Conferência de resgate
----------------------

A conferência dos lançamentos de resgate é um importante para garantir que os valores registrados no sistema estejam corretos. Para realizar essa conferência, siga os passos abaixo:

Acesse o **Módulo de Resgate**.

Aplique os filtros necessários para localizar os lançamentos que precisam ser conferidos, como `Data`, `Turno` e `Operador`. Esses filtros permitem uma busca mais precisa e focada nos resgates referentes ao movimento que está sendo analisado.

Após aplicar os filtros, clique em para atualizar a listagem dos lançamentos de resgate. As seguintes verificações devem ser feitas para garantir que os registros estão corretos:

*   **Compare os Valores**: Para cada registro, verifique se o valor do resgate aplicado está corretamente registrado no sistema. Certifique-se de que o desconto corresponde ao valor resgatado pelo cliente no programa de fidelidade selecionado.
    
*   **Confirme a Finalizadora Agrupada**: Cada resgate deve estar vinculado a uma finalizadora específica. Confirme que o sistema agrupou corretamente o resgate com a forma de pagamento utilizada pelo cliente, como cartão ou dinheiro.