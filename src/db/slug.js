import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconLocation, IconMail, IconPhone } from "@tabler/icons-react";

export const users = [
    {
        slug: 'AAPRODEH',
        name: 'AAPRODEH',
        fullname: 'Asociación de Abogados Pro Derechos Humanos',
        contacts: [
            {
                link: 'tel:+51987654321',
                icon: <IconPhone size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            },
            {
                link: '',
                icon: <IconMail size={24} strokeWidth={1.2} stroke={'#FFFFFF'} />
            },
            {
                link: '',
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
    }
]