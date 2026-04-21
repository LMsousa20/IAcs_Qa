---
title: Boleto Bancário
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/8945696
---

# Boleto Bancário

16truenonelisttrue

Boleto Bancário
===============

A **emissão de boleto bancário** é o processo de criação de um documento de cobrança que permite ao cliente efetuar pagamentos em diversos canais, como bancos, caixas eletrônicos, internet banking, casas lotéricas e outros pontos autorizados.

No sistema, essa funcionalidade possibilita a **criação, gerenciamento e controle de boletos bancários**, que são amplamente utilizados para cobranças de valores devidos, como pagamentos de faturas de convênio.

 Alguns benefícios da utilização dos boletos bancários são:

*   **Eficiência**: A emissão de boletos diretamente no sistema economiza tempo e centraliza o processo de cobrança.
    
*   **Flexibilidade**: Oferece tanto o gerenciamento manual quanto a automação completa por meio de VAN, ajustando-se às necessidades da empresa.
    
*   **Conformidade**: Garante a correta emissão de boletos conforme as exigências bancárias, reduzindo o risco de erros e problemas de processamento.
    

A utilização de boletos no sistema é realizada em duas etapas principais:

1.  **Emissão de Boletos**:
    

A partir do módulo de emissão de boletos, o sistema gera o documento automaticamente com base nas faturas selecionadas. O boleto inclui todas as informações necessárias, como valor a ser pago, data de vencimento e dados bancários.

O boleto é gerado utilizando a integração com a plataforma **PlugBoleto**, garantindo que todas as informações estejam corretas e prontas para o envio.

2.  **Envio e Monitoramento**:
    

O sistema oferece duas maneiras para o gerenciamento dos boletos após sua emissão, adaptando-se às necessidades e preferências dos usuários. As opções são:

*   Manualmente: Na opção **manual**, o processo de emissão e gestão dos boletos envolve as seguintes etapas:
    
    *   **Geração do Boleto**: O boleto é gerado diretamente no sistema com base nas faturas e informações inseridas.
        
    *   **Exportação de Arquivo de Remessa**: Após a emissão, é necessário exportar o arquivo de remessa do boleto e enviá-lo manualmente ao banco para processamento.
        
    *   **Importação do Arquivo de Retorno**: O banco retornará um arquivo com as atualizações sobre o status dos boletos (pagos, compensados, etc.). Esse arquivo deve ser importado manualmente para o sistema para atualizar o status dos boletos e refletir as mudanças no controle financeiro.
        
*   Automatizado por meio da VAN: A opção **automatizada** utiliza um sistema de **VAN (Value Added Network)** para integrar a emissão de boletos de forma 100% automática:
    
    *   **Geração e Envio de Boletos**: O sistema gera os boletos e os envia diretamente ao banco via VAN. Não é necessário realizar a exportação manual dos arquivos de remessa.
        
    *   **Atualização Automática de Status**: A VAN monitora continuamente o status dos boletos e atualiza automaticamente o sistema com as informações de retorno do banco, como pagamentos realizados e compensações.
        
    *   **Processo Sem Intervenção Manual**: Toda a comunicação com o banco, desde a geração dos boletos até a atualização dos status, é realizada de forma automática, economizando tempo e reduzindo a probabilidade de erros manuais.
        

Após a emissão, o boleto pode ser enviado diretamente ao cliente por e-mail ou disponibilizado para download.

* * *

Configurações Iniciais
----------------------

Antes de iniciar o processo de emissão de boletos, é imprescindível realizar algumas configurações essenciais para garantir que o sistema funcione corretamente. Esses ajustes são fundamentais para assegurar a precisão e a eficiência do processo de emissão.

As configurações preliminares necessárias são realizadas em dois módulos do sistema:

1.  Cadastro de Contas Bancárias
    
2.  Cadastro de Clientes
    

Abaixo serão exemplificadas detalhadamente as configurações necessárias em cada módulo.

### Cadastro de Contas Bancárias

Acesse o seguinte módulo:

Menu Cadastro > Contas Bancárias

Será apresentada a seguinte tela:

Listagem do cadastro de contas bancárias

Clique no botão . Será apresentada a seguinte tela:

Tela de cadastro de conta bancária

No box **Nova Conta Bancária**, insira todas as informações solicitadas, como nome do banco, agência, número da conta e demais dados exigidos para a emissão dos boletos. Certifique-se de que todas as informações bancárias estejam corretas, pois serão utilizadas para gerar os boletos e direcionar os pagamentos para a conta indicada. No box **Complemento**, preencha os campos adicionais, caso seja necessário. Após preencher todos os campos, clique no botão para registrar a nova conta bancária no sistema.

Após finalizar o cadastro da conta, localize a conta na lista de contas bancárias cadastradas. Clique no ícone ao lado da conta que deseja ativar a emissão de boletos. Será exibida uma nova tela com as informações da conta:

