import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Estadistica from '../pages/Estadisticas';
import Productos from '../pages/Productos';

function MyRoutes() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/estadisticas" element={<Estadistica />} />
    </Routes>
  );
}

export default MyRoutes;