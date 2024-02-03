
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
    let i = arr.length;
    let j=0;
    while(i > 0){
      anondb.push(arr[j++]);
      if(j >= 5)
	break;
      --i;
    }
  }
}


function shuffle(arr){
  arr.sort((a,b)=>Math.random() - 0.5);
}


combine(anondb,educdb,busdb,techdb,sportdb,poldb);
export default function Home(props){
  shuffle(anondb);
  let i  = Math.floor(Math.random()*(anondb.length));
  console.log(i)
  return (
    <section id="home">
      <h1> Trending | what's popping</h1>
      <Hero data={anondb[i]}></Hero>
      <Grid>
	{anondb.map((data,i)=>(
	  <Hero data={data} key={i}></Hero>
	))}
      </Grid>
    </section>
  );
}
