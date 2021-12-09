This project uses the wpc-* scripts in this directory to help you build a Webpack application bundle.  

Nothing is mandatory, but the idea is that you have a traditional webpack.config.js file (`apps/my-app/webpack.config.js`) which looks something like:
```javascript
const {merge} = require('webpack-merge');
const tswpConfig = require('../../scripts/tswp.config');

const myConf = {...}

tswpConfig.tsnodeProject = 'apps/my-app/src/tsconfig.json';

const envConfig = process.env.NODE_ENV === 'production' ? 
                    require(path.join('scripts', 'wpc-prod')) : 
                    require(path.join('scripts', 'wpc-dev'));
module.exports = merge(
    require(path.join('scripts', 'wpc-common')),
    require(path.join('scripts', 'wpc-web')),
    envConfig,
    myConf
);
```

The `tswp.config` file exports properties that *must* be configured *before* you require any of the other scripts in this directory. See that file for documentation on the properties.  

