const request = require('supertest');
const app = require('../../index');

describe('User Routes', () => {
    it('should return 200 OK when getting all users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
    });

    it('should return 201 Created when creating a new user', async () => {
        const newUser = { name: 'John Doe', email: 'john@example.com' };
        const response = await request(app).post('/users').send(newUser);
        expect(response.status).toBe(201);
    });

    it('should return 404 Not Found when getting a non-existent user', async () => {
        const response = await request(app).get('/users/123');
        expect(response.status).toBe(404);
    });

    it('should return 200 OK when updating a user', async () => {
        const updatedUser = { name: 'Jane Doe', email: 'jane@example.com' };
        const response = await request(app).put('/users/123').send(updatedUser);
        expect(response.status).toBe(200);
    });

    it('should return 204 No Content when deleting a user', async () => {
        const response = await request(app).delete('/users/123');
        expect(response.status).toBe(204);
    });
    
});