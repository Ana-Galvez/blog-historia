import DundarErtugrulImg from "../../assets/dundar.jpg";
import DundarErtugrulImg2 from "../../assets/dundar2.jpg";
import { Link } from "react-router-dom";
const DundarErtugrul = () => {
  return (
    <div className="page-content">
      <h1>Dündar Bey (Hermano menor de Ertugrul Gazi)</h1>
      <img
        src={DundarErtugrulImg}
        alt="Dündar Bey"
        style={{ width: "250px", height: "250px", marginRight: "10px" }}
      />
      <img
        src={DundarErtugrulImg2}
        alt="Dündar Bey"
        style={{ width: "350px", height: "250px" }}
      />
      <br />
      <a
        href="https://youtu.be/jMn9dIRVIFQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver video sobre Dündar Bey
      </a>
      <p>
        En la vasta historia del Imperio Otomano, pocas figuras son tan trágicas
        y complejas como Dündar Bey. Conocido popularmente por las series de
        televisión modernas, su verdadera historia va más allá de la ficción:
        representa el doloroso choque entre la vieja tradición tribal y el
        nacimiento de un nuevo estado imperial. ¿Quién fue realmente el hermano
        menor de <Link to="/ertugrul-gazi">Ertuğrul Gazi</Link> y por qué su
        destino quedó sellado por la espada de su propio sobrino, Osman I?
      </p>
      <p>
        Dündar nació a principios del siglo XIII (se estima entre 1210 y 1212)
        como el hijo menor de <Link to="/suleyman-sha">Süleyman Şah</Link> y{" "}
        <Link to="/hayme-ertugrul">Hayme Hatun</Link>. Creció en una época
        turbulenta, marcada por las invasiones mongolas que empujaban a las
        tribus turcas hacia el oeste. Cuando su padre murió cruzando el río
        Éufrates, la tribu Kayı se enfrentó a un cisma histórico. Mientras sus
        hermanos mayores <Link to="/gundogdu-ertugrul">Gündoğdu Bey</Link> y
        Sungurtekin Bey decidieron regresar a su patria ancestral en el este,
        Dündar tomó una decisión que cambiaría la historia: se mantuvo leal a su
        hermano Ertuğrul. Juntos, migraron hacia Anatolia, estableciéndose
        finalmente en Söğüt, en la frontera con el Imperio Bizantino.
      </p>
      <p>
        Durante décadas, Dündar fue un pilar fundamental para Ertuğrul Gazi.
        Aunque las fuentes históricas a veces lo describen como un hombre de
        carácter más suave o menos belicoso que su hermano, su lealtad fue
        incuestionable durante la etapa de asentamiento.
        <ul>
          <li>
            Rol en la tribu: A menudo quedaba a cargo del cuidado de la tribu y
            de la familia cuando Ertuğrul partía en sus largas campañas
            militares.
          </li>
          <li>
            Experiencia: Al ser parte de la vieja guardia, Dündar acumuló una
            vasta experiencia en la política tribal y las relaciones con los
            vecinos bizantinos, abogando generalmente por la diplomacia y la
            prudencia.
          </li>
        </ul>
      </p>
      <p>
        El punto de inflexión llegó con la muerte de Ertuğrul (aprox. 1281).
        Según la tradición túrquica antigua, la sucesión no era necesariamente
        de padre a hijo, sino que a menudo recaía en el miembro más anciano y
        sabio de la familia (senioridad). Dündar Bey, sintiéndose con el derecho
        legítimo por ser el anciano de la familia y hermano del anterior líder,
        reclamó el liderazgo del beylicato. Sin embargo, se encontró con una
        fuerza imparable: su sobrino Osman (Gazi). Osman representaba una nueva
        visión: una política de expansión agresiva y guerra santa (Gaza) contra
        los bizantinos. Dündar, en cambio, temía que estas acciones trajeran la
        ruina a la pequeña tribu, enfrentándose a enemigos demasiado poderosos.
      </p>
      <p>
        La tensión entre tío y sobrino escaló hasta volverse insostenible. Los
        historiadores narran que Dündar comenzó a socavar la autoridad de Osman,
        cuestionando sus tácticas de guerra y, según algunas fuentes, buscando
        alianzas con los gobernadores bizantinos (Tekfurs) para frenar la
        expansión de Osman. El desenlace ocurrió alrededor de 1298. En una
        reunión del consejo (o tras un acto de desobediencia abierta, las
        versiones varían), Osman I tomó una decisión drástica para asegurar la
        unidad del naciente estado. "Osman, viendo que la oposición de su tío
        ponía en peligro el futuro de la tribu y la causa, desenfundó su arco (o
        espada, según la fuente) y acabó con la vida de Dündar Bey." Este acto
        no fue solo un asesinato familiar; fue un mensaje político. Marcó el fin
        de la democracia tribal nómada y el comienzo de la autoridad absoluta
        del Sultán, un principio que regiría el Imperio Otomano durante 600
        años.
      </p>
      <p>
        Hoy en día, la figura de Dündar Bey ha sido revivida por la cultura
        popular, a veces villanizada injustamente. Históricamente, no fue
        necesariamente un "villano", sino un hombre de otra época que no supo
        adaptarse a la visión imperial de su sobrino. Su tumba, aunque menos
        visitada que la de Ertuğrul, permanece en Söğüt, como un recordatorio
        silencioso del precio que se pagó para fundar uno de los imperios más
        grandes de la historia.
      </p>
      <p>
        En la serie Dirilis Ertugrul, Dündar Bey es interpretado por el actor
        Batuhan Karacakaya y Arda Aranat y en la serie Kurulus Osman por Ragıp
        Savaş.
      </p>
    </div>
  );
};

export default DundarErtugrul;
