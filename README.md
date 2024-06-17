<h1>User Registration API</h1>

<strong>Esta documentação descreve o funcionamento de uma API de cadastro de usuários utilizando Node.js e Sequelize.</strong>

Descrição
A API de cadastro de usuários permite criar, ler, atualizar e deletar (CRUD) informações de usuários em um banco de dados. Ela é construída usando Node.js para o backend e Sequelize como ORM (Object-Relational Mapping) para interagir com o banco de dados.

Tecnologias Utilizadas: <br>
-Node.js <br>
-Express.js <br>
-Sequelize <br>
-MySQL <br>
-Insomnia(para testar a API)

<h1>Validação de E-mail em Hooks do Sequelize</h1>
<br>
Contexto: <br>
Quando estamos lidando com a criação de novos registros de usuários, é comum precisar garantir que certos campos, como o e-mail, sejam únicos. O hook beforeCreate do Sequelize para verificar se o endereço de e-mail já está em uso antes de permitir a criação de um novo registro de usuário.
