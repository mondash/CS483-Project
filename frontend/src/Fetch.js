// TODO test, figure out url
export default async (method, url, headers, body) => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return { success: 1, data };
    } catch (error) {
        return { success: 0, message: error.message };
    }
};
