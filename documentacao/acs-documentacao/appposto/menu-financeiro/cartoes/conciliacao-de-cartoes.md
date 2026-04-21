---
title: Conciliação de Cartões
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/9175098
---

# Conciliação de Cartões

16truenonelisttrue

* * *

Conciliação de Cartões
======================

A conciliação de cartões é o processo de verificação e comparação das transações realizadas com cartões de crédito, débito e pagamento de frete registradas na empresa por meio das vendas ou recebimentos de pagamentos, com as informações fornecidas pelas operadoras de cartão (também chamadas de adquirentes). Tem como principal objetivo garantir que os valores das vendas, as taxas cobradas e os créditos a serem recebidos estejam corretos e devidamente registrados.

Alguns benefícios da utilização da conciliação de cartões são:

*   Precisão Financeira: Garante que os valores registrados no sistema estão corretos e refletem as transações reais.
    
*   Transparência: Proporciona uma visão clara das taxas cobradas pelas adquirentes e do valor liquido a ser recebido.
    
*   Agilidade na conferência dos caixas: Reduz a quantidade de cartões a serem verificados de forma significativa aumentando a eficiência operacional.
    

A conciliação de cartões no sistema é realizada em quatro etapas principais:

Coleta de Dados:

*   Transações Internas: O sistema registra todas as transações realizadas com cartões, sejam elas provenientes de vendas diárias ou recebimentos de pagamentos de faturas de clientes.
    
*   Dados das Adquirentes: As operadoras de cartão enviam periodicamente os extratos com detalhes das transações processadas, incluindo as taxas aplicadas e os valores liquidados.
    

**Nota:** A utilização do **PDV Móvel** ou **TEF integrado** para transações com cartões assegura que todos os dados sejam registrados de forma ágil e precisa no sistema. Informações cruciais, como Administradora, Tipo, Valor, NSU e Autorização, que são parâmetros de validação para a conciliação, são automaticamente capturadas pelo sistema, minimizando a possibilidade de erros operacionais, como a indicação incorreta da forma de pagamento ou a omissão de dados essenciais.

Comparação dos Registros:

*   O sistema realiza uma comparação minuciosa entre os dados internos e os relatórios fornecidos pelas adquirentes. Esta etapa inclui a verificação de valores brutos, taxas administrativas, prazos de repasses, NSU, autorizações, administradoras e data de emissão.
    

Identificação de Discrepâncias:

*   Durante a comparação, o sistema identifica eventuais diferenças entre os registros internos e os dados das adquirentes. Essas diferenças podem ocorrer por diversos motivos, como erros de processamento, taxas e prazos incorretos, transações não registradas, divergências nos valores de parcelamentos ou lançamentos em administradoras incorretas.
    

Ajustes Necessários:

*   Após a identificação de discrepâncias, a empresa deve tomar as medidas corretivas necessárias, como ajustar os valores no sistema por meio da prestação de contas. Isso garante que os registros financeiros estejam sempre em conformidade com os valores reais recebidos.
    

* * *

Configurações Iniciais
----------------------

Antes de iniciar o processo de conciliação de cartões, é imprescindível realizar algumas configurações essenciais para garantir que o sistema funcione corretamente. Esses ajustes são fundamentais para assegurar a precisão e a eficiência do processo de conciliação.

As configurações preliminares necessárias são realizadas em três módulos do sistema:

### Parâmetros do Sistema

Acesse o seguinte módulo:

Menu Opções > Sistema

Clique na aba lateral **Conciliação** para ser direcionado ao box Conciliação. Será apresentada a seguinte tela para preenchimento das informações repassadas pela empresa contratada para conciliação:

Tela para configuração do box Conciliação

Onde:

Guia SERVIÇO DE CONCILIAÇÃO:1800*   `Empresa`: Indica a empresa contratada responsável pela conciliação. No sistema, há integração com duas empresas diferentes: Statix e Conciliadora.
    
*   `Data Inicial`: Define a data a partir da qual as adquirentes começaram a enviar as transações para a empresa conciliadora. 

A guia **CONFIGURAÇÃO DO SERVIÇO** possui campos específicos, como o código da loja e chaves de acesso, que devem ser preenchidos com as informações fornecidas pela empresa conciliadora durante a configuração inicial.

