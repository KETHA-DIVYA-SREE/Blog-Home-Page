import './../App.css';
import {Image, Row, Col} from 'react-bootstrap';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function LatestArticle(props) {
    return (
        <>
        <h2><u>Lates</u>t Articles</h2>
        <Row>
        <Col md={6}>
                <hr />
                {props.latestArticle.map(Article=>
                    <>
                    <Row>
                    <Col xs={12} md={6}>
                        <Image className="img-fluid Article_Image" src={Article.srcimg} alt="Article Image" rounded/>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="title">{Article.title}</p>
                        <p className="text">{Article.text}</p>
                        <p><b>{Article.subtext1}</b><span className="text">{Article.subtext2}</span></p>
                    </Col>
                    </Row>
                    <hr />
                    </>
                )}
                <p className="text"><ArrowDownwardIcon className="arrow" /> LOAD MORE</p>
                <br />
                <figure className="position-relative" >
                    <Image className="img-fluid MasterImage2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU" alt="Master Image 1" rounded />
                    <figcaption className="figcaption3">
                        <p>Title of verticle gallery</p>
                        <p className="Date">Travel/ August 21 2017</p>
                    </figcaption>
                </figure>
            </Col>
            <Col md={1}></Col>
            <Col xs={10} md={5}>
                <div className="position-relative adverdisementblock">
                    <p className="advertisementposition">Advertisement</p>
                </div>
                <h2><u>Top P</u>ost</h2>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU" alt="Article Image" className="PostImg" rounded />
                <div className="post">
                    <div>
                        <p><b>Catch waves with an adventure guid</b></p>
                        <p><b>TECH</b><span className="text"> / August 21 2017</span></p>
                    </div>
                    <div className="num">1</div>
                </div>
                <hr />
                {props.latestArticle.map(Article=>
                    <>
                    <Row>
                    <Col xs={12} md={6}>
                        <Image className="img-fluid Article_Image" src={Article.srcimg} alt="Article Image" rounded/>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="post">
                            <div>
                                <p><b>{Article.title}</b></p>
                                <p><b>{Article.subtext1}</b><span className="text">{Article.subtext2}</span></p>
                            </div>
                            <div className="num">{Article.num}</div>
                        </div>
                    </Col>
                    </Row>
                    <hr />
                    </>
                )}
            </Col>
            </Row>
        </>
    )
}