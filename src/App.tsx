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
          <Route path="/my-work" element={<Work/>}/>
          <Route path="/about-me" element={<About/>}/>
          <Route path="/contact-me" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
