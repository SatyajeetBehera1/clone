import { Main } from "./components/HomePage/Main";
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
