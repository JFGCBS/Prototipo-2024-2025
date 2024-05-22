import React from 'react';
import './style.css';

const UserTable = ({ users, onViewUser, onEditUser, onDeleteUser, currentPage, totalPages, onPageChange }) => {
    return (
        <div className="user-table">
            <h2>Gestión de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cédula</th>
                        <th>Correo</th>
                        <th>Contacto</th>
                        <th>Rol</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.cedula}>
                            <td>{index + 1}</td>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.cedula}</td>
                            <td>{user.correo}</td>
                            <td>{user.contacto}</td>
                            <td>{user.rol}</td>
                            <td>{user.fecha}</td>
                            <td>{user.estado}</td>
                            <td className="action-buttons">
                                <button className="view-button" onClick={() => onViewUser(user)}>Ver</button>
                                <button className="edit-button" onClick={() => onEditUser(user)}>Editar</button>
                                <button className="delete-button" onClick={() => onDeleteUser(user)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Siguiente</button>
            </div>
        </div>
    );
};

export default UserTable;


