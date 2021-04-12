import './../App.css';
import {Image, Row, Col} from 'react-bootstrap';

function Latest(props){
    return (
        <>
        <h2><u>The L</u>atest</h2>
        <div className="LatestBlog">
        <Row>
        {props.latestBlogList.map(BlogItem=>
            <>
            <Col xs={12} md={4}>
                <Image className="img-fluid BlogImg" src={BlogItem.srcimg} alt="Blog Image" rounded />
                <p className="title">{BlogItem.title}</p>
                <p className="text">{BlogItem.text}</p>
                <p><b>{BlogItem.footer_head}</b><span className="text">{BlogItem.time}</span></p>
                </Col>
                </>
        )}
        </Row>
        </div>
        <hr />
        </>
    )
}

export default Latest;