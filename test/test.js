/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-11-04[12:28:34]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const NunjucksTransformer = require('../');

describe('panto-transformer-nunjucks', () => {
    describe('#transform', () => {
        it('should render template with context', done => {
            new NunjucksTransformer({
                nunjucksContext: {
                    title: 'Hello World'
                }
            }).transform({
                filename: 'a.tpl',
                content: '{{title}}'
            }).then(file => {
                assert.ok(file.content.indexOf('Hello World') > -1);
            }).then(() => done(), done);
        });
    });
});
