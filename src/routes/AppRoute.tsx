import {  Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../movieApp/auth/components/AuthRoutes';
import { MovieRoutes } from '../movieApp/routes/MovieRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../movieApp/store/store';
import { useEffect } from 'react';
import { startCheckAuthToken } from '../movieApp/store/auth/thunks';



export const AppRoute = () => {

    const dispatch:AppDispatch = useDispatch();
    const {status} = useSelector((state:RootState) => state.auth);

    useEffect(() => {
        dispatch(startCheckAuthToken());
       
        
      }, [])
    
      if(status === 'checking'){
        return(
        <h3>Cargando...</h3>
        )
      }
    return (	
        <>
        <Routes>
           {
                (status !== 'not-authenticated') 
                ?<Route  path="/*" element={<MovieRoutes/>}/>
                :<Route path="/*" element={<AuthRoutes/>}/>
               
            
           }

        </Routes>	
        </>	
    )	
}

