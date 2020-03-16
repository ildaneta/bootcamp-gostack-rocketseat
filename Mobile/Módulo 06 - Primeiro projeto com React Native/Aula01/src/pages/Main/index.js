import React from 'react';
import {View} from 'react-native';

import {Container, Form, Input} from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
      </Form>
    </Container>
  );
}

// This is for change the name of the navigation bar
Main.navigationOptions = {
  title: 'Usuários',
};
