import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AddBookPage from "./Pages/AddBookPage/AddBookPage";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
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
