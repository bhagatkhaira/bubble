import * as ACTION_TYPES from './Types'
import * as firebase from 'firebase'
require('firebase/firestore')

export const fetchUser=()=> {
    
    return (dispatch)=>{
       firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot)=>{
                
                if(snapshot){
                    dispatch({type: ACTION_TYPES.FETCH_CURRENT_USER,currentUser : snapshot.data()})
                }else{
                    console.log("does'nt exist")
                }
            })
            
    }
}
