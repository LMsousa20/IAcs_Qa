---
title: Consulta de Combustível
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/321683457
---

# Consulta de Combustível

16truenonelisttrue

Consulta de Combustível
=======================

O **módulo de Consulta de Combustível** é utilizado para realizar verificações e ajustes nos encerrantes dos bicos dentro do sistema, especialmente quando ocorrem inconsistências no **Livro de Movimentação de Combustível (LMC)**. É essencial em situações em que os encerrantes registrados no sistema não refletem corretamente a realidade dos encerrantes das bombas do posto, podendo causar divergências nos saldos apurados nos tanques.

**Principais situações de uso**

#E6FCFF

**Caixa aberto por mais de um dia**

Quando o caixa permanece aberto por vários dias consecutivos, todas as vendas realizadas nesse período são registradas como se tivessem ocorrido em um único dia. Isso compromete a exatidão do LMC, que exige o controle diário dos volumes comercializados e dos saldos dos tanques.

**Exemplo:**

*   Posto com 1 tanque e 1 bico.
    
*   Em **01/04**, o caixa foi aberto às 07h00 com os seguintes dados:
    
    *   **Encerrante do Bico 01**: 1234,56
        
    *   **Medição do Tanque 01**: 5893,205
        
*   Esse caixa só foi encerrado no dia **03/04 às 22h00**, com os seguintes dados:
    
    *   **Encerrante do Bico 01**: 4321,65
        
    *   **Medição do Tanque 01**: 2806,115
        

A venda total registrada foi de **3.087,09 litros**, porém esse volume foi lançado integralmente em 01/04. Com isso, ao realizar a abertura do LMC em 02/04, o sistema apresenta divergência entre o **saldo escritural calculado** e o **saldo informado**, já que a venda de três dias foi concentrada em apenas um.

**Solução:** Utilizar o módulo de Consulta de Combustível para redistribuir os volumes vendidos corretamente entre os dias 01, 02 e 03.

#E6FCFF

**Erro na leitura do dígito do milhão**

Ocorre quando o encerrante de um bico é capturado com o dígito do milhão, o que gera um valor de venda irreal no LMC.

**Exemplo:**

*   **01/04**
    
    *   **Bico 01 – Encerrante Inicial**: 586.975,369
        
    *   **Bico 01 – Encerrante Final**: 588.241,876
        
    *   **Litragem vendida**: 1.266,507 litros
        
*   **02/04**
    
    *   **Bico 01 – Encerrante Inicial**: 588.241,876
        
    *   **Bico 01 – Encerrante Final**: 1.589.452,264
        
    *   **Litragem vendida**: 1.001.210,388 litros
        

Nesse caso, o sistema capturou o dígito do milhão, indicando uma venda superior a 1 milhão de litros em um único dia – o que não condiz com a operação real.

**Solução:** Utilizar o módulo de Consulta de Combustível para corrigir o encerrante final, ajustando o valor real da venda.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > Consulta de Combustível

* * *

Será apresentada a seguinte tela:

Tela geral de consulta de venda de combustíveis

Box 1 - Consulta de Venda de Combustíveis
-----------------------------------------

O box possui os seguintes campos (alguns obrigatórios) para realizar a consulta dos encerrantes:

*   **Empresa:** Selecione a empresa em que será realizada a consulta dos encerrantes. É possível consultar os dados de uma empresa diferente da que está atualmente logada, sem a necessidade de alternar o login no sistema.
    
*   **Data:** Informe a data de **abertura do caixa** que será analisado.
    
*   **PDV:** Selecione o **Ponto de Venda (PDV)** onde as vendas ocorreram.
    
*   **Caixa:** Escolha o número sequencial do **caixa aberto** na data indicada para o PDV selecionado.
    
*   **Turno:** Esse campo será preenchido automaticamente conforme o turno do caixa indicado.
    
*   **Fechamento:** Informe o número do **fechamento do turno**. Esse número identifica diferentes registros de encerrantes gerados automaticamente pelo sistema dentro de um mesmo sequencial de caixa. Cada fechamento garante a integridade dos dados no LMC, separando corretamente os volumes vendidos conforme o preço e a sequência dos encerrantes.. Um novo fechamento é criado em duas situações:
    
    *   **Alteração de preço no PDV**: Sempre que há uma mudança de preço de qualquer combustível no PDV, o sistema gera automaticamente um novo fechamento, registrando novos encerrantes para cada bico, considerando o preço vigente no momento da mudança.
        
    *   **Descontinuidade nos encerrantes**: Caso ocorra alguma interrupção ou quebra na sequência de leitura dos encerrantes dos bicos, o sistema também cria um novo fechamento para garantir a consistência dos dados.
        
