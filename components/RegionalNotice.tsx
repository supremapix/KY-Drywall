import React from 'react';
import { Link } from 'react-router-dom';

export default function RegionalNotice() {
  return <aside className="max-w-7xl mx-auto px-5 py-8 text-base leading-relaxed" aria-label="Orientações para atendimento regional">
    <h2 className="text-xl font-bold mb-3">Consulte a entrega para o endereço da sua obra</h2>
    <p>A loja da KY fica no Cajuru, em Curitiba. Para consultar atendimento na cidade e na região metropolitana, informe o CEP, os materiais e as quantidades. A equipe confirma disponibilidade, frete, prazo e condições de descarga antes do pedido.</p>
    <p className="mt-3">Curitiba tem 75 bairros oficiais. As referências deste site também incluem vilas, conjuntos e nomes populares, que não são bairros oficiais adicionais nem endereços de filiais. A lista geográfica não garante cobertura de entrega.</p>
    <div className="flex flex-wrap gap-4 mt-4">
      <Link className="underline font-bold py-3" to="/contato">Consultar atendimento</Link>
      <a className="underline py-3" href="https://ippuc.org.br/perfil-fisico-territorial-e-socioeconomico-75-bairros-de-curitiba-2" target="_blank" rel="noopener noreferrer">Consultar os bairros no IPPUC</a>
    </div>
  </aside>;
}
