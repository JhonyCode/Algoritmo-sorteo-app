import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeModal } from './components/modal/modalConfirmation';
import './App.css'
function App() {
    const [records, setRecords] = useState([]);
    const [winner, setWinner] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            const data = await response.json();
            setRecords(data);
            const modal = initializeModal()
            modal.show();
        } catch (error) {
            console.error('Error al obtener los registros:', error);
            setError('Error al obtener los registros. Por favor, inténtalo de nuevo.');
        }
    };

    const chooseWinner = () => {
        if (records.length === 0) {
            setError('No hay registros para elegir un ganador. Haz clic en el botón "Obtener Registros".');
            return;
        }

        const randomIndex = Math.floor(Math.random() * records.length);
        setWinner(records[randomIndex]);
    };

    return (
        <div className="text-center mt-xxl-5 mx-auto">
            <header>
                <h1>Sorteo Aleatorio</h1>
            </header>
            <div className="container-fluid d-flex flex-column justify-content-center ">
                <div className="text-center">
                    <h2>Sólo para miembros premium</h2>
                    <p>Haz clic en el botón para realizar un sorteo</p>
                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={() => fetchData()}>
                            Obtener datos
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => chooseWinner()}>
                            Click
                        </button>
                    </div>
                    {winner && (
                        <div className="mt-3">
                            <h3>Ganador:</h3>
                            <p>Número de ticket: {winner.id}</p>
                            <p>Nombre: {winner.name}</p>
                            <p>Email: {winner.email}</p>
                            {/* Mostrar otros datos del ganador según la estructura de los registros */}
                        </div>
                    )}
                    {error && <p className="text-danger mt-3">{error}</p>}
                </div>
            </div>
        {/*modal content*/}
    <div className="modal fade" id="dataModal" tabIndex="-1" aria-labelledby="dataModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="dataModalLabel">Datos Obtenidos</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   <p> Se han obtenido los datos correctamente,</p>
                    <p>ya puede realizar el sorteo.</p>
                </div>
            </div>
        </div>
    </div>
        </div>

    );
}

export default App;
