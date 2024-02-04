import Grid from "../Grid.jsx";
import Hero from "../cards/Hero.jsx";
import educdb from "../../db/educ.js";

export default function Education(){
  
  return (
    <section>
      <h1> The State of Education  </h1>
      <hr/>
      <Grid>
	{educdb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}


