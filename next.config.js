/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['ws.prepise.ru', 'api.prepise.ru', 'prepise.ru', 'localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.prepise.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.prepise.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverRuntimeConfig: {
    serverUrl: process.env.NEXT_PUBLIC_SERVER,
    socketUrl: process.env.NEXT_PUBLIC_SOCKET,
  },
};
