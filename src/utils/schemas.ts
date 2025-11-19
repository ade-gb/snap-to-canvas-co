// Organization Schema for brand identity
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Snap4Canvas",
  "description": "Premium custom canvas prints and photo gifts made in the USA with free shipping",
  "url": "https://snap4canvas.com",
  "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
  "image": "https://lovable.dev/opengraph-image-p98pqg.png",
  "telephone": "+16692462503",
  "email": "customersolution@snap4canvas.com",
  "priceRange": "$12.99 - $159.99",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
};

// Product Schema Generator
export const createProductSchema = (product: {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  image: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": "Snap4Canvas"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": `https://snap4canvas.com/product/${product.name.toLowerCase().replace(/\s/g, '-')}`,
    "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  ...(product.rating && product.reviews && {
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews,
      "bestRating": "5",
      "worstRating": "1"
    }
  }),
  "category": product.category
});

// Breadcrumb Schema Generator
export const createBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://snap4canvas.com${item.url}`
  }))
});

// FAQ Schema Generator
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Collection Page Schema
export const createCollectionSchema = (products: any[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Custom Canvas Prints Collection",
  "description": "Browse our collection of premium custom canvas prints",
  "url": "https://snap4canvas.com/products",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": createProductSchema(product)
    }))
  }
});
