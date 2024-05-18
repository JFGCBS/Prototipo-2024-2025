import { ComPForm } from '../../components/Form'; 
import './style.css';

const ComPFormulario = () => {
  return (
    <>
      <div className='ContInfoPersonal'>
        <div className="InfoPersonal">
          <h1>Información Personal</h1>
          <p>Por favor ingresa los siguientes datos.</p>
        </div>
        <div className='FormularioIngreso'>
          <ComPForm />
        </div>
      </div>
      
    </>
  );
}

export { ComPFormulario };