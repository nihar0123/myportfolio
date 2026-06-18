import type { BlogPost } from './blog-data'
import { SITE_URL } from './site'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/nihar0123',
    },
    publisher: {
      '@type': 'Person',
      name: 'Nihar Bhatt',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NB Portfolio',
    description: "AI/ML Engineer portfolio showcasing machine learning projects, deep learning experiments, and intelligent systems by Nihar Bhatt.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Nihar Bhatt',
      url: 'https://github.com/nihar0123',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nihar Bhatt',
    url: SITE_URL,
    image: `${SITE_URL}/developer-portrait.png`,
    sameAs: [
      'https://github.com/nihar0123',
      'https://www.linkedin.com/in/nihar-bhatt-22762b256',
    ],
    jobTitle: 'AI/ML Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Open to Opportunities',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
