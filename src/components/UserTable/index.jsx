// src/components/UserTable.js
import React from 'react';
import './style.css';

const UserTable = ({ users, onSelectUser, onEditUser, onDeleteUser }) => {
    return (
        <div className="user-table">
            <h2>Gestión de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cedula</th>
                        <th>Correo</th>
                        <th>Contacto</th>
                        <th>ROL</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} onClick={() => onSelectUser(user)}>
                            <td>{index + 1}</td>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.cedula}</td>
                            <td>{user.correo}</td>
                            <td>{user.contacto}</td>
                            <td>{user.rol}</td>
                            <td>{user.fecha}</td>
                            <td>{user.estado}</td>
                            <td>
                                <button onClick={() => onEditUser(user)}>Editar</button>
                                <button onClick={() => onDeleteUser(user)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
