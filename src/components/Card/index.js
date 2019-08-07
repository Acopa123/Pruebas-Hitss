import React from 'react';
import {Container, Img, Content, Title, Description, Span, Data, Info} from './styled';
import Button from '../Button';

const Card = (props) => {
  return (
    <Container>
      <Img src={props.image}/>
      <Content to={`/${props.slug}/${props.id}`}>
        <Title>{props.title}</Title>
        <Description>
          <Span fontWeight="true">Sinopsis</Span> {props.description}
        </Description>
        <Data>
          <Span>{props.year}</Span>
          <Span>{props.duration}</Span>
          <Span fontWeight="true">{props.rating_code}</Span>
        </Data>
        <Info>
          <Button text="Ver detalles"/>
        </Info>
      </Content>
    </Container>
  );
}

export default Card;
