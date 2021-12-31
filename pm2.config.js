module.exports = {
  apps: [
    {
      name: `Nuxt3Blog`,
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs',
      cwd: `${process.env.HOME}/Nuxt3Blog`,
      env: {
        PORT: 3000
      }
    }
  ]
};
