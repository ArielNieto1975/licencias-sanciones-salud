import React from "react";

const PorViolencia = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por violencia familiar, de género o contra la mujer</h2>
      <p>
        Establece hasta un máximo de 30 días corridos por año calendario
        (continuos o discontinuos), renovables excepcionalmente por igual
        período.
      </p>
      <p>
        Puede gestionarse a través de EDI (Empleado Digital) o por escrito (nota
        manuscrita o impresa) ante el titular de Repartición, Organismo o
        Establecimiento donde se preste servicios, indicando la cantidad de días
        requeridos.
      </p>
      <p>
        En todos los casos deberá adjuntarse (dentro de un plazo que no exceda
        las 72 horas), informe interdisciplinario emitido por la Secretaría de
        Lucha contra la Violencia a la Mujer y Trata de Personas, con la
        correspondiente certificación o constancia de dependencia judicial,
        policial, administrativa con competencia en la materia o Juzgado de Paz
        interviniente, que acredite las circunstancias que habiliten el
        otorgamiento de la misma.
      </p>
      <br />
      <p className="centrado">
        Fuente{" "}
        <a
          href="https://direccioninformaticajuridica.cba.gov.ar/Principal/Decretos/8917"
          target="_blank"
          rel="noopener noreferrer"
        >
          Decreto 1295/16 (Reglamentario de Ley 10318)
        </a>
      </p>
      <button onClick={() => window.history.back()}>Volver</button>
    </section>
  </div>
);

export default PorViolencia;
