---
title: Novidades
url: https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/pages/62521377
---

# Novidades

### **Automação de Cadastro de Promoções BR Mania**

#### Data de liberação: 09 de abril de 2026

📢 O cadastro de promoções BR Mania ficou muito mais rápido, seguro e automatizado!

Agora, após a sincronização das promoções, o sistema realiza automaticamente todo o processo de criação dos produtos compostos e seus componentes, eliminando a necessidade de cadastros manuais.

Essa melhoria foi desenvolvida para **reduzir retrabalho, evitar erros e garantir que as promoções estejam sempre corretamente configuradas no PDV**.

🛠 **O que foi implementado:**

✅ **Cadastro Automático em Background:** Após a carga da BR Mania, o sistema cria automaticamente os produtos, vínculos com a empresa e componentes do produto composto, sem intervenção do usuário.

✅ **Inteligência baseada em Promoção Base:** Utilização de um modelo padrão para replicar automaticamente:

Regras fiscais (NCM/CEST)

Departamentos e Grupos

Unidade e controle de estoque

✅ **Validação de Integridade (Itens Incompletos):** Produtos compostos com componentes não vinculados (por EAN) são cadastrados como **Inativos**, evitando uso incorreto e gerando alerta para revisão.

✅ **Processamento Manual sob Demanda:** Novo botão na tela de mapeamento permite **reprocessar promoções** a qualquer momento.

✅ **Filtros de Manutenção:** Filtros específicos para identificar promoções **“Incompletas”**, facilitando ajustes e correções.

🚀 **Principais Benefícios:**

✔ **Alta produtividade:** elimina o cadastro manual de kits e componentes.

✔ **Redução de erros operacionais:** garante fidelidade às promoções oficiais da BR Mania.

✔ **Segurança fiscal:** produtos herdam automaticamente configurações corretas.

✔ **Promoções mais confiáveis:** apenas itens vinculados ficam ativos no sistema.

✔ **Facilidade de manutenção:** identificação rápida de pendências e inconsistências.

💡 **Como utilizar:**

O sistema executará automaticamente o **cadastro dos produtos compostos e seus componentes** em segundo plano.

Acesse a tela de **Mapeamento de Promoções** para acompanhar o status das promoções.

Utilize os filtros para localizar promoções **incompletas** e verificar a possibilidade de vinculação dos itens faltantes.

Se necessário, utilize o botão de **processamento manual** para reexecutar a automação.

Após validação dos componentes dos cadastros realizados automaticamente, os produtos estarão prontos para uso no PDV.

* * *

### **Nova Integração de Aferição com ACS Mobile (Segurança e Controle Avançado)**

#### Data de liberação: 31 de março de 2026

📢 O processo de **aferição de bombas ficou mais seguro, rastreável e integrado!**

Agora o sistema está preparado para trabalhar com autorização de aferições via **ACS Mobile**, garantindo mais controle operacional e segurança nas rotinas de pista.

Essa melhoria foi desenvolvida para modernizar o processo de aferição, trazendo **validação segura, controle de acesso e rastreabilidade completa das operações**.

🛠 **O que foi implementado:**

✅ **Verificação em Duas Etapas (2FA):** Novo parâmetro que permite exigir uma validação adicional para autorizar aferições, aumentando a segurança do processo.

✅ **Rastreabilidade com Código Hash:** Cada aferição passa a gerar um **código único (hash)**, garantindo integridade e rastreamento da operação junto ao ACS Mobile.

✅ **Controle de Status da Aferição:** Monitoramento completo da operação com status de Autorizada, Negada e Pendente.

✅ **Permissão Específica de Usuário:** Criada a permissão **“Autorizar Aferição”**, garantindo que apenas usuários autorizados possam liberar o procedimento.

🚀 **Principais Benefícios:**

✔ **Mais segurança operacional:** Evita liberações indevidas ou não autorizadas na pista.

✔ **Controle total das aferições:** Cada operação fica registrada e rastreável.

✔ **Mobilidade:** Permite autorização diretamente via dispositivo móvel (ACS Mobile).

✔ **Conformidade e auditoria:** Registros seguros e consistentes para fiscalização e controle interno.

✔ **Redução de riscos:** Minimiza falhas humanas e aumenta a confiabilidade do processo.

💡 **Como utilizar:**

O link abaixo apresenta de forma clara todo o fluxo de configuração e utilização no sistema Desktop (Tem o mesmo funcionamento no AppPosto):

