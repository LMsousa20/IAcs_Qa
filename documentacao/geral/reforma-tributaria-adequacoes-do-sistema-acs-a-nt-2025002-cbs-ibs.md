---
title: Reforma Tributária - Adequações do Sistema ACS à NT 2025.002 (CBS / IBS)
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/620036102
---

# Reforma Tributária - Adequações do Sistema ACS à NT 2025.002 (CBS / IBS)

**1\. Contexto da Reforma Tributária**
--------------------------------------

A **Reforma Tributária**, prevista para entrar em vigor gradualmente a partir de **2026**, tem como objetivo **simplificar e unificar o sistema de tributos sobre consumo** no Brasil. Atualmente, as operações com bens e serviços são tributadas por **cinco impostos distintos (PIS, COFINS, ICMS, ISS e IPI)**, que serão substituídos por **dois novos tributos**:

Tributo Atual

Novo Tributo

Competência

PIS e COFINS

**CBS – Contribuição sobre Bens e Serviços**

Federal

ICMS e ISS

**IBS – Imposto sobre Bens e Serviços**

Compartilhado (Estadual e Municipal)

Esses novos tributos seguem o modelo de **tributação no destino**, ou seja, **o imposto é devido ao local de consumo do bem ou serviço**, e não mais à origem da operação.

Tanto a **CBS** quanto o **IBS** serão **não cumulativos**, permitindo o crédito do imposto pago nas etapas anteriores, e incidirão **sobre todas as operações de bens e serviços**.

**2\. Adequações Implementadas no Sistema ACS**
-----------------------------------------------

Com a publicação da **Nota Técnica 2025.002**, o sistema ACS teve atualizações estruturais e visuais para se adequar às exigências da Reforma Tributária que entrará em vigor em 2026. As principais adequações foram implementadas nos seguintes módulos:

Parâmetros do Sistema

Cadastro de Departamentos CBS/IBS

Cadastro de Produtos

Notas Fiscais de Entrada e Saída, Compras de Diversos e Combustíveis

**Importante:**

As atualizações descritas nesta Nota Técnica passam a estar disponíveis a partir das versões:

*   **ACS Gerente:** versão **6.3287.6.665** ou superior
    
*   **ACS PDV:** versão **6.3287.6.409** ou superior
    

Essas versões incluem todas as adequações necessárias para atender às regras da Nota Técnica 2025.002 e às exigências da Reforma Tributária.

### **2.1. Parâmetros do Sistema**

*   Foram criados parâmetros que controlam a geração das tags de **CBS** e **IBS** no XML dos documentos fiscais eletrônicos (NF-e, NFC-e, CT-e).
    
    *   `Gerar CBS/IBS para NF-e / NFC-e`: Habilita a inclusão das novas tags no XML de notas fiscais eletrônicas e de consumidor.
        
    *   `Gerar CBS/IBS para CT-e`: Habilita a inclusão das novas tags nos conhecimentos de transporte eletrônico.
        

Parâmetros do Sistema > Guia Fiscal

**Atenção:**

Por padrão, os parâmetros são definidos como **Não** após a atualização.

Isso ocorre porque a **obrigatoriedade legal das novas tags só se inicia em janeiro de 2026**.

Eles estão pré-programados para serem alterados automaticamente para **“Sim”** no início de **janeiro de 2026**, data em que as novas tags passam a ser obrigatórias conforme a legislação.

Da mesma forma, os cadastros de clientes do tipo **Pessoa Jurídica** terão o campo **“Tipo de Documento”** atualizado automaticamente para **“Nota”** nesse mesmo período, garantindo conformidade com as novas regras fiscais sem necessidade de ajustes manuais.

Vídeo 1 - Parâmetros do Sistema

### **2.2. Cadastro de Departamentos CBS/IBS**

