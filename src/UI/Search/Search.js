import React from 'react';
import './Search.css';
import Card from '../Card/Card'
import {connect} from 'react-redux'
const Search=(props)=>{
   const[beername,setbeername]=React.useState('');
const searchbeer=(event)=>{
    setbeername(event.target.value)
    
   

}

    return (
        <React.Fragment>
          <div className="Search">
            <input
              type="text"
              value={beername}
              placeholder="Search product..."
              onChange={(e)=>setbeername(e.target.value)}
            //   onClick={this.searchbarNull}
            />
  
            <div className="icon">
              <a href="/search">
                <i onClick={searchbeer} className="fas fa-search"></i>
              </a>
            </div>
            {/* {this.state.dropdown ? (
              <div className="search-box co">{searcheditem}</div>
            ) : null} */}
          </div>
{
    
      beername?props.beers?.filter((beer)=>{
           if( beer.name.toLowerCase().includes(beername.toLowerCase()))
           return beer;
        }).map((beer)=>{
            console.log(beer.name)
            const filterlike=props.like?.filter(post=>post.id===beer.id)
            return(
                <>
               <Card name={beer.name} desc={beer.desc} like={filterlike[0]?.count} image={beer.image_url}/>
                </>
            )
        }):null
    
}

        </React.Fragment>
      );
}
const mapStateToProps=(state)=>{
    return{
        beers:state.feed.beers,
        like:state.feed.likes
        
    }
}
export default connect(mapStateToProps,null)(Search);