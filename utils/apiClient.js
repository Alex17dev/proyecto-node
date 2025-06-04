import fetch from 'node-fetch';

const BASE_URL = 'https://fakestoreapi.com';

export async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('❌ Error en la petición:', error.message);
        throw error;
    }
}
