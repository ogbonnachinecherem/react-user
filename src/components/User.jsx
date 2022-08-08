import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

function User(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const hadleDelete = (e) => {
		e.preventDefault();
		props.delete(props.userBio.id);
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Codetrain User Edit</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditUserForm editUser={props.editUser} userBio={props.userBio} />
				</Modal.Body>
			</Modal>
			<Col md={6} style={{  marginBottom: "10px" }}>
				<Card>
					<Card.Body>
						<Card.Title>Name:{props.userBio.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Email:{props.userBio.email}
						</Card.Subtitle>
						<Card.Text>Gen:{props.userBio.gen}</Card.Text>
						<Button href="#" size="sm" variant="success" style={{marginLeft: "1rem"}} onClick={handleShow}>
							Edit
						</Button>
						<Button href="#" size="sm" variant="danger" style={{marginLeft: "1rem"}} onClick={hadleDelete}>
							Delete
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

export default User;