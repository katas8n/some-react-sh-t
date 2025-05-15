import { useContext } from "react"; 
import { Footer, Header } from "./components";
import { Router } from "./router";
// import { IsAdminContext } from "./context/context"; 

import './App.css';

function App() {  
  return (
    <section className="h-[100vh] flex justify-between flex-col bg-fuchsia-800 text-cyan-200 px-10 py-5">
      <Header />
      <Router />
      <Footer />
    </section>
  )
}

export default App
