import React from "react";

const Accidente = () => (
  <div className="page-view">
    <section>
      <h2>Licencias por Accidente o Enfermedad Profecional</h2>
      <p>
        Por accidente de trabajo, accidente “in- itinere”, o enfermedad
        profesional de las contempladas por la Ley Nacional N° 9688
      </p>
      <p>
        Hasta setecientos treinta (730) días corridos en forma continua o
        alternada, con goce íntegro de haberes.
      </p>
      <p>
        Obligación: formular la correspondiente denuncia, en forma inmediata,
        ante el titular de la dependencia donde se desempeña.
      </p>
      <p>
        En caso de accidente in-itinere, el agente deberá además formular
        denuncia ante la Autoridad Policial mencionando testigos si los hubiera.
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

export default Accidente;
