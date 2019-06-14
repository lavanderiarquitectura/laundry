function counterReducer(state={user:""}, action){
    switch(action.type){
        case ADD_USER:
          return {
            ...state, 
            user: action.payload
          };         
      default:
         return state;
    }
  }