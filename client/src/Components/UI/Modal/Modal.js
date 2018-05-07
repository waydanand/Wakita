import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.scss';
class Modal extends Component {
   render() {
      return (
         <div>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            {this.props.show && (
               <div  className={styles.Modal}
                     style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100)', opacity: this.props.show ? '1' : 
               '0'}}>
               {this.props.children}
               </div>
            )}            
         </div>
      );
   }
}

export default Modal;