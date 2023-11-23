'use strict';

/**
 * init service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::init.init');
