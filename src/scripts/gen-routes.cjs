// Keep compatibility with the old command without duplicating products or locations.
(async () => {
  const { createServer } = await import('vite');
  const { writeFile } = await import('node:fs/promises');
  const { getRoutes } = await import('../seo/routes.mjs');
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
  try {
    const constants = await server.ssrLoadModule('/src/constants.tsx');
    const { routes } = getRoutes(constants);
    await writeFile('src/seo/indexable-routes.json', JSON.stringify(routes, null, 2) + '\n');
    console.log(`Generated ${routes.length} canonical, indexable routes.`);
  } finally { await server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
