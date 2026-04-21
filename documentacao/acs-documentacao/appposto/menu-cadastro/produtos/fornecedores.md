---
title: Fornecedores
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/41811982
---

# Fornecedores

16truenonelisttrue

Fornecedores
============

O módulo de **Cadastro de Fornecedores** permite registrar, consultar e gerenciar as informações dos parceiros que fornecem produtos ou prestam serviços ao posto de combustível. Com essa funcionalidade, o usuário mantém os dados organizados e atualizados, o que facilita rotinas como **processos de compra**, **controle de administradoras** e **gestão de contas a pagar**.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Produtos > Fornecedores

Será apresentada a seguinte tela:

Tela de Listagem de Fornecedores

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento dos fornecedores já cadastrados. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Novo Fornecedor**

Permite o cadastro de um novo fornecedor no sistema, garantindo que todas os fornecedores relevantes estejam devidamente registradas.

**Filtro de Pesquisa**

Facilita a busca de fornecedores específicos pela razão social, CPF/CNPJ ou situação, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de um fornecedor já cadastrado, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada, organizada em três boxes destacados como abas no canto direito da tela.

### Box 1 - Novo Fornecedor

Box Novo Fornecedor

*   `CPF/CNPJ`: Campo para informar o CPF (pessoa física) ou CNPJ (pessoa jurídica). Caso seja informado um CNPJ válido, o botão será habilitado. Clicando neste botão, o sistema realiza uma busca automática nas bases da Receita Federal, preenchendo os campos `Razão Social`, `Nome Fantasia` e os campos do box **Endereço**.
    
*   `IE`: Número da inscrição estadual do fornecedor, quando aplicável.
    
*   `Regime ICMS`: Regime tributário adotado pelo fornecedor em relação ao ICMS.
    
    *   `Simples Nacional`: Regime tributário simplificado voltado para microempresas e empresas de pequeno porte.
        
    *   `Simples - Excesso de Sublimite`: Enquadra empresas do Simples Nacional que **ultrapassaram o sublimite estadual de receita bruta** permitido para recolher o ICMS dentro do regime.
        
    *   `Normal`: Regime comum de apuração de tributos.
        
*   `Razão Social`: Nome jurídico completo do fornecedor, conforme consta no cadastro da Receita Federal.
    
*   `Nome Fantasia`: Nome comercial utilizado pelo fornecedor.
    
*   `Situação`: Indica o estado atual do cadastro.
    
*   `Contato`: Nome do responsável ou pessoa de referência na empresa fornecedora (ex: gerente, representante, vendedor).
    
*   `Televendas`: Número de telefone do setor comercial ou de televendas da empresa.
    
*   `Frequência de visita em dias`: Intervalo médio (em dias) entre as visitas do fornecedor à empresa.
    
*   `Prazo de entrega em dias`: Tempo estimado, em dias, para a entrega dos produtos após a realização do pedido.
    
*   `Observação`: Campo livre para registrar informações adicionais importantes sobre o fornecedor, como condições comerciais, restrições ou observações específicas.
    

### Box 2 - Endereço

Box Endereço

*   `CEP`: Código de Endereçamento Postal utilizado para localizar automaticamente o endereço. Ao ser informado um CEP válido, o sistema preenche os campos de `Endereço`, `Bairro`, `Cód. Municipio IBGE`, `Cidade` e `UF`.
    
*   `Endereço`: Nome da rua, avenida, estrada ou logradouro principal do fornecedor.
    
*   `Número`: Número do imóvel ou edifício correspondente ao endereço informado.
    
*   `Bairro`: Bairro onde o fornecedor está localizado.
    
*   `Complemento`: Informações adicionais do endereço, como bloco, sala, andar, etc.
    
*   `Cód. Município IBGE`: Código do município segundo a tabela oficial do IBGE (usado para obrigações fiscais).
    
*   `Cidade`: Nome do município onde está situado o fornecedor.
    
*   `UF`: Unidade Federativa (estado) correspondente à cidade informada.
    
*   `Telefone`: Número de telefone para contato direto com o fornecedor.
    
*   `Fax`: Número de fax, caso o fornecedor utilize esse meio de comunicação.
    
*   `E-mail`: Endereço eletrônico principal do fornecedor para envio de documentos ou contatos.
    

### Box 3 - Complemento

Box Complemento

*   `Transportadora?`: Indica se o fornecedor também atua como transportadora.
    
    *   Quando marcado como `Sim`, o fornecedor será exibido nas listagens de transportadoras disponíveis na emissão de Notas Fiscais de Entrada e Saída.
        
    *   Essencial para operações fiscais que exigem o preenchimento dos dados da transportadora.
        
*   `Tipo de Frete`: Define a responsabilidade pelo pagamento do frete, conforme acordado com o fornecedor:
    
    *   `CIF`: O **fornecedor é responsável** pelo custo e transporte até o destino final (o posto).
        
    *   `FOB`: O **comprador (posto)** assume os custos do transporte a partir da origem (fornecedor).
        
