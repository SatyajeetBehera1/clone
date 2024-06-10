import { Main } from "./components/HomePage/Main";
import { HotelMain } from "./components/Hotel/HotelMain";
import { PackagesMain } from "./components/Packages/PackagesMain";
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/hotel" exact element={<HotelMain />} />
        <Route path="/packages" exact element={<PackagesMain />} />
      </Routes>
    </div>
  );
}

export default App;
