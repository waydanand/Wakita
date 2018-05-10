import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Components/Pages/Home/Home';
import About from '../../Components/Pages/About/About';
import PropSearch from '../../Components/Pages/PropSearch/PropSearch';
import Sold from '../../Components/Pages/Sold/Sold';
import Contact from '../../Components/Pages/Contact/Contact';
import styles from './App.scss';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
           <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/propertysearch' component={PropSearch}/>
            <Route exact path='/sold' component={Sold}/>
          </Switch> 
        </Layout>
      </div>
    );
  }
}

export default App;

