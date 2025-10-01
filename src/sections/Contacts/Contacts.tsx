import { useTranslation } from "react-i18next";
import { type Contacts, contacts } from "./contactsData";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{t("contacts.title")}</h2>
      <ul>
        {contacts.map((obj: Contacts) => (
          <li key={obj.id} className="flex items-center space-x-2">
            <img src={obj.icon} alt={obj.alt} className="w-5 h-5" />
            {obj.isLink ? (
              <a
                className="links"
                href={obj.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {obj.value}
              </a>
            ) : (
              <span>{obj.value || t(obj.valueKey ? obj.valueKey : "")}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
