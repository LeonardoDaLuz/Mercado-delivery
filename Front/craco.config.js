/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@globalStyleds': path.resolve(__dirname, 'src/globalStyleds'),
      '@configs': path.resolve(__dirname, 'src/configs'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@utils/SwipeInput': path.resolve(__dirname, 'src/utils/SwipeInput'),
      '@actions': path.resolve(__dirname, 'src/store/actions'),
      '@types': path.resolve(__dirname, 'src/store/types'),
      '@analyzers' :  path.resolve(__dirname, 'src/store/analyzers'),
    }
  },
};