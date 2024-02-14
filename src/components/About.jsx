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
      <h1> About Us </h1>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales magna ac molestie feugiat. Morbi efficitur pharetra nunc, semper viverra enim luctus lobortis. Fusce leo eros, sodales ut leo vel, efficitur tincidunt erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis risus ac ipsum sollicitudin porta. Ut eu nisi eros. Maecenas ut dignissim elit. Fusce suscipit nisi porttitor metus tempus, cursus imperdiet libero tempor. Mauris iaculis blandit tellus, a finibus ante varius in. Morbi ac ornare nisl, id sollicitudin ligula. Ut vestibulum elementum blandit. Sed aliquam ut nulla eu sodales. Cras vitae ex fermentum, viverra tortor ac, venenatis est.

Curabitur non lectus non tellus placerat ornare. Mauris dignissim dapibus vestibulum. Integer sit amet mollis libero. Maecenas felis urna, convallis euismod nisi at, euismod posuere augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet lacus rutrum, hendrerit metus a, sollicitudin diam. Duis sit amet rhoncus dui, a gravida neque. Quisque quis ornare tellus. Suspendisse sed sapien ac quam interdum cursus vel ut lacus. Praesent eleifend bibendum nulla, quis ornare mi eleifend a. Etiam congue ultricies elit, ac pharetra magna hendrerit sed. Morbi lacus sem, venenatis luctus dignissim ut, molestie ut magna. Quisque condimentum, felis et venenatis porttitor, erat ligula rutrum massa, sit amet interdum diam ipsum sed dui. </p>
    </section>
  );
}
