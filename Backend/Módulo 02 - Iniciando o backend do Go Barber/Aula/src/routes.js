import { Router } from 'express';

const routes = new Router();

routes.get('/', (_, res) => {
  return res.json({ message: 'Oláaaa' });
});

export default routes;
