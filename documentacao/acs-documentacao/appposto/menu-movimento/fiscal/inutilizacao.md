---
title: Inutilização
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/72384545
---

# Inutilização

16truenonelisttrue

Inutilização
============

A **Inutilização de um documento fiscal** é o processo administrativo pelo qual uma empresa comunica à Secretaria da Fazenda (SEFAZ) que determinada numeração de nota fiscal ou outro documento fiscal não foi e não será utilizado. Isso ocorre quando há uma falha ou situação específica que deixa uma faixa de numeração sem uso, como uma interrupção inesperada no processo de emissão ou um erro que impede a autorização da nota fiscal.

A inutilização deve ser feita até o último dia do ano de exercício, ou seja, é possível inutilizar um número apenas dentro do mesmo ano calendário em que ele foi gerado. Por exemplo, números de notas fiscais de 2024 só podem ser inutilizados até 31 de dezembro de 2024. Após essa data, a inutilização não poderá mais ser realizada, e a numeração ficará sem uso na sequência.

Vale lembrar que a inutilização só é aplicável para NF-e **não emitida**. Se uma NF-e já tiver sido autorizada pela Secretaria da Fazenda (SEFAZ), não é possível inutilizá-la. Nesses casos, o caminho é o cancelamento da nota, respeitando o prazo e os procedimentos específicos de cada estado.

**Dica Importante**

O protocolo gerado pela SEFAZ deve ser armazenado por pelo menos 5 anos, conforme a legislação fiscal, para evitar problemas em uma possível fiscalização.

:info:atlassian-info:info:#B3D4FF

**Observação:** A inutilização não gera imposto ou multas, mas é essencial seguir corretamente o procedimento e prazos.

Para acessar esse módulo no sistema, basta seguir os seguintes passos:

Menu Movimento > Inutilização

* * *

Será apresentada a seguinte tela:

Tela geral do módulo de Inutilização de NF-e

A imagem acima apresenta uma visão geral do módulo de Inutilização, detalhando como os usuários podem visualizar, filtrar e gerenciar a numeração inutilizada dos documentos fiscais, organizadas de maneira cronológica.

Na parte superior da tela são apresentados os campos para filtragem das numerações inutilizadas:

*   `Empresa`: Filtra a empresa que realizou a inutilização de numeração. É possível selecionar várias empresas para realizar a consulta.
    
*   `Modelo Nota`: Filtra as inutilizações pelo modelo de documento fiscal.
    
    *   `Todos`: Filtra todos os modelos de documentos.
        
    *   `NF-e`: Filtra os documentos do modelo Nota Fiscal Eletrônica.
        
    *   `NFC-e`: Filtra os documentos do modelo Nota Fiscal ao Consumidor Eletrônica.
        
*   `Série`: Filtra pela numeração que separa os documentos em lotes.
    
*   `Documento`: Filtra pelo número do documento fiscal que foi inutilizado, podendo inserir tanto o número do documento inicial quanto o final.
    

Na parte inferior, será exibida a listagem das inutilizações emitidas, onde serão apresentados os campos:

*   `Empresa`: Empresa que realizou a inutilização da numeração do documento fiscal.
    
*   `Data`: Data em que a inutilização foi emitida.
    
*   `Modelo`: Modelo do documento fiscal.
    
*   `Ano`: Ano em que o documento foi inutilizado.
    
*   `Série`: Numeração do documento inutilizado.
    
*   `Doc. Inicial` e `Doc. Final`: Primeiro e último número da sequência de documentos fiscais inutilizados.
    
*   `Protocolo`: Número gerado pela Sefaz.
    
*   `Justificativa`: Justificativa da Inutilização.
    
*   `Arquivo`: Permite realizar o download do XML de inutilização, utilizado como comprovante oficial da inutilização de numeração de NF-e ou NFC-e junto à SEFAZ, para fins de consulta, armazenamento e apresentação em auditorias ou fiscalizações.
    

* * *

Inutilizar Numeração
--------------------

Ao clicar no botão , será apresentada a seguinte tela:

Tela para Inutilizar Numeração de documento fiscal

*   `Empresa`: Selecione a empresa que fará a inutilização da numeração.
    
*   `Modelo`: Informe o modelo do documento.
    
*   `Ano`: Insira o ano em que a inutilização está sendo realizada.
    
*   `Série`: Digite a série do(s) documento(s) fiscal(is) que será(ão) inutilizada(s).
    
*   `Documento Inicial` e `Documento Final`: Insira o número inicial e final dos documentos a serem inutilizados. Se for apenas um documento, basta repetir a numeração.
    
*   `Justificativa`: Forneça a justificativa para a inutilização a ser realizada, com até 250 caracteres.
    

Após preencher e revisar os campos, clique no botão . A seguinte tela será apresentada para a confirmação do envio de inutilização da numeração.

Tela de confirmação de inutilização

Clique em . O sistema enviará, via integração, a solicitação de inutilização de numeração diretamente ao site da SEFAZ.

:info:atlassian-info#B3D4FF

**Observação:** Para realizar a emissão da inutilização e o download do XML, é necessário que o sistema esteja configurado com um certificado digital válido, devidamente instalado e ativo.