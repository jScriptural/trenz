import {Link} from "react-router-dom";
import {navLinks} from "./Header.jsx";

const socials = [
  {
    platform: "Facebook",
    link: "#",
  },
  {
    platform: "Twitter",
    link: "#",
  }
];

export default function Footer(){

  return (
    <section id="footer">
      <div className="socials">
	<h1>Follow Us</h1>
	<ul>
	  {socials.map((social,i)=>(<li key={i} className={social.platform+" social"}> <a href={social.link} target="_blank" title={"follow us on "+social.platform}>{social.platform}</a></li>
	  ))}
	</ul>
      </div>
      <div className="categories">
	<h1> Categories </h1>
	<ul>
	  {navLinks.map((link,i)=>(<li className="nav-links" key={i}>
	    <Link className="link" to={link.toLowerCase()}>{link}</Link>
	    </li>
	  ))}
	</ul>
      </div>
      <div className="copyright"><span>&copy;{new Date().getFullYear()}</span></div>
    </section>
  );
}

