import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AddBookPage from "./Pages/AddBookPage/AddBookPage";
import Headers from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Headers />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/addBook" element={<AddBookPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
