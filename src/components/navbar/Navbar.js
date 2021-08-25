import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch(); 

    const handleLogout = () =>{
        dispatch(startLogout());

    }

    return (
        <div className="navbar__content-main">
            Hello NavBar
            <button className="btn btn-outline-info text-white m-9" onClick={handleLogout}>
                LOGOUT
            </button>
        </div>
    )
}
