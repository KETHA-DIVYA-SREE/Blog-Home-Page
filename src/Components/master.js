import { Row, Col, Container, Image } from 'react-bootstrap';
import './../App.css';

function Master() {
    return (
        <>
        <Container>
        <Row>
            <Col xs={12} md={8}>
                <figure className="position-relative" >
                    <Image className="img-fluid MasterImage1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU" alt="Master Image 1" rounded />
                    <figcaption>
                        <p>Title of vertical gallery</p>
                        <p className="Date">Travel/ August 21 2017</p>
                    </figcaption>
              </figure>
            </Col>
            <Col xs={12} md={3}>
                <Row>
                <figure className="position-relative" >
                    <Image className="img-fluid MasterImage2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU" alt="Master Image 1" rounded />
                    <figcaption className="figcaption2">
                        <p>The Sound cloud</p>
                        <p>You loved is doomed</p>
                        <p className="Date">Travel/ August 21 2017</p>
                    </figcaption>
                </figure>
                </Row>
                <Row>
                <figure className="position-relative" >
                    <Image className="img-fluid MasterImage2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU" alt="Master Image 1" rounded />
                    <figcaption className="figcaption2">
                        <p>The Sound cloud</p>
                        <p>You loved is doomed</p>
                        <p className="Date">Travel/ August 21 2017</p>
                    </figcaption>
                </figure>
                </Row>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default Master;