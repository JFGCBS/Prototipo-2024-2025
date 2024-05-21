import React from 'react';
import './style.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>Inicio</li>
                <li>Perfil</li>
                <li>Parqueadero</li>
                <li>Reservar</li>
                <li>Notificaciones</li>
                <li>Ayuda</li>
            </ul>
        </nav>
    );
};

export default NavBar;
