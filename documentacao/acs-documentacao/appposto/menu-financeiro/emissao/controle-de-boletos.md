---
title: Controle de Boletos
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/8912978
---

# Controle de Boletos

16truenonelisttrue

Controle de Boletos
===================

O **Controle de Boletos** é o processo de gerenciar, acompanhar e organizar todos os boletos bancários emitidos pela empresa. Esse processo abrange desde a emissão dos boletos até o monitoramento dos pagamentos, assegurando que todas as transações sejam devidamente registradas e que os recebimentos ocorram conforme esperado.

O objetivo principal desse módulo é proporcionar uma visão centralizada e clara sobre a situação dos boletos, facilitando o controle financeiro e evitando inconsistências ou atrasos nos pagamentos.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Controle de Boletos

* * *

Ao acessar o módulo, a tela a seguir será exibida:

Tela geral do módulo de Controle de Boletos

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento dos boletos registradas no sistema.

As principais funcionalidades são:

**Gerenciar o Controle de Boletos**

Permite a visualização e o acompanhamento dos boletos registrados no sistema, exibindo tanto os boletos pendentes quanto os quitados, possibilitando o controle das obrigações financeiras vinculadas às faturas e aos clientes.

**Filtro de Pesquisa**

Disponibiliza filtros que permitem refinar a consulta dos boletos conforme critérios como empresa, período, cliente, código da fatura vinculada, tipo de vencimento, situação da remessa e demais parâmetros disponíveis, facilitando a localização rápida das informações.

**Visualização**

Permite consultar os detalhes de cada boleto, exibindo informações como empresa, data de emissão, código da fatura vinculada, nome do cliente, data de vencimento, valor, situação, status da remessa e ícones de ação disponíveis.  
A listagem utiliza categorização por cores conforme a situação do boleto, proporcionando uma visualização rápida e intuitiva do status de cada registro.

* * *

Apresentação de tela e campos
-----------------------------

Na parte superior do Box **Boletos**, é possível aplicar filtros para a listagem dos boletos, facilitando a localização e seleção dos cartões a serem faturados:

### Filtros e Blocos

A tela de listagem de boletos oferece uma série de filtros que permitem refinar a busca e facilitar a organização dos registros. Abaixo estão as opções de filtros disponíveis:

Filtros e blocos do módulo Controle de Boletos

*   `Empresa`: Filtra a empresa para consulta dos boletos registrados no sistema.
    

**Atenção!**

Em ambientes multiempresa, a seleção da Empresa define quais boletos serão exibidos na tela, apresentando somente os registros vinculados à empresa selecionada.

*   `Data Inicial` e `Data Final`: Permite filtrar os boletos emitidos, vencidos ou pagos dentro de um intervalo de datas específico.
    
*   `Consultar por Data por`: Escolha a data a ser utilizada na consulta.
    
    *   `Data de Emissão`: Filtra os boletos pela data em que foram emitidos.
        
    *   `Data de Vencimento`: Filtra os boletos pela data de vencimento.
        
    *   `Data de Quitação`: Filtra os boletos pela data em que foram quitados.
        
*   `Situação da Remessa`: Escolha a situação da remessa a ser utilizada na consulta.
    
    *   `Todos`: Exibe todas as opções.
        
    *   `Não Enviado`: Boletos que ainda não foram enviados ao banco.
        
    *   `Enviado`: Boletos enviados ao banco, mas ainda não registrados.
        
    *   `Registrado`: Boletos registrados no sistema bancário.
        
    *   `Liquidado`: Boletos que foram pagos e liquidados.
        
    *   `Baixado`: Boletos baixados, mas sem liquidação financeira.
        
    *   `Rejeitado`: Boletos que foram rejeitados pelo banco.
        
    *   `Protesto`: Boletos enviados para protesto.
        
    *   `Gerado`: Boletos gerados pelo sistema, mas ainda não processados.
        
    *   `Baixa Pendente`: Boletos que aguardam a baixa no sistema após o pagamento.
        
