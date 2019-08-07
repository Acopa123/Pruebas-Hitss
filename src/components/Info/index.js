import React from 'react';
import Button from '../Button';
import { Container, Img, Data, Title, Description, Span, Div } from './styled';

const Info = (props) => {
  return (
    <Container imageBackground={props.imageBackground}>
      <Img src={props.image}/>
      <Data>
        <Title>{props.title}</Title>
        <Span>{props.originalTitle}  ({props.year})  {props.rating}</Span>
        <Description>{props.duration}</Description>
        <Description>
          {props.description}
        </Description>
        <Description>
          <Span>Género: </Span>{props.genres}
        </Description>
        <Div>
          <Button text="Mi Lista"/>
          <Button text="Compartir"/>
        </Div>
      </Data>
    </Container>
  );
}

export default Info;
