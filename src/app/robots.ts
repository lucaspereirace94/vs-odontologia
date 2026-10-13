import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Nota: Substitua pelo domínio real
    sitemap: 'https://vsodontologia.com.br/sitemap.xml',
  }
}