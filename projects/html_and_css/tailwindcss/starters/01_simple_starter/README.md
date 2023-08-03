# Simple Starter

This is a simple starter project for Tailwind CSS.

To use it, just copy this directory and then.

First install required dependencies:

```cmd
npm install
```

Then run build script:

```cmd
npm run build
```

or

```cmd
npm run watch
```

## Setup

This starter project was created with [Tailwind CLI](https://tailwindcss.com/docs/installation).

First I've installed Tailwind CSS:

```cmd
npm init -y
npm install --save-dev tailwindcss
npx tailwindcss init
```

Then I've created `tailwind.config.js` file:

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

As of now we don't have any build tool, so wee need to start build process manually:

```cmd
npx tailwindcss -i ./input.css -o ./css/style.css --watch
```

And then we can use this CSS file in our document:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Starter Project for Tailwind CSS</title>
    <link href="css/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello Tailwind CSS!</h1>
  </body>
</html>
```

Which we can view with the Live Server `ALT-L O`.

Because we don't want to run build command manually we can add script to the `package.json` like so:

```json
// ...
  "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/style.css",
    "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch"
  },
// ...
```

And the use it like so:

```cmd
npm run build
```

or

```cmd
npm run watch
```
