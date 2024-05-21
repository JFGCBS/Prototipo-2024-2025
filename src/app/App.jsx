import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../components/Login';
import {RecuperarContraseña} from '../components/RecuperarContraseña';
import { Home } from '../pages/Home';
import { FormularioId } from '../pages/FormularioId';
import { Formulario } from '../pages/Formulario';
import GestionUsuarios from '../pages/GestionUsuarios';
import './App.css';


const AppRoutes = () => {
    let routes = useRoutes([
        
      { path: '/home', element: <Home /> },
      { path: '/recuperar', element: <RecuperarContraseña /> },
      { path: '/form/:id', element: <FormularioId />},
      { path: '/form', element: <Formulario />},
      { path: '/GestionUsuarios', element: <GestionUsuarios /> },
      { path: '/', element: <Login /> }
    ]);
  
    return routes;
  }

const App = () => {
    const [user, setUser] = useState([])


    return (
        <BrowserRouter>

        <div className="App" >
            {
                !user.length > 0   //renderizado condicional (si no hay datos en el formulario entonces:  
                    ? <Login setUser={setUser} /> // muestra el formulario o
                    : <Home user={user} setUser={setUser} />  // muestre el mensaje del home (bienvenidos y el nombre del usuario)
            }
        </div >
        <AppRoutes />
  
        </BrowserRouter>   
    );

};

export default App;
