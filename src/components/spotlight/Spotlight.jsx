import listdb from "../../db/spotlight/list.js";
import {Link} from "react-router-dom";
import {useEffect,useRef,useState} from "react";
import article from "../../db/spotlight/article.js";


export default function Spotlight(props){

  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  });

  console.log(Object.keys(article)[0]);
  return (
    <section id="spotlight">
      <h1> Spotlight </h1>
      <hr/>
      <main className="spotlighted-article">
	<div className="con">
	  <h2> <span className="material-symbols-outlined blink-anime">lightbulb</span> {listdb[0].replaceAll("-"," ").toUpperCase()}</h2>
	</div>
	<p> { article[Object.keys(article)[0]].bait } <Link to={"/spotlight/"+listdb[0].toLowerCase()}>Read more</Link></p>
      </main>
      <section className="icymi-con">
	<h3> ICYMI: </h3>
	< hr />
	<ul className="icymi">
	{listdb.map((article,index)=>(
	  <li key={index}> 
	  <Link to={"/spotlight/"+article.toLowerCase()} > {article.replaceAll("-"," ")} </Link>
	  </li>
	))}
	</ul>
      </section>
    </section>)
}
