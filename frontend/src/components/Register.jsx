import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        genero: '',
        cedula: '',
        telefono: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            user: {
                email: formData.email,
                password: formData.password
            },
            nombre: formData.nombre,
            edad: formData.edad,
            genero: formData.genero,
            cedula: formData.cedula,
            telefono: formData.telefono
        };
    
        axios.post('http://localhost:8000/api/register/', data)
            .then(response => {
                navigate('/success');
            })
            .catch(error => {
                setError('Hubo un problema con el registro. Por favor, intenta de nuevo.');
            });
    };

    return (

        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Lamda"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rPcqlJl-ffpyZXx7wUadUXDk6o1sWyauOg&s"
                        className="mx-auto h-20 w-50"
                    />

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Registrar cuenta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text" name="nombre" value={formData.nombre} onChange={handleChange} required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="edad" className="block text-sm font-medium leading-6 text-gray-900">
                                Edad
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number" name="edad" value={formData.edad} onChange={handleChange} required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="genero" className="block text-sm font-medium leading-6 text-gray-900">
                                    Genero
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    type="text" name="genero" value={formData.genero} onChange={handleChange} required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="cedula" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cedula de ciudadania
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    type="text" name="cedula" value={formData.cedula} onChange={handleChange} required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                                    telefono
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    type="text" name="telefono" value={formData.telefono} onChange={handleChange} required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="correo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Correo
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    type="email" name="email" value={formData.email} onChange={handleChange} required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    type="password" name="password" value={formData.password} onChange={handleChange} required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarse</button>
                        </div>

                        {error && <p className="error">{error}</p>}
                    </form>

                </div>
            </div>
        </>

    );
};

export default Register;
