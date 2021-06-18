<p>a playground for webpack</p>
<p>node_modules/.bin/babel before.js -o after.js</p>
<p>node_modules/.bin/babel src/index.js -o dist/assets/bundle.js</p>
<p>"babel": "node_modules/.bin/babel src/index.js -o dist/assets/bundle.js"  --> npm run babel</p>
<p>"babel": "node_modules/.bin/babel src/index.js -w -o dist/assets/bundle.js"  --> npm run babel; watch option</p>
<p>__dirname, node property means the root folder name</p>
<p>const path = require('path'), node module from library</p>
<p>node_modules/.bin/webpack</p>
<p>modules, export several js files to index.js which uses import syntax</p>
<p>a module can only have one export default value, but still can have other exports</p>
<p>webpack-dev-server:</p>
<p>compile all the js files into a virtual one</p>
<p>running in memory which means it doesn't need live server anymore</p>
<p>it doesn't generate a physical bundle file</p> 
<p>to remove babel, webpack runs for development and production mode</p>
<p>webpack is for bundling js files, otherwise, babel is for translating js files to fit all browsers</p>
<p>webpack and babel together, using babel-loader</p>