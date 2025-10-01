import Contacts from "../sections/Contacts/Contacts";
import TechStack from "../sections/TechStack/TechStack";
import Education from "../sections/Education/Education";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Certificates from "../sections/Certificates/Certificates";

export default function Main() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
      <aside className="bg-stone-400 md:col-span-1 space-y-3 p-4 rounded-xl shadow">
        <Contacts />
        <TechStack />
        <Education />
      </aside>

      <section className="md:col-span-2 space-y-6 p-4 rounded-xl">
        <About />
        <Projects />
        <Certificates />
      </section>
    </main>
  );
}
