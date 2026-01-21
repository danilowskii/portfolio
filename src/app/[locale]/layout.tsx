import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../../components/layout/Navbar";

import "../globals.css";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-black selection:text-teal-50 selection:bg-teal-600 text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex flex-1 max-w-7xl mx-auto">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
