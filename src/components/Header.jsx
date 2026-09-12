// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => (
//   <header className="main-header">
//     <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
//       <h1>LICENCIAS SALUD</h1>
//       <div class="alerta-licencias">
//         <p>
//           <strong>Aviso Importante:</strong> El presente instructivo es a los
//           solos efectos de agilizar la temática de autorización de licencia y
//           bajo ningún punto pretende reemplazar las leyes vigentes.
//         </p>
//       </div>
//     </Link>
//   </header>
// );

// export default Header;

// sanciones

import React from "react";
import { 
  // Link, 
  useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSanciones = location.pathname === "/sanciones";

  const handleToggle = () => {
    if (isSanciones) {
      navigate("/");
    } else {
      navigate("/sanciones");
    }
  };

  return (
    <header className="main-header">
      <div>
        <h1>
          {isSanciones
            ? "LICENCIAS Y SANCIONES SALUD"
            : "LICENCIAS Y SANCIONES SALUD"}
        </h1>

        {!isSanciones && (
          <div className="alerta-licencias">
            <p>
              <strong>Aviso Importante:</strong> El presente instructivo reviste carácter meramente orientativo, como guía práctica para respaldar la toma de desiciones en la autorización de licencias y aplicación del regimen desciplinario. No sustituye ni reemplaza el marco normativo y reglamentario legalmente vigente.
            </p>
          </div>
        )}

        {isSanciones && (
          <div className="alerta-licencias">
            <p>
              <strong>Aviso Importante:</strong> El presente instructivo reviste carácter meramente orientativo, como guía práctica para respaldar la toma de desiciones en la autorización de licencias y aplicación del regimen desciplinario. No sustituye ni reemplaza el marco normativo y reglamentario legalmente vigente.
            </p>
          </div>
        )}
      </div>
      <button onClick={handleToggle} className="toggle-button">
        {isSanciones ? "Volver a Licencias" : "Ir a Sanciones"}
      </button>
    </header>
  );
};

export default Header;
