import React from "react";

const IncumplimientoHorario = () => (
  <div className="page-view">
    <section>
      <h2>Incumplimiento reiterado del horario de trabajo</h2>
      <p>
        El personal que durante el mes incurriera en incumplimiento reiterado
        del horario de entrada, se hará pasible de las sanciones que se
        consignan a continuación:
      </p>
      <p>
        - 2° llegada tarde injustificada: llamada de atención (solo Ley 7625)
      </p>
      <p>- 3° llegada tarde injustificada: apercibimiento por escrito;</p>
      <p>- 4° llegada tarde injustificada: un (1) día de suspensión;</p>
      <p>- 5° llegada tarde injustificada: dos (2) días de suspensión;</p>
      <p>- 6° llegada tarde injustificada: tres (3) días de suspensión;</p>
      <p>
        - más de seis (6) llegadas tarde injustificadas: hasta 30 días de
        suspensión.
      </p>
      <br />
      <p>
        Las llegadas tarde que excedan los sesenta (60) minutos y no sean
        justificadas, se considerarán inasistencias y el agente no podrá tomar
        servicios.
      </p>
      <p>
        El agente que llegare después del horario de entrada, deberá en todos
        los casos reponer el tiempo no trabajado al final de la jornada habitual
        de labor.
      </p>
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

export default IncumplimientoHorario;
