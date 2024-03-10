import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { onLogin, onLogout } from '../store/auth/authSlice';
import { AppDispatch, RootState } from "../store/store";





export const useCheckAuth = () => {
    const {status} = useSelector((state:RootState) => state.auth);
    const dispatch:AppDispatch = useDispatch();
    
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async(user) => {
        if(!user) return dispatch(onLogout('no se encontro usuario'));
        const {email,uid,displayName} = user;
        if(email && displayName){
          dispatch(onLogin({email,uid,displayName}));
          localStorage.setItem('user', JSON.stringify({email,uid,displayName}));
        }

   

      })
    
    }, [])
    
    return status
    
  
}
