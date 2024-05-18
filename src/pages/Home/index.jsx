export function Home({user , setUser}) {
    const handleLogout = () => {
        setUser([])
    }
    return (

        <div>
            <h1>Bienvenidos</h1><br />
            <h2>{user}</h2><br /><br />
            <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>

    )

}