import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Vehicle = () => {
    const [selectedBike, setSelectedBike] = useState([]);
    const [selectedAuto, setSelectedAuto] = useState([]);
    const [selectedCar, setSelectedCar] = useState([]);
    const [selectedPremiumCar, setSelectedPremiumCar] = useState([]);
    const [selectedElectricVehicle, setSelectedElectricVehicle] = useState([]);

    const handleVehicleBike = (event) => {
        const selectedValue = event.target.innerText;
        if (selectedValue === 'Bike') {
            setSelectedBike([
                {
                    id: 1,
                    Vehicletype: 'Bike',
                    FromKM: '10',
                    toKM: '100',
                    Amount: '50',
                },
            ]);
        } else {
            setSelectedBike([]);
        }
    };

    const handleVehicleAuto = (event) => {
        const selectedValue = event.target.innerText;
        if (selectedValue === 'Auto') {
            setSelectedAuto([
                {
                    id: 1,
                    Vehicletype: 'Auto',
                    FromKM: '10',
                    toKM: '100',
                    Amount: '50',
                },
            ]);
        } else {
            setSelectedAuto([]);
        }
    };
    const handleVehicleCar = (event) => {
        const selectedValue = event.target.innerText;
        if (selectedValue === 'Car') {
            setSelectedCar([
                {
                    id: 1,
                    Vehicletype: 'Car',
                    FromKM: '10',
                    toKM: '100',
                    Amount: '50',
                },
            ]);
        } else {
            setSelectedCar([]);
        }
    };
    const handleVehiclePremiumCar = (event) => {
        const selectedValue = event.target.innerText;
        if (selectedValue === 'PremiumCar') {
            setSelectedPremiumCar([
                {
                    id: 1,
                    Vehicletype: 'PremiumCar',
                    FromKM: '10',
                    toKM: '100',
                    Amount: '50',
                },
            ]);
        } else {
            setSelectedPremiumCar([]);
        }
    };
    const handleVehicleElectricVehicle = (event) => {
        const selectedValue = event.target.innerText;
        if (selectedValue === 'Electric Vehicle') {
            setSelectedElectricVehicle([
                {
                    id: 1,
                    Vehicletype: 'Electric Vehicle',
                    FromKM: '10',
                    toKM: '100',
                    Amount: '50',
                },
            ]);
        } else {
            setSelectedElectricVehicle([]);
        }
    };

    return (
        <div className="main d-flex">
            <div className="container-fluid col-6">
                <h1>Vehicle Type</h1>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li value="Bike" onClick={handleVehicleBike}>
                            Bike
                        </li>
                        <li value="Auto" onClick={handleVehicleAuto}>
                            Auto
                        </li>
                        <li value="Auto" onClick={handleVehicleCar}>
                            Car
                        </li>
                        <li value="Auto" onClick={handleVehiclePremiumCar}>
                            PremiumCar
                        </li>
                        <li value="Auto" onClick={handleVehicleElectricVehicle}>
                            Elecric Vehicle
                        </li>
                      
                    </ul>

                    <div>
                        {selectedBike && selectedBike.length > 0 && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Vehicle Type</th>
                                        <th>From KM</th>
                                        <th>To KM</th>
                                        <th>Amount</th>
                                        <button>Add</button>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedBike.map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.Vehicletype}</td>
                                            <td>{e.FromKM}</td>
                                            <td>{e.toKM}</td>
                                            <td>{e.Amount}</td>
                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div>
                        {selectedAuto && selectedAuto.length > 0 && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Vehicle Type</th>
                                        <th>From KM</th>
                                        <th>To KM</th>
                                        <th>Amount</th>
                                        <button>Add</button>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedAuto.map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.Vehicletype}</td>
                                            <td>{e.FromKM}</td>
                                            <td>{e.toKM}</td>
                                            <td>{e.Amount}</td>
                                        
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div>
                        {selectedCar && selectedCar.length > 0 && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Vehicle Type</th>
                                        <th>From KM</th>
                                        <th>To KM</th>
                                        <th>Amount</th>
                                        <button>Add</button>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedCar.map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.Vehicletype}</td>
                                            <td>{e.FromKM}</td>
                                            <td>{e.toKM}</td>
                                            <td>{e.Amount}</td>
                                    
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div>
                        {selectedPremiumCar && selectedPremiumCar.length > 0 && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Vehicle Type</th>
                                        <th>From KM</th>
                                        <th>To KM</th>
                                        <th>Amount</th>
                                        <button>Add</button>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedPremiumCar.map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.Vehicletype}</td>
                                            <td>{e.FromKM}</td>
                                            <td>{e.toKM}</td>
                                            <td>{e.Amount}</td>
                                    
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div>
                        {selectedElectricVehicle && selectedElectricVehicle.length > 0 && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Vehicle Type</th>
                                        <th>From KM</th>
                                        <th>To KM</th>
                                        <th>Amount</th>
                                        <button>Add</button>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedElectricVehicle.map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.Vehicletype}</td>
                                            <td>{e.FromKM}</td>
                                            <td>{e.toKM}</td>
                                            <td>{e.Amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicle;
