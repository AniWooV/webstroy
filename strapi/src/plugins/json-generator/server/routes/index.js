module.exports = [
  {
    method: 'GET',
    path: '/generate',
    handler: 'generator.generate',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/regions',
    handler: 'generator.addRegions',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/cities',
    handler: 'generator.addCities',
    config: {
      policies: [],
      auth: false,
    },
  },
];