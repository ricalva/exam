import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Home } from "./paginas/home";
import { Coldplay1 } from "./wallpaper/coldplay1";
import { Coldplay2 } from "./wallpaper/coldplay2";
import { Coldplay3 } from "./wallpaper/coldplay3";
import { Coldplay4 } from "./wallpaper/coldplay4";
import { Coldplay5 } from "./wallpaper/coldplay5";
import { Coldplay6 } from "./wallpaper/coldplay6";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wallpaper/coldplay1" element={<Coldplay1/>}/>
          <Route path="/wallpaper/coldplay2" element={<Coldplay2/>}/>
          <Route path="/wallpaper/coldplay3" element={<Coldplay3/>}/>
          <Route path="/wallpaper/coldplay4" element={<Coldplay4/>}/>
          <Route path="/wallpaper/coldplay5" element={<Coldplay5/>}/>
          <Route path="/wallpaper/coldplay6" element={<Coldplay6/>}/>
           </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
