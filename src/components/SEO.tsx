import React from 'react';
import EnhancedSEO from './EnhancedSEO';
const SEO = ({ title, description, url, type, image, schema, noindex = false }: any) =>
  <EnhancedSEO title={title} description={description} canonical={url} ogType={type} ogImage={image} schema={schema} noindex={noindex} />;
export default SEO;
