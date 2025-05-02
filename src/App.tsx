import { Route } from "react-router";
import { Routes } from "react-router";
import StaticLayout from "./components/layout/staticLayout";
import Home from "./pages/staticPages/home";
import Work from "./pages/staticPages/work";
import About from "./pages/staticPages/about";
import Contact from "./pages/staticPages/contact";

const App = () => {
  return (
    <>  
      <Routes>
        <Route element={<StaticLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
