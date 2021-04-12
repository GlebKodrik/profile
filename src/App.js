import "./App.css";
import { Header } from "./components/Header/Header";
import {About} from "./components/About/About";
import {Footer} from "./components/Footer/Footer";

const App = () => (
  <div className="app">
    <Header />
    <About />
    <Footer />
  </div>
);

export default App;
