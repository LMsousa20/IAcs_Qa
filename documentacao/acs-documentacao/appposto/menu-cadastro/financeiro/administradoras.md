---
title: Administradoras
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/159481869
---

# Administradoras

16truenonelisttrue

Administradoras
===============

O módulo de **Cadastro de Administradoras** é responsável por consolidar e gerenciar as informações de transações de cartão, unindo dados da adquirente e da bandeira. Ele permite registrar detalhes adicionais como taxas e prazos de repasse, essenciais para a conciliação financeira precisa.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Cadastro > Financeiro > Administradoras

Será apresentada a seguinte tela:

Tela de Listagem de Administradoras

Ao acessar o módulo, a tela principal será exibida, permitindo a visualização e o gerenciamento das administradoras já cadastradas. Esta tela é organizada para facilitar a navegação e a inserção de dados.

As principais funcionalidades são:

**Adicionar Nova Administradora**

Permite o cadastro de uma nova administradora de cartões no sistema, garantindo que todas as administradoras relevantes estejam devidamente registradas.

**Filtro de Pesquisa**

Facilita a busca de administradoras específicas pelo nome ou situação, agilizando a localização das informações necessárias.

**Edição e Visualização**

Permite modificar ou consultar os detalhes de uma administradora já cadastrada, assegurando a atualização constante dos dados.

* * *

Apresentação da tela e campos
-----------------------------

Ao clicar no botão , a seguinte tela será apresentada, organizada em três boxes destacados como abas no canto direito da tela.

### Box 1 - Nova Administradora

Box Nova Administradora

*   `Descrição`: Nome da administradora a ser cadastrada. Recomenda-se seguir o padrão NOME OPERADORA + NOME BANDEIRA + TIPO DE CARTÃO, como, por exemplo, CIELO MASTERCARD CRÉDITO.
    
*   `Situação`: Indica o estado atual do cadastro. Se estiver inativa, a administradora não será apresentada no PDV nem no AppPosto para lançamentos manuais.
    
*   `Tipo de Cartão`: Define a categoria da administradora cadastrada, podendo ser `Cartão de Crédito`, `Cartão de Débito`, `Pagamento de Frete`, `Carteira Digital` ou `PIX`.
    
*   `Tipo da Carteira`: Habilitado somente quando o `Tipo de Cartão` selecionado for `Carteira Digital`. O sistema possui integração direta com as seguintes carteiras digitais: `Mercado Pago`, `AME Digital`, `PicPay` ou `Premmia`.
    
    *   A configuração dessas carteiras deve ser realizada nos **Parâmetros do Sistema** e **Cadastro de Pontos de Vendas**.
        
    *   Caso a utilização da carteira digital não seja de forma integrada, deve-se escolher a opção `Outro`.
        
*   `Operação`: Define como a administradora será utilizada no sistema. As opções disponíveis são:
    
    *   `POS Avulso`**:** Permite que as vendas sejam efetuadas diretamente pelo PDV de forma manual, sem integração. Vendas realizadas no PDV Móvel também serão direcionadas para essas administradoras, desde que os retornos estejam configurados corretamente.
        
    *   `Integrado API`**:** Indica que a venda será realizada por meio de integração com API. Essa opção é usada para Carteiras Digitais ou PIX integrados.
        
    *   `Integrado TEF`**:** Indica que a venda será realizada através de integração com PINPAD, geralmente utilizado em lojas de conveniência.
        
*   `Efetuar Baixa Automática`: Define se as administradoras do tipo `PIX` ou `Carteira Digital` realizarão automaticamente a baixa dos recebimentos no livro caixa.
    
    *   `Sim`: Realiza a baixa automática do recebimento no livro caixa **desde que** o campo `Prazo de Repasse (dias)` esteja configurado com o valor **0**.
        
    *   `Não`: Não realiza a baixa automática do recebimento no livro caixa, independentemente do prazo de repasse configurado. Esta opção é indicada quando a conciliação bancária desses recebimentos é realizada no módulo de **Extrato Bancário**.
        
*   `Operadora`: Campo para referenciar a operadora cadastrada e configurada no módulo de **Cadastro de Adquirentes**. É essencial a configuração correta, pois é por meio dela que o sistema identificará a administradora correspondente para vendas no PDV Móvel.
    
