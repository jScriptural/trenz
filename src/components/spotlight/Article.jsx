import {useParams,Link} from "react-router-dom";
import {useRef,useEffect,useState} from "react";
import article  from "./../../db/spotlight/article.js";
import listdb from "../../db/spotlight/list.js";

export default function Article(props){
  const params = useParams();
  const mainRef = useRef(null);
  const [langPref,setLangPref] = useState("eng");

  function handleBtnClick(evt){
    if(langPref == "eng")
      setLangPref("pidgin");
    else
      setLangPref("eng");
    console.log("clicked");
  }
  const param= params.article.replaceAll("-","_").toLowerCase();
  console.log(param);

  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
    if(langPref == "eng"){
      mainRef.current.innerHTML = article[param].html;
    }else if(article[param].pidginAvail){
      mainRef.current.innerHTML = article[param].pidginHtml;
    }

  },[langPref,param]);

  return (
    <section id="article">
    {article[param].pidginAvail && <div className="switch-lang">
	<button onClick={handleBtnClick}>{langPref == "eng"?"Pidgin":"English"}</button>
      </div>}
     <div className="title">
      <h1> {(langPref == "pidgin" && article[param].pidginAvail)?article[param].pidginTitle : article[param].title} </h1>
      <h4> Last updated on {article[param].pubdate} by {article[param].author}</h4>
     </div>
     <hr/>
     <main ref={mainRef} >
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
    </section>);
}
