import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Languages } from "./components/Languages";
import { Languages_2 } from "./components/Langage_2";
import { Space_void } from "./components/Space_void";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Languages/>
      <Space_void/>
      <Languages_2/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;