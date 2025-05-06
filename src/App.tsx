
import { Routes,Route } from "react-router";
import StaticLayout from "./components/layout/staticLayout";
import Home from "./pages/staticPages/home";

import About from "./pages/staticPages/about";
import Contact from "./pages/staticPages/contact";
import Projects from "./pages/staticPages/projects";

const App = () => {
  return (
    <>  
      <Routes>
        <Route element={<StaticLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
