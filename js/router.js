'use strict';

const _ = require('underscore');
const Backbone = require('backbone');
const routes = require('../config/routes');

const Router = Backbone.Router.extend({
	initialize: function() {
		_.each(_.clone(routes).reverse(), (route) => {
			this.route(route.pattern, route.name);
		});
	},

	execute: function(callback, queryParams, componentName) {
		require('bundle-loader?name=[name]!./routes/' + componentName)((component) => {
			const newComponent = new component();
			newComponent.render();
		});

		Backbone.Router.prototype.execute.apply(this, arguments);
	},
});

document.addEventListener('DOMContentLoaded', () => {
	console.log(`pushState: ${!!(window.history && window.history.pushState)}`);

	Backbone.history.start({
		pushState: !!(window.history && window.history.pushState),
		hashchange: true
	});
});

module.exports = new Router();