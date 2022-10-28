export const dispatchUser = (user)=>{
    return {
      type: 'set_user',
      payload:user
    }
  }