*   Foi criado um **novo tipo de cadastro** (**Menu Cadastro → Departamentos CBS/IBS)**, destinado a armazenar as **regras de tributação dos novos impostos.** A tela **varia** automaticamente conforme o `CST` informado, exibindo somente os campos relevantes para cada tipo de tributação:
    
    *   `Código`: Código interno de identificação do departamento. É gerado automaticamente pelo sistema.
        
    *   `Descrição`: Nome do departamento fiscal.
        
    *   `Ativo`: Indica se o departamento está habilitado para uso.
        
    *   `Validade`: Data limite de vigência do departamento.
        
    *   `CST`: Código que define o tipo de tributação do departamento conforme tabela oficial da NT 2025.002. Ao clicar na **lupa** (ou pressionar **F4**), o sistema exibe apenas os CSTs válidos.
        
        *   Caso o usuário digite um CST inexistente, o sistema exibe uma mensagem de alerta com a listagem oficial de códigos válidos, e impede o salvamento até que o campo seja corrigido.
            
    *   `Classificação Tributária`: Código que vincula o departamento a uma **regra fiscal específica** prevista na **Tabela Nacional de Classificações Tributárias**, mantida pela SEFAZ. Ao clicar na **lupa** (ou pressionar **F4**), o sistema exibe apenas as **classificações compatíveis com o** `CST` informado. Essa lógica significa que o **prefixo da Classificação Tributária é o mesmo número do CST**, garantindo que o usuário **não selecione combinações inválidas** e evitando **rejeições na emissão** com erro de “cClassTrib incompatível com CST”.
        
        *   Exemplo:
            
            *   Se **CST = 620**, a classificação exibida será **620001, 620002...**, todas relacionadas à tributação monofásica.
                
            *   Se **CST = 000**, serão apresentadas classificações **000001, 000002...**, correspondentes à tributação padrão.
                

Todos os campos descritos acima são sempre apresentados, independentemente do `CST`.

*   Quando o `CST` é **diferente** de **620**, os campos exibidos são:
    
    *   `Alíquota CBS`: Percentual aplicado sobre o valor. Define a **alíquota federal do CBS**.
        
        *   Exemplo: 0,9%.
            
    *   `Perc. Redução CBS`: Percentual de redução da alíquota, quando aplicável.
        
        *   Exemplo: 50% de redução → Alíquota Efetiva = 0,45%.
            
    *   `Alíquota IBS`: Percentual aplicado sobre o valor. Define a **alíquota estadual do IBS** (competência das UFs).
        
        *   Exemplo: 0,8%.
            
    *   `Perc. Redução IBS`: Percentual de redução da alíquota, quando aplicável.
        
        *   Exemplo: 25% de redução → Alíquota Efetiva = 0,6%.
            
    *   `Alíquota IBS Municipal`: Percentual aplicado sobre o valor. Define a **parcela municipal do IBS**, referente ao destino da operação.
        
        *   Exemplo: 0,2%.
            
    *   `Perc. Redução IBS Municipal`: Percentual de redução da alíquota, quando aplicável.
        
        *   Exemplo: 50% de redução → Alíquota Efetiva = 0,1%.
            

*   Quando o `CST` é **620**, os campos exibidos são:
    
    *   `Alíquota CBS`: Valor monetário multiplicado pela quantidade.
        
        *   Exemplo: R$0,002/L.
            
    *   `Alíquota IBS`: Valor monetário multiplicado pela quantidade.
        
        *   Exemplo: R$0,001/L.
            

**Observações Importantes:**

*   As alíquotas do **IBS** e **IBS Municipal** devem refletir o **local de destino da operação**, podendo variar conforme **estado e município do destinatário**.
    
*   Para o **CST 620**, o **IBS Municipal** não se aplica, porque pela legislação, o imposto é recolhido somente na origem e não há participação municipal no cálculo.
    

**Atenção:**

Durante a atualização, o sistema cria automaticamente **dois departamentos CBS/IBS padrões** com as configurações iniciais exigidas pela NT, um para os **produtos gerais (CST 000)** e outro para os **combustíveis e GLP (CST 620)**. Cada departamento representa um “perfil fiscal”, utilizado para cálculo e emissão de documentos fiscais.

*   Para todo o ano de 2026, o valor da alíquota dos tributos CBS e IBS será a mesma para todos os produtos tributados (Departamento CBS/IBS GERAL).
    
    *   Para a CBS a alíquota padrão será de 0,9% e para o IBS a alíquota padrão será de 0,1%.
        

#FFFAE6

Departamento CBS/IBS Geral

*   CST: 000, aplicável a todos os produtos que **não** fazem parte do Grupo de Combustíveis ou GLP. Calcula CBS, IBS e IBS Municipal por **percentual** sobre o **valor**.
    
*   Tipo de Tributação: Tributação padrão (ad-valorem)
    

#FFFAE6

Departamento CBS/IBS Combustíveis

*   CST: 620, aplicável a produtos que fazem parte do grupo de Combustíveis ou GLP. Calcula CBS e IBS por **quantidade** (litros).
    
*   Tipo de Tributação: Monofásica (ad-rem)
    

Vídeo 2 - Cadastro de Departamentos CBS/IBS

### **2.3. Cadastro de Produtos**

