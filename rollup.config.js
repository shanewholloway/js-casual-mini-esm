import rpi_resolve from '@rollup/plugin-node-resolve'
import rpi_commonjs from '@rollup/plugin-commonjs'
import { terser as rpi_terser } from 'rollup-plugin-terser'


const external = ['moment']
const plugins = [ rpi_resolve(), rpi_commonjs() ]
const plugins_min = [ ... plugins, rpi_terser() ]


export default [
  { input: 'src/index.mjs',
    output: [
      {file: 'esm/index.mjs', format: 'es'},
      {file: 'cjs/index.cjs', format: 'cjs'},
    ],
    external, plugins },

  { input: 'src/index.mjs',
    output: {file: 'esm/index.min.mjs', format: 'es'},
    external, plugins: plugins_min },

  { input: 'src/full.mjs',
    output: [
      {file: 'esm/full.mjs', format: 'es'},
      {file: 'cjs/full.cjs', format: 'cjs'},
    ],
    external, plugins },

  { input: 'src/full.mjs',
    output: {file: 'esm/full.min.mjs', format: 'es'},
    external, plugins: plugins_min },
]
