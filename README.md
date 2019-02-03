# a plugin for configuring your own markdown-it

## usage

1. create a file named `markdown.js` in nodebb folder
2. install some markdown-it plugin by npm.
3. configure it.

this is an example:(configure markdown-it-anchor)
```js
module.exports = (parser) => {
    parser.use(require('markdown-it-anchor'), {})
}
```