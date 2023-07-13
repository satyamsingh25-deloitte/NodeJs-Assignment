const request = require('supertest');
const app = require('./app.js');

describe('GET /matches', () => {
  it('should return all matches', async () => {
    const response = await request(app).get('/matches');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(app.data.matches));
  });
});