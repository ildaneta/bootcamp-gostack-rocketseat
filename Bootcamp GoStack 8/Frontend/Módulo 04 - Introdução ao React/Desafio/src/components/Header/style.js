import styled from 'styled-components';

export const Header = styled.header`
  background: #db7093;
  height: 58px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .face-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 30px;

    img {
      height: 24px;
    }
  }

  .perfil {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 30px;

    img {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      margin-left: 10px;
    }

    span {
      font-size: 14.5px;
      color: #fff;
      font-weight: bold;
    }
  }
`;
