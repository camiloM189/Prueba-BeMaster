
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../store/store";
import { useForm } from "../../hooks/useForm";
import { startLoginUserWithEmailPassword } from "../../store/auth/thunks";
import { Link } from "react-router-dom";



const formData = {
  email: '',
  password:'',
}


export const LoginComponents = () => {

    const {formState,onInputChange} = useForm(formData);
    const {email,password} = formState;

    const dispatch:AppDispatch = useDispatch();

  
    const onSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      dispatch(startLoginUserWithEmailPassword({email,password}))
    

    }   
    

    return (	
       <main>
            <div className="login-div">
               <div className="login-div-2">
                    <form onSubmit={(event) => onSubmit(event)}>
                        <h1>Bienvenido</h1>
                        <div className="contenedor-input">
                         <label style={{color:'white'}} htmlFor="">Email</label>
                         <input type="email" value={email} name="email" onChange={onInputChange} />

                        </div>
                        <div className="contenedor-input">
                          <label style={{color:'white'}} htmlFor="">Password</label>
                          <input type="password" value={password} name="password" onChange={onInputChange} />
                        </div>
                        <button type="submit">Iniciar Sesion</button>
                        <p style={{color:'white',marginTop:'5%'}}>¿No tienes cuenta? <Link style={{color:'#0056b3'}} to={'/auth/register'}>Registrate</Link></p>
                    </form> 
               </div>
            </div>
        </main>	
    )	
}