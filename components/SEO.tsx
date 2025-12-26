
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  type?: string;
  image?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, type = 'website', image, schema }) => {
  const fullTitle = `${title} | KY Drywall & Steel Frame`;
  
  React.useEffect(() => {
    document.title = fullTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
  }, [fullTitle, description]);

  return (
    <>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};

export default SEO;
