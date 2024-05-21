import React, { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const RecuperarContraseña = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar el correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setMessage('Por favor, ingrese un correo válido.');
        } else {
            setMessage('Correo enviado exitosamente.');
            // Aquí puedes agregar la lógica para enviar el correo
        }
    };

    return (
        <div className="recuperar-container">
            <h2>Recuperar Contraseña</h2>
            <p>Por favor ingrese su correo</p>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                  
                    <input
                        type="email"
                        placeholder="example@hotmail.com"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    
                    Enviar
                </button>
            </form>
            <p className="message">{message}</p>
            <a href="/login" className="login-link">Inicio Sesión</a>
        </div>
    );
};

export {RecuperarContraseña} ;
