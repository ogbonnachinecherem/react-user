let initialState= {
    users: [
        { name: "confidence", 
    email: "confidence22@gmail.com", 
    gen: "22",
    id: "1",
    },
		{ name: "eldee", 
    email: "eldee23@gmail.com", 
    gen: "23", 
    id: "2", 
    },
    {name: "sunday",
     email: "sunday21@gmail.com",
     gen: "21",
     id: "3" ,
    },
    ],
 };
let UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {...state, users: [...state.users, action.payload]}
      
      break;
    default:
      return state;
      
  }
 
};
export default UsersReducer;