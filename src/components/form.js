import React from 'react';
import './comp.css';

function Form(){
    return(
        <div>
            <body>
                <div class='wrapper'>
                    <div class='form-box login'>
                        <h2>Login</h2>
                        <form action='#'>
                            <div class='input-box'>
                                <span class="icon"></span>
                                <input type="email" required/>
                                <label>Email</label>
                            </div>
                            <div class='input-box'>
                                <span class="icon"></span>
                                <input type="password" required/>
                                <label>Password</label>
                            </div>
                            <div class='remember'>
                                <label><input type='checkbox'/>Remember me</label>
                                <a href='#'>Forgot Password</a>
                            </div>
                            <button type='submit' class='btn'>Login</button>
                            <div class='login-register'>
                                <p>Don't have an account<a href='#' class='rgister-link'>Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Form;