import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 
import logo from '../assets/logo.png';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:9000/api/v1/Client/login", {
                email,
                password,
            });
            console.log(response.data);
            if (response.data.message === "Email not exists") {
                alert("Email not exists");
            } else if (response.data.message === "Login Success") {
                navigate('/home');
            } else {
                alert("Incorrect Email and Password not match");
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    return (
        <section className="login-h-100 login-gradient-form" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 login-h-100">
                <div className="row d-flex justify-content-center align-items-center login-h-100">
                    <div className="col-xl-10">
                        <div className="card login-rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body login-p-md-5 mx-md-4">
                                        <div className="text-center">
                                        <img src={logo} alt="logo" style={{ width: '185px' }} />
                                            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                        </div>
                                        <form onSubmit={handleLogin}>
                                            <p>Please login to your account</p>
                                            <div className="login-form-outline mb-4">
                                                <input type="email" id="loginForm2Example11" className="form-control"
                                                    placeholder="Phone number or email address" value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                              
                                            </div>
                                            <div className="login-form-outline mb-4">
                                                <input type="password" id="loginForm2Example22" className="form-control" placeholder="Password" value={password}
                                                    onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <div className="text-center pt-1 mb-2">
                                                <button type="submit" className="btn btn-primary btn-block fa-lg login-gradient-custom-2 mb-3 btn-login-large">Log in</button>
                                            </div>
                                            <div className="text-center mb-5">
                                                <a className="text-muted" href="#!">Forgot password?</a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline btn-login-lam">Create new</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center login-gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">"Experience the charm of Tunisia – start your stay with us."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