Realizada as configurações necessárias desse módulo, clique no botão localizado na parte inferior da tela para gravar as alterações.

Guia CONFIGURAÇÃO DA CONCILIAÇÃO:1800

*   `Divergência do valor aceitável (R$)`: Durante a conciliação de cartões, é comum permitir uma margem de tolerância para divergências entre os valores registrados no sistema e os valores informados pelos extratos das operadoras de cartão. No sistema, a divergência máxima configurável é de R$0,10, permitindo que apenas pequenas discrepâncias sejam aceitas para a conciliação com divergência de valor.
    

Um exemplo prático dessas possíveis divergências é quando ocorre o parcelamento de uma transação:

*   Transação no valor de R$100 parcelada em 3 vezes no sistema:
    
    *   Parcela 1: R$33,34
        
    *   Parcela 2: R$33,33
        
    *   Parcela 3: R$33,33
        
*   Mesma transação no valor de R$100 parcelada em 3 vezes na adquirente:
    
    *   Parcela 1: R$33,33
        
    *   Parcela 2: R$33,33
        
    *   Parcela 3: R$33,34
        

Note que os valores das parcelas 1 e 3 estão invertidas entre o sistema e a adquirente. Nesse caso, se a margem de tolerância estiver configurada como R$0,00, as parcelas 1 e 3 não serão conciliadas devido seus valores estarem divergentes entre o sistema e a adquirente. No entanto, se a tolerância for configurada como R$0,01 ou mais, todas as parcelas dessa transação serão conciliadas.

Outros motivos pelos quais pode haver divergência no valor da transação entre o sistema e a adquirente incluem diferenças de arredondamento ou pequenas taxas de processamento.

### Cadastro de Adquirentes

Acesse o seguinte módulo:

Menu Cadastro > Adquirentes

Será apresentada a seguinte tela:

Listagem do cadastro de adquirentes

Localize o cadastro da operadora de cartão utilizada para realizar as transações de vendas e clique no ícone . Será apresentada a seguinte tela:  

Tela de consulta de adquirente

No campo **Código para Conciliação**, clique no ícone . Será apresentada a seguinte tela:

Tela para seleção de código de adquirente para conciliação

Busque e selecione a opção referente a operadora em questão.

No campo **Participa da Conciliação,** indique o valor **Sim**.

Clique no botão localizado na parte inferior da tela para gravar as alterações. Repita o processo para todas as adquirentes utilizadas na empresa.

### Cadastro de Bandeiras de Cartão

Acesse o seguinte módulo:

Menu Cadastro > Bandeiras de Cartão

Será apresentada a seguinte tela:

Listagem do cadastro de bandeiras de cartão

Clique no ícone de cada bandeira. Será apresentada a seguinte tela:

Tela de consulta de bandeira

No campo **Código para Conciliação**, clique no ícone . Será apresentada a seguinte tela:

Tela para seleção de código da bandeira para conciliação

Busque e selecione a opção referente a bandeira em questão.

No campo **Participa da Conciliação,** indique o valor **Sim**.

No campo **Cartão Pré-Pago**, indique se a bandeira é do tipo pré-pago. Quando selecionada a opção **Sim**, é necessário selecionar a bandeira que fará parte do agrupamento. Essa funcionalidade tem como principal objetivo agrupar os lançamentos de cartões na geração das faturas, sendo especialmente útil em situações em que diferentes administradoras possuem recebimentos consolidados em um único lançamento no extrato bancário, como, por exemplo, **Master Débito** e **Pré-pago Master Débito**.

Clique no botão localizado na parte inferior da tela para gravar as alterações. Repita o processo para todas as bandeiras utilizadas nas transações de vendas da empresa.

* * *

Conciliação
-----------

Finalizadas as configurações iniciais, acesse o seguinte módulo para iniciar o processo de conciliação dos cartões:

Menu Financeiro > Conciliação de Cartões

* * *

Apresentação da tela e campos
-----------------------------

Ao acessar o módulo de conciliação de cartões, a tela a seguir será exibida. Por padrão, ela carrega as informações previamente configuradas com base na última parametrização realizada:

Tela geral do módulo Conciliação de Cartões

### Botões de ação

