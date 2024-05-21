import React, { useState, useEffect } from 'react';
import './style.css';

const UserDetails = ({ user, onSaveUser }) => {
    const [editableUser, setEditableUser] = useState(user);

    useEffect(() => {
        setEditableUser(user);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableUser({ ...editableUser, [name]: value });
    };

    const handleSave = () => {
        onSaveUser(editableUser);
    };

    if (!editableUser) {
        return <div className="user-details">Seleccione un usuario para ver sus detalles.</div>;
    }

    return (
        <div className="user-details">
            <h2>Visualizar Datos Personales</h2>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={editableUser.nombre} onChange={handleChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={editableUser.apellido} onChange={handleChange} />
                </label>
                <label>
                    Cedula:
                    <input type="text" name="cedula" value={editableUser.cedula} onChange={handleChange} />
                </label>
                <label>
                    Correo:
                    <input type="email" name="correo" value={editableUser.correo} onChange={handleChange} />
                </label>
                <label>
                    Contacto:
                    <input type="text" name="contacto" value={editableUser.contacto} onChange={handleChange} />
                </label>
                <label>
                    ROL:
                    <input type="text" name="rol" value={editableUser.rol} onChange={handleChange} />
                </label>
                <label>
                    Fecha:
                    <input type="date" name="fecha" value={editableUser.fecha} onChange={handleChange} />
                </label>
                <label>
                    Estado:
                    <input type="text" name="estado" value={editableUser.estado} onChange={handleChange} />
                </label>
                <button type="button" onClick={handleSave}>Guardar</button>
            </form>
        </div>
    );
};

export default UserDetails;


