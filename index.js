/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-11-04[12:28:34]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const nunjucks = require('nunjucks');

class NunjucksTransformer extends Transformer {
    _transform(file) {
            return new Promise(resolve => {
                let nunjucksContext = this.options.nunjucksContext || {};

                if (panto._.isFunction(nunjucksContext)) {
                    nunjucksContext = nunjucksContext.call(file, file);
                }

                resolve(panto._.extend(file, {
                    content: nunjucks.renderString(file.content, nunjucksContext)
                }));
            });
        }
    isTorrential() {
        return false;
    }
}

module.exports = NunjucksTransformer;
