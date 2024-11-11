import axios from "axios";
import { useState } from "react";
import './register.css'; // Ensure to import the CSS styles

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
        <section className="vh-100" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form onSubmit={register}>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="clientname" className="form-control form-control-lg" placeholder="Enter Name"
                                                value={client_name}
                                                onChange={(e) => setClientName(e.target.value)} />
                                            <label className="form-label" htmlFor="clientname">Your Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                            <label className="form-label" htmlFor="email">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="adresse" className="form-control form-control-lg" placeholder="Enter Adresse"
                                                value={adresse}
                                                onChange={(e) => setAdresse(e.target.value)} />
                                            <label className="form-label" htmlFor="adresse">Adresse</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="telephone" className="form-control form-control-lg" placeholder="Enter Telephone"
                                                value={telephone}
                                                onChange={(e) => setTelephone(e.target.value)} />
                                            <label className="form-label" htmlFor="telephone">Telephone</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
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
