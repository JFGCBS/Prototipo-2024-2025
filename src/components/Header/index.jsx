import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Header = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        setCurrentUser({}); // Limpia el usuario y redirige al login
        navigate('/');
    };

    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/perfil">Perfil</a></li>
                <li><a href="/parqueadero">Parqueadero</a></li>
                <li><a href="/reservar">Reservar</a></li>
                <li><a href="/Notificaciones">Notificaciones</a></li>
                <li><a href="/ayuda">Ayuda</a></li>
                <li className="user-icon">
                    <a href="#" className="user-dropdown-toggle" onClick={toggleMenu}>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.iPvPGJG166ivZnAII4ZS8gHaHa&pid=Api" alt="" />
                        {currentUser}
                    </a>
                    <div className={`user-dropdown-menu ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}>
                        <div className="user-info">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.iPvPGJG166ivZnAII4ZS8gHaHa&pid=Api" alt="" />
                            <p>Rol: {currentUser}</p>
                            <div className="boton">
                                <button className="cancelar" onClick={() => {
                                    // Retrocede una página en la historia sin recargar la página actual
                                    window.history.go(-1);
                                }}>Cancelar</button>
                                <button className="cerrar" onClick={handleLogout}>Cerrar sesión</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
