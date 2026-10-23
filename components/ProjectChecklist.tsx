import React from 'react';

const guidance: Record<string, string> = {
  'steel-frame': 'Informe o uso da construção, a área e se há projeto estrutural. A especificação dos perfis e fechamentos depende do projeto e da avaliação do responsável técnico.',
  'telhado-steel': 'Envie as medidas da cobertura, os vãos, os apoios disponíveis e o tipo de telha previsto. A estrutura precisa ser dimensionada para as cargas do projeto.',
  drywall: 'Informe se precisa de parede, forro ou revestimento, as medidas e o uso do ambiente. Umidade, resistência ao fogo e isolamento precisam ser considerados na escolha do sistema.',
  shingle: 'Envie a área, a inclinação e fotos da cobertura. Consulte a compatibilidade da base, a ventilação e os acessórios necessários para o sistema escolhido.',
  'pvc-modular': 'Informe as dimensões do ambiente, a altura do forro e a necessidade de acesso às instalações. Confirme com a equipe as opções de placas, estrutura e acabamento.'
};

export default function ProjectChecklist({ serviceId }: { serviceId?: string }) {
  return <section className="max-w-7xl mx-auto px-5 py-10 text-base leading-relaxed">
    <h2 className="text-2xl font-bold mb-4">O que enviar para solicitar um orçamento</h2>
    <p>{serviceId ? guidance[serviceId] : 'Escolha abaixo entre Steel Frame, estrutura para telhado, drywall, cobertura shingle e PVC modular. Informe se procura materiais, orientação ou execução para que a equipe confirme o escopo disponível.'}</p>
    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li>Medidas, lista de materiais ou projeto, quando disponível.</li>
      <li>Fotos do local, CEP da obra e condições de acesso e descarga.</li>
      <li>Prazo desejado e preferência por retirada ou entrega.</li>
    </ul>
    <p className="mt-4">Materiais, quantidades, instalação, frete e prazo devem constar na proposta. A disponibilidade e o atendimento ao endereço são confirmados pela equipe antes da contratação.</p>
  </section>;
}
