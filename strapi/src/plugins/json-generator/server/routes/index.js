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
];