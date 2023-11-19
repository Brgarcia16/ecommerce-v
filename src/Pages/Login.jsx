import React from 'react';

export const Login = () => {
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
                        // value={formData.email}
                        // onChange={handleInputChange}
                        // required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                        // value={formData.password}
                        // onChange={handleInputChange}
                        // required
                        />
                    </div>
                    <a href="Registro">Registrase</a>
                    <button type="submit" className='btnSession'>Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};
