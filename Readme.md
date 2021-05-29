# a playground for webpack
# node_modules/.bin/babel before.js -o after.js
# node_modules/.bin/babel src/index.js -o dist/assets/bundle.js
# "babel": "node_modules/.bin/babel src/index.js -o dist/assets/bundle.js"  --> npm run babel
# "babel": "node_modules/.bin/babel src/index.js -w -o dist/assets/bundle.js"  --> npm run babel; watch option
# __dirname, node property means the root folder name
# const path = require('path'), node module from library
# node_modules/.bin/webpack
# modules, export several js files to index.js which uses import syntax
# a module can only have one export default value, but still can have other exports
# webpack-dev-server:
# compile all the js files into a virtual one
# running in memory which means it doesn't need live server anymore
# it doesn't generate a physical bundle file 
# to remove babel, webpack runs for development and production mode
# webpack is for bundling js files, otherwise, babel is for translating js files to fit all browsers
# webpack and babel together, using babel-loader