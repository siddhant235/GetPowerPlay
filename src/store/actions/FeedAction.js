import * as actioTypes from '../actionTypes';
import axios from 'axios';
export const fetchedData=(data)=>{
    return{
        type:actioTypes.FETCH_FEEDS,
        data:data
    }
}
export const setLikes=(likeData,id)=>{
    return{
        type:actioTypes.LIKEDATA,
        likeData:likeData,
        id:id
    }
}
export const fetchBeers=()=>{
    return dispatch=>{
        var apiBaseUrl = `https://api.punkapi.com/v2/beers/random`;
      
          axios
            .get(apiBaseUrl)
            .then((response) => {
              dispatch(fetchedData(response.data))
                console.log(response.data);
            
                
              
            })
            .catch(err => {
          console.log(err);
                
            })
       
    }
}