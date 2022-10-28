import React, { useState } from "react";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Config";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col } from "react-bootstrap";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();
	const handle = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/home", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};
	const google = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithPopup(auth, provider);
			console.log(user);
			navigate("/home", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};

	return (
		<div id="login">
            <div id="color">
                <h3>LOGIN</h3>
                <p>Firebase UI can be easily customised to fit with the rest of our app's UI. 
                    It is open-source, so It is not constrained in modifying the user experience to meet our app's needs.</p>
            </div>
<Container>
    <Row>
        <Col id="cols">
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}} placeholder="Password" />
      </Form.Group>
      <Button  style={{backgroundColor:"blue"}} type="submit"onClick={handle}>Login</Button>
      <Button id="butt"  style={{backgroundColor:"blue"}} type="submit"onClick={google}>sign in with google</Button>
      <p style={{paddingTop: "20px"}}>Don't have Account?<a style={{textDecoration: "none", backgroundColor:"black", color: "white", padding: "10px", borderRadius: "6px"}}id="butt" href="/">Register</a> </p>
      
    
    </Form>
    </Col>
    </Row>
    </Container>
		</div>
	);
}

export default Login;