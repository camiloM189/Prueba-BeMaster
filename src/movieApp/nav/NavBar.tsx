import { NavLink } from "react-router-dom"
import { starLogout } from "../store/auth/thunks"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"


export const NavBar = () => {

    const dispatch:AppDispatch = useDispatch()
    const logout = () => {
        dispatch(starLogout());
   
   
    }



    return (	
            <nav className="navbar navbar-expand-lg  navLink-div" >
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item ">
                        <NavLink style={{fontSize:'25px'}} className={ ({isActive}) => `text-white-50 nav-item nav-link  ${ isActive ? 'active':'' }` } aria-current="page" to={'/home'}>
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  style={{fontSize:'25px'}}className={ ({isActive}) => `text-white-50 nav-item nav-link  ${ isActive ? 'active':'' }` } aria-current="page" to={'/popular'}>
                            Popular
                        </NavLink>
                         
                        </li>
                        <li className="nav-item">
                        <NavLink style={{fontSize:'25px'}} className={ ({isActive}) => `text-white-50 nav-item nav-link  ${ isActive ? 'active':'' }` } aria-current="page" to={'/buscar'}>
                            Buscar
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  style={{fontSize:'25px'}}className={ ({isActive}) => `text-white-50 nav-item nav-link  ${ isActive ? 'active':'' }` } aria-current="page" to={"/auth/*"} onClick={logout} >
                            Logout
                        </NavLink>
                        </li>
                      </ul>         
                    </div>
                  </div>
            </nav>
      

    )	
}