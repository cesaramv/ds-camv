import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ds-camv',
  globalStyle: 'src/global/global.scss',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      /* copy: [
        { src: 'assets', warn: true }
      ] */
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      /* dir: 'www',
      copy: [
        { src: 'assets/icons', dest: 'build/assets/icons' }
      ] */
    },
  ],
};
