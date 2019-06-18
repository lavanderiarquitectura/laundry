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
        case "LOGIN":
              return {
                ...state, 
                nav: action.payload,
                navlog: "block"
              };     
        case "OUT":
              return {
                ...state, 
                nav: action.payload,
                navlog: "none"
              }; 
        case "TOKEN":
              return {
                ...state, 
                token: action.payload,
               
              };   
          
      default:
         return state;
    }
    
  }

export default createStore(reducer, { user: "", lote: [], estado: 0, nav: "block", navlog:"none", token:""});