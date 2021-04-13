import "./App.css";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Project } from "./components/Project/Project";

const App = () => (
  <div className="app">
    <Header />
    <About />
    <Project />
    <Footer />
  </div>
);

export default App;
