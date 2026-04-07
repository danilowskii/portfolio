import {
  Code2,
  Database,
  MailIcon,
  FileUser,
  Bot,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const projects = [
    {
      title: "PagFlow",
      status: "Em Desenvolvimento",
      subtitle:
        "Infraestrutura de Pagamentos API-First & Segurança Transacional",
      description: (
        <>
          Uma plataforma robusta para transações de produtos digitais que
          prioriza a consistência de dados. Implementa conceitos avançados como{" "}
          <strong>Idempotency-Key</strong> para evitar cobranças duplicadas e
          validação rigorosa de webhooks via <strong>HMAC</strong>, garantindo
          um ecossistema de checkout seguro e auditável.
        </>
      ),
      tags: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Knex.js",
        "Next.js",
        "Zod",
        "Jest",
        "Docker",
      ],
      link: "https://github.com/danilowskii/pagflow-platform",
    },

    {
      title: "W-Core",
      status: "Finalizado",
      subtitle: "Motor de Estado de Telemetria Industrial em Tempo Real",
      description: (
        <div className="space-y-4">
          <p>
            Sistema de missão crítica focado na ingestão e processamento de
            milhares de eventos de sensores industriais. A arquitetura elimina
            gargalos de escrita utilizando o{" "}
            <strong>Write-Behind Pattern</strong>: os dados são absorvidos
            instantaneamente pelo <strong>Erlang ETS</strong> e persistidos de
            forma assíncrona no SQLite. A interface permite monitoramento em
            tempo real com latência de microssegundos, garantindo que o operador
            veja falhas críticas no exato momento em que ocorrem.
          </p>
        </div>
      ),
      tags: ["Elixir", "OTP", "Phoenix LiveView", "ETS", "SQLite", "Docker"],
      link: "https://github.com/danilowskii/realtime_state_engine",
    },
    {
      title: "MedNote AI",
      status: "Finalizado",
      subtitle: "Análise Clínica Inteligente via Transcrição em Tempo Real",
      description: (
        <>
          O MedNote utiliza Groq para transcrição instantânea e IA para auxiliar
          médicos na organização de relatórios clínicos, reduzindo o tempo
          administrativo em até 40%. Além de contar com um chat interativo com
          assistente de IA que responde dúvidas com contexto de consultas.
        </>
      ),
      tags: [
        "Groq AI",
        "React",
        "Websocket",
        "Node.js",
        "MongoDB",
        "TypeScript",
      ],
      link: "https://github.com/danilowskii/med-note-ia",
    },
  ];
  return (
    <div className="bg-transparent text-white selection:bg-teal-600 overflow-x-hidden">
      {/* Glow Backgrounds */}
      <div className="fixed top-10 left-0 w-72 h-72 bg-teal-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-10 right-0 w-72 h-72 bg-teal-900/20 blur-[120px] pointer-events-none" />
      {/*Navbar */}
      <section className="flex fixed flex-col z-50 w-full max-w-5xl backdrop-blur-[10px]">
        <div className="flex flex-row justify-between px-4 py-4">
          <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500">
            <Code2 />
          </div>
          <a
            href="/DANILO PAIVA - CV.pdf"
            download={true}
            className="w-fit h-10 font-bold text-sm bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 p-4 gap-2"
          >
            <FileUser /> Currículo
          </a>
        </div>
        <div className="w-full h-px bg-teal-400"></div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16 max-w-4xl text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm mb-6">
          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse" />
          Aberto a oportunidades
        </div>

        <Image
          src="/FOTO-PROFISSIONAL.webp"
          width={200}
          height={200}
          alt="Picture of the author"
          className="mx-auto object-cover w-60 h-60 rounded-full my-6 border border-teal-300/20"
        />

        <h2 className="text-xl text-gray-400 mb-2">Danilo Paiva Tiotonho</h2>
        <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-8">
          Desenvolvedor Full Stack
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Entrego resultado e código que outros desenvolvedores possam manter.
          Construo soluções escaláveis com foco em performance e experiência do
          usuário.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-teal-600 hover:bg-teal-500 rounded-lg font-bold transition-all shadow-lg shadow-teal-900/20"
          >
            Agendar Reunião
          </a>
          <a
            href="https://wa.me/5581991584695"
            className="px-8 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-lg font-bold transition-all flex items-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp
          </a>
        </div>
      </section>

      {/* Especialidades */}
      <section className="bg-zinc-950/50 py-20 border-y border-zinc-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="w-8 h-0.5 bg-teal-500 mr-4" /> Especialidades
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-black hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 mb-4">
                <Code2 />
              </div>
              <h3 className="text-xl font-bold mb-2">Fullstack Development</h3>
              <p className="text-gray-400 text-sm">
                Aplicações end-to-end com React e Node.js focadas em performance
                e escalabilidade.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-black hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 mb-4">
                <Database />
              </div>
              <h3 className="text-xl font-bold mb-2">Arquitetura de Dados</h3>
              <p className="text-gray-400 text-sm">
                Modelagem eficiente em bancos SQL (MySQL, PostgreSQL, SQLite) e
                NoSQL (MongoDB).
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-black hover:border-teal-500/50 transition-colors group">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-100">
                IA & Integrações
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Integração de LLMs (OpenAI, Groq), arquiteturas RAG e automação
                de fluxos via APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque (Foco no MedNote AI) */}
      <section className="py-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">Projetos & Pesquisa</h2>

          <div className="space-y-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] uppercase tracking-widest text-teal-500 font-bold bg-teal-500/10 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-teal-400 font-medium mb-4 italic">
                  {project.subtitle}
                </p>

                <div className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-zinc-700 px-2 py-1 rounded bg-zinc-800 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 font-bold hover:underline inline-flex items-center gap-2"
                >
                  Ver detalhes do projeto →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Estudo Atual */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 flex items-center">
            <span className="w-8 h-0.5 bg-teal-500 mr-4" /> Atualmente Estudando
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Machine Learning */}
            <div className="group p-5 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:border-teal-500/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)] transition-all" />
                <span className="font-medium text-gray-200">
                  Machine Learning
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-5">
                Explorando modelos preditivos e processamento de dados para
                soluções inteligentes.
              </p>
            </div>

            {/* Redes Neurais */}
            <div className="group p-5 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:border-teal-500/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)] transition-all" />
                <span className="font-medium text-gray-200">Redes Neurais</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-5">
                Arquiteturas de Deep Learning e sua aplicação em visão
                computacional e NLP.
              </p>
            </div>

            {/* Elixir */}
            <div className="group p-5 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:border-teal-500/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)] transition-all" />
                <span className="font-medium text-gray-200">Elixir & OTP</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-5">
                Construindo sistemas escaláveis e tolerantes a falhas no
                ecossistema BEAM.
              </p>
            </div>

            {/* Programação Funcional */}
            <div className="group p-5 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:border-teal-500/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)] transition-all" />
                <span className="font-medium text-gray-200">
                  Programação Funcional
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-5">
                Imutabilidade, funções puras e concorrência para um código mais
                limpo e previsível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Acadêmico / Diferencial */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <GraduationCap className="text-teal-500 w-8 h-8" />
            <h2 className="text-3xl font-bold">Formação & Diferenciais</h2>
          </div>

          <div className="grid gap-4">
            <div className="p-6 border-l-2 border-teal-600 bg-zinc-900/20">
              <h3 className="font-bold text-lg">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-gray-400 italic mb-2">
                4º período — Faculdade Anhanguera
              </p>
            </div>
            <div className="p-6 border-l-2 border-teal-600 bg-zinc-900/20">
              <h3 className="font-bold text-lg">Desenvolvedor Full Stack</h3>
              <p className="text-gray-400 italic mb-2">Formação DevClub</p>
            </div>

            <div className="p-6 border-l-2 border-teal-600 bg-zinc-900/20">
              <h3 className="font-bold text-lg">
                MongoDB Overview: Core Concepts and Architecture
              </h3>
              <p className="text-gray-400 italic mb-2">MongoDB University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer id="contact" className="py-20 border-t border-zinc-900">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vamos elevar o nível do seu software?
          </h2>
          <p className="text-gray-400 mb-10">
            Estou aberto a oportunidades e parcerias estratégicas.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://linkedin.com/in/paivadanilo/"
              target="_blank"
              className="text-gray-400 hover:text-teal-500 transition-colors flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/danilowskii"
              target="_blank"
              className="text-gray-400 hover:text-teal-500 transition-colors flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=danilopaivatiotonho@gmail.com&su=Vim%20através%20do%20site"
              target="_blank"
              className="text-gray-400 hover:text-teal-500 transition-colors flex items-center gap-2"
            >
              <MailIcon className="w-8 h-8 text-gray-400 hover:text-teal-500 transition-colors flex items-center gap-2" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
