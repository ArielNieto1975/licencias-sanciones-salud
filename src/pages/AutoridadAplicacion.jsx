import React from "react";

const AutoridadAplicacion = () => (
  <div className="page-view">
    <section>
      <h2>Autoridad de Aplicación</h2>
      {/* <p>
        Cuando el agente se ausente de su lugar de trabajo sin autorización del
        superior, durante su jornada de labor.
      </p> */}
      <p>Las medidas disciplinarias serán aplicadas por las autoridades que a continuación se detallan:</p>
      <p>Ley 7625:</p>
      <p>a) Por el Jefe inmediato: el llamado de atención y el apercibimiento por escrito.</p>
      <p>b) Por el Jefe de la Repartición o Dependencia: las medidas enunciadas precedentemente más la suspensión de hasta cinco (5) días sin goce de haberes.</p>
      <p>c) Por el Secretario Ministro o Subsecretario: las medidas enunciadas precedentemente más la suspensión de seis (6) a sesenta (60) días sin goce de haberes.</p>
      <p>d) Por el Poder Ejecutivo: las medidas enunciadas precedentemente más la cesantía y la exoneración.</p>
      <br />
      <p>Ley 7233:</p>
      <p>a) Por el Jefe de la repartición o dependencia, la suspensión de hasta CINCO (5) días corridos.</p>
      <p>b) Por los Ministros, Secretarios Ministros y Autoridades Superiores en los Organismos Autárquicos regidos por la presente Ley, la suspensión de hasta SESENTA (60) días corridos.</p>
      <p>c) Por el Poder Ejecutivo, la cesantía y la exoneración.</p>
      <p>Las autoridades indicadas, pueden dictar resoluciones de sanciones inferiores a las previstas, cuando de los antecedentes acumulados del sumario respectivo surja esta conveniencia.</p>
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

export default AutoridadAplicacion;
