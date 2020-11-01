import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import './Dashboard.css'
const Dashboard = (props) => {
    const [details, setdetails] = React.useState(false);
    const [name, setname] = React.useState('');
    const [desc, setdesc] = React.useState('');
    const [gridcolor, setgridColor] = React.useState("brown")
    const [listcolor, setlistColor] = React.useState("")
    const [grid, setgrid] = React.useState(true);
    const [list, setlist] = React.useState(false);
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

    }
    const listView = () => {
        setlist(true);
        setgridColor('');
        setlistColor('brown');
        setgrid(false);
    }

    return (
        <>
            <div className="icon">
                <i onClick={gridView} style={{ color: gridcolor }} class="fa fa-th" aria-hidden="true"></i>
                <i onClick={listView} style={{ color: listcolor }} class="fa fa-list" aria-hidden="true"></i>
            </div>
            {props.beers.map((item) => {
                return (<>
                    { grid && (<div className="Grid_View">
                        <p onClick={() => showdetails(true, item.id)}>
                            <Card bsPrefix="Grid_View" bg="light" style={{ width: '18rem', backgroundColor: '#fff', margin: '10px auto', justifyContent: 'center' }}>
                                <Card.Img variant="top" style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', margin: '10px auto' }} src={item.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {/* {item.description} */}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </p>
                    </div>)}
                    {list && (
                        <div className="list_view">
                            <p>
                                <Card bsPrefix="List_View" bg="light" style={{ width: '100rem', backgroundColor: '#fff', margin: '10px auto', justifyContent: 'center' }}>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Img variant="top" style={{ width: '150px', height: '150px', margin: '10px' }} src={item.image_url} />
                                    <Card.Body>

                                        <Card.Text>
                                            {/* {item.description} */}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </p>
                        </div>
                    )}
                </>)
            })}

            {details ?
                <Modal show={details} onHide={() => setdetails(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
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
        comments: state.feed.comments
    }
}

export default connect(mapStateToProps, null)(Dashboard);