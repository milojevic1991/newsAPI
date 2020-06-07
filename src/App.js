import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Article from './components/article/Article';
import TopNews from './containers/topNews/TopNews';
import Categories from './containers/categories/Categories';
import Search from './containers/search/Search';
import MainNewsGrid from './components/mainNewsGrid/MainNewsGrid';

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/categories/:cat/:catId">
          <Article topNewsDataFull={state.categoriesReducer.fullViewCat} />
        </Route>

        <Route path="/categories/:cat">
          <MainNewsGrid mainNewsData={state} isTopNews={false} />
        </Route>

        <Route path="/categories" component={Categories} />

        <Route path="/search/:id">
          <Article topNewsDataFull={state.topNewsReducer.articleData} />
        </Route>

        <Route path="/search" component={Search} />

        <Route path="/:id">
          <Article topNewsDataFull={state.topNewsReducer.articleData} />
        </Route>

        <Route exact path="/" component={TopNews} />
      </Switch>
    </div>
  );
}

export default App;
