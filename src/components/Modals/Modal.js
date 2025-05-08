import { IconBrandFacebook, IconBrandWhatsapp, IconBrandX, IconMail, IconX } from "@tabler/icons-react";
import { useUI } from "../../context/UI/UIContext";
import { Link } from "react-router-dom";

export default function Modal ({ info }) {

    const { toogleModal } = useUI();

    const shareLink = (platform, link) => {

        const msg = `¡Hola!, este es mi *Lintro* míralo: \n${link}`
        const encodedLink = encodeURIComponent(msg);
      
        const urls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}&t=${info.name}&d=${encodedLink}`,
            whatsapp: `https://wa.me/?text=${encodedLink}`,
            x: `https://twitter.com/intent/tweet?url=${encodedLink}`,
            email: `https://mail.google.com/mail/?view=cm&to=${info.mail}&subject=Contátanos+por+Lintro&body=${encodedLink}`,
        };
      
        window.open(urls[platform], '_blank');

    }      

    const copyLink = async (link) => {
        try {
            const msg = `¡Hola!, este es mi *Lintro* míralo: \n${link}`
            await navigator.clipboard.writeText(msg);
            alert("¡Link copiado al portapapeles!");
        } catch (err) {
            alert("Error al copiar el link");
        }
    };

    return (

        <div className="__overlay">
            <div className="__modal">
                <div className="__modal_head">
                    <h3>Comparte tu <b>Lintro</b></h3>
                    <button className="__btn" onClick={() => toogleModal()}><IconX/></button>
                </div>
                <div className="__modal_body">
                    <ul className="__brands">
                        <li className="__brand">
                            <button className="__bnd" onClick={() => shareLink('facebook', info.link)}><IconBrandFacebook/></button>
                        </li>
                        <li className="__brand">
                            <button className="__bnd" onClick={() => shareLink('whatsapp', info.link)}><IconBrandWhatsapp/></button>
                        </li>
                        <li className="__brand">
                            <button className="__bnd" onClick={() => shareLink('x', info.link)}><IconBrandX/></button>
                        </li>
                        <li className="__brand">
                            <button className="__bnd" onClick={() => shareLink('email', info.link)}><IconMail/></button>
                        </li>
                    </ul>
                    <div className="__urls">
                        <div className="__urls_box">
                            <input className="__entry_link" value={info.link} placeholder="Tu link de Lintro" readOnly />
                            <button className="__btn_link" onClick={() => copyLink(info.link)}>Copiar Lintro</button>
                        </div>
                    </div>
                </div>
                <div className="__modal_footer">
                    <p>Hecho con 🩷 por <Link to={`https://arcana.codes`} target="_blank"><b>ARCANA</b></Link></p>
                </div>
            </div>
        </div>

    )

}