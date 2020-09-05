const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'duuliy-ui/lib': path.resolve(__dirname, '../components/'),
        'duuliy-ui/esm': path.resolve(__dirname, '../components/'),
        'duuliy-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
