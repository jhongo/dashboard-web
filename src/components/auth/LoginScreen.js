import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: 'john@gmail.com', 
        password: '123456'
    }); 

    const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
        

    }
    const handleGoogleLogin = () =>{
        dispatch(startGoogleLogin());
    }


    return (


        <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="auth__user-card">
                    <div className="d-flex justify-content-center">
                        <div className="auth__brand-logo-container">
                            <img src="https://scontent.fcue6-1.fna.fbcdn.net/v/t1.6435-9/217764843_1636603329871640_4355594430804098467_n.jpg?_nc_cat=105&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEjMFS3HAk5uRO0Ebgs_ny0XDrojcPHu1BcOuiNw8e7UOiMYHi97C-hzZQMbY3Pr1_x1AagTEcNpjSpx2xWQt1N&_nc_ohc=c98eSIt8DdsAX_CjBLc&_nc_ht=scontent.fcue6-1.fna&oh=928b23c04d3c7f2f7096dbb56c5b811f&oe=61482725" className="auth__brand-logo" alt="Logo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form onSubmit={handleLogin}>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><FaIcons.FaAt className=""/></span>
                                </div>
                                <input type="text" name="email" value={email} onChange={handleInputChange} className="form-control input_user" placeholder="Email" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><FaIcons.FaKey/></span>
                                </div>
                                <input type="password" name="password" value={password} onChange={handleInputChange} className="form-control input_pass" placeholder="Password" />
                            </div>

                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" onClick={handleLogin} name="button" className="btn login_btn" disabled={loading} >Login</button>
                            </div>


                            <div className="auth__social-networks">
                                <p>Login with social networks</p>
                                <div
                                    className="google-btn"
                                    onClick={handleGoogleLogin}
                                >
                                    <div className="google-icon-wrapper">
                                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                    </div>
                                    <p className="btn-text">
                                        <b>Sign in with google</b>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <Link to="/auth/register" className="ml-2">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
