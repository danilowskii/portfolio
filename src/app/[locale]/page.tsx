import { useTranslations } from "next-intl"
import Image from "next/image"
import "../globals.css"
import {PrimaryButton} from "../../components/ui/Button"

export default function HomePage() {
  
  const techs = [
    "Typescript",
    "React", "Node.js", "Express", "MongoDB", "Next.js", "TailwindCSS",
    "Prisma", "MySQL", "Git", "HTML", "Linux", "Javascript", "CSS", "Figma"
  ]
  
  const t = useTranslations("Home")

  return (
    <div className="font-serif ">
      <div className="w-48 h-48 rounded-full absolute top-10 left-0 pointer-events-none animate-pulse bg-teal-700 filter blur-[100px]"></div>
      <div className="text-3xl font-bold flex gap-6 max-w-7xl flex-col text-center">
      <div className="relative group rounded-full w-72 h-72 overflow-hidden transition-colors ease-in-out duration-300 hover:shadow-[0_0_20px_rgba(8,145,178,0.9)] transition-shadow mt-6 mx-auto">
      <Image src="/profile.jpg" alt="Foto Danilo" width={288} height={288} className="absolute -top-10 group-hover:scale-105 transition-all ease-out duration-300" />
      </div>

<div>
<h2 className="text-lg">Danilo Paiva</h2>
      <h1 className="bg-linear-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">{t("role")}</h1>
      </div>
      <div className="overflow-hidden w-72 mx-auto carousel-mask">
      <div className="flex flex-row text-sm carousel">
      {
        [...techs, ...techs].map((tech, idx) => (
          <span key={idx} className="shrink-0 px-4 py-1 bg-zinc-800 rounded-full">{tech}</span>
        ))
      }
      </div>
      </div>
      <a href="/DANILO PAIVA - CV.pdf" className="w-64 rounded-md mx-auto" download >
      <PrimaryButton className="w-full relative bg-linear-to-r from-teal-500 via-teal-600 to-teal-600">Baixar CV</PrimaryButton>
      </a>
      </div>
    </div>
  );
}