[Autorização de Aferição no Mobile](https://acssoftware-my.sharepoint.com/:f:/g/personal/brunonovais_acsapps_com_br/EsS1_YMs61RPs4sbnodCujgB_OZ43XYkCijDBKcI__Pjxg?e=UBhceW)

* * *

### **Nova Experiência de Conciliação Bancária com Extrato OFX**

#### Data de liberação: 31 de março de 2026

📢 O processo de conciliação bancária ficou muito mais inteligente, flexível e eficiente!

Agora, o sistema permite tratar cenários reais do dia a dia financeiro, como pagamentos agrupados e diferenças de datas, garantindo maior precisão e agilidade na conciliação com extratos bancários (OFX).

🛠 **O que foi implementado:**

✅ **Vínculo Multilançamentos (1 para N):** Permite vincular vários lançamentos do sistema a um único lançamento do extrato bancário, ideal para casos de pagamentos agrupados (ex.: fornecedores, tarifas, repasses consolidados).

✅ **Nova Interface Comparativa (2 Colunas):** Visualização lado a lado facilitando a conferência e o vínculo entre os dados:

Esquerda: lançamentos do sistema

Direita: lançamentos do extrato OFX

✅ **Filtros e Somas Independentes:** Filtros por data e status (Conciliado / Não conciliado) para cada lado, com **totalizadores em tempo real**, garantindo validação precisa antes da conciliação.

✅ **Alta Performance na Navegação:** Scroll infinito e ordenação por data, valor e descrição, permitindo trabalhar com grandes volumes de dados sem perda de desempenho.

✅ **Mais Flexibilidade na Conciliação:** Possibilidade de alterar conta na quitação de recebíveis e lançar valores avulsos diretamente no livro caixa durante a conciliação

🚀 **Principais Benefícios:**

✔ **Agilidade no processo:** conciliações complexas agora são resolvidas em poucos passos.

✔ **Maior precisão:** validação por somatório evita divergências entre sistema e banco.

✔ **Visão completa:** facilita encontrar diferenças de datas e valores rapidamente.

✔ **Redução de retrabalho:** elimina ajustes manuais em casos de agrupamentos bancários.

✔ **Fluxo financeiro mais confiável:** melhora o controle e a consistência das informações.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Conciliação de Extrato** localizado no submenu **EXTRATO BANCÁRIO**.

Importe o extrato no formato OFX e configure as regras.

Utilize a nova visualização em **duas colunas** para comparar os lançamentos do sistema com o extrato.

Aplique os filtros de data e status conforme necessário para localizar os registros.

Selecione **um ou mais lançamentos do sistema** e vincule ao lançamento correspondente do banco (para Contas a Pagar).

Valide os **totalizadores exibidos** para garantir que os valores estejam corretos antes de confirmar.

Finalize a conciliação — o sistema registrará automaticamente as baixas e ajustes necessários.

* * *

### **Reprocessamento de Taxas e Prazos de Administradoras**

#### Data de liberação: 03 de março de 2026

📢 Corrija taxas e prazos de cartões retroativamente com apenas alguns cliques! Implementamos a nova ferramenta de **Reprocessamento de Administradoras**, desenvolvida para ajustar lançamentos financeiros de cartões, Pix e carteiras digitais que foram registrados com informações incorretas ou desatualizadas.

Essa funcionalidade é a solução definitiva para quando uma operadora altera as taxas do contrato ou quando ocorre um erro no cadastro inicial. Em vez de ajustes manuais complexos, o sistema agora permite que você reaplique as regras vigentes em lote, garantindo que sua previsão de recebíveis e o fluxo de caixa estejam sempre corretos.

🛠 **O que foi implementado:**

✅ **Novas Interfaces de Reprocessamento:** Telas exclusivas para aplicação em lote de atualizações de taxas administrativas e prazos de repasse.

✅ **Filtros Dinâmicos de Seleção:** Possibilidade de filtrar o reprocessamento por **período de emissão** e por **administradoras específicas**, garantindo foco apenas no que precisa de ajuste.

✅ **Sincronização Automática de Vencimentos:** Ao alterar o prazo de repasse no cadastro, o sistema recalcula e atualiza a data de vencimento dos títulos na tela de cartões automaticamente.

✅ **Trava de Segurança e Integridade:** O ajuste é inteligente e protege seus dados, sendo aplicado exclusivamente a títulos que **não foram baixados e não foram conciliados**.

✅ **Paridade com Desktop:** Funcionalidade 100% alinhada à versão Desktop, trazendo a mesma robustez para o ambiente Web.

🚀 **Principais Benefícios:**

✔ **Agilidade na Correção:** Elimina a necessidade de intervenções do suporte técnico ou comandos manuais para corrigir divergências em cadastros de operadoras.

✔ **Precisão no Fluxo de Caixa:** Garante que o valor líquido a receber e as datas de crédito reflitam exatamente os contratos vigentes com as adquirentes.

✔ **Confiabilidade na Conciliação:** Prepara os dados corretamente para o batimento bancário, evitando que diferenças de centavos ou datas erradas dificultem a conferência.

✔ **Autonomia Gerencial:** Dá ao gestor financeiro o poder de manter a base de dados íntegra e atualizada conforme as negociações comerciais evoluem.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione a opção de **Administradoras** localizado no submenu **FINCANEIRO**.

Ajuste a taxa e prazo de repasse da(s) administradora(s) que será(ão) reprocessada(s).

Selecione a opção de reprocessamento (Taxa ou Prazo).

Utilize os filtros para definir o **Período de Emissão** das vendas que deseja corrigir.

Selecione a **Administradora** cujas taxas ou prazos foram alterados no cadastro.

Clique em **Iniciar Reprocessamento**. O sistema identificará os títulos pendentes e aplicará as novas regras de cálculo e vencimento.

Confira na tela de cartões ou no seu fluxo de caixa que os valores e datas foram atualizados conforme a vigência atual da operadora.

* * *

### **Novo Relatório de Controle de Crédito de Clientes no AppPosto**

#### Data de liberação: 03 de março de 2026

📢 Gestão de crédito na palma da sua mão! Implementamos no AppPosto o novo relatório de **Controle de Crédito de Clientes**, trazendo para o ambiente móvel a mesma segurança e detalhamento que você já utiliza no sistema Desktop.

Essa nova funcionalidade foi criada para dar total mobilidade ao gestor e às equipes de pista, permitindo a consulta instantânea de limites, saldos devedores e créditos disponíveis.

🛠 **O que foi implementado:**

✅ **Paridade Total com Desktop:** Funcionalidade completa de consulta de limites, crédito utilizado e saldo disponível agora disponível no AppPosto.

✅ **Duas Modalidades de Visualização:**

**Detalhada:** Exibe o histórico minucioso de cada crédito emitido e consumido, incluindo datas, números de cupons e valores individuais.

**Resumida:** Visão gerencial consolidada por cliente, apresentando saldo anterior, total emitido no período, total utilizado e saldo atual.

✅ **Filtros Inteligentes de Busca:** Localização rápida de informações por **Período, PDV, Cliente, Caixa** ou busca direta pelo **Número do Cupom**.

✅ **Layout Otimizado:** Listagem zebrada e agrupamentos organizados para facilitar a leitura técnica e a conferência de rodapés estruturados.

🚀 **Principais Benefícios:**

✔ **Mobilidade e Agilidade:** Consulte o status financeiro de qualquer cliente diretamente da pista ou do escritório, agilizando autorizações de venda sem depender do computador central.

✔ **Redução de Riscos Financeiros:** Identifique imediatamente clientes que excederam o limite ou possuem pendências, protegendo o fluxo de caixa do posto contra inadimplência.

✔ **Transparência no Atendimento:** Forneça informações precisas aos seus clientes sobre o saldo de crédito deles no momento do abastecimento, melhorando a experiência de compra.

✔ **Visibilidade Gerencial Completa:** Tenha o controle tanto do detalhamento técnico das transações quanto do resumo de saldos em uma única ferramenta portátil e intuitiva.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Controle de Crédito para Cliente** localizado no submenu **COBRANÇA**.

Escolha a **Apresentação** desejada (**Detalhado** para conferir lançamento a lançamento ou **Resumido** para ver saldos totais).

Utilize os filtros para selecionar um **Cliente** específico ou um **Período** de análise.

Gere o relatório para verificar o limite disponível e o histórico de utilização antes de autorizar novas operações a prazo.

* * *

### **Automatização e Cadastros na Emissão de MDF-e**

#### Data de liberação: 25 de fevereiro de 2026

📢 Diga adeus ao preenchimento manual repetitivo na emissão do seu Manifesto Eletrônico de Documentos Fiscais (MDF-e)! Implementamos uma poderosa atualização focada em **Automação e Integração de Dados**, permitindo que você emita seus documentos em poucos cliques, utilizando informações pré-cadastradas de veículos e motoristas.

Essa melhoria foi desenvolvida para eliminar erros de digitação e reduzir drasticamente o tempo de operação, transformando um processo burocrático em uma tarefa ágil e segura para o dia a dia logístico do seu posto.

🛠 **O que foi implementado:**

✅ **Novas Áreas de Cadastro:** Criados módulos específicos para o cadastro antecipado de **Veículos** (Placa, Tara, Capacidade, Reboque) e **Motoristas** (Nome, CPF).

✅ **Busca Automatizada (Ícone de Lupa):** Inclusão de botões de busca inteligente na tela do MDF-e. Agora, ao clicar na lupa, você seleciona o veículo ou condutor e o sistema preenche todos os campos técnicos instantaneamente.

✅ **Vínculo Automático de NCM:** Ao selecionar o produto para o manifesto, o sistema agora busca e preenche o **NCM** automaticamente, utilizando a informação já existente no seu cadastro de itens.

✅ **Flexibilidade Operacional:** Mantivemos a opção de digitação manual para situações eventuais com veículos ou motoristas terceirizados que não estejam na sua base fixa.

🚀 **Principais Benefícios:**

✔ **Agilidade Extrema na Emissão:** Reduz o tempo gasto na geração do documento ao substituir a digitação de dezenas de caracteres por simples cliques de seleção.

✔ **Segurança Fiscal e Redução de Erros:** Minimiza o risco de rejeições da SEFAZ causadas por erros de digitação em placas, CPFs ou capacidades de carga.

✔ **Organização Logística:** Centraliza as informações da sua frota e dos seus condutores em um único local, facilitando a gestão de ativos e pessoal.

✔ **Padronização de Dados:** Garante que o NCM e as especificações técnicas dos veículos sejam sempre enviadas de forma correta e padronizada conforme o cadastro oficial.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione as opções de **Veículos** e **Motoristas** localizado no submenu **EMPRESA** para registrar sua frota e equipe fixa.

Acesse o menu de **Movimento** no sistema.

Selecione a opção de **Emissão de MDF-e** localizado no submenu **FISCAL** e inicie uma nova emissão.

Nos boxes de **Dados do Veículo**, **Dados do Reboque** e **Dados dos Condutores**, clique no ícone da **Lupa** para abrir sua lista de cadastros. Selecione a opção desejada e veja os dados serem preenchidos automaticamente.

Ao informar o produto da carga, note que o campo **NCM** será preenchido pelo sistema sem necessidade de intervenção manual.

Com todos os dados validados e carregados, basta concluir a emissão com muito mais rapidez.

* * *

### **Somatório Dinâmico por Período no Contas a Pagar**

#### Data de liberação: 25 de fevereiro de 2026

📢 Planeje seu fluxo de caixa com muito mais agilidade e precisão! Implementamos uma melhoria estratégica no módulo de **Contas a Pagar**: agora, o sistema apresenta o somatório total automático de todos os títulos listados de acordo com o período que você selecionar.

Essa funcionalidade foi criada para eliminar a necessidade de cálculos manuais ou a exportação de relatórios apenas para saber o montante de compromissos de uma semana ou quinzena específica. Com um olhar rápido, você já sabe exatamente o volume financeiro necessário para honrar seus compromissos no intervalo desejado.

🛠 **O que foi implementado:**

✅ **Novo Bloco de Totalização Dinâmica:** Inclusão do quadro **"TOTAL NO PERÍODO SELECIONADO"** no meio da tela de Contas a Pagar.

✅ **Recálculo Inteligente em Tempo Real:** O valor do somatório é atualizado instantaneamente sempre que você alterar o filtro de datas, empresa, fornecedor ou situação das contas.

✅ **Integração de Indicadores:** Manutenção dos blocos fixos (como "Vencendo Hoje" e "No Mês") trabalhando em conjunto com a nova métrica personalizada por período.

✅ **Fidelidade de Dados:** Garantia de que o valor exibido no quadro corresponde exatamente à soma dos títulos que aparecem na grade de resultados.

🚀 **Principais Benefícios:**

✔ **Agilidade no Planejamento Financeiro:** Visualize imediatamente o montante necessário para aportes em datas futuras, facilitando a organização do saldo bancário.

✔ **Precisão Operacional:** Elimina o risco de erros humanos em somas manuais e a dependência de calculadoras externas durante a conferência de títulos.

✔ **Eficiência na Gestão de Caixa:** Transforma a tela de consulta em um painel direto de análise, permitindo identificar rapidamente o peso financeiro de períodos customizados (ex: uma semana de promoções ou final de mês).

💡 **Como utilizar:**

Acesse o menu de **Financeiro** no sistema.

Selecione a opção de **Contas a Pagar** localizado no submenu **PAGAMENTOS**.

Utilize os filtros de pesquisa para definir o **Período** desejado (ex: de 01/03 a 15/03).

Aplique outros filtros se necessário, como por **Fornecedor** ou **Empresa**.

Observe no meio da tela o novo quadro **"TOTAL NO PERÍODO SELECIONADO"**, que exibirá a soma automática de todos os boletos e duplicatas que atendem aos seus critérios de busca.

Utilize esse valor para programar seus pagamentos e transferências bancárias com total segurança.

* * *

### **Nova Listagem de Produtos por Departamento com Dados Fiscais**

#### Data de liberação: 25 de fevereiro de 2026

📢 Mais paridade e poder de auditoria para o seu ambiente Web! Implementamos no AppPosto a nova apresentação **Por Departamento** do relatório de **Listagem de Produtos**, trazendo o detalhamento fiscal completo que você já utilizava na versão Desktop.

Essa atualização foi desenvolvida para facilitar a conferência tributária e contábil, permitindo que você valide informações de impostos e códigos fiscais de forma rápida, organizada e com um layout otimizado para leitura.

🛠 **O que foi implementado:**

✅ **Nova Apresentação por Departamento:** Adicionada a opção de agrupamento por "Relação por Departamento", replicando fielmente a lógica de organização do sistema Desktop.

✅ **Detalhamento Fiscal Completo:** Inclusão de colunas essenciais para auditoria contábil, como: **CFOP, CST, Alíquota (%) e Código de Receita**.

✅ **Layout Zebrado e Profissional:** Implementação de alternância de cores nas linhas para facilitar a leitura e novo design de cabeçalho com escala de logotipo ajustada.

✅ **Exportação Multi-formato:** Garantida a fidelidade total dos dados e do layout na geração de arquivos tanto em **PDF** quanto em **Excel**.

🚀 **Principais Benefícios:**

✔ **Eficiência em Auditorias Contábeis:** Agiliza a conferência de impostos e cadastros fiscais ao consolidar todas as informações tributárias em um único documento organizado.

✔ **Paridade de Ferramentas:** Garante que o usuário tenha as mesmas funcionalidades gerenciais no ambiente Web, facilitando a transição definitiva para a nuvem.

✔ **Agilidade na Conferência de Cadastros:** Identifique rapidamente erros de tributação ou departamentos trocados através da visão segmentada por grupo e subgrupo.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Produtos** localizado no submenu **LISTAGEM**.

Escolha a nova **Apresentação** **Relação por Departamento**.

Utilize os filtros adicionais se desejar refinar a busca por um departamento ou grupo específico.

Gere o relatório em tela para conferência rápida ou exporte em PDF/Excel para enviar ao seu contador ou setor fiscal.

* * *

### **Novo Relatório de Controle e Relação de Cheques**

#### Data de liberação: 25 de fevereiro de 2026

📢 Tenha o controle total do ciclo de vida dos seus cheques em uma única tela! Implementamos o novo relatório de **Relação de Cheques**, uma ferramenta centralizada para que você acompanhe a situação atual de cada título.

Essa funcionalidade foi criada para eliminar a necessidade de conferências manuais e dispersas. Agora, a gestão financeira ganha uma visão clara de todos os cheques em posse do posto, facilitando a auditoria de depósitos pendentes e a recuperação de crédito de cheques devolvidos.

🛠 **O que foi implementado:**

✅ **Novo Relatório Especializado:** Criada a ferramenta de Relação de Cheques com duas modalidades de visualização:

**Detalhado:** Exibição minuciosa de cada título e situação atual.

**Resumido:** Visão consolidada para conferências rápidas de volumes e totais.

✅ **Filtros Avançados de Busca:** Localize exatamente o que precisa através de filtros por:

Tipo de Cheque (À Vista ou A Prazo).

Situação (Depósitos Pendentes, Devolvidos ou Quitados).

Dados específicos como CPF/CNPJ, Cliente, Número do Cheque e Valor Mínimo.

Períodos de Emissão ou Datas de Depósito.

✅ **Gestão de Status Integrada:** O relatório reflete em tempo real as mudanças de estado do cheque no sistema, garantindo dados sempre atualizados.

🚀 **Principais Benefícios:**

✔ **Controle Financeiro Centralizado:** Reúne todas as situações de cheques em uma única interface, eliminando planilhas paralelas e buscas manuais em detalhes de lançamentos.

✔ **Auditoria e Recuperação de Crédito:** Facilita o acompanhamento rigoroso de cheques devolvidos, permitindo ações rápidas de cobrança e reduzindo a inadimplência.

✔ **Agilidade na Rotina Contábil:** Otimiza o tempo da gerência financeira na preparação de depósitos e no fechamento de caixa.

✔ **Previsibilidade de Caixa:** Permite visualizar o montante de cheques a prazo com datas de depósito futuras, auxiliando no planejamento financeiro.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Relação de Cheques** localizado no submenu **FINANCEIRO**.

Escolha o tipo de **Apresentação** (Detalhado ou Resumido).

Utilize os filtros para refinar sua busca, como selecionar apenas cheques com a situação **Devolvidos Pendentes** ou buscar por um **CPF** específico.

Gere o relatório para analisar o status dos títulos, totais por período e preparar suas rotinas de depósito ou cobrança.

* * *

### **Gestão Financeira de Fretes em Compras de Combustível**

#### Data de liberação: 25 de fevereiro de 2026

📢 Mais precisão no seu Contas a Pagar e organização nos lançamentos de frete! Refizemos o fluxo de **Compras de Combustível** para permitir o desmembramento financeiro entre o fornecedor do produto e o transportador.

Essa melhoria é essencial para operações com frete tipo FOB, onde o boleto do combustível e o boleto do frete possuem CNPJs e vencimentos diferentes. Agora, o sistema permite que você registre essas obrigações de forma separada e organizada dentro da mesma nota fiscal, garantindo que o seu financeiro reflita a realidade das suas faturas.

🛠 **O que foi implementado:**

✅ **Desmembramento Financeiro Automático:** Ajustada a finalização de compras para gerar títulos de Contas a Pagar distintos para o fornecedor do combustível e para a transportadora.

✅ **Lançamento Manual de Frete:** Liberado campo para inserção do valor do frete em notas onde o custo não vem destacado no XML, permitindo a composição correta do custo do produto.

✅ **Gestão de Títulos Independentes:** Após finalizar a nota, o sistema abre sequencialmente as telas de lançamento para que você informe as condições de pagamento de cada boleto (combustível e frete) individualmente.

✅ **Mensagens de Erro Orientativas:** Ao tentar excluir um título vinculado, o sistema informa: _"Não foi possível excluir a conta, pois há uma compra ou nota fiscal vinculada a ela"_.

✅ **Correção de Cálculos de Custo:** Nova lógica que separa o valor líquido dos produtos do valor total da operação com frete, garantindo o cálculo preciso do custo unitário.

🚀 **Principais Benefícios:**

✔ **Conformidade Financeira:** Permite a quitação correta de boletos para diferentes favorecidos dentro de uma única operação de compra.

✔ **Organização do Fluxo de Caixa:** Garante que os agendamentos de pagamentos no banco coincidam exatamente com os boletos físicos recebidos de cada fornecedor.

💡 **Como utilizar:**

Acesse o menu de **Estoque** no sistema.

Selecione a opção de **Compra de Combustíveis** localizado no submenu **MOVIMENTO**.

Importe o XML da nota normalmente.

No guia **FRETE**, defina o **Tipo Frete** como **Por Conta do Destinatário - FOB.**

No box **Impostos e Totais**, utilize o campo **Valor Frete (R$)** para inserir manualmente o valor do transporte.

Ao clicar em **Finalizar**, o sistema processará o estoque e abrirá a primeira tela de Contas a Pagar referente ao **Combustível**. Informe os dados do boleto e salve.

Imediatamente após, o sistema abrirá uma segunda tela de Contas a Pagar referente ao **Frete**. Informe os dados do boleto da transportadora e salve.

Confira no seu **Contas a Pagar** que agora existem dois títulos distintos vinculados à mesma nota fiscal.

* * *

### **Gestão Multiempresa de Conhecimento de Transporte (CT-e)**

#### Data de liberação: 25 de fevereiro de 2026

📢 Centralize a gestão logística da sua rede em uma única tela! Reformulamos o módulo de **Conhecimento de Transporte (CT-e)** para o modelo **Multiempresa**, eliminando a necessidade de trocar de login para visualizar ou emitir documentos de diferentes unidades.

Essa atualização foi pensada para redes de postos e transportadoras que precisam de agilidade operacional, permitindo que um único operador gerencie os fretes e emissões de diversas filiais com total segurança e fluidez.

🛠 **O que foi implementado:**

✅ **Filtro Multiempresa Estratégico:** Novo seletor na tela principal que permite filtrar e visualizar os CT-es de uma, várias ou todas as empresas do grupo simultaneamente.

✅ **Identificação Facilitada na Grade:** Reestruturamos a listagem de dados para que o **Nome Fantasia** da empresa seja o primeiro campo visível, agilizando a diferenciação dos registros.

✅ **Emissão Centralizada:** Adicionado o campo de seleção de empresa na tela de criação de novos documentos, permitindo emitir CT-es para diferentes filiais sem sair da sessão atual.

✅ **Segurança e Permissões:** O sistema respeita rigorosamente o perfil do usuário, exibindo e permitindo a emissão apenas para as unidades às quais ele possui permissão de acesso explícita.

✅ **Visualização em Alterações:** Exibição informativa da empresa proprietária do documento na tela de edição (modo somente leitura), garantindo a integridade do registro.

🚀 **Principais Benefícios:**

✔ **Agilidade Operacional:** Centraliza a gestão logística em uma única interface, eliminando o tempo perdido com trocas constantes de login entre empresas.

✔ **Visão Panorâmica do Grupo:** Proporciona uma visão global de todos os fretes e transportes da rede, facilitando o controle de faturamento e auditoria.

✔ **Eficiência em Centrais de Serviços:** Permite que faturistas ou gestores de logística operem como uma central de serviços compartilhados, otimizando a mão de obra.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção de **Emissão de CT-e** localizado no submenu **FISCAL**.

No topo da tela, utilize o novo filtro **Empresa** para selecionar as unidades que deseja gerenciar no momento.

Observe na listagem que a primeira coluna agora identifica a qual empresa cada CT-e pertence.

Para emitir um novo documento, clique em **Novo** e utilize o seletor de **Empresa** para definir qual filial será a emissora do transporte.

Acompanhe o status de autorização e faturamento de todas as suas unidades em uma visão consolidada.

* * *

### **Nova Métrica de Frequência no Relatório de Vendas por Frentista**

#### Data de liberação: 20 de fevereiro de 2026

📢 Entenda com mais justiça e precisão o desempenho da sua equipe de pista! Agora, o relatório de **Vendas por Frentista** conta com a nova coluna **"Dias com abastecimentos"**.

Essa melhoria foi desenvolvida para que o gestor consiga diferenciar quem vende mais por ter uma carga horária maior de quem é mais produtivo em menos tempo. Com esse dado, o sistema deixa de mostrar apenas o "quanto" foi vendido e passa a mostrar "em quantos dias" aquele resultado foi construído, permitindo um cálculo real de média diária de vendas.

🛠 **O que foi implementado:**

✅ **Novo Indicador de Frequência Operacional:** Inclusão da coluna "Dias com abastecimentos" especificamente na apresentação **"Por Frentista"**.

✅ **Lógica de Contagem Única:** O sistema agora identifica e soma apenas os dias distintos em que o colaborador realizou ao menos um abastecimento no período filtrado.

✅ **Relatório Analítico Reforçado:** Manutenção de todos os indicadores anteriores (Volume, Mix %, Ticket Médio), agora enriquecidos com o fator tempo/frequência.

🚀 **Principais Benefícios:**

✔ **Análise de Produtividade Real:** Permite calcular a média de vendas por dia trabalhado, oferecendo uma métrica muito mais justa para comparar o desempenho entre frentistas com escalas diferentes.

✔ **Apoio à Gestão de Escalas e Metas:** Facilita a identificação de colaboradores com baixa assiduidade ou alta concentração de vendas em poucos dias, auxiliando no ajuste de folgas e na definição de metas individuais.

✔ **Visão Gerencial Estratégica:** Transforma o relatório em um instrumento de RH e Operações, ajudando a identificar os talentos mais eficientes da sua pista.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Frentista** localizado no submenu **VENDAS**.

Escolha a **Apresentação** **Por** **Frentista**.

Defina o **Período** desejado (ex: o mês atual) e gere o relatório.

Localize a nova coluna **"Dias com abastecimentos"** e utilize esse dado para dividir o volume total de vendas pelo número de dias trabalhados, obtendo assim a **produtividade média diária** de cada colaborador.

* * *

### **Nova Navegação Inteligente na Prestação de Contas**

#### Data de liberação: 20 de fevereiro de 2026

📢 Deixe o "vai e vem" de telas no passado e ganhe velocidade no seu fechamento de caixa! Implementamos um conjunto de melhorias na **Prestação de Contas** focado em produtividade e fluidez. Agora, o sistema entende o seu ritmo de trabalho, permitindo que você audite múltiplos turnos em sequência, sem interrupções e sem perder a sua posição na lista.

Essas funcionalidades foram desenhadas para gestores que lidam com um alto volume de caixas diariamente e precisam de uma ferramenta que acompanhe a agilidade da operação.

🛠 **O que foi implementado:**

✅ **Navegação Direta (Botões Anterior/Próximo):** Adicionados botões de atalho dentro da tela de edição do caixa. Agora você pode pular para o próximo turno ou voltar ao anterior sem precisar fechar a tela e carregar a lista novamente.

✅ **Persistência de Paginação:** O sistema agora possui "memória de navegação". Se você estiver conferindo um caixa na página 10 e precisar sair da edição, ao retornar para a listagem, o sistema te manterá exatamente na página 10.

🚀 **Principais Benefícios:**

✔ **Alta Produtividade:** Transforma a auditoria diária em um fluxo contínuo e rápido, reduzindo drasticamente o tempo gasto no fechamento de múltiplos turnos.

✔ **Fluidez Operacional:** Elimina centenas de cliques desnecessários ao longo do dia, proporcionando uma experiência de uso muito mais moderna e prática.

✔ **Segurança no Processo:** Evita que você se perca na lista ou "pule" algum caixa por acidente, já que a posição na página e os filtros são preservados.

✔ **Eficiência Gerencial:** Ideal para redes de postos ou unidades com muitos PDVs, onde cada segundo economizado no fechamento reflete em mais tempo para a análise estratégica.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção de **Prestação de Contas** localizado no submenu **CAIXAS DE VENDA**.

Aplique os filtros desejados (como a data do dia ou um operador específico) e entre na edição de um caixa.

Utilize os novos botões **Anterior** e **Próximo** localizados no topo da tela para navegar entre os caixas daquela lista filtrada.

Caso precise sair da tela de edição para consultar algo e depois voltar, clique em Voltar; você notará que o sistema te manterá exatamente na mesma página e posição em que você estava.

Repita o processo até concluir todas as conferências com muito mais agilidade.

* * *

### **Evolução do Relatório de Vendas por Horário: Análise por Bicos e Períodos**

#### Data de liberação: 20 de fevereiro de 2026

📢 Entenda o comportamento da sua pista com precisão cirúrgica! Reformulamos o relatório de **Vendas por Horário**, trazendo novas formas de visualização que conectam o volume de vendas diretamente aos **Bicos de Abastecimento**.

Essa atualização foi desenvolvida para que o gestor identifique exatamente quais ilhas de abastecimento são mais produtivas em cada horário do dia, permitindo ajustes estratégicos na escala da equipe e no fluxo de atendimento da pista. Além disso, corrigimos fórmulas matemáticas cruciais para garantir que seus indicadores de desempenho sejam 100% confiáveis.

🛠 **O que foi implementado:**

✅ **Novas Modalidades de Apresentação:**

**Por Período e Bicos:** Consolida o volume e valores financeiros segmentados por bico em faixas períodos determinadas pelo usuário.

**Por Horário e Bicos:** Consolida o volume e valores financeiros segmentados por bico em cada horário do dia.

✅ **Correção do Ticket Médio:** Ajuste nas fórmulas matemáticas de Ticket Médio (Valor e Litros), eliminando distorções e garantindo a média real sobre o total de abastecimentos.

🚀 **Principais Benefícios:**

✔ **Gestão de Produtividade da Pista:** Identifique bicos subutilizados ou ilhas com sobrecarga em horários de pico, otimizando a escala de frentistas por setor.

✔ **Diagnóstico Operacional Fiel:** Transforme dados brutos de venda em uma visão clara da operação física do seu posto, bico a bico.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Horário** localizado no submenu **VENDAS**.

Escolha a **Apresentação** desejada entre as novas opções:

**Por Período e Bicos** ou **Por Horário e Bicos** para analisar a saída de produtos por faixa horária.

Defina o **Período** que deseja consultar.

Utilize os dados de **Ticket Médio (Valor ou Litros)** e **Volume por Bico** para planejar melhor a distribuição da sua equipe na pista durante os horários de maior movimento.

* * *

### **Novo Extrato de Pagamentos de Vales e Antecipações**

#### Data de liberação: 10 de fevereiro de 2026

📢 Mais transparência e confiança na gestão dos seus créditos e convênios! Implementamos no AppPosto o novo relatório de **Extrato de Pagamentos de Vales**, uma ferramenta essencial para auditoria e conferência de saldos, especialmente para clientes que utilizam modalidades de crédito por antecipação (pré-pago).

Essa funcionalidade foi desenvolvida para eliminar dúvidas sobre o consumo de frotistas e facilitar a prestação de contas, permitindo que o gestor visualize o fluxo exato de entradas e saídas de cada conta de forma clara e profissional.

🛠 **O que foi implementado:**

✅ **Extrato Completo de Movimentação:** Relatório com paridade total à versão Desktop, registrando cada débito e crédito realizado.

✅ **Três Modos de Visualização Estratégicos:**

**Detalhado:** Visão minuciosa dos vales e faturas criadas e em aberto dia a dia.

**Simplificado:** Resumo consolidado de débitos e créditos para conferências rápidas.

**Saldo Antecipação:** Foco exclusivo no consumo de saldo para clientes da modalidade pré-paga.

✅ **Gestão Automática de Saldos:** O sistema calcula e exibe o **Saldo Anterior**, a **Movimentação do Período** e o **Saldo Final** de forma automática.

✅ **Filtros por Cliente e Período:** Facilidade para extrair informações específicas de um único convênio ou de toda a base de clientes.

🚀 **Principais Benefícios:**

✔ **Transparência e Confiança:** Proporciona ao seu cliente frotista uma visão cristalina do consumo, reduzindo drasticamente contestações de valores e chamados ao suporte.

✔ **Eficiência na Conferência Financeira:** Agiliza o trabalho da equipe administrativa ao centralizar informações complexas de antecipação em um extrato intuitivo e fácil de ler.

✔ **Autonomia de Gestão:** Transforma o sistema em um canal de autoatendimento, permitindo a geração rápida de documentos que antes exigiam processos manuais demorados.

✔ **Segurança nos Dados:** Garante que o saldo final sempre bata com as movimentações registradas, oferecendo uma trilha de auditoria segura para o posto e para o cliente.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Extrato de Pagamentos de Vales** localizado no submenu **COBRANÇA**.

Escolha a **Apresentação** desejada (Detalhado, Simplificado ou Saldo Antecipação).

Defina o **Período** e selecione o **Cliente** que deseja consultar.

Gere o extrato para conferir os saldos iniciais, as movimentações de vendas e aportes, e o saldo final disponível.

* * *

### **Registro de Observações e Justificativas em Contagens de Estoque**

#### Data de liberação: 05 de fevereiro de 2026

📢 Traga mais transparência e detalhes para os seus inventários! Implementamos novos campos de **Observação nas Rotinas de Contagem**, permitindo que você documente justificativas para divergências, quebras ou sobras no exato momento da conferência.

Essa melhoria foi desenvolvida para eliminar a necessidade de anotações manuais externas, garantindo que toda a inteligência por trás de uma diferença de estoque fique registrada no sistema para consultas e auditorias futuras.

🛠 **O que foi implementado:**

✅ **Observações por Item:** Adicionado um campo específico para cada produto da contagem, ideal para justificar motivos de divergência (ex: produto vencido, erro de lançamento, avaria).

✅ **Campo de Observação Geral:** Implementada uma área de texto livre para anotações globais que envolvam todo o processo de inventário realizado.

✅ **Relatórios Detalhados:** O relatório de "Contagem" foi atualizado para exibir todas as anotações inseridas, com layout ajustado para leitura clara das justificativas.

✅ **Segurança de Dados:** Os campos permitem edição durante o processo de conferência, mas contam com trava de segurança automática após a finalização do balanço.

🚀 **Principais Benefícios:**

✔ **Rastreabilidade e Auditoria:** Facilita a identificação das causas reais de sobras ou faltas, centralizando o histórico de perdas diretamente no registro do estoque.

✔ **Comunicação Direta com a Gerência:** Permite que o conferente envie informações cruciais para quem irá analisar o inventário, sem a necessidade de recados verbais ou papéis avulsos.

✔ **Transparência Gerencial:** Transforma o relatório de contagem em um documento muito mais rico, auxiliando em tomadas de decisão estratégicas e ações corretivas sobre o estoque.

💡 **Como utilizar:**

Acesse o menu de **Estoque** no sistema.

Selecione a opção de **Contagem de Estoque** localizada no submenu **AUDITORIA**.

Ao lançar as quantidades contadas de um item, utilize o novo campo **Observação** () para descrever qualquer particularidade ou motivo de divergência.

Caso precise registrar algo sobre a contagem como um todo, utilize o campo de **Observação Geral** no cabeçalho da tela.

Após concluir a contagem, emita o relatório de conferência para visualizar as anotações consolidadas junto aos itens.

Utilize essas informações para realizar os ajustes de estoque com maior segurança e embasamento.

* * *

### **Relação Sintética de Vales: Filtro e Agrupamento por Placa de Veículo**

#### Data de liberação: 05 de fevereiro de 2026

📢 Mais controle e agilidade no atendimento aos seus clientes frotistas! Agora, o relatório de **Relação Sintética de Vales** conta com a funcionalidade de filtro e agrupamento por **Placa de Veículo**.

Essa melhoria foi desenvolvida para facilitar a conferência de débitos, permitindo que você entregue aos seus convênios um detalhamento preciso do consumo de cada veículo, eliminando a necessidade de triagens manuais e acelerando o processo de fechamento de faturas.

🛠 **O que foi implementado:**

✅ **Filtro de Placa Específico:** Adicionado campo de busca textual nos parâmetros do relatório, permitindo localizar rapidamente as movimentações de um veículo individual.

✅ **Agrupamento por Veículo:** Nova opção de visualização que organiza os lançamentos e gera subtotais segmentados por **Cliente e Placa**.

✅ **Interface Simplificada:** Melhoria na usabilidade para facilitar a extração de dados analíticos sem complicação.

🚀 **Principais Benefícios:**

✔ **Controle de Frota Eficiente:** Ofereça aos seus clientes uma prestação de contas profissional, detalhando exatamente onde e como cada veículo do convênio consumiu.

✔ **Redução de Retrabalho:** Elimina a necessidade de exportar dados para planilhas externas para realizar separações manuais por placa.

✔ **Transparência Comercial:** Melhora o relacionamento com grandes frotistas ao fornecer relatórios claros, organizados e fáceis de auditar.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Relação Sintética de Vales** localizado no submenu **COBRANÇA**.

Nos parâmetros de busca, utilize o novo campo **Placa** caso deseje filtrar apenas um veículo específico.

Gere o relatório para visualizar os subtotais por veículo de forma organizada.

* * *

### **Novo Dashboard: Performance de Combustíveis**

#### Data de liberação: 03 de fevereiro de 2026

📢 Transforme a gestão da sua pista com indicadores visuais e em tempo real! Implementamos o novo **Dashboard de Combustível**, uma central de inteligência estratégica que consolida as métricas mais importantes da sua operação em uma única tela.

Essa nova funcionalidade foi criada para que o gestor abandone a necessidade de cruzar diversos relatórios manuais. Agora, dados como Mix de Aditivada, Ticket Médio e Margem de Lucro estão disponíveis de forma instantânea e intuitiva, facilitando a tomada de decisões rápidas e assertivas. Além disso, o dashboard conta com a **visão Multiempresa**, permitindo que você acompanhe os indicadores de todas as suas filiais em um único ambiente, com detalhamento individual por unidade.

🛠 **O que foi implementado:**

✅ **Visão Consolidada e Multiempresa:** Interface que permite selecionar e alternar entre as empresas do banco de dados, exibindo o detalhamento dos indicadores para cada uma delas no mesmo painel.

✅ **Painel de Indicadores (KPIs):** Visualização moderna de **Litragem (volume), Faturamento Líquido, CMV e Lucro Bruto**.

✅ **Métricas de Performance Automatizadas:**

**Ticket Médio (Litros/Valor):** Entenda o comportamento médio de consumo em cada abastecimento por unidade.

**Margem Bruta %:** Acompanhe em tempo real a lucratividade sobre o custo da mercadoria vendida de cada empresa.

**Mix de Gasolinas:** Monitore o percentual de conversão de Gasolina Aditivada sobre o volume total de vendas.

✅ **Sincronização de Dados:** Garantia de paridade total com o relatório de Vendas e Rentabilidade, assegurando que o Dashboard reflita a realidade oficial do sistema.

🚀 **Principais Benefícios:**

✔ **Gestão Centralizada:** Monitore a performance de todo o seu grupo econômico sem precisar trocar de filial ou realizar múltiplos logins.

✔ **Decisão Ágil:** Oferece uma visão panorâmica e imediata da saúde financeira da pista, permitindo correções de rota no mesmo dia para cada unidade de negócio.

✔ **Análise de Eficiência Comparativa:** Facilita o monitoramento de estratégias comerciais e a comparação de desempenho entre diferentes postos da rede.

✔ **Confiabilidade nos Números:** Elimina planilhas paralelas e erros de cálculo manual, proporcionando dados auditáveis e prontos para reuniões de gerência.

💡 **Como utilizar:**

Acesse o menu de **Dashboard** no sistema.

Selecione o **Dashboard de Combustíveis** localizado no menu lateral.

Utilize o **Filtro de Empresa** no topo da tela para selecionar as filiais que deseja analisar simultaneamente ou de forma individual.

Defina o período de análise e acompanhe como cada indicador se comporta em cada uma das empresas selecionadas.

* * *

### **Nova Forma de Pagamento de Fatura de Convênio: Depósito Bancário**

#### Data de liberação: 03 de fevereiro de 2026

📢 Mais precisão e organização no seu Contas a Receber! Atendendo às necessidades de conciliação bancária, implementamos a opção de **"Depósito Bancário"** na rotina de quitação de faturas de convênio.

Essa atualização elimina a necessidade de lançar transferências ou depósitos como "Dinheiro", garantindo que a natureza da transação no sistema seja exatamente a mesma que aparece no seu extrato bancário.

🛠 **O que foi implementado:**

✅ **Nova Forma de Recebimento:** Adicionada a opção "Depósito Bancário" na tela de quitação de faturas de convênios, disponível tanto para faturas de crédito como faturas de débito.

✅ **Campos de Controle Detalhado:** Obrigatoriedade de informar **Conta Origem, Conta Aplicação, Centro de Resultado, Histórico e Número do Documento** no momento da baixa.

✅ **Integração com Livro Caixa:** Os lançamentos alimentam o Livro Caixa e o Caixa de Gerência automaticamente com a descrição da fatura vinculada.

🚀 **Principais Benefícios:**

✔ **Precisão na Conciliação:** Acaba com as divergências financeiras no fechamento, facilitando o batimento direto com o extrato do banco.

✔ **Rastreabilidade Total:** Permite identificar rapidamente qual depósito bancário liquidou qual fatura, essencial para auditorias e conferências.

✔ **Organização do Fluxo de Caixa:** Separa claramente o que entrou fisicamente no caixa do posto do que foi depositado diretamente em conta.

✔ **Integridade Gerencial:** Melhora a qualidade da informação financeira, evitando erros comuns de lançamento que distorcem os saldos das contas bancárias.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Faturas de Convênio** localizado no submenu **CONVÊNIOS**.

Selecione as faturas que deseja baixar.

Clique no botão **Adicionar Novo Pagamento** e escolha a nova opção **Depósito Bancário**.

Preencha os dados obrigatórios de rastreio (Contas de onde os valores saíram e entraram, Documento, Histórico e Valor).

Confirme a operação. O sistema gerará automaticamente o lançamento no Livro Caixa, já vinculado à conta bancária e à fatura correta.

* * *

### **Resumo de Formas de Pagamento no Relatório de Relação de Faturas**

#### Data de liberação: 02 de fevereiro de 2026

📢 O fechamento das faturas de convênio ficou muito mais rápido e preciso! Adicionamos um **Resumo Consolidado de Formas de Pagamento** ao relatório de Relação de Faturas. Agora, além de listar os títulos baixados, o sistema entrega um quadro final com o somatório exato de como cada valor foi recebido.

Essa melhoria foi criada para eliminar cálculos manuais e facilitar a vida do setor financeiro, que agora visualiza de forma mastigada quanto do total quitado entrou via PIX, Cartão, Dinheiro ou outras modalidades.

🛠 **O que foi implementado:**

✅ **Quadro de Resumo Financeiro:** Inclusão de um novo container de totais ao final do relatório, agrupando os valores por modalidade de pagamento.

✅ **Lógica de Agregação de Liquidações:** O sistema agora varre automaticamente todas as tabelas de baixa vinculadas às faturas do período, garantindo precisão absoluta no somatório.

✅ **Detalhamento por Modalidade:** Separação clara entre PIX, Cartões (Crédito/Débito), Dinheiro e demais formas configuradas no sistema.

✅ **Relatório Analítico:** Manutenção da listagem detalhada de faturas, agora complementada pela visão gerencial de recebimentos.

🚀 **Principais Benefícios:**

✔ **Ferramenta de Auditoria:** Facilita a conferência contábil e o fechamento de caixa de convênios, servindo como um comprovante fiel da origem dos recursos.

✔ **Confiabilidade nos Dados:** Reduz erros humanos e inconsistências, proporcionando dados consolidados diretamente da base de liquidações do sistema.

✔ **Visão de Fluxo de Caixa:** Permite entender rapidamente o comportamento de pagamento dos seus clientes faturados.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Relação de Faturas** localizado no submenu **COBRANÇA**.

Defina o período desejado e utilize os filtros para selecionar faturas **Quitadas**.

Gere o relatório e navegue até a última página.

Confira o novo quadro de **Resumo por Finalizadora** para realizar sua conferência de valores e conciliação bancária.

* * *

### **Notificação Automática para Geração de Arquivos Fiscais**

#### Data de liberação: 02 de fevereiro de 2026

📢 Mais liberdade e previsibilidade na sua rotina contábil! Implementamos um sistema de **Notificações Inteligentes** para a geração de arquivos fiscais pesados (como SPED e Fortes AC). Agora, você não precisa mais ficar parado aguardando o processamento terminar; o sistema trabalha em segundo plano e avisa você no momento exato em que o arquivo estiver pronto.

Essa melhoria foi desenvolvida para otimizar o seu tempo, garantindo que processos demorados sejam monitorados automaticamente pelo sistema e comunicados através de alertas claros e imediatos.

🛠 **O que foi implementado:**

✅ **Integração com a Central de Alertas:** O status da geração de arquivos fiscais agora está vinculado diretamente ao ícone de notificações do sistema.

✅ **Processamento em Segundo Plano:** Liberdade para navegar em outras telas e realizar diferentes tarefas enquanto o backend processa arquivos complexos.

✅ **Avisos de Conclusão e Download:** Notificação automática assim que o arquivo for gerado com sucesso, permitindo o download imediato.

✅ **Feedback de Erros Detalhado:** Em caso de falhas (como erros de CFOP ou cadastros incompletos), o sistema dispara um alerta específico descrevendo o problema, facilitando a correção rápida.

🚀 **Principais Benefícios:**

✔ **Ganho de Produtividade:** Elimina o tempo de espera ocioso na frente da tela de processamento, permitindo que você foque em outras atividades operacionais.

✔ **Comunicação Transparente:** Proporciona feedback constante sobre o progresso de tarefas críticas, reduzindo a incerteza sobre o status da geração.

✔ **Agilidade na Correção Fiscal:** Identifique instantaneamente inconsistências fiscais através das notificações de erro.

✔ **Segurança no Fluxo:** Garante que, mesmo em casos de instabilidade de conexão, você seja avisado sobre o sucesso ou falha da tarefa assim que retomar a sessão.

💡 **Como utilizar:**

Acesse a rotina de geração de arquivos fiscais desejada (Ex: **Fiscal > SPED**).

Preencha os filtros e inicie a geração do arquivo normalmente.

Você pode navegar para outros menus; o sistema continuará o processamento internamente.

Fique atento ao **ícone do sino (Central de Notificações)** no final do menu lateral.

Assim que o alerta aparecer, clique sobre ele para visualizar o status. Se o arquivo estiver pronto, basta seguir as instruções para o download. Caso haja erro, leia a descrição na notificação para realizar o ajuste necessário.

* * *

### **Nova Apresentação de Movimentação de Cartões: Comparativo de Taxas**

#### Data de liberação: 15 de janeiro de 2026

📢 Recupere valores e tenha o controle total sobre as taxas das suas operadoras! Implementamos a nova apresentação de **Movimentação de Cartões (Comparativo de Taxas)**, uma ferramenta poderosa para auditoria financeira que identifica, centavo a centavo, qualquer discrepância nas cobranças das adquirentes.

Essa funcionalidade foi criada para que o gestor tenha em mãos um documento formal e preciso, capaz de fundamentar contestações junto às operadoras sempre que a taxa aplicada no banco for diferente da taxa contratada e cadastrada no sistema.

🛠 **O que foi implementado:**

✅ **Relatório de Auditoria Consolidado:** Nova apresentação focada exclusivamente no confronto de taxas por transação.

✅ **Identificação de Divergências:** Lógica que compara automaticamente a **Taxa Cadastrada** vs. a **Taxa Efetivamente Conciliada**.

✅ **Visão Monetária Real:** O relatório apresenta as variações diretamente em **R$ (reais)**, facilitando a visualização do impacto financeiro no caixa.

✅ **Suporte à Exportação:** Documento estruturado e pronto para ser exportado e enviado para conferência externa ou suporte das adquirentes.

🚀 **Principais Benefícios:**

✔ **Base Sólida para Contestação:** Fornece o suporte documental necessário para exigir estornos e correções de taxas aplicadas indevidamente pelas operadoras.

✔ **Redução de Perdas Financeiras:** Identifica cobranças silenciosas que, ao final do mês, podem representar um valor significativo de perda de margem.

✔ **Transparência na Conciliação:** Garante que o processo de conciliação bancária não seja apenas uma conferência de valores, mas uma auditoria de custos.

✔ **Eficiência Gerencial:** Transforma dados complexos de taxas em uma planilha de fácil leitura, agilizando o trabalho do setor financeiro e da controladoria.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Conciliação** localizado no submenu **FINANCEIRO**.

Nas opções de apresentação, escolha **Movimentação de Cartões**.

Defina o período de análise e a(s) administradora(s) que deseja auditar.

Gere o relatório e analise as colunas de divergência. Utilize esse documento para identificar quais transações tiveram taxas acima do contratado e inicie o processo de contestação junto à operadora.

* * *

### **Gestão Visual de Faturas de Convênio: Nova Coluna de Situação por Cores**

#### Data de liberação: 13 de janeiro de 2026

📢 Identifique a situação financeira dos seus convênios num piscar de olhos! Implementamos na tela de **Faturas de Convênio** um sistema de **Gestão Visual** que utiliza cores para indicar o status de pagamento de cada título.

Essa melhoria foi pensada para o setor de cobrança e financeiro, eliminando a necessidade de conferir valores um a um para saber o que está pendente ou liquidado, agilizando drasticamente a rotina de conferência do seu Contas a Receber.

🛠 **O que foi implementado:**

✅ **Nova Coluna de Situação:** Inclusão do campo "Situação" diretamente na grade principal de consulta de faturas.

✅ **Indicadores de Status por Cores:** O sistema agora classifica as faturas automaticamente em três estados visuais:

🔴 **Pendente (Vermelho):** Faturas que não possuem nenhum registro de pagamento.

🟡 **Quitada Parcial (Amarelo):** Títulos que já receberam algum pagamento, mas ainda apresentam saldo em aberto.

🟢 **Quitada (Verde):** Faturas totalmente pagas e com processo financeiro encerrado.

✅ **Atualização em Tempo Real:** Assim que uma baixa (total ou parcial) é realizada, a cor do status é atualizada instantaneamente na listagem.

🚀 **Principais Benefícios:**

✔ **Gestão à Vista:** Permite que o setor de cobrança priorize faturas em atraso (vermelhas) ou saldos residuais (amarelas) de forma imediata.

✔ **Agilidade Operacional:** Reduz o tempo gasto na análise manual de saldos e valores para identificar o que já foi recebido.

✔ **Prevenção de Erros:** Facilita a visualização de faturas que foram quitadas parcialmente, evitando que saldos pequenos passem despercebidos.

✔ **Painel Estratégico:** Transforma a tela de faturas em um "semáforo financeiro", proporcionando uma visão muito mais clara da saúde dos seus recebíveis de convênio.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Faturas de Convênio** localizado no submenu **CONVÊNIOS**.

No painel de consulta, observe a nova coluna **Situação** localizada na listagem de resultados.

Utilize a sinalização visual para focar sua análise:

Procure pelos itens em **vermelho** para iniciar suas rotinas de cobrança.

Fique atento aos itens em **amarelo** para verificar se o cliente possui uma data programada para o pagamento do saldo restante.

Gere seus relatórios ou realize as baixas normalmente; o sistema cuidará da atualização das cores de forma automática.

* * *

### **Novo Controle de Boletos Multiempresa**

#### Data de liberação: 13 de janeiro de 2026

📢 Gerencie os boletos de todo o seu grupo econômico em um só lugar! Reformulamos completamente a tela de **Controle de Boletos** para oferecer uma experiência **Multiempresa** real. Agora, você não precisa mais trocar de login ou filial para visualizar e processar as cobranças das suas outras unidades.

Essa atualização foi desenvolvida para centralizar a operação financeira, trazendo filtros inteligentes que garantem que cada boleto, fatura e arquivo de retorno seja processado na empresa correta, com total segurança e agilidade.

🛠 **O que foi implementado:**

✅ **Gestão Centralizada:** Nova tela que permite selecionar uma ou várias empresas simultaneamente para visualização consolidada.

✅ **Filtros em Cascata Inteligentes:** Ao selecionar uma empresa, o sistema atualiza automaticamente os campos de faturas e contas bancárias, exibindo apenas o que pertence àquela unidade.

✅ **Retorno Bancário Otimizado:** Inclusão do seletor de empresa na rotina de **"Importar Arquivo de Retorno"**, garantindo que a baixa ocorra exatamente na conta vinculada à filial.

✅ **Hierarquia de Permissões:** O sistema respeita rigorosamente o perfil do usuário, exibindo apenas os dados das filiais que ele tem autorização para acessar.

🚀 **Principais Benefícios:**

✔ **Agilidade Operacional:** Elimina a necessidade de múltiplos logins, permitindo gerenciar o financeiro de várias unidades em uma única sessão.

✔ **Segurança e Integridade:** Os filtros dinâmicos impedem que uma fatura de uma empresa seja baixada por engano em uma conta bancária de outra filial.

✔ **Produtividade na Conciliação:** Centraliza o processamento de arquivos de retorno, reduzindo drasticamente o tempo gasto na conferência diária de boletos de todo o grupo.

✔ **Visão Gerencial Consolidada:** Facilita o acompanhamento do fluxo de recebimentos globais, oferecendo uma visão clara do que está pendente ou liquidado por empresa.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Controle de Boletos** localizado no submenu **EMISSÃO**.

No topo da tela, utilize o novo filtro **Empresa** para selecionar as unidades que deseja gerenciar (você pode selecionar uma, várias ou todas).

Ao escolher uma empresa, o filtro de **Fatura** será ajustado automaticamente para mostrar apenas os dados válidos.

Para processar pagamentos, utilize a rotina de **Importar Arquivo de Retorno**, certificando-se de que a empresa selecionada corresponde ao arquivo que está sendo processado.

Acompanhe o status de liquidação de forma consolidada na grade principal.

* * *

### **Nova Gestão e Faturamento de Cartões: Mais Agilidade e Flexibilidade**

#### Data de liberação: 12 de janeiro de 2026

📢 Otimizamos o seu faturamento de cartões para tornar o fechamento financeiro muito mais rápido e inteligente! Implementamos um pacote de melhorias no AppPosto que elimina o retrabalho, facilita a localização de vendas e dá total controle sobre o destino do seu dinheiro no fluxo de caixa.

Essas atualizações foram pensadas para o gestor que precisa de agilidade na conferência e precisão no momento de direcionar os créditos para as contas bancárias.

🛠 **O que foi implementado:**

✅ **Busca Instantânea por Valor:** Adicionado o filtro de pesquisa por valor na Baixa de Cartões, permitindo localizar transações específicas em segundos.

✅ **Seleção Dinâmica de Conta Aplicação:** Agora, ao finalizar a baixa, o sistema respeita a **Conta Aplicação** selecionada na tela de conclusão, direcionando o lançamento corretamente para o Livro Caixa.

✅ **Atalho Direto para Ajustes:** Incluído um link na grade de conciliação que leva você direto para a **Prestação de Contas** do funcionário. Se a administradora foi lançada errada no caixa, você corrige com um clique e volta para concluir a conciliação.

✅ **Visualização Fluida (Scroll Infinito):** Substituímos a paginação (que limitava a 10 itens) por uma barra de rolagem contínua nas telas de cartões da Prestação de Contas e Caixa de Gerência.

🚀 **Principais Benefícios:**

✔ **Agilidade Operacional:** Reduz drasticamente o tempo de conferência e o número de cliques necessários para ajustar e faturar os cartões do dia.

✔ **Flexibilidade Financeira:** Permite escolher a conta de destino do crédito no momento da baixa, sem precisar alterar configurações fixas nos cadastros.

✔ **Confiabilidade no Fluxo de Caixa:** Garante que o histórico do Livro Caixa esteja sempre correto, eliminando a necessidade de transferências manuais para corrigir erros de conta.

✔ **Localização Simplificada:** A visualização em lista única (scroll) e o filtro por valor facilitam a vida de postos com alto volume de vendas diárias.

💡 **Como utilizar:**

**Para Faturar:** Acesse o módulo de **Baixa de Cartões**. Utilize o novo campo de busca para filtrar pelo valor exato da transação que deseja localizar.

**Ao Concluir a Baixa:** Na tela de fechamento, selecione a **Conta Aplicação** desejada. O sistema garantirá que o crédito seja registrado exatamente naquela conta no Livro Caixa.

**Para Corrigir Lançamentos:** Na tela de conciliação, se notar uma administradora incorreta, clique no novo ícone de **Atalho (****)**. Você será levado à Prestação de Contas; faça o ajuste, salve e a tela de conciliação será atualizada automaticamente.

**Conferência Geral:** Nas telas de cartões da Prestação de Contas, utilize a nova barra de rolagem para navegar por todos os itens de uma só vez, sem precisar trocar de página.

* * *

### **Segurança Avançada: Auditoria e Permissões na Mudança de Preço em Massa**

#### Data de liberação: 07 de janeiro de 2026

📢 Reforçamos a segurança das suas operações financeiras! Implementamos um sistema de **Auditoria Completa** e **Controle de Acesso** rigoroso para a rotina de **Mudança de Preço em Massa**. Agora, você tem o controle total sobre quem pode realizar alterações globais de preços e consegue rastrear cada modificação feita.

Essa atualização foi desenvolvida para proteger a margem de lucro do seu negócio, evitando que usuários não autorizados realizem alterações e garantindo que qualquer erro ou fraude possa ser identificado em segundos.

🛠 **O que foi implementado:**

✅ **Registro de Auditoria (Logs):** O sistema agora grava detalhadamente cada alteração em massa, registrando: **quem alterou, quando alterou, o preço antigo e o novo preço** de cada produto.

✅ **Permissão de Acesso Específica:** Criada a nova regra no Perfil de Acesso: **"Mudança de Preço em Massa"**.

✅ **Rastreabilidade de Filtros:** Além dos valores, a auditoria armazena quais filtros foram utilizados para aquela alteração, permitindo entender o contexto da operação.

✅ **Validação de Perfil:** Travas de segurança que impedem perfis operacionais de realizar funções estratégicas de precificação.

🚀 **Principais Benefícios:**

✔ **Transparência Absoluta:** Tenha um histórico completo de todas as variações de preço do seu estoque, facilitando auditorias internas e conferências fiscais.

✔ **Segurança Contra Fraudes:** Reduz drasticamente o risco de alterações de preço indevidas que possam comprometer a receita do posto.

✔ **Prevenção de Erros:** Com o controle de acesso, apenas pessoas capacitadas e de confiança (Gerentes/Administradores) poderão realizar mudanças globais, evitando prejuízos acidentais.

✔ **Gestão Profissional:** Organiza a hierarquia de trabalho no sistema, garantindo que cada colaborador realize apenas o que é pertinente à sua função.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione o relatório de **Perfis de Acesso** localizado no submenu **CONTROLE DE ACESSO**.

Localize o perfil dos usuários que devem ter este acesso (ex: Gerentes) e habilite a nova permissão **"Mudança de Preço em Massa"**.

Para os usuários autorizados, a rotina continuará disponível no módulo de Cadastro de Produtos.

Caso precise conferir alguma alteração, acesse o **Relatório de Auditoria** para verificar o histórico detalhado das mudanças realizadas por usuário ou período.

* * *

### **Novo Relatório Fiscal de Vendas por Produtos**

#### Data de liberação: 31 de dezembro

📢 Mais precisão e controle fiscal na palma da sua mão! Implementamos no AppPosto o relatório fiscal de **Vendas por Produtos**, trazendo o modelo robusto e as diversas visões de conferência que você já conhece do sistema Desktop.

Essa nova funcionalidade foi desenhada para facilitar auditorias fiscais, conferência de estoque e análise de vendas, permitindo que você visualize seus dados por diferentes ângulos com total flexibilidade.

🛠 **O que foi implementado:**

✅ **Três Modos de Apresentação:** Agora você pode extrair o relatório em três visões distintas:

**Por Data:** Para acompanhamento diário das movimentações.

**Por Produto:** Para análise de giro e performance de itens específicos.

**Por Período:** Para uma visão consolidada e estratégica de longo prazo.

✅ **Filtros de Auditoria Avançados:** Segmentação completa por PDV, Caixa, Situação de ECF (Vendas Realizadas ou Canceladas), além de filtros por Cliente, Vendedor, Grupos/Subgrupos e Bicos.

🚀 **Principais Benefícios:**

✔ **Conformidade Fiscal e Auditoria:** Ferramenta essencial para conferência de impostos e volumes vendidos, permitindo cruzar dados por bico ou categoria de produto.

✔ **Gestão de Estoque Refinada:** Facilita a identificação de quais produtos estão performando melhor e em quais períodos, auxiliando no planejamento de compras.

✔ **Padronização Operacional:** Mantém a mesma estrutura de dados do sistema Desktop, eliminando a curva de aprendizado para quem já utilizava nossa outra plataforma.

✔ **Flexibilidade de Análise:** Com múltiplos critérios de filtragem, você consegue responder rapidamente a dúvidas sobre vendas de turnos, vendedores ou PDVs específicos.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Produtos** localizado no submenu **FISCAL**.

Escolha a **Apresentação** desejada (Por Data, Por Produto ou Por Período).

Utilize os filtros laterais para refinar sua busca (ex: filtrar por um grupo de produtos ou por um bico específico).

Gere o relatório para visualizar os totais e detalhes fiscais das vendas do período selecionado.

* * *

### **Nova Central de Documentação e Base de Conhecimento**

#### Data de liberação: 31 de dezembro

📢 Ficou muito mais fácil tirar suas dúvidas e aprender sobre as funcionalidades do sistema! Implementamos o novo menu **Central de Documentação**, que conecta você diretamente à nossa base de conhecimento oficial.

Sabemos que a agilidade no dia a dia é fundamental, por isso, agora você tem acesso imediato a manuais, tutoriais e guias de treinamento sem precisar sair do ambiente de trabalho ou buscar links externos.

🛠 **O que foi implementado:**

✅ **Menu de Ajuda Direto:** Criado o acesso rápido "Base de Conhecimento" integrado à barra de ferramentas principal do sistema.

✅ **Atalho Estratégico para o Confluence:** Implementado um link inteligente que redireciona você para a página inicial da nossa documentação oficial em uma nova aba do navegador.

🚀 **Principais Benefícios:**

✔ **Maior Autonomia:** Encontre soluções, passo a passo e vídeos explicativos de forma independente, ganhando velocidade na resolução de dúvidas simples.

✔ **Agilidade no Suporte:** Com o acesso fácil aos manuais, você economiza tempo que seria gasto em filas de espera para dúvidas operacionais que já possuem documentação detalhada.

✔ **Treinamento Otimizado:** Facilita drasticamente o aprendizado de novos colaboradores do posto, servindo como uma ferramenta de consulta rápida para o _onboarding_ da equipe.

💡 **Como utilizar:**

No menu principal do sistema, localize a opção **Base de Conhecimento**.

Ao clicar sobre o mesmo, você será direcionado ao nosso portal oficial.

Utilize a barra de pesquisa do portal para digitar o nome da rotina ou a dúvida que você possui (ex: "Fatura de Antecipação" ou "Prestação de Contas").

Consulte o manual detalhado e aplique as orientações diretamente no seu sistema.

* * *

### **Integração BR Mania (VEM): Resgate e Pontuação Premmia Loja**

#### Data de liberação: 29 de dezembro

📢 Potencialize suas vendas e fidelize seus clientes com o Premmia! Implementamos a estrutura necessária para a integração completa com o programa **Premmia Loja**, permitindo que sua conveniência BR Mania realize pagamentos e resgates de produtos de forma integrada ao sistema.

Essa atualização prepara tecnicamente o seu estabelecimento para operar com as APIs da Vibra/Premmia, garantindo que cada venda na loja possa gerar pontos ou ser finalizada através de benefícios do programa.

🛠 **O que foi implementado:**

✅ **Configurações de API:** Adicionados campos nos Parâmetros do Sistema para configuração das URLs de integração com as APIs Premmia e Vibra, assegurando uma comunicação estável e segura.

✅ **Mapeamento no Cadastro de Produtos:** Implementado o novo campo **"Código do Produto Premmia"** dentro do cadastro de mercadorias, permitindo identificar quais itens são elegíveis para pontuação e resgate.

✅ **Nova Modalidade de Carteira:** Criada a opção de pagamento **"Premmia Loja"** no Cadastro de Administradoras, essencial para a baixa financeira correta de vendas realizadas via resgate de pontos.

🚀 **Principais Benefícios:**

✔ **Fidelização Aumentada:** Permite que o cliente utilize seus pontos Premmia diretamente na sua loja, incentivando o retorno e o aumento do ticket médio.

✔ **Automação e Agilidade:** Com o mapeamento de produtos, o processo de reconhecimento de promoções e resgates torna-se automático, reduzindo erros manuais do operador.

✔ **Conformidade com a Franqueadora:** Garante que o posto esteja tecnicamente alinhado às exigências e campanhas nacionais da BR Mania.

✔ **Conciliação Financeira Precisa:** Com a carteira específica "Premmia Loja", o financeiro consegue identificar e auditar separadamente as vendas originadas por benefícios do programa.

💡 **Como utilizar:**

Acesse o menu de **Opções** no sistema.

Selecione o módulo **Sistema** localizado no submenu **PARÂMETROS**.

Realize o preenchimento das URLs de integração fornecidas pela franqueadora e uma carga parcial.

Acesse o menu de **Cadastro** no sistema.

Selecione o módulo **Administradoras** localizado no submenu **FINANCEIRO**.

Cadastre a administradora "Premmia Loja" associando-a ao tipo de carteira correspondente.

Acesse o menu de **Cadastro** no sistema.

Selecione o módulo **Produtos** localizado no submenu **PRODUTOS**.

Realize o cadastro dos itens da loja que participam do programa. O campo **"Código do Produto Premmia"** será preenchido autoticamente.

Após as configurações, o sistema estará apto a enviar as informações de venda para pontuação ou processar o resgate de vouchers diretamente no PDV.

No PDV:

1.  Acesse a tela **Produtos/Benefícios Premmia**:
    
    1.  Atalho **CTRL + B**; ou
        
    2.  Pela listagem de produtos (F4) e botão **Premmia Benefícios/Produtos**.
        
2.  Clique em **Produtos** para consultar as promoções disponíveis.
    
3.  Selecione a promoção desejada e clique em **Resgatar**.
    
4.  Prossiga para a finalização da venda.
    
5.  Clique em **Id. Cliente** para informar o CPF do cliente.
    
6.  Informe obrigatoriamente a forma de pagamento **Carteira Digital** com a administradora **Premmia Loja** e clique em **Gerar Cobrança**.
    
7.  O PDV exibirá um **QR Code**.
    
8.  O cliente realiza o pagamento pelo App Premmia (opção **Pagar**).
    
9.  Após a confirmação automática da API, o cupom fiscal será impresso e a venda finalizada.
    

* * *

### **Nova Listagem das Contas do Caixa no AppPosto**

#### Data de liberação: 26 de dezembro

📢 Mais transparência e organização para o seu financeiro! Agora, o AppPosto conta com o relatório de **Listagem das Contas do Caixa**, uma funcionalidade que replica a estrutura detalhada do sistema Desktop. Com essa atualização, você tem total visibilidade do seu Plano de Contas de forma organizada e estruturada.

🛠 **O que foi implementado:**

✅ **Nova Rotina de Relatório:** Adicionado a opção em **Relatórios > Listagens > Contas do Caixa**, seguindo a hierarquia e os níveis de visualização do sistema Desktop.

✅ **Filtros de Pesquisa Avançados:** Possibilidade de segmentar a consulta por:

**Empresa:** Para gestão de múltiplas unidades.

**Grupo (Nível 2):** Facilitando a localização por agrupamentos específicos.

**Tipo de Conta:** Filtro rápido para separar contas Patrimoniais, Banco, Despesas e Receitas.

**Situação:** Opção de visualizar contas Ativas, Inativas ou a listagem completa.

✅ **Visualização Otimizada:** O relatório agora oculta automaticamente contas sintéticas que não possuem movimentação analítica, garantindo um documento limpo e focado no que realmente importa.

🚀 **Principais Benefícios:**

✔ **Visibilidade do Plano de Contas:** Oferece uma visão panorâmica e organizada de como a estrutura financeira da sua empresa está montada.

✔ **Gestão de Cadastro:** Facilita a identificação de contas inativas que ainda constam no Plano de Contas, auxiliando na higienização dos dados financeiros.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Contas do Caixa** localizado no submenu **LISTAGENS**.

Utilize os filtros para refinar sua busca (por exemplo, selecione o Tipo de Conta "BANCO" para ver apenas as contas bancárias).

Escolha se deseja visualizar apenas as contas **Ativas** para uma conferência operacional.

Gere o relatório para visualizar a hierarquia completa e os detalhes de cada conta cadastrada.

* * *

### **Evolução do Relatório de Vendas por Frentista: Agora com Mix de Aditivados**

#### Data de liberação: 26 de dezembro

📢 Otimize a gestão da sua equipe de pista com dados mais profundos! Agora, o relatório de **Vendas por Frentista** no AppPosto conta com a coluna de **Mix Gasolina (%)**, igualando-se às funcionalidades avançadas da versão Desktop.

Essa melhoria permite que você acompanhe de perto a performance de vendas de combustíveis aditivados, transformando o relatório em uma ferramenta essencial para o acompanhamento de metas e produtividade.

🛠 **O que foi implementado:**

✅ **Nova Apresentação Analítica:** Implementado o modelo de exibição "Por Frentista", trazendo uma interface mais robusta e detalhada.

✅ **Indicador de Mix Gasolina (%):** Adicionada a coluna que calcula automaticamente a proporção de vendas de gasolina aditivada sobre o volume total.

✅ **Métricas de Produtividade:** Inclusão de novos indicadores essenciais, como:

**Volume Total** de vendas por frentista.

**Quantidade de Abastecimentos** realizados.

**Volume Médio** por atendimento.

**Índice de Tanque Cheio**, para medir a eficácia na oferta de bico.

🚀 **Principais Benefícios:**

✔ **Gestão Estratégica por Metas:** Permite o acompanhamento preciso do **Mix (%)**, facilitando a criação de campanhas de incentivo para a venda de produtos de maior margem (aditivados).

✔ **Análise de Eficiência:** Oferece uma visão clara da produtividade de cada frentista, identificando quem possui melhor ticket médio e conversão de vendas.

✔ **Tomada de Decisão Baseada em Dados:** Facilita feedbacks e treinamentos para a equipe de pista com base em números reais de desempenho.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Frentista** localizado no submenu **VENDAS**.

No tipo de **Apresentação**, certifique-se de selecionar a opção **"Por Frentista"**.

Defina o período que deseja analisar e clique em gerar.

Analise a coluna **Mix Gasolina (%)** para verificar o desempenho individual na venda de aditivados e utilize as métricas de **Volume Médio** para medir a proatividade da equipe.

* * *

### **Nova Gestão e Conciliação de Transações PIX**

#### Data de liberação: 23 de dezembro

📢 Trouxemos mais segurança e agilidade para o seu controle de pagamentos via PIX! Implementamos um conjunto de melhorias e correções que integram perfeitamente os módulos de **Movimento** e **Financeiro**, garantindo que a sua conferência de caixa seja à prova de falhas.

Agora, o fluxo de conciliação do PIX conta com a mesma robustez e inteligência do módulo de cartões, oferecendo total controle sobre o que já foi auditado e o que ainda precisa de atenção.

🛠 **O que foi implementado:**

✅ **Indicadores Visuais de Conciliação:** Incluídos marcadores no módulo PIX (Movimento) para identificação instantânea de transações já conciliadas.

✅ **Função "Desfazer Conciliação":** Criada a possibilidade de reverter conciliações para o status "Não Efetuada", permitindo correções rápidas com total integridade.

✅ **Filtros e Colunas Estratégicas:** A tela de recebimentos agora conta com filtros por **Autorização, Status de Conciliação, Número da Fatura** e **Documento Fiscal**.

✅ **Travas de Segurança:** Implementadas validações que impedem a edição ou exclusão de registros PIX que já foram conciliados no financeiro.

✅ **Sincronização Automática:** Qualquer ajuste permitido no movimento agora reflete imediatamente no financeiro, atualizando status e porcentagens de conciliação.

🚀 **Principais Benefícios:**

✔ **Rastreabilidade Total:** Identifique rapidamente o status de cada transação, agilizando a auditoria e o fechamento de caixa.

✔ **Integridade e Segurança:** Elimina o risco de divergências financeiras e alterações acidentais em dados que já foram conferidos pela gerência.

✔ **Autonomia na Gestão:** Com a opção de desfazer conciliações, o usuário ganha flexibilidade para corrigir erros sem depender de suporte técnico.

✔ **Confiabilidade no Fechamento:** Garante que o que foi operado no caixa esteja em perfeita sincronia com o que o financeiro processou.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione o módulo de **Cartões** localizado no submenu **CAIXAS DE VENDA** ou **CAIXAS DA GERÊNCIA**.

Utilize os novos filtros (Fatura, Autorização ou Status) para localizar as transações que deseja auditar.

Caso identifique um erro em uma conciliação já feita, utilize o novo botão .

Note que o sistema agora apresentará travas de segurança caso você tente excluir uma venda que já esteja baixada e conciliada.

* * *

### **Nova Opção de Visualização: Relatório de Vales por Faturas e Avulsos**

#### Data de liberação: 17 de dezembro

📢 Facilitamos a conferência do seu faturamento de convênios! Agora, o relatório de **Vales por Faturas e Avulsos** conta com uma nova opção de filtro que permite focar exclusivamente no que interessa para o financeiro: o **Valor de Contrato**.

Essa melhoria foi desenvolvida para evitar confusões entre o valor de face (preço de bomba) e o valor efetivamente faturado, tornando a sua análise gerencial muito mais limpa e objetiva.

🛠 **O que foi implementado:**

✅ **Novo Filtro Estratégico:** Adicionada a opção "Somente Valor de Contrato" nos parâmetros de geração do relatório.

✅ **Interface Inteligente:** Ao ativar o filtro, a coluna "Valor de Face" é ocultada automaticamente, eliminando a poluição visual e o excesso de informações.

✅ **Precisão nos Totais:** O sistema ajusta a exibição para que os cálculos de faturamento reflitam apenas o valor acordado com o convênio, garantindo uma conferência rápida.

✅ **Manutenção da Integridade:** Todas as demais informações cruciais do relatório permanecem inalteradas, mudando apenas a exibição dos valores financeiros.

🚀 **Principais Benefícios:**

✔ **Clareza Gerencial:** Proporciona relatórios mais limpos e focados no resultado real, facilitando a vida do gestor financeiro.

✔ **Eficiência na Análise:** Elimina dúvidas e erros de interpretação entre valores de face e de contrato, acelerando o processo de conferência com os clientes faturados.

✔ **Flexibilidade de Visualização:** Oferece ao usuário o poder de escolha entre uma visão completa (Face + Contrato) ou uma visão simplificada para faturamento.

✔ **Consistência de Dados:** Facilita a extração de dados consistentes para conciliação bancária e fechamento de faturas.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vales por Faturas e Avulsos** localizado no submenu **COBRANÇA**.

No quadro de filtros, defina a opção **"Somente Valor de Contrato"** como **Sim**

Defina o período e o convênio desejado para análise.

Gere o relatório e visualize a listagem focada exclusivamente nos valores de contrato para o seu faturamento.

* * *

### **Filtro por Vendedor e Operador nos Relatórios de Venda e Rentabilidade**

#### Data de liberação: 17 de dezembro

📢 A gestão de desempenho da sua equipe agora está completa! Implementamos os novos filtros de **Vendedor** e **Operador** no relatório de **Vendas e Rentabilidade**. Com essa atualização, você deixa de ter apenas uma visão global e passa a enxergar exatamente o resultado individual de cada colaborador.

Essa funcionalidade foi desenhada para que gestores identifiquem quem são os destaques em vendas e, principalmente, quem está trazendo a melhor margem de lucro para o negócio.

🛠 **O que foi implementado:**

✅ **Novos Filtros de Seleção:** Adicionados os filtros de "Vendedor" e "Operador" nos parâmetros de geração do relatório.

✅ **Análise Individual ou Coletiva:** Liberdade para filtrar apenas um funcionário específico ou extrair a listagem completa de toda a equipe.

✅ **Consistência de Dados:** O sistema garante que os totais vendidos por cada operador coincidam perfeitamente com os valores apresentados na **Prestação de Contas**.

✅ **Detalhamento de Margens:** Agora a rentabilidade é quebrada por responsável, permitindo ver o lucro gerado por cada pessoa da equipe.

🚀 **Principais Benefícios:**

✔ **Gestão Estratégica de Equipe:** Identifique com clareza o volume de vendas e a rentabilidade real gerada por cada colaborador, permitindo treinamentos e feedbacks mais assertivos.

✔ **Confiabilidade Total:** Dados 100% auditáveis que eliminam dúvidas entre o que foi registrado no caixa e o que aparece nos relatórios gerenciais.

✔ **Agilidade no Comissionamento:** Facilita drasticamente o cálculo de comissões e premiações baseadas em produtividade e lucro.

✔ **Visão de Lucratividade:** Ajuda a entender se o vendedor está vendendo produtos com boas margens ou apenas focando em itens de baixo retorno.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas e Rentabilidade** localizado no submenu **VENDAS**.

Na parte inferior do quadro de filtros, localize os campos **Vendedor** e **Operador**.

Escolha o funcionário desejado para uma análise específica ou deixe os campos em branco para visualizar a equipe completa.

Defina o período e gere o relatório para analisar as margens e totais de cada responsável.

* * *

### **Notificações Automáticas de Status de Boletos (PlugBoleto)**

#### Data de liberação: 17 de dezembro

📢 Mantenha o controle total das suas receitas sem precisar consultar o banco a todo momento! Integramos a nossa **Central de Notificações** ao serviço **PlugBoleto**. Agora, o sistema avisa você automaticamente sobre cada etapa importante da vida do seu boleto, desde o registro até o pagamento ou eventual atraso.

Essa melhoria foi desenvolvida para eliminar o monitoramento manual, garantindo que o seu setor financeiro tenha informações em tempo real para uma gestão de caixa muito mais eficiente.

🛠 **O que foi implementado:**

✅ **Integração com a Central de Notificações:** O sistema agora dispara alertas visuais diretamente na dashboard principal.

✅ **Monitoramento de 3 Status Críticos:**

**Emissão/Registro:** Confirmação imediata de que o boleto foi processado e já está registrado no banco.

**Liquidação:** Aviso instantâneo assim que o cliente efetua o pagamento e o título é baixado.

**Atraso:** Alerta automático para títulos que ultrapassaram a data de vencimento.

✅ **Sincronização Inteligente:** Lógica de comunicação contínua com a instituição financeira para garantir que o status exibido no sistema seja o mesmo do banco.

🚀 **Principais Benefícios:**

✔ **Monitoramento em Tempo Real:** Tenha visibilidade imediata das entradas financeiras sem a necessidade de acessar o módulo de contas a receber ou gerar relatórios constantemente.

✔ **Gestão de Cobrança Ágil:** Identifique boletos inadimplentes no momento em que vencem, permitindo ações de cobrança muito mais rápidas e eficazes.

✔ **Segurança e Controle:** Garante a certeza de que todos os títulos emitidos foram devidamente registrados, evitando surpresas com boletos rejeitados pelo banco.

✔ **Redução de Erros Operacionais:** Automatiza a verificação de baixas, diminuindo a carga de trabalho manual e o risco de falhas humanas na conferência.

💡 **Como utilizar:**

Ao logar no sistema, fique atento ao ícone da **Central de Notificações** (sino).

Sempre que um boleto mudar de status, um alerta aparecerá indicando o cliente e o tipo da ocorrência (Registro, Liquidação ou Atraso).

Clique na notificação para ser direcionado diretamente aos detalhes do título.

Caso deseje ajustar as configurações de alertas de atraso, entre em contato com nosso suporte para definir os parâmetros de tolerância.

* * *

### **Novo Cálculo Automático de Preço com Base no Markup**

#### Data de liberação: 15 de dezembro

📢 Mantenha suas margens de lucro sempre protegidas de forma automática! Implementamos a **Sugestão de Preço com Base no Markup**, uma funcionalidade inteligente que calcula o preço de venda ideal assim que o custo de um produto é alterado.

Diga adeus às calculadoras externas! Agora, o sistema utiliza o Markup configurado nos seus Grupos e Subgrupos de Produtos para garantir que sua rentabilidade seja preservada em cada nova compra.

🛠 **O que foi implementado:**

✅ Sugestão em Tempo Real nas Compras: Na rotina de Compra de Diversos, o sistema agora sugere automaticamente o novo preço de venda sempre que detectar uma alteração no custo do produto.

✅ Coluna **"Preço Sugerido"**: Adicionamos uma coluna específica na tela de Alteração de Preços, permitindo visualizar instantaneamente qual seria o valor ideal com base na sua margem cadastrada.

✅ Integração com Grupos/Subgrupos: O sistema agora prioriza o Markup definido nas configurações de categoria, padronizando a precificação em todas as telas.

✅ Cálculo Matemático Preciso: Implementada a regra de cálculo automática: Preço Sugerido = Custo + (Custo x Markup %). O usuário mantém o controle final, podendo aceitar a sugestão ou editá-la conforme a estratégia comercial.

🚀 **Principais Benefícios:**

✔ **Proteção da Margem de Lucro:** Assegura que o Markup definido seja preservado automaticamente, mesmo com as constantes oscilações de custo dos fornecedores.

✔ **Agilidade Operacional:** Elimina a necessidade de cálculos manuais e o uso de ferramentas externas, tornando o processo de entrada de notas muito mais rápido.

✔ **Precisão Financeira Total:** Reduz drasticamente o risco de erros humanos na digitação e no cálculo de preços, evitando prejuízos por precificação incorreta.

✔ **Gestão Simplificada:** Facilita a vida do comprador e do gestor financeiro, que passam a ter uma referência clara do preço de venda ideal no momento da negociação.

💡 **Como utilizar:**

**Configuração:** Certifique-se de que o **Markup (%)** esteja preenchido no cadastro de seus **Grupos > Subgrupos** de produtos.

**Na Entrada de Notas:** Ao realizar uma **Compra de Diversos**, caso o custo do item seja alterado, o sistema exibirá automaticamente a sugestão do novo preço de venda na coluna correspondente.

**Na Alteração de Preços:**

\* Acesse o menu de **Cadastro** no sistema, selecione a opção de **Produtos** e clique no botão **Mudança** **de Preços**.

Observe a nova coluna **"Preço Sugerido"**, que mostrará o valor calculado com base no custo atual e no Markup.

Você pode simplesmente aplicar o valor sugerido ou ajustá-lo manualmente antes de salvar.

* * *

### **Filtros de Horário e PDVs no Relatório de Relação de Abastecimento**

#### Data de liberação: 15 de dezembro

📢 Otimizamos o relatório de **Relação de Abastecimento** para oferecer uma gestão muito mais precisa da sua pista! Agora, você pode realizar análises detalhadas por **turnos ou horários específicos** e conta com uma listagem de PDVs muito mais limpa e focada no que realmente importa: o setor de combustíveis.

Essa atualização elimina a poluição visual de terminais irrelevantes e garante total **precisão na auditoria** das bombas por período.

🛠 **O que foi implementado:**

✅ **Filtros de Horário Precisos:** Adicionamos os campos de **"Horário Inicial"** e **"Horário Final"**, permitindo realizar recortes de tempo exatos dentro de um dia ou período selecionado.

✅ **Refino na Listagem de PDVs:** Ajustamos a lógica do sistema para exibir, por padrão, apenas os **PDVs de Pista** no filtro deste relatório.

✅ **Limpeza de Dados Irrelevantes:** Removidas as opções de PDVs de "Loja", "Comanda" e terminais "Inativos" da listagem, focando exclusivamente nos terminais que operam com combustíveis.

🚀 **Principais Benefícios:**

✔ **Gestão Operacional por Turno:** Permite a conferência exata dos abastecimentos por **troca de turno** ou qualquer intervalo personalizado ao longo do dia.

✔ **Usabilidade e Clareza:** Interface mais assertiva, exibindo apenas os terminais que realmente registram movimentação de bombas, evitando erros de seleção.

✔ **Confiabilidade na Auditoria:** Facilita o trabalho do gerente ao eliminar opções de PDVs que não pertencem ao setor de pista, garantindo que o relatório traga apenas dados reais de abastecimento.

✔ **Agilidade na Conferência:** Otimiza o tempo de busca e geração do relatório com filtros mais inteligentes e objetivos.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Relação de Abastecimentos** localizado no submenu **OPERACIONAL**.

Defina a data desejada e utilize os novos campos de **Horário Inicial e Horário Final** para filtrar um turno específico (ex: das 06:00 às 14:00).

No filtro de **PDV**, note que agora aparecerão apenas os terminais de pista ativos. Selecione o terminal desejado ou deixe em branco para todos os de pista.

Gere o relatório e tenha uma visão detalhada e limpa da movimentação do período escolhido.

* * *

### **Nova Função: Desvincular Boleto de Fatura de Convênio**

#### Data de liberação: 15 de dezembro

📢 Agora o sistema oferece muito mais flexibilidade na gestão de suas cobranças! Implementamos a funcionalidade de **desvincular boletos de faturas de convênio**, permitindo que você corrija erros ou altere títulos bancários sem precisar refazer todo o processo de faturamento.

Essa melhoria foi criada para dar mais **autonomia e agilidade** ao seu setor financeiro, eliminando travamentos no fluxo de contas a receber.

🛠 **O que foi implementado:**

✅ **Botão "Desvincular Boleto":** Adicionada uma nova opção diretamente na tela de edição da Fatura de Convênio.

✅ **Lógica de Liberação de Fatura:** Ao desvincular, o sistema libera a fatura automaticamente, tornando-a disponível para a geração de um novo boleto ou para ajustes.

✅ **Compatibilidade Ampliada:** A função foi validada para diversos cenários, incluindo faturas integradas via VAN e processos de quitação.

✅ **Tratamento de Títulos:** O sistema garante que o vínculo anterior seja removido de forma segura, mantendo a integridade dos dados financeiros.

🚀 **Principais Benefícios:**

✔ **Flexibilidade Financeira:** Permite a **correção rápida de boletos** e a reemissão de títulos em casos de alteração de vencimento ou dados, sem a necessidade de excluir e refazer a fatura original.

✔ **Eficiência Operacional:** Torna o fluxo de trabalho do setor de cobrança muito mais ágil, **reduzindo o tempo gasto** com intervenções manuais complexas.

✔ **Autonomia do Usuário:** Facilita a gestão de cobranças de convênio, garantindo que o usuário tenha total controle para manipular as faturas de forma intuitiva.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Faturas de Convênio** localizado no submenu **CONVÊNIO**.

Localize e abra a fatura que possui o boleto que você deseja alterar ou remover.

Na tela de edição da fatura, utilize o novo botão **"Desvincular Boleto"**.

Após a confirmação, o vínculo com o boleto anterior será removido e a fatura ficará **"liberada"**.

Agora, você poderá gerar um novo boleto para esta mesma fatura ou realizar as alterações necessárias.

* * *

### **Nova Visão Resumida: Relatório de Vendas por Operador de Caixa**

#### Data de liberação: 09 de dezembro

📢 A análise de desempenho da sua equipe de caixa ficou muito mais prática! Implementamos uma nova opção de **Apresentação Resumida** no relatório de **Vendas por Operador de Caixa**. Agora, além da visão detalhada por dia, você pode visualizar o faturamento consolidado de cada colaborador em um único bloco, facilitando a gestão do período.

Essa melhoria foi desenhada para transformar dados operacionais em **informações estratégicas** de forma rápida e objetiva.

🛠 **O que foi implementado:**

✅ **Nova Opção de Apresentação:** Adicionada a modalidade "Resumida" nas configurações do relatório.

✅ **Consolidação por Período:** O sistema agora agrupa todas as vendas do operador dentro do intervalo de datas selecionado, eliminando a quebra obrigatória por dia.

✅ **Agrupamento e Totalização:** A nova exibição mantém a riqueza dos dados, mas organiza tudo de forma **totalizada por operador**, apresentando os produtos vendidos, o volume de vendas, faturamento e outros indicadores de forma unificada.

🚀 **Principais Benefícios:**

✔ **Análise Gerencial Simplificada:** Permite que a gerência visualize e compare rapidamente o **desempenho total** de cada operador, identificando quem mais se destaca no período.

✔ **Eficiência na Conferência:** Facilita a auditoria e a tomada de decisões comerciais **sem a necessidade de somar manualmente** os resultados de cada dia.

✔ **Visão Estratégica:** Oferece um relatório muito mais objetivo para reuniões de feedback e acompanhamento de metas da equipe.

✔ **Economia de Tempo:** Reduz o volume de páginas e informações dispersas, focando no que realmente importa para o fechamento de grandes períodos.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Operador de Caixa** localizado no submenu **VENDAS**.

Defina o **período desejado** para a sua análise.

Na **Apresentação**, selecione a nova opção **"Vendas por Operador de Caixa - Resumido"**

Gere o relatório e visualize o desempenho consolidado de cada operador, com os totais já agrupados por nome.

* * *

### **Nova Integração PIX: Recebimento Via BBPay no PDV Móvel**

#### Data de liberação: 06 de novembro

📢 Seu PDV Móvel ficou mais completo! Implementamos a **Integração com o BBPay (PIX do Banco do Brasil)**. Agora, você pode receber pagamentos via PIX de forma **automática, rápida e segura** na pista, expandindo suas opções de recebimento.

Essa melhoria proporciona **novas formas de recebimento** e **eficiência** nas suas transações de PIX.

🛠 **O que foi implementado:**

✅ **Estrutura de Integração BBPAY:** Implementamos a comunicação direta com a API de pagamentos PIX do Banco do Brasil (BBPAY).

✅ **Novos Campos de Configuração:** Criada uma nova seção "BBPay" no cadastro da empresa para armazenar as credenciais necessárias:

\* **Chave PIX**

\* **Chave App BBPay**

\* **Id Cliente BBPay**

\* **Token BBPay**

✅ **Opção BBPAY Adicionada:** A opção "BBPAY" foi adicionada ao Cadastro de Administradoras (Operação) para vincular a nova forma de pagamento.

✅ **Sincronização com PDV Móvel:** As credenciais de integração foram incluídas no processo de sincronização do Sinapse, garantindo que o **PDV Móvel** possa utilizar a integração corretamente.

🚀 **Principais Benefícios:**

✔ **Novas Formas de Recebimento:** Permite ao seu PDV Móvel receber pagamentos via **PIX diretamente através da integração BBPAY**, ampliando as opções para a empresa.

✔ **Eficiência e Agilidade no PIX:** **Automatiza o processo de recebimento PIX**, eliminando passos manuais e tornando a transação mais rápida e segura na pista de abastecimento.

✔ **Segurança e Rastreabilidade:** Transações de PIX integradas garantem maior **rastreabilidade e controle** sobre os recebimentos.

✔ **Flexibilidade de Integração:** O sistema agora suporta mais uma API bancária para pagamentos, oferecendo **maior capacidade de gestão** e diversidade de pagamentos.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione a opção de **Empresa** localizado no submenu **EMPRESA**.

Identifique a empresa que passará a ter a integração, localize a nova seção ‘**BBPay**’ e insira as credenciais (Chave PIX, Chave AppBBPay, Id Cliente BBPay e Token BBPay).

Novamente no menu de **Cadastro**, selecione a opção **Administradoras** localizado no submenu **FINANCEIRO**.

Crie uma administradora indicando:

**Tipo de cartão**: PIX

**Operação**: BBPay

No momento do pagamento da venda no PDV Móvel, o operador deve selecionar a forma de pagamento **PIX**.

O sistema irá gerar automaticamente o **QR Code PIX** utilizando a integração BBPAY para que o cliente realize o pagamento.

A confirmação do pagamento é realizada de forma integrada e automática.

* * *

### **Novo Relatório no AppPosto: Ranking de Vendas por Produto**

#### 📅 Data de liberação: 06 de novembro

📢 Leve a inteligência comercial para onde você estiver! Implementamos o **Relatório de Ranking de Vendas por Produto** no **AppPosto**. Agora, você pode monitorar o desempenho, o lucro e a movimentação do seu estoque com rapidez e flexibilidade.

Essa melhoria é crucial para a **análise estratégica** e a **gestão eficiente do seu inventário** e suas vendas!

🛠 **O que foi implementado:**

✅ **Implementação no AppPosto:** O relatório "Ranking de Vendas por Produto" foi adicionado ao AppPosto, replicando a lógica de cálculos e a estrutura da versão Desktop (ACS Gerente).

✅ **Dois Layouts de Consulta Flexíveis:** Disponibilizamos dois modos de visualização para atender a diferentes necessidades de análise:

1\. **Leiaute 1 (Com Vendas):** Focado em desempenho, exibe dados como **Faturamento e Lucro**, com percentuais (% Faturamento e % Lucro).

2\. **Leiaute 2 (Sem Vendas):** Focado em estoque, exibe o inventário de produtos **sem movimentação** no período, mostrando informações como **Data da Última Venda, Saldo e Custo**.

✅ **Filtros Avançados:** Adicionamos filtros para segmentar sua análise:

\* Classificar por: **Faturamento, Quantidade ou Lucro**.

\* Opções de visualização: **Mais Vendidos**, **Menos Vendidos** (baseado no % de faturamento) e **Sem Movimento**.

🚀 **Principais Benefícios:**

✔ **Visibilidade de Desempenho Estratégico:** Permite a **análise imediata** do ranking de vendas e lucro dos produtos mais importantes (Leiaute 1).

✔ **Gestão de Estoque Parado Otimizada:** Facilita a **identificação rápida** de produtos que estão sem movimentação, otimizando a tomada de decisão para promoções ou descontinuação (Leiaute 2).

✔ **Controle Remoto:** Tenha em mãos dados cruciais para a **gestão comercial** e de **compras**, de forma simples e acessível.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Ranking de Vendas por Produto** localizado no submenu **VENDAS**.

Para analisar os produtos mais vendidos e lucrativos:

No filtro **Mostrar Produtos Por**, selecione qualquer uma das opções, exceto **Sem Movimento**.

No filtro **Classificar Por**, selecione um dos indicadores (Faturamento, Quantidade ou Lucro).

Para identificar estoque parado:

No filtro **Mostrar Produtos Por**, selecione a opção **Sem Movimento**.

Defina o período de análise e clique em **Visulizar** para ver o desempenho da sua loja.

* * *

### **Melhoria no AppPosto: Filtro por Combustível no Relatório de Abastecimentos**

#### 📅 Data de liberação: 22 de outubro

📢 Simplificamos a sua conferência de pista! O **Relatório de Relação de Abastecimentos** no AppPosto agora conta com um **filtro direto por Combustível**. Chega de selecionar bico por bico! Com um toque, você gera o relatório completo para um produto específico (Gasolina Comum, Diesel S-10, etc.), garantindo uma análise mais rápida e precisa.

Essa melhoria proporciona **eficiência na gestão** e **usabilidade aprimorada** para quem gerencia a pista!

🛠 **O que foi implementado:**

✅ **Filtro Direto por Combustível:** Implementamos o novo filtro **Combustível** no Relatório de Relação de Abastecimentos do AppPosto, permitindo gerar o relatório para um produto específico de forma imediata.

✅ **Listagem de Bicos Informativa:** Ajustamos o filtro de bicos para **incluir o nome do Combustível vinculado** em uma nova coluna, facilitando a identificação e seleção manual, se necessário.

✅ **Melhorias de Usabilidade:** Realizamos ajustes de interface, como a implementação de formatação zebrada para melhor visualização dos dados.

🚀 **Principais Benefícios:**

✔ **Eficiência na Análise:** Permite a **geração rápida de relatórios** de abastecimento e aferição **por produto**, sem a necessidade de selecionar bicos individualmente.

✔ **Usabilidade Aprimorada:** O filtro de bicos se torna **claro e informativo**, simplificando a navegação e reduzindo a chance de erros de seleção, especialmente em postos com muitos bicos.

✔ **Gestão Precisa:** Facilita a **conferência e a auditoria de volumes de vendas e aferições** por tipo de combustível.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Relação de Abastecimentos** localizado no submenu **OPERACIONAL**.

No campo de filtros, localize a opção **“Combustível”** e selecione o produto desejado (ex: Gasolina Comum).

O sistema apresentará somente os abastecimentos daquele combustível selecionado.

* * *

### **Relatório de Resgates Aprimorado: Detalhe da Venda para Conciliação Perfeita**

#### 📅 Data de liberação: 20 de outubro

📢 Seu processo de conciliação com parceiros (como o 99 Abastece) ficou muito mais fácil e seguro! Aprimoramos o **Relatório de Resgates** para incluir todos os detalhes cruciais do Cupom Fiscal e da venda, garantindo **precisão financeira** e **agilidade na auditoria** das suas transações.

Agora, todas as informações que você precisa para conferir um resgate estão em um só lugar!

🛠 **O que foi implementado:**

✅ **Aprimoramento do Relatório de Resgates:** O relatório foi expandido para incluir o detalhamento completo da venda em novas colunas.

✅ **Inclusão de Dados da Transação:** Adicionadas as seguintes informações **essenciais do Cupom Fiscal e da venda** a cada registro de resgate:

**Data de Emissão**

**Número do Cupom Fiscal**

**Código do Cupom de Resgate**

**Produto** (o item que foi resgatado/vendido)

**Quantidade**

**Preço** e **Valor da Venda**

**Valor do Desconto** (o valor do resgate)

**Valor Recebido**

**Data e Hora de abastecimento** e **Data e Hora da baixa**

**Frentista** responsável pela transação

🚀 **Principais Benefícios:**

✔ **Conciliação Financeira Precisa:** Permite a **conferência detalhada e exata** das transações de resgate com o parceiro, eliminando divergências e garantindo que você receba o valor correto.

✔ **Auditoria Ágil e Completa:** **Elimina a necessidade de consultas manuais** ou cruzamento de dados entre relatórios, tornando o processo de auditoria de vendas e resgates muito mais **rápido e eficiente**.

✔ **Confiabilidade e Rastreabilidade:** A inclusão dos dados completos do Cupom Fiscal garante a **integridade dos dados** e a **rastreabilidade** de cada transação de resgate até a venda original.

✔ **Suporte a Decisão:** Ajuda a monitorar o impacto e o desempenho dos programas de fidelidade e parcerias.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Relação de Rasgates por Período** localizado no submenu **OPERACIONAL**.

Utilize os filtros para delimitar a busca e gere o relatório.

Utilize as **novas colunas detalhadas** (como Número do Cupom Fiscal, Valor do Desconto e Frentista) para cruzar as informações com os extratos de pagamento do parceiro e realizar a **conciliação completa**.

* * *

### **Relatório de CT-e Emitidos Agora no AppPosto!**

#### 📅 Data de liberação: 20 de outubro

📢 A gestão dos seus documentos fiscais de saída acaba de ganhar um super upgrade! O **Relatório de CT-e Emitidos** (Conhecimento de Transporte Eletrônico) agora está **disponível no AppPosto**, permitindo que você acompanhe, consulte e filtre todos os seus fretes emitidos diretamente pelo celular ou tablet.

Ganhe **agilidade e controle total** sobre sua logística e obrigações fiscais, onde quer que você esteja!

🛠 **O que foi implementado:**

✅ **Relatório Completo no AppPosto:** Implementada a funcionalidade completa do Relatório de CT-e Emitidos, mantendo a **paridade e confiabilidade dos dados** com a versão Desktop.

✅ **Filtros Avançados para Busca:** Disponibilizamos filtros essenciais para consultas precisas, incluindo:

**Empresa**

**Período de Emissão**

Status de **Emitidos** (Todos/Sim/Não)

Status de **Cancelados** (Todos/Sim/Não)

**Remetente** e **Destinatário** (com seleção múltipla e pesquisa)

✅ **Visualização Clara e Totalizadores:** Garantida a exibição correta das colunas cruciais (Emissão, Documento, Remetente, Destinatário, Chave, Valor) e dos **totalizadores** (Total Geral de Valores e Quantidade de Registros).

🚀 **Principais Benefícios:**

✔ **Gestão Fiscal Remota:** Permite a **consulta e gestão online** de todos os seus CT-es emitidos, essencial para a logística, conferência fiscal e **tomada de decisões rápidas** fora do escritório.

✔ **Eficiência Operacional:** Otimiza o fluxo de trabalho ao disponibilizar o relatório no AppPosto, permitindo o **acompanhamento imediato** de documentos fiscais importantes.

✔ **Agilidade na Conferência:** Verifique rapidamente o status de emissão ou cancelamento de qualquer CT-e, **acelerando processos internos** e comunicação com transportadoras.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **CTEs de Saída** localizado no submenu **FISCAL**.

Utilize os **filtros avançados** para refinar sua busca (ex: filtre por um período específico e selecione apenas os CT-es **Não** Cancelados) e gere o relatório.

Visualize a lista dos documentos, as chaves de acesso e use os totalizadores para uma conferência rápida dos valores.

* * *

### **Nova Funcionalidade no AppPosto: Relatório de CT-e de Entrada**

#### 📅 Data de liberação: 20 de outubro

📢 Leve a gestão fiscal dos seus fretes para a palma da mão! Implementamos o **Relatório de CT-e de Entrada** (modelo 57) diretamente no **AppPosto**, replicando a funcionalidade que você já conhece no Desktop. Agora, você pode consultar e acompanhar seus Conhecimentos de Transporte Eletrônico de qualquer lugar, a qualquer momento.

Essa melhoria proporciona **gestão remota** e mais **eficiência operacional** no controle dos seus documentos fiscais de entrada.

🛠 **O que foi implementado:**

✅ **Relatório de CT-e de Entrada no AppPosto:** Implementada a funcionalidade completa do Relatório de CT-e de Entrada (modelo 57).

✅ **Filtros Completos:** Disponibilizamos todos os filtros essenciais para sua consulta, incluindo:

Empresa

Período

Fornecedor

Tipo Frete

Opções de pesquisa por Documento ou Chave de Acesso

✅ **Visualização Detalhada:** Garantida a exibição correta das colunas (Emissão, Documento, Fornecedor, Chave, Valor) e dos totalizadores (Total Geral e Quantidade de Registros).

🚀 **Principais Benefícios:**

✔ **Gestão Fiscal Remota:** Permite a **consulta e gestão online** de todos os seus CT-es de Entrada via AppPosto, usando qualquer dispositivo móvel.

✔ **Eficiência Operacional:** Otimiza o fluxo de conferência de fretes e documentos fiscais de entrada, permitindo **tomar decisões rápidas** mesmo estando fora do escritório.

✔ **Praticidade e Acessibilidade:** Tenha informações fiscais cruciais sempre disponíveis, **acelerando auditorias e conferências** de documentos.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **CTEs de Entrada** localizado no submenu **ESTOQUE**.

Utilize os filtros disponíveis (**Empresa, Período, Fornecedor**, etc.) para delimitar sua pesquisa e gere o relatório.

Visualize a listagem dos CT-es de Entrada e use os totalizadores para uma visão rápida.

* * *

### **Melhoria no Relatório de Vendas e Rentabilidade: Análise 100% Precisa!**

#### 📅 Data de liberação: 14 de outubro

📢 Aprimoramos o **Relatório de Vendas e Rentabilidade** para oferecer uma análise gerencial de **produtos compostos (combos)** muito mais flexível e precisa! Implementamos novos filtros que permitem avaliar tanto a performance de venda do combo quanto o impacto real no seu estoque e custo.

Agora você tem o controle total dos dados para tomar decisões mais assertivas sobre seus produtos.

🛠 **O que foi implementado:**

✅ **Remoção do Filtro:** O filtro "Somente Produtos Compostos" foi removido.

✅ **Novo Filtro: Tipo do Produto:** Implementamos o filtro **"Tipo do produto"** para segmentar a listagem, permitindo que você escolha visualizar:

\* **Todos**

\* **Simples** (Itens avulsos)

\* **Composto** (Combos)

\* **Combustível**

✅ **Novo Filtro: Listar Componentes de Produto Composto:** Criamos o filtro **"Listar componentes prod. composto"** que controla a visualização do combo, com as seguintes opções:

\* **Visão Agrupada (Não):** Exibe o combo como um **único item de venda**, mostrando sua performance de faturamento.

\* **Visão Detalhada (Sim):** **Desmembra o combo** em seus itens individuais, ajustando faturamento e desconto para análise real de **custo e estoque** (Visão de "Explosão").

🚀 **Principais Benefícios:**

✔ **Análise Multidimensional:** Permite duas visões críticas para a gestão: a **performance comercial do combo** (Visão Agrupada) e o **impacto real no estoque/custo** de cada item vendido (Visão Detalhada).

✔ **Precisão Gerencial:** Garante que a análise de rentabilidade seja feita com base em **dados de custo e faturamento real** de cada componente.

✔ **Flexibilidade Total:** O usuário pode alternar entre os tipos de produto (Simples, Composto, Combustível), **isolando os dados de forma eficiente** e sem as inconsistências anteriores.

✔ **Decisão Baseada em Dados:** Facilita a identificação de quais combos são mais rentáveis e qual o custo exato de cada componente.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas e Rentabilidade** localizado no submenu **VENDAS**.

Escolha o **período desejado** para análise.

Utilize o novo campo **"Tipo do produto"** para selecionar o tipo de item que deseja analisar (ex: apenas Composto).

No campo **"Listar componentes prod. composto"**, escolha a visão que você precisa:

Selecione **"Não"** para ver o combo agrupado e analisar o preço de venda e faturamento geral.

Selecione **"Sim"** para ver os componentes desmembrados e analisar o custo, estoque e rentabilidade individual de cada item.

Utilize as informações para identificar quais categorias têm maior participação no faturamento, margem de lucro e no volume de vendas.

* * *

### **Lançamento de CT-e de Entrada por Importação de XML**

#### 📅 Data de liberação: 30 de setembro

📢 Diga adeus ao preenchimento manual! Simplificamos o lançamento do **CTe de Entrada** com a nova funcionalidade de **Importação de XML**. Agora, o sistema lê o arquivo e preenche a maioria dos campos automaticamente, garantindo mais rapidez e precisão nos seus registros fiscais.

Essa melhoria é essencial para aumentar a **eficiência operacional** do setor fiscal e eliminar erros de digitação.

🛠 **O que foi implementado:**

✅ Rotina de Importação de XML: Desenvolvemos e implementamos uma rotina completa para leitura e importação de arquivos XML na tela de Lançamento do CTe de Entrada.

✅ Preenchimento Automático de Campos: O sistema agora lê o XML e preenche automaticamente diversos campos do CTe, incluindo Transportadora, CFOP, Valores de frete e serviço, Dados de impostos e tributação.

✅ Botão "Importar XML": Um novo botão intuitivo foi adicionado à tela de lançamento, integrando a funcionalidade ao seu fluxo de trabalho.

🚀 **Principais Benefícios:**

✔ Eficiência Operacional Máxima: Agiliza drasticamente o processo de lançamento do CTe de Entrada, transformando minutos de preenchimento em segundos de importação.

✔ Redução Total de Erros: Elimina falhas de digitação e garante que todos os dados fiscais (valores, impostos, transportadora) estejam 100% acurados no sistema.

✔ Consistência de Dados: Assegura que as informações registradas sejam idênticas às contidas no documento XML oficial, facilitando a conferência fiscal.

💡 **Como utilizar:**

Acesse o menu de **Estoque** no sistema.

Selecione a opção de **Conhecimento de Transporte** localizado no submenu **FISCAL**.

Ao iniciar um novo lançamento, localize o novo botão **Importar XML.**

Clique no botão e selecione o arquivo XML do CT-e que deseja importar.

O sistema irá processar o arquivo e preencher a maioria dos campos na tela.

Revise os dados importados (se necessário) e finalize o lançamento do CTe no sistema.

* * *

### **Nova Integração: Desconto ClubPetro Direto no PDV!**

#### 📅 Data de liberação: 30 de setembro

📢 Chega de lentidão na pista! Implementamos a **Integração Direta com o ClubPetro** no seu PDV! Agora, a validação e aplicação de descontos do programa de fidelidade são feitas de forma **rápida e automática** na tela de vendas, sem a necessidade de aplicativos auxiliares.

Essa melhoria transforma a experiência do seu cliente e garante mais **agilidade e eficiência** na operação do seu posto.

🛠 **O que foi implementado:**

✅ **Integração Direta via API:** Implementada a comunicação direta com o ClubPetro através de chamadas de API no PDV.

✅ **Fim do Aplicativo Auxiliar:** **Eliminamos a etapa extra** do aplicativo auxiliar na pista, simplificando o processo de aplicação de descontos.

✅ **Validação e Aplicação na Tela de Vendas:** O sistema agora valida o código de desconto **diretamente na tela do PDV** durante a venda.

✅ **Configuração Centralizada:** Adicionamos as telas de configuração necessárias para informar as credenciais de acesso ao ClubPetro e associar os códigos dos produtos para sincronização.

🚀 **Principais Benefícios:**

✔ **Eficiência Operacional:** **Agiliza drasticamente o processo de venda** na pista, reduzindo o tempo de espera do cliente e aumentando a vazão no PDV.

✔ **Melhor Experiência do Cliente:** Torna a aplicação do benefício mais **rápida, fluida e transparente** para o motorista, valorizando o programa de fidelidade.

✔ **Centralização de Processos:** **Unifica** a aplicação de descontos de múltiplos programas de fidelidade (como ClubPetro e 99 Abastece) em um só fluxo de trabalho.

✔ **Redução de Erros:** Menos etapas manuais significam **menos chance de erros** operacionais na hora de aplicar o desconto.

💡 **Como utilizar:**

Acesse o menu de **Opções** no sistema.

Selecione a opção de **Sistema** localizado no submenu **PARÂMETROS**.

No box **Integração**, localize a guia **CLUBPETRO** e insira as credencias de integração (**URL** e **Token**).

No cadastro de Produtos, associe os combustíveis aos códigos correspondentes do ClubPetro para que o sistema reconheça o que está sendo bonificado.

No PDV, após selecionar os abastecimentos, informe o código de desconto na guia **Resgate**. O sistema irá consultar e validar a aplicação do desconto.

Informe na finalizadora adequada o restante do pagamento e conclua a venda.

* * *

### **Novo: Download Rápido do XML do CT-e de Saída**

#### 📅 Data de liberação: 26 de setembro

📢 Agora ficou muito mais fácil e rápido acessar o arquivo **XML do CTe de Saída** diretamente pelo sistema! Implementamos uma nova funcionalidade que elimina a necessidade de buscar métodos externos, centralizando a gestão dos seus documentos fiscais.

Essa melhoria proporciona mais **agilidade e padronização** no seu dia a dia, utilizando o mesmo fluxo de trabalho que você já conhece para o download de NF-e.

🛠 **O que foi implementado:**

✅ **Rotina de Download do XML:** Implementamos a funcionalidade que permite baixar o arquivo XML do CTe de Saída com apenas um clique.

✅ **Padronização com NF-e:** A nova rotina segue o mesmo padrão de comportamento e layout da funcionalidade de download de XML já existente para a **NF-e**, garantindo consistência e facilidade de uso.

✅ **Novo Botão:** Um botão específico foi adicionado no detalhamento do CTe para executar o download.

🚀 **Principais Benefícios:**

✔ **Acesso Rápido ao Documento:** Permite o **download imediato** do XML do CTe de Saída, agilizando processos internos de conferência e arquivamento.

✔ **Eficiência Operacional:** **Reduz a necessidade de consultas externas** ou processos manuais, melhorando a gestão dos documentos fiscais e o fluxo de trabalho.

✔ **Padronização da Rotina:** **Unifica** a forma de baixar XMLs (CTe e NF-e) no sistema, tornando o uso mais intuitivo e rápido para a equipe.

✔ **Melhor Gestão Fiscal:** Contribui para um **arquivamento mais organizado e seguro** dos documentos.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção de **Emissão de CT-e** localizado no submenu **FISCAL**.

Selecione o CT-e desejado na lista.

Clique no novo botão de **Download XML** que foi disponibilizado no box **Alterar CT-e**.

O arquivo XML será baixado automaticamente para o seu computador.

* * *

### **Nova Rotina de Crédito Emitido e Crédito Utilizado no PDV e Prestação de Contas**

#### 📅 Data de liberação: 01 de setembro

📢 Agora o **AppPosto** conta com as rotinas de **Crédito Emitido e Crédito Utilizado** diretamente no **PDV** e **Prestação de Contas**, alinhadas às funcionalidades já disponíveis no Desktop!

Essa melhoria foi desenvolvida para ampliar a integração entre PDV e AppPosto, tornando a gestão de créditos mais prática, transparente e acessível em qualquer ambiente.

🛠 **O que foi implementado:**

✅ Inclusão da rotina de **Crédito Emitido**, permitindo registrar, editar e controlar créditos, com informações de valor, data e cliente.

✅ Inclusão da rotina de **Crédito Utilizado**, exibindo detalhadamente cada crédito usado e valor.

✅ Sincronização automática com o PDV, contemplando:

**Troca de Título** – geralmente realizada no PDV, podendo ser feita com finalizadoras **Dinheiro, Depósito Bancário, Cheque, Convênio e Cartão de Crédito/Débito**. No retaguarda, é utilizada principalmente para **controle e verificação** do que foi emitido no PDV.

**Vale Crédito** – utilizado exclusivamente no PDV, pela finalizadora **Vale Crédito**.

🚀 **Principais Benefícios:**

✔ Permite consultar, editar e lançar créditos de forma direta na **Prestação de Contas**.

✔ Garante **integração total** entre os diferentes módulos do sistema.

✔ Aumenta a **transparência e controle** na gestão de créditos.

💡 **Como utilizar:**

No PDV, acesse o **Menu Movimento \[F8\]** > **Troca de Título \[Ctrl + T\]**. Certifique-se de que a configuração prévia esteja realizada em **Parâmetros do Sistema > Troca de Título** no retaguarda.

Defina a forma de pagamento utilizada pelo cliente para gerar o crédito (Dinheiro, Depósito Bancário, Cheque, Convênio ou Cartão de Crédito/Débito) e preencha os dados correspondentes.

Informe o cliente previamente cadastrado no sistema que irá receber o crédito.

No cadastro do cliente > Status do Cliente, o saldo será apresentado no campo **Vale Troco**. Na prestação, constará como **Crédito Emitido**.

Para realizar o consumo, no cadastro do cliente deve ser incluída a finalizadora **Vale Crédito**, mesma opção apresentada na finalização de venda do PDV.

Ao ser finalizada a venda indicando a finalizadora **Vale Crédito**, o saldo do cliente será debitado e constará na prestação como **Crédito Utilizado**.

* * *

### **Nova Parametrização de Taxa Fixa por Transação (GoodCard)**

#### 📅 Data de liberação: 27 de agosto

#### 📢 Agora o sistema permite configurar a cobrança da **taxa fixa por transação** da administradora GoodCard, além da taxa percentual já existente!

#### Essa melhoria garante que os custos das operações com GoodCard sejam calculados de forma fiel e integrada à rotina financeira.

🛠 **O que foi implementado:**

✅ Inclusão de um novo campo no cadastro da administradora e dos cartões para parametrização da **taxa fixa por transação**.

✅ Ajuste automático nos cálculos de cobrança, considerando a soma da **taxa percentual + taxa fixa** em todas as operações realizadas com a administradora com essa configuração.

✅ Padronização da lógica de cobrança, alinhada ao que já é praticado no PIX, garantindo consistência entre formas de recebimento.

🚀 **Principais Benefícios:**

✔ Precisão no cálculo das taxas cobradas pela GoodCard.

✔ Maior controle financeiro, evitando divergências entre valores recebidos e custos operacionais.

✔ Transparência na apuração de despesas financeiras de cartões.

✔ Alinhamento às práticas do mercado, otimizando a gestão de recebíveis.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione a opção de **Administradoras** localizado no submenu **FINANCEIRO**.

Acesse o cadastro da administradora que terá uma taxa fixa por transação além da taxa percentual.

No box **Complemento**, altere o campo **Valor em espécie R$** com o valor da taxa fixa.

O sistema passará a considerar automaticamente essa taxa + a taxa administrativa % em todas as operações.

Confira os lançamentos financeiros na Prestação de Contas e o relatório de Controle de Cartões, que já refletirão o cálculo atualizado.

* * *

### **Novo Modelo de Etiqueta de Gôndola 28 x 15 mm**

#### 📅 Data de liberação: 22 de agosto

📢 **Agora o sistema conta com o modelo padrão de etiqueta de gôndola no tamanho 28 x 15 mm!**

Essa melhoria foi desenvolvida para simplificar o processo de impressão de etiquetas, eliminando adaptações externas e garantindo padronização na apresentação de preços em gôndolas e prateleiras.

🛠 **O que foi implementado:**

✅ Inclusão do modelo padrão de **etiqueta 28 x 15 mm** no relatório de **Gôndolas - Produtos**.

🚀 **Principais Benefícios:**

✔ Elimina a necessidade de ferramentas externas ou ajustes manuais para impressão de etiquetas.

✔ Reduz o tempo gasto na gestão e atualização de preços em gôndolas e prateleiras.

✔ Garante padronização, melhorando a apresentação visual dos produtos.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Gôndolas - Produtos** localizado no submenu **ETIQUETAS**.

Defina o modelo **Padrão 28 x 15 mm**.

Utilize o relatório para imprimir etiquetas de forma rápida, padronizada e sem necessidade de ajustes manuais.

* * *

### **Novo Relatório de Vendas por Grupo e Subgrupo**

#### 📅 Data de liberação: 21 de agosto

📢 Agora o **AppPosto** conta com o relatório de **Vendas por Grupo e Subgrupo**! Essa melhoria foi desenvolvida para ampliar a mobilidade e facilitar o acompanhamento das vendas de forma prática e rápida.

🛠 **O que foi implementado:**

✅ Disponibilização do relatório “Vendas por Grupo e Subgrupo”.

✅ Apresentação consolidada das vendas por categoria de produtos (ex.: Combustíveis, Bebidas, Bomboniere, Lubrificantes etc.).

✅ Totalização de indicadores chave como quantidade, faturamento, participação por grupo, custo e lucro.

🚀 **Principais Benefícios:**

✔ **Gestão Estratégica:** permite identificar quais grupos mais contribuem para o faturamento e lucro.

✔ **Acompanhamento de Margem:** análise da rentabilidade de cada categoria, ajudando a planejar promoções e ajustar preços.

✔ **Controle Operacional:** monitoramento de ticket médio e itens por cupom para avaliar comportamento de compra dos clientes.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Grupo e Subgrupo** localizado no submenu **VENDAS**.

Escolha o **período desejado** para análise.

Utilize as informações para identificar quais categorias têm maior participação no faturamento, margem de lucro e no volume de vendas.

* * *

### **Ajuste no Espelho da Nota: Inclusão da Parcela, Data e Valor do Boleto**

#### 📅 Data de liberação: 14 de agosto

📢 **Agora o sistema exibe informações completas sobre parcelas, datas de vencimento e valores de boletos no relatório Relação de Compras Detalhada (espelho da nota)!**

Essa melhoria foi desenvolvida para facilitar a conferência e o acompanhamento dos pagamentos, garantindo mais precisão e eficiência na validação das contas.

🛠 **O que foi implementado:**

✅ Inclusão da parcela paga (Par. Vcto.), data de vencimento e valor do boleto diretamente no relatório.

✅ Ajuste padronizado com o comportamento já existente no sistema Desktop, garantindo consistência entre as plataformas.

🚀 **Principais Benefícios:**

✔ Facilita a conferência e auditoria dos boletos diretamente pelo relatório, sem necessidade de pesquisas adicionais.

✔ Melhora a precisão e clareza das informações financeiras disponíveis para o usuário.

✔ Promove maior controle sobre o acompanhamento de pagamentos e prazos de recebimento.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Compras** localizado no submenu **ESTOQUE**.

Defina a apresentação **Compra - Detalhada** e encontre a conta a pagar, pelo número de documento ou data de emissão.

Confira as colunas de **Parc.**, **Vcto.** e **Valor**.

Utilize essas informações para validar pagamentos, auditar boletos e controlar o fluxo financeiro de forma prática e confiável.

* * *

### **Mudança de Preço para Delivery no PDV**

#### Data de liberação: 14 de agosto

📢 Agora é possível realizar a mudança de preço diretamente no PDV em vendas de **delivery**, sem precisar acessar a retaguarda!

Essa melhoria traz mais autonomia e rapidez para as equipes operacionais, eliminando atrasos causados por sincronizações e garantindo maior eficiência nas vendas realizadas pelo AppPosto.

🛠 **O que foi implementado:**

✅ Opção no PDV para alteração de preços em vendas de delivery.

✅ Parâmetros de configuração nos módulos de **PDVs, Clientes** e **Permissões de Usuário**.

🚀 **Principais Benefícios:**

✔ Agilidade: alteração de preços realizada diretamente no ponto de venda.

✔ Redução da dependência da retaguarda, minimizando falhas de sincronização.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione a opção de **Pontos de Venda** localizado no submenu **EMPRESA**.

Identifique o PDV que será utilizado para vendas do delivery e altere o parâmetro `Utilizar serviço de delivery` para `Sim` no box **ALTERAR PONTO DE VENDA**.

Novamente no menu de **Cadastro**, selecione a opção **Clientes** localizado no submenu **CLIENTES**.

Identifique o cliente que poderá ter os preços de contrato diretamente no PDV e altere o parâmetro `Parceiro de delivery` para `Sim` no box **IDENTIFICAÇÃO**.

Para finalizar as configurações, acesse o menu **Cadastro** e selecione a opção **Perfis de Acesso** no submenu **CONTROLE DE ACESSO**.

Identifique o perfil de acesso do operador de caixa e inclua a operação `MUDAR PREÇO EM VENDA DE DELIVERY` no mesmo.

📌 **Importante:**

Se o PDV for acessado por um usuário **sem a permissão** para modificar preços, o sistema solicitará a senha de um usuário autorizado sempre que houver lançamento de produtos em vendas para clientes de delivery.

Se o PDV for acessado por um usuário **com a permissão habilitada**, não será solicitada senha, permitindo que o operador altere os preços quando necessário.

Realizadas as configurações, acesse o **PDV**, identifique o cliente parametrizado como delivery, e selecione um produto para venda.

Será apresentada uma caixa de diálogo com a possibilidade de alteração do preço do produto. O sistema aplicará o valor diretamente no item na venda sendo realizada naquele momento.

* * *

### **Novo Formulário de Estorno de Cheques**

#### Data de liberação: 31 de julho

📢 Agora o sistema conta com um **formulário exclusivo para estorno de cheques devolvidos quitados ou resgatados!**

Essa nova funcionalidade foi criada para corrigir de forma segura e rastreável eventuais erros na quitação de cheques devolvidos ou resgatados, eliminando a necessidade de ajustes manuais ou retrabalho nas rotinas financeiras.

🛠 **O que foi implementado:**

✅ Novo formulário dedicado ao **estorno de cheques**, disponível diretamente no módulo de cheques.

✅ Permite **reverter a quitação ou estorno de cheques** que foram baixados de forma indevida, com histórico completo da operação.

✅ Integração automática com o **Livro Caixa** e demais relatórios financeiros, garantindo consistência dos dados.

🚀 **Principais Benefícios:**

✔ Corrige facilmente lançamentos realizados por engano, sem comprometer o controle financeiro.

✔ Aumenta a **transparência** e **rastreabilidade** das movimentações de cheques.

✔ Elimina a necessidade de ajustes manuais ou reclassificações externas.

✔ Reduz retrabalho e garante maior precisão na conciliação financeira.

✔ Mantém o histórico completo, com separação clara entre quitação e estorno.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção **Cheques** localizado no submenu **CAIXAS DA GERÊNCIA/CAIXAS DE VENDA**.

Selecione o cheque que será estornado. Necessário que esteja com status de **Devolvido e Quitado** ou **Resgatado**.

Clique no ícone e, em seguida, na tela apresentada, clique no botão .

O sistema atualizará automaticamente o status do cheque e o registro no Livro Caixa.

* * *

### **Novo Formulário de Quitação de Cheques**

#### Data de liberação: 31 de julho

📢 Agora o sistema conta com um **formulário exclusivo para a quitação de cheques devolvidos!**

Essa melhoria traz mais organização, rastreabilidade e agilidade no controle de cheques em aberto, facilitando a rotina financeira do seu negócio.

🛠 **O que foi implementado:**

✅ Novo formulário dedicado à **quitação de cheques**, acessível diretamente no módulo de cheques.

✅ Permite **localizar facilmente** os cheques devolvidos pendentes e registrar sua baixa de forma prática e estruturada.

✅ O sistema realiza o lançamento automático no **Livro Caixa** e atualiza o status do cheque quitado.

🚀 **Principais Benefícios:**

✔ Centraliza o processo de quitação em uma rotina única e padronizada.

✔ Melhora o controle financeiro, com histórico completo das operações.

✔ Aumenta a agilidade no tratamento de pendências com clientes.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção **Cheques** localizado no submenu **CAIXAS DA GERÊNCIA/CAIXAS DE VENDA**.

Selecione o cheque que será quitado. Necessário que esteja com status de Devolvido e Pendente.

Clique no ícone e, em seguida, na tela apresentada, defina os dados da quitação, como data e forma de pagamento.

O sistema registrará automaticamente a quitação no Livro Caixa e atualizará o status do cheque.

* * *

### **Novo Relatório de Indicadores de Clientes a Prazo**

#### Data de liberação: 31 de julho

📢 Agora o sistema conta com um relatório de **Indicadores de Clientes a Prazo**, desenvolvido para aprimorar o acompanhamento de convênios e clientes que compram com pagamento faturado!

Essa nova funcionalidade foi criada para facilitar a análise do desempenho e comportamento dos principais clientes a prazo, com foco na gestão comercial, financeira e estratégica.

🛠 **O que foi implementado:**

✅ Relatório completo com indicadores detalhados dos clientes a prazo, como:

Quantidade de compras

Ticket médio

Litragem média

Tendência de consumo semanal

Faturamento e valor comparativo ao período anterior

Frequência de compra e data da última compra

✅ Possibilidade de análise por cliente com filtros e ordenações específicas.

✅ Totalização geral com indicadores consolidados de vendas, faturamento, litragem e ticket médio.

🚀 **Principais Benefícios:**

✔ Permite a identificação de clientes em crescimento ou queda no consumo.

✔ Facilita a tomada de decisões comerciais com base em dados reais.

✔ Melhora o controle e o acompanhamento de convênios e grandes contas.

✔ Auxilia na definição de estratégias de fidelização e cobrança.

✔ Aumenta a previsibilidade do fluxo de caixa ao monitorar o prazo médio de recebimento.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Indicadores de Clientes a Prazo** localizado no submenu **VENDAS**.

Escolha o **período desejado** para análise.

Utilize os indicadores para comparar desempenho entre clientes, identificar tendências e acompanhar os principais convênios.

* * *

### **Novo Módulo "Outras Vendas" na Prestação de Contas do App Posto**

#### Data de liberação: 23 de julho

📢 Agora o App Posto permite o registro e controle de **vendas externas ou manuais** diretamente na Prestação de Contas!

Esse recurso já existente na versão Desktop foi incorporado ao App Posto, ampliando a cobertura do controle financeiro das operações realizadas fora do sistema de automação.

**🛠 O que foi implementado:**

✅ Novo módulo **"Outras Vendas"** adicionado à Prestação de Contas no App Posto.

✅ Permite registrar vendas realizadas manualmente, como operações externas ao sistema (ex: vendas em papel, vendas externas, ajustes).

✅ Tela com filtros por **data, turno, grupo PDV e operador**, com geração de **auditoria completa** das movimentações.

✅ Integração automática com o Livro Caixa e relatórios financeiros, com controle por **permissão de usuário**.

🚀 **Principais Benefícios:**

✔ Amplia a cobertura do controle financeiro no App Posto, permitindo lançar vendas que não passaram pelo PDV.

✔ Reduz perdas de informação e garante maior **confiabilidade nos dados da prestação de contas**.

✔ Facilita o fechamento do caixa com registros completos, mesmo em cenários operacionais mais flexíveis.

✔ Alinha os recursos do App Posto com a versão Desktop, proporcionando mais **consistência entre plataformas**.

✔ Garante **rastreabilidade e segurança**, com registro de quem realizou cada lançamento.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção **Prestação de Contas** localizado no submenu **CAIXAS DA VENDA**.

Encontre a prestação do operador que será necessário incluir uma venda externa.

Clique em ‘**Outras Vendas**’ e em seguida no botão . Preencha os dados da venda: valor, descrição, operador e grupo PDV.

Salve o lançamento para que ele seja integrado automaticamente ao caixa do turno e ao Livro Caixa.

* * *

### **Novo Formulário Reapresentação de Cheques**

#### Data de liberação: 23 de julho

📢 Agora o sistema conta com um formulário específico para registrar a **reapresentação de cheques**!

Essa melhoria oferece mais controle e organização nas operações financeiras envolvendo cheques devolvidos, evitando registros manuais ou improvisados.

**🛠 O que foi implementado:**

✅ Novo formulário dedicado à reapresentação de cheques, acessível diretamente no módulo de cheques.

✅ Permite registrar a nova data de depósito de cheques devolvidos, mantendo o histórico completo da operação.

✅ Integração com o Livro Caixa e demais relatórios financeiros, garantindo rastreabilidade da reapresentação.

🚀 **Principais Benefícios:**

✔ Facilita o controle e o acompanhamento de cheques reapresentados ao banco.

✔ Melhora a organização das movimentações financeiras, separando reapresentações de lançamentos originais.

✔ Garante consistência e clareza nos relatórios e na conciliação financeira.

✔ Aumenta a transparência na gestão de recebíveis por cheque.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção **Cheques** localizado no submenu **CAIXAS DA GERÊNCIA/CAIXAS DE VENDA**.

Selecione o cheque que será reapresentado. Necessário que esteja com status de Devolvido e Pendente.

Clique no botão e, em seguida, na opção Reapresentação.

Informe a nova data de depósito e confirme o lançamento.

O sistema atualizará o status e registrará automaticamente a reapresentação no Livro Caixa.

* * *

### **Nova Etapa de Conciliação Bancária com Lançamentos Avulsos**

#### Data de liberação: 23 de julho

📢 Agora o sistema registra movimentações avulsas identificadas no extrato bancário!

A conciliação financeira ficou ainda mais completa com a nova rotina que permite importar e lançar tarifas, rendimentos e transferências não vinculadas diretamente a contas ou vendas.

**🛠 O que foi implementado:**

✅ Lançamento no Livro Caixa de movimentações avulsas (como tarifas bancárias, rendimentos e transferências) identificadas durante a importação de extratos via OFX.

🚀 **Principais Benefícios:**

✔ Agilidade na conciliação bancária, com menos lançamentos manuais.

✔ Melhor rastreabilidade e transparência nas movimentações importadas dos bancos.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Conciliação de Extrato** localizado no submenu **EXTRATO BANCÁRIO**.

Importe o arquivo OFX e configure as regras para iniciar a conciliação.

Revise os lançamentos processados e confirme.

* * *

### **Novo Relatório: Vendas por Operador de Caixa**

#### Data de liberação: 22 de julho

📢 Agora o sistema conta com o relatório **"Vendas por Operador de Caixa"**, oferecendo uma visão detalhada da performance individual dos operadores no PDV!

Essa novidade amplia as possibilidades de análise gerencial e controle de produtividade, permitindo que os gestores acompanhem com precisão os resultados por colaborador.

**🛠 O que foi implementado:**

✅ Novo relatório disponível no menu **RELATÓRIOS > VENDAS > Vendas por Operador de Caixa**.

✅ Estrutura completa com agrupamento por: **Operador de Caixa, Grupo de Produto, Caixa (PDV).**

✅ Filtros detalhados por: Período, PDV, Operador, Cliente, Produto, Centro de Resultado.

✅ Informações abrangentes por item: Produto, Preço Unitário, Quantidade, Valor Total, Acréscimo, Desconto, Custo, Lucro, % das Vendas

✅ Totais por grupo, por operador e por caixa ao final do relatório.

🚀 **Principais Benefícios:**

✔ Permite monitorar o desempenho individual de cada operador de caixa.

✔ Melhora o controle de rentabilidade e produtividade no ponto de venda.

✔ Suporte direto à gestão de metas, bonificações e tomada de decisões estratégicas.

✔ Visualização clara e segmentada das vendas, com filtros avançados que facilitam a análise.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Operador de Caixa** localizado no submenu **VENDAS**.

Defina os filtros desejados para refinar os dados (período, operador, grupo de produto, etc.).

Gere o relatório e visualize os resultados organizados por operador, com totais e detalhamento de vendas e rentabilidade.

**🔍 Ideal para gestores, administradores e responsáveis por equipes de vendas que desejam controlar a performance dos operadores de forma precisa e eficiente.**

* * *

### **Resumo por Empresa no Relatório DRE**

#### Data de liberação: 22 de julho

📢 Agora o relatório de DRE conta com um novo recurso que permite visualizar um **resumo financeiro por empresa** ao final do relatório!

Essa funcionalidade visa facilitar a análise dos resultados consolidados em ambientes com múltiplas filiais, trazendo mais clareza e agilidade na interpretação dos dados financeiros.

**🛠 O que foi implementado:**

✅ Nova opção no Relatório DRE para exibir um **quadro resumo por empresa** ao final do documento.

✅ O resumo apresenta os principais indicadores financeiros organizados por **nome fantasia da empresa**, incluindo:

Receita Bruta

Receita Líquida

CMV

Lucro Bruto

Despesas/Receitas Operacionais

Lucro Operacional

Despesas/Receitas Não Operacionais

Lucro Líquido

🚀 **Principais Benefícios:**

✔ Visualização clara do desempenho de cada empresa em relatórios consolidados.

✔ Facilita comparações entre filiais sem necessidade de relatórios separados.

✔ Aumenta a eficiência na análise gerencial e tomada de decisões.

✔ Reduz erros e retrabalho ao eliminar a necessidade de interpretações manuais.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Demonstrativo do Resultado** localizado no submenu **FINANCEIRO**.

Aplique os filtros conforme necessário.

Marque a nova opção **“Exibir resumo por empresa”** e gere o relatório.

Ao final do relatório, confira o quadro consolidado com os indicadores de cada empresa listada.

**🔎 Ideal para administradores financeiros, contadores e gestores que acompanham a performance de redes com mais de uma filial.**

* * *

### **Integração com BR Mania (VEM)**

#### Data de liberação: 15 de julho

**📢 Agora o AppPosto está totalmente integrado com a BR Mania (VEM)!**

A nova integração automatiza processos essenciais como sincronização de produtos, envio de cupons fiscais, promoções e relatórios, garantindo mais conformidade com as exigências da franqueadora e otimizando o dia a dia da loja.

**🛠 O que foi implementado:**

✅ _Sincronizações automáticas com a VEM_:

Carga diária de produtos e promoções.

Envio automático de notas fiscais e cupons fiscais.

Importação de estrutura mercadológica (categorias, subcategorias e artigos).

Cadastro de produtos em posição livre com controle de limite.

✅ _Novas Telas e Relatórios no AppPosto:_

**Associação de Produtos e Promoções:** vincule produtos e combos ao código da BR Mania com facilidade

**Envio Manual de Movimentações:** envie vendas e notas por período, com filtros específicos

**Relatório de Vendas Mês/Dia:** visualize as vendas conciliadas em nível diário ou mensal

✅ _Aprimoramentos Técnicos:_

Associação automática de novos produtos e combos com base na tabela oficial da VEM

Validação de limite para produtos em posição livre (máximo de 50 ativos)

Ajustes em promoções com produtos compostos para registro correto de descontos e totais

🚀 **Principais Benefícios:**

✔ Conformidade garantida com os padrões exigidos pela BR Mania

✔ Redução de erros manuais com envios automáticos e validações inteligentes

✔ Mais praticidade no cadastro e vinculação de produtos e combos

✔ Relatórios claros para auditoria e acompanhamento de vendas e promoções

✔ Mais controle operacional com envio manual quando necessário

✔ Experiência fluida e alinhada às demandas da rede BR Mania

* * *

### **Novo Relatório: Vendas por Horário**

#### Data de liberação: 10 de julho

**📢** Agora o sistema conta com o relatório **"Vendas por Horário"**, trazendo uma análise completa do comportamento de vendas ao longo do dia!  
Esse novo recurso foi desenvolvido para facilitar o acompanhamento de horários de pico e a performance de vendas por tipo de combustível, oferecendo mais clareza e agilidade para a tomada de decisões estratégicas.

**🛠 O que foi implementado:**

✅ Novo relatório “Vendas por Horário”, com três opções de visualização:

**Por Período**

**Por Período e Combustível**

**Por Hora**

✅ Permite agrupar e comparar dados por faixa horária e tipo de produto, com filtros flexíveis de data e horário.

🚀 **Principais Benefícios:**

✔ Identificação precisa dos horários de maior e menor movimento.

✔ Apoio à definição de estratégias promocionais em horários específicos.

✔ Melhora no controle operacional, com insights baseados no comportamento de consumo ao longo do dia.

✔ Relatório personalizável, adaptando-se às necessidades do posto ou rede.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Horário** localizado no submenu **VENDAS**.

Selecione o período desejado.

Escolha a visualização: **Por Período**, **Por Período e Combustível** ou **Por Hora**.

Aplique os filtros conforme necessário e gere o relatório.

* * *

### **Apresentação de Detalhado por Dia no Relatório de Vendas por Finalizadora**

#### Data de liberação: 08 de julho

**📢 Agora o relatório de Vendas por Finalizadora pode ser visualizado dia a dia.**

**🛠 O que foi implementado:**

✅ Nova apresentação "Detalhado por Dia" no relatório.

**🚀 Principais Benefícios:**

✔ Facilita conferências diárias de recebimentos.

✔ Maior precisão em auditorias financeiras.

✔ Visão do comportamento das formas de pagamento ao longo do tempo.

**💡 Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Finalizadora** localizado no submenu **VENDAS**.

Selecione a apresentação ‘Detalhado por Dia’ para visualizar os valores agrupados por data e consulte.

* * *

### **Nova Etapa de Conciliação Bancária com Baixa Automática de Contas a Pagar**

#### Data de liberação: 08 de julho

📢 **O sistema agora identifica pagamentos no extrato bancário e realiza automaticamente a baixa de contas a pagar, conforme regras de conciliação.**

**🛠 O que foi implementado:**

✅ Integração da baixa com base no extrato bancário importado (OFX).

**🚀 Principais Benefícios:**

✔ Redução de trabalho manual.

✔ Maior segurança na conciliação financeira.

✔ Alinhamento entre sistema e dados bancários.

**💡 Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Conciliação de Extrato** localizado no submenu **EXTRATO BANCÁRIO**.

Importe o arquivo OFX e configure as regras para iniciar a conciliação.

Revise os lançamentos processados e confirme.

* * *

### **Nova Módulo de Reajuste de Vales**

#### Data de liberação: 08 de julho

**📢 Recurso para ajustar em massa os vales em aberto dos clientes com mais agilidade e segurança.**

**🛠 O que foi implementado:**

✅ Filtros por cliente, período e produto.

✅ Aplicação em massa de novo valor para o preço de contrato.

✅ Permissão controlada por operação.

🚀 **Principais Benefícios:**

✔ Ganho de tempo na correção de vales.

✔ Menor risco de erro manual.

✔ Rastreabilidade e controle de ações por usuário.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção **Reajuste de Vales** localizado no submenu **CONVÊNIO**.

Configure os filtros de **Clientes**, **Período**, **Produto** e **Novo Valor (R$)** para atualizar os preços de contrato dos vales em aberto.

* * *

### **Novo Relatório: Saúde Financeira**

#### Data de liberação: 08 de julho

**📢 Agora o sistema possui um relatório detalhado de entradas e saídas diárias, com foco em controle granular.**

**🛠 O que foi implementado:**

✅ Novo relatório com dados de contas a pagar/receber, estoque e despesas.

🚀 **Principais Benefícios:**

✔ Visão clara da saúde financeira diária.

✔ Apoio gerencial para tomada de decisão.

✔ Detalhamento mais completo.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Saúde Financeira** localizado no submenu **FINANCEIRO**.

Escolha o período (máximo de 7 dias) para analisar diariamente o desempenho financeiro.

* * *

### **Alerta de Revisão ao Alterar o Regime de Contribuições**

#### Data de liberação: 08 de julho

**📢 Novo alerta informativo orienta sobre a necessidade de revisar as alíquotas fiscais ao alterar o regime de contribuições no cadastro da empresa.**

**🛠 O que foi implementado:**

✅ Alerta ao alterar o regime no Cadastro da Empresa e nos Departamentos Fiscais.

🚀 **Principais Benefícios:**

✔ Redução de erros fiscais.

✔ Conformidade tributária reforçada.

✔ Segurança na gestão de tributação.

💡 **Atenção**: Ao mudar o regime no cadastro da empresa, leia atentamente o alerta exibido e revise as configurações de alíquotas dos departamentos fiscais conforme o novo enquadramento.

* * *

### **Auditoria de Aferições – Rastreabilidade Garantida**

#### Data de liberação: 08 de julho

**📢 Aferições realizadas no PDV agora aparecem corretamente no relatório de auditoria do AppPosto.**

**🛠 O que foi implementado:**

✅ Exibição completa das aferições: data, turno, bico, frentista, combustível e volume.

🚀 **Principais Benefícios:**

✔ Rastreabilidade completa das aferições.

✔ Confiabilidade nas auditorias internas.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Auditoria** localizado no submenu **OPERACIONAL**.

Selecione o período e filtre a ação **Aferição**.

* * *

### **Inclusão de Itens em NFe de Acobertamento – Flexibilidade Fiscal**

#### Data de liberação: 03 de julho

**📢 Agora é possível incluir produtos e serviços em NFe de Acobertamento pelo AppPosto.**

**🛠 O que foi implementado:**

✅ Liberação da inclusão de itens durante a emissão de NFes de acobertamento.

🚀 **Principais Benefícios:**

✔ Atende exigências fiscais como detalhamento solicitado por parceiros (ex: Ticket Log).

✔ Faturamento mais completo e rastreável.

✔ Mais flexibilidade para operações de serviço fora do ponto de abastecimento.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção de **NF-e de Saída** localizado no submenu **FISCAL**.

Após referenciar os cupons para acobertamento, insira normalmente os itens desejados.

* * *

### **Novo Relatório: Lançamentos no Caixa por Conta – Mais Transparência no Financeiro**

#### Data de liberação: 03 de julho

**📢 Agora o sistema Web conta com o Relatório de Lançamentos no Caixa por Conta, ideal para controle de movimentações entre contas.**

**🛠 O que foi implementado:**

✅ Relatório com dados de lançamentos (data, contas de origem/aplicação, histórico, documento e valor).

✅ Filtros por período, tipo de conta e centro de resultado.

✅ Totalizadores automáticos por conta e no período.

🚀 **Principais Benefícios:**

✔ Análise detalhada de movimentações.

✔ Mais controle e clareza para auditorias.

✔ Dados consistentes com filtro por competência.

💡 **Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Lançamento no caixa por Conta** localizado no submenu **OPERACIONAL**.

Escolha o período e os filtros desejados e visualize os dados organizados de forma clara e precisa.

* * *

### **Novo Formulário de Devolução de Cheques**

#### Data de liberação: 27 de junho

📢 **Agora ficou muito mais simples controlar e registrar devoluções de cheques!**

Com essa melhoria, todo o processo de devolução passa a ser feito de forma centralizada, trazendo mais segurança e agilidade para sua operação.

**🛠 O que foi implementado:**

✅ **Novo Formulário de Devolução de Cheque:**

Permite localizar rapidamente um cheque depositado e registrar sua devolução, informando a data e o motivo (por exemplo: insuficiência de fundos, conta encerrada).

✅ **Novo Status “Devolvido e Pendente”:**

Ao registrar a devolução, o cheque passa automaticamente do status _Depositado_ para _Devolvido e Pendente_, garantindo rastreabilidade do recebimento até a regularização.

✅ **Filtro para Consulta de Cheques Devolvidos:**

Centraliza todos os cheques devolvidos e pendentes de regularização em um único lugar, facilitando o acompanhamento e a cobrança.

🚀 **Principais Benefícios:**

✔ **Maior Controle Financeiro:** Visão consolidada de todos os cheques devolvidos e pendentes de acerto.

✔ **Agilidade na Cobrança:** Informações organizadas e disponíveis para decisões rápidas e eficazes de recuperação de crédito.

✔ **Produtividade Operacional:** Redução do trabalho manual, com processo mais padronizado e confiável.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção **Cheques** localizado no submenu **CAIXAS DA GERÊNCIA/CAIXAS DE VENDA**.

Selecione o cheque que será devolvido. Necessário que esteja com status de Depositado.

Clique no botão e, em seguida, na opção Devolução.

Indique a **Alínea** e o **Histórico** referentes a devolução e confirme.

* * *

### **Nova Opção de Agrupamento de Produtos na Nota Fiscal a partir da Indicação de Cupom**

#### Data de liberação: 26 de junho

📢 **Agora ficou muito mais simples emitir Notas Fiscais consolidadas ao importar cupons de venda!**

A nova funcionalidade permite agrupar automaticamente produtos iguais em uma única linha na NF-e, economizando tempo e garantindo conformidade com convênios que exigem notas consolidadas, como a Goodcard.

**🛠 O que foi implementado:**

✅ **Nova opção "Agrupar Itens por Produto"** disponível na tela de **Seleção de Vendas**, ao gerar a NF-e a partir de cupons:

**Agrupar Itens (NÃO) – Padrão:** Mantém o detalhamento individual de cada item conforme registrado nos cupons.

**Agrupar Itens (SIM):** Agrupa automaticamente linhas do mesmo produto em uma única linha na Nota Fiscal.

🔹 As quantidades são somadas.

🔹 O valor unitário é calculado pela média ponderada do total e da quantidade.

**🚀 Principais Benefícios:**

✔ **Ganho de Produtividade:** elimina a necessidade de exclusão e recriação manual de linhas na nota.

✔ **Flexibilidade Operacional:** você decide quando agrupar ou detalhar produtos.

✔ **Atende Exigências de Convênios:** facilita a emissão de Notas Fiscais consolidadas, especialmente para convênios que exigem agrupamento por produto.

✔ **Mais Organização:** notas fiscais mais claras e fáceis de conciliar com os cupons originais.

💡 **Como utilizar:**

Acesse o menu de **Movimento** no sistema.

Selecione a opção de **NF-e de Entrada/Saída** localizado no submenu **FISCAL**.

Na tela de **Seleção de Vendas**, ao importar cupons para gerar a NF-e, localize a opção **"Agrupar Itens por Produto"**.

Se desejar que cada produto seja listado em linha separada, mantenha a opção em **"NÃO"** (padrão).

Para consolidar automaticamente produtos iguais em uma única linha, selecione **"SIM"**.

Confirme a importação. A nota será gerada com os itens agrupados, já com valor unitário calculado pela média ponderada.

* * *

### **Novo Parâmetro de Baixa Automática de Carteiras Digitais/PIX**

#### Data de liberação: 25 de junho

📢 Agora você decide se a baixa é automática ou manual para PIX e Carteiras Digitais!

**🛠** **O que foi implementado:**

✅ Novo parâmetro "Efetua baixa automática" (SIM/NÃO) no cadastro da administradora.

✅ Lógica atualizada para respeitar essa configuração.

🚀 **Principais Benefícios:**

✔ Flexibilidade de configuração.

✔ Melhor conciliação bancária com extrato OFX.

✔ Alinhamento com o ACS Gerente.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione a opção de **Administradoras** localizado no submenu **FINANCEIRO**.

Acesse o cadastro da administradora.

Defina se realizará a baixa automática.

O sistema seguirá sua definição para cada transação.

* * *

### **Observação Padrão em Notas Fiscais**

#### Data de liberação: 18 de junho

📢 Agora o AppPosto permite salvar automaticamente o campo de observações na NF-e!

**🛠 O que foi implementado:**

✅ Botão "Salvar Observação" para armazenar o texto como padrão.

✅ Botão "Excluir Observação" para limpar o padrão salvo.

✅ O texto salvo é aplicado automaticamente nas próximas emissões.

🚀 **Principais Benefícios:**

✔ Evita redigitação.

✔ Padroniza mensagens fiscais.

✔ Ganha tempo na emissão de NF-e.

**💡 Como utilizar:**

Digite o texto no campo de observações no final do procedimento de emissão de Nota Fiscal.

Clique em "Salvar Observação".

Para limpar, clique em "Excluir Observação".

* * *

### **Alerta para Emissão de Nota Fiscal após Faturamento de Convênio**

#### Data de liberação: 18 de junho

📢 Ganhe agilidade fiscal com o novo alerta de emissão de NF após faturar convênios!

Agora, ao faturar um convênio, o sistema pergunta se você deseja gerar a Nota Fiscal.

**🛠 O que foi implementado:**

✅ Novo alerta ao finalizar fatura de convênio, sugerindo emissão da NF.

✅ Redirecionamento automático para a tela de Nota Fiscal com todos os dados preenchidos.

✅ Parâmetro configurável com 3 opções:

“Perguntar Antes”

“Ativa” (sempre gera automaticamente)

“Inativa” (não emite automaticamente)

🚀 **Principais Benefícios:**

✔ Facilita a rotina fiscal com menos cliques.

✔ Evita esquecimentos ou falhas no processo de emissão.

**💡 Como utilizar:**

Ao finalizar o faturamento, clique em “Sim” no alerta para gerar a NF.

O sistema redirecionará com os dados prontos para emissão.

Caso prefira, defina o comportamento padrão nas configurações do sistema.

* * *

### **Geração de Faturas de Cartão por Bandeira no Extrato**

#### **Data de liberação: 17 de junho**

📢 Faturas de cartão agora separadas por bandeira e previsão de recebimento!

Melhoria no AppPosto garante alinhamento com o sistema Desktop e mais controle dos recebíveis.

**🛠 O que foi implementado:**

✅ Nova lógica de agrupamento no momento da importação do extrato:

Separação automática por bandeira de cartão.

Geração de faturas conforme previsão de recebimento.

**🚀 Principais Benefícios:**

✔ Alinhamento entre AppPosto e sistema Desktop.

✔ Mais clareza nos relatórios financeiros.

✔ Facilita a conciliação com os repasses das operadoras.

💡 **Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção **Baixa de Cartões** localizado no submenu **CARTÕES**.

Indique as datas e a operadora. O sistema gera faturas separadas automaticamente por bandeira e previsão.

Consulte as faturas geradas no módulo de **Faturas de Cartão**.

* * *

### **Nova Etapa de Conciliação Bancária com Baixa Automática de Cartões**

#### Data de liberação: 17 de junho

📢 Finalizada a automação da conciliação bancária!

Agora, o sistema interpreta os lançamentos importados do extrato e executa ações automaticamente, como baixas e lançamentos no caixa.

**🛠 O que foi implementado:**

✅ Etapa de conciliação que interpreta os dados do extrato (formato OFX).

✅ Aplicação automática de regras para:

Baixa de cartões de crédito e débito.

Lançamentos no livro caixa conforme identificação.

**🚀 Principais Benefícios:**

✔ Elimina tarefas manuais na conciliação bancária.

✔ Aumenta a precisão na baixa e controle financeiro.

✔ Mais velocidade e segurança no processo contábil.

**💡 Como utilizar:**

Acesse o menu **Financeiro** no sistema.

Selecione a opção de **Conciliação de Extrato** localizado no submenu **EXTRATO BANCÁRIO**.

Importe o arquivo OFX e configure as regras para iniciar a conciliação.

Revise os lançamentos processados e confirme.

* * *

### **Integração com Shell Select**

#### Data de liberação: 17 de junho

**📢 Integração completa com a Shell Select!**

Agora, o sistema realiza cargas automáticas de estrutura mercadológica, produtos e combos da Shell, agilizando a gestão das promoções da rede.

**🛠 O que foi implementado:**

✅ Rotinas de carga automática para:

Estrutura Mercadológica

Produtos

Combos

✅ Tela para mapeamento de produtos e promoções.

✅ Campos específicos para Shell no cadastro de produtos.

✅ Botões de carga full e carga parcial nos parâmetros do sistema.

✅ Validação automática do código de barras no cadastro de produtos.

✅ Descrição preenchida automaticamente a partir da base oficial.

✅ Cadastro de **Promohits** com preenchimento automático de itens e descrição com base no código de promoção.

🚀 **Principais Benefícios:**

✔ Integração direta e confiável com a plataforma Shell.

✔ Centralização do mapeamento de promoções em uma única tela.

✔ Otimização do tempo de configuração de campanhas da Shell Select.

✔ Mais agilidade e precisão no cadastro de produtos e combos da Shell.

✔ Redução de erros operacionais e padronização dos dados.

✔ Experiência mais fluida para usuários da integração com a Shell Select.

* * *

### **Novo Utilitário de Alteração em Massa de Preços de Produtos**

#### Data de liberação: 13 de junho

📢 Chegou ao AppPosto a funcionalidade de **alteração em massa de preços**! Agora você pode ajustar preços com base em filtros e markup de forma prática e segura.

**🛠 O que foi implementado:**

✅ Novo utilitário que permite alterar preços com base em:

Filtros por **grupo, subgrupo** e **percentual de lucro (markup)**.

Definição clara de quais preços serão alterados (sem interferência entre Preço 2 e Preço 3).

**🚀 Principais Benefícios:**

✔ **Agilidade na atualização de preços** em grande escala.

✔ Redução de **erros manuais** com controle segmentado.

✔ Funcionalidade **alinhada ao sistema Desktop**, mantendo consistência.

✔ Ideal para redes com múltiplos produtos e precificação dinâmica.

**💡 Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione a opção de **Produtos** localizado no submenu **PRODUTOS**.

Acesse o utilitário de **Mudança de Preços.**

Aplique os filtros desejados (grupo, subgrupo, markup).

Revise as sugestões e confirme a atualização dos preços.

* * *

### **Filtro por PIX e Carteiras Digitais no Relatório de Cartões**

#### Data de liberação: 05 de junho

📢 O relatório de **Controle de Cartão** ficou ainda mais completo! Agora é possível filtrar **exclusivamente por transações via PIX ou carteiras digitais**, facilitando análises financeiras mais detalhadas.

**🛠 O que foi implementado:**

✅ Inclusão de **filtros específicos para PIX e Carteiras Digitais** no relatório de **Controle de Cartões**.

**🚀 Principais Benefícios:**

✔ **Facilita a conferência** e análise por modalidade de pagamento.

✔ Proporciona **maior controle financeiro** sobre transações eletrônicas.

✔ Atende à crescente demanda por **relatórios mais segmentados**.

**💡 Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Controle de Cartão** localizado no submenu **FINANCEIRO**.

Selecione a **modalidade desejada**: PIX ou Carteiras Digitais.

Gere o relatório com foco exclusivo nessas formas de pagamento.

* * *

### **Filtro por Data de Quitação no Relatório de Vales de Funcionário**

#### Data de liberação: 05 de junho

📢 Agora é possível filtrar os vales de funcionários por **data de quitação** no AppPosto! A funcionalidade já existente no sistema Desktop foi incorporada ao AppPosto, permitindo uma análise mais precisa dos lançamentos realizados.

**🛠 O que foi implementado:**

✅ Adicionado **filtro por data de quitação** no relatório **Vales de Funcionários**.

**🚀 Principais Benefícios:**

✔ Permite **identificar vales quitados** em períodos específicos.

✔ Alinha o AppPosto com o **comportamento do sistema Desktop**.

✔ Melhora a **usabilidade e precisão** dos relatórios gerenciais.

**💡 Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vales de Funcionário** localizado no submenu **COBRANÇA**.

Utilize o **filtro de Consultar por Data ‘Da Quitação’**.

Visualize apenas os lançamentos quitados no período desejado.

* * *

### **Contagem de Estoque com Mais Performance e Sem Limites**

#### Data de liberação: 29 de maio

📢 A funcionalidade de **contagem de estoque foi reformulada** para suportar volumes maiores, com performance otimizada e novas opções de controle!

**🛠 O que foi implementado:**

✅ **Remoção da limitação de itens** na contagem de estoque.

✅ **Sincronização otimizada**, agora feita por **tarefa agendada**, com processamento em lote.

✅ Novo fluxo de contagem:

Eliminação do bloqueio de produtos no PDV.

Obrigatoriedade de **data/hora de início**.

Campo “**Forma de Contagem**”: saldo contado ou diferença

**Cálculo automático** com base no estoque no momento da contagem.

**🚀 Principais Benefícios:**

✔ **Contagens mais rápidas**, mesmo com milhares de itens.

✔ **Processo contínuo e sem interrupções** no PDV.

✔ Redução de falhas e retrabalhos na apuração.

✔ **Mais confiabilidade e agilidade** no controle de estoque.

**💡 Como utilizar:**

Acesse o menu de **Estoque** no sistema.

Escolha a **forma de contagem** desejada.

Inicie a contagem normalmente, informando o estoque, data/hora e os produtos.

Finalize — o sistema processa os dados em lote e atualiza o estoque automaticamente.

* * *

### **Novo Leiaute para Impressão de Relatório no PDV**

#### Data de liberação: 22 de maio

📢 Agora o relatório de **Apontamento das Vendas** pode ser impresso nas **impressoras de cupom**, aumentando a flexibilidade operacional no PDV.

**🛠 O que foi implementado:**

✅ Desenvolvido **novo leiaute de impressão** compatível com as **impressoras não fiscais**.

✅ Disponível diretamente no menu de relatórios do PDV.

**🚀 Principais Benefícios:**

✔ Permite **usar impressoras de cupom**, sem obrigatoriedade de impressora A4.

✔ **Mais agilidade** na emissão de relatórios no ponto de venda.

✔ **Facilita a gestão de vendas e estoques**, mesmo em ambientes mais simples.

**💡 Como utilizar:**

No PDV, acesse o menu de relatórios.

Selecione o relatório **Apontamento das Vendas**.

Escolha a opção de impressão em **Resumida**.

* * *

### **Totalizador Adicionado ao Relatório de Vendas por Combustível e Data**

#### Data de liberação: 15 de maio

📢 O relatório de **Vendas por Combustível e Data** ficou mais completo! Agora você pode visualizar o total consolidado da coluna de Projeção diretamente no relatório.

**🛠 O que foi implementado:**

✅ Adição de um **totalizador automático** no final da coluna **Projeção**, somando os valores exibidos por período.

**🚀 Principais Benefícios:**

✔ **Facilita a análise** de desempenho total por tipo de combustível.

✔ Elimina a necessidade de **cálculos manuais**.

✔ Garante uma **visão consolidada** dos dados com mais clareza e agilidade.

**💡 Como utilizar:**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Vendas por Combustível e Data** localizado no submenu **VENDAS**.

Defina a apresentação que desejar e os filtros para sua análise. O totalizador aparecerá automaticamente ao final da coluna de Projeção.

* * *

### **Nova Aparência das Notificações do Sistema**

#### Data de liberação: 14 de maio

📢 As notificações do sistema foram atualizadas com um visual mais moderno e melhor integração com a interface do App Posto! Com o novo layout, a experiência do usuário foi aprimorada, oferecendo mensagens mais visíveis e harmoniosas com o restante da aplicação.

**🛠 O que foi implementado:**

✅ Reestilização das notificações com **bordas arredondadas**.

✅ Reposicionamento das mensagens para o **lado direito da tela**, acompanhando o fluxo natural da interface.

**🚀 Principais Benefícios:**

✔ Interface mais **moderna, limpa e intuitiva**.

✔ Maior **destaque e visibilidade** para as notificações exibidas.

✔ **Melhor integração visual** com a navegação do sistema.

💡 **Como utilizar:**

Clique no menu de notificações. Agora, com **visual renovado**, ficam mais agradáveis e fáceis de visualizar durante as operações diárias.

* * *

### **Nova Rotina de Quitação com Crédito de Antecipação no App Posto**

#### Data de liberação: 07 de maio

📢 **Agora o App Posto permite quitar faturas utilizando o crédito de antecipação do cliente!**  
Recurso já disponível no sistema Desktop foi incorporado ao App Posto, ampliando a flexibilidade na gestão de convênios e melhorando a conciliação de recebimentos.

🛠 **O que foi implementado:**

*   ✅ Novo botão **"Crédito"** disponível na quitação de faturas, exibido automaticamente quando o cliente possui **saldo de crédito de antecipação**.
    
*   ✅ Ao utilizar o crédito, o sistema gera automaticamente um **tipo de recebimento específico**, vinculado à quitação.
    
*   ✅ Adicionado também um **parâmetro configurável**, que permite definir se o crédito deve ser usado já no momento da **geração da fatura**.
    

🚀 **Principais Benefícios:**

✔ **Alinhamento com o sistema Desktop**, garantindo consistência entre plataformas.

✔ **Mais controle sobre a utilização do crédito antecipado**, com rastreabilidade no financeiro.

✔ **Importação correta do movimento**, melhorando a conciliação contábil e fiscal.

✔ **Ganho de produtividade** na rotina financeira dos convênios.

✔ **Gestão mais flexível**, especialmente útil para postos e empresas que operam com convênios de grande volume.

💡 **Como utilizar:**

Ao quitar uma fatura de convênio, verifique se o cliente possui **crédito disponível**.

Clique no botão **“Crédito”** para aplicar automaticamente o valor.

Caso deseje automatizar o uso do crédito ao gerar faturas, ative o novo parâmetro disponível na geração da mesma.

* * *

### **Inclusão Rápida de Fatura por Código na Nota de Saída**

#### Data de liberação: 05 de maio

📢 **Agora ficou muito mais rápido inserir faturas nas Notas Fiscais de Saída!**  
Foi implementada no **App Posto** uma funcionalidade que permite incluir faturas diretamente **digitando o código**, sem necessidade de múltiplos filtros.

🛠 **O que foi implementado:**

*   ✅ O campo de **Fatura** agora aceita a **digitação direta do código**, com inclusão imediata ao pressionar o botão .
    
*   ✅ Também foi incluído um **campo de busca por código** na tela de “Selecionar Fatura de Convênio”, tornando a localização de faturas ainda mais ágil.
    

🚀 **Principais Benefícios:**

✔ **Velocidade na operação**: insira o código da fatura e adicione com um clique.

✔ **Melhora a fluidez do processo de faturamento** com convênios.

✔ **Reduz erros e retrabalho** ao evitar seleções manuais demoradas.

✔ Traz para o App Posto a mesma praticidade que já existia no sistema Desktop.

💡 **Como utilizar:**

Ao lançar uma **Nota Fiscal de Saída com convênio**, vá até o campo **Fatura**.

**Digite o código da fatura** desejada.

Pressione o botão para vincular automaticamente os dados da fatura a NFe.

Se necessário, use o novo campo de busca por código na tela de seleção.

* * *

### **Atualização de Preço de Venda Direto no Cadastro do Produto**

#### Data de liberação: 30 de abril

📢 **Mais praticidade e agilidade na gestão de preços em múltiplas empresas!**  
Agora é possível **alterar os preços de venda diretamente pela guia Preço/Custo** do cadastro de produtos no AppPosto, da mesma forma como era feito no sistema Desktop.

🛠 **O que foi implementado:**

*   ✅ Nova funcionalidade na guia **Preço/Custo** do cadastro de produtos.
    
*   ✅ Permite **ajustar o preço de venda simultaneamente em diversas empresas**, sem precisar acessar cada uma individualmente.
    

🚀 **Principais Benefícios:**

✔ **Economia de tempo**: atualização de preços de forma centralizada e rápida.

✔ **Ideal para redes com múltiplas filiais/CNPJs**, facilitando o controle padronizado de preços.

✔ **Redução de retrabalho** e **ganho de produtividade** na rotina de gerência de produtos.

✔ **Mais autonomia** para os responsáveis pela precificação, com menos etapas e cliques.

💡 **Como utilizar:**

Acesse o menu de **Cadastro** no sistema.

Selecione a opção **Produtos** localizada no submenu **PRODUTOS**.

Busque o produto que terá o preço atualizado e vá até a guia **Preço/Custos** e clique no botão **Edição Multiempresa**.

Altere os preços de venda desejados diretamente por empresa.

Salve — o novo preço será aplicado conforme configurado para cada unidade.

* * *

### **Centro de Downloads Agora com Suporte Multiempresa**

#### Data de liberação: 30 de abril

📢 **Mais organização, segurança e controle no gerenciamento de arquivos!**  
O **Centro de Downloads** foi atualizado para atender de forma mais eficiente ambientes com múltiplas empresas ou filiais cadastradas no sistema.

🔧 **O que mudou:**

*   ✅ O Centro de Downloads agora opera com **segmentação por empresa**, exibindo somente os arquivos relacionados à empresa atualmente acessada.
    
*   ✅ Cada CNPJ visualiza e gerencia **exclusivamente seus próprios documentos**, mantendo o ambiente organizado e seguro.
    

🚀 **Principais Benefícios:**

✔ **Mais segurança e sigilo** no acesso aos arquivos, evitando visualização cruzada entre empresas.

✔ **Organização aprimorada**, com os documentos separados de forma clara por empresa.

✔ **Experiência otimizada** para grupos empresariais com múltiplos CNPJs, filiais ou unidades operacionais.

✔ Redução de erros no envio, consulta ou download de arquivos em ambientes compartilhados.

💡 **Como utilizar:**

Acesse o menu de **Opções** no sistema.

Selecione a opção **Centro de Downloads** localizada no submenu **ARQUIVOS**.

O sistema já filtra automaticamente os arquivos da empresa ativa na sua sessão.

Gerencie os documentos com mais tranquilidade, sabendo que estão organizados e isolados por CNPJ.

* * *

### **Transferência de Estoque em Lote: Mais Agilidade para sua Rotina**

#### Data de liberação: 23 de abril

📢 **Transferir grandes volumes de produtos ficou muito mais rápido e prático!**  
A tela de **Transferência de Estoque** foi aprimorada para atender melhor empresas com alta movimentação e variedade de itens.

🔧 **O que mudou:**

*   ✅ Agora é possível **selecionar e transferir múltiplos produtos de uma só vez**, sem precisar lançar item por item.
    
*   ✅ Nova visualização em **grade ou listagem por grupo**, facilitando a seleção e organização dos produtos.
    

🚀 **Principais Benefícios:**

✔ **Agilidade nas movimentações de estoque**, reduzindo drasticamente o tempo gasto.

✔ **Mais eficiência para operações em lote**, comuns em empresas com grande variedade de produtos.

✔ **Interface mais amigável e funcional**, que torna a gestão de estoque mais fluida e produtiva.

💡 **Como utilizar:**

Acesse o menu de **Estoque** no sistema.

Selecione a opção **Transferência Estoques** localizada no submenu **MOVIMENTO**.

Indique os estoques de origem e destino e escolha os produtos desejados por grupo ou por listagem.

Na listagem exibida, defina as quantidades que serão transferidas de cada produto de um estoque para o outro.

* * *

### **Alteração Automatizada de CFOP em Notas de Compra**

#### Data de liberação: 23 de abril

📢 **Mais agilidade e precisão no lançamento de notas com múltiplos itens!**  
Agora, ao alterar o CFOP de um item em uma nota de compra, o sistema **sugere automaticamente aplicar o mesmo CFOP a todos os demais itens da nota**, simplificando e acelerando o processo.

🛠 **O que foi implementado:**

*   ✅ Ao editar o CFOP de um item, uma **sugestão automática** será exibida perguntando se deseja replicar o CFOP para os demais itens.
    
*   ✅ Com apenas uma confirmação, **todos os itens são atualizados de forma instantânea**, eliminando a necessidade de alteração manual item por item.
    

🎯 **Principais Benefícios:**

✔ **Agilidade no lançamento** de notas com muitos itens, como em transferências entre matriz e filiais.

✔ **Redução de erros manuais**, garantindo maior segurança nas informações fiscais.

✔ **Padronização e conformidade tributária**, com menor esforço operacional.

✔ **Mais produtividade** para o setor fiscal e contábil.

💡 **Como utilizar:**

Ao lançar uma nota de compra com múltiplos itens:

Edite o CFOP de um dos itens.

O sistema exibirá uma sugestão para aplicar aos demais.

Confirme a aplicação — pronto! Todos os itens estarão com o novo CFOP.

* * *

### **Novo Layout do Relatório Financeiro de Cartões**

#### Data de liberação: 17 de abril

📢 **Mais clareza, precisão e controle nas análises financeiras com cartões!**  
O relatório de **Controle de Cartão - Apresentação por Administradora/Data** foi completamente remodelado para oferecer uma visualização mais eficiente e detalhada das transações realizadas por cartão.

🔧 **O que mudou?**

*   ✅ Novo layout visual: mais organizado, intuitivo e fácil de interpretar.
    
*   ✅ Inclusão de novos campos estratégicos:
    
    *   **Tipo de Operação:** distingue transações **À Vista** ou **Parceladas**.
        
    *   **Taxa Administrativa:** apresenta tanto a **Taxa Contratada** quanto a **Taxa Conciliada**, facilitando a comparação e conferência.
        

💡 **Benefícios para você:**

✔ **Visão mais completa e transparente** das condições financeiras das vendas por cartão.

✔ **Conferência facilitada** das taxas aplicadas pelas administradoras.

✔ **Gestão financeira mais eficiente**, com dados segmentados por administradora e por data.

✔ **Auxílio direto na conciliação de recebíveis**, reduzindo erros e divergências.

✔ **Visualização consolidada das parcelas**, facilitando o entendimento do fluxo financeiro.

✔ **Mais agilidade e precisão** na conferência de valores futuros a receber.

**Como utilizar?**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Controle de Cartão** localizado no submenu **FINANCEIRO**.

Defina a apresentação **Por Adm. - Data** e os filtros para sua análise.

* * *

### **Alerta Automático de Validade de Produtos**

#### Data de liberação: 14 de abril

📢 **Agora ficou mais fácil controlar a validade dos seus produtos!**  
Com a nova melhoria implementada, o sistema passa a emitir **alertas automáticos na Central de Notificações**, avisando sempre que houver produtos com validade próxima ou já vencida.

🔍 **Como funciona:**

*   A funcionalidade utiliza os recursos já existentes no sistema, como:
    
    *   ✅ **Ativação do controle de validade** no cadastro de subgrupos.
        
    *   ✅ **Preenchimento obrigatório da data de validade** no lançamento da nota fiscal.
        
    *   ✅ **Inclusão das permissões NOTIFICAR PRODUTOS PRÓXIMO AO VENCIMENTO** e **NOTIFICAR PRODUTOS VENCIDOS** no perfil de acesso do usuário logado.
        
*   A partir dessas configurações, o sistema identifica automaticamente os produtos e exibe alertas visíveis na Central de Notificações.
    

💡 **Benefícios para você:**

✔ **Monitoramento proativo** do estoque: você é avisado com antecedência sobre vencimentos.

✔ **Redução de perdas**: evite prejuízos com produtos expirados.

✔ **Mais controle no dia a dia**: acompanhe tudo direto da Central de Notificações, sem precisar consultar relatórios.

**Dica de uso:**  
Mantenha o controle de validade ativo no subgrupo e garanta que a data de validade seja sempre preenchida corretamente nas entradas de nota. Assim, o sistema fará o restante por você!

* * *

### **Novo Relatório: Clientes de Vales Inadimplentes**

#### Data de liberação: 11 de abril

Atendendo a uma demanda importante de nossos usuários, especialmente os que migraram da versão Desktop, o sistema agora conta com o **Relatório de Vales Inadimplentes – Apresentação por Cliente**, uma ferramenta essencial para a gestão de crédito e controle da inadimplência.

🔹 **O que há de novo?**

✅ Desenvolvido novo relatório com **apresentação por cliente**, que permite visualizar de forma clara e organizada todos os clientes que possuem vales ou faturas não quitadas.

💡 **Benefícios para você:**

✔ **Facilita o controle de inadimplência**, ajudando a manter a saúde financeira do negócio.

✔ **Apoia a equipe de cobrança**, fornecendo dados consolidados por cliente.

**Como utilizar?**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Clientes de Vales Inadimplentes** localizado no submenu **COBRANÇA**.

Defina os filtros para sua análise e obtenha uma visão consolidada da situação de cada cliente.

* * *

### **Novo Relatório: Relação de Cheques**

#### Data de liberação: 11 de abril

Agora ficou mais fácil acompanhar os cheques lançados no sistema! Atendendo a pedidos de clientes que utilizavam essa funcionalidade no sistema desktop, foi **implementado o Relatório de Controle de Cheques**, com dois modos de visualização:

🔹 **O que há de novo?**

✅ Desenvolvido com base nas funcionalidades do sistema desktop para garantir **familiaridade e facilidade de uso**.

✅ Permite **consultas claras, organizadas e completas** de todos os cheques registrados, com apresentações:

**Resumida:** visão geral e rápida dos cheques lançados.

**Detalhada:** exibe todas as informações por cheque, no modelo já conhecido do sistema anterior.

💡 **Benefícios para você:**

✔ **Controle financeiro mais eficiente** com relatórios específicos.

✔ **Facilidade na conciliação de valores** e auditoria de lançamentos.

✔ **Apoio à transição do sistema desktop para o atual**, sem perder funcionalidades importantes.

**Como utilizar?**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Relação de Cheques** localizado no submenu **FINANCEIRO**.

Defina os filtros para sua análise.

* * *

### **Novo Formato para o Relatório Movimento Diário Sintético**

#### Data de liberação: 27 de março

Agora, o **Relatório Movimento Diário Sintético** oferece **duas opções de exibição** para melhorar a visualização e análise das informações! Escolha entre **modo retrato** ou **modo paisagem**, de acordo com sua necessidade.

🔹 **O que há de novo?**

✅ **Modo Retrato**: Adaptação do layout do Desktop, com menos colunas para uma apresentação mais compacta e objetiva.

✅ **Modo Paisagem**: Mantém a exibição atual, organizando melhor as informações em uma visão mais ampla.

💡 **Benefícios para você:**

✔ **Padronização entre versões**, proporcionando uma experiência unificada no sistema.

✔ **Mais flexibilidade na consulta**, permitindo escolher o formato que melhor se adapta à sua análise.

✔ **Facilidade na visualização dos dados**, otimizando a leitura e interpretação das informações.

* * *

### **Estorno em Lote para Baixa de PIX e Carteira Digital**

#### Data de liberação: 26 de março

Agora ficou muito mais rápido e eficiente realizar **estornos de múltiplas transações**! Com a nova **Fatura de PIX e Carteira Digital**, o processo se tornou mais ágil e organizado, garantindo que os valores sejam conciliados corretamente.

🔹 **O que há de novo?**

✅ **Estorno em lote**: Assim como já ocorre com cartões, agora é possível estornar **várias transações de PIX e Carteira Digital** de uma só vez, por meio da fatura gerada.

✅ **Correção na alocação dos valores**: Os valores recebidos via PIX agora são **direcionados corretamente** para as contas configuradas nas Contas Padrões ou Contas Administradoras.

✅ **Baixa individual mantida**: Para recebimentos com **data de repasse zero**, a baixa individual continua garantindo a **quitação imediata** no PDV e AppPosto.

💡 **Benefícios para você:**

✔ **Maior agilidade** no processamento de estornos, reduzindo retrabalho manual.

✔ **Precisão financeira**, com correção automática da alocação dos valores.

✔ **Facilidade na análise e controle**, além de compatibilidade futura com integração OFX.

* * *

### **Conciliação PIX na Integração com a Statix**

#### Data de liberação: 26 de março

Agora, a conciliação das transações PIX está ainda mais precisa! Com essa melhoria, o sistema passa a garantir o registro correto dos pagamentos via **PIX** dentro do processo de **conciliação de cartões**, trazendo mais confiabilidade e organização financeira.

🔹 **O que há de novo?**

✅ **Conciliação automática do PIX**: Agora, os pagamentos via **PIX** são tratados corretamente como débito, assegurando sua conciliação no sistema.

✅ **Filtro de empresa otimizado**: O sistema agora **carrega automaticamente** a empresa logada ao atualizar a tela, tornando a navegação mais ágil.

✅ **Ordenação das contas bancárias por ID**: A lista de contas foi organizada para facilitar a consulta e seleção.

💡 **Benefícios para você:**

✔ **Maior precisão nos registros financeiros**, eliminando inconsistências na conciliação do PIX.

✔ **Melhoria na usabilidade**, agilizando o processo com carregamento automático da empresa.

✔ **Organização otimizada**, facilitando a consulta das contas bancárias no sistema.

* * *

### **Novo Relatório: Listagem de Produtos**

#### Data de liberação: 24 de março

Agora, ficou ainda mais fácil gerenciar e analisar seus produtos! O novo **Relatório de Listagem de Produtos** permite segmentar e visualizar os itens de forma organizada, com filtros detalhados para uma análise mais estratégica.

🔹 **O que há de novo?**

✅ **Nova filtragem avançada**: Agora, você pode listar produtos por **grupo, situação, margem, composição, fornecedor e outros critérios**.

✅ **Maior flexibilidade na consulta**: Escolha a forma de exibição que melhor atende sua necessidade: **tela interativa, PDF ou Excel**.

✅ **Busca e navegação otimizadas**: Encontre rapidamente os produtos desejados sem a necessidade de gerar relatórios extensos.

💡 **Benefícios para você:**

✔ **Mais eficiência na gestão de produtos**, com visualizações personalizadas.

✔ **Maior controle sobre estoque e precificação**, auxiliando na tomada de decisões.

✔ **Consultas mais ágeis e organizadas**, otimizando a análise e planejamento do seu negócio.

**Como utilizar?**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Produtos** localizado no submenu **LISTAGEM**.

Defina os filtros para sua análise.

* * *

### **Valores de Estoque agora inclusos no Relatório de Apuração Patrimonial**

#### Data de liberação: 14 de março

O seu controle patrimonial ficou ainda mais preciso! Agora, o **Relatório de Apuração Patrimonial** considera os valores de **estoque** no cálculo do disponível, proporcionando uma visão mais completa dos ativos da empresa.

*   🔹 **O que há de novo?**
    
    *   ✅ **Inclusão do estoque no grupo do disponível**: Agora, o relatório reflete com mais precisão o total de ativos da empresa.
        
    *   ✅ **Cálculo mais detalhado**: Os valores de estoque passam a compor o saldo disponível, melhorando a transparência financeira.
        
*   💡 **Benefícios para você:**
    
    *   ✔ **Maior precisão na análise patrimonial**, garantindo cálculos mais confiáveis.
        
    *   ✔ **Visão completa dos ativos da empresa**, facilitando o planejamento financeiro.
        
    *   ✔ **Melhoria na tomada de decisão**, com informações mais detalhadas e estratégicas.
        

* * *

### **Novo Relatório de Faturas de Cartões no AppPosto**

#### Data de liberação: 14 de março

Agora, o controle financeiro no **AppPosto** ficou ainda mais completo! O **Relatório de Faturas de Cartões** foi implementado, permitindo que você consulte as faturas e seus respectivos cartões diretamente pelo aplicativo.

🔹 **O que há de novo?**

✅ **Nova funcionalidade no AppPosto**: Consulte as faturas de cartões de forma rápida e prática.

✅ **Maior controle financeiro**: Visualize os cartões vinculados às faturas, facilitando o acompanhamento dos pagamentos.

💡 **Benefícios para você:**

✔ **Mais praticidade** para acompanhar faturas diretamente pelo AppPosto.

✔ **Melhor controle financeiro**, garantindo mais transparência na gestão.

**Como utilizar?**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Faturas de Cartões** localizado no submenu **FINANCEIRO**.

Defina o período e o tipo de data a ser consultado, ou simplesmente o código da fatura gerada e consulte.

* * *

### **Novo Atalho para o Relatório de Transferência de Estoque**

#### Data de liberação: 5 de março

Agora ficou muito mais fácil acessar as informações detalhadas das transferências de estoque! Com um simples clique, você pode abrir o **relatório de transferência de estoque** diretamente da tela de transferência, já filtrado para a movimentação selecionada.

🔹 **O que há de novo?**

✅ **Novo botão de atalho**: Agora, ao realizar uma transferência de estoque, você pode acessar rapidamente o relatório correspondente.

✅ **Filtro automático**: O relatório será aberto já filtrado para a transferência específica, eliminando a necessidade de buscas manuais.

💡 **Benefícios para você:**

✔ **Mais rapidez** na conferência e validação das transferências.

✔ **Menos cliques e mais eficiência**, otimizando seu tempo.

✔ **Experiência mais intuitiva**, tornando a navegação no sistema ainda mais prática.

**Como utilizar?**

Acesse o menu de **Estoque** no sistema.

Selecione a opção de **Transferências Estoque**.

Localize a transferência realizada e no botão .

Na tela apresentada, clique no botão para ser direcionado ao relatório referente a transferência selecionada.

* * *

### **Inclusão da Forma de Pagamento ‘Cheque’ na Quitação de Faturas de Convênio**

#### Data de liberação: 5 de março

Agora, o sistema está ainda mais completo e flexível! A opção de pagamento por **Cheque** foi adicionada na quitação de faturas de convênio, garantindo maior comodidade e adaptabilidade para sua operação.

🔹 **O que há de novo?**

✅ **Nova opção de pagamento**: Agora, é possível quitar faturas de convênio utilizando **cheques**, assim como já ocorre com outras formas de pagamento.

✅ **Integração automática com o Caixa Gerencial**: Ao selecionar cheque como forma de pagamento, o sistema incluirá automaticamente no **Caixa Gerencial** para registrar a baixa da fatura.

✅ **Disponível também para antecipação**: A funcionalidade foi implementada tanto para a **quitação normal** quanto para o pagamento **antecipado** da fatura.

💡 **Benefícios para você:**

✔ **Mais flexibilidade** na gestão de pagamentos de convênios.

✔ **Facilidade e controle** com a integração direta ao Caixa Gerencial.

✔ **Processo mais eficiente e completo**, alinhado às demais formas de pagamento já disponíveis.

* * *

### **Apresentações Analítica, Somente o Acumulado e Analítico Consolidado no Relatório de Extrato de Caixa**

#### Data de liberação: 5 de março

Agora o **Relatório Extrato do Caixa** está mais completo e flexível, oferecendo **três novos formatos de apresentação** para que você possa analisar as movimentações financeiras da forma mais adequada à sua necessidade.

🔹 **O que há de novo?**

✅ **Analítico:** Visualize todas as transações detalhadamente para um controle minucioso.

✅ **Somente o Acumulado:** Acompanhe apenas os totais consolidados para uma visão mais direta.

✅ **Analítico Consolidado:** Combine detalhes das movimentações com os valores acumulados para uma análise equilibrada.

💡 **Benefícios para você:**

✔ **Mais flexibilidade** na análise das movimentações financeiras.

✔ **Visualização personalizada** conforme sua necessidade e nível de detalhe desejado.

✔ **Maior eficiência** na tomada de decisão, com acesso a informações estruturadas e organizadas.

**Como utilizar?**

Acesse o menu de **Relatórios** no sistema.

Selecione o relatório de **Extrato no Caixa** localizado no submenu **OPERACIONAL**.

Defina a apresentação desejada para obter as informações no formato ideal para sua análise.

Defina o período desejado e consulte.

**Apresentação Analítica**

**Apresentação Somente o Acumulado**

**Apresentação Analítico Consolidado**

* * *

### **Novo Dashboard: Dashboard Financeiro - Vendas**

#### Data de liberação: 3 de fevereiro

Agora o sistema conta com um novo **Dashboard: O Dashboard Financeiro de Vendas**! Com novos filtros e recursos personalizáveis, você tem uma análise mais precisa e flexível para otimizar sua gestão financeira.

🔹 **O que há de novo?**

✅ **Mais filtros para personalização:** Escolha métricas como Faturamento Diário, Vendas por Funcionário, Fidelização (%), Itens por Cupom e Descontos Aplicados.

✅ **Análises comparativas avançadas:** Compare períodos e empresas com mais facilidade.

✅ **Visualização adaptável:** Organize e ordene os filtros conforme sua necessidade.

✅ **Tomada de decisão estratégica:** Identifique tendências de crescimento e desempenho da equipe com maior precisão.

💡 **Benefícios para você:**

✔ Identifique padrões de venda e oportunidades de melhoria rapidamente.

✔ Tenha mais controle sobre a performance financeira da empresa.

✔ Personalize sua análise de acordo com seu perfil e necessidade.

**Como Utilizar**

Acesse o menu de **Dashboard** no sistema.

Selecione o **Dashboard de Vendas** localizado no menu lateral.

Defina os filtros e indicadores para sua análise.

* * *

### **Novo Relatório: Transferência Entre Estoques**

#### Data de liberação: 31 de janeiro

O sistema agora oferece o **Relatório de Transferência de Estoque**, que permite que os usuários visualizem de forma detalhada todas as movimentações de produtos entre os diferentes estoques da loja. Isso inclui informações como data da transferência, produtos movimentados, quantidades, estoque de origem e estoque de destino. A solução foi desenvolvida para oferecer transparência e controle sobre essas operações, que antes eram difíceis de rastrear.

**💡 Benefícios para você:**

✔ **Maior Controle:** O relatório oferece uma visão clara e detalhada de todas as transferências de produtos entre estoques, permitindo um controle mais rigoroso sobre esses processos.

✔ **Facilidade na Auditoria:** Com a nova ferramenta, as auditorias de estoque se tornam mais ágeis, permitindo a verificação detalhada das movimentações e garantindo maior precisão nas contagens e na gestão de inventário.

✔ **Gestão de Estoque Eficiente:** Para lojas com múltiplos pontos de armazenamento, a gestão de estoque se torna mais simples, pois o relatório centraliza e organiza as informações de forma prática e acessível.

**Como Utilizar**

Acesse o menu de **Relatórios** no sistema.

Selecione o **Relatório de Transferência entre Estoques** localizado no submenu **ESTOQUE**.

Escolha o tipo de apresentação e o período para visualizar as informações de forma clara e organizada.

* * *

### **Novo Relatório: Apuração Patrimonial**

#### Data de liberação: 28 de janeiro

O sistema agora oferece o **Relatório de Apuração Patrimonial**, uma ferramenta completa para análise financeira e patrimonial do seu negócio, ideal para uma gestão mais estratégica e informada.

**🔹 O que há de novo?**

O relatório apresenta uma visão abrangente das principais informações financeiras e patrimoniais:

✅ **Desempenho Operacional:** Quantidade vendida, faturamento bruto, CMV (Custo das Mercadorias Vendidas), lucro e participação do lucro por categorias (Combustíveis e Diversos).

✅ **Indicadores Financeiros:** Indicadores que ajudam a avaliar a **saúde financeira da empresa**, sua capacidade de pagar dívidas e sua necessidade de capital. Eles são fundamentais para análise de crédito, planejamento financeiro e tomada de decisões estratégicas.

✅ **DRE:** Apresenta uma DRE resumida para fácil identificação de valores de Faturamento, Despesas e Lucro.

✅ **Ativo e Passivo:** Informações diárias sobre os saldos das contas de banco, dinheiro, inventário _(a ser liberado)_, valores a receber (ticket, convênio, cartões) e valores a pagar, com cálculo da variação entre os períodos.

**💡 Benefícios para você:**

✔ **Melhoria na Tomada de Decisão:** Analise o desempenho operacional e financeiro com dados organizados.

✔ **Transparência:** Tenha uma visão clara de receitas, despesas, ativos e passivos.

✔ **Eficiência:** Consolide todas as informações em um único relatório, eliminando a necessidade de múltiplas consultas.

✔ **Comparação de Períodos:** Identifique tendências e variações ao longo do tempo para ajustar estratégias.

**Como Utilizar**

Acesse o menu de **Relatórios** no sistema.

Selecione o **Relatório de Apuração Patrimonial** localizado no submenu **FINANCEIRO**.

Escolha o período desejado e o período de comparação para visualizar as informações de forma clara e organizada.

Utilize o relatório para identificar oportunidades de melhoria, acompanhar o crescimento do seu negócio e tomar decisões mais informadas.

* * *

### **Novo Relatório: Vendas por Combustível e Data**

#### Data de liberação: 17 de janeiro

Agora o sistema conta com o **Relatório de Vendas por Combustível e Data**, uma ferramenta poderosa para análise detalhada de vendas de combustíveis.

#### **Principais Informações Exibidas:**

O relatório oferece **três formas de apresentação**, adaptando-se às necessidades do seu negócio:

1.  **Vendas Diárias:** Quantidades e valores vendidos de cada combustível detalhados por dia no período selecionado.
    
2.  **Vendas por Dia da Semana:** Identifique padrões de vendas ao longo dos dias da semana.
    
3.  **Venda Diária por Tanque:** Controle detalhado com informações organizadas por tanque.
    

Além disso, o relatório inclui:

*   **Resumo Geral:** Média de vendas e projeção de volumes futuros com base no desempenho do período analisado.
    
*   **Visualização Multiempresa:** Acompanhe dados de todas as empresas do grupo em um único lugar.
    

#### **Benefícios da Nova Funcionalidade:**

*   **Melhor Planejamento:** Use as projeções para gerenciar estoques de forma mais eficiente.
    
*   **Identificação de Padrões:** Analise tendências e tome decisões estratégicas com base nos dias da semana e nos volumes vendidos.
    
*   **Controle Avançado:** Monitore o desempenho de cada tanque para otimizar a operação e identificar oportunidades de melhoria.
    
*   **Gestão Centralizada:** Visualize dados de múltiplas empresas para facilitar análises corporativas.
    

**Como Utilizar:**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Vendas por Combustível e Data** localizado no submenu **VENDAS**.
    
3.  Escolha entre as três opções de apresentação e consulte:
    

Essa funcionalidade já está disponível no sistema! Aproveite para acessar e explorar todas as possibilidades.

* * *

### **Novo Relatório: Apuração de Resultado**

#### Data de liberação: 03 de janeiro

O sistema agora oferece o **Relatório de Apuração de Resultados**, uma ferramenta completa para análise financeira e operacional do seu negócio, ideal para uma gestão mais estratégica e informada.

#### **O que há de novo?**

O relatório apresenta uma visão abrangente das principais informações financeiras e operacionais:

*   **Estoque no Período:** Quantidade e valor total de estoques.
    
*   **Compras e Vendas:** Detalhamento por grupo das transações realizadas.
    
*   **Contas a Pagar e a Receber:** Controle sobre valores a receber de clientes e pagamentos realizados ou pendentes para fornecedores.
    
*   **Movimentações Financeiras:** Saldo das contas no Livro Caixa, recebimentos de clientes e despesas do período.
    
*   **Resultado Geral:** Inclui descontos, acréscimos e o resultado líquido do período.
    

O relatório está disponível em **três formatos**, ajustando-se às suas necessidades:

1.  **Apuração Simples:** Resumo claro e objetivo.
    
2.  **Apuração Detalhada:** Informações completas e minuciosas.
    
3.  **Resumido por Centro de Resultado:** Organização consolidada por centros de resultado, ideal para análises específicas.
    

#### **Benefícios:**

*   **Gestão Integrada:** Acompanhe todas as áreas financeiras e operacionais em um único relatório.
    
*   **Decisões Estratégicas:** Utilize os resultados detalhados para identificar oportunidades de crescimento e áreas de ajuste.
    
*   **Visão Clara e Detalhada:** Escolha o nível de detalhamento que melhor se adequa às suas análises.
    

**Como Utilizar:**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Apuração de Resultados** localizado no submenu **FINANCEIRO**.
    
3.  Escolha entre as três opções de apresentação e consulte:
    

Essa funcionalidade já está disponível no sistema! Acesse o relatório de apuração de resultados e aproveite para otimizar a gestão do seu negócio.

* * *

### **Novo Relatório: Prestação de Contas**

#### Data de liberação: 24 de dezembro

Agora o sistema conta com o **Relatório de Prestação de Contas**. Esta atualização torna mais fácil e acessível para os operadores gerenciais conferirem os caixas de vendas.

**Benefícios da Nova Funcionalidade:**

*   **Centralização das informações:** Todos os dados relevantes estão reunidos em um único relatório, facilitando análises gerenciais.
    
*   **Flexibilidade e personalização:** Escolha a forma de apresentação que melhor atende às suas necessidades operacionais.
    
*   **Ambiente multiempresa:** Permite a seleção de mais de uma empresa ao mesmo tempo para gerar o relatório.
    

**Como Utilizar:**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Prestação de Contas** localizado no submenu **OPERACIONAL**.
    
3.  Escolha entre as três opções de apresentação e consulte:
    
    *   **Operadores e Resumo**: visão detalhada das movimentações por operador e o resumo consolidado.
        
    *   **Somente Resumo**: foco no resumo geral das movimentações.
        
    *   **Somente Operadores**: detalhes individuais por operador.
        

Essa atualização é mais um passo na evolução do sistema para tornar sua gestão ainda mais eficiente! 🎉

* * *

### **Novo Relatório: Resumo de Apontamento de Contagem**

#### Data de liberação: 10 de dezembro

Agora o sistema conta com um **Relatório de Apontamento de Contagem**. Esse relatório exibe informações detalhadas sobre os produtos cadastrados no estoque e inclui colunas dedicadas para o preenchimento manual das quantidades contadas.

#### **Como o relatório funciona?**

*   Lista os produtos organizados por seus respectivos estoques.
    
*   Disponibiliza campos específicos para observações ou ajustes durante o processo de conferência.
    

#### **Benefícios da nova funcionalidade:**

*   **Otimização do inventário:** Facilita o processo de contagem física, com uma apresentação clara e estruturada que ajuda a evitar erros.
    
*   **Maior organização:** Garante uma visão detalhada e por estoque, permitindo que equipes trabalhem com maior eficiência.
    
*   **Praticidade:** Ideal para quem realiza a contagem diretamente no estoque, fornecendo um suporte prático e intuitivo para registrar as informações.
    
*   **Confiabilidade:** Melhora a qualidade dos dados registrados, reduzindo inconsistências entre o estoque físico e o sistema.
    

#### **Como utilizar**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Apontamento de Contagens** localizado no submenu **FORMULÁRIOS**.
    
3.  Defina os filtros que preferir e consulte:
    

Essa melhoria foi projetada para tornar o controle de estoque mais eficiente e confiável. Aproveite e otimize o processo de inventário da sua empresa! 🚀

* * *

### **Novo Relatório: Resumo de Vendas por Cliente**

#### Data de liberação: 26 de novembro

Agora disponível no sistema um relatório completo e resumido que oferece uma visão estratégica sobre as vendas realizadas por cliente. Essa novidade facilita a análise do comportamento dos clientes e a rentabilidade gerada.

#### **Principais Informações Exibidas:**

*   **Frequência de Compras**: Quantidade de vezes que o cliente realizou compras no período.
    
*   **Quantidade Vendida**: Total de itens adquiridos por cliente.
    
*   **Valor Bruto, Descontos e Acréscimos**: Resumo financeiro antes e após ajustes.
    
*   **Valor Líquido**: Valor efetivo recebido após descontos e acréscimos.
    
*   **Custo e Lucro**: Indicadores essenciais para avaliar a rentabilidade por cliente.
    
*   **Ticket Médio**: Valor médio gasto em cada compra.
    

#### **Diferenciais do Relatório:**

1.  **Detalhamento de Vendas**: Visualize os produtos vendidos, suas quantidades e valores para cada cliente.
    
2.  **Filtro de Movimentação**: Concentre-se nos clientes que tiveram compras no período selecionado.
    

#### **Benefícios da Nova Funcionalidade:**

*   **Análise Estratégica**: Identifique os clientes mais ativos e rentáveis, ajudando na segmentação e no foco comercial.
    
*   **Gestão Personalizada**: Desenvolva campanhas e promoções baseadas nos hábitos de compra dos clientes.
    
*   **Acompanhamento Simplificado**: Obtenha insights claros e rápidos sobre o desempenho do seu público.
    

#### **Como Utilizar**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Vendas por Cliente e Grupo** localizado no submenu **VENDAS**.
    
3.  Defina o período desejado e consulte:
    

Aproveite essa nova funcionalidade para entender melhor seus clientes e impulsionar as vendas! 🎯

* * *

### **Apresentação de Vendas por Produto e Finalizadora Resumido no Relatório de Vendas e Rentabilidade**

#### Data de liberação: 26 de novembro

Agora, o sistema conta com uma nova apresentação no **Relatório de Vendas e Rentabilidade**, oferecendo uma visão clara e objetiva das vendas por produto, destacando as formas de pagamento utilizadas.

#### **Principais Informações Exibidas:**

*   **Quantidade Vendida por Produto**: Detalhamento por preço e forma de pagamento.
    
*   **Acréscimos, Descontos e Faturamento Líquido**: Resumo financeiro por produto.
    
*   **Percentual de Recebimento por Forma de Pagamento**: Composição clara do fluxo de recebimentos.
    

#### **Benefícios da Nova Funcionalidade:**

1.  **Facilidade na Análise Gerencial**: Ideal para gestores acompanharem rapidamente o desempenho de produtos e a preferência dos clientes em métodos de pagamento.
    
2.  **Tomada de Decisão Estratégica**: Identifique tendências de consumo e otimize políticas de preços e descontos.
    
3.  **Agilidade nas Consultas**: Um formato direto e resumido, perfeito para relatórios rápidos e apresentações de resultados.
    

#### **Como Utilizar**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Vendas e Rentabilidade** localizado no submenu **VENDAS**.
    
3.  Defina a apresentação como **Por Produto e Finalizadora - Resumido**.
    
4.  Defina o período desejado e consulte.
    

Acesse agora e aproveite a nova funcionalidade para aprimorar seu acompanhamento de vendas! 🚀

* * *

### **Apresentação de Vendas e Perdas por Tanque no Relatório de Saldos por Tanque**

#### Data de liberação: 21 de novembro

Agora, o sistema conta com uma nova apresentação no **Relatório de Saldos por Tanque**, essencial para o acompanhamento diário do desempenho dos tanques em toda a rede de postos.

#### **Benefícios da Nova Funcionalidade**

*   **Monitoramento Detalhado**: Controle completo do volume vendido e das perdas/sobras de combustível por tanque.
    
*   **Análise Centralizada**: Visão consolidada das operações em todos os postos da rede, com totalizações por tipo de combustível.
    
*   **Redução de Perdas**: Identificação rápida de discrepâncias para ações corretivas imediatas.
    
*   **Planejamento Estratégico**: Dados precisos para ajustar estoques e melhorar a eficiência operacional.
    

#### **Como Utilizar**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Saldos por Tanque** localizado no submenu **ESTOQUE**.
    
3.  Defina o filtro de empresa para **TODOS** e a apresentação como **Vendas e Perdas por Tanque**.
    
4.  Defina o período desejado e consulte:
    
    *   **Volume Vendido**: Total de combustível comercializado por tanque.
        
    *   **Perca/Volume**: Diferença entre volume escritural e real.
        
    *   **Perda (%)**: Percentual calculado para facilitar comparações.
        
    *   **Valor da Perda**: Custos associados às perdas.
        
5.  Visualize o **Resumo Final**, com a totalização por tipo de combustível, para uma visão geral.
    

Otimize a gestão do seu combustível com mais precisão e eficiência! 🚀

* * *

### **Apresentação Multiempresa no Relatório de Contas a Pagar**

#### Data de liberação: 13 de novembro

Agora o sistema conta com uma nova apresentação no **Relatório de Contas a Pagar** exclusivo para redes de postos, proporcionando uma visão centralizada de todas as empresas do grupo.

#### **Benefícios da Nova Funcionalidade**

*   **Gestão Financeira Centralizada**: Consolida as informações financeiras de todas as empresas da rede em um único relatório.
    
*   **Identificação Rápida de Contas em Atraso**: Destaque automático para contas vencidas, permitindo ações mais ágeis.
    
*   **Detalhamento Completo**: Possibilidade de analisar cada conta a pagar individualmente para maior controle.
    
*   **Facilidade na Tomada de Decisões**: Com os dados organizados e acessíveis, fica mais fácil planejar pagamentos e evitar inadimplências.
    

#### **Como Utilizar**

1.  Acesse o menu de **Relatórios** no sistema.
    
2.  Selecione o relatório de **Contas a Pagar** localizado no submenu **FINANCEIRO**.
    
3.  Defina o filtro de empresa para **TODOS** e a apresentação como **Por Empresa - A Pagar**.
    
4.  Defina o período desejado e consulte para uma visão geral das contas abertas e vencidas.
    
5.  Explore o **Detalhamento** para analisar cada conta individualmente.
    

Mantenha o controle financeiro da sua rede com ainda mais eficiência! 🎯

* * *