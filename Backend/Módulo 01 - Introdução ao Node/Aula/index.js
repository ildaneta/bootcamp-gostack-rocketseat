// importando uma dependência
const express = require('express');

// criando um servidor
const server = express();

// utilizando o módulo para que o express entenda JSON como request body
server.use(express.json());

const users = ['Ilda', 'Vinícius', 'Amanda', 'Juan'];

server.use((req, res, next) => {
  console.time('Tempo');
  console.log(`Método: ${req.method} \nURL: ${req.url}`);

  next();

  console.timeEnd('Tempo');
});

// Middleware que checa se o request body name foi enviado pois é obrigatório
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User name is required!' });
  }

  return next();
}

// Middleware que verifica se a posição passada por parâmetro existe
function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res.status(400).json({ error: 'User does not exists!' });
  }
}

// rota que mostra todos os usuários
server.get('/users', (req, res) => {
  return res.json(users);
});

// rota que mostra um usuário com base no index passado como route param
server.get('/users/:index', checkUserInArray, (req, res) => {
  const index = req.params.index;

  return res.json(users[index]);
});

// criação de um novo usuário
server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

// rota para edição de usuários
server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) => {
  const { name } = req.body;
  const { index } = req.params;

  // o usuário na posição n receberá o novo valor de name
  users[index] = name;

  return res.json(users);
});

// rota para exclusão de usuários
server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

// servidor está escutando uma porta
server.listen(3000);
