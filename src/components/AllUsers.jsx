import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function AllUsers(props) {
	const users  = useSelector((state) => {
		return state.UsersReducer.users;
	});
	return (
		<Container>
			<Row>
				{users.map((item) => {
					return (
						<User
							key={item.id}
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

