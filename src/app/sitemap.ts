import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjaishreesharad.com'

  // Static routes
  const routes = [
    '',
    '/about',
    '/books',
    '/contact',
    '/media',
    '/quiz',
    '/team',
    '/testimonials',
    '/training',
    '/treatments',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic treatment routes
  // We read the treatments directory to get all available treatment pages
  const treatmentsDir = path.join(process.cwd(), 'src/app/treatments')
  let treatmentRoutes: MetadataRoute.Sitemap = []

  try {
    if (fs.existsSync(treatmentsDir)) {
      const treatments = fs.readdirSync(treatmentsDir)
      treatmentRoutes = treatments
        .filter((file) => {
          // Check if it is a directory and has page.tsx
          const filePath = path.join(treatmentsDir, file)
          try {
            return fs.statSync(filePath).isDirectory() && fs.existsSync(path.join(filePath, 'page.tsx'))
          } catch {
            return false
          }
        })
        .map((treatment) => ({
          url: `${baseUrl}/treatments/${treatment}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        }))
    }
  } catch (error) {
    console.error('Error reading treatments directory:', error)
  }

  return [...routes, ...treatmentRoutes]
}
