import { IconBrandFacebook, IconInfoCircle, IconListDetails, IconPalette } from '@tabler/icons-react'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';
import { Helmet } from 'react-helmet';
import { useDB } from '../context/DB/DBContext';

import Info from '../components/Forms/Info';
import { serviceGetSlug } from '../services/slug.service';

import './styles/edit.css'

export default function EditPage () {

    const { slug } = useParams();
    const { info, savedInfo } = useDB();

    const [ tab, setTab ] = useState('info')

    useEffect(() => {
        const getInfo = async () => {
            try {
                const data = await serviceGetSlug(slug);
                if (!data.ok) return toast.warning(data.message)
                    savedInfo(data.info)
            } catch (error) {
                toast.error(error.message)
            }
        }
        getInfo();
    }, [slug, savedInfo])

    return (

        <>

            <Helmet>
                <title>{`Editar ${info?.name} | Lintro | Crea tu página en pocos click y date a conocer a tus clientes con un solo enlace.`}</title>
            </Helmet>
        
            <div className='__box_edit'>
                <h1>Editar {slug}</h1>
                <ul className='__tabs'>
                    <li className={`__tab ${tab === 'info' ? ' __tab--active' : ''}`}><button onClick={() => setTab('info')}><IconInfoCircle strokeWidth={1.2}/> Información</button></li>
                    <li className={`__tab ${tab === 'design' ? ' __tab--active' : ''}`}><button onClick={() => setTab('design')}><IconPalette strokeWidth={1.2}/> Diseño</button></li>
                    <li className={`__tab ${tab === 'social' ? ' __tab--active' : ''}`}><button onClick={() => setTab('social')}><IconBrandFacebook strokeWidth={1.2}/> Redes</button></li>
                    <li className={`__tab ${tab === 'services' ? ' __tab--active' : ''}`}><button onClick={() => setTab('services')}><IconListDetails strokeWidth={1.2}/> Servicios</button></li>
                </ul>
                <div className='__body'>
                    {tab === 'info' && (
                        <Info slug={slug} />
                    )}
                </div>
            </div>

            <Toaster position='top-center' richColors />

        </>

    )

}