import {useEffect} from "react";
import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import scidb from "../../db/sci.js";

export default function Science(){
  
  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left:0});
  });

  return (
    <section>
      <h1>Science & Discoveries </h1>
      <hr/>
      <Grid>
	{scidb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}

