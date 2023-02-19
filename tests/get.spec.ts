import request from 'supertest'
import { baseUrl } from '../supertest.config'

describe('API test - get method', ()=>{
  it('should get',async()=>{
      const res = await request(baseUrl)
      .get('/api/users/2')
      const response = res.body.data
      expect(response).toHaveProperty('first_name','Janet')
      expect(response).toHaveProperty('last_name','Weaver')
      expect(response).toHaveProperty('email','janet.weaver@reqres.in')
});
})
