import { useNavigate } from 'react-router-dom';

export function Home({ user, setUser }) {
    const navigate = useNavigate();

    const handleAccept = () => {
        navigate('/GestionUsuarios'); // Redirige a otra ventana de la interfaz
    }

    const handleLogout = () => {
        setUser({}); // Limpia el usuario y redirige al login
        navigate('/');
    }

    return (
        <div>
            <h1>Bienvenido</h1><br />
            <li className="user-icon">
                <img src="https://tse1.mm.bing.net/th?id=OIP.iPvPGJG166ivZnAII4ZS8gHaHa&pid=Api" alt=""
                    style={{
                        maxWidth: '150px',
                        height: 'auto',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                    }} />
            </li>
            <h2>{user}</h2><br /><br />
            <button onClick={handleAccept}>Aceptar</button><br />
            <button onClick={handleLogout}>Cerrar Sesión</button><br />
        </div>
    );
}
