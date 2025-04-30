import { Helmet } from "react-helmet";
import { users } from "../db/slug";
import { Link, useParams } from "react-router-dom";
import { IconBrandWhatsapp } from "@tabler/icons-react";

import './styles/slug.css'

export default function SlugPage () {
    
    const { slug } = useParams();

    const info = users.find((u) => u.slug === slug);

    return (
        <>

            <Helmet>
                <title>{slug} | Lintro</title>
            </Helmet>

            <div className="__content_box_slug">

                <Link className="__wa_float" to={'https://wa.me/send?phone=51966327426&text=Hola'}><IconBrandWhatsapp size={28} strokeWidth={2} stroke={'#181818'} /></Link>

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