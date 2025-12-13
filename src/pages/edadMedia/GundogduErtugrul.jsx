import GundogduErtugrulImg from "../../assets/gundogdu.jpg";
import { Link } from "react-router-dom";

const GundogduErtugrul = () => {
  return (
    <div className="page-content">
      <h1>Gündoğdu Ertugrul (Hermano de Ertugrul Gazi)</h1>
      <img
        src={GundogduErtugrulImg}
        alt="Gündoğdu Ertugrul"
        style={{ width: "200px", height: "250px", marginRight: "10px" }}
      />
      <br />

      <p>
        Gündoğdu Bey nació probablemente a finales del siglo XII (c. 1190 - ?)
        en Asia Central. Era el hijo mayor de{" "}
        <Link to="/suleyman-sha">Suleyman Shah</Link> (o Gündüz Alp, según la
        fuente histórica que consultes) y{" "}
        <Link to="/hayme-ertugrul">Hayme Hatun</Link>. El nombre: "Gündoğdu"
        significa literalmente "El día ha nacido" o "Amanecer". Posición: Como
        primogénito, fue criado para ser el sucesor natural de su padre. En la
        cultura de las tribus Oghuz, se esperaba que el hijo mayor mantuviera la
        estabilidad, las tradiciones y la seguridad del clan. Personalidad:
        Tradicionalmente se le describe como un hombre cauto, inteligente,
        racional y menos inclinado a la aventura o el riesgo que su hermano
        menor, <Link to="/ertugrul-gazi">Ertuğrul Gazi</Link>. Gündoğdu
        representaba el orden establecido.
      </p>
      <p>
        El evento más trascendental en la vida de Gündoğdu, y por el cual es
        recordado en la historia, es la división de la tribu Kayi. Este momento
        definió no solo su destino, sino el futuro del mundo. Tras la muerte de
        su padre (Suleyman Shah) en el río Éufrates, la tribu quedó en una
        encrucijada crítica cerca de Alepo (Siria). Había dos posturas
        irreconciliables ante la amenaza mongola y la hambruna: La Postura de
        Ertuğrul (El Visionario): Quería ir hacia el Oeste, hacia la frontera
        bizantina (Anatolia occidental). Era una apuesta arriesgada, "hacia el
        fuego", buscando nuevas tierras de conquista bajo la bandera del
        Sultanato Selyúcida. La Postura de Gündoğdu (El Conservador): Quería ir
        hacia el Este o regresar a Ahlat (su antiguo asentamiento) y
        eventualmente a Asia Central. Su lógica era impecable: buscar
        territorios familiares, donde ya conocían a los gobernantes locales y
        donde el grueso del ejército mongol quizás ya habría pasado. El
        Resultado: Gündoğdu, siendo el mayor y apoyado por el consejo de
        ancianos (y por su otro hermano, Sungurtekin), se llevó a la inmensa
        mayoría de la tribu. Se estima que unas 1.000 familias siguieron a
        Gündoğdu, buscando seguridad. Solo unas 400 tiendas siguieron a Ertuğrul
        hacia lo desconocido.
      </p>
      <p>
        Mientras que la pequeña facción de Ertuğrul acabó fundando el Imperio
        Otomano (haciendo que su historia fuera registrada minuciosamente por
        cronistas posteriores), la facción de Gündoğdu entró en las sombras de
        la historia. Regreso al Este: Gündoğdu llevó a su gente hacia la región
        de Ahlat y luego, se cree, hacia la cuenca de Pasinler (cerca de
        Erzurum). Desvanecimiento: Al no fundar un estado propio, su linaje se
        disolvió gradualmente dentro de otras confederaciones turcas más grandes
        (como los Akkoyunlu o Karakoyunlu) o permaneció viviendo una vida nómada
        tradicional sin pretensiones imperiales.
      </p>
      <p>
        Muerte: No existe una tumba monumental famosa de Gündoğdu que sea centro
        de peregrinación masiva como la de Ertuğrul en Söğüt. Se cree que murió
        de vejez, lejos de las fronteras de guerra, habiendo cumplido su deber
        de mantener a su gente segura, aunque a costa de la gloria histórica.
      </p>
      <p>
        Esposa (Selcan Hatun): En la serie Diriliş: Ertuğrul, su esposa es
        Selcan Hatun, una mujer ambiciosa que luego se redime. Históricamente,
        las esposas de los beys no solían ser registradas a menos que fueran de
        realeza, pero la figura de una "Selcan" o similar existe en cuentos
        épicos como el Dede Korkut, aunque no necesariamente vinculada
        cronológicamente a Gündoğdu.
      </p>
      <p>
        Hijos: Según la tradición, tuvo dos hijos llamados Süleyman e İltekin.
        Sin embargo, no jugaron un papel relevante en la historia posterior y
        sus linajes no son rastreables hoy en día con certeza.
      </p>
      <p>
        En la serie Dirilis Ertugrul, Gündoğdu es interpretado por el actor Kaan
        Taşaner.
      </p>
    </div>
  );
};

export default GundogduErtugrul;
