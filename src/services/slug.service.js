const URL_API = 'https://lintro.ttutis.com/api/v1'

export const serviceGetSlug = async (slug) => {
    try {
        
        const response = await fetch(`${URL_API}/${slug}`)
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
            return data;

    } catch (error) {
        return { ok: false, message: error, error: error, code: 500 }
    }
}

export const serviceUpdateInfoSlug = async (slug, column, value) => {
    try {
        
        const response = await fetch(`${URL_API}/${slug}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({column, value})
        })

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);
            
            return data;

    } catch (error) {
        return { ok: false, message: error, error: error, code: 500 }
    }
}