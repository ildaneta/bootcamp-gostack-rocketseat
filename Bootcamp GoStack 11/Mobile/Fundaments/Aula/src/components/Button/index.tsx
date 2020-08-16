import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface IButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  ...rest
}: IButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText onPress={() => {}}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
