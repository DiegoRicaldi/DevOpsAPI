process.env.NEW_RELIC_NO_CONFIG_FILE = 'true'; 
const request = require('supertest');
const app = require('../index'); // Asegúrate de que la ruta a tu archivo `index.js` sea correcta

describe('Comidas API Tests', () => {
    it('GET /api/comidas - should return all comidas', async () => {
        const response = await request(app).get('/api/comidas');
        
        // Verificamos que el código de estado sea 200
        expect(response.statusCode).toBe(200);
        
        // Verificamos que la respuesta sea un arreglo
        expect(Array.isArray(response.body)).toBe(true);
        
        // Verificamos que la longitud del arreglo sea la esperada (en este caso, 3)
        expect(response.body.length).toBe(3);

        // Verificamos que el contenido del arreglo sea el esperado
        expect(response.body).toEqual(expect.arrayContaining([
            { idcomida: 1, nombre: 'alitas', costo: 1000 },
            { idcomida: 2, nombre: 'pizza', costo: 4000 },
            { idcomida: 3, nombre: 'hamburguesa', costo: 2000 },
        ]));
    });
});
