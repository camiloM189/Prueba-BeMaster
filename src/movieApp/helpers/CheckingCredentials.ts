import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { onLogout, onLogin } from "../store/auth/authSlice";
import { RootState, AppDispatch } from "../store/store";
import Swal from "sweetalert2";

export const CheckingCredentials = () => {
    const {status} = useSelector((state:RootState) => state.auth);
    const dispatch:AppDispatch = useDispatch();
    
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async(user) => {
        if(!user){
          Swal.fire('No se encontro usuario','error')
          return dispatch(onLogout('no se encontro usuario'));
        }


        const {email,uid,displayName} = user;

        if(email && displayName){
          dispatch(onLogin({email,uid,displayName}));
        }

   

      })
    
    }, [])
    
    return status
    
  
}



						