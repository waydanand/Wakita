import React, { Component } from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideBar from '../../Components/Navigation/SideBar/SideBar';
import Footer from '../../Components/Footer/Footer';
import styles from './Layout.scss';

class Layout extends Component {
   state = {
      visible: false
   }
   sideBarClosed = () => {
      this.setState({ visible: false });
   }
   sideBarHandler = () => {
      this.setState((prevState) => {
         return { visible: !prevState.visible }
      });
   }
   render() {
      return (
         <div>
            <Toolbar barToggleClicked={this.sideBarHandler} />
            <SideBar open={this.state.visible} closed={this.sideBarClosed} />
            <main className={styles.mainContainer}>
               {this.props.children}
            </main>
            <Footer />
         </div>
      );
   }
};

export default Layout;