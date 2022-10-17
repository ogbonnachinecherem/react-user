import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EditUser } from "../actions/UserActions";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebase/Config"
function EditUserForm(props) {
	const dispatch = useDispatch();
	const [name, setName] = useState(props.userBio.name);
	const [gen, setGen] = useState(props.userBio.gen);
	const [email, setEmail] = useState(props.userBio.email);
	const [id, setId] = useState(props.userBio.id);

	const handleSubmit = async(e) => {
		e.preventDefault();
		//dispatch(EditUser({id: props.userBio.id,  name, email, gen}))
		// props.editUser(props.userBio.id, { name, email, gen });
		// props.EditUser({id:uuid(), name, gen, email });
		const newUser = {
			name,email,gen,id
		}
	

const userRef = doc(db, "user",newUser.id);

// Set the "capital" field of the city 'DC'
await updateDoc(userRef,newUser );
		setName("");
		setGen("");
		setEmail("");
		props.handleClose();
	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Gen</Form.Label>
					<Form.Control
						type="text"
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
// const mapdispatchToProps = {
// 	EditUser: EditUser,
// }
// export default connect(null, mapdispatchToProps)(EditUserForm)
export default EditUserForm;