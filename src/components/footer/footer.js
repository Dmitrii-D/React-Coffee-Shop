import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import './footer.css';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to='/'><img src={process.env.PUBLIC_URL + '/img/LogoBlack.png'} alt="logo" /></Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/ourcoffee'>Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/yourpleasure'>For your pleasure</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img className="beanslogo" src={process.env.PUBLIC_URL + '/img/Beans.png'} alt="Beans"/>
                    </Col>
                </Row>
            </Container>
        </footer>        
    )
}

export default Footer;