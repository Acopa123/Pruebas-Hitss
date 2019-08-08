import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import configureStore from '../../Redux/reduxStore';
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../../containers/Home';
import VCard from '../../containers/VCard';
import Search from '../../containers/Search';
import Header from '../../components/Header';
let store = configureStore()
const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header history={history}/>
        <Route exact path="/" component={Home}/>
        <Route path="/pelicula/:slug/:id" component={VCard}/>
        <Route exact path="/busqueda/:text" component={Search}/>
      </div>
    </Router>
  </Provider>
);

export default App
