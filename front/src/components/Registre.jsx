import axios from "axios";
import { useState } from "react";
import './register.css'; 
function Registre() {
    const [client_name, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");

    async function register(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:9000/api/v1/Client/register", {
                client_name,
                email,
                adresse,
                telephone,
                password,
            });
            alert("Client Registration Successfully");
        } catch (error) {
            alert("Registration failed: " + error);
        }
    }

    return (
        <section className="registre-vh-100" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div className="registre-mask d-flex align-items-center h-100 registre-gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form onSubmit={register}>
                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="clientname">Your Name</label>
                                            <input type="text" id="clientname" className="form-control form-control-lg" placeholder="Enter Name"
                                                value={client_name}
                                                onChange={(e) => setClientName(e.target.value)} />
                                           
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="email">Your Email</label>
                                            <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                           
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="adresse"> Your Adresse</label>
                                            <input type="text" id="adresse" className="form-control form-control-lg" placeholder="Enter Adresse"
                                                value={adresse}
                                                onChange={(e) => setAdresse(e.target.value)} />
                                         
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="telephone"> Your Telephone</label>

                                            <input type="text" id="telephone" className="form-control form-control-lg" placeholder="Enter Telephone"
                                                value={telephone}
                                                onChange={(e) => setTelephone(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="password"> Your Password</label>
                                            <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                            
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success btn-block btn-lg registre-gradient-custom-4 text-body">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registre;
