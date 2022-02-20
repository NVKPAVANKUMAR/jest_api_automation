const faker = require('faker');
const casual = require('casual');
const randomName = faker.name.findName();
const randomGender = casual.random_element(['male', 'female']);
const randomStatus = casual.random_element(['active', 'inactive']);

export const createUsers = {
  email: faker.internet.email(),
  name: randomName,
  gender: randomGender,
  status: randomStatus,
};

export const updateUsers = {
  email: faker.internet.email(),
  gender: randomGender,
};

export const patchUsers = {
  name: randomName,
  status: randomStatus,
};

export const invalidUserInputData = {
  data: {
    email: faker.internet.email(),
    name: randomName,
    gender: randomGender,
    status: randomStatus,
  },
};
