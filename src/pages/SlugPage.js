import { Helmet } from "react-helmet";
import { users } from "../db/slug";
import { Link, useParams } from "react-router-dom";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useState, useEffect } from "react";

import './styles/slug.css'

export default function SlugPage () {
    
    const { slug } = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            const found = users.find((u) => u.slug === slug);
            setInfo(found);
            setLoading(false);
        }

        // Simulamos un pequeño retraso (puedes quitarlo si quieres)
        setTimeout(fetchData, 500);
    }, [slug]);

    if (loading) {
        return (
            <div className="__loading_container">
                <p>Cargando perfil...</p>
            </div>
        );
    }

    if (!info) {
        return <p>No se encontró la información del usuario.</p>;
    }

    return (
        <>
            <Helmet>
                <title>{slug} | Lintro | Crea tu página en pocos click y date a conocer a tus clientes con un solo enlace.</title>
            </Helmet>

            <div className="__content_box_slug">

                <Link className="__wa_float" to={'https://wa.me/send?phone=51966327426&text=Hola'}>
                    <IconBrandWhatsapp size={28} strokeWidth={2} stroke={'#181818'} />
                </Link>

                <div className="__content_box_info">

                    <section className="__bg_profile">
                        <div className="__avatar"></div>
                        <div className="__info">
                            <h1>{info.name}</h1>
                            <p>{info.fullname}</p>
                        </div>
                    </section>
                    
                    <section className="__sec">
                        <h2>Contáctanos</h2>
                        <ul className="__list">
                            {info.contacts.map((c, index) => (
                                <li key={index} className="__itm">
                                    <Link to={c.link} target="_blank">{c.icon}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                    
                    <section className="__sec">
                        <h2>Redes Sociales</h2>
                        <ul className="__list">
                            {info.networks.map((c, index) => (
                                <li key={index} className="__itm">
                                    <Link to={c.link} target="_blank">{c.icon}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="__sec">
                        <h2>Nuestras especialidades</h2>
                        <ul className="__list_vert">
                            {info.services.map((service, idx) => (
                                <li key={idx}><span>{service.txt}</span></li>
                            ))}
                        </ul>
                    </section>

                </div>

            </div>
        </>
    )
}