'use strict';

const Backbone = require('backbone');
const BaseLayout = require('./BaseLayout');
const footerTemplate = require('../../assembly/templates/Footer.js');

module.exports = BaseLayout.extend({
	name: 'Footer',
	tagName: 'footer',
	template: footerTemplate
});