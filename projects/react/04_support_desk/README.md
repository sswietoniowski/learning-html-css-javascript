# Support Desk

This is a simple support desk application that allows users to submit support tickets and view their status.

It was created using the following technologies:

- Vite,
- React (client):
  - Redux [:file_folder:](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) [:file_folder:](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd),
- Node.js (API):
  - Express,
  - Mongoose,
  - Visual Studio Rest Client,
- TypeScript,
- MongoDB (database):
  - MongoDB Compass.

This is a typical [MERN](https://www.bocasay.com/how-does-the-mern-stack-work/) fullstack application.

It consists of the following parts:

- [frontend](./frontend),
- [backend](./backend).

To start the application, run the following command:

```cmd
npm install
cd ./backend
npm install
cd ../frontend
npm install
cd ..
npm run dev
```

Alternatively, you can use [Docker](https://www.docker.com/) to run the application.

To start debug configuration, run the following command:

```cmd
docker-compose --file docker-compose.yaml up -d --build
```

To start production configuration, run the following command:

```cmd
docker-compose --file docker-compose.prod.yaml up -d --build
```
