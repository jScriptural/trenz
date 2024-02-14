
import {useEffect} from "react";
import Hero from "./cards/Hero.jsx";
import Grid from "./Grid.jsx";

import techdb from "../db/tech.js";
import sportdb from "../db/sport.js";
import busdb from "../db/bus.js";
import poldb from "../db/pol.js";
import scidb from "../db/sci.js";


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
  arr.sort(()=>Math.random() - 0.5);
}

const h1 = {
  marginBottom: "1rem",
}
const h2 =  {
  marginTop: "1rem",
}

combine(anondb,busdb,techdb,sportdb,poldb,scidb);

export default function Home(){
  shuffle(anondb);
  let poster  = Math.floor(Math.random()*(anondb.length));


  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left:0});
  });

  return (
    <section id="home">
      <h1 style={h1}>What&apos;s popping <br/> Trends </h1>
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
