'use strict';

const Backbone = require('backbone');
const BaseRoute = require('./shared/BaseRoute');
const BaseLayout = require('../views/BaseLayout');
const Header = require('../views/Header');
const Content = require('../views/Content');
const Footer = require('../views/Footer');

module.exports = BaseRoute.extend({
	name: 'About',

	initialize: function() {
		console.log('initialize %s', this.name);

		this.setView('', new BaseLayout({
			tagName: 'div',
			name: 'wrapper',
			className: 'wrapper',
			views: {
				'': [
					new Header(),
					new Content({
						template: () => 'ABOUT'
					}),
					new Footer()
				]
			}
		}));
	}
});