import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pt"]; 

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // Validação do idioma
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale as string,
    
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});