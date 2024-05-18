
import { Link } from 'react-router-dom';
import "./style.css"
import { ComPButtonRegistro } from '../ButtonRegistro';
import { useState } from "react"


export function Login({ setUser }) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [rol, setRol] = useState("");
    const [error, setError] = useState(false)


    const handleSubmit = (e) => { // Guarda la informacion al momento de llenar el formulario
        e.preventDefault()           /// Sirve para la pagina se refresque por defecto
        if (nombre === "" || contraseña === "" || rol === "") {   //El nombre y contraseña son iguales y estan vacios sus campos
            setError(true)                       // entonces que salga el error
            return
        }
        setError(false)

        setUser([nombre, rol])
    }

    return (

        <section>
            <h1> Iniciar Seccion</h1>
            <form className="formulario"
                onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" placeholder="Usuario"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <input type="password" placeholder="Password"
                        value={contraseña}
                        onChange={e => setContraseña(e.target.value)}
                    />

                    <select className="Rol"
                        value={rol}
                        onChange={e => setRol(e.target.value)}
                        required >
                        <option value="">Seleccione </option>
                        <option value="Adm">Administrador</option>
                        <option value="User">Usuario</option>
                    </select>
                </div>

                <button type="submit">Acceder</button>
                <Link to="/formulario" className="registrar-link">
                    <ComPButtonRegistro />
                    Registrar
                </Link>
                <Link to="/formulario" className="registrar-link">Cancelar</Link>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}

        </section>
    )

}

