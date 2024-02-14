import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import entrtdb from "../../db/entrt.js";

export default function Politics(){
  
  return (
    <section>
      <h1>Headlines On Entertainmaent</h1>
      <hr/>
      <Grid>
	{entrtdb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}

