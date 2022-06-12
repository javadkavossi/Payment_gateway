import React, { useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SingUp.module.css";
const Singup = () => {

const [data, setData] = useState({

    name:"",
    email:"",
    password:"",
    password2:"",
    //confiramPassword:"",                                                                                       
    isAccepted: false

});
const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});
useEffect(()=> {
 setErrors(validate(data))
    console.log(errors)
}, [data ,touched])

const changeHandler= event => {
    if(event.target.name === "isAccepted"){
        setData({...data, [event.target.name]: event.target.checked})
    }else{
        setData({...data,[event.target.name]: event.target.value})
    }
    console.log(data)
    }
    
    const focusHandler = event =>{
        setTouched({...touched, [event.target.name]: true})
    }

   const submitHnd= event=>{
   
       event.preventDefault();
       
       if (!Object.keys(errors).length){
           notify("you signed in succssfully" , "success")
       }else {
        notify("invalid data" , "error")

           setTouched({
               name: true,
               email:true,
               password:true,
               //confiramPassword:true,
               password2:true,
               isAccepted:true,
              
           })
       }
   }
  

    return (
        <div className={styles.container}>
            <form onSubmit={submitHnd} className={styles.formContainer}>
                <h2 className={styles.header}>Sing up</h2>
                <div className={styles.formField}>
                    <label>Nmae</label>
                    <input 
                       className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                     type="text"
                     name="name" 
                     value={data.name}
                     onChange={changeHandler} 
                     onFocus= {focusHandler}></input>
                    {errors.name && touched.name &&<span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                    className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                     type="text"
                     name="email"
                     value={data.email}
                     onChange={changeHandler}
                     onFocus= {focusHandler}></input>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>password</label>
                    <input
                    className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 

                     type="password"
                     name="password"
                     value={data.password}
                     onChange={changeHandler}
                     onFocus= {focusHandler}></input>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>ConfiramPassword</label>
                    <input
                    className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 

                     type="password"
                     name="password2"
                     value={data.password2}
                     onChange={changeHandler}
                     onFocus= {focusHandler}></input>
                    {errors.password2 && touched.password2 && <span>{errors.password2}</span>}
                </div>
                
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                    <label>i accet terms of privacy policy </label>
                    <input
                    className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                     type="checkbox"
                     name="isAccepted"
                     value={data.isAccepted }
                     onChange={changeHandler} onFocus= {focusHandler}></input>
                     </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}               
                </div>
                <div className={styles.formButtons}>
                    <a href='#'></a>
                    <button type='submit'>Sing Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>

    );
};

export default Singup;