*   `Bandeira`: Campo para referenciar a bandeira cadastrada e configurada no módulo de **Cadastro de Bandeiras**. A correta configuração desse campo garante que o sistema associe corretamente a administradora à venda realizada no PDV Móvel.
    
*   `Fornecedor`: Campo para referenciar a adquirente cadastrada no módulo de **Cadastro de Fornecedores**.
    
*   `Conta Bancária`: Define a conta bancária para repasse dos valores das vendas realizadas.
    

Guia TEF1800

Guia utilizada para configuração das administradoras que serão integradas via TEF.

*   `Gerenciador TEF`**:** Define qual será o gerenciador TEF utilizado. As opções disponíveis são:
    
    *   `Nenhum`**:** Indica ausência de integração TEF.
        
    *   `Dedicado - Sitef`**:** TEF dedicado operado pelo **Sitef**.
        
    *   `TEF IP - Pay & Go`**:** Integração TEF via IP com o sistema **Pay & Go**.
        
    *   `TEF IP - Padrão`**:** Configuração genérica para TEF via IP.
        
    *   `TEF IP - Hipercard`**:** Configuração TEF para cartões **Hipercard**.
        
    *   `TEF IP - Tecban`**:** Integração TEF com serviços da **Tecban**.
        
    *   `TEF IP - Petrocard`**:** Configuração TEF para cartões de combustível **Petrocard**.
        
    *   `TEF IP - Fidelize`**:** Integração TEF para cartões de fidelidade.
        
*   `Cartão Combustível (Sitef)`**:** Configuração específica para processar transações com cartões destinados à compra de combustíveis integrados ao sistema **Sitef**.
    
    *   `Não`**:** Indica que a opção ou funcionalidade não está habilitada ou selecionada.
        
    *   `Padrão`**:** Configuração genérica ou predefinida pelo sistema, aplicada na ausência de personalização.
        
    *   `Ticket Car`**:** Sistema de pagamento específico para gestão de abastecimento e despesas com combustíveis.
        
*   `Código Cartão Fidelize`**:** Identificador único utilizado para gerenciar cartões associados ao programa de fidelidade **Fidelize**.
    

:info:atlassian-info#B3D4FF

Os campos de seleções `Gerenciador TEF` e `Cartão Combustível (Sitef)` serão habilitados para edição apenas quando a `Operação` selecionada for `Integrado TEF`**.**

### Box 2 - Complemento

Box Complemento

*   `Taxa administrativa (%)`: Percentual cobrado pela adquirente como remuneração pelos serviços de intermediação e processamento das transações realizadas com a administradora. Essa taxa é aplicada sobre o valor total de cada venda e pode variar conforme o contrato estabelecido entre o beneficiário e a operadora de cartão.
    
*   `Valor em espécie R$`: Valor fixo cobrado pela adquirente por cada transação realizada. Esta taxa é aplicada independentemente do valor da venda e deve ser somada à Taxa Administrativa (%) para cálculo da **taxa total** de cada transação. É utilizada, por exemplo, em administradoras como a **GoodCard**, que aplicam tanto a taxa percentual quanto a taxa fixa por transação.
    
*   **Exemplo de cálculo:**
    
    *   Transação: R$ 50,00
        
    *   Taxa administrativa (%): 1% → R$ 0,50
        
    *   Valor em Espécie (R$): R$ 2,00
        
    *   **Taxa total cobrada**: R$ 2,50
        

É essencial preencher estes campos corretamente com os valores de taxa acordados com a adquirente. A precisão dessas informações impacta diretamente a conciliação de cartões e bancária, garantindo que os valores registrados no sistema correspondam às movimentações financeiras reais e permitindo o cálculo exato dos valores líquidos a serem recebidos.

Guia PIX:1800

Permite a configuração de taxas específicas para transações PIX quando integradas com a **FixPay/Shipay**, que possuem regras diferenciadas para determinadas situações.

*   `Taxa fixa R$`: Valor fixo aplicado às transações PIX, independentemente do montante da operação.
    
*   `Limite para taxa fixa R$`: Valor máximo da transação para aplicação da taxa fixa. Caso o valor da transação ultrapasse esse limite, será aplicada a taxa administrativa percentual.
    
