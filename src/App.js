import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import { newsAPI } from './api';
import axios from 'axios';

import Test from './test';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from './store/actions/topNews';
import TopNews from './containers/topNews/TopNews';

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   let test = axios.get(newsAPI('gb', 'health')).then((response) => {
  //     dispatch(actions.topNewsAction(response.data.articles));
  //     console.log('response', response.data.articles);
  //   });
  // });
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/" component={TopNews} />
          <Route exact path="/categories" component={NavBar}></Route>
          <Route path="/:id" component={Test}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
