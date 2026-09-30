import React from "react";

const Lar = () => (
  <div className="page-view">
    <section>
      <h2>Licencia Anual Reglamentaria</h2>
      <p>
        Requisito para usufructuar íntegramente: Haber prestado servicios como
        mínimo, seis (6) meses continuos o discontinuos en el año calendario al
        que corresponda el beneficio.
      </p>
      <p>
        Período de otorgamiento: Entre el 1º de Julio del año al que corresponda
        el beneficio y el 30 de junio del año siguiente.{" "}
      </p>
      <p>
        Podrá ser dividida y otorgada en dos (2) fracciones a solicitud del
        agente, o cuando por razones de servicio así se dispusiera.
      </p>
      <h3>Término de la Licencia segun Antigüedad</h3>
      <p>
        Se concederá de conformidad a la antigüedad que registre el agente al
        treinta y uno (31) de diciembre del año a que corresponda el beneficio.
      </p>
      <section className="contenedor">
        <div>
          <p></p>
        </div>
        <div>
          <p>menor a 6 meses</p>
        </div>
        <div>
          <p>1 día por mes o fracción mayor de 15 días corridos</p>
        </div>
        <div>
          <p> 6 meses</p>
        </div>
        <div>
          <p>hasta 5 años</p>
        </div>
        <div>
          <p>15 días hábiles</p>
        </div>
        <div>
          <p> Más de 5 años</p>
        </div>
        <div>
          <p>hasta 10 años</p>
        </div>
        <div>
          <p>20 días hábiles</p>
        </div>
        <div>
          <p> Más de 10 años</p>
        </div>
        <div>
          <p>hasta 15 años</p>
        </div>
        <div>
          <p>25 días hábiles</p>
        </div>
        <div>
          <p> Más de 15 años</p>
        </div>
        <div>
          <p>hasta 25 años</p>
        </div>
        <div>
          <p>30 días hábiles</p>
        </div>
        <div>
          <p> Más de 25 años</p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p>35 días hábiles</p>
        </div>
      </section>
      {/* <p>
      Cuando el agente registrare una antigüedad menor a seis (6) meses, el
      término de la licencia anual será de un (1) día por mes o fracción mayor
      de quince (15) días corridos.
    </p> */}
      <p>
        Cuando un matrimonio se desempeña en la Administración Pública
        Provincial, la Licencia Anual Ordinaria, deberá otorgarse en forma
        conjunta y simultánea, si así lo solicitaran.
      </p>
      <br />
      <p className="centrado">
        Fuente Art.48{" "}
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

export default Lar;
