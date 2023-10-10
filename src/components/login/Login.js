/* eslint-disable import/first */
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = ({ onLoggedIn, onRegisterClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignupClick = () => {
    onRegisterClick();
  };

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
    <div className="container_FormLogin">
      <div className="interior">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <span> our </span>
          <Button variant="primary" onClick={handleSignupClick}>
            signup
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
