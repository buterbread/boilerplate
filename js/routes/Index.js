'use strict';

const Backbone = require('backbone');
const BaseRoute = require('./shared/BaseRoute');
const BaseLayout = require('../views/BaseLayout');
const Header = require('../views/Header');
const Content = require('../views/Content');
const Footer = require('../views/Footer');

module.exports = BaseRoute.extend({
	name: 'Index',

	initialize: function() {
		this.setView('', new BaseLayout({
			tagName: 'div',
			name: 'wrapper',
			className: 'wrapper',
			views: {
				'': [
					new Header(),
					new Content({
						template: () => 'Index Page'
					}),
					new Footer()
				]
			}
		}));
	}
});