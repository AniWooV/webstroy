"use strict";

module.exports = ({ strapi }) => ({
  async getRegions(ctx) {
    return await strapi.entityService.findMany("api::region.region", {
      ...ctx,
      populate: ["cities"],
    });
  },
  async getCountries(ctx) {
    return await strapi.entityService.findMany("api::country.country", {
      ...ctx,
      populate: ["regions", "regions.cities"],
    });
  },
});
