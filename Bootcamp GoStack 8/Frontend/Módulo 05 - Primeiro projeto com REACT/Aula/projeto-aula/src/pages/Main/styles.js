import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? 'red' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',

  // when the loading property is true, the disabled props will also be true
  disabled: props.loading
}))`
  background: #f78080;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;
  padding-left: 0;
  color: #d66262;
  font-size: 15px;
  letter-spacing: 0.6px;

  li {
    background: #f4f4f4;
    border-radius: 5px;
    margin-bottom: 7px;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
