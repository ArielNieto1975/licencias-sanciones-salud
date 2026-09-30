import React from "react";

const AbandonoServicio = () => (
  <div className="page-view">
    <section>
      <h2>Abandono de Servicio</h2>
      <p>
        Cuando el agente se ausente de su lugar de trabajo sin autorización del
        superior, durante su jornada de labor.
      </p>
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

export default AbandonoServicio;
