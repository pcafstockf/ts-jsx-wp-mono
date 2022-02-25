# ts-jsx-wp-mono
TypeScript / JSX / Webpack / Monorepo

Do you:  
Need to use real TypeScript compilation (not an approximation)?  
Want to support JSX?  
Want a monorepo without the complexity of Lerna or Nx?  
Want to avoid the bloat and compatibility issues of Jest?  
Prefer Webpack 5 (faster, smaller, than v4)?  
Want to support es6+ targets (smaller executables)?  

This project is a starter template for a TypeScript based React / Node.js Monorepo.
Out of the box, it supports everything you need for a frontend / backend, shared code project.  
You can quickly delete any aspect of this template you don't like.  
Additionally, you get all the great features of Webpack v5 (speed, size, code splitting, and more).  
If Jest is your cup of tea, you can easily add it.  
However, if you are not a fan, this project provides a lightweight, highly compatible, real world test environment using Karma and Jasmine.

This is a general purpose project, but was also designed to significantly reduce heft, build times, and breakage on new React projects.
The secret is that babeljs is completely unnecessary for most React projects.  

I drank the entire cooler of Kool-Aid the day Google announced they would be working with Microsoft's TypeScript efforts!  
And I've never regretted it :-)  
TypeScript is capable of compiling all your JSX files, *and* it can target es5 (or any other es) all on its own.  
Did you know that Create-React-App actually only runs TypeScript for type checking purposes (isn't that why you have an IDE?).
All the code generation is done by Babel.  
Babel is a great tool, but if you are already using TypeScript, you will get greater compatibility and speed by *only* using TypeScript.

Lerna and Nx are great monorepo tools.  But if your needs are relatively simple, they may be more overhead and complexity than you want in your project.
This project takes inspiration from Lerna and Nx layouts, but skips the extra tools and scripts, 
and just manages everything by passing qualified pathnames to tools like Webpack and Karma.

The one caveat to note is that public/index.html in typical React apps work with babeljs and ENV variables.  
This project uses the html-webpack-plugin to generate index.html, and as part of that improvement, we have moved the source template to src/index.ejs (instead of public/index.html).
This may necessitate a small adaptation of your original index.html (move it, rename it, convert %ENV% escapes to ejs).
