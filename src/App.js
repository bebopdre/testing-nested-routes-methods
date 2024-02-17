import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/first' element={<FirstPage />} />
        <Route path='/second' element={<SecondPage />} />
        <Route path='/third' element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