*   `Quitação`: Escolha o status de pagamento a ser utilizado na consulta.
    
    *   `Todos`: Exibe todas as opções.
        
    *   `Pendentes`: Boletos ainda não pagos.
        
    *   `Quitação`: Boletos marcados como quitados.
        
*   `Vencimento`: Escolha o status de vencimento a ser utilizado na consulta.
    
    *   `Todos`: Exibe todas as opções.
        
    *   `A vencer`: Boletos que ainda não atingiram a data de vencimento.
        
    *   `Vencidos`: Boletos cujo prazo de pagamento já expirou.
        
*   `Fatura Convênio`: Apresenta uma tela para filtrar pelo(s) código(s) específico(s) da(s) fatura(s).
    
*   `Cliente`: Apresenta uma tela para filtrar pelo(s) nome(s) de cliente(s) específico(s).
    
*   `CPF/CNPJ do Cliente`: Filtra boletos utilizando o CPF ou CNPJ do cliente.
    
*   `Valor Mínimo` e `Valor Máximo`: Filtra os boletos com base no intervalo de valores.
    

Os blocos ajudam os usuários na visualização dos valores e quantidades dos boletos.

*   **QUANTIDADE DE BOLETOS**: Exibe a quantidade e valor de todos os boletos gerados.
    
*   **QUANTIDADE PENDENTE**: Exibe a quantidade e valor de todos os boletos gerados que estão pendentes de quitação.
    

Após aplicar os filtros desejados, clique no botão para listar os boletos conforme os filtros indicados.

### Listagem de boletos

Abaixo dos filtros e blocos, são listados os boletos que atendem aos critérios selecionados. Cada boleto exibe informações como a data de emissão, código da fatura vinculada ao boleto, nome do cliente, data de vencimento, valor, situação, status da remessa e ícones de ação.

Listagem de boletos emitidos

### Ícones de ação

Abaixo estão os ícones de ação disponíveis no módulo de controle de boletos, com suas respectivas funções:

Ícone

Realiza uma consulta do status atual do boleto diretamente no portal do PlugBoleto. Ao acionar esse ícone, o status do boleto será atualizado de acordo com as informações obtidas na plataforma PlugBoleto. Se a integração com a VAN estiver ativa, esse processo ocorre automaticamente, uma vez que a VAN realiza consultas periódicas para atualizar o status dos boletos de forma autônoma.

Tela para confirmação de atualização de status

Clique no botão para confirmar o processo.

Ícone

Ao clicar neste ícone, o usuário pode baixar o arquivo de remessa que deverá ser enviado manualmente para o banco. O arquivo de remessa é essencial para formalizar a emissão dos boletos no banco. O processo de importação pode ocorrer de duas maneiras:

**Manual**:

O usuário faz o download do arquivo de remessa gerado pelo sistema e, em seguida, acessa o site do banco para realizar o upload desse arquivo.

Uma vez carregado no banco, os boletos são oficialmente registrados, e os clientes poderão pagá-los nos canais bancários disponíveis.

**Automatizado via VAN**:

Quando o sistema está integrado com a **VAN (Value Added Network)**, o processo de importação do arquivo de remessa é totalmente automatizado.

A VAN verifica automaticamente se há novos boletos a serem registrados e faz a importação do arquivo para o banco sem necessidade de intervenção manual.

Ícone

Este ícone abre o arquivo do boleto em formato PDF em uma nova guia do navegador. O usuário pode visualizar o documento e também optar por baixá-lo diretamente.

Ícone

Quando acionado, esse ícone apresenta uma janela onde o usuário pode inserir o endereço de e-mail do cliente que deverá receber o boleto. O arquivo em PDF do boleto será então enviado diretamente para o e-mail informado.

Tela para indicação do e-mail que receberá o boleto

Digite o e-mail do cliente no campo **Para** e clique no botão para finalizar o processo. É possível editar o Assunto e Mensagem do e-mail que será enviado.

Ícone

Este ícone permite excluir o boleto do sistema, removendo seu vínculo com a fatura anteriormente associada. Após a exclusão, o boleto não estará mais disponível para visualização ou gerenciamento.

