# a playground for webpack
# node_modules/.bin/babel before.js -o after.js
# node_modules/.bin/babel src/index.js -o dist/assets/bundle.js
# "babel": "node_modules/.bin/babel src/index.js -o dist/assets/bundle.js"  --> npm run babel
# "babel": "node_modules/.bin/babel src/index.js -w -o dist/assets/bundle.js"  --> npm run babel; watch option
# __dirname, node property means the root folder name
# const path = require('path'), node module from library
# node_modules/.bin/webpack
# modules, export several js files to index.js which uses import syntax