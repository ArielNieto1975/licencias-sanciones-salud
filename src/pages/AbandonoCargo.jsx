import React from "react";

const AbandonoCargo = () => (
  <div className="page-view">
    <section>
      <h2>Abandono de Cargo</h2>

      <p>
        Cuando el agente falta injustificadamente a sus tareas durante más de
        cinco (5) días hábiles continuos.
      </p>
      <p>
        La Oficina de Personal emplazará en forma fehaciente al agente para que
        se reintegre a sus tareas dentro del término de las cuarenta y ocho (48)
        horas bajo apercibimiento de cesantía.
      </p>
      <p>
        Si dentro de dicho plazo se reintegrara podrá ser sancionado, según las
        circunstancias del caso, con Apercibimiento por escrito o Suspensión de
        hasta sesenta (60) días corridos. Si no se reintegrara deberá disponerse
        la cesantía sin más trámite.
      </p>

      <br />

      <p className="centrado">
        Fuente Art. 118{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/10335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y Art. 68{" "}
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

export default AbandonoCargo;
