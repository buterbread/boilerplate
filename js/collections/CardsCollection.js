'use strict';

const _ = require('underscore');
const Backbone = require('backbone');
const Card = require('../models/Card');

const DATA = [
	{id: 1, name: 'name 1'},
	{id: 2, name: 'name 2'},
	{id: 3, name: 'name 3'}
];

module.exports = Backbone.Collection.extend({
	model: Card,

	fetch: function () {
		this.set(DATA)
	},

	serialize: function () {
		return _.map(this.models, model => model.toJSON());
	}
});