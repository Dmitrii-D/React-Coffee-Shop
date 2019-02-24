import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col className="col-lg-6">
                    <ul className="header">
                        <li className="header__item">
                            <Link to='/'><img src={process.env.PUBLIC_URL + '/img/Logo.png'} alt="logo" /></Link>
                        </li>
                        <li className="header__item">
                            <Link to='/ourcoffee'>Our coffee</Link>
                        </li>
                        <li className="header__item">
                            <Link to='/yourpleasure'>For your pleasure</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;