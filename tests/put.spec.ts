import request from 'supertest'
import { baseUrl } from '../supertest.config'

describe('test Method PUT', () => {
    
    it('responds with json', async () => {
      const res = await request(baseUrl)
        .put('/api/users/2')
        .send({ name: "Test", job: "Test Job" })
        .expect(200)
        .expect('Content-Type', /json/)
        expect(res.body).toHaveProperty('updatedAt')
    });
  });