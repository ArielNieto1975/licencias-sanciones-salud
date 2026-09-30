import React from "react";

const Maternidad = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por Maternidad</h2>
      <p>
        Corresponden 180 días corridos, otorgándose con una antelación no menor
        a 20 días ni mayor a 30 días de la fecha probable de parto.
      </p>
      <p>
        La agente debe presentar certificado médico donde se consigne fecha
        probable de parto, y posteriormente la partida de nacimiento certificada
        por el Registro Civil
      </p>
      <br />
      <p className="centrado">
        Fuente Art.1{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/9530"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 9905
        </a>
        {", "}
        Art. 92{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/10335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y Art. 50{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/9566"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7233
        </a>{" "}
        y sus Decretos reglamentarios
      </p>

      <button onClick={() => window.history.back()}>Volver</button>
    </section>
  </div>
);

export default Maternidad;
