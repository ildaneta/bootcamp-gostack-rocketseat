import React from 'react';
import faceLogo from '../../assets/facebook-logo.png';
import avatar from '../../assets/avatar-logo.jpg';

import { Header, Container } from './style';

export default function mainHeader() {
  return (
    <Header>
      <Container>
        <div className="face-logo">
          <img src={faceLogo} alt="logo do facebook" />
        </div>

        <div className="perfil">
          <span>Meu perfil </span>
          <img src={avatar} alt="avatar do usuário logado" />
        </div>
      </Container>
    </Header>
  );
}
