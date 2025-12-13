import SungurtekinImg from "../../assets/sungurtekin.jpg";
import SungurtekinImg2 from "../../assets/sungurtekin2.jpg";
import { Link } from "react-router-dom";

const SungurtekinErtugrul = () => {
  return (
    <div className="page-content">
      <h1>Sungurtekin (Hermano de Ertugrul Gazi)</h1>
      <img
        src={SungurtekinImg}
        alt="Sungurtekin Ertugrul"
        style={{ width: "200px", height: "200px", marginRight: "10px" }}
      />
      <img
        src={SungurtekinImg2}
        alt="Sungurtekin Ertugrul"
        style={{ width: "250px", height: "200px", marginRight: "10px" }}
      />
      <br />
      <p>
        Si <Link to="/ertugrul-gazi">Ertuğrul</Link> representa el futuro y la
        expansión, y <Link to="/dundar-ertugrul">Dündar</Link> la tragedia de la
        tradición, Sungurtekin Bey es el misterio. A menudo eclipsado en las
        crónicas por la magnificencia del Imperio Otomano que fundó su sobrino,
        Sungurtekin fue una figura clave en uno de los momentos más críticos de
        la tribu Kayı: la gran división.
      </p>
      <p>
        ¿Quién fue este guerrero que, según la leyenda, vivió en las sombras
        como espía y eligió un destino diferente al de los fundadores del
        imperio?
      </p>
      <p>
        Sungurtekin fue uno de los hijos mayores de{" "}
        <Link to="/suleyman-sha">Süleyman Şah</Link> y{" "}
        <Link to="/hayme-ertugrul">Hayme Hatun</Link>. Al igual que sus hermanos
        (<Link to="/gundogdu-ertugrul">Gündoğdu</Link>, Ertuğrul y Dündar), fue
        criado en la dura estepa, aprendiendo el arte de la guerra y el
        liderazgo desde niño. A diferencia de Ertuğrul y Dündar, que eran más
        jóvenes, Sungurtekin y Gündoğdu representaban la vieja guardia, aquellos
        más apegados a las raíces de Asia Central y menos inclinados a la
        aventura incierta hacia la frontera bizantina.
      </p>
      <p>
        Una gran parte de la fama actual de Sungurtekin proviene de la narrativa
        popular y las series de televisión (Diriliş: Ertuğrul), donde se le
        retrata como un maestro del espionaje.
        <ul>
          <li>
            La narrativa: Se dice que desapareció durante años, infiltrado en el
            ejército mongol o sirviendo como agente secreto para el Sultán
            Seléucida Alaeddin Keykubad.
          </li>
          <li>
            La realidad histórica: Si bien los detalles de sus misiones de
            espionaje son difíciles de verificar con documentos de la época, sí
            se sabe que Sungurtekin era un guerrero de alto rango con profundos
            lazos con el estado Seléucida, lo que le otorgaba una visión
            política diferente a la de su hermano Ertuğrul.
          </li>
        </ul>
      </p>
      <p>
        El evento más importante en la vida de Sungurtekin ocurrió tras la
        muerte de su padre. La tribu Kayı atravesaba una hambruna y presión
        militar. Aquí surgieron dos filosofías de supervivencia:
        <ul>
          <li>
            La visión de Ertuğrul: Migrar al Oeste, hacia la frontera bizantina
            (Söğüt), buscando nuevas tierras a costa de la guerra constante.
          </li>
          <li>
            La visión de Sungurtekin y Gündoğdu: Regresar al Este, a la patria
            ancestral (Ahlat), para reagruparse con las otras tribus turcas y
            vivir una vida más tradicional y segura bajo el dominio Seléucida
            existente.
          </li>
        </ul>
        Sungurtekin, alineándose con su hermano mayor Gündoğdu, eligió el
        regreso. Esta decisión partió a la tribu Kayı en dos para siempre. La
        rama de Sungurtekin se desvaneció en la historia de Asia Central,
        mientras que la de Ertuğrul daría nacimiento al Imperio Otomano.
      </p>
      <p>
        Existen discrepancias históricas sobre sus últimos años. Mientras que la
        mayoría de los registros indican que vivió y murió en el este con
        Gündoğdu, algunas tradiciones orales y narrativas sugieren que, en su
        vejez, Sungurtekin visitó a Ertuğrul en Söğüt. Se cree que intentó
        mediar en los conflictos o simplemente ver con sus propios ojos el
        principado que su hermano menor había construido. Sin embargo, nunca
        desafió el liderazgo de Ertuğrul de la manera en que lo hizo Dündar.
      </p>
      <p>
        Sungurtekin Bey simboliza la fidelidad a las raíces. Mientras el Imperio
        Otomano se convertía en una potencia europea y mediterránea, la memoria
        de Sungurtekin recordaba que el origen de los turcos estaba en las
        estepas del este. No fue un traidor ni un cobarde; fue un líder que tomó
        una decisión pragmática para salvar a su gente en un momento de crisis,
        aunque la historia terminara favoreciendo la apuesta arriesgada de su
        hermano menor.
      </p>
      <p>
        En las series Dirilis Ertugrul y Kurulus Osman Sungurtekin es interpretado por el actor Sungur Tekin.
      </p>
    </div>
  );
};

export default SungurtekinErtugrul;
