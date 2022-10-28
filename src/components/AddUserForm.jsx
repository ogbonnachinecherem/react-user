import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AddUser } from "../actions/UserActions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import {db} from "../firebase/Config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 


function AddUserForm(props) {
	const [name, setName] = useState("");
	const [gen, setGen] = useState("");
	const [email, setEmail] = useState("");
	

	const handleSubmit = async(e) => {
		e.preventDefault();
		let myUser = {id:uuid(), name:name, gen:gen, email:email,timestamp: serverTimestamp()}

		//props.AddUser({id:uuid(), name, gen, email });
		try{await setDoc(doc(db, "user", myUser.id),myUser);
		setName("");
		setGen("");
		setEmail("");
		}catch(e) {console.log(e)}
		
	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label  style={{color: "white"}}>Name</Form.Label>
					<Form.Control
						type="text"
            placeholder="Enter Your Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label  style={{color: "white"}}>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicGen">
					<Form.Label  style={{color: "white"}}>Gen</Form.Label>
					<Form.Control
						type="number"
						placeholder="Gen"
						value={gen}
						onChange={(e) => {
							setGen(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
 const mapDispatchToProps = {
 	AddUser: AddUser,
 };
export default connect(null, mapDispatchToProps)(AddUserForm);

// export default AddForm;