No canto superior direito dá página, existem os botões de ações a serem realizadas no processo de conciliação.

Botões de ação da conciliação de cartões

*   Botão
    

Realiza o envio das informações de todas as transações realizadas no sistema para a empresa conciliadora. Este envio é importante para quando é necessário ser realizado o processo de conciliação direto pelo painel da própria conciliadora.

*   Botão
    

Realiza a consulta e comparação dos dados internos do sistema com o extrato enviado pelas adquirentes, identificando possíveis divergências e garantindo a precisão no processo de conciliação, seja das **vendas** em si ou dos **pagamentos**.

*   Botão
    

Redireciona o usuário para uma nova aba para geração do relatório de conciliação, detalhando as conciliações realizadas.

### Filtros

Logo abaixo, são apresentados os filtros utilizados para a consulta dos dados necessários para realizar a conciliação:

Filtros para consulta das transações

*   `Empresa`: Este campo permite selecionar a empresa para a qual a conciliação dos cartões será realizada. O sistema possibilita escolher uma empresa diferente da que está atualmente logada, sem a necessidade de sair e entrar novamente em cada empresa separadamente para concluir o processo. Além disso, é possível realizar a conciliação em mais de uma empresa simultaneamente. Para isso, clique sobre o campo **Empresa**, selecione as empresas desejadas na tela apresentada e clique no botão .
    

Tela para selecionar empresa

*   `Conciliar`: Este filtro determina qual tipo de extrato será conciliado, oferecendo duas opções:
    
    *   `Extrato de Vendas`: O sistema buscará e confrontará os dados referentes às vendas realizadas com cartões do tipo crédito, débito e pagamento de frete. A conciliação deste extrato é essencial para verificar se as vendas registradas internamente coincidem com as informações fornecidas pelas adquirentes, garantindo que todas as operações de venda tenham sido processadas corretamente.
        
    *   `Extrato de Pagamentos`: Se refere à conciliação dos valores efetivamente repassados pelas adquirentes às contas bancárias da empresa. A conciliação deste extrato é crucial para assegurar que os valores previstos para recebimento foram creditados conforme esperado e que não há divergências entre o que foi acordado e o que foi efetivamente pago.
        

:note:atlassian-note#B3D4FF

**Observação:** Ao selecionar a opção Extrato de Pagamentos, é acrescentado um novo botão de ação no canto superior direito da tela.

*   Botão
    

Redireciona o usuário para o módulo de **Baixa de Cartões****.** Nesse módulo, será realizada a baixa das transações conciliadas, confirmando que os valores previstos foram efetivamente recebidos e registrando essas informações no Livro Caixa do sistema. A baixa de uma transação envolve a atualização dos saldos e o reconhecimento oficial de que o valor correspondente àquela transação já foi creditado na conta bancária da empresa. Além disso, a baixa pode incluir a contabilização das taxas e outras despesas associadas à operação, assegurando que os dados financeiros reflitam com precisão a situação real das contas da empresa.

**ATENÇÃO:** A conciliação do Extrato de Pagamentos deve ser realizada **após** a conciliação do Extrato de Vendas.

*   C`ontas Bancárias`: Este filtro permite selecionar uma ou mais contas bancárias específicas para exibir apenas as transações de pagamentos que serão creditados nessa(s) conta(s). É habilitado somente no processo de conciliação do Extrato de Pagamentos.
    
*   `Adquirentes`: Este filtro permite a seleção de uma ou mais adquirentes para visualizar e conciliar apenas as transações processadas por essas empresas. É útil para segmentar as transações conforme a adquirente e facilitar a identificação de eventuais discrepâncias.
    
*   `Bandeiras`: Este filtro permite selecionar quais bandeiras de cartões deseja incluir na conciliação. Por exemplo, pode optar por conciliar apenas as transações feitas com cartões Visa.
    
*   `Finalizadoras`: Este filtro permite selecionar quais as formas de pagamento serão listadas, podendo ser **Cartão de Crédito**, **Cartão de Débito**, **Cartão de** **Pagamento de Frete**, **Carteira Digital** ou **PIX**.
    
*   `Movimentações`: Este filtro permite selecionar quais status de conciliação dos cartões serão listados, podendo ser **Conciliados**, **Conciliados com Divergência** ou **Não Conciliados.**
    
