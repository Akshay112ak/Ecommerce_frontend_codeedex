import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setPasswordConf] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);
    const navigte=useNavigate()
    const registerUser = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`http://localhost:2000/usersignup`, {
                name,
                email,
                password,
                confirmpassword
            });
             console.log("23",response.data.errors)
            if (response.data.errors) {
                setErrorMessage(response.data.errors);
            } else {
                console.log(errorMessage,"")
                navigte('/login')
            }
        } catch (error) {
            console.error("There was an error fetching the product!", error);
        }
    };

    return (
        <div>
            <div className="container pt-5">
                <div className="row card pt-3 text-white" style={{ backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Signup</h1>

                        {errorMessage.length > 0 && errorMessage.map((err, index) => (
                            <div key={index} className="alert alert-danger">
                                {err.msg}
                            </div>
                        ))}

                        <form onSubmit={registerUser}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm password"
                                    value={confirmpassword}
                                    onChange={(event) => setPasswordConf(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-0">
                                <input className="btn btn-primary mx-auto d-block" type="submit" />
                            </div>
                        </form>
                    </div>
                    <div className="mx-auto d-block">Already registered? <Link to="/login">Click here</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
