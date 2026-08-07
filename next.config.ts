import type { NextConfig } from "next";
import { url } from "@/settings/settings"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sitebase.com.br', // sem www
          },
        ],
        destination: `${url}:path*`, // com www
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
