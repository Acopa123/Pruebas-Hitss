import React from 'react';
import Search from '../Search';
import {Container, DivSearch, Anchor, Logo, Text} from './styled';

const Header = () => {
  return (
    <Container>
      <Anchor href="#"><Logo src="https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg"/></Anchor>
      <DivSearch>
        <Search/>
      </DivSearch>
    </Container>
  );
}

export default Header;