Tela para confirmação da exclusão

Clique no botão para finalizar o processo.

* * *

Exportação de arquivo de remessa agrupado
-----------------------------------------

Esta tela permite consultar os boletos associados à remessa e gerar um único arquivo para envio ao banco, contemplando múltiplos registros em uma única operação. Por meio dessa funcionalidade, é possível centralizar o envio das cobranças, evitando o registro individual de cada boleto junto ao banco e garantindo maior agilidade no processo de registro bancário.

O processo segue as seguintes etapas:

*   **Emissão dos boletos no sistema:**
    
    *   Após emitir os boletos no módulo Boleto Bancário, o sistema registra todas as informações necessárias para formalizar a cobrança junto ao banco. Na emissão dos boletos são definidos dados como:
        
        *   Dados do cedente (empresa responsável pela cobrança);
            
        *   Dados do sacado (cliente que realizará o pagamento);
            
        *   Valor do titulo;
            
        *   Data de vencimento;
            
        *   Juros, multa, protesto, entre outras.
            
*   **Exportação manual do arquivo de remessa:**
    
    *   Após concluir a emissão dos boletos, o sistema gera o **arquivo de remessa**, que deverá ser importado no banco para efetivar o registro das cobranças. Além dos dados das cobranças, o arquivo contem instruções como:
        
        *   Registro de novos boletos
            
        *   Alteração de dados do título (valor, vencimento, juros, multa, entre outro)
            
        *   Cancelamento de títulos
            
        *   Instruções de protesto.
            

**Observações:**

*   Para gerar **múltiplos boletos em um único arquivo de remessa**, é necessário, no módulo **Boletos Bancários**, selecionar **mais de uma fatura** no momento da emissão dos boletos. Quando a emissão for realizada para múltiplas faturas, o sistema consolidará os títulos em **um único arquivo de remessa**, permitindo o envio agrupado ao banco.
    
*   Quando o boleto for emitido de forma individual, o respectivo arquivo de remessa poderá ser baixado de duas formas:
    

1.  Na listagem de boletos emitidos;
    
2.  Na opção de Agrupados por arquivo de remessa.
    

No sistema, acesse o módulo de **Controle de Boletos**. No canto superior direito, clique no botão . A seguinte tela será apresentada:

Tela de boletos agrupados por arquivo de remessa

Nesta tela será possível aplicar filtro por período para localizar arquivos de remessa conforme data desejada.

Na listagem são apresentados os dados como data de emissão, nome do arquivo e quantidade de boletos vinculados, assegurando melhor rastreabilidade das cobranças enviadas ao banco.

### Ícones de ação

Abaixo estão os ícones de ação disponíveis, com suas respectivas funções:

*   Ícone :
    

Permite consultar os boletos agrupados no arquivo de remessa, exibindo a listagem dos boletos que compõem o arquivo.

Tela de boletos agrupados

*   Ícone
    

Ao clicar neste ícone, o usuário pode baixar o arquivo de remessa que deverá ser enviado manualmente para o banco. O arquivo de remessa é essencial para formalizar a emissão dos boletos no banco. O processo de exportação pode ocorrer de duas maneiras:

**Manual**:

O usuário faz o download do arquivo de remessa gerado pelo sistema e, em seguida, acessa o site do banco para realizar o upload desse arquivo.

Uma vez carregado no banco, os boletos são oficialmente registrados, e os clientes poderão pagá-los nos canais bancários disponíveis.

**Automatizado via VAN**:

Quando o sistema está integrado com a **VAN (Value Added Network)**, o processo de exportação do arquivo de remessa é totalmente automatizado.

A VAN verifica automaticamente se há novos boletos a serem registrados ou alterados e faz a exportação do arquivo para o banco sem necessidade de intervenção manual.

O envio correto do arquivo de remessa ao banco é etapa obrigatória para que os boletos sejam oficialmente registrados e validados para liquidação.

