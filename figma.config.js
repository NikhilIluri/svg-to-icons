require("dotenv").config();
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const fileId = process.env.FILE_ID;
const outputters = [
  require("@figma-export/output-components-as-svg")({ output: "./" }),
  require("@figma-export/output-components-as-svgr")({
    getFileExtension: () => ".tsx",
    getComponentName: ({ componentName, pageName }) =>
      componentName + capitalize(pageName),
    getSvgrConfig: () => ({ typescript: true }),
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
        onlyFromPages: ["outline"],
        outputters,
      },
    ],
  ],
};
