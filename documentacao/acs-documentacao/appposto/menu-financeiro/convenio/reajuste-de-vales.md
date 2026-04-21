---
title: Reajuste de Vales
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/539951105
---

# Reajuste de Vales

16truenonelisttrue

Reajuste de Vales
=================

O módulo de **Reajuste de Vales** tem como objetivo oferecer uma ferramenta prática para atualização dos valores de vales não faturados de clientes. Essa funcionalidade permite ao usuário realizar ajustes em grande escala, garantindo agilidade, padronização e eficiência no processo de correção de valores.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Financeiro > Reajuste de Vales

Será apresentada a seguinte tela:

Tela geral do módulo de Reajuste de Vales

Guia PARÂMETROS GERAIS1800

Esta guia funciona como filtro inicial, permitindo definir os critérios que direcionam o reajuste dos vales.

*   `Cliente`: Permite selecionar um ou mais clientes cujos vales não faturados serão considerados no reajuste.
    
*   `Data Utilizada`: Define se o período informado na guia REAJUSTE será aplicado com base em:
    
    *   `Emissão`: Define a data de emissão dos vales como critério na consulta.
        
    *   `Vencimento`: Define a data de vencimento dos vales como critério na consulta.
        

Guia REAJUSTE1800

Nesta guia, o valor informado é aplicado diretamente aos vales que atendem aos critérios definidos, finalizando o processo de ajuste.

*   `Data inicial` e `Data Final`: Defina o período para aplicação do reajuste.
    
*   `Produto`: Selecione o produto vinculado ao vale que terá o valor atualizado.
    

:note:atlassian-note#B3D4FF

**Observação:** Apenas um produto pode ser selecionado por vez para aplicação do reajuste.

*   `Novo Valor (R$)`: Digite o novo preço de contrato para o produto selecionado. O sistema atualizará automaticamente o **Valor de Contrato do Vale**, multiplicando o novo preço pela quantidade de produtos presentes no vale.
    

Após preencher todos os campos e revisar as informações, clique no botão para executar o reajuste dos valores dos vales.

**Atenção:** O reajuste não poderá ser revertido. Verifique cuidadosamente os filtros de cliente e produto para evitar alterações indevidas nos valores.