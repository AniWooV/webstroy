"use strict";

const fs = require("fs");

const regions = require("../../../../../../settings/regions.json");
const cities = require("../../../../../../settings/cities.json");

module.exports = ({ strapi }) => ({
  async generate(ctx) {
    const params = {};

    try {
      const countries = await strapi
      .plugin("json-generator")
      .service("generator")
      .getCountries(ctx);

    countries.forEach((country) => {
      country.regions.forEach((region) => {
        let mainCity = {};
        let cityFolder = [];

        region.cities.forEach((city) => {
          if (city.isMain) {
            mainCity = {url: city.url, clug: city.slug}
          } else {
            cityFolder.push({url: city.url, clug: city.slug});
          }
        });

        params[mainCity.url] = {
          langs: country.availiableLocalizations,
          cities: cityFolder,
          "default-lang": country.defaultLocalization,
          "default-city": mainCity,
        };
      });
    });

    fs.writeFile(
      "../settings/cringe.json",
      JSON.stringify(params),
      (error, data) => {}
    );

      return JSON.stringify({ isDone: true, message: "JSON-file was generated successfuly!" });
    } catch (error) {
      return JSON.stringify({ isDone: false, message: error.message });
    }
  },
  async addRegions(ctx) {
    try {
      const regionsCount = await strapi.entityService.count(
        "api::region.region"
      );

      if (regionsCount > 0) {
        return JSON.stringify({
          isDone: false,
          message: "Content-Type isn't empty, clean up all data first!",
        });
      }

      regions.forEach(async (region) => {
        const entity = await strapi.entityService.create("api::region.region", {
          data: {
            name: region.name,
            nameCase: region.name_case,
            country: region.country_id,
          },
        });
      });

      return JSON.stringify({
        isDone: true,
        message: "All entities were added",
      });
    } catch (error) {
      return JSON.stringify({ isDone: false, message: error.message });
    }
  },
  async addCities(ctx) {
    try {
      const citiesCount = await strapi.entityService.count("api::city.city");

      if (citiesCount > 0) {
        return JSON.stringify({
          isDone: false,
          message: "Content-Type isn't empty, clean up all data first!",
        });
      }

      cities.forEach(async (city) => {
        const entity = await strapi.entityService.create("api::city.city", {
          data: {
            name: city.name,
            nameCase: city.name_case,
            nameReal: city.name_real,
            isMain: city.is_main,
            region: city.region_id,
            slug: city.slug,
            url: city.url,
          },
        });
      });

      return JSON.stringify({
        isDone: true,
        message: "All entities were added",
      });
    } catch (error) {
      return JSON.stringify({ isDone: false, message: error.message });
    }
  },
});
