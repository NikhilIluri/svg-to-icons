const typescript = require("@rollup/plugin-typescript");

const config = [
  {
    input: "index.js",
    output: {
      dir: "react",
      format: "module",
    },
    plugins: [typescript()],
  },
];

module.exports = config;