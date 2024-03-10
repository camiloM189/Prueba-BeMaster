
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginComponents } from './LoginComponents'
import { RegisterComponents } from './RegisterComponents'
export const AuthRoutes = () => {
  
    

    return (	
        <Routes>
            <Route path='/auth/login' element={<LoginComponents/>}/>
            <Route path='/auth/register' element={<RegisterComponents/>}/>
            <Route path='/*' element={<Navigate to={'/auth/login'}/>}/>
        </Routes>		
    )	
}