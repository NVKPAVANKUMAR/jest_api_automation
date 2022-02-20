import local from "./local";
const supertest = require('supertest');
const router = supertest(local.apiUrl);

export default router;