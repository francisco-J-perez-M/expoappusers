import { storeData } from "../utils/storage";
const API_URL = 'http://18.117.11.38:3000/usuarios';

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const textResponse = await response.text();
        console.log('Respuesta del servidor:', textResponse); 

        const data = JSON.parse(textResponse); 
        if (response.ok && data.access_token) {
            await storeData('authToken', data.access_token);
            await storeData('user', JSON.stringify(data.user));
            console.log('Token almacenado:', data.access_token);
            return { success: true, user: data.user };
        }
        return { success: false, message: data.msg || 'Error en login' };
    } catch (error) {
        console.error('Error de conexión con el servidor:', error);
        return { success: false, message: 'Error de conexión con el servidor' };
    }
};