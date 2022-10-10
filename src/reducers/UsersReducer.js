let initialState= {
    users: [
    //     { name: "confidence", 
    // email: "confidence22@gmail.com", 
    // gen: "22",
    // id: uuid(),
    // },
		// { name: "eldee", 
    // email: "eldee23@gmail.com", 
    // gen: "23", 
    // id: uuid(), 
    // },
    // {name: "sunday",
    //  email: "sunday21@gmail.com",
    //  gen: "21",
    //  id: uuid(),
    // },
    ],
 };
let UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {...state, users: action.payload}
      case "DELETE_USER": 
      const unDeletedUsers = state.users.filter((user) =>
      user.id!== action.payload)
      return {...state, users: unDeletedUsers}
      case "EDIT_USER":
        const updatedUser = state.users.map((user) => {
          if(user.id === action.payload.id){
            return action.payload
          }
          else {return user}
        })
        return {...state, users: updatedUser }
    default:
      return state;  
  }
 
};
export default UsersReducer;