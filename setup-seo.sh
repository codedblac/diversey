#!/bin/bash
# ============================================
# 🚀 Full SEO Setup Script for React + TypeScript
# ============================================

set -e  # Exit on any error

echo "🔍 Checking if project uses npm or yarn..."
if [ -f "yarn.lock" ]; then
  PACKAGE_MANAGER="yarn"
else
  PACKAGE_MANAGER="npm"
fi

echo "👉 Installing SEO-related dependencies..."
$PACKAGE_MANAGER add react-helmet-async

echo "📁 Creating SEO component directory..."
mkdir -p src/components

echo "🧠 Generating SEO.tsx component..."
cat > src/components/SEO.tsx <<'EOF'
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  canonical?: string;
};

export default function SEO({
  title,
  description,
  keywords,
  url = "https://helbsacco.co.ke",
  image = "https://helbsacco.co.ke/logo.png",
  canonical,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="HELBSacco" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HELBSacco" />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* PWA */}
      <meta name="theme-color" content="#0d9488" />
      <link rel="manifest" href="/manifest.json" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "HELBSacco",
          url,
          logo: image,
          sameAs: [
            "https://facebook.com/helbsacco",
            "https://twitter.com/helbsacco"
          ],
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "HELBSacco",
          url,
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
}
EOF

# Update entry file to wrap with HelmetProvider
FILES=("src/main.tsx" "src/index.tsx")
UPDATED=false

for FILE in "${FILES[@]}"; do
  if [ -f "$FILE" ]; then
    echo "🧩 Updating $FILE to wrap <App /> with <HelmetProvider>..."
    if ! grep -q "HelmetProvider" "$FILE"; then
      sed -i.bak '/import App from/i import { HelmetProvider } from "react-helmet-async";' "$FILE"
      sed -i.bak 's#<App />#<HelmetProvider><App /></HelmetProvider>#' "$FILE"
    fi
    UPDATED=true
    break
  fi
done

if [ "$UPDATED" = false ]; then
  echo "⚠️ Could not find entry file (main.tsx or index.tsx). Please add <HelmetProvider> manually."
fi

# Create public/robots.txt
echo "📄 Creating public/robots.txt..."
mkdir -p public
cat > public/robots.txt <<'EOT'
User-agent: *
Allow: /

Sitemap: https://helbsacco.co.ke/sitemap.xml
EOT

# Create placeholder sitemap.xml
echo "📄 Creating public/sitemap.xml..."
cat > public/sitemap.xml <<'EOM'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://helbsacco.co.ke/</loc>
    <priority>1.00</priority>
    <changefreq>daily</changefreq>
  </url>
</urlset>
EOM

# Create manifest.json for PWA + SEO
echo "📄 Creating public/manifest.json..."
cat > public/manifest.json <<'EOM'
{
  "name": "HELBSacco",
  "short_name": "HELBSacco",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d9488",
  "icons": [
    {
      "src": "/logo192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/logo512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
EOM

echo "✅ SEO setup complete!"
echo "✨ Next steps:"
echo "  - Add <SEO title='...' description='...' canonical='...' /> in every page"
echo "  - Upload your sitemap to Google Search Console"
echo "  - Replace dummy logo.png & update social media links"
echo "  - (Optional) Add Google Analytics / GA4 snippet"
