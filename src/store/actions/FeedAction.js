import * as actionTypes from '../actionTypes';
import axios from 'axios';
export const fetchedData=(data,id)=>{
    return{
        type:actionTypes.FETCH_FEEDS,
        data:data,
        id:id
    }
}
export const setLikes=(likeData,id)=>{
    return{
        type:actionTypes.LIKEDATA,
        likeData:likeData,
        id:id
    }
}
export const SortedData=(sortedData)=>{
  return{
    type:actionTypes.SORTEDDATA,
    sortedData:sortedData
  }
}
export const Comments=(commentData,id)=>{
  return{
      type:actionTypes.COMMENTDATA,
      commentData:commentData,
      id:id
  }
}
export const fetchBeers=()=>{
    return dispatch=>{
        var apiBaseUrl = `https://api.punkapi.com/v2/beers/random`;
      
          axios
            .get(apiBaseUrl)
            .then((response) => {
              dispatch(fetchedData(response.data,response.data[0].id))
                console.log(response.status);
            
                
              
            })
            .catch(err => {
          console.log(err);
                
            })
       
    }
}