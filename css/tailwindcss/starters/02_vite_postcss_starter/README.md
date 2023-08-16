# Vite & PostCSS Starter

This is a starter project for Tailwind CSS using Vite & PostCSS.

To use it, just copy this directory and then do the following.

First install required dependencies:

```cmd
npm install
```

Then run build script:

```cmd
npm run start
```

## Setup

This starter project is based on [this](https://www.geeksforgeeks.org/how-to-setup-tailwind-css-with-vite/) tutorial.

First I've installed Tailwind CSS, Vite & PostCSS:

```cmd
npm init -y
npm install --save-dev tailwindcss postcss autoprefixer vite
npx tailwindcss init -p
```

Above command will generate 2 config files named `postcss.config.js` and `tailwind.config.js`.

`postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['*'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Then I've created `index.html` and `style.css` files.

Finally I've edited `package.json` like so:

```json
  "scripts": {
    "start": "vite"
  },
```

And then I can use it like this:

```cmd
npm run start
```

We can view the result with the built-in server at `http://localhost:5173/`.
