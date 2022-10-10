import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";
import {AddUser} from "../src/actions/UserActions";
import { useDispatch } from "react-redux";
import {db} from "../src/firebase/Config";
import {collection, orderBy, query, onSnapshot } from "firebase/firestore";

function App() {
	const  dispatch = useDispatch();
	useEffect (() => {
		try {
			const readData = async () => {
				const q = query(collection(db, "user") , orderBy("timestamp", "asc"));
				const unsubscribe = onSnapshot(q, (querySnapshot) => {
					const users = [];
					querySnapshot.forEach((doc) => {
						users.push(doc.data());
					});
					dispatch(AddUser(users));
					console.log(users);
				});
			};
			readData();
		} catch (e) {
			console.log(e);
		}
	})
	// const [users, setUsers] = useState(
	// 	[
	// 		{ name: "confidence", 
	// 	email: "confidence22@gmail.com", 
	// 	gen: "22",
	// 	id: "1",
	// 	},
	// 		{ name: "eldee", 
	// 	email: "eldee23@gmail.com", 
	// 	gen: "23", 
	// 	id: "2", 
	// 	},
	// 	{name: "sunday",
	// 	 email: "sunday21@gmail.com",
	// 	 gen: "21",
	// 	 id: "3" ,
	// 	},
	// 	]
	// );
	// const addNewUser = (user) => {
	// 	user.id = Math.random().toString();
	// 	setUsers([...users, user]);
	// 	// console.log(user);
	// };

	// const deleteUser = (id) => {
	// 	// setUsers(users.filter((user) => user.id !== id));
	// 	setUsers(
	// 		users.filter((user, id) => {
	// 			if (user.id !== id) {
	// 				return user;
	// 			}
	// 		})
	// 	);
	// };
	// const EditUser = (id, newData) => {
	// 	setUsers(
	// 		users.map((user) => {
	// 			if (user.id === id) {
	// 				return newData;
	// 			}
	// 			return user;
	// 		})
	// 	);
	// };

	return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col md={6}>
					<AddUserForm />
					{/* <newUser={addNewUser} /> */}
				</Col>
				<Col md={6}>
					<AllUsers/> 
					{/* <userData={users} editUser={EditUser} delete={deleteUser} /> */}
				</Col>
			</Row>
		</Container>
	);
}

export default App;