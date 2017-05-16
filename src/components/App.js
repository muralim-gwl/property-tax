import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
import PropertyTaxSearch from "./contents/PropertyTaxSearch";


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PropertyTaxSearch}/>
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
              <Main />
          <Footer/>
      </div>
    );
  }
}

export default App;
