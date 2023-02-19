import request from 'supertest'
import { baseUrl } from '../supertest.config'

describe('test Method DELETE', () => {
    
    it('api delete request', async () => {
      const res = await request(baseUrl)
        .delete('/api/users/2')
        .expect(204)
    });
  });