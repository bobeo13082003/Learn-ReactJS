import { useState } from 'react';
import './Auth.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { postSignup } from '../../services/apiServices'
import { toast } from 'react-toastify';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
const Signup = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = () => {
        navigate('/login');
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSignup = async () => {
        // validate
        const isvalidate = validateEmail(email);
        if (!isvalidate) {
            toast.error('Invalid Email')
        }


        let data = await postSignup(email, username, password);
        if (data && +data.EC === 0) {
            toast.success(data.EM);
            navigate('/login');
            //await props.fetchListUser();

        }

        if (+data.EC !== 0) {
            toast.error(data.EM);
        }
    }


    return (
        <>
            <div className="login-container">
                <div className="header">
                    <span>You have a account yet?</span>
                    <button onClick={() => handleLogin()}>Login</button>
                </div>
                <div className="title col-4 mx-auto">
                    Hoi dan It
                </div>
                <div className="welcome col-4 mx-auto">
                    Hello Who this
                </div>
                <div className="content-form col-4 mx-auto">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>UserName</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </div>
                    <div className="form-group pass-group">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            value={password}
                            required
                            onChange={(event) => setPassword(event.target.value)}

                        />

                        {
                            showPassword ?
                                <span className='icon-eye' onClick={() => setShowPassword(false)}>
                                    <VscEye />
                                </span>
                                :
                                <span className='icon-eye' onClick={() => setShowPassword(true)}>
                                    <VscEyeClosed />
                                </span>
                        }

                    </div>

                    <div>
                        <button onClick={() => handleSignup()}>Register</button>
                    </div>
                    <div className='text-center'>
                        <span className='back' onClick={() => { navigate('/') }}>Back To Home Page</span>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Signup;