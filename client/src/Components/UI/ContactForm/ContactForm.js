import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './ContactForm.scss';

class ContactForm extends Component {

   state={
      userInput:{
         name:{
            elementtype: 'topContact',
            elementConfig:{
               type:'text',
               placeholder: 'Name'
            },
            validation: {
               required: true,
            },
            value: '',
            valid: false,
            touched: false
         },
         phone:{
            elementtype: 'topContact',
            elementConfig: {
               type: 'tel',
               placeholder: 'Phone #'
            },
            validation: {
               required: true,
            },
            value: '',
            valid: false,
            touched: false
         },
         email:{
            elementtype: 'contact',
            elementConfig: {
               type: 'email',
               placeholder: 'Email'
            },
            validation: {
               required: true,

            },
            value: '',
            valid: false,
            touched: false
         },
         message:{
            elementtype: 'textarea',
            elementConfig: {
               type: 'text',
               placeholder: 'Enter your message here...'
            },
            validation: {
               required: true,
            },
            value: '',
            valid: false,
            touched: false
         }
      }
   }
   contactInputChange = (event, inputID)=>{
      const updateUserInput = {
         ...this.state.userInput
      }
      const updatedUserEl ={
         ...updateUserInput[inputID]
      }
      updatedUserEl.value=event.target.value;
      updatedUserEl.valid = this.checkValidity(updatedUserEl.value, updatedUserEl.validation);
      updatedUserEl.touched = true;
      updateUserInput[inputID] = updatedUserEl;

      let formIsValid = true;
      for(let inputID in updateUserInput){
         formIsValid = updateUserInput[inputID].valid && formIsValid;
      }
      console.log(formIsValid);
      this.setState({
         userInput: updateUserInput,
         formIsValid: formIsValid
      });
   };
   contactHandler = (event) =>{
      event.preventDefault();
      const formData = {};
      for(let formElementID in this.state.userInput){
         formData[formElementID] = this.state.userInput[formElementID].value;
      }
      console.log(formData);

   };
   checkValidity =(value, rules) =>{
      let isValid = true;
      if(rules.required){
         isValid = value.trim() !== '' && isValid;
      }
      return isValid;
   };

   render() {
      let formEl = this.state.userInput;
      // const formElementsArr = [];
      // for(let key in this.state.userInput){
      //    formElementsArr.push({
      //       id: key,
      //       config: this.state.userInput[key]
      //    })
      // }
      let form =(
         <form className={styles.Form} onSubmit={this.contactHandler}>
            {/* {formElementsArr.map(el =>{
               return(
                  <Input key={el.id}
                     elementtype={el.config.elementtype}
                     elementConfig={el.config.elementConfig}
                     value={el.config.value}
                     invalid={!el.config.valid}
                     touched={el.config.touch}
                     change={(event) => this.contactInputChange(event,el.id)}
                  />
               )
            })} */}
            <div className={styles.TopDiv}>
               <Input
                  elementtype={formEl.name.elementtype}
                  elementConfig={formEl.name.elementConfig}
                  value={formEl.name.value}
                  invalid={!formEl.name.valid}
                  touched={formEl.name.touch}
                  change={(event) => this.contactInputChange(event, formEl.name)}
               />
               <Input 
                  formElementtype={formEl.phone.elementtype}
                  elementConfig={formEl.phone.elementConfig}
                  value={formEl.phone.value}
                  invalid={!formEl.phone.valid}
                  touched={formEl.phone.touch}
                  change={(event) => this.contactInputChange(event, formEl.phone)}
               />
            </div>
            <Input 
               elementtype={formEl.email.elementtype}
               elementConfig={formEl.email.elementConfig}
               value={formEl.email.value}
               invalid={!formEl.email.valid}
               touched={formEl.email.touch}
               change={(event) => this.contactInputChange(event, formEl.email)}
            />
            <Input 
               elementtype={formEl.message.elementtype}
               elementConfig={formEl.message.elementConfig}
               value={formEl.message.value}
               invalid={!formEl.message.valid}
               touched={formEl.message.touch}
               change={(event) => this.contactInputChange(event, formEl.message)}
            />
            <div>
               <Button btnType='drawBorder' clicked={this.contactHandler} disabled={!this.state.formIsValid}>Submit</Button>
            </div>
         </form>
      )
      return (
         <div className={styles.gridItem}>
            <h1 className={styles.Title}>{this.props.title}</h1>
            <div className={styles.ContactBox}>
               {form}
               <div className={styles.Info}>
                  <h4>Address</h4>
                  <hr/>
                  <div>
                     821 Bowsprit Road Chula Vista, CA 91914 
                  </div>
                  <h4>Phone Number</h4>
                  <hr/>
                  <div>
                     <p>Office: 619.267.6025</p>
                     <p>Fax: 619.267.6040</p>
                  </div>
                  <h4>Office Hours</h4>
                  <hr/>
                  <div>
                     <p>Mon-Fri</p>
                     <p>8:00 AM - 5:30 PM</p>
                     <p>Sat-Sun</p>
                     <p>10:00 AM - 4:00 PM</p>
                  </div>                       
               </div>
            </div>
         </div>
      );
   }
}

export default ContactForm;