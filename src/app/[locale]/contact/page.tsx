"use client";

import { useState, ChangeEvent } from "react";
import { IconType } from "react-icons";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface Social {
  name: string;
  icon: IconType;
  url: string;
}

interface Form {
  name: string;
  selection: string;
  content: string;
}

const initialForm: Form = {
  name: "",
  selection: "",
  content: "",
};

export default function Contact() {
  const whastappNumber = "5581991584695";
  const [form, setForm] = useState<Form>(initialForm);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, selection, content } = form;

    const message =
      `Olá, Danilo, vim do seu portfólio!%0A%0A` +
      `*Nome:* ${name}%0A` +
      `*Assunto:* ${selection}%0A` +
      `*Mensagem:* ${content}`;

    const whatsappUrl = `https://wa.me/${whastappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setForm(initialForm);
  };

  const socials: Social[] = [
    {
      name: "Linkedin",
      icon: SiLinkedin,
      url: "https://www.linkedin.com/in/paivadanilo/",
    },
    { name: "Github", icon: SiGithub, url: "https://github.com/danilowskii" },
    {
      name: "Whatsapp",
      icon: SiWhatsapp,
      url: "https://wa.me/55819XXXXXXXX?text=Olá%2C%20Danilo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20oferecer%20uma%20proposta!",
    },
  ];
  return (
    <section className="max-w-5xl">
      <div className="flex flex-col md:flex-row gap-10 md:w-xl md:justify-between">
        <div className=" flex flex-col gap-6">
          <h2 className=" font-bold self-start font-serif text-lg">
            Conecte-se comigo!
          </h2>
          <div className="flex flex-col gap-8">
            {socials.map((social) => (
              <div key={social.name} className="flex items-center">
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex flex-row gap-4"
                >
                  <span
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 opacity-0
                  group-hover:opacity-100 group-hover:scale-[1.70] rounded-full
                  border-red-500-300 border ease-out delay-100 transition-transform
                group-hover:border-teal-500 group-hover:animate-pulse"
                  ></span>
                  <social.icon
                    size={40}
                    className="group-hover:animate-pulse
                 transition-colors
                duration-300 ease-out 
                text-teal-100 group-hover:text-teal-500"
                  />
                  <span
                    className="flex text-center items-center
                  transition-colors group-hover:animate-pulse
                  duration-300 ease-out font-semibold
                text-teal-100 group-hover:text-teal-500"
                  >
                    {social.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            className="p-6 border border-teal-200 rounded-lg
                    shadow-[0_0_20px_rgba(20,184,166,0.8)] bg-teal-200/15 "
          >
            <h2 className="mb-4 font-bold font-serif ">
              Mensagem personalizada
            </h2>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
                placeholder="Seu nome"
                className="m-0 w-full px-4 py-2 
                border border-gray-300 rounded-lg
                text-white outline-none
                focus:border-teal-500 bg-transparent
                focus:ring-4 focus:ring-teal-500/20 
                caret-teal-500 transition-all"
              />

              <select
                name="selection"
                value={form.selection}
                onChange={handleChange}
                id="select-option"
                className="m-0 w-full px-4 py-2 
                 border border-gray-300 rounded-lg
                text-white outline-none
                focus:border-teal-500 bg-transparent
                focus:ring-4 focus:ring-teal-500/20 
                caret-teal-500 transition-all"
              >
                <option value="" className="bg-teal-700">
                  Selecionar
                </option>
                <option value="Contratação" className="bg-teal-700">
                  Contratação
                </option>
                <option value="Orçamento de Projeto" className="bg-teal-700">
                  Orçamento
                </option>
              </select>
              <textarea
                value={form.content}
                name="content"
                rows={5}
                onChange={handleChange}
                placeholder="Espaço para desenvolver melhor seu interesse..."
                className="m-0 w-full px-4 py-2 
                border border-gray-300 rounded-lg
                text-white outline-none
                focus:border-teal-500 bg-transparent
                focus:ring-4 focus:ring-teal-500/20 
                caret-teal-500 transition-all"
              />
              <Button
                onClick={handleSubmit}
                className="w-full py-3 px-4 bg-teal-500 transition-all hover:shadow-[0_0_20px_rgba(128,203,196,1)]"
              >
                {" "}
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
