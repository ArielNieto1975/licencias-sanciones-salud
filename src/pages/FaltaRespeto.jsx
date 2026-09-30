import React from "react";

const FaltaRespeto = () => (
  <div className="page-view">
    <section>
      <h2>Falta de respeto</h2>

      <p>Sanciones aplicables:</p>
      <p>- Llamado de atención (Ley 7625).</p>
      <p>- Apercibimiento por escrito.</p>
      <p>- Suspensión de hasta sesenta (60) días corridos.</p>
      <br />

      <p className="centrado">
        Fuente Art. 117{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/10335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y Art. 67{" "}
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

export default FaltaRespeto;
