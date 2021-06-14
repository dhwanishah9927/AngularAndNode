# FinalProject
Main Repository

## Run mongoDbApi
$ cd mongoDbApi
$ npm install
$ node start.js

## Run application (admin application)
$ cd application
$ npm install
$ ng serve

## Run Server
```bash
$ cd server
$ npm install -g gulp-cli
$ npm install
$ gulp build
$ npm start
```

The `socket.io` server will be running on port `8080`

When you run `npm start`, this folder leverages [nodemon](https://nodemon.io/) which will automatically reload the server after you make a change and save your Typescript file. 

## Run Angular Client(userApplication)

Open other command line window and run following commands:

```bash
$ cd userApplication
$ npm install
$ ng serve
```
