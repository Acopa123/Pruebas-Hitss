import React from 'react';
import Search from '../Search';
import Button from '../Button';
import { Container, Head, DivSearch, Anchor, Logo, Nav, Ul, Li, A } from './styled';

const Header = () => {
  return (
    <Container>
      <Head>
        <Anchor href="#"><Logo src="https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg"/></Anchor>
        <DivSearch>
          <Search/>
          <Button text="Ingresar"/>
          <Button text="Regístrate"/>
        </DivSearch>
      </Head>
      <Nav>
        <Ul>
          <Li>
            <A to={'/'}>Inicio</A>
          </Li>
          <Li>
            <A href="#">Catálogo</A>
          </Li>
          <Li>
            <A href="#">Géneros</A>
          </Li>
          <Li>
            <A href="#">Compra y Renta</A>
          </Li>
          <Li>
            <A href="#">Canales</A>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
}

export default Header;
