import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AppDispatch } from '../../store/store';
import { useForm } from "../../hooks/useForm";

const formData = {
  displayName:'',
  email: '',
  password:'',
  confirmaPassword:'',
}

export const RegisterComponents = () => {
    const {formState,onInputChange} = useForm(formData);
    const {email,displayName,password,confirmaPassword} = formState
    
    const dispatch:AppDispatch = useDispatch();

 

    const onSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(password === confirmaPassword){
        dispatch(startCreatingUserWithEmailPassword({email,password,displayName}))
      }
    } 



    return (	
        <main>
        <div className="login-div">
           <div className="register-div-2">
                <form onSubmit={(event) => onSubmit(event)}>
                    <h1>Registrate</h1>
                    <div className="contenedor-input">
                     <label style={{color:'white'}} htmlFor="">Email</label>
                     <input type="email" value={email} name="email" onChange={onInputChange} />
                    </div>
                    <div className="contenedor-input">
                     <label style={{color:'white'}} htmlFor="">DisplayName</label>
                     <input type="text" value={displayName} name="displayName" onChange={onInputChange} />
                    </div>
                    <div className="contenedor-input">
                      <label style={{color:'white'}} htmlFor="">Password</label>
                      <input type="password" value={password} name="password" onChange={onInputChange} />
                    </div>
                    <div className="contenedor-input">
                      <label style={{color:'white'}} htmlFor="">Confirma Password</label>
                      <input type="password" value={confirmaPassword} name="confirmaPassword" onChange={onInputChange}/>
                    </div>
                    <button type="submit">Registrate</button>
                    <p style={{color:'white',marginTop:'5%'}}> ¿Ya tienes cuenta? 
                    <Link style={{color:'#0056b3',marginBottom:'5%'}} to={'/auth/login'}> inicia sesion</Link></p>
                </form> 
           </div>
        </div>
    </main>		
    )	
}