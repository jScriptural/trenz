




export default function Hero(props){
  const {data} = props;
 // const regex = /.*?\/\/(.*?)\//;
  const domain = data.lnk.match(/.*?\/\/(.*?)\//)[1];

  return (
    <figure id="hero">
      <a href={data.lnk} target="_blank">
	<div className="img">
	  <img src={data.imgSrc} alt="image-news" />
	</div>
	<figcaption>
	  <p className="headline">
	    {data.hdl}<span className="tag">
	    <i className="fa fa-circle"></i>
	    {data.tag}</span>
	  </p>
	  <span className="domain">-{domain}-</span>
	</figcaption>
      </a>
    </figure>
  );
}