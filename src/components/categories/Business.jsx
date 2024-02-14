import {useEffect} from "react";
import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import busdb from "../../db/bus.js";
export default function Business(){

  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left:0});
  });

  return (
    <section>
      <h1> Business headlines</h1>
      <hr/>
      <Grid>
	{busdb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}