*   **Frentista (opcional):** Permite filtrar os bicos conforme o operador (frentista) indicado, útil quando:
    
    *   O parâmetro **"Usa múltiplos operadores no caixa"** estiver ativo na guia **Caixa** do **Cadastro de Ponto de Venda**, pois na abertura do caixa será possível indicar mais de um operador.
        
    *   E o parâmetro **"Usar frentistas vinculados aos bicos"** estiver habilitado na guia **PDV** dos **Parâmetros do Sistema**, pois na abertura do caixa será possível indicar quais operadores serão responsáveis por cada bico.
        
    *   Caso esses parâmetros não estejam ativados, será apresentado apenas o frentista indicado na abertura do caixa, pois o mesmo será vinculado a todos os bicos no momento da abertura.
        
*   **Consulta (opcional):** Escolha o tipo de cálculo da coluna **Valor**:
    
    *   **Vendas**: Soma os valores dos documentos fiscais emitidos em cada bico.
        
    *   **Encerrantes**: Calcula o valor com base na diferença dos encerrantes (ENC\_FINAL - ENC\_INICIAL) multiplicada pelo preço do combustível.  
        _Observação: Pode haver pequenas diferenças nos valores entre os dois métodos devido ao arredondamento na litragem._
        
*   **Tanque (opcional):** Filtra os bicos apresentados de acordo com o tanque vinculado.
    

Após aplicar os filtros, clique no botão . Serão listados os bicos e suas respectivas informações, permitindo ajustes manuais conforme necessário.

*   **Bico / Tanque / Combustível:** Informações fixas de identificação.
    
*   **Funcionário:** Código e nome do frentista vinculado a cada bico.
    
*   **Enc. Inicial / Enc. Final:** Representam os encerrantes registrados na abertura e encerramento do fechamento do caixa. **Podem ser alterados.** O sistema recalcula automaticamente a quantidade vendida (**Litros**) e o **Valor** total daquele bico.
    
    *   _Exemplo:_
        
        *   Enc. Inicial = 3114,98
            
        *   Enc. Final = 3130,879
            
        *   Preço = R$6,29
            
        *   **Litros = Enc. Final - Enc. Inicial**
            
        *   **Litros = 15,899**
            
        *   **Valor = Litros × Preço**
            
        *   **Valor = R$100,00**
            
        *   Se alterar a coluna **Enc. Final** para 3135,879, a coluna **Litros** será atualizada para **20,899** e a coluna **Valor** para um novo total de **R$131,45**.
            
*   **Aferição:** Quantidade que foi **testada, mas não vendida**. **Pode ser alterado.** O sistema deduz o valor da coluna **Aferição** da coluna **Litros** e recalcula o **Valor** total daquele bico.
    
    *   _Exemplo:_
        
        *   Enc. Inicial = 3114,98
            
        *   Enc. Final = 3130,879
            
        *   Preço = R$6,29
            
        *   **Litros = Enc. Final - Enc. Inicial - Aferição**
            
        *   **Litros = 15,899**
            
        *   **Valor = R$100,00**
            
        *   Ao alterar a coluna **Aferição** para 1,000, a coluna **Litros** será atualizada para **14,899** e a coluna **Valor** para um novo total de **R$93,71**.
            
*   **Litros:** Quantidade vendida (Litros = Enc. Final - Enc. Inicial - Aferição). **Pode ser alterado.** O sistema ajusta automaticamente o **Enc. Final** com base na nova litragem.
    
    *   _Exemplo:_
        
        *   Enc. Inicial = 3114,98
            
        *   Enc. Final = 3130,879
            
        *   Preço = R$6,29
            
        *   **Valor = R$100,00**
            
        *   Se alterar a coluna **Litros** para 20,899, a coluna **Enc. Final** será atualizada para **3135,879** e a coluna **Valor** para um novo total de **R$131,45**.
            
*   **Custo / Preço:** Valores de custo e venda do combustível. **Podem ser alterados.** Afetam apenas relatórios baseados em encerrantes (não impactam relatórios fiscais).
    
*   **Valor (R$):** Valor total vendido no bico. **Não pode ser editado diretamente.** É recalculado automaticamente com base nas alterações nos campos anteriores.
    
*   **Descontinuidade:** Indica a quantidade de litros desconsiderados para novo cálculo do **Enc. Final**. **Campo apenas informativo.** Preenchido somente por meio do processo de Descontinuidade de Encerrantes realizado no PDV.
    

Após ajustar os campos necessários, salve as alterações clicando no botão . Isso garantirá que os novos valores sejam aplicados para análise no LMC e relatórios.

A listagem dos bicos é apresentada em **duas seções distintas**:

A **primeira** corresponde ao resultado da consulta com base nos filtros preenchidos. Essa listagem permite **edição dos campos** descritos acima.

A **segunda** apresenta os mesmos campos da listagem anterior, porém com os dados do **próximo turno, fechamento ou caixa**. Essa segunda listagem tem caráter **exclusivamente informativo**, **não permitindo edições**.

Além das duas listagens, existem os botões interativos e , que facilitam a transição entre os fechamentos dos caixas consultados, permitindo ao usuário navegar facilmente entre diferentes turnos.