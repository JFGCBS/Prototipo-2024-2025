import React from "react";
import './style.css';
import { useState } from 'react';

const ComPForm = () => {

  const [datos, setDatos] = useState({

    cedula: '',
    nombres: '',
    apellidos: '',
    ciudad: '',
    correo: '',
    direccion: '',
    formacion: '',
    numero: '',
    pregunta1: '',
    pregunta2: '',

  });

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  console.log(datos)

  const validarDatos = (data, tipo) => {
    const mensajesError = {
      cedula: 'Ingrese su cedula',
      numero: 'El número es 10 dígitos',
      correo: 'Ingrese su correo : @',
    };

    if (data.value.length > 0 && data.value.length !== 10 && !data.value.includes('@')) {
      return <span className="error">{mensajesError[tipo]}</span>;
    }
  }

  const handleInputChange = (event) => {
    setDatos({
      ...datos, /*clona los objetos*/
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
    
      <form onSubmit={handleSubmit} >
        <div className="ContFormInfo">
          <div className='FormOne'>
            <label>
              <h4>* Cédula</h4>
              <div>
                <input type="text" maxLength="10" placeholder="" required onChange={handleInputChange} id="cedula" pattern="^\d{10}$" name="cedula" title=" Ingrese un valor valido " />
                {validarDatos({ value: datos.cedula }, 'cedula')}
              </div>
            </label>
            <label>
              <h4>* Nombres Completos</h4>
              <input type="text" maxLength="25" placeholder="" required onChange={handleInputChange} pattern="^[a-zA-ZÀ- \\u00f1\\u00d1 ]+$" id="nombres" name="nombres" title=" Ingrese un nombre valido" />
            </label>
            <label>
              <h4>* Apellidos Completos</h4>
              <input type="text" maxLength="25" placeholder="" required onChange={handleInputChange} pattern="^[a-zA-ZÀ- \\u00f1\\u00d1 ]+$" id="apellidos" name="apellidos" title=" Ingrese un apellido valido" />
            </label>
            <label>
              <h4>* Correo</h4>
              <div>
                <input type="text" maxLength="50" placeholder="" required onChange={handleInputChange} pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" id="correo" name="correo" title=" Ingrese un correo valido @" />
                {validarDatos({ value: datos.correo }, 'correo')}
              </div>
            </label>
            <br />
          </div>
          <div className='FormTwo'>
            <label>
              <h4>* Ciudad</h4>
              <select className="Ciudad">
                <option>Quito</option>
                <option>Guayaquil</option>
                <option>Cuenca</option>
              </select>
            </label>
            <label>
              <h4>* Dirección</h4>
              <input type="text" placeholder="" required onChange={handleInputChange} pattern="^[a-zA-ZÀ-ÿ-?\d\s!”#$%&()*+,./:;<=>?@^_`{&#;}~-]$," id='direccion' name='direccion' />
            </label>
            <label>
              <h4>* Última Formación Academica</h4>
              <select className="Formacion">
                <option>Primaria</option>
                <option>Secundaria</option>
                <option>Tecnico</option>
                <option>Tecnologo</option>
                <option>Universitaria Incompleta</option>
                <option>Tercer Nivel</option>
                <option>Especializacion</option>
                <option>Magister</option>
                <option>PHD</option>
              </select>            
            </label>
            <label>
              <h4>* Número Celular</h4>
              <div>
                <input type="text" maxLength="10" placeholder="" required onChange={handleInputChange} pattern="^\d{10}$" id='numero' name='numero' title=" Ingrese un numero valido" />
                {validarDatos({ value: datos.numero }, 'numero')}
              </div>
            </label>
          </div>
        </div>
        <div className='ContPreguntas'>
          <label>
            <h4>PREGUNTA 1</h4>
            <textarea name="" id="" maxLength="200" cols="30" rows="10" required onChange={handleInputChange} pattern="^[a-zA-ZÀ-ÿ-?\d\s!”#$%&()*+,./:;<=>?@^_`{&#;}~-]$," ></textarea>
          </label><label>
            <h4>PREGUNTA 2</h4>
            <textarea name="" id="" maxLength="200" cols="30" rows="10" required onChange={handleInputChange} pattern="^[a-zA-ZÀ-ÿ-?\d\s!”#$%&()*+,./:;<=>?@^_`{&#;}~-]$,"></textarea>
          </label>
        </div>
        <div className='ContCargarArchivo' required onChange={handleInputChange}>
          <h4>Subir CV</h4>
          <label>
            <p>Carga tu hoja de vida aqui.</p>
            <input type="file" />
          </label>
        </div>
        <div className='ContSubmit'>
          <label>
            <input required onChange={handleInputChange} type="checkbox" />
            Autorización uso de mis datos.
          </label>
          <br /><br />
          <button type="submit" >
            Siguiente
          </button>
        </div>
      </form>
    </>
  );
}
export { ComPForm };