*   `Isenção de taxa até`: Data limite para o qual não haverá cobrança da taxa fixa configurada.
    

Guia DESCONTO/ACRÉSCIMO:1800

Esta guia permite configurar descontos e acréscimos aplicáveis às transações processadas por cada administradora.

*   `Valor (%)`: Percentual de desconto ou acréscimo aplicado sobre o valor da transação.
    
*   `Tipo`: Define se o ajuste será desconto ou acréscimo percentual no valor final da operação.
    
*   `Inserir custo financeiro`: Opção para incluir despesas operacionais no cálculo da transação. Para essa funcionalidade, é necessário que a administradora esteja configurada como `Integrado TEF`.
    
*   `Prazo de repasse (dias)`: Período estipulado para a transferência dos valores das transações ao beneficiário.
    

A configuração correta desse prazo é fundamental para a conciliação de cartões e bancária, assegurando que as previsões de recebimento no sistema estejam alinhadas com os repasses efetivamente realizados pela operadora à conta bancária.

### Box 3 - Parcelamento

Box Parcelamento

*   `Permite parcelamento`**:** Define se a administradora aceitará parcelamento no momento do lançamento da venda.
    

Este campo será habilitado somente se o `Tipo de Cartão` selecionado for `Cartão de Crédito`.

*   `Número máximo de parcelas`**:** Define o limite máximo de parcelas permitidas para o pagamento parcelado.
    
*   `Prazo entre as parcelas (dias)`**:** Determina o intervalo em dias para o repasse dos valores de cada parcela.
    
*   `Taxa de juros entre as parcelas (%)`**:** Percentual de juros cobrado pelo estabelecimento pelo parcelamento do valor da venda.
    

Guia TAXA DE PARCELAMENTO:1800

Esta guia permite a configuração das taxas aplicadas para diferentes quantidades de parcelas:

*   `02 parcelas (%)`: Percentual de taxa aplicado para cada parcela quando realizado parcelamento em 2 vezes.
    
*   `03 parcelas (%)`: Percentual de taxa aplicado para cada parcela quando realizado parcelamento em 3 vezes.
    
*   `04 parcelas (%)`: Percentual de taxa aplicado para cada parcela quando realizado parcelamento em 4 vezes.
    
*   `05 parcelas (%)`: Percentual de taxa aplicado para cada parcela quando realizado parcelamento em 5 vezes.
    
*   `A partir de 06 parcelas (%)`: Percentual de taxa aplicado para cada parcela quando realizado parcelamento em 6 vezes ou mais.
    

* * *

Como Funciona (Passo a Passo)
-----------------------------

Esta seção detalha os procedimentos para incluir, editar e excluir administradoras no sistema.

### Incluir Administradora

Para cadastrar uma nova administradora no sistema, siga os passos abaixo:

Acesse o módulo de Administradoras através do caminho: `Menu Cadastro > Financeiro > Administradoras`.

Na tela de listagem das administradoras, clique no botão .

Preencha os campos no box **Nova Administradora**:

*   `Descrição`: Insira o nome da administradora, seguindo o padrão NOME OPERADORA + NOME BANDEIRA + TIPO DE CARTÃO (ex: CIELO MASTERCARD CRÉDITO).
    
*   `Situação`: Selecione `Ativa` para que a administradora esteja disponível para uso.
    
*   `Tipo de Cartão`: Escolha a categoria da administradora (ex: `Cartão de Crédito`, `PIX`)
    
    *   Se o `Tipo de Cartão` for `Carteira Digital`, selecione o `Tipo da Carteira` correspondente (ex: `Mercado Pago`). Caso não haja integração, selecione `Outro`.
        
*   `Operação`: Defina como a administradora será utilizada (ex: `POS Avulso`, `Integrado API`).
    
*   `Efetuar Baixa Automática`: Indique como `Sim` **somente** se for uma administradora do tipo `Carteira Digital` ou `PIX` e o `Prazo de Repasse` for igual a **0**.
    
*   `Operadora`: Selecione a operadora previamente cadastra em **Cadastro de Adquirentes**.
    
