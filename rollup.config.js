import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  plugins: [
    typescript({
      cacheRoot: '.rpt2_cache',
      tsconfig: './tsconfig.json',
      typescript: require('typescript')
    })
  ],
  output: [
    {
      format: 'es',
      file: 'dist/clair-utils.mjs'
    },
    {
      name: 'ClairUtils',
      format: 'umd',
      file: 'dist/clair-utils.js'
    }
  ]
}