*   `Data Inicial` e `Data Final`: Período inicial e final das transações de cartão que serão consultadas e relacionadas.
    

:note:atlassian-note#B3D4FF

**Observação:** Quando selecionada a opção **Extrato de Vendas** no filtro **Conciliar**, as datas informadas serão referentes as datas de **emissão** dos cartões listados. Já quando indicada a opção **Extrato de Pagamentos**, as datas informadas serão referentes as datas de **previsão** dos cartões listados.

### Guia **Vendas** ou **Pagamentos**

Abaixo dos filtros, está localizada a guia **VENDAS** ou **PAGAMENTOS** (a descrição da guia varia conforme a opção selecionada no filtro **Conciliar**). Nesta guia, são apresentados resumos detalhados dos valores, segmentados por diferentes status de conciliação.

Guia Vendas

Guia Pagamentos

Esses resumos são extremamente úteis para comparar as informações das transações registradas no sistema \[\] com os dados fornecidos pela adquirente \[\].

Definição dos resumos:

*   `Quantidade`: Exibe o número total de transações ou pagamentos incluídos no processo de conciliação. Permite ao usuário visualizar a quantidade total de operações realizadas, facilitando a verificação do volume de transações em relação ao período selecionado.
    
*   `Total Bruto`: Representa o valor bruto total das transações ou pagamentos, sem a dedução de quaisquer taxas ou despesas. Muito importante para ter uma visão geral do montante total que foi processado antes da aplicação de taxas administrativas ou outras deduções.
    
*   `Conciliados`: Mostra o valor total das transações ou pagamentos que foram conciliados sem divergências entre o sistema e o extrato da adquirente. Confirma que as transações listadas foram corretamente conciliadas e que os valores no sistema coincidem com os valores fornecidos pela adquirente.
    
*   `Conc com Diverg`: Indica o valor das transações que foram conciliadas, mas que apresentam discrepâncias nas **taxas administrativas** ou **prazos de repasse** entre os dados registrados no sistema e as informações fornecidas pela adquirente. Uma vez identificada a divergência, é necessário realizar as correções dessas informações nos Cadastros das Administradoras para garantir a precisão dos registros futuros.
    

:note:atlassian-note#B3D4FF

**Observação:** Para garantir a precisão dos registros, o sistema automaticamente atualiza as informações discrepantes das **taxas administrativas** ou **prazos de repasse** nas transações, ajustando os dados das mesmas no sistema para que fiquem em conformidade com os dados fornecidos pela adquirente. Isso assegura que os registros internos reflitam exatamente as condições reais das transações processadas pela adquirente.

*   `Não Conciliados`: Exibe o valor total das transações ou pagamentos que não foram conciliados, ou seja, aqueles que não possuem correspondência entre o sistema e o extrato da adquirente. Este campo alerta o usuário sobre as transações que precisam ser revisadas e possivelmente corrigidas para garantir que todos os valores estejam devidamente conciliados.
    
*   `Taxa Admin`: Mostra o valor total das taxas administrativas cobradas pelo sistema e pelas adquirentes sobre as transações ou pagamentos processados.
    
*   `Cancelamentos`: Exibe o valor total das transações que constam com status de canceladas na adquirente. Este campo permite ao usuário monitorar os cancelamentos realizados, garantindo que eles sejam corretamente refletidos tanto no sistema quanto nos extratos das adquirentes.
    
*   `Total Liquido`: Representa o valor total líquido das transações ou pagamentos após a dedução das taxas administrativas e de quaisquer cancelamentos. É o montante efetivo que será recebido pela empresa, sendo essencial para a análise financeira e o fechamento de caixa.
    
*   `Acertos`: Indica o percentual de cartões conciliados em relação ao total de cartões no período selecionado. Esse percentual ajuda a monitorar o progresso da conciliação, permitindo identificar rapidamente o volume de cartões que ainda precisam ser conciliados.
    

Esses resumos proporcionam uma visão clara e organizada dos status das conciliações, permitindo que o usuário identifique rapidamente onde estão as correspondências, as discrepâncias e os valores relevantes para a gestão financeira eficaz. Além das informações, os resumos **Conciliados**, **Conc com Diverg** e **Não Conciliados** servem como filtros para apresentação da listagem das transações.

