import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
//import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import FAQ from "./components/FAQ";
import Features from "./components/Features";

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <br />
      <Card />
      <Features />
      <FAQ />
    </>
  );
}

export default App;
