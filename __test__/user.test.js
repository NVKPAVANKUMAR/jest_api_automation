import router from '../config/common';
import {
  createUsers,
  updateUsers,
  patchUsers,
  invalidUserInputData,
} from '../helper/user-helper';
require('dotenv').config();
const TOKEN = process.env.USER_TOKEN;

describe('Users API', () => {
  it('Get all User', async () => {
    const response = await router.get('/users');
    expect(response.status).toBe(200);
    console.log(response.body);
    expect(response.body).not.toEqual({});
  });

  it('Get user by Email', async () => {
    const response = await router.get('/users?email=ayodele@gmail.com');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).not.toEqual({});
    response.body.data.forEach((data) => {
      expect(data.email).toEqual('ayodele@gmail.com');
    });
  });

  it('Get female gender Users', async () => {
    const response = await router.get('/users?gender=female');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).not.toEqual({});
    response.body.data.forEach((data) => {
      expect(data.gender).toEqual('female');
    });
  });

  it('Get male gender Users', async () => {
    const response = await router.get('/users?gender=male');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).not.toEqual({});
    response.body.data.forEach((data) => {
      expect(data.gender).toEqual('male');
    });
  });

  it('Get users by Active status', async () => {
    const response = await router.get('/users?status=active');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).not.toEqual({});
    response.body.data.forEach((data) => {
      expect(data.status).toEqual('active');
    });
  });

  it('Get users by Inactive status', async () => {
    const response = await router.get('/users?status=inactive');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).not.toEqual({});
    response.body.data.forEach((data) => {
      expect(data.status).toEqual('inactive');
    });
  });

  describe('POST/ Add new userId to Tests', () => {
    let userId;

    it('POST/ Add a new User', async () => {
      const response = await router
        .post('/users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(createUsers);
      console.log(response.body);
      expect(response.status).toBe(201);
      expect(response.body).not.toEqual({});
      expect(response.body).toMatchObject({ data: {} });
      userId = response.body.data.id;
    });

    it('Get a single User/:id', async () => {
      const response = await router
        .get(`/users/${userId}`)
        .set('Authorization', `Bearer ${TOKEN}`);
      console.log(response.body);
      expect(response.status).toBe(200);
      expect(response.body).not.toEqual({});
      expect(response.body.data.id).toEqual(userId);
    });

    it('PUT/ udate user Email :id', async () => {
      const response = await router
        .put(`/users/${userId}`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(updateUsers);
      console.log(response.body);
      expect(response.status).toBe(200);
      expect(response.body).not.toEqual({});
      expect(response.body).toMatchObject({ data: {} });
    });

    it('PATCH/ udate user Name', async () => {
      const response = await router
        .put(`/users/${userId}`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(patchUsers);
      console.log(response.body);
      expect(response.status).toBe(200);
      expect(response.body).not.toEqual({});
      expect(response.body).toMatchObject({ data: {} });
    });

    it('Delect User/:id', async () => {
      const response = await router
        .delete(`/users/${userId}`)
        .set('Authorization', `Bearer ${TOKEN}`);
      console.log(response.body);
      expect(response.status).toBe(204);
      expect(response.body).toMatchObject({});
    });
  });

  it('Get users by querry param', async () => {
    const response = await router.get('/users?status=active&gender=male');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).not.toEqual({});
    response.body.data.forEach((data) => {
      expect(data.status).toEqual('active');
      expect(data.gender).toEqual('male');
    });
  });
});

describe('Negative Test', () => {
  it('404 The request does not exist', async () => {
    const response = await router
      .post('/user')
      .set('Authorization', `Bearer ${TOKEN}`)
      .send(createUsers);
    console.log(response.body);
    expect(response.status).toBe(404);
  });

  it('401/ Authentication Failed', async () => {
    const response = await router.post('/users').send(createUsers);
    console.log(response.body);
    expect(response.status).toBe(401);
  });

  it('422/ Data validation failed', async () => {
    const response = await router
      .post('/users')
      .set('Authorization', `Bearer ${TOKEN}`)
      .send(invalidUserInputData);
    console.log(response.body);
    expect(response.status).toBe(422);
  });
});
