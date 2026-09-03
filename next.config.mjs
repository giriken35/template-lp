/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://azorb-site.vercel.app/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
