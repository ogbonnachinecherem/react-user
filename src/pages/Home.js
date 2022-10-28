import React from 'react'
import {Button, Row, Col, Container } from "react-bootstrap";
import AllUsers from "../components/AllUsers";
import AddUserForm from "../components/AddUserForm";
import { auth } from "../firebase/Config";
import {  signOut } from "firebase/auth";

function Home() {
  const logout =() => {
    try {signOut(auth)}catch(e) {
      console.log(e)
    }
    
  }
  return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col>
					<AddUserForm
					/>
				</Col>
				<Col>
					<AllUsers
					/>
				</Col>
			</Row>
            <Row>
                <Col ><Button style={{backgroundColor: "black", border: "none"}} onClick={logout} >LogOut</Button></Col>
            </Row>
      
		</Container>
	);
}

export default Home;