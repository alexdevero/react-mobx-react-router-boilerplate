module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    /*require('css-declaration-sorter')({
      order: 'Concentric CSS'
    }),*/
    require('css-mqpacker')(),
  ]
};
