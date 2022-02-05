import "./App.css";
import Filmovi from "./components/Filmovi";
import NavigationBar from "./components/NavigationBar";
import Montevideo from "./img/Montevideo-Bog-te-video.jpg";
import Profesionalac from "./img/Profesionalac.jpg";
import Maratonci from "./img/Maratonci.jpg";
import PoslednjiKrugUMonci from "./img/Poslednji_Krug_U_Monci.jpg";
import KadPorastemBicuKengur from "./img/Kad_porastem_bicu_kengur.jpg";
import LepaSelaLepoGore from "./img/LepaSelaLepoGore.jpg";
import MrtavLadan from "./img/Mrtav_ladan.jpg";
import BalkanskiSpijun from "./img/Balkanski_spijun.jpg";
import Otpisani from "./img/Otpisani.jpg";
import CrniGruja from "./img/Crni_Gruja_i_kamen_mudrosti.jpg";
import SvetiGeorgije from "./img/SvetiGeorgije.jpg";
import UbistvoSPredumisljajem from "./img/UbistvoSPredumisljajem.jpg";
import { useState } from "react";
import Pregled from "./components/Pregled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dugme from "./components/Dugme";
import Pretrazi from "./components/Pretrazi";
import Forma from "./components/Forma";
import FormaPrijava from "./components/FormaPrijava";
import FormaRecenzija from "./components/FormaRecenzija";
import FormaRegistracija from "./components/FormaRegistracija";


