---
title: Grupos de Produtos
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/40992790
---

# Grupos de Produtos

16truenonelisttrue

Grupos de Produtos
==================

O módulo de **Cadastro de Grupos de Produtos** tem como objetivo **organizar os produtos do sistema de forma categorizada**, agrupando itens com características ou finalidades semelhantes.

Essa categorização traz benefícios como:

*   **Padronização** dos cadastros de produtos.
    
*   **Otimização** de processos relacionados a controle de estoque e geração de relatórios.
    
*   **Facilidade** na localização e manutenção de cadastros.
    
*   **Análises gerenciais mais precisas** por categoria de produto.
    

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Produtos > Grupos de Produtos

Será apresentada a seguinte tela:

Tela de Listagem de Grupos de Produtos

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento dos grupos de produtos já cadastrados. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Novo Grupo de Produto**

Permite o cadastro de um novo Grupo de Produtos no sistema, garantindo que todos os grupos relevantes estejam devidamente registrados.

**Filtro de Pesquisa**

Facilita a busca de grupos de produtos específicos pelo nome, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de um grupo de produto já cadastrado, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Novo Grupo de Produtos

Box Novo Grupo de Produtos

*   `Descrição`: Nome do grupo de produtos a ser cadastrado.
    
*   `Tipo`: Define a categoria do grupo. As opções disponíveis são:
    
    *   `Automotivo`: Produtos para manutenção de veículos.
        
    *   `Conveniência`: Itens de consumo em loja, como alimentos e bebidas.
        
    *   `Combustíveis`: Combustíveis que serão comercializados.
        
    *   `Lubrificantes`: Óleos e fluidos automotivos.
        
    *   `GLP`: Gás Liquefeito de Petróleo.
        
    *   `Serviços`: Atividades como lavagem e troca de óleo.
        
    *   `Outro`: Produtos que não se enquadram nas categorias anteriores.
        
*   `Classificação Fiscal`: Define a classificação fiscal aplicável ao grupo, impactando no controle tributário e fiscal. As opções incluem:
    
    *   `Mercadoria Revenda`: Produtos adquiridos para serem revendidos ao consumidor final.
        
    *   `Matéria-Prima`: Itens utilizados diretamente para produção de outros produtos.
        
    *   `Embalagem`: Materiais usados para acondicionar ou proteger os produtos comercializados.
        
    *   `Produto em Processo`: Itens que estão em fase de produção, ainda não finalizados.
        
    *   `Produto Acabado`: Produtos prontos para comercialização ou consumo.
        
    *   `Subproduto`: Resultado secundário de um processo produtivo que possui valor comercial.
        
    *   `Produto Intermediário`: Produto usado na fabricação de outro bem, sem compor o item final.
        
    *   `Material de Consumo`: Itens utilizados internamente pela empresa, sem finalidade de revenda.
        
    *   `Ativo Imobilizado`: Bens duráveis utilizados nas operações da empresa, como equipamentos.
        
    *   `Serviços`: Prestação de serviços como lavagem, manutenção e assistência.
        
    *   `Outros Insumos`: Materiais auxiliares no processo produtivo que não se enquadram nas demais categorias.
        
    *   `Outras`: Classificação genérica, usada somente em casos específicos e devidamente justificados.
        
*   `Centro de Resultado`: Define a qual centro de resultado o grupo será vinculado para fins de controle gerencial.
    
*   `Enviar para Franqueadora`: Define se as movimentações de compra e venda dos produtos vinculados a este grupo serão enviadas para a plataforma da Shell.
    
*   `Meta de Venda`: Exibe o total acumulado das metas de venda definidas nos subgrupos vinculados a este grupo.
    

### Box 2 - Subgrupos Produto

Este box é exibido somente após o **cadastro inicial** do grupo. Para acessá-lo, é necessário clicar no ícone do grupo desejado. Após essa ação, o box será apresentado logo abaixo da seção **Alterar Grupo Produto**.

Neste box, são listados todos os subgrupos vinculados ao grupo selecionado, permitindo visualizar e gerenciar suas informações.

Box Subgrupos Produto

*   `Código`: Código identificador único do subgrupo no sistema.
    
*   `Descrição`: Nome do subgrupo de produtos.
    
