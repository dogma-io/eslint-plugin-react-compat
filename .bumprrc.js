module.exports = {
  ci: {
    gitUser: {
      email: 'dogmaiobot@gmail.com',
      name: 'dogma-io-bot'
    }
  },
  features: {
    changelog: {
      enabled: true
    },
    logging: {
      enabled: true,
      file: '.bumpr-log.json'
    },
    timezone: {
      enabled: true,
      zone: 'America/New_York'
    }
  }
}
