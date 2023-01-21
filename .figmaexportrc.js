require("dotenv").config();

module.exports = {

  commands: [
      ['components', {
          fileId: process.env.FILE_ID,
          transformers: [
              require('@figma-export/transform-svg-with-svgo')({
                  plugins: [
                    {
                      name: "removeDimensions",
                      active: true,
                    },
                    {
                      name: "sortAttrs",
                      active: true,
                    },
                    {
                      name: "removeAttrs",
                      params: {
                        attrs: "(stroke)",
                      },
                    },
                    {
                      name: "addAttributesToSVGElement",
                      params: {
                        attributes: [
                          {
                            stroke: "currentColor",
                          },
                        ],
                      },
                    },
                  ]
              })
          ],
          outputters: [
              require('@figma-export/output-components-as-svg')({
                  output: './output'
              })
          ]
      }]
  ]

};