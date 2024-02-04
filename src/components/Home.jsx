
import Hero from "./cards/Hero.jsx";
import Grid from "./Grid.jsx";

import techdb from "../db/tech.js";
import educdb from "../db/educ.js";
import sportdb from "../db/sport.js";
import busdb from "../db/bus.js";
import poldb from "../db/pol.js";


const anondb = [];

function combine(anondb,...args){
  for(let arr of args){
    let len = arr.length;
    let j = 0;
    while(len > 0){
      anondb.push(arr[j++]);
      if(j >= 6)
	break;
      --len;
    }
  }
}


function shuffle(arr){
  arr.sort((a,b)=>Math.random() - 0.5);
}

const h1 = {
  marginBottom: "1rem",
}
const h2 =  {
  marginTop: "1rem",
}

combine(anondb,educdb,busdb,techdb,sportdb,poldb);

export default function Home(props){
  shuffle(anondb);
  let poster  = Math.floor(Math.random()*(anondb.length));

  return (
    <section id="home">
      <h1 style={h1}>What's popping | Trends </h1>
      <Hero data={anondb[poster]}></Hero>
      <h2 style={h2}>Also trending</h2>
      <hr/>
      <Grid>
	{anondb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}
