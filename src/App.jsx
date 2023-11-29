import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Nav from "./Layouts/Nav";
import { ReactDOM } from "react";
import Start from "./components/Start";
import Query1 from "./components/Query1";
import Query2 from "./components/Query2";
import Thank from "./components/Thank";

function App() {
  return (
    <div data-theme="cupcake" className="App">

    <Nav/>
    <div className="mainContainer">
      
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/query1" element={<Query1 />} />
        <Route path="/query2" element={<Query2 />} />
        <Route path="/last" element={<Thank />} />
      </Routes>
    

    </div>
    <Footer/>

    </div>
  );
}

export default App;
