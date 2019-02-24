import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import './itemDetails.css'


class ItemDetails extends Component{
    render() {
        
        const arr = this.props.location.state;
        return (
            <>
                <div className="shop-item">
                <div className="banner">
                    <Header />
                    <Container>
                        <Row>
                            <Col className="col-lg-6"></Col>
                        </Row>
                        <h1 className="title-big">{arr.name}</h1>
                    </Container>
                </div>
                    <div className='item-class'>
                        <Container>
                            <Row>
                                <Col className="col-lg-5 offset-1">
                                    <img className="shop__girl" src={arr.url} alt="coffee_item"/>
                                </Col>
                                <Col className="col-lg-4">
                                    <div className="title">About it</div>
                                    <img className="beanslogo" src= {process.env.PUBLIC_URL + '/img/Beans.png'} alt="Beans logo"/>
                                    <div className="shop__point">
                                        <span>Country:</span>
                                        {arr.country}
                                    </div>
                                    <div className="shop__point">
                                        <span>Description:</span>
                                        {arr.description}
                                    </div>
                                    <div className="shop__point">
                                        <span>Price:</span>
                                        <span className="shop__point-price">{arr.price}</span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        )
    }
}

export default ItemDetails;