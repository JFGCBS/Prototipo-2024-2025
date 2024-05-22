import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import UserTable from '../../components/UserTable';
import UserDetails from '../../components/DetailUser';
import './style.css';

const usersData = [
    { nombre: 'Juan', apellido: 'Gómez', cedula: '1722857579', correo: 'tmm4@utm.edu.ec', contacto: '0969367989', rol: 'Adm', fecha: '2024/03/17', estado: 'Activo' },
    { nombre: 'Hernán', apellido: 'Castillo', cedula: '1722857579', correo: 'hjzme@utm.edu.ec', contacto: '0969367989', rol: 'User', fecha: '2024/03/19', estado: 'Suspendido' },
    { nombre: 'Hugo', apellido: 'Caiza', cedula: '1722857579', correo: 'mghx@utm.edu.ec', contacto: '0969367989', rol: 'User', fecha: '2024/04/17', estado: 'Desactivado' },
];

const GestionUsuarios = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState(usersData);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleUserSelect = (user) => {
        setSelectedUser({ ...user });
        setIsEditing(false);
    };

    const handleUserSave = (updatedUser) => {
        setUsers(users.map(user => user.cedula === updatedUser.cedula ? updatedUser : user));
        setSelectedUser(null);
    };

    const handleUserDelete = (user) => {
        setUserToDelete(user);
        setShowConfirmation(true);
    };

    const handleViewUser = (user) => {
        setSelectedUser(user);
        setIsEditing(false);
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setIsEditing(true);
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    const confirmDelete = () => {
        setUsers(users.filter(user => user.cedula !== userToDelete.cedula));
        setShowConfirmation(false);
    };

    const cancelDelete = () => {
        setUserToDelete(null);
        setShowConfirmation(false);
    };

    return (
        <div className="gestion-usuarios">
            <NavBar />
            <div className="user-table">
                <UserTable
                    users={users}
                    onSelectUser={handleUserSelect}
                    onViewUser={handleViewUser}
                    onEditUser={handleEditUser}
                    onDeleteUser={handleUserDelete}
                />
            </div>
            <div className="user-details">
                <UserDetails user={selectedUser} onSaveUser={handleUserSave} isEditing={isEditing} />
            </div>
            {showConfirmation && (
                <div className="delete-confirmation">
                    <h2>¿Está seguro que desea eliminar este registro?</h2><br />
                     <p>Esta operación es irreversible.</p>
                    <button className="accept" onClick={confirmDelete}>Aceptar</button>
                    <button className="cancel" onClick={cancelDelete}>Cancelar</button>
                </div>
            )}
        </div>
    );
};


export { GestionUsuarios };




