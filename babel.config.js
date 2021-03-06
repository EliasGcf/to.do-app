module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          alias: {
            src: './src',
            'stitches.config': './stitches.config',
            '@assets': './src/assets',
            '@components': './src/components',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
