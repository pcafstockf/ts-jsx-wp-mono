# ts-jsx-wp-mono
TypeScript / JSX / Webpack / Monorepo

Do you:
Need to use real TypeScript compilation (not an approximation)?
Want to support JSX?
Want a monorepo without the complexity of Lerna or Nx?
Want to avoid the bloat and compatibility issues of Jest?
Prefer Webpack 5 (faster, smaller, than v4)?
Want to support es6+ targets (smaller executables)?

This project is a starter template for a TypeScript based React Monorepo.
You can quickly delete any aspect of this template you don't like, but out of the box, it supports everything you need for a Monorepo, TypeScript based React application.
Additionally, you get all the great features of Webpack v5 (speed, size, code splitting, and more).
If jest is your cup of tea, you can add it easily enough.  However, if you are not a fan, this project provides a lightweight, highly compatible, real world test environment using karma and jasmine.

This is a general purpose project, but it was also designed to significantly reduce heft, build times, and breakage on new React projects.
The secret is that babeljs is completely unnecessary for most React projects.  

I drank the entire cooler of Kool-Aid the day Google announced they would be working with Microsoft's TypeScript efforts! And I've never regreted it :-)
TypeScript is capable of compiling all your JSX files, *and* it can target es5 (or any other es) all on it's own.
Create-React-App actually only runs TypeScript for type checking purposes (isn't that why you have an IDE?).  All the code generation is done by babblejs.
Babel is a great tool, but if you are already using TypeScript, you will get greater compatibility and speed by *only* using TypeScript.

Lerna and Nx are great monorepo tools.  But if you needs are relatively simple, they may be more overhead and complexity than you want in your project.
This project takes inspiration from Lerna and Nx layouts, but skips the extra tools and scripts, and just manages everything by passing qualified pathnames to tools like webpack and karma.

The one caveat to note is that public/index.html in typical React apps 
