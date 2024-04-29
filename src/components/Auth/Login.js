import { useState } from 'react';
import './Auth.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { FaSpinner } from "react-icons/fa";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        //validate
        const isvalidate = validateEmail(email);
        if (!isvalidate) {
            toast.error('Invalid Email')
        }
        setIsLoading(true);
        //submit api
        let data = await postLogin(email, password);
        if (data && +data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/');
            //await props.fetchListUser();

        }

        if (+data.EC !== 0) {
            toast.error(data.EM);
            setIsLoading(false);
        }

    }
    const handleSignup = () => {
        navigate('/signup')
    }


    return (
        <div className="login-container">
            <div className="header ">
                <span>Don't have a account yet?</span>
                <button onClick={() => handleSignup()}>Sign up</button>
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
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span>Forgot password ?</span>
                <div>
                    <button disabled={isLoading} onClick={() => handleLogin()}>
                        {isLoading === true && <FaSpinner className='loaderIcon' />}
                        Login
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}>Back To Home Page</span>

                </div>
            </div>
        </div>
    )
}

export default Login;