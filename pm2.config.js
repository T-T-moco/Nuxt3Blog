module.exports = {
  apps: [
    {
       name: `Nuxt3Blog`,
       script: '.output/server/index.mjs ',
       cwd: `${process.env.HOME}/Nuxt3Blog`,
       env: {
         PORT: 3000
      }
    }
  ]
};
