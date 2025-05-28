import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconLocation, IconMail, IconPhone } from "@tabler/icons-react";

import avatarAAPRODEH from '../assets/img/logo-AAPRODEH.png'
import bannerAAPRODEH from '../assets/img/banner-AAPRODEH.avif'

import avatarFerreteriaJauja from '../assets/img/logo-ferreteria.png'
import bannerFerreteria from '../assets/img/banner-ferreteria.png'

//CAROUSEL
import carouselImage1 from '../assets/img/sliders/image_1.jpeg'
import carouselImage2 from '../assets/img/sliders/image_2.jpeg'
import carouselImage3 from '../assets/img/sliders/image_3.jpeg'
import carouselImage4 from '../assets/img/sliders/image_4.jpeg'
import carouselImage5 from '../assets/img/sliders/image_5.jpeg'
import carouselImage6 from '../assets/img/sliders/image_6.jpeg'

//PROVIDERS
import provider1 from '../assets/img/CEMENTO_ANDINO.png'
import provider2 from '../assets/img/CEMENTO_APU.png'
import provider3 from '../assets/img/CEMENTO_CEMEX.png'
import provider4 from '../assets/img/CEMENTO_INKA.png'

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
        fullname: '',
        description: 'VENTA DE MATERIALES DE CONSTRUCCION, AGREGADOS(ARENA, FINA,GRUESA,PIEDRA CHANCADA,HORMIGÓN) Y ALQUILER DE MAQUINARIAS PARA VACEADOS DE TECHOS Y ZAPATAS "TODOS LOS MATERIALES PUESTO EN OBRA"',
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
                link: 'https://goo.gl/maps/fqYv6wv3YKVXygct8',
                icon: <IconLocation size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            }
        ],
        networks: [
            {
                icon: <IconBrandFacebook size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />,
                link: 'https://www.facebook.com/share/1AXNTv8qcr/'
            },
            {
                icon: <IconBrandTiktok size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />,
                link: 'https://www.tiktok.com/@cesarramosmolina1?_t=ZM-8wiSsDIuwXI&_r=1'
            }
        ],
        tit: 'Nuestros productos',
        services: [
            { txt: 'Materiales de construcción' },
            { txt: 'Herramientas eléctricas' },
            { txt: 'Ferretería en general' },
            { txt: 'Asesoría técnica' },
            { txt: 'Servicio de Carga' },
            { txt: 'Alquiler de maquinarias para vaciado de Techos y Zapatas' },
            { txt: 'Venta de Arena Fina' },
            { txt: 'Venta de Arena Gruesa' },
            { txt: 'Venta de Piedra Chancada' },
            { txt: 'Venta de Hormigon' },
            { txt: 'Entregas a domicilio' }
        ],
        providers: [provider1, provider2, provider3, provider4],
        courusel: [
            carouselImage1,
            carouselImage2,
            carouselImage3,
            carouselImage4,
            carouselImage5,
            carouselImage6
        ]
    }    
]