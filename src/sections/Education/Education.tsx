import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const educationItems = t("education.items", { returnObjects: true }) as {
    title: string;
    degree?: string;
    period: string;
    icon: string;
    alt: string;
    isLink: boolean;
    href?: string;
  }[];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{t("education.title")}</h2>
      <ul className="mt-2 space-y-4 text-zinc-700 list-none">
        {educationItems.map((obj, index) => (
          <li key={index}>
            <div className="flex items-center gap-2">
              <img className="w-7 h-7" src={obj.icon} alt={obj.alt} />
              {obj.isLink && obj.href ? (
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
            {obj.degree && (
              <p className="ml-9 text-sm text-zinc-600">{obj.degree}</p>
            )}
            <p className="ml-9 text-zinc-600">{obj.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
