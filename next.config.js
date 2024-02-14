/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n:{
    locales:['en','az','ru','fr'],
    defaultLocale:'en',
  },
};

module.exports = nextConfig;
