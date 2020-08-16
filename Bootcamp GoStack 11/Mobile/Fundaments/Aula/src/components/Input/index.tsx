import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<IInputProps> = ({ name, icon, ...rest }: IInputProps) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />

    <TextInput
      {...rest}
      placeholderTextColor="#666360"
      keyboardAppearance="dark"
    />
  </Container>
);
export default Input;
