import {Routes,Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Quiz from "./components/Quiz.jsx";
import AnsContext from "./context/AnsContext.jsx";
import Science  from "./components/categories/Science.jsx";
import Technology  from "./components/categories/Technology.jsx";
import Business  from "./components/categories/Business.jsx";
import Politics  from "./components/categories/Politics.jsx";
import Sport from "./components/categories/Sport.jsx";



function App() {

  return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={< Home />} />
      <Route path="/about us" element={< About />} />
      <Route path="/technology" element={< Technology />} />
      <Route path="/business" element={< Business />} />
      <Route path="/politics" element={< Politics />} />
      <Route path="/sports" element={< Sport />} />
      <Route path="/science" element={< Science />} />
      <Route path="/quiz" element={<AnsContext>< Quiz /> </AnsContext>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
