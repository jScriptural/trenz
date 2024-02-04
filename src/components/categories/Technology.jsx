import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import techdb from "../../db/tech.js";

export default function Technology(){
  
  return (
    <section>
      <h1> Tech trends </h1>
      <hr/>
      <Grid>
	{techdb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}

