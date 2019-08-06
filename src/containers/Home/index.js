import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../../components/Header';


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hola Soy Home</h1>
      </div>
    );
  }
}

export default Home