### Listagem de transações

Abaixo dos resumos, são listadas as transações consultadas de acordo com os filtros selecionados, com diversas informações relevantes para o processo de conciliação de cartões.

Listagem de cartões

Após a consulta do extrato da conciliação, as transações são categorizadas em três principais status de conciliação e marcadores: **Não Conciliados** , **Conciliados com Divergência** e **Conciliados** .

**Não Conciliados:** Esse status indica que a transação não foi conciliada, ou seja, há uma falta de correspondência total entre os registros do sistema e os dados fornecidos pela adquirente. Dentro dessa categoria, há duas possibilidades:

**Cartão existe na adquirente, mas não existe no sistema**: Essa situação ocorre quando a adquirente registra uma transação que não foi registrada no sistema. Isso pode indicar que a transação foi processada pela adquirente, mas, por algum motivo, não foi inserida ou reconhecida internamente no sistema.

**Cartão existe no sistema, mas não existe na adquirente**: Neste caso, o sistema registra uma transação que não aparece nos dados fornecidos pela adquirente. Isso pode indicar que a transação foi registrada internamente, mas não foi processada pela adquirente, ou foi processada de maneira diferente.

**Conciliados com Divergência:** Esse status refere-se a transações que foram parcialmente conciliadas, mas apresentam discrepâncias em certos aspectos, como:

#DEEBFF

**Diferenças nas Taxas Administrativas**: As taxas aplicadas à transação no sistema podem não corresponder às taxas registradas pela adquirente.

Onde:

*   `Cad`: Representa o valor da taxa cadastrada no sistema.
    
*   `Conc`: Representa o valor da taxa repassada pela adquirente.
    
*   `Indic`: Representa o valor da diferença entre as informações das taxas.
    
    *   Caso esteja na cor vermelha, significa que a taxa no cadastro do sistema é menor que a taxa repassada pela adquirente.
        
    *   Caso esteja na cor verde, significa que a taxa no cadastro do sistema é maior que a taxa repassada pela adquirente.
        

#DEEBFF

**Diferenças no Prazo de Repasse**: O tempo registrado no sistema para que os fundos sejam creditados pode diferir do prazo informado pela adquirente.

Onde:

*   `Cad`: Representa o prazo de repasse cadastrado no sistema.
    
*   `Conc`: Representa o prazo de repasse informado pela adquirente.
    
*   `Indic`: Representa o valor da diferença entre as informações dos prazos.
    
    *   Caso esteja na cor vermelha, significa que o prazo no cadastro do sistema é menor que o prazo repassado pela adquirente.
        
    *   Caso esteja na cor verde, significa que o prazo no cadastro do sistema é maior que o prazo repassado pela adquirente.
        

**Conciliados:** Este status indica que as transações foram conciliadas com sucesso, sem nenhuma divergência entre os registros internos e os dados fornecidos pela adquirente. As informações de ambas as fontes coincidem perfeitamente, indicando que a transação foi processada e registrada corretamente.

* * *

Conciliação de Vendas conciliacao-vendas
----------------------------------------

Acesse o módulo de **Conciliação de Cartões**.

Na tela apresentada, procure o campo **Conciliar** nos filtros e selecione a opção **Extrato de Vendas**.

Indique a **Data Inicial** e a **Data Final** para definir o intervalo que deseja consultar e clique no botão localizado no canto superior direito da tela.

Campos para preencher no processo de conciliação de vendas

O sistema irá buscar todas as transações de cartões **emitidas** no período selecionado, comparando os registros internos com as informações fornecidas pelas adquirentes. Ao final da consulta, será retornado um resumo na tela:

Resumo da conciliação de vendas

No resumo exibido, são destacadas as seguintes informações:

*   **Cartões no AppPosto:** Exibe o número total de transações de cartões registradas no sistema.
    
*   **Cartões nas Adquirentes**: Exibe o número total de transações de cartões retornadas pela adquirente durante o processo de conciliação.
    
