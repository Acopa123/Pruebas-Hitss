import React from 'react';
import {Container, Img, Content, Title, Description, Span, Data, Info} from './styled';
import Button from '../Button';

const Card = (props) => {
  return (
    <Container>
      <Img src="https://clarovideocdn5.clarovideo.net/PELICULAS/RAINFALL/EXPORTACION_WEB/SS/RAINFALLWHORIZONTAL.jpg?size=675x380"/>
      <Content>
        <Title>Titulo</Title>
        <Description>
          <Span fontWeight="true">Sinopsis</Span> Una niña parte en una aventura para encontrar una estrella y salvar la Navidad.
        </Description>
        <Data>
          <Span>2014</Span>
          <Span>01:00:27</Span>
          <Span fontWeight="true">G</Span>
        </Data>
        <Info>
          <Button text="Ver detalles"/>
        </Info>
      </Content>
    </Container>
  );
}

export default Card;
