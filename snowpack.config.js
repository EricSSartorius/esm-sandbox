// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {
      url: "/",
      static: true,
    },
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-react-refresh",
  ],
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
}
