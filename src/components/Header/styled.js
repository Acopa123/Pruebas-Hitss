import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.header`
  background-color: #000;
  padding: 10px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DivSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 450px;
  max-width: 550px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Anchor = styled.a`

`;

const Logo = styled.img`
  width: 213px;
  heigth: 43px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  color: #fff;
  margin: 10px 10px 10px 15px;
  padding: 15px 0px 10px 0px;
  text-decoration: none;
  border-bottom: 2px solid #000;
  :hover{
    transition: 1s;
    border-bottom: 2px solid #bdc3c7;
  }
`;

const A = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 10px 10px 10px 15px;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  :hover{
    transition: 1s;
    color: #bdc3c7;
  }
`;

const Menu = styled.h1`
  color: #fff;
  display: none;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
  @media only screen and (max-width: 640px) {
    display: block;
  }
`;

export {Container, Head, DivSearch, Anchor, Logo, Nav, Ul, Li, A, Menu}
