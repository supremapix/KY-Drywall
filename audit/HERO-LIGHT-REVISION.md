# Continuação — hero da loja e identidade branca/vermelha

Base publicada: f064aa6496ee560b8851c0f568e663c94082a45e.

O usuário pediu foco na loja/estrutura, forneceu a URL da fachada e depois definiu vermelho predominante com fundos sempre brancos. A implementação atende essas instruções mais recentes.

## Entrega

- Hero estática, clara, com a fachada selecionada em primeiro plano, sem overlay escuro, recorte ou alteração de aparência. O arquivo continua na URL indicada pelo usuário e a proporção é mantida por dimensões explícitas e altura automática.
- Hierarquia dedicada à loja: Drywall e Steel Frame, Cajuru/Curitiba, BR-277, mapa, horários cadastrados, catálogo e WhatsApp oficial. Sem novos números de obras, métricas de desempenho, certificações ou promessa de estoque.
- O carrossel automático e sua faixa de alegações comerciais foram substituídos. As referências anteriores ficam preservadas em `hero-previous-source.txt`; arquivos originais, demais imagens e URLs de conteúdo permanecem disponíveis.
- Tema compartilhado `LightTheme.css`: fundos brancos em todas as famílias de páginas, menu móvel, cards, rodapé, FAQ, catálogo e painéis. Títulos, bordas e ações usam o vermelho KY; textos secundários escurecidos para manter contraste. Nenhuma seção extensa foi trocada por fundo vermelho.
- Preservados topo flutuante, movimento reduzido, navegação por teclado, textos ampliados, crédito e logo oficial Suprema, contatos e política de indexação publicada.

## Verificação

`npm run lint`, `npm run build`, `npm run verify:seo`, `node scripts/check-output.mjs`, `node scripts/browser-check.mjs`, `node scripts/check-light-theme.mjs`.

O teste de tema cobre 15 famílias de páginas em 320/390/1440 px (45 combinações), checa superfícies escuras, overflow, proporção/carregamento da fachada e regras axe de contraste, nome de links/botões e alt de imagens. Resultados em `light-theme-results.json`; capturas locais em `hero-light-*.png`.

## Observações

A imagem foi escolhida expressamente pelo usuário. Não foi rotulada como fotografia original autenticada. Mantida a marca visual existente. Os números impressos diferem dos contatos atuais do site; os CTAs usam exclusivamente o cadastro existente. Não há mais bloqueio visual para publicar a hero com a imagem escolhida. As lacunas sobre cobertura comercial e procedência histórica permanecem documentadas sem impedir o layout autorizado.
