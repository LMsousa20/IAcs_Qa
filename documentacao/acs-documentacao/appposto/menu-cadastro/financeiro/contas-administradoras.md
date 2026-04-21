---
title: Contas Administradoras
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/195035142
---

# Contas Administradoras

16truenonelisttrue

Contas Administradoras
======================

O módulo de **Cadastro de Contas Administradoras** é utilizado para configurar as Contas de Origem e Aplicação das operações de Venda, Recebimento e Taxas de administradoras específicas que exigem distinção além das configurações realizadas no módulo de **Cadastro de Contas do Caixa**. Por exemplo, quando a empresa tem duas adquirentes de cartão (Stone e Cielo), é necessária a configuração desse módulo para separar as vendas de cada uma no **Livro Caixa**.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Financeiro > Contas Administradoras

Será apresentada a seguinte tela:

Tela de Listagem de Contas Administradoras

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento das contas administradoras já configuradas. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Nova Conta Administradora**

Permite o cadastro de uma nova conta administradora no sistema, garantindo que todas as contas administradoras relevantes estejam devidamente registradas.

**Filtro de Pesquisa**

Facilita a busca da conta administradora específicas pelo nome ou situação, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de uma conta administradora já cadastrada, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Nova Conta Administradora

Box Nova Conta Administradora

*   `Administradora`: Campo para indicar qual administradora (previamente cadastrada no módulo de **Cadastro de Administradoras**) será configurada.
    
*   `Venda Origem` e `Venda Aplicação` registram a movimentação de todas as vendas realizadas com a administradora indicada.
    
*   `Recebimento Origem` e `Recebimento Aplicação` registram a confirmação do recebimento na conta bancária da empresa referente as vendas com a administradora indicada.
    
*   `Taxa Origem` e `Taxa Aplicação` registram a movimentação das taxas administrativas das transações com a administradora indicada que foram baixadas.
    

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir contas administradoras no sistema.

### Incluir Conta Administradora

Para cadastrar uma nova conta administradora no sistema, siga os passos abaixo:

Acesse o módulo de Contas Administradoras através do caminho: `Menu Cadastro > Financeiro > Contas Administradoras`.

Na tela de listagem das contas administradoras, clique no botão .

Preencha os campos no box **Nova Conta Administradora**:

*   `Administradora`: Indique a administradora que terá suas operações configuradas.
    
*   `Venda Origem`: Indique a **Conta Caixa** (ou a mesma conta configurada como **Conta Aplicação** da operação **VENDAS DO DIA**)
    
*   `Venda Aplicação`: Indique a conta especifica da administradora indicada, para que haja o controle das vendas com essa administradora no Livro Caixa.
    
*   `Recebimento Origem`: Indique a mesma conta indicada como `Venda Aplicação`.
    
*   `Recebimento Aplicação`: Indique a conta bancária onde o valor das vendas com essa administradora será recebido.
    
*   `Taxa Origem`: Irá variar a depender de como o parâmetro do sistema “**Baixa de cartões pelo valor bruto**” estiver configurado.
    
    *   Se configurado como **Não**:
        
        *   Indica que ao realizar a baixa das vendas com a administradora indicada, o valor registrado na conta indicada como `Recebimento Aplicação` será o valor **liquido** das transações. Sendo assim, é necessário que a conta configurada na `Taxa Origem` seja a mesma da `Recebimento Origem`, ou seja, a conta especifica da administradora indicada.
            
    *   Se configurado como **Sim:**
        
        *   Indica que ao realizar a baixa das vendas com a administradora indicada, o valor registrado na conta indicada como `Recebimento Aplicação` será o valor **bruto** das transações. Sendo assim, é necessário que a conta configurada na `Taxa Origem` seja a mesma da `Recebimento Aplicação`, ou seja, a conta bancária.
            
*   `Taxa Aplicação`: Indique uma conta de taxas administrativas de cartão.
    

Após preencher todos os campos e revisar as informações, clique no botão . A tela será redirecionada para a listagem das contas administradoras cadastradas.

* * *

### Editar Conta Administradora

Para modificar os dados de uma conta administradora já cadastrada, siga os passos:

Acesse o módulo de Contas Administradoras. A tela de listagem exibirá todas as contas administradoras cadastradas.

Localize a conta administradora que deseja editar na lista. Você pode usar o filtro de pesquisa para agilizar a busca.

Clique no ícone ao lado da conta administradora desejada.

A tela de cadastro da conta administradora será aberta, permitindo a modificação dos campos.

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Conta Administradora

Para remover uma conta administradora do sistema, siga os passos:

Acesse o módulo de Contas Administradoras.

Localize a conta administradora que deseja excluir na tela de listagem.

Clique no ícone de ao lado da conta administradora desejada.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Cadastro de Contas Administradoras.

**Problema**: As movimentações no Livro Caixa não estão sendo separadas por administradora.

**Solução**: Verifique se as Contas Administradoras foram configuradas corretamente para cada administradora necessária, especialmente o campo `Venda Aplicação`. Certifique-se de que a administradora possui uma conta de aplicação específica para vendas e recebimentos.

**Problema**: Os valores de taxas administrativas estão sendo descontados duas vezes no Livro Caixa.

**Solução**: Revise a configuração do campo Taxa Origem e o parâmetro do sistema “Baixa de cartões pelo valor bruto”. Uma configuração incorreta pode levar a lançamentos duplicados ou valores incorretos para as taxas.