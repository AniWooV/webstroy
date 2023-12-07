'use strict';

const {writeFile} = require("fs")

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

    writeFile("../cringe.json", JSON.stringify(params), (error, data) => {})

    return "cringe"
  },
});
