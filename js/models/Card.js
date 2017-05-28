'use strict';

const Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		name: null,
		requirementsToOwner: null,
		requirementsToEnemy: null,
		effectsToOwner: null,
		effectsToEnemy: null
	}
});