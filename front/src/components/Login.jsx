import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Login() {
    

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    async function Login(event) {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:9000/api/v1/Client/login", {
                email: email,
                password: password,
            });
                console.log(res.data);
                const message = res.data.message;
                if (message === "Email not exits")
                {
                    alert("Email not exits");
                }
                else if(message === "Login Success")
                {
                    navigate('/home');
                }
                else
                {
                    alert("Incorrect Email and Password not match");
                }
        }
        catch(err){
            console.error(err);
            alert(err);
        }

    }
    
    
    
    return (
      <div>
        <div className="container">
            <div className="row">
                <h2>Login</h2>
                <hr />
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email"
                            value={email}
                            onChange={(event) =>{
                            setEmail(event.target.value);
                            }}
                            />
                        </div>


                        <div class="form-group">
                        <label htmlFor="">Password : </label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" 
                        value={password}
                        onChange={(event) =>{
                            setPassword(event.target.value);
                        }}/>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4" onClick={Login}>Login</button>

                    </form>
                </div>
            </div>
        </div>

         
      </div>
    );
  }
  
  export default Login;