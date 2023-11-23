"use strict";

/**
 * init controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::init.init", ({ strapi }) => ({
  async init(ctx) {
    // ctx.query = { ...ctx.query, local: "en" };

    /*const contentType = strapi.contentType('api::city.city');*/

    let cities = await strapi.db.query("api::city.city").findMany({
      orderBy: { id: "asc" },
    });

    let params = ctx.query.slugs.slice(0, -1).split("/");

    console.log(params);

    let currentCity = await strapi.db.query("api::city.city").findOne({
      where: { slug: params.slice(-1) },
    });

    console.log(currentCity);

    try {
      if (currentCity) {
        ctx.send(
          {
            cities: cities,
            current: currentCity.nameCase,
          },
          200
        );
      } else {
        ctx.send(
          {
            msg: "Not found.",
          },
          404
        );
      }
    } catch (err) {
      ctx.body = err;
    }
  },
}));
