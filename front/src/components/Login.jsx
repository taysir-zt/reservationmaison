import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fonction de connexion
  async function handleLogin(event) {
    event.preventDefault();

    // Vérifier que les champs ne sont pas vides
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:9000/api/v1/Client/login", {
        email,
        password,
      });
      const message = res.data.message;

      if (message === "Login Successful") {
        alert("Welcome back!");
        navigate("/dashboard"); // Redirige vers le tableau de bord après connexion
      } else {
        alert(message);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <section className="vh-100 bg-light">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5">
                <h3 className="mb-5 text-center">Login</h3>

                <form onSubmit={handleLogin}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Login
                  </button>

                  <p className="text-center mt-3">
                    <a href="/forgot-password" className="text-muted">Forgot password?</a>
                  </p>
                  <p className="text-center">
                    Don't have an account? <a href="/register">Register here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
