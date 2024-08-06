import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import FirstTest from "./Pages/FirstTest";
import Main from "./Pages/Main";
import WhatsNew from "./Pages/WhatsNew";
import Ranking from "./Pages/Ranking";
import Community from "./Pages/Community";

function App() {
  return (
    <>
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} index />
          <Route path="/test" element={<FirstTest />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
