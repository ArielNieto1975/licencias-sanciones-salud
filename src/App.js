
import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";


import Lar from "./pages/Lar";
import JustidicacionInasitencia from "./pages/JustificacionInasistencia.jsx";
import LicenciaSanitaria from "./pages/LicenciaSanitaria.jsx";
import FrancoCompensatorio from "./pages/Franco.jsx";
import ParoTransporte from "./pages/ParoTransporte.jsx";
import LicenciaExamen from "./pages/LicenciaExamen.jsx";
import Maternidad from "./pages/LicenciaMaternidad.jsx";
import Nacimiento from "./pages/Nacimiento.jsx";
import Adopcion from "./pages/Adopcion.jsx";
import Matrimonio from "./pages/Matrimonio.jsx";
import Fallecimiento from "./pages/Fallecimiento.jsx";
import PorViolencia from "./pages/Violencia.jsx";

import DonacionSangre from "./pages/DonacionSangre.jsx";
import Expediente from "./pages/Expediente.jsx";
import IncumplimientoHorario from "./pages/IncumplimientoHorario.jsx";
import InaistenciasInjustificadas from "./pages/InasistenciasInjustificadas.jsx";
import AbandonoServicio from "./pages/AbandonoServicio.jsx";
import FaltaRespeto from "./pages/FaltaRespeto.jsx";
import AbandonoCargo from "./pages/AbandonoCargo.jsx";
import Accidente from "./pages/AccidenteOEnfermedad.jsx";
import RazonesSalud from "./pages/RazonesSalud.jsx";
import Negligencia from "./pages/Negligencia.jsx";
import AutoridadAplicacion from "./pages/AutoridadAplicacion.jsx";

// sanciones
import Sanciones from "./pages/Sanciones.jsx";
// sanciones

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            {/* aqui comienza sanciones */}
            <Route path="/sanciones" element={<Sanciones />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/IncumplimientoHorario"
              element={<IncumplimientoHorario />}
            />
            <Route
              path="/InaistenciasInjustificadas"
              element={<InaistenciasInjustificadas />}
            />
            <Route path="/AbandonoServicio" element={<AbandonoServicio />} />
            <Route path="/FaltaRespeto" element={<FaltaRespeto />} />
            <Route path="/AbandonoCargo" element={<AbandonoCargo />} />
            <Route path="/Negligencia" element={<Negligencia />} />
            <Route path="/AutoridadAplicacion" element={<AutoridadAplicacion />} />
            {/* aqui temina sanciones */}

            <Route path="/Lar" element={<Lar />} />
            <Route
              path="/JustidicacionInasitencia"
              element={<JustidicacionInasitencia />}
            />
            <Route path="/LicenciaSanitaria" element={<LicenciaSanitaria />} />
            <Route path="/LicenciaExamen" element={<LicenciaExamen />} />
            <Route path="/Maternidad" element={<Maternidad />} />
            <Route path="/Nacimiento" element={<Nacimiento />} />
            <Route path="/Adopcion" element={<Adopcion />} />
            <Route path="/Matrimonio" element={<Matrimonio />} />
            <Route path="/Fallecimiento" element={<Fallecimiento />} />
            <Route path="/PorViolencia" element={<PorViolencia />} />
            <Route path="/DonacionSangre" element={<DonacionSangre />} />
            <Route path="/ParoTransporte" element={<ParoTransporte />} />
            <Route path="/Franco" element={<FrancoCompensatorio />} />
            <Route path="/Accidente" element={<Accidente />} />
            <Route path="/RazonesSalud" element={<RazonesSalud />} />
            <Route path="/Expediente" element={<Expediente />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
