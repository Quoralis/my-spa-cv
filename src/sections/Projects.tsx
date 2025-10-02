import { useTranslation } from "react-i18next";

const projectLinks: Record<string, string> = {
  FunChat: "https://quoralis-fun-chat.netlify.app/",
  "Async Race": "https://quoralis-async-race.netlify.app/",
  "Decision Making Tool": "https://quoralis-decison-making-tool.netlify.app/",
  "Store eCommerceTools":
    "https://quoralis-team-ecommerce-application.netlify.app/",
};

export default function Projects() {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as string[];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{t("projects.title")}</h2>
      <div className="mt-3 space-y-2 text-zinc-700">
        {items.map((item, key) => (
          <p key={key}>{item}</p>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-md font-semibold text-zinc-800 mb-3 border-b border-zinc-200 pb-1">
          {t("projects.subtitle") || "Projects"}
        </h3>
        <ul className="space-y-2">
          {Object.entries(projectLinks).map(([name, url]) => (
            <li
              key={name}
              className="flex items-center justify-between bg-zinc-50 hover:bg-zinc-100 transition-colors rounded-lg px-4 py-2 shadow-sm"
            >
              <span className="font-medium text-zinc-700">{name}</span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-yellow-500 font-medium transition-colors"
              >
                {t("projects.view") || "Открыть"}
                <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
