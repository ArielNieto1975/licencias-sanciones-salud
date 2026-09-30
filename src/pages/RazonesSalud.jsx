import React from "react";

const RazonesSalud = () => (
  <div className="page-view">
    <section>
      <h2>Licencias por Razones de Salud</h2>
      <p>
        Son incompatibles con el desempeño de cualquier función pública o
        privada, salvo actividades que sean específicamente autorizadas por la
        Dirección General de Personal
      </p>
      <p>
        Los agentes deberán cumplir el reposo y tratamiento indicado para su
        restablecimiento y no podrán ausentarse de su lugar de residencia sin la
        autorización del Servicio de Reconocimientos Médicos, bajo cuyo control
        se encuentran.
      </p>
      <h4>Afecciones o enfermedades de corto tratamiento:</h4>
      <p>
        Hasta treinta (30) días corridos continuos o discontinuos en el año
        calendario, con percepción íntegra de haberes. Agotada esta, será sin
        goce de haberes y por un plazo máximo de cien (100) días corridos
        continuos o discontinuos en el año calendario. Luego de esto, si no
        estuviere en condiciones de reintegrarse a sus tareas, será dado de
        baja.
      </p>
      <p>
        Cuando la Dirección General de Personal estimase que el agente padece
        una afección que lo haría incluir en las de largo tratamiento, deberá
        someterlo a una Junta Médica antes de agotar el término del párrafo
        anterior.
      </p>
      <h4>Afecciones o enfermedades de largo tratamiento:</h4>
      <p>
        Hasta setecientos treinta (730) días corridos continuos o discontinuos
        con goce íntegro de haberes (acumulables en lapsos de 3 años),
        prorrogables hasta ciento ochenta (180) días corridos y continuos más,
        sin goce de haberes.
      </p>
      <p>
        Se constituirá, a pedido del agente o de oficio, una Junta Médica con
        tres facultativos de la Dirección General de Personal y el que proponga
        el interesado, si éste así lo requiriera, que determinará el periodo
        probable que el afectado necesite para su recuperación.
      </p>
      <p>
        Una vez agotados los términos de esta licencia, al agente que no
        estuviere en condiciones de reintegrarse a sus tareas, ni pudiera ser
        reubicado, ni estuviera en condiciones de jubilarse, se le fijará el
        carácter y grado de la incapacidad y será dado de baja.
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

export default RazonesSalud;
