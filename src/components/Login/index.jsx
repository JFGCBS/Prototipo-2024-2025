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
        navigate('/Bienvenidos'); // Redirige al usuario a la página de Bienvenidos después del inicio de sesión exitoso
    }

    return (
        <section className="login-container"> {/* Asigna la clase para los estilos de la imagen de fondo */}
            <h1>"Parqueo Inteligente: Monitoreo en Tiempo Real"</h1>
            <form className="formulario" onSubmit={handleSubmit}>
            <h1>Iniciar Sesión</h1>
            <h1>Ingresar Usuario</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <h1>Contraseña</h1>
                    <input
                    
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={e => setContraseña(e.target.value)}
                    />
                    <h1>Rol</h1>
                    <select
                        className="Rol"
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
    );
}

export default Login;
