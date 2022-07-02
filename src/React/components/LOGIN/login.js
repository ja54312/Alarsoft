import React from "react";
import Logo from '../../../assets/logo.png';
import IMG1 from '../../../assets/cdmxwallpaper.png';
import IMG2 from '../../../assets/cdmxwallpaper2.png';
import "./login.css"

const Login = () => {


    return(
        <>
            <div className="container-general-login">
                <div className="container-slider-login">
                    <span>El sistema màs preciso y exacto del mercado.</span>
                    <img src={IMG1} className='img-slider-login'/>
                </div>
                <div className="container-info-login">
                    <div className="container-logo-login">
                        <img src={Logo} className="img-logo-login"/>
                    </div>
                    <div className="container-title-login">
                        <span>Bienvenido de vuelta</span>
                    </div>
                    <div className="container-form-login">
                        <form className="form-login">
                            <label className="label-login">Usuario</label>
                            <input
                                type='text'
                                className="input-login"
                                placeholder="Ingresa tu usuario"
                            />
                            <div className="container-label-contraseña">
                                <label className="label-login">Contraseña</label>
                                <span>¿Has olvidado tu contraseña?</span>
                            </div>
                            <input
                                type='text'
                                className="input-login"
                                placeholder="Ingresa tu contraseña"
                            />
                            <button
                                className="button-login"
                            >Ingresar</button>
                        </form>
                    </div>
                    <div className="container-contactanos-login">
                        <p>
                            ¿Todavia no cuentas con una cuenta? 
                            <span>CONTACTANOS</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login