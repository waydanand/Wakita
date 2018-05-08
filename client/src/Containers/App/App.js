import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Components/Pages/Home/Home';
import Finance from '../../Components/Pages/Finance/Finance';
import HomeBuy from '../../Components/Pages/HomeBuy/HomeBuy';
import PropSearch from '../../Components/Pages/PropSearch/PropSearch';
import Resources from '../../Components/Pages/Resources/Resources';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/agents' component={Home}/>
            <Route exact path='/finance' component={Finance}/>
            <Route exact path='/homebuy' component={HomeBuy}/>
            <Route exact path='/propsearch' component={PropSearch}/>
            <Route exact path='/resources' component={Resources}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

