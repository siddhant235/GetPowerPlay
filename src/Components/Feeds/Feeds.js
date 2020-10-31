import React from 'react';
import {connect} from 'react-redux';
import './Feeds.css'
import * as FeedAction from '../../store/actions/FeedAction'
import Button from 'react-bootstrap/Button';

const Feed=(props)=>{
    const[like,setlike]=React.useState(0)
    const[comment,setcomment]=React.useState('');
    const [count,setcount]=React.useState('')
    const[showComment,setShowComment]=React.useState(false);
    React.useEffect(()=>{
        props.onfetchbeer();
    //    setInterval(()=>{
    //     props.onfetchbeer();
    //    },5000) 
    },[])
   
    const likes_Counter=(likes,id)=>{
        
        likes=likes+1;
        const filterlike=props.like?.filter(post=>post.id===id)
        console.log(filterlike[0]?.count)
        if(filterlike[0])
        {
            setcount(filterlike[0].count)
        }
        setlike(likes);
        console.log(props.like)
        props.onStorelikes(likes,id);

    }
    const comments=()=>{
       setShowComment(true);
    }
    console.log(props.like)
    return(
        <React.Fragment>
        {
    props.beers?.map((info) => {
        const filterlike=props.like?.filter(post=>post.id===info.id)
         
        return (
          <div id="News-details">
            <div className="News-intern">
                
              <h6>{info.name}</h6>
        <h4><br/>{info.tagline}</h4>
        <details>
                <summary>Content :</summary>
                <p>
                  {info.description}
                </p>
              </details>
        <img src={info.image_url} alt="imag" style={{height:"200px",width:"200px",margin:"auto",display:"flex",justifyContent:'center'}}/>
              
            
              {/* <a className="read" href={info.url} target="_blank">
                Read Now
              </a> */}
              <div className="likeComment">
                  {/* {console.log(props.like)} */}
            
            <p className="like" onClick={()=>likes_Counter(like,info.id)}><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{filterlike[0]?.count}</p>
               
              <p onClick={comments} className="comment"><i class="fa fa-comments-o" aria-hidden="true"></i></p>
            </div>
          { showComment &&(<div>
              <div className="CommentBox">
                <input type="text" placeholder="Your thoughts......" style={{borderRadius:"20px",outline:"none"}}
                  onChange={(event)=>setcomment(event.target.value)}
                />
                 <Button variant="primary">Primary</Button>
                </div>
                <p></p>
               
              </div>)}
            </div>
          </div>
        );
      })};
    


        </React.Fragment>
    )
}
const mapStateToProps=(state)=>{
    return{
        beers:state.feed.beers,
        like:state.feed.likes,
        count:state.feed.counts
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onfetchbeer:()=>dispatch(FeedAction.fetchBeers()),
        onStorelikes:(likeData,id)=>dispatch(FeedAction.setLikes(likeData,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Feed);