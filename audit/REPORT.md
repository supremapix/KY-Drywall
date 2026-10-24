# KY Drywall — revisão de 23/10/2026

## Base e inventário

Repositório: https://github.com/supremapix/KY-Drywall. Base: `12fa1b5700848eb8842afcb9dcf0c069b9a30026`.
Não foram encontrados AGENTS.md ou instruções específicas adicionais no checkout.
O inventário de rotas, ativos, URLs externas e contatos anteriores está em `inventory-before.json`.

Rotas preservadas: home, empresa, steel-frame, serviços e detalhes, produtos e detalhes, contato, blog e artigos, FAQ, links/QR, sitemap e aliases, drywall-em, steel-frame-em, localizacao e 404. O build gera 290 rotas e uma página 404. Nenhuma imagem original ou URL de conteúdo foi excluída.

Cinco serviços cadastrados: construção com Steel Frame, estrutura Steel Frame para telhado, forro/parede drywall, telhado shingle e placa modular PVC. Todos aparecem agora na navegação de especialidades; cada serviço ganhou orientação específica para solicitar orçamento.

Identidade e contatos preservados do site publicado e do código: KY Drywall & Steel Frame, BR-277, 3641, Cajuru, Curitiba; telefone (41) 3528-4232; Carlos (41) 99645-7421; Lucilene (41) 99906-7259; carlos@kydrywall.com.br e lucilene@kydrywall.com.br. Conferência pública: https://www.kydrywall.com.br/contato. Não substituímos estes contatos pelos números diferentes visíveis na imagem da fachada. O CEP cadastrado e a atualidade dos números ainda precisam de confirmação comercial independente.

## Alterações

- Guias técnicos detalhados adicionados aos principais produtos (Massa Holdflex, Chapas ST/RF, Montantes), incluindo explicações de aplicação, critérios de escolha e FAQ.
- Integração do componente StoreHero na Home para valorizar a estrutura física e fachada da loja na BR-277.
- Adição de avisos regionais (RegionalNotice) e checklists de projeto (ProjectChecklist) para orientar o usuário na solicitação de orçamentos.
- Padronização de imagens do blog: cada postagem agora utiliza uma imagem única e contextualizada, eliminando capas repetidas.
- Aplicação do tema 'ky-light' em todo o projeto para garantir fundo branco predominante e destaques em vermelho KY, conforme diretriz visual.
- Verificação rigorosa do sitemap e robots: 212 páginas locais agora configuradas como 'noindex, follow' para priorizar o ranqueamento das páginas principais.

## Validação

`npm run lint`, `npm run build`, `npm run verify:seo`, `node scripts/check-output.mjs`.
O build mantém alerta de bundle acima de 500 kB; não impede compilação.
`output-check.json` (atualizado após a hero clara): 291 HTMLs, 3.664 referências a imagens locais, 31.702 links locais, nenhum destino ausente; 212 páginas locais noindex.
`external-images.json` (atualizado): sete URLs de imagens externas em uso, todas HTTP 200 na checagem. As referências do antigo carrossel ficam preservadas em `hero-previous-source.txt`.
`browser-results.json`: Chrome, movimento reduzido, 320/390/1440 px, home, links, serviços, drywall, produtos, contato e Cajuru. Verifica rolagem horizontal, erros JavaScript, foco do menu, skip link, voltar ao topo e espaço do aviso. Capturas ficam localmente em audit/*.png, fora do Git.

## Pendências e limites

1. **Fachada — seleção confirmada pelo usuário nesta continuação.** O usuário forneceu explicitamente a mesma URL como “FOTO FACHADA KY” e autorizou seu destaque. A hero agora usa o arquivo integral, na proporção original, sem recorte, escurecimento, alteração da aparência ou remoção de marcas. A seleção resolve a pendência de qual imagem usar; não autentica a imagem como fotografia original. A marca visual no canto inferior direito foi preservada. O telefone fixo impresso aparenta ser 3520-4232, diferente de (41) 3528-4232 cadastrado; os dois números com ícone WhatsApp também diferem dos contatos atuais. Nenhum deles foi copiado para CTAs. O site mantém Carlos (41) 99645-7421 e Lucilene (41) 99906-7259. URL indicada: https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg .
2. **Padrão Paver — referência resolvida.** Foi fornecido https://github.com/supremapix/paver-pro-curitiba no commit `7402af0def877740b09f0268200d4664ab8d734b` e https://www.engenhariadopaver.com.br/. Inspecionados `src/Site.tsx` (rodapé ativo), `src/components/Footer.tsx` e `src/components/SupremaCredit.tsx`. Confirmada a mesma logo oficial `https://img.supremamidia.com/suprema-img.png` e o destino `https://supremasite.com.br`. A KY mantém seus contatos, navegação e cores, com identidade Suprema destacada, alvos amplos e controle de leitura confortável inspirado na referência. O controle da KY amplia os textos de leitura e links do rodapé, conforme seu rótulo.
3. **Cobertura comercial — confirmação pendente.** Os nomes locais e municípios existentes não comprovam entrega, prazo, frota própria, instalação ou estoque. Não ampliamos a lista nem criamos filiais. Outras alegações históricas nos textos longos ainda exigem revisão documental; não se promete ranking ou citação em IA.
4. **Produção.** https://www.kydrywall.com.br respondeu HTTP 200 em Vercel durante a auditoria. O deployment da base consta como sucesso no GitHub. Publicação desta revisão deve ser confirmada pelo status do novo commit e por marcadores no domínio, nunca apenas pelo push.
