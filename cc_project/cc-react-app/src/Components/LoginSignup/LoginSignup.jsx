import React,{useState} from 'react' //6.9k (gzipped: 2.3k);
import './LoginSignup.css'

import user_icon from '../Assets/user_icon.png'
import email_icon from '../Assets/email_icon.png'
import password_icon from '../Assets/pw_icon.png'
import name_icon from '../Assets/name_icon.png'

const LoginSignup = () => {
    const [action,setAction] = useState("Sign Up");
    return(
        <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="Login" ? null: (
                <div className="input">
                    <img src={name_icon} alt=""/>
                    <input className="first-name" type="text" placeholder='First Name'/>
                </div>
               
           
            )}
             {action === "Login" ? null : (
                <div className="input">
                    <img src={name_icon} alt=""/>
                    <input className="last-name" type="text" placeholder='Last Name'/>
                </div>
            )}
            {action === "Login" ? null : (
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder='Email'/>
                    </div>
            )}
            
            


            <div className="input">
              <img src={user_icon} alt=""/>
                <input type="text"placeholder='Username'/>
            </div>
          
           
           
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password"placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up" ? <div></div>:<div className="forgot-password">Forgot Password? </div>}
        
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
       
    );
}
export default LoginSignup