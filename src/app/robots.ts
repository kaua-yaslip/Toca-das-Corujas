import type { MetadataRoute } from 'next'
import { url } from "@/settings/settings"
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/_next/static/media/',
      ],
    },
    sitemap: `${url}sitemap.xml`,
  }
}