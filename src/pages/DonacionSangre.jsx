import React from "react";

const DonacionSangre = () => (
  <div className="page-view">
    <section>
      <h2>Justificación de inasistencia por por donación de sangre</h2>
      <p>Hasta cuatro (4) días por año calendario</p>
      <p>Entre una extracción y otra debe mediar al menos 60 días</p>
      <p>Se acredita mediante certificado de la autoridad sanitaria.</p>
      <br />
      <p className="centrado">
        Fuente Art.52{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/9566"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7233
        </a>{" "}
        y Art. 94{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/10335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y sus Decretos reglamentarios
      </p>
    </section>

    <button onClick={() => window.history.back()}>Volver</button>
  </div>
);

export default DonacionSangre;
