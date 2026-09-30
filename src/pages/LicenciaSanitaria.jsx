import React from "react";

const LicenciaSanitaria = () => (
  <div className="page-view">
    <section>
      <h2>Licencia Sanitaria</h2>
      <p>
        Solo incluye al personal que integra los equipos de salud (Ley N° 7625)
        y que presta servicio efectivo en los Hospitales Públicos.
      </p>
      {/* <p>
        Para ser gozarda íntegramente, el/la agente deberá haber prestado
        servicios como mínimo durante tres (3) meses continuos o discontinuos en
        el semestre calendario al que corresponda el beneficio..
      </p> */}
      <p>
        Es de uso Obligatorio y consta de siete (7) días corridos, no
        postergables, ni acumulables.
      </p>
      <p>
        Corresponden 15 días corridos si se trata de personal que utiliza
        equipos de rayos X.
      </p>
      <p>
        Se usufructuará entre el quinto (5to) y sexto (6to) mes posterior a la
        finalización de la licencia anual ordinaria.
      </p>
      <p>
        En el caso de que ésta última haya sido fraccionada, la licencia
        sanitaria no podrá ser consecutiva al segundo (2do.) período y deberá
        ser gozada entre el quinto (5to.) y sexto (6to.) mes posterior a la
        finalización del primer período.
      </p>

      <p>
        La Administración se reserva el derecho de postergar el otorgamiento de
        la licencia por resolución fundada.
      </p>
      <p>
        En todos los casos, la autoridad competente deberá garantizar los
        servicios de guardia mínimos con el fin de no resentir la prestación del
        servicio.
      </p>
      <br />
      <p className="centrado">
        Fuente Art.49{" "}
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
          Ley 7525
        </a>{" "}
        y sus Decretos reglamentarios
      </p>
      <button onClick={() => window.history.back()}>Volver</button>
    </section>
  </div>
);

export default LicenciaSanitaria;
