import * as ACTION_TYPES from './Types'

const initialState = {
    currentUser:""
};

const Reducer =(state= initialState, action )=>{
    
    switch (action.type){
        case ACTION_TYPES.FETCH_CURRENT_USER:
            
            return{
                ...state,
                currentUser:action.currentUser
               
            }
        default:
            return state;
          
    }

};
export default Reducer;