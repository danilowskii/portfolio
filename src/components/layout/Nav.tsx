"use client";

import path from "path";
import { Link, usePathname } from "../../lib/navigation";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const menuItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "about" },
    { name: t("projects"), path: "projects" },
    { name: t("contact"), path: "contact" },
  ];

  return (
    <nav>
      {menuItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.path}
            href={item.path}
            className={`transition-colors hover:text-teal-500 ${
              isActive ? "text-teal-600 font-semibold" : "text-gray-600"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
