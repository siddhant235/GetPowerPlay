import * as actionTypes from '../actionTypes'
import { updateObject } from '../utility'
const initialState={
    beers:[],
    likes:[],
    comments:[],
    sortedData:[],
    id:''
   
}
const fetchbeers=(state,action)=>{
    const updatedBeer = [action.data[0],...state.beers];
    // const Beerfinal = updatedBeer.concat(action.data[0]);
    console.log(action.id)
    return updateObject(state,{
       
      beers:updatedBeer,
      id:action.id
    })
}
const storeSortedData=(state,action)=>{
  return updateObject(state,
    {
      sortedData:action.sortedData
    })
}
const likes=(state,action)=>{
    let likecount={
        id:action.id,
        count:action.likeData
    }
    const like_post = [...state.likes];
    let obj = like_post.find((x) => x.id === action.id);
    
  if (obj) {
    let index = like_post.indexOf(obj);
    like_post[index].count = like_post[index].count + 1;
  
  } else {
    like_post.push(likecount);
   
  }
  return updateObject(state,{
      likes:like_post,
      
  })
}
const comments=(state,action)=>{
  let commentupdate={
    id:action.id,
    comment:[action.commentData]
}
const comment_post = [...state.comments];
let obj = comment_post.find((x) => x.id === action.id);

if (obj) {
let index = comment_post.indexOf(obj);
comment_post[index].comment =[...comment_post[index].comment ,action.commentData] ;

} else {
comment_post.push(commentupdate);

}
return updateObject(state,{
  comments:comment_post,
  
})    
}
const feedReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.FETCH_FEEDS:return fetchbeers(state,action);
        case actionTypes.LIKEDATA:return likes(state,action);
        case actionTypes.COMMENTDATA:return comments(state,action);
        case actionTypes.SORTEDDATA:return storeSortedData(state,action);
        default:return state;
    }
}
export default feedReducer;