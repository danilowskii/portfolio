"use client";

import { Link, usePathname } from "../../lib/navigation";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const menuItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("projects"), path: "/projects" },
    { name: t("contact"), path: "/contact" },
  ];

  return (
    <nav className="flex p-5 w-full justify-center items-center text-lg font-serif">
      <div className="flex flex-row gap-4 justify-center items-center">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`group relative transition-colors hover:text-teal-500 ${
                isActive ? "text-teal-500 font-semibold" : "text-gray-300"
              }`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 transition-all ease-out w-0 h-px group-hover:w-full bg-teal-500"></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
