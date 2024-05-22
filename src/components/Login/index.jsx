import "./style.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Login({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rol, setRol] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || contraseña === "" || rol === "") {
            setError(true);
            return;
        }
        setError(false);
        setUser([nombre, rol]);
        navigate('/Bienvenido');
    }

    return (
        <div className="login-container">
            <section className="formulario">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={contraseña}
                            onChange={e => setContraseña(e.target.value)}
                        />
                        <select
                            value={rol}
                            onChange={e => setRol(e.target.value)}
                            required
                        >
                            <option value="">Seleccione</option>
                            <option value="Adm">Administrador</option>
                            <option value="User">Usuario</option>
                        </select>
                    </div>
                    <button type="submit">Acceder</button>
                    <div className="links-container">
                        <a href="/Registro">Registrarse</a>
                        <a href="/Recuperar_Contraseña">¿Olvidó su Contraseña?</a>
                    </div>
                </form>
                {error && <p>Todos los campos son obligatorios</p>}
            </section>
        </div>
    );
}

export default Login;
