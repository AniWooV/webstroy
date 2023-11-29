"use strict";

/**
 * meta controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

function replacePlaceholderWithInput(entity, keys, placeholder, input) {
  keys.forEach((key) => {
    entity[key] = entity[key].split(placeholder).join(input);
  });

  return entity;
}

function checkForCityPlaceholder(entity) {
	const keys = []
	
	for (let key in entity) {
		if (/(.*\{\{city\}\}.*)/.test(entity[key].toString())) {
			keys.push(key)
		}
	}

	return keys
}

function getLocalizedEntity(entity, lang) {
	if (entity.locale === lang) {
		return (({localizations, ...obj}) => obj)(entity)
	}

	return entity.localizations.find(e => e.locale === lang)
}

module.exports = createCoreController("api::meta.meta", ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const queryParams = ctx.request.query;

    const query = {
      filters: { slug },
      populate: "localizations",
      ...ctx.query,
    };

    const metas = await strapi.entityService.findMany("api::meta.meta", query);

    const sanitizedEntity = await this.sanitizeOutput(metas, ctx);

    
	let definedMeta = sanitizedEntity[0];

	console.log(definedMeta);

    if (queryParams.lang) {
      definedMeta = getLocalizedEntity(definedMeta, queryParams.lang);
    }

    const keys = checkForCityPlaceholder(definedMeta);

	console.log(keys);

    if (keys.length > 0 && queryParams.city) {
      const city = await await strapi.db.query("api::city.city").findOne({
        where: { slug: queryParams.city },
      });

	  console.log(city);

      definedMeta = replacePlaceholderWithInput(
        definedMeta,
        keys,
        "{{city}}",
        city.name
      );
    }

    return this.transformResponse(definedMeta);
  },
}));
