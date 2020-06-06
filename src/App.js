import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import NavBar from './components/navBar/NavBar';
import { newsAPI } from './api';
import axios from 'axios';

import Article from './components/article/Article';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from './store/actions/topNews';
import TopNews from './containers/topNews/TopNews';
import Categories from './containers/categories/Categories';
import Search from './containers/search/Search';
import MainNewsGrid from './components/mainNewsGrid/MainNewsGrid';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // const { id } = useParams();
  // console.log('PARAMETRI', id);

  // console.log('state', state.topNewsReducer.articleData);
  // useEffect(() => {
  //   let test = axios.get(newsAPI('gb', 'health')).then((response) => {
  //     dispatch(actions.topNewsAction(response.data.articles));
  //     console.log('response', response.data.articles);
  //   });
  // });
  return (
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        {/* <Route
          exact
          path="/"
          render={(props) => (
            <MainNewsGrid {...props} mainNewsData={state} isTopNews={true} />
          )}
        /> */}

        <Route
          path="/categories/:cat/:catId"
          render={(props) => (
            <Article
              {...props}
              topNewsDataFull={state.categoriesReducer.fullViewCat}
            />
          )}
        />

        <Route
          path="/categories/:cat"
          render={(props) => (
            <MainNewsGrid {...props} mainNewsData={state} isTopNews={false} />
          )}
        />

        <Route path="/categories" component={Categories} />
        <Route
          path="/search/:id"
          render={(props) => (
            <Article
              {...props}
              topNewsDataFull={state.topNewsReducer.articleData}
            />
          )}
        />

        <Route path="/search" render={(props) => <Search />} />

        <Route
          // exact
          path="/:id"
          render={(props) => (
            <Article
              {...props}
              topNewsDataFull={state.topNewsReducer.articleData}
            />
          )}
        />

        <Route exact path="/" component={TopNews} />
        {/* <Route
          exact
          path="/"
          render={(props) => (
            <MainNewsGrid {...props} mainNewsData={state} isTopNews={true} />
          )}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
