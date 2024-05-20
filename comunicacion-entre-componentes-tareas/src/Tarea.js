import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        checked={completada}
        onChange={onToggleCompletada}
        className="mr-3"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="form-control mr-3"
          />
          <button onClick={handleSaveClick} className="btn btn-primary mr-3">Guardar</button>
        </>
      ) : (
        <>
          <span className={completada ? "text-decoration-line-through mr-3" : "mr-3"}>{tarea}</span>
          <button onClick={onDelete} className="btn btn-danger mr-3">Eliminar</button>
          <button onClick={handleEditClick} className="btn btn-secondary">Editar</button>
        </>
      )}
    </li>
  );
}

export default Tarea;
