'use strict';

const Backbone = require('backbone');
const BaseLayout = require('./BaseLayout');
const headerTemplate = require('../../assembly/templates/Header.js');

module.exports = BaseLayout.extend({
	name: 'Header',
	tagName: 'header',
	template: headerTemplate
});