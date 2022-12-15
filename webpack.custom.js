module.exports = (config) => {
console.log('Webpack Custom Configuration!')

  config.module.rules.push({

    test: /\.yaml$/,
    use: [
      {
        loader: "yaml-loader"
      }]
  });


  return config;
};
