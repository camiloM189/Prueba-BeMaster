import Swal from "sweetalert2";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword } from "../../firebase/provider";
import { AppDispatch } from "../store";
import { onLogin, onLogout } from "./authSlice";


interface CreatingUserProps{
    email:string,
    password:string,
    displayName:string
}
interface LoginUserProps{
    email:string,
    password:string,
}

interface IUsuario {
  email:string,
    uid:string,
    displayName:string
}




export const startCreatingUserWithEmailPassword = ({email,password,displayName}:CreatingUserProps) => {
    return async(dispatch:AppDispatch) => {
        try {
         
            const { ok, uid, errorMessage } = await registerUserWithEmailPassword({email,password,displayName});
            
           
            if (!ok){

            Swal.fire('Error al crear usuario','error')
             return dispatch(onLogout(errorMessage || 'Error al crear usuario'));
            } 
      
        
            dispatch(onLogin({ uid, displayName: displayName, email:email }));
            localStorage.setItem('user', JSON.stringify({email,uid,displayName}));

          } catch (error) {
           
            console.error('Error:', error);
          }
  
      
    }

}


export const startLoginUserWithEmailPassword = ({email,password}:LoginUserProps) => {
  return async(dispatch:AppDispatch) => {
      try {
       
          const { ok, uid, errorMessage,displayName } = await loginWithEmailPassword({email,password});
          
         
          if (!ok){
            Swal.fire('Error en la autenticacion',errorMessage,'error')

            return dispatch(onLogout(errorMessage || 'Error al crear usuario'));
          }
    
      
          dispatch(onLogin({ uid, displayName: displayName || '', email:email }));
          localStorage.setItem('user', JSON.stringify({email,uid,displayName}));
        } catch (error) {
         
          console.error('Error:', error);
        }

    
  }

}

export const starLogout = () => {
  return async(dispatch:AppDispatch) => {
      await logoutFirebase();

      dispatch(onLogout('no se encontro usuario'));
      localStorage.removeItem('user');

  }

}
export const startCheckAuthToken = () => {
  return async(dispatch:AppDispatch) => {
    const usuario = localStorage.getItem('user');
    if (usuario) {
     
      const usuarioObject:IUsuario = JSON.parse(usuario);
  
      dispatch(onLogin({email:usuarioObject.email,uid:usuarioObject.uid,displayName:usuarioObject.displayName}))

    
  } else {
    Swal.fire('Error al crear usuario','error')
    
    return dispatch(onLogout('no se encontro usuario'));
  }
   

  }
}