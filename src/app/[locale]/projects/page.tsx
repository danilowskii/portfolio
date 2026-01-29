import { Button } from "@/components/ui/Button";
import { FaGithub } from "react-icons/fa";
import screen from "@/assets/images/screen.png";
import Image from "next/image";
import medNote from "@/assets/images/med-note.png";
import ecommFlow from "@/assets/images/ecomm-flow.png";
import ecommClips from "@/assets/images/ecomm-clips.png";
import lpAdv from "@/assets/images/lp-adv.png";

export default function Projects() {
  const projectsList = [
    {
      name: "MedNote - Médico Copilot",
      desc: "Projeto utilizando Node.js, Typescript, React, MongoDB, WebSocket e implementação com IA (Groq e Llama) para auxiliar médicos em consultas + Chat Assistente de IA",
      deploy: "https://frontend-mednote-production.up.railway.app/",
      github: "https://github.com/danilowskii/med-note-ia",
      imageSrc: medNote,
      imgAlt: "project screenshot",
    },
    {
      name: "LP Ecomm Clips",
      desc: "Landing page desenvolvida em React + TailwindCSS, foco em performance, SEO e conversão. Pensada para tráfego pago, carregamento rápido, boas métricas de PageSpeed e mobile-first",
      deploy: "https://ecommclips.com.br/",
      github: "https://github.com/danilowskii/ecomm-clips",
      imageSrc: ecommClips,
      imgAlt: "project screenshot",
    },
    {
      name: "LP Ecomm Flow",
      desc: "Landing page desenvolvida em React + TailwindCSS, utilizei React Bits para composição de componentes modernos e integração do Meta Pixel para rastreio de eventos e otimização de tráfego",
      deploy: "https://ecommflow.com.br/",
      github: "https://github.com/danilowskii/landingpage-ecommflow",
      imageSrc: ecommFlow,
      imgAlt: "project screenshot",
    },
    {
      name: "LP Advocacia",
      desc: `LP utilizando uma camada central de configuração global (single source of truth), 
      onde textos, links e variações visuais são definidos em um único ponto e distribuídos via props`,
      deploy: "https://landingpage-adv.vercel.app/",
      github: "https://github.com/danilowskii/landingpage-adv",
      imageSrc: lpAdv,
      imgAlt: "project screenshot",
    },
  ];
  return (
    <section>
      <div className="flex flex-col mx-auto justify-center">
        <h2 className="font-bold font-serif text-lg mb-6">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {projectsList.map((project, idx) => (
            <div
              className="group relative border-2 border-teal-400 bg-teal-200/15 hover:bg-white/20 transition-colors ease-in-out duration-200 p-6 rounded-md max-w-80 w-full h-64 hover:shadow-[0_0_20px_rgba(128,203,196,0.3)] overflow-hidden"
              key={idx}
            >
              <div className="z-10 font-bold font-lg font-serif gap-2 flex flex-col">
                <span className="text-teal-300">
                  {project.name.toUpperCase()}
                </span>
                <span
                  className="text-sm font-light opacity-100 pointer-events-none
                  group-hover:opacity-0 transition-all duration-300
                  ease-out translate-y-0 group-hover:-translate-y-4 delay-75
                  "
                >
                  {project.desc}
                </span>
              </div>

              <Image
                src={project.imageSrc}
                alt={project.imgAlt}
                fill
                className="object-cover -z-10 delay-100 pointer-events-none opacity-20 sm:group-hover:opacity-100 md:-translate-y-4 group-hover:translate-y-0 md:opacity-0 transition-all duration-300 ease-out"
                quality={75}
                loading="lazy"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-1 gap-2 w-full px-4">
                <Button
                  href={project.deploy}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block w-full mx-auto delay-100
                  
                  opacity-100 translate-y-0 pointer-events-auto
                  
                  md:opacity-0 md:translate-y-4 md:pointer-events-none
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:pointer-events-auto
                  transition-all duration-300 ease-out
                  "
                >
                  Ver projeto
                </Button>

                <Button
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-0 w-16 flex justify-center 
                  
                  opacity-100 translate-y-0 pointer-events-auto
                  
                  md:opacity-0 md:translate-y-4 md:pointer-events-none
                  group-hover:opacity-100 
                  group-hover:translate-y-0 
                  group-hover:pointer-events-auto delay-100 
                  transition-all duration-300 ease-out"
                >
                  <FaGithub className="text-xl" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
