import React, { Component } from 'react';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