*   `Forma de pagamento`: Seleciona a forma padrão de pagamento utilizada nas compras com este fornecedor:
    
    *   `À Vista`: Pagamento integral no ato da compra.
        
    *   `A Prazo`: Pagamento parcelado, conforme condições definidas nos campos abaixo.
        
*   `Número de parcelas`: Define o número de parcelas padrão para compras com pagamento a prazo. Este campo só deve ser preenchido se a `Forma de pagamento` for `A Prazo`.
    
*   `Prazo entre parcelas (dias)`: Informa o intervalo, em dias, entre o vencimento de cada parcela. Também preenchido apenas para a opção `A Prazo`, sendo utilizado na geração automática dos títulos no Contas a Pagar.
    

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir fornecedores no sistema.

### Incluir Fornecedor

Para cadastrar um novo fornecedor no sistema, siga os passos abaixo:

Acesse o módulo de Fornecedores através do caminho: `Menu Cadastro > Produtos > Fornecedores`.

Na tela de listagem dos fornecedores, clique no botão .

Preencha os campos no box **Novo Fornecedor**:

*   `CPF/CNPJ`: Informe o CPF (pessoa física) ou CNPJ (pessoa jurídica). Se for CNPJ, você pode clicar no botão para preenchimento automático dos dados.
    
*   `IE`: (Opcional) Número da inscrição estadual.
    
*   `Regime ICMS`: Selecione o regime tributário (Simples Nacional, Simples - Excesso de Sublimite, Normal).
    
*   `Razão Social`: Informe o nome jurídico completo do fornecedor.
    
*   `Nome Fantasia`: Informe o nome comercial.
    
*   `Situação`: Selecione `Ativo`.
    
*   `Contato`: (Opcional) Informe o nome do responsável.
    
*   `Televendas`: (Opcional) Informe o telefone para televendas.
    
*   `Frequência de visita em dias`: (Opcional) Informe um intervalo médio entre visitas.
    
*   `Prazo de entrega em dias`: (Opcional) Informe o tempo estimado para entrega.
    
*   `Observação`: (Opcional) Informe dados adicionais.
    

Preencha os campos no box **Endereço**:

*   `CEP`: Informe o CEP para preenchimento automático do endereço.
    
*   `Endereço`, `Número`, `Bairro`, `Cód. Município IBGE`, `Cidade` e `UF`: Serão preenchidos automaticamente após informar o CEP, mas podem ser informados manualmente.
    
*   `Complemento`: (Opcional) Informações adicionais do endereço.
    
*   `Telefone`, `Fax`, `E-mail`: (Opcional) Dados de contato.
    

Preencha os campos no box **Complemento**:

*   `Transportadora?`: Marque se o fornecedor também atua como transportadora.
    
*   `Tipo de Frete`: Selecione o tipo de frete padrão (CIF ou FOB).
    
*   `Forma de pagamento`: Selecione a forma padrão de pagamento (`À Vista` ou `A Prazo`).
    
*   `Número de parcelas`: (Opcional) Se `A Prazo`, informe o número de parcelas.
    
*   `Prazo entre parcelas (dias)`: (Opcional) Se `A Prazo`, informe o intervalo entre as parcelas.
    

Após preencher todos os campos e revisar as informações, clique no botão . O sistema redirecionará automaticamente para a tela de listagem com os fornecedores já cadastrados.

* * *

### Editar Fornecedor

Para modificar os dados de um fornecedor já cadastrado, siga os passos:

Acesse o módulo de Fornecedores. A tela de listagem exibirá todos os fornecedores cadastrados.

Localize o fornecedor que deseja editar na lista. Você pode usar os filtros de pesquisa para agilizar a busca.

Clique no ícone ao lado do fornecedor desejado desejado.

A tela de edição do cadastro será aberta, permitindo a modificação dos campos.

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Fornecedor

Para remover um fornecedor do sistema, siga os passos:

Acesse o módulo de Fornecedores.

Localize o fornecedor que deseja excluir na tela de listagem.

Clique no ícone de ao lado do fornecedor desejado.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

Por motivos de segurança e integridade dos dados, o sistema **não permitirá a exclusão** de um fornecedor que tenha sido vinculado a algum lançamento ou emissão de nota.

Caso precise remover um fornecedor que já foi utilizado, considere inativá-lo alterando sua `Situação` para `Inativa` na tela de edição.

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Cadastro de Fornecedores.

**Problema**: Os dados do fornecedor não são preenchidos automaticamente ao clicar no botão .

**Solução**: Verifique se o CNPJ foi digitado corretamente. Em alguns casos, a base da Receita Federal pode estar temporariamente indisponível. Tente novamente mais tarde ou preencha os dados manualmente.

**Problema**: A forma de pagamento e o parcelamento não estão sendo aplicados corretamente nas compras.

**Solução**: Verifique a configuração dos campos `Forma de pagamento`, `Número de parcelas` e `Prazo entre parcelas (dias)` no box **Complemento**. Certifique-se de que estão de acordo com o que foi acordado com o fornecedor.