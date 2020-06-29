import express from 'express';
import { uuid, isUuid } from 'uuidv4';

const routes = express.Router();

const projects = [];

// será disparado automaticamente em todas as rotas
function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}: ${url}]`;

  console.log(logLabel);

  return next();
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID!' });
  }

  return next();
}

routes.use(logRequests);
routes.use('/projects/:id', validateProjectId);

routes.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.json(results);
});

routes.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

routes.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  // index(project) not found
  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found!' });
  }

  const project = {
    id,
    title,
    owner,
  };

  // inserting project in projects
  projects[projectIndex] = project;

  return response.json(project);
});

routes.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found!' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

export default routes;
