import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { mgsError } = useSelector(state => state.ui);


    const [formValues, handleInputChange] = useForm({
        name: 'Carlos',
        email: 'john@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            
            dispatch(startRegisterWithEmailPasswordName(email,password,name)); 
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is requiered'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email no valid'));
            return false;
        } else if (password !== password2 || password2 < 5) {
            dispatch(setError('Password should be at least characters and match each other'));
            return false;

        }


        dispatch(removeError());
        return true;

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
                        <form onSubmit={handleRegister}>

                            {
                                mgsError &&
                                (<div class="alert alert-danger" role="alert">
                                {mgsError}
                              </div>)
                            }

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><FaIcons.FaUserAlt className="" /></span>
                                </div>
                                <input type="text" name="name" onChange={handleInputChange} value={name} className="form-control input_user" placeholder="Name" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><FaIcons.FaAt /></span>
                                </div>
                                <input type="text" name="email" onChange={handleInputChange} value={email} className="form-control input_pass" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><FaIcons.FaKey /></span>
                                </div>
                                <input type="password" name="password" onChange={handleInputChange} value={password} className="form-control input_pass" placeholder="Password" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><FaIcons.FaKey /></span>
                                </div>
                                <input type="password" name="password2" onChange={handleInputChange} value={password2} className="form-control input_pass" placeholder="Confirm password" />
                            </div>

                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" onClick={handleRegister} className="btn login_btn">Register</button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            I already have an account <Link to="/auth/login" className="ml-2">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
