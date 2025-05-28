import { Helmet } from "react-helmet";
import { users } from "../db/slug";
import { Link, useParams } from "react-router-dom";
import { IconBrandWhatsapp, IconShare2 } from "@tabler/icons-react";
import { useState, useEffect } from "react";

import './styles/slug.css'
import { useUI } from "../context/UI/UIContext";
import Modal from "../components/Modals/Modal";

export default function SlugPage () {
    
    const { slug } = useParams();

    const { modal, toogleModal } = useUI();

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
                <meta name="description" content={`${slug} - ${info?.name} | Lintro es una página donde puedes crear sitios web de manera sencilla y rápida, hecha con amor por ARCANA CORP.`}/>
                <meta name="keywords" content={`Lintro, crear páginas web, diseño rápido, páginas sencillas, ARCANA CORP, ${slug}, ${info?.name}, ${info?.fullname}, Jauja, Huancayo, Lima, Perú`}/>
                <meta name="author" content="ARCANA CORP"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://www.lintro.arcana.codes"/>

                <meta property="og:title" content={`${slug} | Lintro - Crea tu web fácil y rápido con ARCANA CORP`}/>
                <meta property="og:description" content={`Lintro es una herramienta desarrollada por ARCANA CORP que permite crear páginas web rápida y fácilmente. Proyecto para ${slug}.`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.lintro.arcana.codes"/>
                <meta property="og:image" content="/og_image.png"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={`${slug} | Lintro - Crea tu web con ARCANA CORP`}/>
                <meta name="twitter:description" content={`Lintro permite crear sitios web sencillos en pocos pasos. Un desarrollo de ARCANA CORP para ${slug} - ${info?.fullname}.`}/>
                <meta name="twitter:image" content="/og_twitter.png"/>

                <meta name="geo.region" content="PE"/>
                <meta name="geo.placename" content="Jauja, Huancayo, Lima"/>
                <meta name="geo.position" content="-12.0695;-75.2025"/>
                <meta name="ICBM" content="-12.0695, -75.2025"/>

                <title>{slug} - {info?.fullname} | Lintro | Crea tu página en pocos click y date a conocer a tus clientes con un solo enlace.</title>
            </Helmet>

            <div className={`__content_box_slug ${modal && '__content_box_slug_hidden'}`} style={{backgroundImage: `url(${info.banner})`, '--color-primary': info?.colors.primary, '--color-accent': info?.colors.accent }}>
                <div className="__overlay_linear"></div>
                <Link className="__wa_float" to={`https://api.whatsapp.com/send?phone=51${info?.phone}&text=Hola+*${info?.name}*+necesito+su+ayuda`} target="_blank">
                    <IconBrandWhatsapp size={28} strokeWidth={2} stroke={'#181818'} />
                </Link>

                <div className="__content_box_info">

                    <section className="__bg_profile">
                        <button className="__btn_share" onClick={() => toogleModal()}>
                            <IconShare2/>
                        </button>
                        <div className="__avatar">
                            <img src={info.avatar} alt={info.name} />
                        </div>
                        <div className="__info">
                            <h1>{info.name}</h1>
                            <p>{info.fullname || info.description}</p>
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
                        <h2>{info.tit}</h2>
                        <ul className="__list_vert">
                            {info?.services.map((service, idx) => (
                                <li key={idx} className={`itm-${service.type}`}><span>{service.txt}</span></li>
                            ))}
                        </ul>
                    </section>

                    {info?.providers && (
                        <section className="__sec">
                            <h2>Nuestros Proveedores</h2>
                            <ul className="__grid_providers">
                                {info?.providers.map((p, i) => (
                                    <li key={i} className="__grid_provider" style={{backgroundImage: `url(${p})`}}>
                                        <img src={p} alt={`Proveedores de cemento de ${info?.name}`} style={{display: "none"}} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {info?.courusel && (
                        <section className="__sec">
                            <h2>Imágenes</h2>
                            <div className="__slider_container">
                                <ul className="__slider_gallery">
                                    {[...info.courusel, ...info.courusel].map((c, i) => (
                                    <li key={i} className="__slider_card" style={{ backgroundImage: `url(${c})` }}>
                                        <img src={c} alt={`Imagen de ${info.name}`} />
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}


                </div>

                {modal && (
                    <Modal info={info} />
                )}

            </div>
        </>
    )
}