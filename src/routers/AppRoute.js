import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Spinner } from 'reactstrap';

export const AppRoute = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) =>{
        
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true); 
            }else{
                setIsLoggedIn(false); 
            }
            setChecking(false);

        
        });
        
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return(
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
        )
        
    }



    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={AuthRouter}/>
                    <PrivateRoute isAuthenticated={isLoggedIn} exact path="/" component={DashboardScreen} />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}
