import htmlPurge from 'vite-plugin-html-purgecss';

export default {
  plugins: [htmlPurge()],
  base: '/single-page-portfolio/',
};

// npm i vite-plugin-html-purgecss -D
