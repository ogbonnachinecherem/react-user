export const AddUser =(newUser)=>{
  return{
    type:"ADD_USER",
    payload:newUser
  }

}
export const DeleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id
  }
}

export const EditUser = (Data) => {
  return {
    type: "EDIT_USER",
    payload: Data
  }
}