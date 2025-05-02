import { Helmet } from "react-helmet";
import logo from '../assets/img/logo.svg'
import { Link } from "react-router-dom";

import './styles/home.css'

export default function HomePage () {

    return (

        <>
        
            <Helmet>
                <title>Lintro | Crea tu página en pocos click y date a conocer a tus clientes con un solo enlace.</title>
            </Helmet>

            <div className="__content_box">

                <div className="__content_img">
                    <img src={logo} alt="Lintro | Crea tu página en pocos click y date a conocer a tus clientes con un solo enlace." />
                </div>    
                <h1 className="__tit_h1">Sitio en construcción</h1>
                <p className="__txt_p">Estamos construyendo una nueva experiencia pero si quieres tu <b>Lintro</b> dale click 👉 <Link to={'https://api.whatsapp.com/send?phone=51966327426'} target="_blank">aquí</Link></p>
            
            </div>

        </>

    )

}