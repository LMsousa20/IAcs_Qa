---
title: Bandeiras de Cartão
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/187334658
---

# Bandeiras de Cartão

16truenonelisttrue

Bandeiras de Cartão
===================

As **Bandeiras de Cartão** são as responsáveis pelo conjunto de regras e tecnologias que garantem a aceitação e o funcionamento dos cartões em diferentes estabelecimentos. Elas conectam os emissores (bancos) e as adquirentes, garantindo que a transação seja autorizada corretamente.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Financeiro > Bandeiras de Cartão

Será apresentada a seguinte tela:

Tela de Listagem de Bandeiras de Cartão

Ao acessar o módulo, a tela principal será exibida, permitindo o gerenciamento das bandeiras de cartão cadastradas. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Nova Bandeira**

Permite o cadastro de uma nova bandeira de cartões no sistema, garantindo que todas as bandeiras relevantes estejam devidamente registradas.

**Filtro de Pesquisa**

Facilita a busca de bandeiras específicas pelo nome, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de uma bandeira já cadastrada, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada:

### Box 1 - Nova Bandeira de Cartão

Box Nova Bandeira de Cartão

*   `Código`: Identificador único da bandeira no sistema, gerado automaticamente.
    
*   `Descrição`: Nome ou tipo da bandeira de cartão a ser cadastrada.
    
*   `Bandeira na SEFAZ`: Relacionamento da bandeira de cartão com o sistema da Secretaria da Fazenda para fins de conciliação fiscal.
    
*   `Código para Conciliação`: Utilizado para identificação e vinculação da bandeira no sistema ao código correspondente no sistema da conciliadora, quando há integração.
    
*   `Código no TEF`: Código de retorno para identificação e vinculação da bandeira quando é utilizado PINPAD, geralmente instalado em lojas de conveniência. Esse código é essencial para que o sistema reconheça as transações realizadas com cartões de crédito, débito ou outros meios de pagamento de forma integrada, garantindo que os pagamentos sejam registrados na administradora correta.
    
*   `Código do TEF no PDV Móvel`: Código de retorno para identificação e vinculação da bandeira no sistema quando é utilizado PDV Móvel. Esse código é essencial para que o sistema reconheça e processe as transações realizadas com cartões de crédito, débito ou outros meios de pagamento de forma integrada, garantindo que os pagamentos sejam registrados na administradora correta.
    
*   `Participa da Conciliação`: Indica se as administradoras vinculadas a essa bandeira serão consideradas no processo de conciliação de cartões.
    
*   `Cartão Pré-Pago`: Indica se a bandeira é do tipo PRE-PAGO ou não. Utilizado para identificar corretamente cartões pré-pagos no retorno do TEF Sitef (PINPAD), garantindo que a informação seja registrada na administradora correta.
    

Guia FATURAMENTO

*   `Bandeira`: Tem como principal função **agrupar os lançamentos de cartões** na geração de faturas. Essa funcionalidade é especialmente útil em situações onde diferentes administradoras possuem recebimentos consolidados em um **único lançamento no extrato bancário**, como por exemplo **Master Débito** e **Pré-pago Master Débito**. Ao preencher o campo `Bandeira` com uma bandeira de referência, todos os lançamentos vinculados a essa configuração — tanto da bandeira principal quanto da referenciada — serão **unificados em uma única fatura**, identificada pela bandeira informada como referência.
    
*   Exemplo: Se a bandeira **"PRÉ-PAGO MASTERCARD DÉBITO"** estiver configurada com a **"MASTERCARD DÉBITO"** no campo `Bandeira`, os lançamentos de ambas serão consolidados em uma única fatura com o nome da bandeira **"MASTERCARD DÉBITO"**.
    

O campo `Bandeira` **fica desabilitado** quando a bandeira em questão **já foi referenciada** em outro cadastro. Isso evita que a mesma bandeira seja associada a múltiplas origens, garantindo a consistência na geração das faturas.

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir bandeiras de cartão no sistema.

### Incluir Bandeira

Para cadastrar uma nova bandeira de cartão no sistema, siga os passos abaixo:

Acesse o módulo de Bandeiras de Cartão através do caminho: `Menu Cadastro > Financeiro > Bandeiras de Cartão`.

Na tela de listagem das bandeiras, clique no botão .

Preencha os campos no box **Nova Bandeira de Cartão**:

*   `Descrição`: Insira o nome ou tipo da bandeira (ex: VISA , MASTERCARD ).
    
*   `Bandeira na SEFAZ`: Selecione a opção que melhor relaciona a bandeira com o sistema da Secretaria da Fazenda para fins de conciliação fiscal.
    
*   `Código para Conciliação`: Se houver integração com um sistema de conciliação, informe o código correspondente buscando na listagem apresentada ao clicar no botão .
    
*   `Código no TEF`: Se utilizar PINPAD (TEF), informe o código de retorno da bandeira.
    
*   `Código do TEF no PDV Móvel`: Se utilizar PDV Móvel, informe o código de retorno da bandeira.
    
*   `Participa da Conciliação`: Indique como Sim se a bandeira for considerada no processo de conciliação de cartões.
    
*   `Cartão Pré-Pago`: Indique como Sim se a bandeira for do tipo PRE-PAGO.
    
*   `Bandeira`: Indique uma bandeira somente em caso de o recebimento das mesmas serem agrupados no extrato bancário.
    

Após preencher todos os campos obrigatórios e revisar as informações, clique no botão . Em seguida, a tela será redirecionada para a listagem das bandeiras cadastradas.

* * *

### Editar Bandeira

Para modificar os dados de uma bandeira de cartão já cadastrada, siga os passos:

Acesse o módulo de Bandeiras de Cartão. A tela de listagem exibirá todas as bandeiras cadastradas.

Localize a bandeira que deseja editar na lista. Você pode usar o filtro de pesquisa para agilizar a busca.

Clique no ícone ao lado da bandeira desejada.

A tela de cadastro da bandeira será aberta, permitindo a modificação dos campos.

**Restrições de Edição**

*   Todos os campos estarão habilitados para edição, exceto os campos `Código`, que é um identificador único e não pode ser alterado e `Bandeira`, em caso de ser uma bandeira já referenciada em outro cadastro.
    

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Bandeira

Para remover uma bandeira de cartão do sistema, siga os passos:

Acesse o módulo de Bandeiras de Cartão.

Localize a bandeira que deseja excluir na tela de listagem.

Clique no ícone de ao lado da bandeira desejada.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

O sistema **não permitirá a exclusão** de uma bandeira caso ela esteja associada a uma administradora. Esta medida de segurança garante a integridade dos dados e evita inconsistências no sistema.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Bandeiras de Cartão.

**Problema**: Não consigo cadastrar uma nova bandeira.

**Solução**: Verifique se todos os campos obrigatórios foram preenchidos. Mensagens de erro na tela indicarão quais informações estão faltando ou estão incorretas.

**Problema**: Não consigo excluir uma bandeira.

**Solução**: O sistema impede a exclusão de bandeiras que já estão associadas a administradoras. Para manter a integridade dos dados, desvincule a bandeira de todas as administradoras antes de tentar excluí-la.

**Problema**: As transações TEF ou PDV Móvel não estão sendo reconhecidas corretamente para uma bandeira específica.

**Solução**: Verifique se os campos `Código no TEF` e `Código do TEF no PDV Móvel` estão preenchidos corretamente e correspondem aos códigos utilizados pelas operadoras de TEF/PDV Móvel para aquela bandeira. Pequenas divergências podem impedir o reconhecimento das transações.