// Necessary to make Jest work with TypeScript
const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isTest ? 'commonjs' : false,
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
    "next/babel"
  ],

};
