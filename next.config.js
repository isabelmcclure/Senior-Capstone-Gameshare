module.exports = {
    env: {
        mongodburl: "conn",
    },
    webpack: (config, { dev }) => {
        // Perform customizations to config
        config.node = {
          fs: 'empty'
        };
        return config
      }
};