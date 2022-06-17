import React, { useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SingUp.module.css";
import { Link } from 'react-router-dom';
const Login = () => {

const [data, setData] = useState({


    email:"",
    password:"",
 

});
const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});
useEffect(()=> {
 setErrors(validate(data , "login"))
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
              
               email:true,
               password:true,
              
              
           })
       }
   }
  

    return (
        <div className={styles.container}>
            <form onSubmit={submitHnd} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
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
             
                <div className={styles.formButtons}>
                <Link to="/singup">Sing Up</Link>

                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>

    );
};

export default Login;