*   `Abreviação`: Nome abreviado da descrição. Utilizado como prefixo automático ao cadastrar um novo produto vinculado a este subgrupo.
    
*   `Markup`: Margem de lucro sugerida para a venda dos produtos pertencentes ao subgrupo.
    
*   `Comissão`: Percentual sugerido de comissão sobre a venda dos produtos deste subgrupo.
    
*   `Meta de Venda`: Valor da meta de vendas (em reais – R$) definido para o subgrupo.
    

### Box 3 - Novo Subgrupo Produto

Este box é exibido quando o usuário clica no botão para incluir um novo subgrupo no grupo. Ele permite registrar as informações necessárias para criar um novo subgrupo, definindo suas características comerciais, contábeis e operacionais.

Box Novo Subgrupo Produto

*   `Descrição`: Nome completo do subgrupo de produtos.
    
*   `Abreviação`: Forma reduzida do nome, utilizada para facilitar a identificação e como prefixo no cadastro de novos produtos.
    
*   `Markup`: Percentual aplicado sobre o custo dos produtos que será sugerido para determinar o preço de venda.
    
*   `Meta de Venda`:  Valor, em reais (R$), da meta de vendas para o subgrupo.
    
*   `Comissão`: Percentual sugerido de comissão sobre as vendas dos produtos do subgrupo, usado para cálculo de repasse ao vendedor.
    
*   `Bonificação`: Valor, em reais (R$), de bonificação concedida ao cliente na compra de produtos do subgrupo.
    
*   `Validade`: Define se os produtos do subgrupo devem ter controle de data de validade.
    
    *   `Sim`: Ativa o controle de validade.
        
        *   Sempre que um produto deste subgrupo for incluído em uma **nota de compra**, o sistema **exigirá o preenchimento da data de validade** no lançamento.
            
        *   Esta informação será utilizada para acompanhamento e gestão de prazos, evitando perdas e garantindo a conformidade com exigências legais ou sanitárias.
            
    *   `Não`: O sistema não solicitará a data de validade no lançamento da nota de compra.
        
*   `Conta CMV`: Conta contábil utilizada para registrar o Custo das Mercadorias Vendidas (CMV) dos produtos do subgrupo.
    
*   `Conta Venda`: Conta contábil onde serão registradas as receitas das vendas dos produtos do subgrupo.
    
*   `Conta Falta Estoque`: Conta contábil destinada a registrar perdas por falta de estoque.
    
*   `Conta Sobra Estoque`: Conta contábil destinada ao registro de sobras de estoque.
    

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir grupos de produtos no sistema.

### Incluir Grupo de Produtos

Para cadastrar um novo grupo no sistema, siga os passos abaixo:

Acesse o módulo de Grupo de Produtos através do caminho: `Menu Cadastro > Produtos > Grupos de Produtos`.

Na tela de listagem dos grupos, clique no botão .

Preencha os campos no box **Novo Grupo de Produtos**:

*   `Descrição`: Insira o nome do grupo.
    
*   `Tipo`: Selecione a categoria dos produtos que serão vinculados ao grupo.
    
*   `Classificação Fiscal`: Informe a classificação fiscal aplicável ao grupo.
    
*   `Centro de Resultado`: Defina o centro de resultado ao qual o grupo será vinculado.
    
*   `Enviar para Shell`: Selecione `Sim` caso seja necessário que as movimentações de **compras e vendas** dos produtos deste grupo sejam enviadas para a **Shell**.
    
*   `Meta Venda`: Campo onde é apresentando a soma das metas definidas nos subgrupos vinculados ao grupo.
    

Após preencher todos os campos e revisar as informações, clique no botão . O sistema redirecionará automaticamente para a tela de listagem com os grupos já cadastrados.

### Incluir Subgrupo de Grupo

Após cadastrar o grupo, siga os passos abaixo para incluir subgrupos:

Na tela de listagem de grupos, clique sobre o ícone do grupo desejado para abrir o box **Subgrupos Produto**.

No box **Subgrupos de Produto**, clique no botão .

Preencha os campos no box **Novo Subgrupo Produto**:

*   `Descrição`: Insira o nome do subgrupo.
    
