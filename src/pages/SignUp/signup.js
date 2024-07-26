import React from 'react';
import './signup.css';

function SignUp() {
    return(
<div className='signUp-header'>
    <div className='header'>
        <h2> Sign Up</h2>
        <p> It's quick and easy</p>
        <hr className='sign-divider'/>
    </div>
    
    <div className='Sign-up-form'>
        <div className="sign-credentials">
        <input type="text" className='fname' placeholder="First name" />
        <input type="text" className="sname" placeholder='Surname' />
        </div>
        <div className='sign-details'>
            <input type="email" className="sign-email " placeholder='Mobile number or email address'/>
       <input type="password" className='sign-pass' placeholder='New password' />
        </div>
        <div className="dob">
            <h2 className='dob-date'> Date of birth</h2>
            <span>
           
           <select name="day" className='day'>Day</select>
           </span>
           <span>
     
           <select name="Month" className="month"></select>
           </span>
           <span>
      
           <select name="day" placeholder="Year" className='Year'>Month</select>
           </span>
        </div>
       

    </div>
    <div className="dob">
            <h2 className='dob-date'> Date of birth</h2>
            <span>
           
           <select name="day" className='day'>Day</select>
           </span>
           <span>
     
           <select name="Month" className="month"></select>
           </span>
           <span>
      
           <select name="day" placeholder="Year" className='Year'>Month</select>
           </span>
        </div>
        <div className='instruction'>
            <div className='instruction-content'>
                <p className='intruction-text-1'>People who use our service may have uploaded your contact information to </p><p className='intruction-text-1'>Facebook. Learn more.</p>
           <p className='intruction-text-1'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
          <button className='btn-signUp'>Sign Up</button>
          </div>
        </div>
    

</div>
    );
}
export default SignUp