import React from "react";

const Nacimiento = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por Nacimiento de hijo/a</h2>
      <p>
        Corresponden ocho (8) días corridos al agente que haya sido padre, que
        fuese el cónyuge o conviva con la parturienta, o a la cónyuge o la
        conviviente de la mujer que hubiere dado a luz.
      </p>
      <p>
        En caso de que el padre no conviviera con la madre, los días a otorgar
        serán dos (2).
      </p>
      <p>
        Debe tomarse dentro de los 15 días siguientes al nacimiento y se
        acredita con la partida expedida por el Registro Civil.
      </p>
      <br />
      <p className="centrado">
        Fuente Art.50{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/9566"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7233
        </a>{" "}
        y Art. 92{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/10335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y sus Decretos reglamentarios
      </p>
      <button onClick={() => window.history.back()}>Volver</button>
    </section>
  </div>
);

export default Nacimiento;
