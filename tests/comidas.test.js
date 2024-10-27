
const request = require('supertest');
const app = require('../index'); 

describe('Comidas API Tests', () => {
    

    it('GET /api/comidas - should return all comidas', async () => {
        const response = await request(app).get('/api/comidas');
        
        
        expect(response.statusCode).toBe(200);
        
       
        expect(Array.isArray(response.body)).toBe(true);

        
        expect(response.body.length).toBeGreaterThan(0);

        
        response.body.forEach(comida => {
            expect(comida).toHaveProperty('idcomida');
            expect(comida).toHaveProperty('nombre');
            expect(comida).toHaveProperty('costo');
        });
    });
});