*   **Separação por Status de Conciliação**: Apresenta a distribuição das transações de acordo com o status de conciliação, permitindo uma visualização clara da situação de cada transação:
    
    *   **Conciliados com sucesso**: Transações que foram conciliadas corretamente.
        
    *   **Conciliados com divergência**: Transações onde foram identificadas discrepâncias, como diferenças em taxas ou prazos.
        
    *   **Registros não conciliados**: Transações que não foram encontradas ou registradas de forma incompatível entre o sistema e a adquirente.
        

Tela geral da conciliação após consulta inicial do dia

Após realizar a consulta, o principal objetivo para finalizar a conciliação deve ser concentrado nas transações **não conciliadas**, pois:

*   As **transações conciliadas** já estão corretas e não requerem ajustes adicionais.
    
*   As **transações conciliadas com divergência** também estão conciliadas, mas exigem uma verificação posterior para ajustar detalhes, como **taxas administrativas** ou **prazos de repasse** das administradoras.
    

Para facilitar o processo, utilize o filtro **Movimentações** ou o resumo **NÃO CONCILIADOS** na guia **VENDAS** para exibir apenas as transações que ainda não foram conciliadas e precisam de atenção.

Tela com transações não conciliadas

Existem algumas razões comuns pelas quais transações de cartões podem não ser conciliadas. Abaixo estão alguns exemplos típicos de erros de lançamentos no PDV no momento da venda:

*   Lançamento em administradora incorreta:
    
    *   Exemplo: Na adquirente, a transação foi registrada como VISA DÉBITO, mas no sistema foi lançada como ELO DÉBITO.
        
*   Lançamento como a finalizadora dinheiro:
    
    *   Exemplo: Na adquirente, a transação foi registrada como MASTERCARD CRÉDITO, mas no sistema foi lançada como dinheiro.
        
*   Valores e quantidades divergentes:
    
    *   Exemplo: Na adquirente, constam duas transações de MASTERCARD CRÉDITO, uma de R$100 e outra de R$50. No sistema, o operador somou os dois valores e lançou como uma única venda de MASTECARD CRÉDITO no valor de R$150.
        
*   Cartões parcelados:
    
    *   Exemplo: Divergência de centavos em uma parcela entre o registro da adquirente e o sistema.
        

:note:atlassian-note#B3D4FF

**Observação:** Se houver tolerância configurada nos parâmetros do sistema, a transação seria conciliada automaticamente.

Como explicado anteriormente, as transações não conciliadas podem ser classificadas em **dois** cenários distintos:

Cartão existe na adquirente, mas não no sistema.1800

**Lançamento em administradora incorreta:** conciliacao-manual

Nesse caso, deverá ser selecionada manualmente a transação corresponde para concluir a conciliação.

Ao clicar no ícone , a seguinte tela de conciliação manual será apresentada:

Tela para conciliação manual

*   **Lado esquerdo - DADOS DA ADQUIRENTE**:
    
    *   Consta as informações da transação consultada na adquirente dispostas verticalmente, identificadas pelo cabeçalho DADOS DA ADQUIRENTE. Essas informações incluem todos os detalhes da transação conforme registrados pela adquirente.
        
*   **Lado direito - DADOS DO SISTEMA**:
    
    *   Constam a(s) transação(ões) correspondente(s) no sistema que possui(em) o mesmo **valor** e **data de emissão**, exibida(s) horizontalmente sob o cabeçalho DADOS DO SISTEMA. Se houver múltiplas transações que obedeçam esses requisitos, todas serão listadas para comparação e conciliação.
        

As informações exibidas em ambos os lados (adquirente e sistema) são as mesmas, para facilitar a comparação, permitindo uma visualização clara e rápida de todas as informações relevantes, incluindo:

*   `Emissão`: Data em que a transação foi realizada.
    
*   `Previsão`: Data prevista para o recebimento do valor da transação.
    
*   `Valor`: Montante total da transação.
    
*   `Parcela`: Número da parcela da transação (se for o caso de parcelamento).
    
*   `NSU`: Número Sequencial Único, identificador da transação.
    
*   `Autorização`: Código de autorização fornecido pela adquirente.
    
*   `Bandeira`: Operadora do cartão (ex.: Visa, Mastercard).
    
*   `Adquirente`: Instituição financeira responsável pelo processamento da transação.
    
*   `Pagamento`: Modalidade do pagamento (ex.: débito, crédito, etc.).
    
*   `Taxa %`: Percentual de taxa aplicada à transação.
    
