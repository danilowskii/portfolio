import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";


interface LocaleLayoutProps {
  children: ReactNode,
  params: Promise<{locale: string}>,
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {

  const {locale} = await params

  let messages;
  try {
    messages = (await import (`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="">
        <NextIntlClientProvider locale={locale} messages={messages}>
        <main>{children}</main>
     </NextIntlClientProvider>
      </body>
    </html>
  );
}
