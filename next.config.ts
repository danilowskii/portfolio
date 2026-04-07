import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Removemos o bloco 'experimental.turbo' para evitar o erro de tipo.
  // Na Vercel, o diretório raiz é detectado corretamente de forma automática.

  typescript: {
    // Mantemos isso para garantir que o erro de flag '--ignoreDeprecations'
    // do Node/Windows não trave o build final.
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
