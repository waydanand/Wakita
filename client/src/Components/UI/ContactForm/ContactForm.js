import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class ContactForm extends Component {

   state={
      userInput:{
         name:{
            elementtype: 'contact',
            elementConfig:{
               type:'text',
               placeholder: 'Name'
            },
            value: '',
            valid: false,
            touched: false
         },
         phone:{
            elementtype: 'contact',
            elementConfig: {
               type: 'tel',
               placeholder: 'Phone #'
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

   }
   checkValidity =(value, rules) =>{
      let isValid = true;
      if(rules.required){
         isValid = value.trim() !== '' && isValid;
      }
      return isValid;
   }

   render() {
      const formElementsArr = [];
      for(let key in this.state.userInput){
         formElementsArr.push({
            id: key,
            config: this.state.userInput[key]
         })
      }
      let form =(
         <form onSubmit={this.contactHandler}>
            {formElementsArr.map(el =>{
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
            })}
            <div>
               <Button btnType='drawBorder' clicked={this.contactHandler} disabled={!this.state.formIsValid}>Submit</Button>
            </div>
         </form>
      )
      return (
         <div>
            {form}
         </div>
      );
   }
}

export default ContactForm;