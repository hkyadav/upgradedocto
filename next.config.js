module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};
