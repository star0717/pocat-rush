import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import FirstTest from "./Pages/FirstTest";
import Main from "./Pages/Main";

function App() {
  return (
    <>
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} index />
          <Route path="/test" element={<FirstTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
