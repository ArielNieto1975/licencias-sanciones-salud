import React from "react";

const Fallecimiento = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por Fallecimiento de familiares</h2>
      <p>
        Primer Grado: Por fallecimiento de cónyuge, hijos/as, padre, madre:
        cinco (5) días hábiles.
      </p>
      <p>
        Segundo Grado: Por suegro/a, hermanos/as, abuelos/as y nietos/as: dos
        (2) días hábiles.
      </p>
      <p>
        Tercer Grado: Por padrastro/a, tíos/as, sobrinos/as, e hijos/as
        políticos: un (1) día hábil.
      </p>
      <p>
        Se le adicionarán dos (2) días hábiles, cuando por motivo del
        fallecimiento y/o sepelio, el/la agente deba trasladarse a más de
        doscientos (200) kilómetros del lugar de residencia.{" "}
      </p>
      <p>
        En todos los casos se presentará el certificado de defunción expedido
        por el Registro Civil o en su defecto, comprobante fehaciente.{" "}
      </p>
      <h3>Licencia por Fallecimiento de de hijo durante maternidad</h3>
      <p>
        En caso de fallecimiento durante la licencia por maternidad, la misma se
        interrumpirá y a partir de ese momento la agente tendrá una licencia por
        fallecimiento de treinta (30) días.{" "}
      </p>
      <p>
        En caso de interrupción del embarazo por causas naturales o
        terapéuticas, o el nacimiento sin vida del/la hijo/a, la licencia será
        de cuarenta (40) días.
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

export default Fallecimiento;
