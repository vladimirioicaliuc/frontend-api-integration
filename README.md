# Integrate Articles API with front-end application

Create a simple front-end application with your framework / library of choice (e.g. React, Angular, Vue, etc) and integrate the given Articles API.

<object data="PA1.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="PA1.pdf">
        <p>Please download the PDF to view the practical assigment: <a href="PA1.pdf">Download PDF</a>.</p>
    </embed>
</object>

## How to start locally

In order to start locally and do development you need to do the following:

- make sure that you have the node 18 or above, check this by running the `node --version`
- run `npm install` in the root folder
- run `npm run api-libraries` in the root folder to install the libraries for the api
- start the api by running `npm run start`
- update the `API_URL` value in the `/src/constants/env.ts` with `http://localhost:3000`
- run `npm run dev` in another terminal window
- open your browser and navigate to `http://localhost:8080`

## How to run using docker

In order to start the app using docker you need to run the following commands:

- make sure you have docker installed, check this by running `docker --version`
- run `docker build -t frontend-api-integration:0.0.1 .`, to build your docker image
- run `docker run -p80:3000 frontend-api-integration:0.0.1`
- open your browser and navigate to `http://localhost/`

## How to run tests

After installing all the libraries run `npm run test` in the root folder
