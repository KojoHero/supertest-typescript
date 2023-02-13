import request from 'supertest'
import { baseUrl } from '../supertest.config'

describe('API test - get method', ()=>{
  it('should get',async()=>{
      await request(baseUrl)
      .get('/api/breeds/image/random')
});
})
