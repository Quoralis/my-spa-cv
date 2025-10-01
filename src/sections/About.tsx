import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold"> {t("about.title")}</h2>
      <p className="mt-2 text-gray-700">{t("about.text")}</p>
    </div>
  );
}
