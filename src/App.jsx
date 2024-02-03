import {Routes,Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Technology  from "./components/categories/Technology.jsx";
import Education  from "./components/categories/Education.jsx";
import Business  from "./components/categories/Business.jsx";
import Politics  from "./components/categories/Politics.jsx";
import Sport from "./components/categories/Sport.jsx";



function App() {

  return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={< Home />} />
      <Route path="/technology" element={< Technology />} />
      <Route path="/education" element={< Education />} />
      <Route path="/business" element={< Business />} />
      <Route path="/politics" element={< Politics />} />
      <Route path="/sports" element={< Sport />} />
    </Routes>
    </>
  )
}

export default App
