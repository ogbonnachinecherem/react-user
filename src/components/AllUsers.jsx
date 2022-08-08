import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";

function AllUsers(props) {
	return (
		<Container>
			<Row>
				{props.userData.map((item) => {
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