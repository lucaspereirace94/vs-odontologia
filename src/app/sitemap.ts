import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Nota: Substitua 'https://vsodontologia.com.br' pelo seu domínio real quando tiver um.
  return [
    {
      url: 'https://vsodontologia.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://vsodontologia.com.br/privacidade',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}