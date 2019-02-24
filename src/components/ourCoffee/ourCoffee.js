import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import './ourCoffee.css'
import Header from '../header';
import Shop from '../shop';

const OurCoffee = () => {
    return (
        <>
            <div className="banner">
            <Header />
                    <Container>
                        <Row>
                            <Col className="col-lg-6"></Col>
                        </Row>
                        <h1 className="title-big">Our Coffee</h1>
                    </Container>
            </div>
            <Shop />
        </>
    )
}

export default OurCoffee;