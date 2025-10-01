import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "en" ? "ru" : "en";

  return (
    <header className="w-full bg-neutral-800 text-white p-6 rounded-xl">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <img
            className="mx-auto block max-h-40 max-w-40 rounded-full object-cover sm:mx-0 sm:shrink-0"
            src="/avatar.png"
            alt="avatar"
          />
          <div>
            <h1 className="text-4xl font-semibold text-white">
              Stanislav Tsibulskii
            </h1>
            <p className="font-medium text-gray-300">Front-End Web Developer</p>
          </div>
        </div>
        <button
          className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition"
          onClick={() => i18n.changeLanguage(currentLang)}
        >
          {currentLang === "en" ? "RU" : "EN"}
        </button>
      </div>
    </header>
  );
}
