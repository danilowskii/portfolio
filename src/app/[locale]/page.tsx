import { useTranslations } from "next-intl";
import Image from "next/image";
import "../globals.css";
import { Button } from "@/components/ui/Button";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  const techs = [
    "Typescript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "TailwindCSS",
    "Prisma",
    "MySQL",
    "Git",
    "HTML",
    "Linux",
    "Javascript",
    "CSS",
    "Figma",
  ];

  const t = useTranslations("Home");

  return (
    <div className="font-serif ">
      <div className="text-3xl font-bold flex gap-6 max-w-7xl flex-col text-center">
        <div className="relative group rounded-full w-72 h-72 overflow-hidden transition-colors ease-in-out duration-300 hover:shadow-[0_0_20px_rgba(8,145,178,0.9)] transition-shadow mt-6 mx-auto">
          <Image
            src="/profile.jpg"
            alt="Foto Danilo"
            width={288}
            height={288}
            className="absolute -top-10 group-hover:scale-105 transition-all ease-out duration-300"
          />
        </div>

        <div>
          <h2 className="text-lg">Danilo Paiva</h2>
          <h1 className="bg-linear-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">
            {t("role")}
          </h1>
        </div>
        <div className="overflow-hidden w-72 mx-auto carousel-mask">
          <div className="flex flex-row text-sm carousel">
            {[...techs, ...techs].map((tech, idx) => (
              <span
                key={idx}
                className="shrink-0 px-4 py-1 bg-zinc-800 border border-teal-200/50 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Button
          download
          href="/DANILO PAIVA - CV PT.pdf"
          className="relative bg-linear-to-r from-teal-500 via-teal-600 to-teal-600 w-64 rounded-md mx-auto transition-all hover:shadow-[0_0_20px_rgba(128,203,196,1)]"
        >
          Baixar CV
        </Button>
      </div>
      <div className="flex flex-row gap-6 justify-center text-2xl mt-10">
        <a
          href="https://www.linkedin.com/in/paivadanilo/"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-teal-500" />
        </a>
        <a href="https://github.com/danilowskii" rel="noopener noreferrer">
          <FaGithub className="hover:text-teal-500" />
        </a>
        <a
          href="https://wa.me/5581991584695?text=Olá,%20Danilo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20com%20você%20sobre%20uma%20oportunidade."
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="hover:text-teal-500" />
        </a>
      </div>
    </div>
  );
}
