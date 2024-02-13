import {Link} from "react-router-dom";
import {navLinks} from "./Header.jsx";

const socials = [
  {
    platform: "Facebook",
    link: "https://www.facebook.com/trenzlinks?mibextid=ZbWKwL",
  },
  {
    platform: "Twitter",
    link: "https://x.com/trenzlinks?t=RNmDx4Xya_7XLm1pvMxlvQ&s=09",
  }
];

export default function Footer(){

  return (
    <section id="footer">
      <div className="socials">
	<h2>Follow Us</h2>
	<ul>
	  {socials.map((social,i)=>(<li key={i} className={social.platform+" social"}> <a href={social.link} target="_blank" title={"follow us on "+social.platform}>{social.platform}</a></li>
	  ))}
	</ul>
      </div>
      <div className="categories">
	<h2> Categories </h2>
	<ul>
	  {navLinks.map((link,i)=>(<li className="nav-links" key={i}>
	    <Link className="link" to={link.toLowerCase()}>{link}</Link>
	    </li>
	  ))}
	</ul>
      </div>
      <div className="contact"><h3>Send us a mail:</h3> <p> trenznewssite@gmail.com </p></div>
      <div className="copyright"><span>&copy;{new Date().getFullYear()}</span></div>
    </section>
  );
}

