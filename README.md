# EngageSphere API | Testes Automatizados com Cypress

Projeto prático de automação de testes de API desenvolvido durante meus estudos no curso **Testes Automatizados e IA Generativa**, do Talking About Testing.

O projeto utiliza IA generativa como apoio à elaboração e ao refinamento de cenários de teste, com implementação e validação prática utilizando Cypress e JavaScript.

## Objetivo

Automatizar verificações do endpoint REST `GET /customers` da API EngageSphere, incluindo cenários positivos e negativos.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Swagger / OpenAPI
- Visual Studio Code
- IA generativa como ferramenta de apoio aos estudos

## Testes implementados

**1. Consulta de clientes com sucesso**

Verifica se:
- A resposta apresenta status HTTP 200.
- O campo `customers` é uma lista (array).
- A lista contém no máximo 10 clientes.
- A página atual é igual a 1.

**2. Consulta com página inválida**

Envia uma requisição com `page=0` e verifica se:
- A API retorna status HTTP 400.
- A resposta contém a propriedade `error`.

## Resultado da execução

Os dois cenários foram executados localmente utilizando Cypress.

**Resultado: 2 passing | 0 failing.**

## Arquivos do projeto

O código dos dois cenários está disponível no arquivo `cypress/e2e/customers.cy.js`.


O repositório já inclui os arquivos `cypress.config.js` e `package.json`. As instruções completas para preparar o servidor local e executar os testes serão detalhadas nas próximas atualizações.

## Créditos

Projeto desenvolvido a partir do material prático do curso **Testes Automatizados e IA Generativa — Talking About Testing**.

[Consultar repositório-base do curso](https://github.com/wlsf82/curso-testes-automatizados-e-ia-generativa).

**Implementação dos testes apresentados e documentação:** Renata Meirelles da Silva.
