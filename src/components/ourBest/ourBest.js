import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './ourBest.css';
import ItemList from '../itemList';
import CoffeeService from '../../services/coffeeService';

export default class Best extends Component {
    
    service = new CoffeeService();

    render() {

        return (
            <div className="best">
                <Container>
                        <div className="title">Our best</div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <div className="best__wrapper">
                                <ItemList getData = {this.service.getBestItems} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}