import React from 'react';

function Filtros({ filtrarTareas }) {
  return (
    <div className="btn-group mb-3">
      <button onClick={() => filtrarTareas("Todas")} className="btn btn-outline-primary">Todas</button>
      <button onClick={() => filtrarTareas("Pendientes")} className="btn btn-outline-primary">Pendientes</button>
      <button onClick={() => filtrarTareas("Completadas")} className="btn btn-outline-primary">Completadas</button>
    </div>
  );
}

export default Filtros;
