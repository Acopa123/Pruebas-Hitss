import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../containers/Home';
import Header from '../../components/Header';
import homeReducer from '../Home/reducers'
let store = createStore(homeReducer)

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  </Provider>
);

export default App
