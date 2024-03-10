import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginComponents } from '../components/LoginComponents'
import { RegisterComponents } from '../components/RegisterComponents'
export const AuthRoutes = () => {
    return (	
        <Routes>
            <Route path='/login' element={<LoginComponents/>} />
            <Route path='/register' element={<RegisterComponents/>} />
            <Route path='/*' element={<Navigate to={'/login'}/>} />
        
        </Routes>		
    )	
}