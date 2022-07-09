import React, { useState } from "react";
import Logo from '../../../assets/logo.png';
import IMG1 from '../../../assets/cdmxwallpaper.png';
import IMG2 from '../../../assets/cdmxwallpaper2.png';
import OJO from '../../../assets/Ojo.png';
import OJO2 from '../../../assets/Ojo2.png';
import "./login.css"

const Login = () => {

    const [user,setUser] = useState()
    const [password,setPassword] = useState()

    //Funcion para cambio de puntos en Slider
    const PUNTOS = (i) =>{ 
        const grande  = document.querySelector('.tractionItems');
        const punto  = document.querySelectorAll('.punto');
             // Calculando el espacio que debe DESPLAZARSE el GRANDE
             let operacion = i * -100
             // MOVEMOS el grand
             grande.style.transform = `translateX(${ operacion }%)`
            // Quitamos la clase ACTIVO a TODOS los punto
            // Añadir la clase activo en el punto que hemos hecho CLICK
            if(i=== 0){
                punto[0].classList.add('punto-seleccionado')
                punto[1].classList.remove('punto-seleccionado')
            }else{
                punto[1].classList.add('punto-seleccionado')
                punto[0].classList.remove('punto-seleccionado')
            }
    }

    //Funcion para cambiar Ojo de contraseña
    const Ojos = () =>{
        const divojos = document.getElementById('ojos')
        const divcontraseña = document.getElementById('contraseña')
        //divcontraseña.type('text')
    }

    return(
        <>
            <div className="container-general-login">
                <div className="container-slider-login">
                    <div className="tractionItems">
                        <img src={IMG1} className='img-slider-login'/>
                        <img src={IMG2} className='img-slider-login'/>
                    </div>
                    <div className="container-slider-bottom">
                        <span>El sistema màs preciso y exacto del mercado.</span>
                        <div className="container-puntos-slider">
                            <div className="punto punto-seleccionado" onClick={()=>PUNTOS(0)}></div>
                            <div className="punto" onClick={()=>PUNTOS(1)}></div>
                        </div>
                    </div>
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
                            <div className="container-general-inputs">
                                <input
                                    id="Usuario"
                                    type='text'
                                    className="input-login"
                                    placeholder="Ingresa tu usuario"
                                    onChange={(e) => setUser(e.target.value)}
                                />
                            </div>
                            <div className="container-label-contraseña">
                                <label className="label-login">Contraseña</label>
                                <span>¿Has olvidado tu contraseña?</span>
                            </div>
                            <div className="container-general-inputs">
                                <div className="container-input-contraseña">
                                    <input
                                        id="contraseña"
                                        type='password'
                                        className="input-login"
                                        placeholder="Ingresa tu contraseña"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="container-ojo">
                                        <img  id="ojos" src={OJO} className="ojo" onClick={Ojos}/>
                                    </span>
                                </div>
                            </div>
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