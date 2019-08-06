import styled from 'styled-components';

const Container = styled.header`
  background-color: #000;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DivSearch = styled.div`
  min-width: 410px;
  max-width: 550px;
`;

const Anchor = styled.a`

`;

const Logo = styled.img`
  width: 213px;
  heigth: 43px;
  cursor: pointer;
`;

const Text = styled.h1`
  font-size: 12px;
  color: red;
`;

export {Container, DivSearch, Anchor, Logo, Text}
