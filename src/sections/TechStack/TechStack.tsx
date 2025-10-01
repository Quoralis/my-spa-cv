import { useTranslation } from "react-i18next";
import { techStack } from "./techStackData";

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{t("skills.title")}</h2>
      <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
        {techStack.map((elem) => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
}
