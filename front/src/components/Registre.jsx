import axios from "axios";
import { useState } from "react";

function Registre() {

    const[client_name, setClientName] = useState("");
    const[email, setEmail] = useState("");
    const[adresse, setAdresse] = useState("");
    const[telephone, setTelephone] = useState("");
    const[password, setPassword] = useState("");

    async function register(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:9000/api/v1/Client/register", {
                client_name: client_name,
                email: email,
                adresse: adresse,
                telephone: telephone,
                password: password,
            });
            alert("Client Registation Successfully");
        } catch (error) {
            alert(error);
        }
        
    }



  return (
    <div>
        <div class="container mt-4">
            <div class="card">
                <h1>Registre</h1>

                <form action="">
                    <div class="form-group">
                        <label htmlFor="">Client Name : </label>
                        <input type="text" class="form-control" id="clientname" placeholder="Enter Name" 
                        value={client_name}
                        onChange={(event) =>{
                            setClientName(event.target.value);
                        }}/>
                    </div>

                    <div class="form-group">
                        <label htmlFor="">Email : </label>
                        <input type="email" class="form-control" id="email" placeholder="Enter Email" 
                        value={email}
                        onChange={(event) =>{
                            setEmail(event.target.value);
                        }}/>
                    </div>

                    <div class="form-group">
                        <label htmlFor="">Adresse : </label>
                        <input type="text" class="form-control" id="adresse" placeholder="Enter Adresse" 
                        value={adresse}
                        onChange={(event) =>{
                            setAdresse(event.target.value);
                        }}/>
                    </div>

                    <div class="form-group">
                        <label htmlFor="">Telephone : </label>
                        <input type="text" class="form-control" id="telephone" placeholder="Enter Telephone" 
                        value={telephone}
                        onChange={(event) =>{
                            setTelephone(event.target.value);
                        }}/>
                    </div>

                    <div class="form-group">
                        <label htmlFor="">Password : </label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" 
                        value={password}
                        onChange={(event) =>{
                            setPassword(event.target.value);
                        }}/>
                    </div>

                    <button type="submit" class="btn btn-primary mt-4" onClick={register}>Register</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Registre;
