import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";



interface Props{
    email:string,
    password:string,
    displayName:string
}

interface PropsLogin{
    email:string,
    password:string,
}


export const registerUserWithEmailPassword = async({email,password,displayName}:Props) =>{
    try {  
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid} = resp.user;
        const currentUser = FirebaseAuth.currentUser;
        if (currentUser) {
            await updateProfile(currentUser, { displayName });

            return {
                ok: true,
                uid,
                email,
                displayName
            };
        } else {
            throw new Error("Current user is null");
        }
       
       
        
    }catch (error) {
        const msg = (error as Error).message;
        return{ ok:false,errorMessage:msg}
    }
}

export const loginWithEmailPassword = async({email,password}:PropsLogin) => {

    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password)
      
        const {uid,displayName} = resp.user;
      
        return{
             ok:true,
             uid,email,displayName
        }

    }catch(error){
        const msg = (error as Error).message;
        return{
            ok:false, 
            errorMessage:msg
        }
    }
}

export const logoutFirebase = async () =>{
    return await FirebaseAuth.signOut();
}