*   `Valor Taxa`: Valor monetário da taxa aplicada.
    
*   `Prazo`: Tempo entre a data da transação e o repasse do valor.
    
*   `Líquido`: Montante final a ser recebido após dedução das taxas.
    

Após identificar a transação correspondente no sistema para a transação apresentada pela adquirente, marque a caixa de seleção correspondente à mesma e clique no botão . Uma tela de confirmação será exibida:

Tela de confirmação da conciliação

Clique no botão para finalizar o processo de conciliação.

Ao confirmar, o sistema irá automaticamente substituir as informações da transação no sistema com os dados fornecidos pela adquirente. Isso inclui:

*   Alteração da administradora (caso esteja incorreta);
    
*   Ajuste das taxas aplicadas à transação;
    
*   Correção do prazo de repasse;
    
*   Preenchimento ou correção dos campos **NSU** e **Autorização** que estavam divergentes ou em branco.
    

* * *

**Lançamento como finalizadora dinheiro:**

Pode ocorrer, ao clicar no ícone , que nenhum cartão seja listado com a mesma data de emissão ou valor. Uma das causas mais comuns para isso é a venda ter sido lançada como **dinheiro** no sistema, ao invés de cartão.

Tela para conciliação manual sem resultado

Para corrigir esse tipo de erro, utilize o botão , que auxilia na transformação da venda em dinheiro para cartão, permitindo assim a conciliação adequada.

Ao clicar nesse botão, será apresentada a seguinte tela contendo todas as vendas registradas como dinheiro naquele dia, com **valor igual ou superior** ao valor do cartão que está sendo conciliado:

Tela para seleção de venda em dinheiro

A listagem inclui informações essenciais para identificar a transação correta, como operador responsável pela venda, número do documento fiscal e valor de cadastro.

Localize na listagem a venda em dinheiro correspondente à transação que será transformada em cartão. Marque a caixa de seleção ao lado da mesma e clique no botão .

O sistema irá automaticamente criar a transação de cartão na prestação do operador que realizou a venda selecionada e deduzir o valor do cartão do montante em dinheiro da prestação, restando como dinheiro somente a diferença entre o valor da venda e o valor do cartão.

Esse processo corrige o lançamento original rapidamente, permitindo que a transação de cartão seja conciliada corretamente e garantindo que o saldo em dinheiro também seja ajustado de forma adequada.

* * *

**Valores e quantidades de cartões divergentes:**

Nesse caso, a quantidade de cartões entre o sistema e a adquirente são diferentes devido o lançamento incorreto da transação no sistema.

Tela com cartões não conciliados devido lançamento incorreto

A correção deve ser feita manualmente por meio da prestação de contas do operador que realizou o lançamento.

Para isso, clique no ícone de atalho ou acesse o seguinte módulo:

Menu Movimento > Cartões

Será apresentada a seguinte tela:

Tela de cartões

Utilize os filtros:

*   `Data Inicial` e `Data Final`: Insira o período que inclui o(s) cartão(ões) que será(ão) corrigido(s).
    
*   `Data Utilizada`: Selecione a opção **Emissão**.
    
*   `Conciliação`: Escolha a opção **Não Efetuada** para listar apenas os cartões pendentes de conciliação.
    

Após aplicar os filtros, clique no botão .

Dessa forma, serão listados apenas os cartões que não foram conciliados. Corrija o lançamento apresentado de acordo com a informação da adquirente, excluindo o lançamento e criando novos de acordo com a informação da adquirente:

*   Clique no ícone do lançamento incorreto e confirme a exclusão na tela que for apresentada.
    
*   Após a exclusão, clique no botão para inserir os dados do(s) cartão(ões) corretamente.
    

Tela para lançamento do cartão manualmente

*   Preencha com atenção os campos destacados em vermelho, especialmente na guia **Cartão**, certificando-se de:
    
    *   Selecionar a **Administradora** correta.
        
    *   Informar o **Valor (R$)** de acordo com os dados fornecidos pela adquirente.
        
*   Finalize o processo clicando em .
    

Após realizar o lançamento manual dos cartões, siga os passos abaixo para concluir o processo de conciliação:

*   **Retorno ao Módulo de Conciliação**
    
    *   Acesse novamente o módulo de conciliação de cartões.
        
