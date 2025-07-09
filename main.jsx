import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import { motion } from "https://cdn.skypack.dev/framer-motion";

const slides = [
  {
    title: "Deep Tech Lab: Conectando Ciência e Inovação",
    content: `Laboratório físico e digital que integra equipes científicas, sensores, plataformas de IA e modelagem. Transformamos ciência em soluções com alto potencial de impacto.`
  },
  {
    title: "Projeto piloto: BioCode",
    content: `Bioinsumos inteligentes com rastreabilidade e sensores embarcados. Apoio à agroecologia e base para novas linhas de P&D em bioeconomia.`
  },
  {
    title: "Escalabilidade Modular",
    content: `Aplicável a temas como alimentos, saúde, defesa e meio ambiente. Hardware + software + IA embarcada replicáveis em múltiplas áreas.`
  },
  {
    title: "Conectividade com Impacto",
    content: `Sensores em equipamentos e campo (drones, estações, espectros) com IA embarcada. Dados contínuos e interoperabilidade internacional.`
  },
  {
    title: "Pesquisa Inteligente",
    content: `Customização de baixo custo, reutilização de sistemas, integração com dados existentes (Excel, Supabase, ArcGIS) e equipes multidisciplinares.`
  },
  {
    title: "Parcerias Internacionais",
    content: `Colaboração com Israel e outras nações: testes cruzados, missões, co-desenvolvimento e programas binacionais (FINEP-Israel, EMBRAPII, BIRD).`
  },
  {
    title: "Estratégia de P&D com Impacto",
    content: `Integra hardware customizado, IA embarcada e plataformas digitais. Geração de valor real com validação internacional e serviços integrados.`
  },
  {
    title: "Modelos de Oferta",
    content: `Spin-offs do Deep Tech Lab, parcerias com universidades e startups israelenses, projetos de fomento binacional.`
  }
];

function UnifiedPresentation() {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0a0f3d] via-[#1f1c52] to-[#40318d] text-white">
      <aside className="w-64 bg-[#0a0f3d] p-6 flex flex-col items-start gap-4 border-r border-indigo-700">
        <img src="logo-dark.png" alt="Deep Tech Lab Logo" className="w-40 mb-4" />
        {slides.map((slide, i) => (
          <button
            key={i}
            className={\`text-left w-full px-2 py-1 rounded \${i === index ? "bg-indigo-700 font-bold" : "hover:bg-indigo-800"}\`}
            onClick={() => setIndex(i)}
          >
            {slide.title}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-10 flex flex-col items-center justify-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl font-bold mb-6">{slides[index].title}</h1>
          <p className="text-lg leading-relaxed whitespace-pre-line">{slides[index].content}</p>
        </motion.div>
      </main>
    </div>
  );
}

ReactDOM.render(<UnifiedPresentation />, document.getElementById("root"));
