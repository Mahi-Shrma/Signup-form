
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialValues={
    email:"",
    password:"",
    comfirmPassword:""
  };
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password === confirmPassword) {
  //     // Passwords match
  //     console.log('Passwords match!');
  //     setPasswordMatch(true);
  //   } else {
  //     // Passwords do not match
  //     console.log('Passwords do not match!');
  //     setPasswordMatch(false);
  //   }
  // };
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors]=useState({});
  const [isSubmit, setIsSubmit]=useState(false);

const handleChange=(e)=>{
   const{name,value}=e.target;
   setFormValues({...formValues, [name]: value});
};

const handleSubmit=(e)=>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(()=>{
if(Object.keys(formErrors).length===0 && isSubmit){
  console.log(formValues);
}
},[formErrors]);

const validate=(value)=>{
  const errors={}
  const regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  
  if(!value.email){
    errors.email="Email is required!";
  } else if(!regex.test(value.email)){
    errors.email="Enter a valid email";
  }
  if(!value.password){
    errors.password="Password is required!";
  // }else if(!regex.test(value.password)>8){
  }else if(value.password<8){
    errors.password="Password must be atleast 8 characters";
  }
  if(value.comfirmPassword !== value.password){
    errors.comfirmPassword="Password do not match";
  }
  if (password === confirmPassword) {
        // Passwords match
        console.log('Passwords match!');
        setPasswordMatch(true);
      } else {
        // Passwords do not match
        console.log('Passwords do not match!');
        setPasswordMatch(false);
      }
  // if(!value.username){
  //   errors.username="Username is required!";
  // }else if(!regex.test(value.username)){
  //   errors.username="Enter a valid Username";
  // }
  return errors;
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Signup-Form</h1>
        {/* <div className="ul divider"></div>
        <div className="ui form"></div> */}
        

        
        <div className="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}
        // className={validate ? 'green' : 'red'}
         ></input>
        </div>
        <p>{formErrors.email}</p>
        
        <div class="field">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" value={password}
            onChange={handlePasswordChange}
 
        // onChange={handleChange}
        // className={validate? 'green' : 'red'}
        ></input>
        </div>
        <p>{formErrors.password}</p>

        {/* <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" value={formValues.username} 
        onChange={handleChange}
        className={validate ? 'green' : 'red'}></input>
        </div>
        <p>{formErrors.username}</p> */}
        <div className="field">
        <label>Comfirm Password</label>
        <input type="password" name="password" placeholder="Enter the password again" value={confirmPassword}
            onChange={handleConfirmPasswordChange}
        // className={validate ? 'green' : 'red'}
        ></input>
        </div>
        <p>{formErrors.comfirmPassword}</p>


        <button className="fluid ui button">Signup</button>
      </form>
    </div>
  );
}

export default App;
