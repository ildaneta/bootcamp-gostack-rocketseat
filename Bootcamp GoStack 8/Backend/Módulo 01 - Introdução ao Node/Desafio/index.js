const express = require('express');

const server = express();

server.use(express.json());

// Middleware global que exibe quantas requisições foram  realizadas
server.use((req, res, next) => {
  console.count('Requisições realizadas');

  return next();
});

// Middleware que verifica se o id de projeto digitado existe
function checkIdExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(proj => proj.id == id);

  if (!project) {
    return res.status(400).json({ error: `This project doesn't exists!` });
  }

  return next();
}

const projects = [];

// Exibindo todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Criando novos projetos
server.post('/projects/', (req, res) => {
  const { id, title } = req.body;

  project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

// Realizando a alteração de projetos
server.put('/projects/:id', checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(projeto => {
    return projeto.id == id;
  });

  project.title = title;

  return res.json(project);
});

// Deletar projetos
server.delete('/projects/:id', checkIdExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(projeto => {
    return projeto.id == id;
  });

  // deletando o objeto que possui o index passado por parâmetro
  projects.splice(index, 1);

  return res.json(projects);
});

// Adicionando novas tasks em um projeto específico
server.post('/projects/:id/:title', checkIdExists, (req, res) => {
  const { id, title } = req.params;

  const project = projects.find(projeto => {
    return projeto.id == id;
  });

  project.tasks.push(title);

  return res.json(projects);
});

server.listen(4000);
