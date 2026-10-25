
import fs from 'fs';

const content = fs.readFileSync('src/constants.tsx', 'utf-8');
const productsMatch = content.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);

if (!productsMatch) {
  console.error('Could not find PRODUCTS array');
  process.exit(1);
}

// Very basic "parser" since it's a TS file
const productsStr = productsMatch[1];
const productBlocks = productsStr.split(/\{\s*id:/).slice(1);

const missingFields = [];
const products = [];

productBlocks.forEach((block, index) => {
  const idMatch = block.match(/'([^']+)'/);
  const id = idMatch ? idMatch[1] : `unknown-${index}`;
  
  const hasWhatIsIt = block.includes('whatIsIt:');
  const hasSelectionCriteria = block.includes('selectionCriteria:');
  const hasCompatibility = block.includes('compatibility:');
  const hasFaq = block.includes('faq:');

  products.push({ id, hasWhatIsIt, hasSelectionCriteria, hasCompatibility, hasFaq });

  if (!hasWhatIsIt || !hasSelectionCriteria || !hasCompatibility || !hasFaq) {
    missingFields.push({
      id,
      missing: [
        !hasWhatIsIt && 'whatIsIt',
        !hasSelectionCriteria && 'selectionCriteria',
        !hasCompatibility && 'compatibility',
        !hasFaq && 'faq'
      ].filter(Boolean)
    });
  }
});

console.log(`Total products found: ${products.length}`);
if (missingFields.length > 0) {
  console.log('Products with missing fields:');
  console.log(JSON.stringify(missingFields, null, 2));
} else {
  console.log('All products have all required fields.');
}
