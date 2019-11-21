// TODO add URL domain to all requests
const domain = 'http://localhost:3300';

export default async (method, route, body, headers = {}) => {
    try {
        const requestBody = body ? JSON.stringify(body) : null;
        const response = await fetch(`${domain}${route}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: requestBody
        });
        const data = await response.json();

        return { ok: true, status: response.status, ...data };
    } catch (error) {
        return { ok: false, message: error.message };
    }
};
