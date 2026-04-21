---
title: Carta de Correção NF-e
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/73433113
---

# Carta de Correção NF-e

16truenonelisttrue

Carta de Correção NF-e
======================

A **Carta de Correção (CC-e)** é um documento eletrônico utilizado para corrigir erros em uma Nota Fiscal já emitida, evitando o cancelamento da nota e possíveis problemas fiscais. Essa carta permite corrigir informações incorretas sem a necessidade de emitir uma nova NF-e, desde que as correções respeitem as regras definidas pela legislação fiscal.

**Correções permitidas**

A CC-e pode ser utilizada para corrigir informações de menor relevância, desde que não alterem o valor da nota fiscal ou os impostos aplicados. Exemplos de correções **permitidas** incluem:

1.  **Endereço do Destinatário**: Correções de dados do endereço do destinatário, como o CEP, bairro, complemento e nome da rua, desde que não envolvam mudança de cidade ou estado.
    
2.  **Razão Social do Destinatário**: Ajustes em erros de digitação na razão social do destinatário, desde que não alterem a essência do nome ou a identificação da empresa.
    
3.  **Dados Adicionais**: Correções em informações complementares da nota fiscal que estejam na seção de dados adicionais.
    
4.  **Código de Produto Interno**: Ajustes nos códigos de produto internos da empresa, caso tenham sido preenchidos incorretamente, desde que não afetem o código NCM.
    
5.  **Peso e Volume**: Correções no peso bruto, peso líquido ou volume da mercadoria, desde que não interfiram no cálculo de tributos.
    
6.  **Dados do Transportador**: Alterações em dados do transportador, como endereço, CNPJ/CPF, razão social e placa do veículo.
    
7.  **Informações Complementares**: Detalhes adicionais sobre a transação, como observações.
    

8.  **Dados do Destinatário**: Exceto nome e CNPJ, que não podem ser alterados via CC-e.
    

**Correções não permitidas**

A CC-e não permite alterações que impactem diretamente valores, cálculos de impostos, ou características essenciais da operação. Exemplos de correções **não permitidas** incluem:

1.  **Mudança no Valor da NF-e**: Não é permitido corrigir valores de produtos, do frete, dos impostos ou de qualquer outra informação que altere o valor final da nota fiscal.
    
2.  **Dados do Emitente ou do Destinatário**: Não é permitido alterar o CNPJ ou CPF do emitente ou do destinatário, nem mudar o município ou estado.
    
3.  **Data de Emissão ou de Saída**: Alterações na data de emissão ou de saída da nota fiscal não são permitidas, pois impactam o registro contábil e fiscal.
    
4.  **CFOP (Código Fiscal de Operações e Prestações)**: Não é possível corrigir o CFOP. Qualquer erro nesse campo exige o cancelamento da nota e a emissão de uma nova com o CFOP correto.
    
5.  **Quantidade ou Unidade de Medida de Produtos**: Alterações na quantidade ou na unidade de medida dos produtos vendidos ou devolvidos não são permitidas, pois afetam o valor da operação e o cálculo dos tributos.
    
6.  **Natureza de Operação (Mudança de Finalidade)**: Não é permitido mudar a natureza da operação (por exemplo, de "venda" para "transferência"), pois isso altera o contexto da transação fiscal.
    
7.  **Forma de Pagamento**: Não é permitido alterar a forma de pagamento na Carta de Correção, pois isso influencia as obrigações fiscais e financeiras.
    
8.  **Alíquota de Impostos ou Base de Cálculo**: Qualquer alteração na alíquota ou na base de cálculo dos impostos, como ICMS, IPI ou PIS, não é permitida.
    

Resumindo, a Carta de Correção é uma solução prática para pequenas correções de informação, mas deve ser utilizada com cautela para não comprometer a validade fiscal e contábil da operação.

Deve ser emitida em até **30 dias** após a emissão da NF-e. Caso contrário, a correção não será válida. É possível emitir até **20 cartas de correção para uma mesma nota fiscal**, mas apenas a última terá validade para o fisco, substituindo as anteriores.

Alguns benefícios da Carta de Correção são:

*   **Economia de Tempo e Recursos**: Não é necessário emitir uma nova nota fiscal.
    
*   **Correção de Pequenos Erros Sem Impacto Fiscal**: Evita problemas com a fiscalização por conta de erros menores.
    
*   **Validade Jurídica e Fiscal**: Ao corrigir formalmente o erro, a empresa se mantém em conformidade com as exigências da SEFAZ.
    

