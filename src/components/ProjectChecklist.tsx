import React from 'react';

const guidance: Record<string, string> = {
  'steel-frame': 'Informe o uso da construção, a área e se há projeto estrutural. A especificação dos perfis e fechamentos depende do projeto e da avaliação do responsável técnico.',
  'telhado-steel': 'Envie as medidas da cobertura, os vãos, os apoios disponíveis e o tipo de telha previsto. A estrutura precisa ser dimensionada para as cargas do projeto.',
  drywall: 'Informe se precisa de parede, forro ou revestimento, as medidas e o uso do ambiente. Umidade, resistência ao fogo e isolamento precisam ser considerados na escolha do sistema.',
  shingle: 'Envie a área, a inclinação e fotos da cobertura. Consulte a compatibilidade da base, a ventilação e os acessórios necessários para o sistema escolhido.',
  'pvc-modular': 'Informe as dimensões do ambiente, a altura do forro e a necessidade de acesso às instalações. Confirme com a equipe as opções de placas, estrutura e acabamento.'
};

const decisions: Record<string, { title: string; text: string; question: string }> = {
  'steel-frame': { title: 'Defina a estrutura antes de fechar a compra', text: 'Uma obra em Light Steel Frame precisa compatibilizar fundação, perfis, ancoragens, fechamentos e instalações. Separe a lista estrutural dos componentes de vedação e peça que o responsável técnico identifique espessuras e proteção do aço. Comprar por semelhança visual pode trocar peças com funções distintas.', question: 'A proposta inclui apenas fornecimento ou também projeto e execução? Peça a definição de cada responsabilidade por escrito.' },
  'telhado-steel': { title: 'A cobertura é um conjunto de cargas e encontros', text: 'O tipo de telha, os vãos, os apoios e as ações do vento entram no dimensionamento. Se a intenção é substituir um telhado existente, o estado e a capacidade dos apoios precisam ser avaliados. Inclua rufos, calhas e passagens no levantamento: não são detalhes resolvidos apenas escolhendo um perfil mais largo.', question: 'O levantamento contempla ligações, ancoragens e arremates, ou somente a estrutura principal?' },
  drywall: { title: 'Parede, forro e revestimento pedem listas diferentes', text: 'Antes de cotar, identifique a função de cada superfície. Paredes podem exigir reforços para portas e objetos suspensos; forros precisam de suspensão e compatibilização com luminárias e instalações. Para reduzir ruído ou atender requisitos ao fogo, escolha a composição completa com o responsável técnico, não uma placa isolada.', question: 'Quais reforços, passagens e acabamentos precisam estar previstos antes do fechamento?' },
  shingle: { title: 'Compare o sistema, não apenas a telha', text: 'Uma cotação de shingle deve identificar base, subcobertura, ventilação, fixadores e arremates compatíveis. Inclinação e geometria alteram o aproveitamento e os detalhes. Solicite a documentação do modelo escolhido e confirme o que está incluído na proposta antes de comparar preços por metro quadrado.', question: 'A base existente atende às condições de instalação ou será necessário adequá-la?' },
  'pvc-modular': { title: 'Planeje o teto com acesso às instalações', text: 'A modulação precisa considerar luminárias, recortes, encontros e os pontos que exigem manutenção. Confira o formato das placas e a estrutura de suporte compatível. Equipamentos não devem ser apoiados indiscriminadamente no forro; sua fixação e as cargas devem ser avaliadas na solução de projeto.', question: 'Como será feito o acesso às instalações sem danificar placas e acabamentos?' }
};

export default function ProjectChecklist({ serviceId }: { serviceId?: string }) {
  return <section className="max-w-7xl mx-auto px-5 py-10 text-base leading-relaxed">
    <h2 className="text-2xl font-bold mb-4">O que enviar para solicitar um orçamento</h2>
    <p>{serviceId ? guidance[serviceId] : 'Escolha abaixo entre Steel Frame, estrutura para telhado, drywall, cobertura shingle e PVC modular. Informe se procura materiais, orientação ou execução para que a equipe confirme o escopo disponível.'}</p>
    {serviceId && decisions[serviceId] && <div className="ky-card p-6 mt-6 border border-slate-200">
      <h3 className="text-xl font-bold mb-3">{decisions[serviceId].title}</h3>
      <p>{decisions[serviceId].text}</p>
      <p className="mt-3"><strong>Pergunta para a cotação:</strong> {decisions[serviceId].question}</p>
    </div>}
    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>Medidas, lista de materiais ou projeto, quando disponível.</li>
      <li>Fotos do local, CEP da obra e condições de acesso e descarga.</li>
      <li>Prazo desejado e preferência por retirada ou entrega.</li>
    </ul>
    <p className="mt-4">Materiais, quantidades, instalação, frete e prazo devem constar na proposta. A disponibilidade e o atendimento ao endereço são confirmados pela equipe antes da contratação.</p>
  </section>;
}
