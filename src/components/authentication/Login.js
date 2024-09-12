import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUsertoken } from "../Redux/authSlice";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);
    const navigte=useNavigate();
    const dispatch = useDispatch();
    const loginUser = async (e) => {
        e.preventDefault();
        var data={
            email:email,
            password:password
        }
        
        try {
            const response = await axios.post(`http://localhost:2000/userlogin`, {
                data
            });
            //  console.log("23",response.data.errors)
            if (response.data.errors) {
                setErrorMessage(response.data.errors);
            } else {
                // console.log(errorMessage,"")
                // console.log(response.data,"daata")
                var useremail=response.data.data.email;
                var token=response.data.data.token;
                // console.log(token,"email")
                var user={
                    email:useremail,
                    token
                }
                
                
                dispatch(setUsertoken(user));
                console.log("u",user)
                navigte('/landing')
            }
        } catch (error) {
            console.error("There was an error fetching the user!", error);
        }
    };
  return (
    <>
     <div className="container-fluid  pt-5 ">
            <div className="row card text-white mt-5 w-75 mx-auto"  style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
               
                <div className="col-8 offset-2">
                    <h1 className="text-center">Login</h1>
                    {errorMessage.length > 0 && errorMessage.map((err, index) => (
                            <div key={index} className="alert alert-danger">
                                {err.msg}
                            </div>
                        ))}

                    <form onSubmit={loginUser}>
                            
                            <div className="form-group">
                                <label>Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    placeholder='enter email'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="form-group mb-0">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                     placeholder='enter password'
                                    required
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className='d-flex justify-content-end'>
                    <Link to={'/emailrequest'} className='text-white'>Forgot Password</Link>
                 </div>
                            
                                <input className="btn btn-primary mx-auto d-block" type='submit' />
                           
                        </form>
                    
                    <div className="offset-5">New user <Link to={'/signup'} className='text-white'><u>Click here</u></Link></div>
                    </div>
            </div>
            {/* </form> */}
        </div>
    </>
  )
}

export default Login;