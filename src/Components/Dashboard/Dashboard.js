import React from 'react'
import Card from '../../UI/Card/Card'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import './Dashboard.css'
import * as  FeedAction from '../../store/actions/FeedAction'
import Search from '../../UI/Search/Search'
const Dashboard = (props) => {
    const [details, setdetails] = React.useState(false);
    const [name, setname] = React.useState('');
    const [desc, setdesc] = React.useState('');
    const [sortedBeers, setSortedBeers] = React.useState(null);
    const [firstbrew, setfirstbrew] = React.useState('');
    const [gridcolor, setgridColor] = React.useState("brown")
    const [listcolor, setlistColor] = React.useState("")
    const [grid, setgrid] = React.useState(true);
    const [list, setlist] = React.useState(false);
    const [Beer,setBeer]=React.useState([]);
    React.useEffect(() => {
        const a3 = props.like.map(t1 => ({...t1, ...props.beers.find(t2 => t2.id === t1.id)}))
        const a4=a3.map(t1 => ({...t1, ...props.beers.find(t2 => t2.id!== t1.id)}))
       
        setBeer(a3);
        const compare = (a, b) => {
          
            const countA = a.count;
            const countB = b.count;

            let comparison = 0;
            if (countA <countB) {
                comparison = 1;
            } else if (countA > countB) {
                comparison = -1;
            }
            return comparison;
        }
        const a5=a3?.sort(compare);
        // const a6=a5.concat(a4);
        props.onSortedData(a5);


    }, [props.like])
  
    const gridView = () => {
        setgrid(true);
        setlist(false);
        setgridColor('brown');
        setlistColor('');
            
    }
    const showdetails = (val, id) => {
        setdetails(val);
        const filterData = props.beers.filter(post => post.id === id)
        console.log(filterData[0].name)
        setname(filterData[0].name)
        setdesc(filterData[0].description)
        setfirstbrew(filterData[0].first_brewed)

    }
    const listView = () => {
        setlist(true);
        setgridColor('');
        setlistColor('brown');
        setgrid(false);
    }


    return (
        <>
            <Search />
{  console.log(Beer)}
            <div className="icon">
            
                <i onClick={gridView} style={{ color: gridcolor }} class="fa fa-th" aria-hidden="true"></i>
                <i onClick={listView} style={{ color: listcolor }} class="fa fa-list" aria-hidden="true"></i>
            </div>

            {props.sortedData?.map((item) => {
                const filterlike = props.like?.filter(post => post.id === item.id)
                const Filtered = sortedBeers?.filter(post => post.id === item.id)
                console.log(props.sortedData)
                return (<>
                    { grid && (
                        <div className="Grid_View" onClick={() => showdetails(true, item.id)}>

                            <Card name={item.name} image={item.image_url} like={filterlike[0]?.count} firstbrew={firstbrew} />

                        </div>
                    )}
                    {list && (
                        <div className="list_view">
                            <p>
                                <Card name={item.name} image={item.image_url} like={filterlike[0]?.count} />
                            </p>
                        </div>
                    )}
                </>)
            })}

            {details ?
                <Modal show={details} onHide={() => setdetails(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                      &nbsp;  &nbsp; &nbsp; {firstbrew}
                    </Modal.Header>
                    <Modal.Body>{desc}</Modal.Body>
                    <Modal.Footer>


                    </Modal.Footer>
                </Modal> : null}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        beers: state.feed.beers,
        like: state.feed.likes,
        count: state.feed.counts,
        comments: state.feed.comments,
        sortedData:state.feed.sortedData
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSortedData:(sortedData)=>dispatch(FeedAction.SortedData(sortedData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);