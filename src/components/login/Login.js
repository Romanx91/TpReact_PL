import { useRef, useState } from "react";
/*import { useNavigate } from "react-router";*/
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS
import "./Login.css";

const Login = ({ onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  /*const navigate = useNavigate();*/

  const emailChangeHandler = (event) => {
    if (emailRef.current.value.length > 0) {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      alert("Email vacío!");
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      alert("Password vacío");
      return;
    }
    onLoggedIn();
    /* navigate("/home");*/
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">PROYECTO</h4>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  onChange={emailChangeHandler}
                  value={email}
                  ref={emailRef}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Contraseña"
                  type="password"
                  onChange={passwordChangeHandler}
                  value={password}
                  ref={passwordRef}
                />
              </div>
              <button
                onClick={signInHandler}
                className="btn btn-primary"
                type="button"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