*   `Abreviação`: _(_Opcional_)_ Insira a forma reduzida do nome, utilizada para facilitar a identificação e como prefixo no cadastro de produtos.
    
*   `Markup`: (Opcional) Indique o percentual aplicado sobre o custo dos produtos que será sugerido para determinar o preço de venda.
    
*   `Meta de Venda`: (Opcional) Indique o valor, em reais (R$), da meta de vendas para o subgrupo.
    
*   `Comissão`: (Opcional) Indique o percentual sugerido de comissão sobre as vendas dos produtos do subgrupo, usado para cálculo de repasse ao vendedor.
    
*   `Bonificação`: (Opcional) Indique o valor, em reais (R$), de bonificação concedida ao cliente na compra de produtos do subgrupo.
    
*   `Validade`: Defina se os produtos do subgrupo devem ter controle de data de validade. Caso definido como `Sim`, o preenchimento da validade será obrigatório na entrada de notas de compra.
    
*   `Conta CMV`: (Opcional) Indique a conta contábil utilizada para registrar o Custo das Mercadorias Vendidas (CMV) dos produtos do subgrupo.
    
*   `Conta Venda`: (Opcional) Indique a conta contábil onde serão registradas as receitas das vendas dos produtos do subgrupo.
    
*   `Conta Falta Estoque`: (Opcional) Indique a conta contábil destinada a registrar perdas por falta de estoque.
    
*   `Conta Sobra Estoque`: (Opcional) Indique a conta contábil destinada ao registro de sobras de estoque.
    

Após preencher os campos, clique no botão . A tela será redirecionada para a listagem dos subgrupos do grupo. Repita o processo para a inclusão de mais subgrupos caso haja necessidade.

* * *

### Editar Grupo de Produtos

Para modificar os dados de um grupo já cadastrado, siga os passos:

Acesse o módulo de Grupos de Produtos. A tela de listagem exibirá todos os grupos cadastrados.

Localize o grupo que deseja editar na lista. Você pode usar o filtro de pesquisa para agilizar a busca.

Clique no ícone ao lado do grupo desejado.

A tela de edição do cadastro do grupo será aberta, permitindo a modificação dos campos:

*   No box **Alterar Grupo Produto**, todos os campos poderão ser alterados livremente.
    
*   Já no box **Subgrupos Produto**, é possível incluir, editar ou remover subgrupos do grupo.
    

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

### Editar Subgrupo de Grupo

Para modificar os dados de um subgrupo já cadastrado, siga os passos:

Acesse o módulo de Grupos de Produtos. A tela de listagem exibirá todos os grupos cadastrados.

Localize o grupo onde o subgrupo desejado se encontra.

Clique no ícone ao lado do grupo.

Localize o subgrupo que deseja editar no box **Subgrupos Produto**. Você pode usar o filtro de pesquisa para agilizar a busca.

Clique no ícone ao lado do subgrupo desejado.

A tela de edição do cadastro do subgrupo será aberta, permitindo a modificação de todos os campos.

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Grupo de Produtos

Para remover um grupo de produtos do sistema, siga os passos:

Acesse o módulo de Grupos de Produtos.

Localize o grupo que deseja excluir na tela de listagem.

Clique no ícone de ao lado do grupo desejado.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

Por motivos de segurança e integridade dos dados, o sistema **não permitirá a exclusão** de um grupo de produtos caso haja subgrupos vinculados ao mesmo.

### Excluir Subgrupo de Grupo

Para remover um subgrupo de grupos do sistema, siga os passos:

Acesse o módulo de Grupos de Produtos.

Localize o grupo onde o subgrupo desejado se encontra.

Clique no ícone ao lado do grupo.

Localize o subgrupo que deseja excluir no box **Subgrupos Produto**. Você pode usar o filtro de pesquisa para agilizar a busca.

Clique no ícone de ao lado do subgrupo desejado.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

Por motivos de segurança e integridade dos dados, o sistema **não permitirá a exclusão** de um subgrupo de produtos caso haja produtos vinculados ao mesmo.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Cadastro de Grupos de Produtos

**Problema**: As vendas enviadas para a Shell/BR estão com divergências com relação ao sistema.

**Solução**: Verifique se o campo `Enviar para Shell` dos grupos de produtos da loja estão configurados como `Sim`.