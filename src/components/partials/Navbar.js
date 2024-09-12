import React from 'react'
import { NavLink ,useNavigate,Link} from 'react-router-dom'
import { removeUsertoken } from "../Redux/authSlice";
import { useDispatch,useSelector } from "react-redux";
function Navbar() {
  var user=useSelector(store=>store.auth.token)
  
  var navigate=useNavigate()
  const dispatch=useDispatch()
  function logout(){
    console.log("11",user)
    if(user){
       dispatch(removeUsertoken());
      //  console.log("14",user)
        navigate('/')
    }
}
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
   
    <div className="navbar-brand text-danger font-weight-bold">
                <h4>Ecart</h4>
            </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarLg">
      <span className="navbar-toggler-icon"></span>
  </button>
   
    <div className="navbar-collapse collapse" id="collapsingNavbarLg">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
           <NavLink to={"/landing"} className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>
            product
           </NavLink>
      </li>
     
      <li className="nav-item dropdown">
        <NavLink
          to="#"
          className={({ isActive }) => 'nav-link dropdown-toggle' + (isActive ? ' active' : '')}
          data-toggle="dropdown"
        >
          <i className="fa-solid fa-user"></i>
        </NavLink>
  <div className="dropdown-menu dropdown-menu-right">
    <NavLink className="dropdown-item" to={"/wishlist"}>
    Wishlist
    </NavLink>
    <NavLink className="dropdown-item" to={"/watchhistory"}>
    Cart
    </NavLink>
    <span className="dropdown-item">
        <Link  className='text-dark' onClick={logout} >logout</Link>
    </span>
    {/* <NavLink className="dropdown-item" to="/ahka">
      logout
    </NavLink> */}
  </div>
</li>

       {/*<li className="nav-item">
      <NavLink className="nav-link active" to="#">Logout</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="#">logout</NavLink>
      </li> */}
    </ul>
  </div>
  </nav>
    </>
  )
}

export default Navbar