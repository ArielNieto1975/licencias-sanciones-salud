import React from "react";

const LicenciaExamen = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por Examen</h2>
      <p>
        Licencias con goce íntegro de haberes para rendir exámenes de ingreso,
        parciales, finales o complementarios. Debe acreditar haber rendido,
        mediante certificado, independientemente del resultado.
      </p>
      <h4>Carreras universitarias o estudios de nivel terciario:</h4>
      <p>
        Hasta 21 días hábiles por año calendario con tope de hasta 7 por examen
        y por materia.
      </p>
      <h4>Estudios en la enseñanza media o especial:</h4>
      <p>
        Hasta 20 días hábiles por año calendario con tope de hasta 5 por examen
        y por materia.
      </p>
      <h4>Cursos preparatorios de ingreso:</h4>
      <p>Hasta 3 días hábiles por curso</p>
      <h4>
        Para el caso de última materia de la carrera universitaria o de estudios
        de nivel terciario, o la tesis profesional, o la correspondiente a la
        preparación de un trabajo final:{" "}
      </h4>
      <p>Por única vez, 10 días hábiles de licencia especial</p>
      <br />
      <p>
        Para tener derecho a estas licencias el agente debe contar con una
        antigüedad mínima de seis (6) meses en la Administración Pública
        Provincial. En caso de no contar con dicha antigüedad se otorgará a
        pedido del agente, licencia sin goce de haberes por el plazo
        establecido.
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

export default LicenciaExamen;
