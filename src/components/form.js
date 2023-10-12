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
                                <p>Don't have an account<a href='#' class='register-link'>Register</a></p>
                            </div>
                        </form>
                    </div>

                    <div class='form-box Register'>
                        <h2>Register</h2>
                        <form action='#'>
                        <div class='input-box'>
                                <span class="icon"></span>
                                <input type="text" required/>
                                <label>Username</label>
                            </div>
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
                                <label><input type='checkbox'/>Agree to terms and conditions.</label>
                            </div>
                            <button type='submit' class='btn'>Register</button>
                            <div class='login-register'>
                                <p>Already have an account.<a href='#' class='Login-link'>Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </div>
    )
}

const wrapper= document.querySelector('.wrapper');
const loginlink=document.querySelector('.Login-link');
const registerlink=document.querySelector('.register-link');

if(wrapper){
    registerlink.addEventListener('click',()=>{
        wrapper.classList.add('active');
    });

    loginlink.addEventListener('click',()=>{
        wrapper.classList.remove('active');
    });
}

export default Form;