Tela conta cadastrada

Clique no botão para iniciar o processo de ativação. Será apresentada a seguinte tela de confirmação:

Tela de confirmação da integração

Clique no botão para finalizar o processo de integração. A conta cadastrada será marcada com o status de , indicando que já pode ser utilizada para gerar boletos.

### Cadastro de Clientes

Acesse o seguinte módulo:

Menu Cadastro > Clientes

Será apresentada a seguinte tela:

Listagem do cadastro de clientes

Na lista de clientes cadastrados, localize o cliente para o qual serão emitidos boletos. Clique no ícone ao lado do nome do cliente para editar o cadastro. Na tela de edição do cadastro do cliente, acesse a guia **Cobrança**.

Guia cobrança do cadastro de clientes

No campo **Local do Pagamento**, selecione a opção **Banco**. Clique em para salvar as mudanças.

* * *

Emissão de Boleto Bancário
--------------------------

Finalizado o processo de configuração inicial, acesse o seguinte módulo para iniciar o processo de emissão de boletos:

Menu Financeiro > Boleto Bancário

Ao acessar o módulo, a tela a seguir será exibida:

Tela geral do módulo Emissão de Boleto Bancário

### Box 1 - Emissão de Boleto Bancário

O box **Emissão de Boleto Bancário** contém duas guias que permitem configurar e ajustar os dados necessários para a geração dos boletos.

Guia DADOS PRINCIPAIS

*   Empresa Cedente: Selecione a **empresa cedente** responsável pela emissão do boleto. Essa informação identifica quem está realizando a cobrança e será exibida no boleto. É possível selecionar uma empresa diferente da que está atualmente logada para realizar a emissão, sem a necessidade de sair e entrar em outra empresa separadamente para realizar o processo.
    
*   Conta Bancária: Escolha a **conta bancária** pela qual os boletos serão emitidos. Esta conta receberá os valores pagos pelos clientes e deve estar corretamente configurada no sistema.
    

:note:atlassian-note#B3D4FF

**Observação:** Serão listadas **apenas** as contas bancárias que foram ativadas para emissão de boletos.

Guia DADOS DO CEDENTE

Esta guia contém as informações essenciais sobre a conta bancária que será utilizada para a emissão dos boletos. Esses campos são preenchidos automaticamente de acordo com os dados da empresa e da conta bancária associada.

*   CNPJ do Cedente: CNPJ da empresa responsável pela emissão do boleto (cedente).
    
*   Razão Social do Cedente: Razão social da empresa cedente, que será exibida no boleto como a responsável pela cobrança.
    
*   Agência: Número da agência bancária vinculada à conta do cedente.
    
*   Dígito Verificador da Agência (DV): Dígito verificador da agência, se aplicável.
    
*   Conta Corrente: Número da conta corrente que será utilizada para receber os pagamentos.
    
*   Dígito Verificador da Conta Corrente (DV): Dígito verificador da conta corrente.
    
*   Código do Cedente: Código do cedente fornecido pelo banco, que identifica a empresa junto à instituição bancária para a emissão de boletos.
    

### Box 2 - Faturas Selecionadas

Este box exibe as faturas que serão utilizadas para a geração dos boletos. Siga os passos abaixo para selecionar as faturas desejadas.

Clique no botão . Será apresentada a seguinte tela:

Tela para seleção das faturas

A tela de seleção de faturas permite visualizar as faturas pendentes de cobrança e escolher aquelas que serão incluídas na geração dos boletos.

Na parte superior da tela, estão disponíveis filtros para facilitar a busca e a localização das faturas específicas:

*   Data Inicial e Data Final: Filtra as faturas dentro de um intervalo de datas específico.
    
*   Data Utilizada: Define qual data deve ser considerada na consulta (emissão ou vencimento).
    
*   Cliente: Filtra as faturas por um cliente específico.
    
*   Fatura: Permite buscar uma fatura específica pelo seu código
    

Após configurar os filtros desejados, clique no botão para atualizar a listagem de faturas de acordo com os critérios aplicados. A tela exibirá uma lista de todas as faturas com status pendente. Cada fatura apresenta informações essenciais, como o código da mesma, nome do cliente, data de vencimento e valor.

Ao lado de cada fatura listada, há uma caixa de seleção que pode ser marcada para incluir a(s) fatura(s) na remessa de geração do(s) boleto(s).

:note:atlassian-note#B3D4FF

**Observação:** É possível selecionar faturas de diferentes clientes. Será gerado um boleto individual para cada fatura selecionada e um único arquivo de remessa contendo todos os boletos selecionados no momento da geração.

Após selecionar a(s) fatura(s) desejada(s), clique no botão . O sistema retornará para o box **Faturas Selecionadas** com a listagem das mesmas.

Tela geral do módulo Emissão de Boleto Bancário com faturas listadas

Clique no botão para concluir o processo de emissão do(s) boleto(s).