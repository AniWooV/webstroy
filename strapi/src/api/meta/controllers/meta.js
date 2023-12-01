"use strict";

const { getLocalizedData } = require("../../../settings/localization");
const {
  getKeysWithPlaceholder,
  replacePlaceholderWithInput,
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
      .getLocalizedEntity("api::meta.meta", ctx, slug, queryParams.locale);

    const cities = await strapi
    .service("api::meta.meta")
    .getLocalizedEntity("api::city.city", ctx, queryParams.city, queryParams.locale);

    const sanitizedMetas = await this.sanitizeOutput(metas, ctx);
    const sanitizedCities = await this.sanitizeOutput(cities, ctx)

    let definedMeta = sanitizedMetas[0];
    let definedCity = sanitizedCities[0];

    const keys = getKeysWithPlaceholder(definedMeta, "city");

    if (keys.length > 0) {
      definedMeta = replacePlaceholderWithInput(
        definedMeta,
        keys,
        "{{city}}",
        definedCity.name
      );
    }

    return this.transformResponse(definedMeta);
  },
}));
