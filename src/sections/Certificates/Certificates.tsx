import { certificatesData } from "./certificatesData";
import { useTranslation } from "react-i18next";

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{t("certificates")}</h2>

      <div className="mt-4 grid grid-cols-2 gap-6">
        {certificatesData.url.map((url, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index === 2 ? "col-span-2" : ""
            }`}
          >
            <a href={url} rel="noopener noreferrer" className="links">
              <img
                src={certificatesData.urlPreview[index]}
                className="w-full"
                height="200"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
