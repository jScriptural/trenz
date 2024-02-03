import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import logo from "../assets/trenz-logo-large.png";
import menuIcon from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-menu-close.svg";
import {Link} from "react-router-dom";

const navLinks = [
  "Home",
  "Technology",
  "Education",
  "Business",
  "Politics",
  "Sports",
];

const variants = {
  start: {
    opacity: 0,
  },
  finish: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    }
  },
  exit: {
    x: "100vw",
    transition: {
	duration: 0.3,
	ease: "easeInOut",
    }
  }
}

  
export default function Header(){
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header">
      <section>
    <object type="image/png" data={logo} arial-label="logo">
	</object>

	<nav> 
	  <div className="menu-open" onClick={()=>setShowMenu(true)} role="region">
	    <img  src={menuIcon}  alt="open-menu-icon"/>
	  </div>
	  <AnimatePresence>
	    {showMenu && (<motion.div  variants={variants} initial="start" animate="finish" exit="exit" className="nav-mobile" role="region">
	      <div className="menu-close" onClick={()=>setShowMenu(false)} role="group">
		<img  src={menuClose} alt="close-menu-icon"/>
	      </div>
	      <ul>
	      {navLinks.map((link,i)=>(
		<li className="nav-links" key={i}>
		  <Link className="link" to={link.toLowerCase()}>
		    {link}
		  </Link>
		</li>
	      ))}
	      </ul>
	    </motion.div>)}
	  </AnimatePresence>
	  <div className="nav-desktop">
	    <ul>
	    {navLinks.map((link,i)=>(
	      <li className="nav-links" key={i}>
		<Link className="link" to={link.toLowerCase()}>
	      {link}
	      </Link>
	      </li>
	    ))}
	    </ul>
	  </div>
	</nav>
      </section>
    </header>
  );
}
	