function App() {
  const [pregledFilmovi, setPregledFilmovi] = useState([]);
  const [pregledFilmovi1, setPregledFilmovi1] = useState([]);
  const [filmovi] = useState([
    {
      id: 1,
      pregled: 0,
      naziv: "Montevideo, Bog te video!",
      opis: "2010 | avanturistički",
      slika: Montevideo,
      ocena: "8.2",
      opisFilma: "Priča o fudbalskoj reprezentaciji Srbije koja odlučuje da sledi san koji ih vodi na prvo svetsko prvenstvo u fudbalu u Montevideu u Urugvaju 1930. godine. San koji im omogućava da postanu prave zvezde i žive legende."
    },
    {
      id: 2,
      pregled: 0,
      naziv: "Maratonci trče počasni krug",
      opis: "1982 | komedija",
      slika: Maratonci,
      ocena: "8.9",
      opisFilma: "The Topalovic family has been in the burial business for generations. When the old (150 yrs old) Pantelija dies, five generations of his heirs start to fight for the inheritance."
    },
    {
      id: 3,
      pregled: 0,
      naziv: "Kad porastem biću Kengur",
      opis: "2004 | komedija",
      slika: KadPorastemBicuKengur,
      ocena: "8.5",
      opisFilma: "Tokom jedne neobične noći, životi nekoliko međusobno povezanih ljudi se menjaju, jer brzo doživljavaju ljubav, razočarenje, radost, pohlepu i kajanje."
    },
    {
      id: 4,
      pregled: 0,
      naziv: "Ubistvo s predumišljajem ",
      opis: "1998 | drama",
      slika: UbistvoSPredumisljajem,
      ocena: "8.1",
      opisFilma: "Film prati dve ljubavne priče u ratnim vremenima Jelene Panić – Bulike i njene babe Jelene Ljubosavljević odvojene periodom od 50 godina mira."
    },
    {
      id: 5,
      pregled: 0,
      naziv: "Sveti Georgije ubiva aždahu",
      opis: "2009 | drama",
      slika: SvetiGeorgije,
      ocena: "7.3",
      opisFilma: "Radnja filma smeštena je u razdoblju od 1912. do 1914. godine u jednom srpskom seocetu na priobalju Save nadomak granice sa Austrougarskom, i prati dešavanja vezana za selo i njegove stanovnike, od bitke protiv Turaka u Prvom balkanskom ratu 1912. do izbijanja Prvog svetskog rata 1914. i presudne Cerske bitke."
    },
    {
      id: 6,
      pregled: 0,
      naziv: "Crni Gruja i Kamen Mudrosti",
      opis: "2007 | komedija",
      slika: CrniGruja,
      ocena: "7.1",
      opisFilma: "Uz pomoć vračare Karađorđe saznaje da, po legendi, negde u brdima postoji kamen mudrosti, od kojeg, kada tri puta udariš glavom o njega, postaneš mudriji. Zato angažuje svog rođaka Crnog Gruju, s pomoćnicima Čedom Veljom i Boletom, da mu pronađe taj čudotvorni kamen. "
    },
  ]);

  const [filmovi1] = useState([
    {
      id: 7,
      pregled: 0,
      naziv: "Otpisani",
      opis: "1978 | akcioni",
      slika: Otpisani,
      ocena: "8.5",
      opisFilma: "Prle i Tihi su sada vojnici. Kraj rata je blizu, ali još uvek ima Nemaca u Beogradu. Prle i Tihi postavljaju tajnu agenticu Mariju u Beograd. Tihijev tim se pridružuje poštar Joca."
    },
    {
      id: 8,
      pregled: 0,
      naziv: "Balkanski špijun",
      opis: "1984 | komedija",
      slika: BalkanskiSpijun,
      ocena: "8.9",
      opisFilma: "Uveren da je njegov podstanar špijun i državni neprijatelj, čovek zapada u duboku paranoju koja vodi u apsurdni i destruktivni lanac događaja."
    },
    {
      id: 9,
      pregled: 0,
      naziv: "Mrtav 'ladan",
      opis: "2002 | komedija",
      slika: MrtavLadan,
      ocena: "8.4",
      opisFilma: "Dva brata Lemi i Kiza, potrošivši sav novac, pokušavaju da po najnižoj ceni premeste mrtvog dedu iz Beograda u Vršac, ali on usput nestane."
    },
    {
      id: 10,
      pregled: 0,
      naziv: "Lepa sela, lepo gore",
      opis: "1996 | drama",
      slika: LepaSelaLepoGore,
      ocena: "8.7",
      opisFilma: "Tokom rata u Bosni, dvojica prijatelja iz detinjstva na kraju postaju neprijatelji, jer su ih tragične i razorne okolnosti rata dovele na suprotne strane i razotkrile najjezivije i najokrutnije aspekte ljudske prirode."
    },
    {
      id: 11,
      pregled: 0,
      naziv: "Poslednji krug u Monci",
      opis: "1989 | akcioni",
      slika: PoslednjiKrugUMonci,
      ocena: "7.9",
      opisFilma: "Nakon što je proveo sedam godina u zatvoru, autsajder odlučuje da uspostavi sopstveni način pravde u društvu koje se raspada."
    },
    {
      id: 12,
      pregled: 0,
      naziv: "Profesionalac",
      opis: "2003 | komedija",
      slika: Profesionalac,
      ocena: "8.5",
      opisFilma: "Posle raspada jugoslovenske vlade, bivši tajni agent, sada taksista, ulazi u kancelariju bivšeg univerzitetskog profesora, sada direktora firme."
    },
  ]);

  function prikaz() {
    let brojFilmova = filmovi.filter((f) => f.pregled > 0);
    setPregledFilmovi(brojFilmova);
  }
  function prikaz1() {
    let brojFilmova1 = filmovi1.filter((f1) => f1.pregled > 0);
    setPregledFilmovi1(brojFilmova1);
  }

  

  function dodajPregled1(id) {
    filmovi1.forEach((f) => {
      if (f.id === id) {
        f.pregled++;
      }
      // console.log(f.pregled);
    });
    prikaz1();
  }

  function dodajPregled(id) {
    filmovi.forEach((f) => {
      if (f.id === id) {
        f.pregled++;
      }
      // console.log(f.pregled);
    });
    prikaz();
  }



  return (
    <BrowserRouter className="App">
      <div className="Appdiv">
        <NavigationBar></NavigationBar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filmovi filmovi={filmovi} povecajZaJedan={dodajPregled} />
                <Filmovi filmovi={filmovi1} povecajZaJedan={dodajPregled1} />
              </>
            }
          />
          <Route
            path="/pregled/*"
            element={
              <>
               <Pretrazi/>

               <Dugme/>
                <Pregled filmovi={[...pregledFilmovi,...pregledFilmovi1]}/>
              </>
            }
          />
          <Route path="/prijava/*" element={<FormaPrijava />} />
          <Route path="/recenzija/*" element={<FormaRecenzija />} />
          <Route path="/registracija/*" element={<FormaRegistracija />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



