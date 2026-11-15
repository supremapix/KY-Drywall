import React from 'react';
import { Link } from 'react-router-dom';

export function FazendaBuyingGuide() {
  return <div className="rounded-xl border border-slate-200 p-6 space-y-6">
    <h3 className="text-2xl font-bold">Drywall para Fazenda Rio Grande: da necessidade à consulta de materiais</h3>
    <p>Fazenda Rio Grande consta na relação de municípios da Região Metropolitana publicada pela <a className="underline" href="https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba" target="_blank" rel="noopener noreferrer">AMEP</a>. Isso identifica a localidade, mas não define cobertura de entrega, frete ou tempo de deslocamento. A unidade da KY informada neste site fica no Cajuru, em Curitiba; não anunciamos filial em Fazenda Rio Grande.</p>
    <h4 className="text-xl font-bold">Qual problema a reforma precisa resolver?</h4>
    <p>Ao consultar materiais, explique se pretende dividir um ambiente, executar um forro ou revestir uma parede existente. Informe medidas disponíveis, aberturas e instalações que precisam permanecer. Se a intenção é reduzir ruído, descreva onde ele incomoda; se há manchas ou vazamento, a causa precisa ser avaliada antes de fechar a superfície. A foto ajuda na conversa, mas não substitui especificação ou diagnóstico profissional.</p>
    <h4 className="text-xl font-bold">Prepare uma consulta que permita avaliar o transporte</h4>
    <ul className="list-disc pl-5 space-y-2">
      <li>Informe Fazenda Rio Grande, bairro, rua, número e CEP da obra. Um nome de loteamento ou referência informal não substitui o endereço completo.</li>
      <li>Envie a lista revisada com modelos, dimensões, unidades e quantidades. Chapas, perfis e complementos devem corresponder ao sistema especificado.</li>
      <li>Descreva as condições conhecidas de entrada e recebimento. Se houver portaria, escadas ou restrição de horário, mencione antes de pedir o orçamento do transporte.</li>
      <li>Pergunte o que está incluído na entrega e quem fará descarga e movimentação interna. Confirme disponibilidade, valor e prazo antes de programar a equipe.</li>
    </ul>
    <h4 className="text-xl font-bold">Retirada em Curitiba ou entrega no imóvel?</h4>
    <p>São alternativas a consultar separadamente. Para retirada no Cajuru, confirme o pedido e a adequação do transporte às dimensões dos materiais antes de se deslocar. Para entrega em Fazenda Rio Grande, peça uma resposta para o endereço exato. Não presuma serviço no mesmo dia, frete incluído ou disponibilidade apenas porque o produto aparece no catálogo.</p>
    <details className="border-t pt-4"><summary className="font-bold cursor-pointer">Moro em Fazenda Rio Grande: o orçamento inclui instalação?</summary><p className="pt-3">Esta página é voltada à consulta de materiais. Instalação, projeto, acabamento e transporte só devem ser considerados incluídos quando estiverem expressos na proposta. Confirme responsabilidades com os profissionais contratados.</p></details>
    <details className="border-t pt-4"><summary className="font-bold cursor-pointer">O bairro sozinho permite calcular o frete?</summary><p className="pt-3">Não conte com isso. Informe endereço completo, lista de materiais e condições de recebimento. A equipe precisa confirmar as condições comerciais para a consulta.</p></details>
    <p className="text-sm">Orientação editorial revisada em 15/11/2026. A referência geográfica não comprova uma operação logística específica. <Link className="underline" to="/regiao-metropolitana/fazenda-rio-grande">Consulte as referências de localidades</Link> e confirme o endereço da obra.</p>
    <p>Continue: <Link className="underline" to="/blog/b7">como organizar a compra</Link> · <Link className="underline" to="/blog/b2">isolamento e ruído</Link> · <Link className="underline" to="/produtos">catálogo para consulta</Link>.</p>
  </div>;
}
