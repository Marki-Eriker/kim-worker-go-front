module.exports = {
  client: {
    includes: ['./src/**/*.{tsx,ts}'],
    tagName: 'gql',
    service: {
      name: 'kim-worker-backend',
      url: 'http://localhost:3030/query',
    },
  },
}
