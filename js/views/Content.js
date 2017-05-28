'use strict';

const Backbone = require('backbone');
const BaseLayout = require('./BaseLayout');

module.exports = BaseLayout.extend({
	name: 'Content',
	tagName: 'div',
	className: 'content'
});