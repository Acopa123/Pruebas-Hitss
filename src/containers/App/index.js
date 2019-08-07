import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../containers/Home';
import VCard from '../../containers/VCard';
import Header from '../../components/Header';
import homeReducer from '../../Redux/reducers'
let store = createStore(homeReducer)

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/:slug/:id" component={VCard}/>
      </div>
    </Router>
  </Provider>
);

export default App
