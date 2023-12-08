'use strict';

const fs = require("fs")

const regions = require("../../../../../../settings/regions.json")
const cities = require("../../../../../../settings/cities.json")

module.exports = ({ strapi }) => ({
  async generate(ctx) {
    const params = {}

    const countries = await strapi.plugin("json-generator").service("generator").getCountries(ctx)

    console.log("test bebra zxc");

    countries.forEach(country => {
      country.regions.forEach(region => {
        let mainCity = ""
        let cityFolder = []

        region.cities.forEach(city => {
          if (city.isMain) {
            mainCity = city.slug
          } else {
            cityFolder.push(city.slug)
          }
        })

        params[mainCity] = {
          langs: country.availiableLocalizations,
          cities: cityFolder,
          "default-lang": country.defaultLocalization,
          "default-city": mainCity
        }
      })
    }); 

    fs.writeFile("../settings/cringe.json", JSON.stringify(params), (error, data) => {})

    return "cringe"
  },
  async addRegions(ctx) {
    regions.forEach(async (region) => {
      const entity = await strapi.entityService.create('api::region.region', {
        data: {
          name: region.name,
          nameCase: region.name_case,
          country: region.country_id
        },
      });
    });
  },
  async addCities(ctx) {
    cities.forEach(async (city) => {
      const entity = await strapi.entityService.create('api::city.city', {
        data: {
          name: city.name,
          nameCase: city.name_case,
          nameReal: city.name_real,
          isMain: city.is_main,
          region: city.region_id,
          slug: city.slug,
          url: city.url
        },
      });
    });

    return "bebra"
  }
});
