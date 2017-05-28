'use strict';

const path = require('path');

module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        directory: path.resolve(__dirname, '../locales'),
    },
};
