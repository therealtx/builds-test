module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
        // test: /\.(js|ts)x?$/,
        // for webpack 5 use
        // { and: [/\.(js|ts)x?$/] }
      },

      use: ['@svgr/webpack'],
    });

    return config;
  },
}
