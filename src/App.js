import Home from "./pages/Home";
import Party from "./pages/Party";
import Cloud from "./pages/Cloud";
import Toolbar from "./components/Toolbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/party" element={<Party />} />
        <Route path="/cloud" element={<Cloud />} />
      </Routes>
    </>
  );
}

export default App;