*   No cadastro de produtos foi adicionado um **novo campo** na guia **Fiscal**:
    
    *   `Departamento CBS/IBS`: Define qual conjunto de regras fiscais se aplica ao produto. Esse vínculo passa a determinar como o imposto será calculado na emissão de documentos fiscais. A partir dele, o produto passa a utilizar:
        
        *   CST definido pelo departamento;
            
        *   Classificação Tributária correspondente;
            
        *   Tipo de cálculo (ad rem ou ad valorem);
            
        *   Alíquotas de CBS/IBS/IBS Municipal.
            

**Atenção:**

Após a atualização do sistema, todos os produtos já existentes recebem automaticamente o departamento correspondente, conforme o **grupo do produto**:

*   Produtos associados ao grupo do tipo **Combustível ou GLP** → Departamento **Combustíveis (CST 620)**
    
*   Demais produtos → Departamento **Geral (CST 000)**
    

Isso evita necessidade de revisão manual após a atualização.

Cadastro de Produtos > Guia Fiscal

Vídeo 3 - Cadastro de Produtos

### **2.4. Novo Layout das Telas de Emissão e Entrada de Notas Fiscais**

*   A alteração realizada nas telas está diretamente relacionada ao processo de **inclusão, edição e visualização de itens**. Antes da atualização, as telas apresentavam as informações de cada item em linha, obrigando o usuário a utilizar uma **barra de rolagem horizontal extensa**. Com a chegada dos novos tributos CBS e IBS, essa lista se tornaria ainda maior, comprometendo a experiência de uso. Para resolver isso:
    
    *   **A barra de rolagem horizontal foi removida**, dando lugar a uma **nova tela completa** exibida ao **incluir**, **modificar** ou **visualizar** um item;
        
    *   Os campos fiscais passaram a ser apresentados em **blocos organizados**, tais como:
        
        *   Dados do Produto;
            
        *   ICMS/IPI;
            
        *   PIS/COFINS;
            
        *   FCP;
            
        *   **CBS/IBS (novo bloco)**;
            

#### **2.4.1. Exemplos das telas com dados preenchidos**

Abaixo, exemplos de preenchimento de itens com os novos blocos de CBS/IBS.

**Nova tela na emissão de Notas Fiscais de Entrada e Saída (CST 000 - ad valorem)**

Nota Fiscal de Saída

*   **CST 000 e CClass Trib 000001**: indica tributação padrão (ad-valorem).
    
*   **Base CBS/IBS**: Valor Nominal + Seguro + Frete + Despesas – Desconto.
    
*   **CBS**, **IBS** e **IBS Municipal** calculados por **Base CBS/IBS x Alíq. Efetiva**.
    
    *   **Alíq. Efetiva = Alíq. Normal - % Redução**
        

**Exemplo de cálculo:**

*   Base: R$ 23,00 (R$ 12,00 + R$ 2,00 + R$ 4,00 + R$ 6,00 - R$ 1,00)
    
*   Aliq. Efetiva CBS = 0,9% → Valor CBS = R$ 0,21
    
*   Aliq. Efetiva IBS = 0,1% → Valor IBS = R$ 0,02
    
*   Aliq. Efetiva IBS Municipal = 0% → Valor IBS Municipal = R$ 0,00
    

**Nova tela na emissão de Notas Fiscais de Entrada e Saída (CST 620 - ad rem)**

Nota Fiscal de Saída

*   **CST 620 e CClass Trib 620001**: indica tributação monofásica (ad-rem).
    
*   **Base CBS/IBS**: Quantidade (litros).
    
*   **CBS** e **IBS** calculados por **Base CBS/IBS × Alíquota ad rem**.
    

**Exemplo de cálculo:**

*   Base: 1,789 L
    
*   Aliq. ad rem CBS = 0,0100 → Valor CBS = R$ 0,02
    
*   Aliq. ad rem IBS = 0,0200 → Valor IBS = R$ 0,04
    

Esses valores são automaticamente somados aos totais de tributos da nota, e destacados conforme as exigências da NT 2025.002.

Vídeo 4 - Nota Fiscal de Saída: Apresentação da nova tela de itens

Vídeo 5 - Nota Fiscal de Saída: Exemplo de emissão de uma NFe de acobertamento

**Nova tela na Compras de Diversos**

Compra de Diversos

**Nova tela na Compras de Combustíveis**

Compra de Combustível

Vídeo 6 - Compra de Diversos

Vídeo 7 - Compra de Combustíveis

**Observação:**

O comportamento do botão de Modificar / Visualizar depende do status da nota.

🔵 **Nota finalizada (Emitida ou Cadastrada)**

*   Exibe .
    
*   Permite ver todas as informações do item sem alterá-lo.
    

🟢 **Nota não finalizada (Em emissão ou em Lançamento)**

*   Exibe .
    
*   Permite alterar as informações do item normalmente.