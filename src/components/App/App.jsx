import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPageContainer from '../../containers/MainPage/MainPageContainer';
import SearchContainer from '../../containers/Search/SearchContainer';

const App = () => (
  <main>
    <Switch>
      <Route path="/search" exact component={SearchContainer} />
      <Route path="/" exact component={MainPageContainer} />
    </Switch>
  </main>
);

export default App;
