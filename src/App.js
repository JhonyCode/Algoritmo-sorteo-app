import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="container-fluid d-flex flex-column vh-100 justify-content-center align-items-center">
        {/* Header */}
        <header className="mb-4">
          <h1>My React Bootstrap App</h1>
        </header>

        <div className="text-center">
          <h2>Bienvenido a mi aplicación</h2>
          <button className="btn btn-primary mt-3">Haz clic</button>
        </div>
      </div>
  );
}

export default App;
