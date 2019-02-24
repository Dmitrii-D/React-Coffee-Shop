import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import './yourPleasure.css'
import Header from '../header';
import OurGoods from '../ourGoods';

const YourPleasure = () => {
    return (
        <>
            <div className="pleasure">
            <Header />
                    <Container>
                        <Row>
                            <Col className="col-lg-6"></Col>
                        </Row>
                        <h1 className="title-big">For your pleasure</h1>
                    </Container>
            </div>
            <OurGoods />
            
        </>
    )
}

export default YourPleasure;