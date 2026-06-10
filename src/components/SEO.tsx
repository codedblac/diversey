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
  url = "https://diverseysacco.com",
  image = "https://diverseysacco.com/logo.png",
  canonical,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="diverseysacco" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL (only one) */}
      <link rel="canonical" href={canonical || url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Diverseysacco" />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DiverseySacco",
          url,
          logo: image,
          sameAs: [
            "https://facebook.com/diverseysacco",
            "https://twitter.com/diverseysacco",
          ],
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DIVERSEYSacco",
          url,
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </Helmet>
  );
}
