import Diretoria from "./components/diretoria";
import Hero from "./components/hero";
import Noticias from "./components/noticias";

export default function Home() {
  return (
    <div>
     <main>
      <Hero/>
      <Noticias/>
      <Diretoria/>
     </main>
    </div>
  );
}
