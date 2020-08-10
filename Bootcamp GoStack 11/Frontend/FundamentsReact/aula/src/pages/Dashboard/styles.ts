import styled from 'styled-components';
import { shade } from 'polished';

interface IFormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;
`;

export const Form = styled.form<IFormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  border: ${props => (props.hasError ? '3px solid #c53030' : '3px solid #fff')};
  border-radius: 5px;

  input {
    flex: 1;
    padding: 0 24px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    font-size: 18px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  input,
  button {
    height: 70px;
    border: 0;
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a + a {
    margin-top: 16px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
