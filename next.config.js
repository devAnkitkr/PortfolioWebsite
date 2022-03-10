/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `${process.env.VERCEL_URL}`,
    EMAIL_JS_USER_ID: process.env.EMAIL_JS_USER_ID,
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
  },
};

module.exports = nextConfig;
