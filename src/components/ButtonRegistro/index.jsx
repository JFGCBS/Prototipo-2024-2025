import { Link } from 'react-router-dom';//Proporciona una forma de navegación entre rutas definidas en la aplicación sin recargar la página.
import './style.css';

const ComPButtonRegistro = props => {

  const {id} = props

  return (
    <Link to={`/form/${id}`}>
      <button  className='buttonRegistro'>Registrar</button>
    </Link>
  );
}

export {ComPButtonRegistro};