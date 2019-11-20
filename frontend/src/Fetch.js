// TODO add URL domain to all requests
const domain = 'http://localhost:3300';

export default async (method, route, headers, body) => {
    try {
        const response = await fetch(`${domain}${route}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        return { ok: 1, status: response.status, ...data };
    } catch (error) {
        return { ok: 0, message: error.message };
    }
};
