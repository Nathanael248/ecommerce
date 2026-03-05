import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
