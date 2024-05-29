import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Project from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
