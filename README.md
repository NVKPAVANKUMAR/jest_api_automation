## API-Test-Project

This project is an API test automation project for Kainos Functional and Automation capability. It is written in JavaScript and Jest.

### Getting Started

#### Install Node.Js

[Node.js] Is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets us use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

- Visit page: https://nodejs.org/en/download/

#### Install npm packages

[npm] Is the default package manager for the JavaScript runtime environment Node.js. `npm install`

- Visit page: https://docs.npmjs.com/cli/v8/commands/npm-install

#### install jest

[Jest] Is a JavaScript testing framework. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and Svelte. Jest does not require a lot of configuration for first time users of a testing framework. `npm install --save-dev jest`

- Visit page: https://jestjs.io/

**Note** Add the following section to your package.json:
``
{
"scripts": {
"test": "jest"
}
}

``

#### Install SuperTest

[SuperTest] Is a Node.js library that helps to test APIs. It extends another library called superagent, a JavaScript HTTP client for Node.js and the browser. We can use SuperTest as a standalone library or with JavaScript testing frameworks like Mocha or Jest. `npm install supertest --save-dev`

- Visit page: https://www.npmjs.com/package/supertest

#### Install babel/preset-env

[BabelSetUp] In order to use the latest features of JavaScript, we need to set up Babel. Babel allows us to convert new ES6 syntax into older versions of JavaScript that are backwards compatible. Since I'll be using new syntax like the "import" statement on my test, this setup is needed

For this specific Babel setup, I have chosen to use the `@babel/preset-env plugin`. This preset contains all the additional plugins that we would need to transpile all of our ES6 features.

- Visit page: https://babeljs.io/docs/en/babel-preset-env

#### Install babel-plugin-transform-runtime

- https://babeljs.io/docs/en/babel-plugin-transform-runtime

**Note** Create a `.babelrc` file at the root of the project and add the following setup. This setup will let us compile our code based on the current node version that we are using.

`{ "presets": [ "@babel/preset-env" ], "plugins": [ [ "@babel/transform-runtime", { "regenerator": true } ] ] }`

#### Install Faker

[Faker] Is an npm module whose sole purpose is to produce massive, well-organized, realistic fake data for testing applications. `npm install faker`

- Visit page: https://www.npmjs.com/package/faker

**Note** Use previous version `npm install faker@5.5.3`

#### Install casual

[Casual] Is an npm module whose sole purpose is to produce massive, well-organized, realistic fake data for testing applications. `npm install casual`

- Visit page: https://www.npmjs.com/package/casual

#### install dotevn

[DotEnv] Is a lightweight npm package that automatically loads environment variables from a . env file into the process. env object. To use dotenv, first install it using the command: `npm i dotenv` Then in your app, require and configure the package like this: `require('dotenv')`

- Visit page: https://www.npmjs.com/package/dotenv

**Note** Create an `.env` file at the root of the project and add Authorization `TOKEN`

- USER_TOKEN=xxxxxa11b59502a4676b4241da8de76dcfbf05xxxxxx

#### [GithubRepo] To clone the repo locally

- Open Terminal.
- Change the current working directory to the location where you want the cloned directory.
- Using the command`git clone `, and then paste the URL you copied earlier.
- `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

#### Install all relevant package and any packages that it depends on

- Run `npm install`

#### Run Test

- `npm test`

#### Report

- jest-html-reporters should be generated under reports folder.

#### GoRestAPI Documentation

[GoRestAPI] Is a free online REST API for that you can use whenever you need fake data, real responses 24/7 for
your Testing and Prototyping.
You can visit in detail docs in https://gorest.co.in for more information.

#### Resources

There are 4 main resources in Testing & prototyping:

- https://gorest.co.in/public/v1/users
- https://gorest.co.in/public/v1/posts
- https://gorest.co.in/public/v1/comments
- https://gorest.co.in/public/v1/todos

#### How to use curl to make REST API request

You can fetch data using cUrl methods.

- cUrl Examples

##### List users

```js
curl -i
-H "Accept:application/json"
-H "Content-Type:application/json"
-XGET "https://gorest.co.in/public/v1/users"
```

##### Create user

```js
curl -i
-H "Accept:application/json"
-H "Content-Type:application/json"
-H "Authorization: Bearer ACCESS-TOKEN"
-XPOST "https://gorest.co.in/public/v1/users"
-d '{"name":"Andy Test", "gender":"male", "email":"test.email@15ce.com", "status":"active"}'
```

##### Update user

```js
curl -i
-H "Accept:application/json"
-H "Content-Type:application/json"
-H "Authorization: Bearer ACCESS-TOKEN"
-XPATCH "https://gorest.co.in/public/v1/users/123"
-d '{"name":"Ruddy Peddana", "email":"test.dana@15ce.com", "status":"active"}'
```

##### Delete user

```js
curl -i
-H "Accept:application/json"
-H "Content-Type:application/json"
-H "Authorization: Bearer ACCESS-TOKEN"
-XDELETE "https://gorest.co.in/public/v1/users/123"
```

##### All routes used in the test

GET:

- /users (get all users)
- /users/1 (get single user by id)
- /users?email=andy@test.com (get a user by email)
- /users?gender=female (get users by gender)
- /users?status=active (get users by status)
- /users?status=active&gender=male (get users by querry parameter)

##### users fields

```js
fields:
{
    id:Number,
    name:String,
    email:String,
    gender:String,
    status:String
}
```

Request methods PUT, POST, PATCH, DELETE needs access token which needs to be passed with `Authorization` header as `Bearer Token`

POST:

- /users (create users)

-PUT,PATCH

- /users/1 (Update users)

-DELETE

- /users/1 (Delete users)
