React applications (even TypeScript ones) typically use babeljs and jest.
That's a *lot* of code that has to run in order to build/test your application.
create-react-app (and most React projects) only actually use TypeScript for type checking (if at all);  The actual transpiling is done by babeljs.
babeljs *always* downlevels to es5 and does *not* support all language features of TypeScript.
Webpack is used for all the bundling, but unfortunately it's still only v4!

It's heresy of course, but what if we eliminated babeljs, jest, and eslint, and only relied on TypeScript and Webpack (which you have either way)?
We would have to add back in a test framework, but Karma, Mocha, Chai, Sinon, Jasmine are all great substitutes that test your code in it's actuall target environment (just like your users do).

Besides all the heft mentioned above, check out this little table describing Github issues as of 12/4/21:

| [Pkgs]("as of 12/4/21") | Issues | [OPR]("Open PR's") | [NPR\-30]("New PR's in last 30 days") | [MPR\-30]("Merged PR's in last 30 days") | [NI\-30]("New issues in last 30 days") | [CI\-30]("Closed issues in last 30 days") |
|---------------|--------|-----|---------|---------|--------|--------|
| Babel | 616 | 148 | 9 | 39 | 14 | 25 |
| \-Loader | 61 | 6 | 0 | 0 | 0 | 3 |
| CRA | 1100 | 284 | 13 | 7 | 40 | 17 |
| prompts | 77 | 15 | 0 | 2 | 3 | 0 |
| resolve | 12 | 7 | 0 | 0 | 0 | 1 |
| semver | 53 | 20 | 0 | 0 | 0 | 1 |
| ts\-pnp | 5 | 2 | 0 | 0 | 0 | 0 |
| [subtot]("top to here") | 1924 | 482 | 22 | 48 | 57 | 47 |
| Jest | 1500 | 182 | 6 | 27 | 34 | 23 |
| \-eslint | 35 | 4 | 3 | 10 | 6 | 3 |
| \-test | 42 | 11 | 0 | 3 | 1 | 2 |
| \-watch | 11 | 4 | 2 | 5 | 2 | 0 |
| Yarn | 1800 | 167 | 0 | 0 | 8 | 8 |
| [subtot]("top to here") | 5312 | 850 | 33 | 93 | 108 | 83 |
| eslint | 95 | 17 | 5 | 57 | 11 | 44 |
| \-wp | 4 | 2 | 2 | 2 | 2 | 2 |
| [total]("Of all above numbers") | 5411 | 869 | 40 | 152 | 113 | 129 | 
-|-|-|-|-|-|-
| jsdom | 365 | 37 | 3 | 5 | 8 | 8 |
-|-|-|-|-|-|-
| Jasmine | 48 | 9 | 0 | 0 | 2 | 1 |
| Chai | 63 | 11 | 1 | 0 | 0 | 1 |
| Karma | 304 | 9 | 2 | 3 | 2 | 3 |
| Mocha | 227 | 38 | 1 | 0 | 4 | 8 |
| Sinon | 39 | 3 | 1 | 0 | 2 | 0 |
-|-|-|-|-|-|-
|  [M+C+S]("Mocah,Chai,Sinon") | 379 | 52 | 3 | 0 | 6 | 9 |
That's a *lot* of outstanding defects!  Not to mention the new ones that appear each month.
