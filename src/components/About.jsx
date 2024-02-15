import {useEffect} from "react";


export default function About() {

  useEffect(()=>{
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left:0});
  });

  return (
    <section id="about">
      <h1> About trenz </h1>
      <hr/>
      <p>  
	Welcome to trenz, your one-stop hub for navigating the ever-evolving currents of information and popping news.
    Our mission is to empower you with relevant, thought-provoking and diverse perspective across the dynamic landscapes of science, technology, business, sports and politics.
    We  meticulously curate trending topics, news and inspiring and informative articles, offering you a streamlined path to stay informed.<br/>
    <br/>
    <b>Science:</b> Explore the boundless frontiers of human ingenuity.
    Delve into groundbreaking discoveries and stay abreast latest advancements in physics, medicine, biology etc.<br/>
    <br/>
    <b>Technology:</b> Explore the fast-changing l	ndscape of technology, where innovation shapes the future.
    Our carefully selected links provide insight into the latest gadgets, software and emerging technology, ranging from  artificial intelligence and robotics to cutting edge advancement in energy, communication and computing, empowering you with knowledge to navigate the digital age with confidence and curiosity.<br/>
    <br/>
    <b>Business:</b> In the realm of business, we curate links that spotlight industry trends, economic analyses and entrepreneural success stories.
    Whether you are a seasoned investor, a budding entrepreneur or simply curious about the economic forces shaping our world, we provide you with links to digestible summaries and in-depth analysis from reputable  sources.<br/>
    <br/>
    <b>Sports:</b> Immerse yourself in the thrilling world of athletics. 
    From the thrill of the game to the strategic maneuvers behind the scenes, our links provide a comprehensive view of the sports world, catering fans of all kinds.<br/>
    <br/>
    <b>Politics:</b> Decipher the complex web of political discourse and understand the forces shaping our society.
    Our links offer a nuanced perspective in political developments ensuring you have the information needed to engage in meaningful conversation about issues that shape our societies.<br/>
    <br/>

    <b>Beyond the headlines:</b><br/>
      We go beyond aggregating news headlines. we offer you 
    <ul>
    <li><strong>Curated content:</strong> We at trenz, filters through the vast ocean of information, handpicking the most relevant, insightful and thought-provoking pieces for you. </li>
    <li><strong>Diverse perspective:</strong> We believe in presenting a balanced view of the world, our links are curated from different sources and platforms to help you get a balanced perpective on issues.</li>
    </ul>
    <br/>
    At trenz, we believe that knowledge is power, and we are dedicated to empower our visitors with information they need to navigate the complexities of our interconnected world.
    Welcome to a platform where trends converge.
      </p>
    </section>
  );
}
