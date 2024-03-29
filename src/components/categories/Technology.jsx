import {useEffect} from "react";
import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import techdb from "../../db/tech.js";

export default function Technology(){
  
  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left:0});
  });

  return (
    <section>
      <h1>Technology Trend </h1>
      <hr/>
      <Grid>
	{techdb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}

