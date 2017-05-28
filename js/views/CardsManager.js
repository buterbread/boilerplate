'use strict';

const Backbone = require('backbone');
const CardsCollection = require('../collections/CardsCollection');

module.exports = Backbone.View.extend({
	template: require('../templates/CardsManager.jst'),

	tagName: 'section',

	className: 'cards-manager',

	initialize: function () {
		this.collection = new CardsCollection();
		this.collection.fetch();
	},

	render: function () {
		this.$el.html(this.template({
			cards: this.collection.serialize()
		}));
		return this;
	}
});