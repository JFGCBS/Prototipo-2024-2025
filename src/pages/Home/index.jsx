import { useNavigate } from 'react-router-dom';

export function Home({user , setUser}) {
    const navigate = useNavigate(); // Corrección: useNavigate en lugar de Navigate

    const handleAccept = () => {
        // Aquí puedes agregar cualquier lógica adicional que desees realizar antes de redirigir
        setUser([]); // Limpia el usuario
        navigate('/GestionUsuarios'); // Redirige a otra ventana de la interfaz
    }

    const handleLogout = () => {
        setUser([]);
    }

    return (
        <div>
            <h1>Bienvenidos</h1><br />
            <h2>{user}</h2><br /><br />
            <button onClick={handleAccept}>Aceptar</button><br />
            <button onClick={handleLogout}>Cerrar Sesion</button><br />
        </div>
    );
}
