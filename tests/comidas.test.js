process.env.NEW_RELIC_NO_CONFIG_FILE = 'true'; 
//evitar a new relicc
const request = require('supertest');
const app = require('../index'); 

describe('Comidas API Tests', () => {
    it('GET /api/comidas - should return all comidas', async () => {
        const response = await request(app).get('/api/comidas');
        
      
        expect(response.statusCode).toBe(200);
        
      
        expect(Array.isArray(response.body)).toBe(true);
        
       
        expect(response.body.length).toBe(3);

       
        expect(response.body).toEqual(expect.arrayContaining([
            { idcomida: 1, nombre: 'alitas', costo: 1000 },
            { idcomida: 2, nombre: 'pizza', costo: 4000 },
            { idcomida: 3, nombre: 'hamburguesa', costo: 2000 },
        ]));
    });
});


