// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
    /* ... */
  },
  plugins: [
    [
      "snowpack-plugin-ejs",
      {
        renderData: { nickname: "TEST" },
      },
    ],
    "@snowpack/plugin-postcss",
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
