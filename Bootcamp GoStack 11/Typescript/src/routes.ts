import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Ilda',
    email: 'ildaneta@dev.com',
    password: 'senha123',
    techs: [
      'React Native, NodeJS, ReactJS',
      {
        title: 'ReactJS',
        experience: 200,
      },
    ],
  });

  return response.json({ message: 'Hello World!' });
}
