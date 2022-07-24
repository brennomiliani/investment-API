# Desafio-Técnico-BackEnd

# Contexto
Este projeto trata-se de uma ferramenta backEnd para que clientes de uma corretora possam realizar compra e venda de ativos.

## Tecnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, Sequelize ORM, MYSQL, Joi, dotenv

Testes
> Testado usando: mocha, chai, sinon, sequelize-test-helpers

## Executando aplicação

Após clonar o repositório, é necessário decidir se irá executar localmente ou com docker, o que é mais recomendado por evitar problemas de incompatibilidade de sistemas e versões.

<details>
  <summary><strong>Rodando no Docker vs Localmente</strong></summary><br />

  ## Com Docker (recomendado)

  > Acessar o diretório onde o repositório foi clonado e iniciar os containers utilizando o comando `docker-compose up -d`.

  > Utilizar o comando `docker exec -it stocks_trade_api bash`.
  - Ele dará acesso ao terminal interativo do container rodando o nodeJS.

  > Instalar as dependências com `npm install`

  > Iniciar o banco de dados com `npm run db:start`

  > Finalmente rodar a aplicação com  `npm start`

  ---

  ## Sem Docker

  > Instalar as dependências com `npm install`

  > Alterar as informações de login do seu usuário MySQL Server dentro do arquivo .env

  > Iniciar o banco de dados com `npm run db:start`

  > Finalmente rodar a aplicação com  `npm start`
  
  <br/>
</details>

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```

## Rotas

  > Com o projeto sendo executado é possível acessar a rota do swagger /docs para verificar o que é esperado de cada rota

  ![image routes](https://github.com/brennomiliani/Desafio-Tecnico-BackEnd/blob/dev/.public/swaggerRoutes.png)
