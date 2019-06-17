import { createStore } from 'redux';

const reducer =(state, action) => {
    switch(action.type){
        case "ADD_USER":
          return {
            ...state, 
            user: action.payload
          };
        case "ADD_PRENDA":
          const lotes = [...state.lote, action.payload];
          console.log("Prenda obtenida")
          console.log(action.payload)
          console.log("Lotes")
          console.log(lotes)
          return {
            ...state, 
            lote: lotes
          };        
          
      default:
         return state;
    }
    
  }

export default createStore(reducer, { user: "", lote: []});