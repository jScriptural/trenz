import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import busdb from "../../db/bus.js";

export default function Business(){
  
  return (
    <section>
      <h1> Business News</h1>
      <hr/>
      <Grid>
	{busdb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}

