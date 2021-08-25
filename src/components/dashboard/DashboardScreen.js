import React from 'react';
import { AgendaScreen } from '../../pages/AgendaScreen';
import { ClientesScreen } from '../../pages/ClientesScreen';
import { EmpleadosScreen } from '../../pages/EmpleadosScreen';
import { InformacionScreen } from '../../pages/InformacionScreen';
import { TareasScreen } from '../../pages/TareasScreen';
import { Navbar } from '../navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Sidebar } from '../navbar/Sidebar';

const routes = [
    {
        path: "/clientes",
        exact: true,
        main: () => <div><ClientesScreen /></div>
    },
    {
        path: "/agenda",
        exact: true,
        main: () => <div><AgendaScreen /></div>
    },
    {
        path: "/empleados",
        exact: true,
        main: () => <div><EmpleadosScreen/></div>
    },
    {
        path: "/tareas",
        exact: true,
        main: () => <div><TareasScreen /></div>
    },
    {
        path: "/informacion",
        exact: true,
        main: () => <div><InformacionScreen /></div>
    },
    
];

export const DashboardScreen = () => {
    return (
        <div className="dashboard__main-content">

            <Navbar />

            <Router>

                <div className="dashboard__sidebar-flex">

                   <Sidebar/>

                    <div className="dashboard__content-items">

                        <Switch>
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>

                </div>

            </Router>

        </div>
    )
}
