import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Formulario</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputNombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="exampleInputNombre" aria-describedby="nombreHelp" placeholder="Nombre" />
                  <div id="nombreHelp" className="form-text">Por favor ingresa tu nombre.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Correo Electrónico" />
                  <div id="emailHelp" className="form-text">Por favor ingresa tu correo electrónico.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleMensaje" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="exampleMensaje" rows="3" placeholder="Mensaje"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
