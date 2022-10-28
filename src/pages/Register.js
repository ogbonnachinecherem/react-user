import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Config";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col } from "react-bootstrap";


function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleR = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/login", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};

	return (
		<div id="login">
            <div id="color">
                <h3>REGISTER</h3>
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
      <Button variant="primary" onClick={handleR}>create Account</Button>
      
      <p style={{paddingTop: "20px"}}>Already have Account<a style={{textDecoration: "none", backgroundColor:"black", color: "white", padding: "10px", borderRadius: "6px"}}id="butt" href="/login">Login</a> </p>
      </Form>
      </Col>
      </Row>
      </Container>
		</div>
	);
}

export default Register;