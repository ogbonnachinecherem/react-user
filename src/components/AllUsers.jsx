import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function AllUsers(props) {
	const {users} = useSelector((state) => {
		return state
	})
	return (
		<Container>
			<Row>
				{users.map((item, index) => {
					return (
						<User
							key={index}
							userBio={item}
							delete={props.delete}
							editUser={props.editUser}
						/>
					);
				})}
			</Row>
		</Container>
	);
}

export default AllUsers;