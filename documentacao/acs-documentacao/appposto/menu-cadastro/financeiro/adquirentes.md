---
title: Adquirentes
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/168951817
---

# Adquirentes

16truenonelisttrue

Adquirentes
===========

As **Adquirentes** são as empresas responsáveis por processar as transações financeiras realizadas com cartões entre o estabelecimento comercial, o banco emissor do cartão e a bandeira (como Visa ou Mastercard). Elas garantem que o pagamento seja autorizado e concluído, sendo também responsáveis pelo repasse dos valores à empresa.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Financeiro > Adquirentes

Será apresentada a seguinte tela:

Tela de Listagem de Adquirentes

Ao acessar o módulo, a tela principal será exibida, permitindo o gerenciamento das operadoras de cartão já cadastradas. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Nova Adquirente**

Permite o cadastro de uma nova operadora de cartões no sistema, garantindo que todas as adquirentes relevantes estejam devidamente registradas.

**Filtro de Pesquisa**

Facilita a busca de adquirentes específicas pelo nome, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de uma adquirente já cadastrada, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Nova Operadora

Box Nova Operadora

*   `Código`: Identificador único da adquirente no sistema, gerado automaticamente.
    
*   `Descrição`: Nome da adquirente a ser cadastrada.
    
*   `Código para Conciliação`: Utilizado para identificação e vinculação da adquirente no sistema ao código correspondente no sistema da conciliadora, quando há integração.
    
*   `Código no TEF`: Código de retorno para identificação e vinculação da adquirente quando é utilizado PINPAD, geralmente instalado em lojas de conveniência. Esse código é essencial para que o sistema reconheça as transações realizadas com cartões de crédito, débito ou outros meios de pagamento de forma integrada, garantindo que os pagamentos sejam registrados na administradora correta.
    

Campo habilitado para inclusão ou edição de informações **somente** quando há pelo menos um PDV configurado para utilização do TEF.

*   `Código do TEF no PDV Móvel`: Código de retorno para identificação e vinculação da adquirente no sistema quando é utilizado PDV Móvel. Esse código é essencial para que o sistema reconheça e processe as transações realizadas com cartões de crédito, débito ou outros meios de pagamento de forma integrada, garantindo que os pagamentos sejam registrados na administradora correta.
    
*   `Participa da Conciliação`: Indica se as administradoras vinculadas a essa adquirente serão consideradas no processo de conciliação de cartões.
    

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir adquirentes no sistema.

### Incluir Adquirente

Para cadastrar uma nova adquirente no sistema, siga os passos abaixo:

Acesse o módulo de Adquirentes através do caminho: `Menu Cadastro > Financeiro > Adquirentes`.

Na tela de listagem das adquirentes, clique no botão .

Preencha os campos:

*   `Descrição`: Insira o nome da adquirente (ex: REDE , STONE ).
    
*   `Código para Conciliação`: Se houver integração com um sistema de conciliação, informe o código correspondente buscando na listagem apresentada ao clicar no botão .
    
*   `Código no TEF`: Se utilizar PINPAD (TEF), informe o código de retorno da adquirente. Este campo é habilitado somente se houver um PDV configurado para TEF.
    
*   `Código do TEF no PDV Móvel`: Se utilizar PDV Móvel, informe o código de retorno da adquirente.
    
*   `Participa da Conciliação`: Indique como Sim se a adquirente for considerada no processo de conciliação de cartões.
    

Após preencher todos os campos obrigatórios e revisar as informações, clique no botão . Em seguida, a tela será redirecionada para a listagem das adquirentes cadastradas.

* * *

### Editar Adquirente

Para modificar os dados de uma adquirente já cadastrada, siga os passos:

Acesse o módulo de Adquirentes. A tela de listagem exibirá todas as adquirentes cadastradas.

Localize a adquirente que deseja editar na lista. Você pode usar o filtro de pesquisa para agilizar a busca.

Clique no ícone ao lado da adquirente desejada.

A tela de cadastro da adquirente será aberta, permitindo a modificação dos campos.

**Restrições de Edição**

*   Todos os campos estarão habilitados para edição, exceto o campo `Código`, que é um identificador único e não pode ser alterado.
    

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Adquirente

Para remover uma adquirente do sistema, siga os passos:

Acesse o módulo de Adquirentes.

Localize a adquirente que deseja excluir na tela de listagem.

Clique no ícone de ao lado da operadora desejada.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

O sistema **não permitirá a exclusão** de uma adquirente caso ela esteja associada a uma administradora. Esta medida de segurança garante a integridade dos dados e evita inconsistências no sistema.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Adquirentes.

**Problema**: Não consigo cadastrar uma nova adquirente.

**Solução**: Verifique se todos os campos obrigatórios foram preenchidos. Mensagens de erro na tela indicarão quais informações estão faltando ou estão incorretas.

**Problema**: Não consigo excluir uma adquirente.

**Solução**: O sistema impede a exclusão de adquirentes que já estão associadas a administradoras. Para manter a integridade dos dados, desvincule a adquirente de todas as administradoras antes de tentar excluí-la.

**Problema**: As transações TEF ou PDV Móvel não estão sendo reconhecidas corretamente.

**Solução**: Verifique se os campos `Código no TEF` e `Código do TEF no PDV Móvel` estão preenchidos corretamente e correspondem aos códigos retornados pelas operadoras de TEF/PDV Móvel. Pequenas divergências podem impedir o reconhecimento das transações