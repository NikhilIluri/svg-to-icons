require("dotenv").config();
const svgo = require('@figma-export/transform-svg-with-svgo');
const outlineSVGOConfig = require('./svgo/config');

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const fileId = process.env.FILE_ID;

const outputters = [
  require("@figma-export/output-components-as-svg")({ output: "./" }),
  require("@figma-export/output-components-as-svgr")({
    getFileExtension: () => ".js",
    getComponentName: ({ componentName, pageName }) =>
      capitalize(componentName),
      getSvgrConfig: () => ({}),
      output: "./src",
  }),
];

/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    [
      "components",
      {
        fileId,
        onlyFromPages: ["ThingsToCarry"],
        outputters,
        transformers: [svgo({ multipass: true, plugins: outlineSVGOConfig })]
      },
    ],
    // add the new pages here
  ],
};
