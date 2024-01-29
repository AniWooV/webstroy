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
  {
    method: 'DELETE',
    path: '/regions',
    handler: 'generator.deleteRegionsAll',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/cities',
    handler: 'generator.deleteCitiesAll',
    config: {
      policies: [],
      auth: false,
    },
  },
];