const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  react: {
    useSuspense: false,
  },
  localePath: path.resolve('./public/locales'),
};
