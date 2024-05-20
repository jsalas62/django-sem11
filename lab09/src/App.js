import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          codigo: 1,
          descripcion: 'coca-cola',
          precio: 2.50
        },
        {
          codigo: 2,
          descripcion: 'inka-cola',
          precio: 2.20
        },
        {
          codigo: 3,
          descripcion: 'fanta',
          precio: 1.70
        }
      ]
    };
    this.borrar = this.borrar.bind(this);
  }
  borrar(codigo) {
    const updatedArticulos = this.state.articulos.filter(
      articulo => articulo.codigo !== codigo
    );
    this.setState({ articulos: updatedArticulos });
  }
  render() {
    return (
      <div className="container">
        <h1 className="my-4">Lista de Artículos</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => {
              return (
                <tr key={elemento.codigo}>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.descripcion}</td>
                  <td>${elemento.precio.toFixed(2)}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => this.borrar(elemento.codigo)}>
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;