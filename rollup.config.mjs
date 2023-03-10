import { babel } from '@rollup/plugin-babel';

const config = [
  {
    input: "index.js",
    output: {
      dir: "react",
      format: "module",
    },
    plugins: [babel({ babelHelpers: 'bundled' })]
  },
];

export default config;