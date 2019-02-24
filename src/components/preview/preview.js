import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import './preview.css';
import Header from '../header';
import {Link} from 'react-router-dom';


const Preview = () => {
    return (
        <div className="preview">
        <Header />
            <Container>
                <Row>
                    <Col lg={{size: 10, offset: 1}}>
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src="./img/BeansWhite.png" alt="Beans logo" />
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link to="/ourcoffee" className="preview__btn">More</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Preview;