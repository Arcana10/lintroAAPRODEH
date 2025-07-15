import { IconCheck, IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";
import { serviceUpdateInfoSlug } from "../../services/slug.service";
import { useDB } from "../../context/DB/DBContext";

export default function Info({slug}) {

    const { info } = useDB();

    const [editingEntry, setEditingEntry] = useState(''); // label del campo que se está editando
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        phone: ''
    });
    const [ loading, setLoading ] = useState(false);

    const handleEditing = async (label) => {
        if (editingEntry === label) {
            try {
                setLoading(true)
                const data = await serviceUpdateInfoSlug(slug, label, formData[label]);
                if (!data.ok) return toast.warning(data.message)
                    toast.success(data.message)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
                setEditingEntry('')
            }
        } else {
            setEditingEntry(label);
        }
    };

    const handleChange = (label, value) => {
        setFormData(prev => ({
            ...prev,
            [label]: value
        }));
    };

    return (
        <div className='__form'>
            {[
                { label: 'name', txt: 'Ingresa tu nombre de usuario', placeholder: info?.name || 'Ingresa tu nombre de usuario' },
                { label: 'fullname', txt: 'Ingresa tu nombre', placeholder: info?.fullname || 'Ingresa tu nombre' },
                { label: 'mail', txt: 'Ingresa tu correo electrónico', placeholder: info?.mail || 'Ingresa tu correo electrónico' },
                { label: 'phone', txt: 'Ingresa tu número de teléfono', placeholder: info?.phone || 'Ingresa tu número de teléfono' },
                { label: 'location', txt: 'Ingresa tu dirección', placeholder: info?.location || 'Ingresa tu dirección' },
            ].map(field => (
                <div className='__form_group' key={field.label}>
                    <label>{field.txt}</label>
                    <div className='__form_control'>
                        <input type='text' placeholder={field.placeholder} value={formData[field.label]} onChange={e => handleChange(field.label, e.target.value)} disabled={editingEntry !== field.label}/>
                        <button type="button" onClick={() => handleEditing(field.label)}>
                            {loading && editingEntry === field.label ? (
                                <span className="__loading"></span>
                            ) : (
                                editingEntry === field.label ? <IconCheck /> : <IconEdit />
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}