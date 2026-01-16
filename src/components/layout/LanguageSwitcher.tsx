"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const langs = ["en", "pt", "es"];

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2">
      {langs.map((lang) => (
        <button
          key={lang}
          onClick={handleChange(lang)}
          className={`px-2 py-1 uppercase text-sm ${
            currentLocale === lang
              ? "font-bold border-b-2 border-teal-500"
              : "opacity-50"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
