import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import './loginform.css'
function Login() {
    const [toggle, setToggle] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {setUser} = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({email, password});
    }

    return (
        <div className="login">
            <img src="./login-bg.png" alt="login image" className="login__img" />

            <form action="" className="login__form">
                <h1 className="login__title">Login</h1>

                <div className="login__content">
                    <div className="login__box">
                        <i className="ri-user-3-line login__icon"></i>

                        <div className="login__box-input">
                            <input type="email" value={email} required className="login__input" placeholder=" " onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="" className="login__label">Email</label>
                        </div>
                    </div>

                    <div className="login__box">
                        <i className="ri-lock-2-line login__icon"></i>

                        <div className="login__box-input">
                            <input type={toggle ? "text" : "password"} value={password} required className="login__input" id="login-pass" placeholder=" " onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="" className="login__label">Password</label>
                            <i className={toggle ? "ri-eye-line login__eye" : "ri-eye-off-line login__eye"} id="login-eye" onClick={() => {
                                setToggle(!toggle);
                            }}></i>
                        </div>
                    </div>
                </div>

                <div className="login__check">
                    <div className="login__check-group">
                        <input type="checkbox" className="login__check-input" />
                        <label htmlFor="" className="login__check-label">Remember me</label>
                    </div>

                    <a href="#" className="login__forgot">Forgot Password?</a>
                </div>

                <button type="submit" className="login__button" onClick={handleSubmit}>Login</button>

                <p className="login__register">
                    Don't have an account? <a >Register</a>
                </p>
            </form>
        </div>
    )
}

export default Login