*   `Bandeira`: Selecione a bandeira previamente cadastrada em **Cadastro de Bandeiras**.
    
*   `Fornecedor`: Selecione a adquirente cadastra em **Cadastro de Fornecedores**.
    
*   `Conta Bancária`: Escolha a conta bancária para o repasse dos valores.
    

No box **Complemento**:

*   `Taxa administrativa (%)`: Informe o percentual de taxa cobrado pela adquirente.
    
*   `Prazo de repasse (dias)`: Informe o prazo de repasse acordado com a adquirente para o recebimento na conta bancária.
    

É crucial que esses valores estejam corretos para a conciliação financeira.

No box **Parcelamento** (habilitada apenas para `Cartão de Crédito`):

*   Marque a opção `Permite parcelamento` se a administradora aceitar parcelamento.
    
*   Informe o `Número máximo de parcelas`.
    
*   Defina o `Prazo entre as parcelas (dias)`.
    
*   Preencha a `Taxa de juros entre as parcelas (%)` se houver.
    

Após preencher todos os campos obrigatórios e revisar as informações, clique no botão . A tela será redirecionada para a listagem das administradoras cadastradas.

* * *

### Editar Administradora

Para modificar os dados de uma administradora já cadastrada, siga os passos:

Acesse o módulo de Administradoras. A tela de listagem exibirá todas as administradoras cadastradas.

Localize a administradora que deseja editar na lista. Você pode usar os filtros de pesquisa para agilizar a busca.

Clique no ícone ao lado da administradora desejada.

A tela de cadastro da administradora será aberta, permitindo a modificação dos campos.

**Restrições de Edição**

*   **Administradoras já utilizadas em vendas**: Se a administradora já foi associada a alguma venda no sistema, os seguintes campos no box **Alterar Administradora** não poderão ser alterados:
    
    *   `Tipo de Cartão`, `Tipo de Carteira`, `Operação`, `Operadora`, `Bandeira` e `Fornecedor`.
        
    *   No entanto, os campos dos box `Complemento` e `Parcelamento` continuarão disponíveis para edição, permitindo ajustes em taxas, prazos e condições de parcelamento para que você mantenha as informações financeiras atualizadas conforme acordos com as adquirentes.
        
*   **Administradora não utilizadas em vendas**: Se a administradora ainda não foi utilizada em nenhuma venda, todos os campos em todos os boxes poderão ser alterados livremente.
    

Após realizar as modificações necessárias, clique no botão para aplicar as alterações.

* * *

### Excluir Administradora

Para remover uma administradora do sistema, siga os passos:

Acesse o módulo de Administradoras.

Localize a administradora que deseja excluir na tela de listagem.

Clique no ícone de ao lado da administradora desejada.

Uma tela de confirmação será exibida, solicitando que você confirme a exclusão.

Clique no botão para finalizar o processo de exclusão.

O sistema **não permitirá a exclusão** de uma administradora que já tenha sido utilizada em vendas. Esta medida de segurança garante a integridade dos dados financeiros e do histórico de transações. Caso precise remover uma administradora que já foi utilizada, considere inativá-la alterando sua `Situação` para `Inativa` na tela de edição.

* * *

Retornos de cartões por adquirente
----------------------------------

### **REDE**

**Cadastro de Operadora**

**Código no TEF**

**Código no PDV Móvel**

**05 (exceto para o PIX, que deve ser ER)**

**REDE**

**Cadastro de Bandeira**

**Cadastro de Administradoras**

**Código no TEF**

**Tipo**

**Código no PDV Móvel**

**Tipo**

**AMERICAN EXPRESS**

**00004**

**56**

**AMEX**

**1**

**ELO CRÉDITO**

**00031**

**56**

**ELO**

**1**

**ELO DÉBITO**

**20032**

**32**

**ELO**

**2**

**HIPERCARD**

**00012**

**56**

**HIPERCARD**

**1**

**MASTERCARD CRÉDITO**

**00002**

**56**

**MASTERCARD**

**1**

**MASTERCARD DÉBITO**

**20001**

**32**

**MASTERCARD DEBITO**

**2**

**VISA CRÉDITO**

**00001**

**56**

**VISA**

**1**

**VISA DÉBITO**

**20002**

**32**

