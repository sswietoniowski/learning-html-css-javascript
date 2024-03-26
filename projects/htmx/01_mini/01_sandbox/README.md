# Sandbox

This is a simple demo of the basic features of the **[HTMX](https://htmx.org/)**.

- [Sandbox](#sandbox)
  - [Features](#features)
  - [Setup](#setup)

## Features

This application has the following features:

- `request.html`: Simple example of how to trigger events, make requests, set targets, etc,
- `temperature.html`: Simple temperature converter,
- `polling.html`: Example of polling (making a request every x seconds) using a mock weather api,
- `search.html`: A contact search widget,
- `validation.html`: Inline validation example,
- `profile.html`: Simple profile click-to-edit.

## Setup

Install the dependencies:

```bash
npm install
```

Define the environment variables in a `.env` file:

```bash
PORT = 3000
SESSION_SECRET = "keyboard cat"
CSRF_SECRET = "123456789iamasecret987654321look"
```

Run the server:

```bash
npm start
```

To stop the server, press `Ctrl+C`.

To watch for changes in the files and automatically reload the server, run:

```bash
npm run dev
```

By default the server runs on port 3000.

You can change the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

Or by setting the `PORT` environment variable in the `.env` file.

Open the browser at [http://localhost:3000](http://localhost:3000) to see the demo.
