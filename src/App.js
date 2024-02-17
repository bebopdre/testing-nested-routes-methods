import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import NavBar from "./components/NavBar/NavBar";
import './App.scss';
import BookInfo from "./components/BookInfo/BookInfo";
import Other from "./components/Other/Other";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/first/:bookID' element={<FirstPage />} >
          <Route path='info' element={<BookInfo />} />
          <Route path='other' element={<Other />} />
        </Route>
        <Route path='/second' element={<SecondPage />} >
          <Route path='info' element={<BookInfo />} />
          <Route path='other' element={<Other />} />
        </Route>
        <Route path='/third/:bookID' element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
