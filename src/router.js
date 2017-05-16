
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PropertyTaxSearch from './components/contents/PropertyTaxSearch';
import Test from './components/contents/Test';

// import App from "./components/App";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PropertyTaxSearch}/>
      <Route exact path='/test' component={Test}/>
    </Switch>
  </main>
)


export default(
  <Main/>
);
