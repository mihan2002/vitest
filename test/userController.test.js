// tests/user.test.js
import request from 'supertest';
import { describe, it, expect, beforeEach } from 'vitest';
import app from '../app.js';
import { resetUsers } from '../models/userModel.js';

describe('User API', () => {
  beforeEach(() => {
    resetUsers();
  });

  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'John Doe',
      email: 'john@example.com',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    });
  });

  it('should fetch all users', async () => {
    await request(app).post('/api/users').send({
      name: 'John Doe',
      email: 'john@example.com',
    });
    const res = await request(app).get('/api/users');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should fetch a user by ID', async () => {
    await request(app).post('/api/users').send({
      name: 'John Doe',
      email: 'john@example.com',
    });
    const res = await request(app).get('/api/users/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'John Doe');
  });

  it('should update a user', async () => {
    await request(app).post('/api/users').send({
      name: 'John Doe',
      email: 'john@example.com',
    });
    const res = await request(app).put('/api/users/1').send({
      name: 'Jane Doe',
      email: 'jane@example.com',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      name: 'Jane Doe',
      email: 'jane@example.com',
    });
  });

  it('should delete a user', async () => {
    await request(app).post('/api/users').send({
      name: 'John Doe',
      email: 'john@example.com',
    });
    const res = await request(app).delete('/api/users/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);

    const getRes = await request(app).get('/api/users/1');
    expect(getRes.statusCode).toBe(404);
  });
});
