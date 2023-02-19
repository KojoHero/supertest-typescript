import request from 'supertest'
import { baseUrl } from '../supertest.config'

describe('test Method PATCH', () => {
    
    it('api patch request', async () => {
      const res = await request(baseUrl)
        .patch('/api/users/2')
        .send({ name: "Test", job: "Test Job" })
        .expect(200)
        .expect('Content-Type', /json/)
        expect(res.body).toHaveProperty('updatedAt')
    });
  });