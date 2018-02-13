import httpStatus from 'http-status';
import request from 'supertest';
import app from '../app';

describe('Routes', () => {
  describe('GET /health', () => {
    it('should return OK', () => request(app)
      .get('/health')
      .expect(httpStatus.OK));
  });
  describe('GET /404', () => {
    it('should return Not Found', () => request(app).get('/404').expect(httpStatus.NOT_FOUND));
  });
});
