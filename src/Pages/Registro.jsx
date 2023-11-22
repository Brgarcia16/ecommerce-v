import React, { useState } from 'react';

export const Registro = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes guardar los datos del usuario en localStorage
        localStorage.setItem('userData', JSON.stringify(formData));
        // También puedes enviar los datos a un servidor, realizar validaciones, etc.
        console.log('Usuario registrado:', formData);
    };
    return (
        <div className="containerLogin">
            <div className="form-wrapper-register">
                <h1 id='registerTitle'>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className='btnSessionRegister'>Registrarse</button>
                </form>
            </div>
        </div>
    );
};