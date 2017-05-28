'use strict';

const Backbone = require('backbone');
const BaseLayout = require('../../views/BaseLayout');

module.exports = BaseLayout.extend({
	id: 'root',
	el: process.browser ? '#root' : undefined,
	tagName: 'div'
});