Caso seja realizada a exclusão de um boleto que componha um arquivo de remessa agrupado já enviado, o título será removido do sistema, porém será necessário efetuar o cancelamento do respectivo boleto junto ao banco.  

* * *

Importação de arquivo de retorno
--------------------------------

Após o envio dos boletos ao banco, é necessário acompanhar os pagamentos realizados pelos clientes. Isso é feito através do **arquivo de retorno**, que contém a confirmação dos pagamentos. O processo segue as seguintes etapas:

*   **Recebimento do Arquivo de Retorno**:
    
    *   O banco gera um arquivo de retorno que deve ser importado no sistema para atualizar o status dos boletos. Esse arquivo contém as informações de pagamento de todos os boletos registrados, incluindo:
        
        *   Boletos quitados;
            
        *   Boletos vencidos ou não pagos;
            
        *   Boletos baixados ou cancelados.
            
*   **Importação Manual**:
    
    *   Acesse o site do banco onde os boletos foram emitidos e realize o download do **arquivo de retorno** correspondente. Esse arquivo contém as informações sobre os boletos que foram pagos ou não. No sistema, acesse o módulo de **Controle de Boletos**. No canto superior direito, clique no botão .
        

Tela para importar arquivo de retorno bancário

Na tela apresentada, selecione a `Empresa` à qual será vinculada a importação do arquivo de retorno e a `Conta Bancária` associada ao banco onde o arquivo de retorno foi gerado. Certifique-se de que a conta selecionada corresponde ao banco de onde foi feito o download do arquivo. Os campos da guia **DADOS DO CEDENTE** serão atualizados de acordo a conta informada. Clique no ícone para localizar o arquivo de retorno no computador. Após selecionar o arquivo, clique no botão para finalizar o processo. O sistema processará automaticamente as informações contidas no arquivo e atualizará o status de cada boleto.

**Atenção:**

Ao alterar a **Empresa**, a **Conta Bancária** disponível para seleção será automaticamente atualizada, exibindo apenas as contas que estejam configuradas com **emissão de boletos ativa** no módulo de **Cadastro de Contas Bancárias**.

Essa regra garante que somente contas aptas à emissão e registro de boletos possam ser utilizadas no processo.

*   **Automatização via VAN**:
    
    *   Se a integração via VAN estiver ativa, o processo de importação do arquivo de retorno é automatizado. A VAN busca periodicamente novos arquivos de retorno no banco e os processa automaticamente, atualizando o status dos boletos no sistema sem necessidade de intervenção humana.
        

* * *

Histórico de arquivos de retorno bancário
-----------------------------------------

Esta tela permite consultar todos os arquivos de retorno bancário importados no sistema, seja por importação manual realizada pelo usuário ou de forma automática, quando houver integração configurada para automatização do processo.

O histórico possibilita a identificação de eventuais inconsistências, validação das informações financeiras e possibilidade de reprocessamento do arquivo, garantindo maior confiabilidade nos registros bancários.

Além disso, permite verificar a data e o usuário responsável pela importação do arquivo.

Para acessar, clique no ícone localizado no canto superior direito e em seguida no botão para listar os arquivos importados. Será apresentada a seguinte tela:

Tela de listagem de arquivos de retorno bancário

### Ícone de ação

Abaixo está o ícone de ação disponível no módulo de histórico de arquivos de retorno bancário, com sua respectiva função:

Ícone

Realiza uma consulta do status atual do arquivo de retorno diretamente no portal do PlugBoleto. Ao acionar esse ícone, o status do histórico será atualizado de acordo com as informações obtidas na plataforma PlugBoleto. Se a integração com a VAN estiver ativa, esse processo ocorre automaticamente, uma vez que a VAN realiza consultas periódicas para atualizar o status dos arquivos de forma autônoma.

Tela para confirmação de atualização de dados do arquivo de retorno

Clique no botão para confirmar o processo.

**Atenção!**

Após a importação do arquivo de retorno bancário, não será possível realizar sua exclusão no sistema.

Essa restrição garante a integridade das informações processadas, preservando o histórico e a rastreabilidade das importações realizadas por meio do arquivo importado.