**VISA\_ELECTRON**

**2**

**PIX**

**(VAZIO)**

**22**

**PIX**

**3**

### **STONE**

**Cadastro de Operadora**

**Código no TEF**

**Código no PDV Móvel**

**EL**

**STONE**

**Cadastro de Bandeira**

**Cadastro de Administradoras**

**Código no TEF**

**Tipo**

**Código no PDV Móvel**

**Tipo**

**AMERICAN EXPRESS**

**00004**

**56**

**AMEX**

**1**

**ELO CRÉDITO**

**00031**

**56**

**ELO**

**1**

**ELO DÉBITO**

**20032**

**32**

**ELO**

**0**

**HIPERCARD**

**00012**

**56**

**HIPERCARD**

**1**

**MASTERCARD CRÉDITO**

**00002**

**56**

**MASTERCARD**

**1**

**MASTERCARD DÉBITO**

**20001**

**32**

**MASTERCARD**

**0**

**VISA CRÉDITO**

**00001**

**56**

**VISA**

**1**

**VISA DÉBITO**

**20002**

**32**

**VISA**

**0**

**PIX**

**(VAZIO)**

**3**

### **CIELO**

**Cadastro de Operadora**

**Código no TEF**

**Código no PDV Móvel**

**AP (exceto para o PIX, que deve ser ER)**

**CIELO**

**Cadastro de Bandeira**

**Cadastro de Administradoras**

**Código no TEF**

**Tipo**

**Código no PDV Móvel**

**Tipo**

**AMERICAN EXPRESS**

**00004**

**56**

**AMEX**

**1**

**ELO CRÉDITO**

**00031**

**56**

**ELO**

**1**

**ELO DÉBITO**

**20032**

**32**

**ELO**

**2**

**HIPERCARD**

**00012**

**56**

**HIPERCARD**

**1**

**LIBERCARD**

**LIBERCARD**

**2**

**MASTERCARD CRÉDITO**

**00002**

**56**

**MASTERCARD**

**1**

**MASTERCARD DÉBITO**

**20001**

**32**

**MASTERCARD**

**2**

**VISA CRÉDITO**

**00001**

**56**

**VISA**

**1**

**VISA DÉBITO**

**20002**

**32**

**VISA**

**2**

**PREPAGO ELO CRÉDITO**

**00031**

**56**

**PREPAGO ELO**

**1**

**PREPAGO ELO DÉBITO**

**20032**

**32**

**PREPAGO ELO**

**2**

**PREPAGO MASTER CRÉDITO**

**00002**

**56**

**PREPAGO MASTERCARD**

**1**

**PREPAGO MASTER DÉBITO**

**20001**

**32**

**PREPAGO MASTERCARD**

**2**

**PREPAGO VISA CRÉDITO**

**00001**

**56**

**PREPAGO VISA**

**1**

**PREPAGO VISA DÉBITO**

**20002**

**32**

**PREPAGO VISA**

**2**

**PIX**

**(VAZIO)**

**22**

**(VAZIO)**

**3**

### **PAGSEGURO**

**Cadastro de Operadora**

**Código no TEF**

**Código no PDV Móvel**

**FM (exceto para o PIX, que deve ser ER)**

**PAGSEGURO**

**Cadastro de Bandeira**

**Cadastro de Administradoras**

**Código no TEF**

**Tipo**

**Código no PDV Móvel**

**Tipo**

**AMERICAN EXPRESS**

**00004**

**56**

**AMEX**

**1**

**ELO CRÉDITO**

**00031**

**56**

**ELO**

**1**

**ELO DÉBITO**

**20032**

**32**

**ELO**

**2**

**HIPERCARD**

**00012**

**56**

**HIPERCARD**

**1**

**MASTERCARD CRÉDITO**

**00002**

**56**

**MASTERCARD**

**1**

**MASTERCARD DÉBITO**

**20001**

**32**

**MAESTRO**

**2**

**VISA CRÉDITO**

**00001**

**56**

**VISA**

**1**

**VISA DÉBITO**

**20002**

**32**

**VISA\_ELECTRON**

**2**

**PIX**

**(VAZIO)**

**3**

### **GETNET**

**Cadastro de Operadora**

**Código no TEF**

