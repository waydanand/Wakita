import React from 'react';
import styles from './Input.scss';

const Input = (props) => {
   let inputEl = null;
   let inputClasses = [styles.InputEl];

   if(props.invalid && props.touched){
      inputClasses.push(styles.Invalid)
   }

   switch(props.elementtype){
      case('contact'):
         inputEl = (
                  <div className={styles.InputDiv}>
                    <input className={inputClasses.join(' ')}
                           value={props.value}
                           onChange={props.change}
                           {...props.elementConfig}/>
                  </div>
         )
         break;
      case('topContact'):
          inputEl = (
            <div className={styles.TopDiv}>
              <input className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.change}
                {...props.elementConfig} />
            </div>
          )
       break;
      case('textarea'):
         inputEl=(
            <div className={styles.InputDiv}>
               <textarea className={inputClasses.join(' ')}
                         value={props.value}
                         onChange={props.change}
                         {...props.elementConfig}/>
            </div>
         )
         break;
      default:
         inputEl=(
                  <div className={styles.InputDiv}>
                    <input className={inputClasses.join(' ')}
                           value={props.value}
                           onChange={props.change}
                              {...props.elementConfig} />
                  </div>              
         )
   }

   return (
      <div>
                  {inputEl}      
      </div>
   );
};

export default Input;