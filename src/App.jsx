import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import GasStation from "./pages/GasStation";
import TrafficForecast from "./pages/TrafficForecast";
import FindOffice from "./pages/FindOffice";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="find-office" element={<FindOffice />} />
        <Route path="gas-station" element={<GasStation />} />
        <Route path="traffic-forecast" element={<TrafficForecast />} />
      </Route>
    </Routes>
  );
};

export default App;
