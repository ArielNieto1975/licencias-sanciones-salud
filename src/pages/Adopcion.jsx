import React from "react";

const Adopcion = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por Adopción</h2>
      <p>
        Se otorga a la/el agente que hubiera obtenido por resolución judicial la
        adopción o guarda con fines de adopción de un niño/a, de hasta siete (7)
        años de edad.
      </p>
      <p>
        Corresponde una licencia de 100 días corridos a partir de la fecha de la
        resolución judicial (que debe presentarse autenticada) y de ocho (8)
        días para la pareja conviviente.
      </p>
      <p>
        Si la adopción fuera múltiple o de un/a niño/a con discapacidad o
        enfermedad grave, el plazo se extiende a 200 y 14 días, respectivamente.
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

export default Adopcion;
