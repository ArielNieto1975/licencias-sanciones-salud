import React from "react";

const InaistenciasInjustificadas = () => (
  <div className="page-view">
    <section>
      <h2>Inasistencias Injustificadas</h2>
      <p>
        El personal que durante un año calendario incurriera en inasistencias
        injustificadas, se hará pasible de las siguientes sanciones:
      </p>
      <p>
        - 1°. Inasistencia: Llamado de atención (solo Ley 7625) o apercibimiento
        por escrito;
      </p>
      <p>- 2°. Inasistencia: un (1) día de suspensión;</p>
      <p>- 3°. Inasistencia: dos (2) días de suspensión;</p>
      <p>- 4°. Inasistencia: tres (3) días de suspensión;</p>
      <p>- 5°. Inasistencia: cuatro (4) días de suspensión;</p>
      <p>- 6°. Inasistencia: cinco (5) días de suspensión;</p>
      <p>- 7°. Inasistencia: seis (6) a diez (10) días de suspensión;</p>
      <p>- 8°. Inasistencia: hasta veinte (20) días de suspensión;</p>
      <p>- 9°. Inasistencia: hasta cuarenta (40) días de suspensión;</p>
      <p>- 10°. Inasistencia: hasta sesenta (60) días de suspensión;</p>
      <p>
        - Más de diez (10) días continuos o discontinuos en el año calendario:
        Cesantía
      </p>

      <br />

      <p className="centrado">
        Fuente Art. 117 y 118{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Leyes/10335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y Art. 67 y 68{" "}
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

export default InaistenciasInjustificadas;
