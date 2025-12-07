import HaymeErtugrulImg from "../../assets/haymeErtugrul.jpg";
import HaymeErtugrulImg2 from "../../assets/tumbaHaymeErtugrul.jpg";
import { Link } from "react-router-dom";
const HaymeErtugrul = () => {
  return (
    <div className="page-content">
        <h1>Hayme Hatun (Madre de Ertugrul Gazi)</h1>
        <img src={HaymeErtugrulImg} alt="Hayme Hatun" style={{ width: "200px", height: "250px", marginRight: "10px" }} />
        <img src={HaymeErtugrulImg2} alt="Tumba de Hayme Hatun" style={{ width: "350px", height: "250px"}} />
        <br />
              <a
        href="https://youtu.be/9l_eIQj38P4?si=V4xt7PekyFJUzeIY"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver video sobre Hayme Hatun
      </a>
      <p>Hayme Hatun fue la madre de <Link to="/ertugrul-gazi">Ertuğrul Gazi</Link> y la abuela de Osman I (fundador del Imperio Otomano). Su papel no se limitó al de "esposa de líder"; tras la muerte de su esposo, ella asumió el liderazgo de la tribu Kayı en uno de sus momentos más críticos, guiando la migración que eventualmente llevaría a la fundación del imperio. Por eso se le considera la matriarca fundadora.</p>
      <p>La tradición popular (y la serie de TV) dice que fue esposa de <Link to="/suleyman-sha">Suleyman Shah</Link>. Sin embargo, la historia académica moderna se inclina más a que fue esposa de Gündüz Alp (basado en monedas antiguas encontradas). Sea cual sea el nombre, fue la compañera del Bey de la tribu. Fue madre de cuatro hijos varones que marcaron el destino del clan: <Link to="/gundogdu-ertugrul">Gündoğdu Bey</Link>: El mayor. Sungurtekin Bey: Quien pasó años separado de la tribu (según la leyenda, como espía o prisionero). <Link to="/ertugrul-gazi">Ertuğrul Gazi</Link>: El padre de los otomanos. Dündar Bey: El menor.</p>
      <p>Se la llama "Devlet Ana" (Madre del Estado). A diferencia de muchas mujeres de su época que permanecían en segundo plano, Hayme Hatun actuó como Regente y Líder Tribal. Cuando su esposo murió (se dice que ahogado en el Éufrates), la tribu Kayı quedó descabezada y dividida. Una parte quería regresar a Asia Central y otra quería seguir hacia Anatolia. Hayme Hatun tomó el mando, unificó a las familias bajo su "tienda" (Hayme significa tienda en una variante antigua, simbolizando protección) y apoyó la decisión de su hijo Ertuğrul de marchar hacia la frontera bizantina. Sin su apoyo y autoridad moral, Ertuğrul probablemente no habría tenido la fuerza política para liderar.</p>
      <p>A diferencia de Ertuğrul y Halime que están en Söğüt, Hayme Hatun descansa en un lugar diferente, marcando la ruta de migración de la tribu. Su tumba se encuentra en Domaniç, en la aldea de Çarşamba. Domaniç era la zona de veraneo de la tribu. Se dice que ella murió allí mientras la tribu pastaba sus rebaños. El sultán otomano Abdul Hamid II (siglo XIX) localizó su tumba, que estaba casi perdida, y construyó el mausoleo actual en su honor.</p>
      <p>Incluso hoy en día, su legado es muy tangible en Turquía: El Festival de "Hayme Ana": Cada año, a principios de septiembre, se celebra en Domaniç un festival en su honor llamado "Ceremonias de Conmemoración de Hayme Ana y Migración a Domaniç". Es la única mujer en la historia turca que tiene una ceremonia estatal de este tipo dedicada exclusivamente a ella. Frase Célebre (Atribuida): Se le atribuye un consejo a Ertuğrul que resume la filosofía otomana: "Hijo, que tu espada sea afilada y tu corazón misericordioso. No olvides de dónde vienes para que no pierdas el camino hacia donde vas."</p>
      <p>En la serie de televisión, es interpretada por la actriz veterana Hülya Darcan.Dato curioso de la serie: Se la retrata siempre vestida con tocados distintivos y actuando como la "voz de la razón" que frena los impulsos violentos de sus hijos y mantiene la paz entre las nueras y las diferentes facciones de la tribu. Esta representación coincide mucho con la visión histórica de su carácter conciliador y firme.</p>
    </div>
  )
}

export default HaymeErtugrul