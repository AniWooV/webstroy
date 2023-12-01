'use strict';

const { getLocalizedData } = require('../../../settings/localization');

/**
 * meta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meta.meta', ({strapi}) => ({
    async getLocalizedEntity(uid, ctx, slug, locale) {
        const entity = await strapi.entityService.findMany(uid, {
            filters: { slug: slug },
            populate: "localizations",
            ...ctx.query
        })

    return getLocalizedData(entity, locale)
    }
}));
