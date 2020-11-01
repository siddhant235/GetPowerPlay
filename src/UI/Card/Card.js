import React from "react";
import "./Card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = (props) => {
  const[url,seturl]=React.useState('')
  React.useEffect(()=>{
    if(props.image)
    {
      seturl(props.image)
    }
    else{
      seturl("https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101032/112815935-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6")
    }
  },[])
  
  return (
    <div className="Cards">
      <div className="Card">
        <LazyLoadImage
          className="card-img-top"
          alt="Card Cap"
          src={url}
          // placeholderSrc={}
          effect="blur"
          delayMethod="debounce"
          delayTime={5000}
        />

        <div className="card-body">
         
       <strong><p className="card-title">{props.name}</p></strong>
       <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{props.like}
        
        </div>
      </div>
    </div>
  );
};
export default Card;
