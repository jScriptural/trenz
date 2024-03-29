import {useEffect} from "react";
import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import sportdb from "../../db/sport.js";

export default function Sport(){
 
  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left:0});
  });

  return (
    <section>
      <h1> Sport News </h1>
      <hr/>
      <Grid>
	{sportdb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}