**Cuidados Importantes**

É importante lembrar que o uso incorreto da CC-e pode resultar em penalidades fiscais. Portanto, as empresas devem ter um processo de revisão das NF-es para minimizar erros e utilizar a carta de correção somente para os ajustes permitidos.

:note:atlassian-note#B3D4FF

**Observação:** Para realizar a emissão do Conhecimento de Transporte Eletrônico (CT-e), é necessário que um certificado digital válido seja cadastrado no sistema. Para configurá-lo, acesso o menu **Cadastro** \> **Fiscal** \> **Certificados Digitais**.. Além disso, é necessário que o CNPJ esteja ativo e que a empresa possua registro regular na SEFAZ (Secretaria da Fazenda).

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > Carta de correção NF-e

* * *

Será apresentada a seguinte tela:

Tela de listagem de Cartas de Correção

A imagem acima apresenta uma visão geral do módulo de Carta de Correção de NF, detalhando como os usuários podem visualizar, filtrar e gerenciar suas cartas emitidas, organizadas de maneira cronológica.

Na parte superior da tela são apresentados os campos para filtragem das cartas:

*   `Empresa`: Filtra a empresa que realizou a emissão da carta de correção. É possível selecionar várias empresas para realizar a consulta.
    
*   `Período Inicial` e `Período Final`: Indica o intervalo de datas em que as cartas foram emitidas.
    
*   `Protocolo`: Número único gerado pela SEFAZ que comprova a autorização da carta de correção e vincula a correção à NF-e original.
    
*   `Chave NF-e`: Filtra pela chave da NF-e associada à carta de correção, garantindo a referência exata ao documento corrigido.
    

Na parte inferior, será exibida a listagem das cartas emitidas, onde serão apresentados os campos:

*   `Empresa`: Empresa que realizou a emissão da carta de correção.
    
*   `Data Evento`: Data em que a carta foi emitida.
    
*   `Protocolo`: Número gerado pela Sefaz.
    
*   `Chave Eletrônica`: Código que identifica a NF-e associada a carta de correção.
    
*   `Situação`: Indica o retorno da SEFAZ para a carta:
    
    *   `Autorizada`: A SEFAZ validou e aceitou a carta de correção, tornando-a válida e vinculada à NF-e original. Isso significa que a correção foi aplicada com sucesso.
        
    *   `Rejeitada`: A carta de correção não foi aceita devido a problemas na sua emissão, como erros no conteúdo, formato inadequado, ou informações não permitidas para correção. A rejeição geralmente vem acompanhada de um código de erro explicando o motivo.
        
    *   `Denegada`: A carta de correção é negada devido a irregularidades fiscais do emitente ou destinatário. Esse status indica que a empresa precisa corrigir pendências fiscais antes de enviar outra carta de correção.
        
    *   `Pendente de processamento`: O sistema da SEFAZ ainda está processando a carta de correção e não retornou um status final.
        
    *   `Duplicidade de evento`: Esse status aparece quando uma carta de correção já foi enviada anteriormente com o mesmo conteúdo para a mesma NF-e. A SEFAZ trata essa segunda tentativa como uma duplicata, pois o evento já foi registrado.
        
    *   `NF-e Cancelada`: Indica que a NF-e original foi cancelada antes do envio ou autorização da carta de correção. Uma CC-e não pode ser emitida para uma nota fiscal cancelada, tornando a carta inválida nesse caso.
        
*   `Evento`: Indica o número de cartas de correção emitidas para uma NF-e, listadas em ordem sequencial, permitindo o controle das correções e o monitoramento do limite de 20 eventos.
    
*   `Correção`: Exibe a carta de correção gerada ao clicar no ícone .
    

* * *

Criar Carta de Correção da NF-e
-------------------------------

Ao clicar no botão , será apresentada a seguinte tela:

Tela para criar carta de correção

*   `Buscar chave eletrônica`: Insira a chave eletrônica da NF-e a ser vinculada à Carta de Correção. Será realizada uma validação do número da chave e apresentados os campos Empresa e Sequencial.
    
*   `Correção`: Insira as informações da NF-e a serem corrigidas.
    

Guia OBSERVAÇÕES1800

Nesta seção, são apresentadas orientações sobre o uso da carta de correção, esclarecendo quais tipos de erros podem ser corrigidos e quais informações não são permitidas para alteração, como valores fiscais, dados essenciais do destinatário e datas de emissão ou saída.

Após preencher e revisar os campos, clique no botão para emitir a carta de correção.