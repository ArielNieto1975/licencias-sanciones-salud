import React from "react";

const Negligencia = () => (
  <div className="page-view">
    <section>
      <h2>Negligencia en el Cumplimiento de Funciones</h2>
      {/* <p>
        Cuando el agente se ausente de su lugar de trabajo sin autorización del
        superior, durante su jornada de labor.
      </p> */}
      <p>Sanciones aplicables:</p>
      <p>- Llamado de atención (Ley 7625).</p>
      <p>- Apercibimiento por escrito.</p>
      <p>- Suspensión de hasta sesenta (60) días corridos.</p>
      <br />

      <p className="centrado">
        Fuente Art. 117{" "}
        <a
          href="http://web2.cba.gov.ar/web/leyes.nsf/0/0DCA596E4811BAE2032589C900521F5C?OpenDocument&Highlight=0,7625"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y Art. 67{" "}
        <a
          href="http://web2.cba.gov.ar/web/leyes.nsf/0/B4E0D6549A13821503257BE1006695BB?OpenDocument&Highlight=0,7233"
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

export default Negligencia;
