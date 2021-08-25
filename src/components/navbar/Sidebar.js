import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


export const Sidebar = () => {
    return (
        <div className="sidebar__content-main">
            <ul>
                <li>
                    <Link to="/clientes"> <FaIcons.FaUsers className="mr-2"/> Clientes</Link>
                </li>
                <li>
                    <Link to="/agenda"> <FaIcons.FaCalendarMinus className="mr-2"/> Agenda</Link>
                </li>
                <li>
                    <Link to="/empleados"> <FaIcons.FaUsersCog className="mr-2"/> Empleados</Link>
                </li>
                <li>
                    <Link to="/tareas"> <FaIcons.FaList className="mr-2"/> Tareas</Link>
                </li>
                <li>
                    <Link to="/informacion"> <FaIcons.FaQuestionCircle className="mr-2"/> Información</Link>
                </li>
            </ul>
        </div>
    )
}
