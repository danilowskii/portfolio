import {
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiHtml5,
  SiExpress,
  SiReact,
  SiFigma,
  SiPython,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";
import { IconType } from "react-icons";
import { HiOutlineLanguage } from "react-icons/hi2";

interface Stack {
  name: string;
  color: string;
  icon: IconType;
}

export default function About() {
  const stacks: Stack[] = [
    { name: "JavaScript", color: "text-yellow-400", icon: SiJavascript },
    { name: "TypeScript", color: "text-blue-500", icon: SiTypescript },
    { name: "Node.js", color: "text-green-500", icon: SiNodedotjs },
    { name: "Next.js", color: "text-zinc-100", icon: SiNextdotjs },
    { name: "HTML5", color: "text-orange-600", icon: SiHtml5 },
    { name: "React", color: "text-blue-500", icon: SiReact },
    { name: "Express", color: "text-zin-200", icon: SiExpress },
    { name: "CSS3", color: "text-blue-600", icon: SiCss3 },
    { name: "MongoDB", color: "text-green-600", icon: SiMongodb },
    { name: "MySQL", color: "text-sky-600", icon: SiMysql },
    { name: "Figma", color: "text-red-500", icon: SiFigma },
    { name: "Python", color: "text-blue-500", icon: SiPython },
  ];
  const aboutMe = {
    title: "Sobre mim",
    description: {
      yearsOfExperience: `2 anos de
        experiência no desenvolvimento de aplicações modernas, atuando na
        integração entre frontend e backend, criação de APIs REST e uso de
        bancos de dados SQL e NoSQL.`,
      achievments: [
        `Otimizei inserts em banco de dados relacional (SQL), com redução de ~30% no tempo de escrita ao migrar de UUID v4 para UUID v7, melhorando a eficiência dos índices B-tree`,
        `Otimizei SEO técnico em landing page, elevando o PageSpeed de 40% para 90%, por meio de otimização de imagens, lazy loading e melhorias de performance`,
      ],
      mainStack: ["TypeScript", "Next.js/React", "Node.js"],
      languages: { english: "Inglês - B1", spanish: "Espanhol - C2" },
      focus: "Foco em performance, código limpo e boas práticas.",
    },
  };
  return (
    <div className="max-w-5xl flex flex-col md:flex-row gap-4">
      <section className="w-ful md:w-1/2">
        <h2 className="text-lg mb-4 font-bold font-serif">Sobre Mim</h2>
        <div className="flex gap-3 flex-col font-medium">
          <h3>{aboutMe.description.yearsOfExperience}</h3>
          <h3 className="font-bold my-3">
            {aboutMe.description.mainStack.join(" • ")}
          </h3>
          <div className="relative bg-teal-200/15 w-fit p-3 pt-5 border border-teal-200 font-semibold rounded-lg">
            <HiOutlineLanguage
              size={26}
              className="
              absolute bg-black rounded-full
               p-1 -top-2 -left-2 z-10 text-teal-100
               pointer-events-none"
            />
            <span
              className="absolute bg-teal-500/80 w-8 h-8 rounded-full
                -top-3 -left-3 pointer-events-none
                z-0 animate-pulse filter blur-[10px]"
            ></span>
            <h3>{aboutMe.description.languages.english}</h3>
            <h3>{aboutMe.description.languages.spanish}</h3>
          </div>
          <h3 className="my-3 font-semibold font-serif ">
            {aboutMe.description.focus}
          </h3>
        </div>
      </section>
      <section className="border border-teal-300 bg-teal-200/15 w-full md:w-1/2 h-fit rounded-md p-4">
        <h2 className="text-xl font-bold text-center font-serif my-4">
          Stacks
        </h2>
        <div className="flex gap-4 flex-wrap justify-center ">
          {stacks.map((stack) => (
            <div key={stack.name} className="relative">
              <div className="group flex justify-center">
                <span className="absolute pointer-events-none text-xs font-light -top-9 opacity-0 group-hover:opacity-100 transition-all ease-out duration-300 delay-100 bg-black p-2 rounded-lg">
                  {stack.name}
                </span>
                <stack.icon
                  size={60}
                  className={`${stack.color} m-3 hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-in-out`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
