import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [orden, setOrden] = useState("asc"); 

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fecha: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareas = () => {
    const nuevasTareas = [...tareas];
    if (orden === "asc") {
      nuevasTareas.sort((a, b) => a.fecha - b.fecha);
      setOrden("desc");
    } else {
      nuevasTareas.sort((a, b) => b.fecha - a.fecha);
      setOrden("asc");
    }
    setTareas(nuevasTareas);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Tareas</h1>
      <TareaForm agregarTarea={agregarTarea} />
      <Filtros filtrarTareas={filtrarTareas} />
      <button onClick={ordenarTareas} className="btn btn-info mb-3">Ordenar por Fecha</button>
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
}

export default App;