**Código no PDV Móvel**

**C9**

**GETNET**

**Cadastro de Bandeira**

**Cadastro de Administradoras**

**Código no TEF**

**Tipo**

**Código no PDV Móvel**

**Tipo**

**AMERICAN EXPRESS**

**00004**

**56**

**AMEX**

**1**

**ELO CRÉDITO**

**00031**

**56**

**ELO**

**1**

**ELO DÉBITO**

**20032**

**32**

**ELO**

**2**

**HIPERCARD**

**00012**

**56**

**HIPERCARD**

**1**

**MASTERCARD CRÉDITO**

**00002**

**56**

**MASTERCARD**

**1**

**MASTERCARD DÉBITO**

**20001**

**32**

**MASTERCARD**

**2**

**VISA CRÉDITO**

**00001**

**56**

**VISA**

**1**

**VISA DÉBITO**

**20002**

**32**

**VISA**

**2**

**PIX**

**(VAZIO)**

**3**

### **SAFRA**

**Cadastro de Operadora**

**Código no TEF**

**Código no PDV Móvel**

**SAFRA**

**Cadastro de Bandeira**

**Cadastro de Administradoras**

**Código no TEF**

**Tipo**

**Código no PDV Móvel**

**Tipo**

**AMERICAN EXPRESS**

**1**

**ELO CRÉDITO**

**ELO**

**1**

**ELO DÉBITO**

**ELO**

**2**

**HIPERCARD**

**1**

**MASTERCARD CRÉDITO**

**MASTERCARD**

**1**

**MASTERCARD DÉBITO**

**MASTERCARD**

**2**

**VISA CRÉDITO**

**VISA**

**1**

**VISA DÉBITO**

**VISA**

**2**

**PIX**

**PIX**

**3**

### **CLOVER**

**Cadastro de Operadora**

**Código no TEF**

**Código no PDV Móvel**

**CLOVER**

**Cadastro de Bandeira**

**Cadastro de Administradoras**

**Código no TEF**

**Tipo**

**Código no PDV Móvel**

**Tipo**

**AMERICAN EXPRESS**

**AMEX**

**2**

**ELO CRÉDITO**

**ELO CREDIT**

**2**

**ELO DÉBITO**

**ELO DEBIT**

**1**

**CABAL DÉBITO**

**CABAL DEBIT**

**1**

**MASTERCARD CRÉDITO**

**MASTERCARD CREDI**

**2**

**MASTERCARD DÉBITO**

**MASTERCARD DEBIT**

**1**

**VISA CRÉDITO**

**VISA CREDITO**

**2**

**VISA DÉBITO**

**VISA DEBITO**

**1**

**PIX**

**PIX**

**3**

* * *

Dicas e Solução de Problemas
----------------------------

Esta seção aborda questões comuns e oferece soluções para problemas que podem surgir ao utilizar o módulo de Cadastro de Administradoras.

**Problema**: Não consigo cadastrar uma nova administradora.

**Solução**: Verifique se todos os campos obrigatórios (destacados em vermelho na tela) foram preenchidos. Mensagens de erro na parte inferior da tela ou ao lado dos campos indicarão quais informações estão faltando ou estão incorretas.

**Problema**: Uma administradora não aparece nas opções de pagamento no PDV ou AppPosto.

**Solução**: Verifique a `Situação` da administradora no cadastro. Se estiver `Inativa`, ela não será exibida. Altere a situação para `Ativa` para que ela apareça nas opções de pagamento.

**Problema**: Não consigo excluir uma administradora.

**Solução**: O sistema impede a exclusão de administradoras que já foram utilizadas em vendas para manter a integridade dos dados históricos. Se precisar remover uma administradora que já foi usada, altere sua `Situação` para `Inativa`. Isso fará com que ela não apareça mais nas opções de pagamento, mas seu histórico será preservado.

**Problema**: Os valores de conciliação de cartões estão incorretos.

**Solução**: Verifique a `Taxa Administrativa (%)` e os campos de `Prazo de repasse (dias)` no cadastro da administradora. Pequenas diferenças nestes valores podem causar grandes discrepâncias na conciliação. Certifique-se de que os valores configurados no sistema correspondem exatamente aos acordados com a adquirente.