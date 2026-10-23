# KY Drywall — revisão de 23/10/2026

## Base e inventário

Repositório: https://github.com/supremapix/KY-Drywall. Base: `12fa1b5700848eb8842afcb9dcf0c069b9a30026`.
Não foram encontrados AGENTS.md ou instruções específicas adicionais no checkout.
O inventário de rotas, ativos, URLs externas e contatos anteriores está em `inventory-before.json`.

Rotas preservadas: home, empresa, steel-frame, serviços e detalhes, produtos e detalhes, contato, blog e artigos, FAQ, links/QR, sitemap e aliases, drywall-em, steel-frame-em, localizacao e 404. O build gera 290 rotas e uma página 404. Nenhuma imagem original ou URL de conteúdo foi excluída.

Cinco serviços cadastrados: construção com Steel Frame, estrutura Steel Frame para telhado, forro/parede drywall, telhado shingle e placa modular PVC. Todos aparecem agora na navegação de especialidades; cada serviço ganhou orientação específica para solicitar orçamento.

Identidade e contatos preservados do site publicado e do código: KY Drywall & Steel Frame, BR-277, 3641, Cajuru, Curitiba; telefone (41) 3528-4232; Carlos (41) 99645-7421; Lucilene (41) 99906-7259; carlos@kydrywall.com.br e lucilene@kydrywall.com.br. Conferência pública: https://www.kydrywall.com.br/contato. Não substituímos estes contatos pelos números diferentes visíveis na imagem da fachada. O CEP cadastrado e a atualidade dos números ainda precisam de confirmação comercial independente.

## Alterações

- Voltar ao topo em todas as rotas, incluindo /links; alvo de pelo menos 48 px, após rolagem, separado do WhatsApp, com movimento reduzido.
- Link para pular conteúdo como primeiro foco, submenu desktop por teclado, contenção de foco no menu móvel, Escape para fechar menu e painéis de contato.
- Texto do rodapé ampliado, logo oficial Suprema já usada pelo site preservada em arquivo local e ampliada; crédito duplicado removido.
- Alegações não verificadas de 4,9 no Google, 8.500 obras e depoimentos sem origem retiradas do rodapé. Referências a WhatsApp 24h/online agora removidas dos controles compartilhados. Não há comprovação de atendimento contínuo.
- Aviso de armazenamento local com ação funcional e espaço para controles flutuantes; o antigo botão Configurar não tinha implementação.
- Favicon e imagem OG padrão com logo KY existente, sem imagem gerada por IA como padrão social. Canonical, entidade única e HTML pré-renderizado mantidos. Robots consistente no HTML e no cliente.
- 212 páginas locais existentes preservadas, agora noindex/follow; 120 URLs locais retiradas do sitemap, ficando 75 URLs principais. Sem novas páginas repetitivas ou filiais. Reindexar páginas locais somente após conteúdo próprio e cobertura comprovada.
- Explicação visível de 75 bairros oficiais versus vilas, conjuntos e nomes populares. Fonte: IPPUC, https://ippuc.org.br/perfil-fisico-territorial-e-socioeconomico-75-bairros-de-curitiba-2. A lista antiga de 92 referências não é apresentada como 92 bairros oficiais. O texto esclarece que a lista geográfica não garante entrega.
- Lockfile incluído para instalações reproduzíveis. Nenhum DNS, segredo, permissão ou custo alterado.

## Validação

`npm run lint`, `npm run build`, `npm run verify:seo`, `node scripts/check-output.mjs`.
O build mantém alerta de bundle acima de 500 kB; não impede compilação.
`output-check.json`: 291 HTMLs, 3.663 referências a imagens locais, 31.410 links locais, nenhum destino ausente; 212 páginas locais noindex.
`external-images.json`: nove URLs de imagens externas, todas HTTP 200 na checagem.
`browser-results.json`: Chrome, movimento reduzido, 320/390/1440 px, home, links, serviços, drywall, produtos, contato e Cajuru. Verifica rolagem horizontal, erros JavaScript, foco do menu, skip link, voltar ao topo e espaço do aviso. Capturas ficam localmente em audit/*.png, fora do Git.

## Pendências e limites

1. **Fachada real — ação dependente pendente.** A imagem atualmente usada pelo site apresenta marca visual de geração por IA no canto inferior direito e números diferentes dos contatos atuais. O histórico `bc73743` a introduziu substituindo um arquivo chamado `gemini_generated_image...png`. Não é evidência suficiente para classificá-la como fotografia original. Cópia de inspeção local: `fachada-cadastrada-procedencia-pendente.jpeg`. Mantivemos a imagem e galeria existentes, mas não ampliamos sua exposição como “foto real”. É necessária a fotografia original ou evidência verificável da procedência para concluir o destaque solicitado.
2. **Padrão Paver — referência resolvida.** Foi fornecido https://github.com/supremapix/paver-pro-curitiba no commit `7402af0def877740b09f0268200d4664ab8d734b` e https://www.engenhariadopaver.com.br/. Inspecionados `src/Site.tsx` (rodapé ativo), `src/components/Footer.tsx` e `src/components/SupremaCredit.tsx`. Confirmada a mesma logo oficial `https://img.supremamidia.com/suprema-img.png` e o destino `https://supremasite.com.br`. A KY mantém seus contatos, navegação e cores, com identidade Suprema destacada, alvos amplos e controle de leitura confortável inspirado na referência. O controle da KY amplia os textos de leitura e links do rodapé, conforme seu rótulo.
3. **Cobertura comercial — confirmação pendente.** Os nomes locais e municípios existentes não comprovam entrega, prazo, frota própria, instalação ou estoque. Não ampliamos a lista nem criamos filiais. Outras alegações históricas nos textos longos ainda exigem revisão documental; não se promete ranking ou citação em IA.
4. **Produção.** https://www.kydrywall.com.br respondeu HTTP 200 em Vercel durante a auditoria. O deployment da base consta como sucesso no GitHub. Publicação desta revisão deve ser confirmada pelo status do novo commit e por marcadores no domínio, nunca apenas pelo push.
