# IDE Setup 2023-08-02

I've been using Visual Studio Code as my editor of choice.

- [IDE Setup 2023-08-02](#ide-setup-2023-08-02)
  - [Install extensions](#install-extensions)
  - [More customization](#more-customization)

## Install extensions

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

## More customization

Here I'll show you any customization that I've made while working with Tailwind CSS.
