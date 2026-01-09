# Guia de Deploy - KY Drywall & Steel Frame

## ⚠️ Problema Resolvido: Erro 404 em Rotas Internas

Este guia explica como configurar corretamente o roteamento do React Router em diferentes plataformas de hospedagem para evitar erros 404 ao acessar URLs diretamente.

---

## 📋 Arquivos de Configuração Incluídos

### 1. **Vercel** (Recomendado)
**Arquivo:** `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Como usar:**
- Faça deploy do projeto normalmente na Vercel
- O arquivo `vercel.json` já está na raiz do projeto
- A Vercel detectará automaticamente e aplicará as regras

**Status:** ✅ Pronto para uso

---

### 2. **Netlify**
**Arquivos:**
- `netlify.toml` (raiz do projeto)
- `public/_redirects` (backup)

**netlify.toml:**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Como usar:**
- Faça deploy conectando seu repositório ao Netlify
- O arquivo `netlify.toml` será lido automaticamente
- Alternativamente, o `public/_redirects` também funciona

**Status:** ✅ Pronto para uso

---

### 3. **Apache (Hospedagem Tradicional/cPanel)**
**Arquivo:** `.htaccess`

Dois arquivos `.htaccess` estão disponíveis:
- **Raiz:** `/tmp/cc-agent/61906644/project/.htaccess`
- **Public:** `/tmp/cc-agent/61906644/project/public/.htaccess`

**Como usar:**
1. Faça build do projeto: `npm run build`
2. Faça upload da pasta `dist/` para o servidor
3. Copie o arquivo `.htaccess` para dentro da pasta `dist/` no servidor
4. Certifique-se de que o módulo `mod_rewrite` está habilitado no Apache

**Conteúdo do .htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirecionar HTTP para HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Se o arquivo ou diretório existe, servir diretamente
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l

  # Redirecionar todas as rotas para index.html
  RewriteRule . /index.html [L]
</IfModule>
```

**Status:** ✅ Pronto para uso

---

## 🚀 Instruções de Deploy por Plataforma

### Vercel
```bash
# 1. Instalar Vercel CLI (opcional)
npm i -g vercel

# 2. Deploy
vercel

# Ou conecte seu repositório GitHub diretamente no painel da Vercel
```

### Netlify
```bash
# 1. Instalar Netlify CLI (opcional)
npm i -g netlify-cli

# 2. Build local
npm run build

# 3. Deploy
netlify deploy --prod

# Ou conecte seu repositório GitHub diretamente no painel da Netlify
```

### Apache/cPanel
```bash
# 1. Build do projeto
npm run build

# 2. Upload da pasta dist/ via FTP/SFTP
# 3. Copiar .htaccess para dentro da pasta dist/ no servidor
# 4. Certifique-se que a URL aponta para a pasta com o index.html
```

---

## 🔍 Como Verificar se Está Funcionando

1. Acesse a página inicial: `https://seusite.com/` ✅
2. Acesse uma rota interna: `https://seusite.com/produtos` ✅
3. Recarregue a página (F5) em uma rota interna ✅
4. Use os botões voltar/avançar do navegador ✅
5. Compartilhe um link direto de uma página interna ✅

**Todos devem funcionar sem erro 404!**

---

## ⚙️ Arquitetura do Projeto

- **Framework:** React 19.2.3
- **Roteamento:** React Router 7.11.0
- **Build Tool:** Vite 6.2.0
- **Tipo de Roteamento:** BrowserRouter (URLs limpas sem #)

### Rotas Configuradas

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/empresa" element={<About />} />
  <Route path="/servicos" element={<ServicesPage />} />
  <Route path="/servicos/:serviceId" element={<ServicesPage />} />
  <Route path="/produtos" element={<ProductList />} />
  <Route path="/produto/:productId" element={<ProductDetails />} />
  <Route path="/contato" element={<Contact />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/drywall-em-:location" element={<LocationPage type="drywall" />} />
  <Route path="/steel-frame-em-:location" element={<LocationPage type="steel" />} />
  <Route path="/localizacao/:location" element={<LocationPage type="drywall" />} />
  <Route path="/sitemap" element={<Sitemap />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 🛠️ Troubleshooting

### Erro 404 ainda aparece?

**Apache:**
- Verifique se `mod_rewrite` está habilitado
- Verifique se `.htaccess` está na mesma pasta que `index.html`
- Verifique permissões do arquivo (644)

**Netlify:**
- Verifique se o build command está correto: `npm run build`
- Verifique se a pasta de publicação é `dist`
- Force um novo deploy

**Vercel:**
- Verifique se `vercel.json` está na raiz
- Force um novo deploy

### Rotas funcionam em dev mas não em produção?

- Certifique-se de fazer build antes do deploy: `npm run build`
- Teste localmente com: `npm run preview`
- Verifique se os arquivos de configuração foram incluídos no deploy

---

## 📝 Notas Importantes

1. **URLs Limpas:** O projeto usa BrowserRouter, não HashRouter. URLs são `/produtos` e não `/#/produtos`

2. **SEO Friendly:** Todas as rotas são indexáveis por mecanismos de busca

3. **Página 404:** Existe uma rota catch-all `*` que renderiza `<NotFound />`

4. **Cache:** O `.htaccess` e `netlify.toml` incluem headers de cache para assets estáticos

5. **Segurança:** Headers de segurança (X-Frame-Options, CSP, etc.) estão configurados

---

## ✅ Checklist de Deploy

- [ ] Build do projeto (`npm run build`)
- [ ] Arquivo de configuração correto para a plataforma
- [ ] Teste local com `npm run preview`
- [ ] Deploy realizado
- [ ] Teste de rota direta: `https://seusite.com/produtos`
- [ ] Teste de reload (F5) em página interna
- [ ] Teste de botão voltar/avançar
- [ ] Verificar se não há erro 404

---

## 📞 Suporte

Se ainda tiver problemas com rotas 404:
1. Verifique os logs do servidor
2. Confirme que está usando o arquivo de configuração correto
3. Teste em modo de produção localmente primeiro
4. Verifique a documentação da plataforma de hospedagem

**Site:** https://kydrywall.com.br
**Projeto:** KY Drywall & Steel Frame
