import { useTranslation } from "react-i18next";
import { education } from "./educationData";

export default function Education() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{t("education.title")}</h2>
      <ul className="mt-2 space-y-4 text-zinc-700 list-none">
        {education.map((obj) => (
          <li key={obj.id}>
            <div className="flex items-center gap-2">
              <img className="w-7 h-7" src={obj.icon} alt={obj.alt} />
              {obj.isLink ? (
                <a
                  href={obj.href}
                  className="font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {obj.title}
                </a>
              ) : (
                <span className="font-semibold">{obj.title}</span>
              )}
            </div>
            <ul className="ml-9 list-disc space-y-1 text-zinc-600">
              {obj.period.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
