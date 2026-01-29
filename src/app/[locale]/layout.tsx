import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../../components/layout/Navbar";
import type { Metadata } from "next";
import "../globals.css";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: "Danilo - Desenvolvedor Full Stack",
};

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
      <body className="flex flex-col min-h-screen w-full bg-black selection:text-teal-50 selection:bg-teal-600 text-white overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="w-48 h-48 rounded-full absolute top-10 left-0 pointer-events-none animate-pulse bg-teal-700 filter blur-[100px]"></div>
          <div className="w-48 h-48 rounded-full absolute bottom-10 right-0 pointer-events-none animate-pulse bg-teal-700 filter blur-[100px]"></div>
          <Navbar />
          <main className="relative flex flex-1 max-w-7xl mx-auto p-10">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
