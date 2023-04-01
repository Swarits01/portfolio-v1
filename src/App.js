import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
     
     <NavBar/>
     <Home/>
     <About/>
     <Experience/>
     <Work/>
     <Contact/>
    </div>
  );
}

export default App;
