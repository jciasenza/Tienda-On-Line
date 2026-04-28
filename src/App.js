import React from "react";
import { Header } from "./componentes/Header"
import { BrowserRouter as Router } from "react-router-dom"
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/DataProvider";
import { Carrito } from "./componentes/Carrito/index"
import { Footer } from "./componentes/Footer/Footer"
import { BsWhatsapp } from "react-icons/bs"

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router> 
        <Header />
        <Carrito />
        <Paginas />
        <a href="https://wa.me/?text=Hola%20quiero%20informacion" target="_blank" rel="noopener noreferrer" className="btn-flotante">
          <BsWhatsapp fontSize="40px" />
        </a>
        <Footer />
      </Router>
        
    </div>
   
    </DataProvider>
    
  );
}

export default App;
