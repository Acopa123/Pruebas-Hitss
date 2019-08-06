import React from 'react';
import {Container} from './styled';

const Button = (props) => {
  return (
    <Container>
      {props.text}
    </Container>
  );
}

export default Button;
