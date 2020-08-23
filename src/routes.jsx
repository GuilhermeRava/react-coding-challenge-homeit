import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Home';
import BookDetail from './components/Book/BookDetail';
import BookList from './components/BookList/BookList';
import Navigation from './components/Navigation/Navigation';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={BookList} />
      <Route exact path="/books/:bookId" component={BookDetail} />
    </Switch>
  </Router>
);

export default Routes;
