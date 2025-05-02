import Agenda from "./components/agenda";
import Artigos from "./components/artigos";
import Diretoria from "./components/diretoria";
import Hero from "./components/hero";
import Noticias from "./components/noticias";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
     <main>
      <Hero/>
      <Noticias/>
      <Diretoria/>
      <Artigos/>
      <Agenda/>
     </main>
    </div>
  );
}
