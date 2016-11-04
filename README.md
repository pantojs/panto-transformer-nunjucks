# panto-transformer-nunjucks
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Nunjucks transformer for panto.

```js
panto.loadTransformer('nunjucks');

panto.$('**/*.tpl').read().nunjucks({
    nunjucksContext: {
        title: 'Hello World'
    }
});
```

## options
 - nunjucksContext: Object

[npm-url]: https://npmjs.org/package/panto-transformer-nunjucks
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-nunjucks.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-nunjucks.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-nunjucks
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-nunjucks.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-nunjucks
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-nunjucks.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-nunjucks#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-nunjucks/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-nunjucks/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-nunjucks?branch=master
