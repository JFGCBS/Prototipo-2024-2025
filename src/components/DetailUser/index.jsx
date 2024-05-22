import React, { useState, useEffect } from 'react';
import './style.css';

const UserDetails = ({ user, onSaveUser }) => {
    const [editableUser, setEditableUser] = useState(user);
    const [isEditing, setIsEditing] = useState(false);
    const [headerText, setHeaderText] = useState("Seleccione un usuario para ver sus detalles");

    useEffect(() => {
        setEditableUser(user);
        setIsEditing(false); // Reset editing state when user changes
        setHeaderText("Visualizar Datos Personales"); // Set the header text initially
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableUser({ ...editableUser, [name]: value });
    };

    const handleSave = () => {
        onSaveUser(editableUser);
        setIsEditing(false); // Reset editing state after saving
        setHeaderText("Visualizar Datos Personales");
    };

    const handleEdit = () => {
        setIsEditing(true);
        setHeaderText("Editar Datos Personales");
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setHeaderText("Visualizar Datos Personales");
    };

    if (!editableUser) {
        return <div className="user-details">Seleccione un usuario para ver sus detalles</div>;
    }

    return (
        <div className="user-details">
            <h2>{headerText}</h2>
            <form>
                <label>
                    Nombres:
                    <input type="text" name="nombre" value={editableUser.nombre} onChange={handleChange} readOnly={!isEditing} />
                </label>
                <label>
                    Apellidos:
                    <input type="text" name="apellido" value={editableUser.apellido} onChange={handleChange} readOnly={!isEditing} />
                </label>
                <label>
                    Cedula:
                    <input type="text" name="cedula" value={editableUser.cedula} onChange={handleChange} readOnly={!isEditing} />
                </label>
                <label>
                    Correo:
                    <input type="email" name="correo" value={editableUser.correo} onChange={handleChange} readOnly={!isEditing} />
                </label>
                <label>
                    Contacto:
                    <input type="text" name="contacto" value={editableUser.contacto} onChange={handleChange} readOnly={!isEditing} />
                </label>
                <label>
                    ROL:
                    <input type="text" name="rol" value={editableUser.rol} onChange={handleChange} readOnly={!isEditing} />
                </label>
                <label>
                    Fecha:
                    <input type="date" name="fecha" value={editableUser.fecha} onChange={handleChange} readOnly={!isEditing} />
                </label>
                <label>
                    Estado:
                    <input type="text" name="estado" value={editableUser.estado} onChange={handleChange} readOnly={!isEditing} />
                </label>

                {!isEditing && <button type="button" onClick={handleEdit}>Editar</button>} 
                {!isEditing && <button type="button" onClick={handleSave}>Cancelar</button>}
                {isEditing && <button type="button" onClick={handleCancelEdit}>Cancelar</button>}
                {isEditing && <button type="button" onClick={handleSave}>Guardar</button>}
            </form>
        </div>
    );
};

export default UserDetails;
