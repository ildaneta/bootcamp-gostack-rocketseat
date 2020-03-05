import React from 'react';
import { GithubAlt } from '@styled-icons/fa-brands/GithubAlt';
import { Plus } from '@styled-icons/fa-solid/Plus';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <GithubAlt size={30} />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButton disabled>
          <Plus color="#FFF" size={15} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
