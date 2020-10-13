const withImageElement = require('next-image-element');
const withPlugins = require('next-compose-plugins');

const nextConfig = {

  webpack: (config, _options) => {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve("url-loader")
    });

    return config;
  }
};

module.exports = withPlugins([[withImageElement]], nextConfig);
