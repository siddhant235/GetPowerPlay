import * as actionTypes from '../actionTypes'
import { updateObject } from '../utility'
const initialState={
    beers:[],
    likes:[],
   
}
const fetchbeers=(state,action)=>{
    const updatedBeer = [action.data[0],...state.beers];
    // const Beerfinal = updatedBeer.concat(action.data[0]);
    console.log(updatedBeer)
    return updateObject(state,{
       
      beers:updatedBeer
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
const feedReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.FETCH_FEEDS:return fetchbeers(state,action);
        case actionTypes.LIKEDATA:return likes(state,action)
        default:return state;
    }
}
export default feedReducer;