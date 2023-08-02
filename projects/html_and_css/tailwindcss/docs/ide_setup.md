# IDE Setup 2023-08-02

I've been using [Visual Studio Code](https://code.visualstudio.com/) as my editor of choice while working with Tailwind CSS.

I've also installed [Node.js](https://nodejs.org/en) to work with Tailwind CSS. If you've got an older version of Node.js already installed you might want to [upgrade](https://blog.hubspot.com/website/update-node-js) it.

Linux/MacOS:

```bash
node --version
npm install -g n
n lts # could be "lts" or "latest"
node --version
```

For Windows just download installer and install it.

## Table Of Contents

- [IDE Setup 2023-08-02](#ide-setup-2023-08-02)
  - [Table Of Contents](#table-of-contents)
  - [What is Tailwind CSS?](#what-is-tailwind-css)
    - [What are Utility Classes \& Their Advantages?](#what-are-utility-classes--their-advantages)
    - [How is Tailwind Different From Bootstrap](#how-is-tailwind-different-from-bootstrap)
    - [Responsive Classes \& State Classes](#responsive-classes--state-classes)
  - [Install Extensions](#install-extensions)
  - [More Customization](#more-customization)
    - [Basic Environment Setup](#basic-environment-setup)

## What is Tailwind CSS?

[Tailwind CSS](https://tailwindcss.com/) is a CSS framework that uses low-level "utility" classes to create layouts. This is known as a **utility-first** framework.

Traditional CSS frameworks like [Bootstrap](https://getbootstrap.com/) use classes that are directly correlated to components (eg. Alerts, Navbars, etc). Tailwind uses classes as utilities to put together to build your own custom components.

### What are Utility Classes & Their Advantages?

_Utility classes_ are simple HTML classes typically scoped to a single and specific CSS property.

They are:

- named according to their purpose,
- easy to understand and remember,
- you know exactly what it does,
- no naming inconsistencies,
- allows for very fast layout creation and testing.

Example:

```html
<div class="max-w-xl mx-auto p-2">
  <h2 class="text-2xl font-bold mb-2">Hello World!</h2>
</div>
```

### How is Tailwind Different From Bootstrap

| Tailwind CSS                               | Bootstrap                                          |
| ------------------------------------------ | -------------------------------------------------- |
| Newer framework that is gaining popularity | Popular framework that has been around while       |
| Low-level classes for fast UI development  | High-level pre-designed components                 |
| More flexibility & uniqueness              | Some Bootstrap sites look very similar             |
| Customizable with directives & functions   | Customizable through SASS                          |
| You need to know quite a bit of CSS        | Easier for beginners                               |
| HTML usually has a lot of classes          | Higher level components usually means less classes |

### Responsive Classes & State Classes

Tailwind has conditional class naming for breakpoints as well as states such as hover, focus, etc.

```html
<div class="flex flex-col md:flex-row">
  <div><a href="#" class="hover:text-blue-500">Item 1</a></div>
  <div><a href="#" class="hover:text-blue-500">Item 2</a></div>
</div>
```

## Install Extensions

To work with Tailwind CSS effectively you will need to install some extensions.

Couple interesting ones can be found below.

I've bolded (must have) and italicized (nice hot have) those I've got installed.

For completeness I've also added a few that are not worth the effort of installing but you can find recommendations to do so online.

So here is my list:

- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**,
- _[Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)_,
- ~~[Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)~~ - don't install, this extension is no longer developed and it might not work for Tailwind CSS 3.0,
- _[IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)_ - consider using it, but it wasn't updated for a long time,
- [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log) - might be helpful for debugging, but it is not a must have,
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**,
- ~~[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)~~ - this extension was quite useful, but now its functionality is built-in into VSCode, so instead you should edit your `settings.json` like so:

```json
{
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active"
}
```

- _[Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)_,
- **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**.

## More Customization

Here I'll show you any customization that I've made while working with Tailwind CSS.

### Basic Environment Setup

To use Tailwind CSS in your environment you can use one of the provided [starter](./starters) projects.
