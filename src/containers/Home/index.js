import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../../components/Header';
import Card from '../../components/Card';
import {Container} from './styled';


class Home extends React.Component {
  render() {
    return (
      <Container>
        <Card/>
      </Container>
    );
  }
}

export default Home
