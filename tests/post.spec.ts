import request from 'supertest'
import { baseUrl } from '../supertest.config'

describe('POST /api/post', () => {
    it('responds with json', async () => {
      const res = await request(baseUrl)
        .post('/api/users')
        .send({ email: "eve.holt@reqres.in", password: "cityslicka" })
        .expect(201)
        .expect('Content-Type', /json/)
        console.log(res.body)
    });
  });