"use strict";

const {
  getKeysWithPlaceholders,
  replacePlaceholdersWithValues,
} = require("../../../settings/placeholders");

/**
 * meta controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::meta.meta", ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const queryParams = ctx.request.query;

    const metas = await strapi
      .service("api::meta.meta")
      .getLocalizedEntity("api::meta.meta", ctx, slug, queryParams.lang);

    const cities = await strapi
    .service("api::meta.meta")
    .getLocalizedEntity("api::city.city", ctx, queryParams.city, queryParams.lang);

    let sanitizedMeta = await this.sanitizeOutput(metas, ctx);
    let sanitizedCity = await this.sanitizeOutput(cities, ctx)

    const keys = getKeysWithPlaceholders(sanitizedMeta);

    if (Object.keys(keys).length > 0) {
      sanitizedMeta = replacePlaceholdersWithValues(
        sanitizedMeta,
        keys,
        {city: sanitizedCity.name}
      );
    }

    return this.transformResponse(sanitizedMeta);
  },
}));
