import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import poldb from "../../db/pol.js";

export default function Politics(){
  
  return (
    <section>
      <h1> Headlines On Politics</h1>
      <hr/>
      <Grid>
	{poldb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}


