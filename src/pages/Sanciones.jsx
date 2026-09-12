import React from "react";

import { useNavigate } from "react-router-dom";

const Sanciones = () =>
  //   (
  //   <div className="sanciones-container">
  //     <h1 className="sanciones-title">SANCIONES</h1>
  //     <p className="sanciones-text">
  //       Página dedicada a la gestión y consulta de sanciones administrativas.
  //     </p>
  //   </div>
  // );

  {
    const navigate = useNavigate();

    const menuItems = [
      { title: "Incumplimiento Horario", path: "/IncumplimientoHorario" },
      {
        title: "Inasistencias Injustificadas",
        path: "/InaistenciasInjustificadas",
      },
      { title: "Abandono de Servicio", path: "/AbandonoServicio" },
      { title: "Falta de Respeto", path: "/FaltaRespeto" },
      { title: "Abandono de Cargo", path: "/AbandonoCargo" },
      { title: "Negligencia en Funciones", path: "/Negligencia" },
      { title: "Autoridad de Aplicación", path: "/AutoridadAplicacion" },
    ];

    return (
      <div className="grid-container">
        <p className="avisoSancion">Todo agente es directa y personalmente responsable de los actos ilícitos que ejecute, aunque los realice con el pretexto de ejercer funciones o de realizar sus tareas (Art. 114 Ley 7625 y Art.65 Ley 7233).</p>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="access-card"
            onClick={() => navigate(item.path)}
          >
            <h2>{item.title}</h2>
          </div>
        ))}
        <p className="avisoSancion"> Toda sanción se graduará teniendo en cuenta la gravedad de la falta o infracción, los antecedentes del agente y en su caso, los perjuicios causados. El personal no podrá ser sancionado sino una sola vez por la misma falta, ni sumariado después de haber transcurrido tres (3) años de cometida la misma, salvo que ésta lesione el patrimonio del Estado o constituya delito, casos en los cuales será de aplicación lo preceptuado sobre la prescripción por las leyes en la materia.</p>
      </div>
    );
  };

export default Sanciones;
