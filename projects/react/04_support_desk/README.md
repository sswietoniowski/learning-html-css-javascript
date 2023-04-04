# Support Desk

This is a simple support desk application that allows users to submit support tickets and view their status.

## Technologies

This application was created using the following technologies:

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

## How to run

To start the application, run the following commands:

```cmd
npm install
cd ./backend
npm install
cd ../frontend
npm install
cd ..
```

Then you need to create the MongoDB database using MongoDB Atlas.

After that create `env.local` file inside the `backend` folder and update the following environment variables:

```env
# MongoDB Atlas connection configuration
VITE_MONGODB_USERNAME=NOT_REAL_USERNAME
VITE_MONGODB_PASSWORD=NOT_REAL_PASSWORD
VITE_MONGODB_CLUSTER=NOT_REAL_CLUSTER
VITE_MONGODB_DATABASE=supportdesk
# Redefine this setting in env.local only if you want to use more complex connection string
VITE_MONGODB_URI=mongodb+srv://$VITE_MONGODB_USERNAME:$VITE_MONGODB_PASSWORD@$VITE_MONGODB_CLUSTER/$VITE_MONGODB_DATABASE?retryWrites=true&w=majority

# JWT configuration
VITE_JWT_SECRET=NOT_REAL_SECRET # You can genearate a random UUID here: https://www.uuidgenerator.net/version4
```

Now you can start the application in development mode by running:

```cmd
npm run dev
```

That would start the backend and frontend in development mode.

You can access the application in your browser:

- frontend (client): [http://localhost:3000](http://localhost:3000),
- backend (api): [http://localhost:3001](http://localhost:3001).

Alternatively (a lot simpler :-)), you can use [Docker](https://www.docker.com/) to run the application.

In this case, we will use MongoDB database running in a container, so there is no need to edit the environment variables.

To start debug configuration, run the following command:

```cmd
docker-compose --file docker-compose.yaml up -d --build
```

To start production configuration, run the following command:

```cmd
docker-compose --file docker-compose.prod.yaml up -d --build
```

You can access the application in your browser.

Directly:

- frontend (client): [http://localhost:3000](http://localhost:3000),
- backend (api): [http://localhost:3001](http://localhost:3001).

Using proxy container:

- frontend (client): [http://localhost:8080](http://localhost:8080),
- backend (api): [http://localhost:8080/api](http://localhost:8080/api).
