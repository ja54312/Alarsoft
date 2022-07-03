import React from "react";
import Logo from '../../../assets/logo.png';
import IMG1 from '../../../assets/cdmxwallpaper.png';
import IMG2 from '../../../assets/cdmxwallpaper2.png';
import "./login.css"

const Login = () => {

    const grande  = document.getElementById('tractionItems');
    const punto  = document.querySelectorAll('.puntos');
    console.log(grande,"grande")
    console.log(punto,"punto")
     // Recorrer TODOS los punto
     punto.forEach( (  i )=> {
        // Asignamos un CLICK a cadaPunto
        punto[i].addEventListener('click',()=>{
            console.log('click punto')
          // Guardar la posición de ese PUNTO
          let posicion  = i
          // Calculando el espacio que debe DESPLAZARSE el GRANDE
          let operacion = posicion * -100
  
          // MOVEMOS el grand
          grande.style.transform = `translateX(${ operacion }%)`
  
          // Recorremos TODOS los punto
          punto.forEach( ( i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('punto-seleccionado')
          })
          // Añadir la clase activo en el punto que hemos hecho CLICK
          punto[i].classList.add('punto-seleccionado')
        })
      })

  


    return(
        <>
            <div className="container-general-login">
                <div className="container-slider-login">
                    <div className="tractionItems" id="tractionItems">
                        <img src={IMG1} className='img-slider-login'/>
                        <img src={IMG2} className='img-slider-login'/>
                    </div>
                    <div className="container-slider-bottom">
                        <span>El sistema màs preciso y exacto del mercado.</span>
                        <div className="container-puntos-slider">
                            <div className=" puntos punto punto-seleccionado"></div>
                            <div className="puntos punto"></div>
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