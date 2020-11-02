import React from 'react';
import {connect} from 'react-redux';
import './Feeds.css'
import * as FeedAction from '../../store/actions/FeedAction'

const Feed=(props)=>{
    const[comment,setcomment]=React.useState('');
    const [count,setcount]=React.useState(1)
    const[showComment,setShowComment]=React.useState(true);
    React.useEffect(()=>{
        props.onfetchbeer();
       setInterval(()=>{
        props.onfetchbeer();
       },5000) 

    
    },[])
   
    const likes_Counter=(id)=>{
        
        
      
        props.onStorelikes(count,id);

    }
    const comments=(commentData,id)=>{
    setcomment('');
      setShowComment(true);
       
       props.onStoreComments(commentData,id)
    }
    console.log(props.comments)
    return(
        <React.Fragment>
        {
    props.beers?.map((info) => {
        const filterlike=props.like?.filter(post=>post.id===info.id)
        const filterComment=props.comments?.filter(post=>post.id===info.id)
         
        return (
          <div id="Post-details" key={info.id}>
            <div className="Post-intern">
                
              <h6>{info.name}</h6>
              <div style={{}}>
        <h4><br/>{info.tagline}</h4>
        <p className="like" style={{marginLeft:'15.5em'}} onClick={()=>likes_Counter(info.id)}>{filterlike[0]?.count}&nbsp;<i class="fa fa-thumbs-o-up" aria-hidden="true"></i></p>
        </div>
        <details>
                <summary>Content :</summary>
                <p>
                  {info.description}
                </p>
              </details>
            
        <img src={info.image_url?info.image_url:"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101032/112815935-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6"} alt="imag" style={{height:"200px",width:"200px",margin:"auto",display:"flex",justifyContent:'center'}}/>
       
      
              {/* <a className="read" href={info.url} target="_blank">
                Read Now
              </a> */}
              <div className="likeComment">
                  {/* {console.log(props.like)} */}
            
          
               
            
            </div>
          { showComment &&(<div>
              <div className="CommentBox" key={info.id}>
              <p  className="comment"><i class="fa fa-comments-o" aria-hidden="true"></i></p>
                <input type="text" value={comment} placeholder="Your thoughts......" style={{borderRadius:"20px",outline:"none"}}
                  onChange={(event)=>setcomment(event.target.value)}
                />
                <i onClick={()=>comments(comment,info.id)} className="far fa-paper-plane"></i>
               
                </div>
               
                <details >
                <summary>Comments :</summary>
                <p>
                
                {filterComment[0]?.comment}<br/>
                </p>
              </details>
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
        count:state.feed.counts,
        comments:state.feed.comments,
        id:state.feed.id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onfetchbeer:()=>dispatch(FeedAction.fetchBeers()),
        onStorelikes:(likeData,id)=>dispatch(FeedAction.setLikes(likeData,id)),
        onStoreComments:(commentData,id)=>dispatch(FeedAction.Comments(commentData,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Feed);