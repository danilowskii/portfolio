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
    <nav className="flex p-8 justify-around  items-center text-lg font-serif">
      <h1 className="opacity-0">DP</h1>
      <div className="flex flex-row gap-6">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors hover:text-teal-500 ${
                isActive ? "text-teal-600 font-semibold" : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <h1 className="opacity-0">change lang</h1>
    </nav>
  );
}
