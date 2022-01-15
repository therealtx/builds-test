const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp'],
  },
  webpack(config) {
    // svg support
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ['@svgr/webpack'],
    });

    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: [
        {loader: 'url-loader?limit=100000'}
      ]
    });

    return config;
  },
}
