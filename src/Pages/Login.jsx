import React, { useState, useEffect } from 'react';


export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [correctLogin, setCorrectLogin] = useState(false);

    const handleLogin = () => {
        const formData = JSON.parse(localStorage.getItem('userData'));

        if (formData != null) {
            if (formData.username === username) {
                if (formData.password === password) {
                    setCorrectLogin(true);
                } else {
                    alert("Password incorrecta")
                }
            } else {
                alert("Usuario incorrecto")
            }
        } else {
            console.log("Se debe registrar")
        }
    }

  

    return (
        <div className="containerLogin">
            <div className="form-wrapper">
                <h1>Login</h1>
                <form>
                    <div>
                        <label htmlFor="user">Usuario</label>
                        <input
                            type="user"
                            id="user"
                            name="user"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <a href="Registro">Registrarse</a>
                    <button type="submit" className='btnSession' onClick={handleLogin}>Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};
