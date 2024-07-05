import baseConfig from '@monorepo-template/prettier/base.mjs';

/** @type {import('prettier').Config} */
export default {
  ...baseConfig,
  importOrder: [
    '^react(.*)$',
    '^@/lib/(.*)$',
    '^(vite(-.*)?|@vitejs/(.*))$',
    '<THIRD_PARTY_MODULES>',
    '(.*)',
    '^[./]'
  ]
};