*   **Verificação de Quantidades e Valores**
    
    *   Certifique-se de que a quantidade e o valor dos cartões pendentes de conciliação agora estão corretos e equivalentes às informações da adquirente.
        

Tela com cartões não conciliados após correção dos cartões manualmente

*   **Conciliação Manual**
    
    *   Inicie o processo de [conciliação manual](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/9175098/Concilia+o+de+Cart+es#conciliacao-manual) dos cartões, garantindo que todas as transações lançadas estejam devidamente conciliadas.
        

* * *

Repita os processos descritos anteriormente para todas as transações que apresentem o status **Não Conciliado**. Continue esse procedimento até que o resumo **ACERTOS**, localizado na guia **VENDAS**, atinja 100%.

Cartão existe no sistema, mas não na adquirente.1800

Quando for identificada uma transação que não existe na adquirente, é necessário verificar quem realizou o lançamento para que as correções possam ser feitas. Um possível motivo para essa divergência pode ser a junção de vários cartões em um único lançamento.

:note:atlassian-note#B3D4FF

**Observação**: O ícone pode ser utilizado para consultar detalhes adicionais sobre a venda.

Tela com detalhes da venda

* * *

Conciliação de Pagamentos
-------------------------

Acesse o módulo de **Conciliação de Cartões**.

Na tela apresentada, procure o campo **Conciliar** nos filtros e selecione a opção **Extrato de Pagamentos**.

Indique a **Data Inicial** e a **Data Final** para definir o intervalo que deseja consultar e clique no botão localizado no canto superior direito da tela.

Campos para preencher no processo de conciliação de pagamentos

O sistema irá buscar todas as transações de cartões com prazo de **recebimento** no período selecionado, comparando os registros internos com as informações fornecidas pelas adquirentes. Ao final da consulta, será retornado um resumo na tela:

Resumo da conciliação de pagamentos

No resumo exibido, são destacadas as seguintes informações:

*   `Cartões no AppPosto`: Exibe o número total de transações de cartões registradas no sistema.
    
*   `Cartões nas Adquirentes`: Exibe o número total de transações de cartões retornadas pela adquirente durante o processo de conciliação.
    
*   `Separação por Status de Conciliação`: Apresenta a distribuição das transações de acordo com o status de conciliação, permitindo uma visualização clara da situação de cada transação:
    
    *   `Conciliados com sucesso`: Transações que foram conciliadas corretamente.
        
    *   `Conciliados com divergência`: Transações onde foram identificadas discrepâncias, como diferenças em taxas ou prazos.
        
    *   `Registros não conciliados`: Transações que não foram encontradas ou registradas de forma incompatível entre o sistema e a adquirente.
        

Após realizar a consulta, o principal objetivo para finalizar a conciliação deve ser concentrado nas transações **não conciliadas**, pois:

*   As **transações conciliadas** já estão corretas e não requerem ajustes adicionais.
    
*   As **transações conciliadas com divergência** também estão conciliadas, mas exigem uma verificação posterior para ajustar detalhes, como **taxas administrativas** ou **prazos de repasse** das administradoras.
    

Para realizar a conciliação das transações que não foram conciliadas na consulta, siga os passos descritos na seção [**Conciliação de Vendas**](https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/9175098/Concilia+o+de+Cart+es#conciliacao-manual).

Após conciliar todos os cartões, o próximo passo é confirmar o recebimento dos valores. Para isso, será necessário gerar a baixa dos cartões.

1.  **Filtrar Adquirente**
    
    *   Clique no filtro **Adquirente** para selecionar uma adquirente específica.
        

Filtrar adquirente para gerar baixa

2.  **Selecionar Adquirente**
    
    *   Escolha a adquirente desejada e clique no botão .
        
3.  **Gerar Baixa**
    
    *   Clique no botão para ser redirecionado ao módulo de **Baixa de Cartões**.
        

Box Baixa de Cartões

A partir desse ponto, o processo será idêntico ao descrito no módulo de Baixa de Cartões. No entanto, os filtros já estarão preenchidos e bloqueados para edição com base nas definições feitas no módulo de conciliação, exceto o campo **Bandeira**, que ainda poderá ser filtrado manualmente.