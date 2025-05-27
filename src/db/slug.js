import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconLocation, IconMail, IconPhone } from "@tabler/icons-react";

import avatarAAPRODEH from '../assets/img/logo-AAPRODEH.png'
import bannerAAPRODEH from '../assets/img/bodegon-balanza-justicia_23-2149776027 (1).avif'

import avatarFerreteriaJauja from '../assets/img/logo_miferreteria.webp'
import bannerFerreteria from '../assets/img/banner_miferreteria.avif'

export const users = [
    {
        slug: 'AAPRODEH',
        link: 'https://lintro.arcana.codes/AAPRODEH',
        name: 'AAPRODEH',
        fullname: 'Asociación de Abogados Pro Derechos Humanos',
        avatar: avatarAAPRODEH,
        banner: bannerAAPRODEH, // Aquí debes importar o asignar la imagen banner
        mail: 'aaprodeh@gmail.com',
        phone: '908503474',
        colors: {
            primary: '#181818',
            accent: '#FFFFFF'
        },
        contacts: [
            {
                link: 'tel:+51908503474',
                icon: <IconPhone size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            },
            {
                link: 'https://mail.google.com/mail/?view=cm&to=aaprodeh@gmail.com',
                icon: <IconMail size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            },
            {
                link: 'https://maps.app.goo.gl/9MCmV4X6JiRbp8Sw6',
                icon: <IconLocation size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            }
        ],
        networks: [
            {
                icon: <IconBrandFacebook size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />,
                link: '',
            },
            {
                icon: <IconBrandInstagram size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />,
                link: '',
            },
            {
                icon: <IconBrandLinkedin size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />,
                link: '',
            },
        ],
        tit: 'Nuestras especialidades',
        services: [
            {
                txt: 'Derecho Administrativo'
            },
            {
                txt: 'Derecho Pesquero'
            },
            {
                txt: 'Derecho Registral'
            },
            {
                txt: 'Derecho Penal'
            },
            {
                txt: 'Derecho Constitucional'
            },
            {
                txt: 'Derecho Civil'
            },
            {
                txt: 'Derecho Tributario'
            }
        ]
    },
    {
        slug: 'Ferreteria-Cesar',
        link: 'https://lintro.arcana.codes/Ferreteria-Cesar',
        name: 'Ferretería Cesar',
        fullname: 'Ferretería Cesar - Materiales y Herramientas',
        avatar: avatarFerreteriaJauja, // Aquí debes importar o asignar la imagen logo
        banner: bannerFerreteria, // Aquí debes importar o asignar la imagen banner
        mail: 'contacto@ferreteriacesar.pe',
        phone: '925228081',
        colors: {
            primary: '#ff7a28',
            accent: '#FFFFFF'
        },
        contacts: [
            {
                link: 'tel:+51925228081',
                icon: <IconPhone size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            },
            {
                link: 'mailto:contacto@ferreteriacesar.pe',
                icon: <IconMail size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            },
            {
                link: 'https://maps.app.goo.gl/ubicacion-ferreteria-jauja',
                icon: <IconLocation size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            }
        ],
        networks: [
            {
                icon: <IconBrandFacebook size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />,
                link: 'https://facebook.com/ferreteriajauja'
            },
            {
                icon: <IconBrandInstagram size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />,
                link: 'https://instagram.com/ferreteriajauja'
            }
        ],
        tit: 'Nuestros productos',
        services: [
            { txt: 'Materiales de construcción' },
            { txt: 'Herramientas eléctricas' },
            { txt: 'Ferretería en general' },
            { txt: 'Asesoría técnica' },
            { txt: 'Alquiler de maquinarias para vaciado de Techos y Zapatas' },
            { txt: 'Venta de Arena Fina' },
            { txt: 'Venta de Arena Gruesa' },
            { txt: 'Venta de Piedra Chancada' },
            { txt: 'Venta de Hormigon' },
            { txt: 'Entregas a domicilio' }
        ]
    }    
]