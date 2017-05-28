'use strict';

const PORT = 80;

const _ = require('underscore');

const path = require('path');
const url = require('url');
const fs = require('fs');
const dot = require('dot');
const consolidate = require('consolidate');
const express = require('express');
const routes = require('./config/routes');

const i18nConfig = require('./config/i18n');
const i18n = require('i18n');
i18n.configure(i18nConfig.i18n);

const expressApp = express();

expressApp.use('/build', express.static('./build'));

dot.process({ path: './js/templates/', destination: './assembly/templates/'	});

const template = fs.readFileSync('./js/templates/frame.jst', 'utf-8');

expressApp.engine('jst', consolidate.dot);

function resultHtml(request) {
	const urlObj = url.parse(request.url);

	const actualRoute = _.find(routes, (route) => route.pattern.test(urlObj.pathname.replace(/^\//, '')));

	if (!actualRoute) {
		throw new Error(`Route not found: ${location}`);
	}

	const componentClass = require(`./js/routes/${actualRoute.name}`);

	const component = new componentClass();

	const html = Backbone.$.html(component.render().el);

	return dot.template(template)({
		html: html
	});
}

expressApp.all('*', (request, response, next) => {
	response.end(resultHtml(request));
});

expressApp.set('port', PORT);

expressApp.listen(expressApp.get('port'), () => {
	console.log(`Sever is running on port ${expressApp.get('port')}`);
});

