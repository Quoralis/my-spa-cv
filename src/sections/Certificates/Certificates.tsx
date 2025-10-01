import { certificatesData } from "./certificatesData";

export default function Certificates() {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">{certificatesData.title}</h2>

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
