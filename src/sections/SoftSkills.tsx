import { useTranslation } from "react-i18next";

export default function SoftSkills() {
  const { t } = useTranslation();
  const items = t("softSkills.items", { returnObjects: true }) as string[];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{t("softSkills.title")}</h2>
      <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
