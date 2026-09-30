import React from "react";

const FrancoCompensatorio = () => (
  <div className="page-view">
    <section>
      <h2>Franco Compensatorio</h2>
      <p>
        Las horas extras se compensarán con francos siempre que no comprometan
        el servicio y dentro de los treinta (30) días de realizadas las mismas.
      </p>
      <br />
      <p className="centrado">
        Fuente Art.30{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/9566"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7233
        </a>{" "}
        y Art. 80{" "}
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

export default FrancoCompensatorio;
