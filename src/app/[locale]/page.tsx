import { useTranslations } from "next-intl"

export default function HomePage() {
  
  const t = useTranslations("Index")

  return (
    <div>
      <h1 className="">{t("welcome")}</h1>
      
    </div>
  );
}
