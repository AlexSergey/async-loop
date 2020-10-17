const { libraryCompiler } = require('@rockpack/compiler');

libraryCompiler({
  name: 'asyncLoop',
  cjs: {
    src: './src',
    dist: './lib/cjs'
  },
  esm: {
    src: './src',
    dist: './lib/esm'
  }
});
