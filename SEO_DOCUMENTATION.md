# Documentação de SEO - KY Drywall & Steel Frame

## Implementação Completa de SEO

Este projeto implementa uma estratégia completa de SEO para máxima visibilidade nos buscadores.

---

## ✅ Implementações Realizadas

### 1. **Componente EnhancedSEO**
Localização: `/components/EnhancedSEO.tsx`

Funcionalidades:
- Meta tags completas (title, description, keywords)
- Open Graph tags para redes sociais
- Twitter Cards
- Tags de geolocalização
- Canonical URLs
- Resource hints (preconnect, dns-prefetch)
- Structured Data (Schema.org JSON-LD)
- Suporte a noindex quando necessário

### 2. **React Helmet Async**
- Gerenciamento dinâmico de meta tags
- Suporte a SSR/Pre-rendering
- Atualização do `<head>` em cada rota

### 3. **Structured Data (Schema.org)**

Schemas implementados por página:

#### Home (`/`)
- `Organization` - Dados da empresa
- `WebSite` - Informações do site
- `Store` - Loja física com horários e localização

#### Páginas de Localidade (`/drywall-em-*` e `/steel-frame-em-*`)
- `Service` - Serviços específicos por localidade
- `BreadcrumbList` - Navegação estruturada
- `LocalBusiness` - Dados de atuação local

#### About (`/empresa`)
- `Organization` - Informações completas da empresa
- Contatos, horários, redes sociais

#### Contact (`/contato`)
- `ContactPage` - Página de contato
- `ContactPoint` - Múltiplos pontos de contato (Carlos, Lucilene)

#### Products (`/produtos`)
- `ItemList` - Lista de produtos
- `Product` - Cada produto com offer e availability

#### Services (`/servicos/:id`)
- `Service` - Serviço específico
- `OfferCatalog` - Catálogo de todos os serviços

#### Blog (`/blog`)
- `Blog` - Blog principal
- `BlogPosting` - Cada post do blog

### 4. **URLs Canônicas**
Cada página tem URL canônica única para evitar conteúdo duplicado:
```
https://www.kydrywall.com.br/
https://www.kydrywall.com.br/empresa
https://www.kydrywall.com.br/drywall-em-agua-verde
etc.
```

### 5. **Arquivo _redirects (Netlify)**
- Configuração de SPA para funcionamento correto das rotas
- Todas as rotas redirecionam para index.html com status 200

### 6. **Netlify.toml**
- Configuração de build
- Headers de segurança
- Cache otimizado para assets
- Redirects configurados

---

## 🔍 Como o SEO Funciona

### Client-Side Rendering (CSR) com SEO Dinâmico

O projeto usa React com react-helmet-async para atualizar dinamicamente as meta tags em cada página.

**Vantagens:**
- Meta tags específicas para cada rota
- Structured data completo e único por página
- URLs canônicas corretas
- Performance superior

**Como os buscadores veem:**
- Google Bot executa JavaScript e indexa o conteúdo renderizado
- Meta tags são injetadas no `<head>` em tempo real
- Structured data é lido do JSON-LD inserido

### Pre-rendering (Opcional)

O projeto está configurado para pre-rendering com `react-snap`:

```bash
npm run build:prerender
```

**Nota:** O pre-rendering requer um ambiente com Chrome/Chromium instalado. Em ambientes de produção como Netlify/Vercel, você pode usar:

#### Netlify:
- Netlify tem suporte nativo a pre-rendering
- Configure em: Site Settings > Build & Deploy > Pre-rendering

#### Vercel:
- Suporte automático através de Vercel Static Site Generation

---

## 📊 Verificação de SEO

### 1. Meta Tags
Inspecione o código-fonte da página:
```
Ctrl + U (View Source)
```

Procure por:
- `<title>` - Título único da página
- `<meta name="description">` - Descrição específica
- `<meta property="og:*">` - Open Graph tags
- `<script type="application/ld+json">` - Structured Data

### 2. Structured Data Testing
Use o [Google Rich Results Test](https://search.google.com/test/rich-results):
- Cole a URL da página
- Verifique se o schema é reconhecido
- Confira erros e avisos

### 3. Search Console
Submeta o sitemap no Google Search Console:
```
https://www.kydrywall.com.br/sitemap
```

---

## 🎯 URLs Principais para Indexação

### Páginas Institucionais
- `/` - Home
- `/empresa` - Sobre
- `/contato` - Contato
- `/produtos` - Catálogo
- `/servicos` - Serviços
- `/blog` - Blog e Localidades
- `/sitemap` - Índice geral

### Páginas de Localidade (178 páginas)
**Drywall em Curitiba (75 bairros):**
- `/drywall-em-abranches`
- `/drywall-em-agua-verde`
- `/drywall-em-ahu`
- ... (72 outros bairros)

**Steel Frame em Curitiba (75 bairros):**
- `/steel-frame-em-abranches`
- `/steel-frame-em-agua-verde`
- ... (72 outros bairros)

**Drywall na RMC (14 cidades):**
- `/drywall-em-araucaria`
- `/drywall-em-sao-jose-dos-pinhais`
- `/drywall-em-pinhais`
- ... (11 outras cidades)

**Steel Frame na RMC (14 cidades):**
- `/steel-frame-em-araucaria`
- ... (13 outras cidades)

---

## 🚀 Otimizações de Performance

### 1. Resource Hints
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://kydrywall.com.br">
```

### 2. Cache Headers (Netlify)
- Assets: Cache de 1 ano (immutable)
- HTML: Sem cache (sempre atualizado)

### 3. Minificação
- JavaScript minificado
- CSS minificado
- HTML compactado (quando usando pre-rendering)

---

## 📱 Mobile Optimization

- Design responsivo em todas as páginas
- Meta tag viewport configurada
- Imagens otimizadas
- Performance no mobile prioritizada

---

## 🔐 Segurança

Headers configurados no netlify.toml:
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## 📈 Próximos Passos

### Para Melhor SEO:

1. **Submeter Sitemap:**
   - Google Search Console
   - Bing Webmaster Tools

2. **Configurar Analytics:**
   - Google Analytics 4
   - Google Tag Manager

3. **Monitorar:**
   - Core Web Vitals
   - Indexação de páginas
   - Erros de crawl

4. **Criar Conteúdo:**
   - Blog posts regulares
   - Guias técnicos
   - FAQs

5. **Link Building:**
   - Parcerias locais
   - Diretórios especializados
   - Backlinks de qualidade

---

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Build com pre-rendering (requer Chrome)
npm run build:prerender

# Preview local
npm run preview
```

---

## 📞 Suporte

Para dúvidas sobre a implementação de SEO, consulte:
- [React Helmet Async Docs](https://github.com/staylor/react-helmet-async)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

---

**Última atualização:** Janeiro 2026
**Versão:** 1.0.0
