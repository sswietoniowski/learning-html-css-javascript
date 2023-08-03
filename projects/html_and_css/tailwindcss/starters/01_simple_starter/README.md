# Simple Starter

This is a simple starter project for Tailwind CSS.

## Setup

This starter project was created with [Tailwind CLI](https://tailwindcss.com/docs/installation).

First I've installed Tailwind CSS:

```cmd
npm install --save-dev tailwind
npx tailwindcss init
```

Then I've created `tailwind.config.js` file:

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

As of now we don't have any build tool, so wee need to start build process manually:

```cmd
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

And then we can use this CSS file in our document:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Starter Project for Tailwind CSS</title>
    <link href="../dist/output.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello Tailwind CSS!</h1>
  </body>
</html>
```

Which we can view with the Live Server `ALT-L O`.
