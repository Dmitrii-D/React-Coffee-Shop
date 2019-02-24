import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './shop.css';
import ItemList from '../itemList';
import CoffeeService from '../../services/coffeeService';
import SearchPanel from '../searchPanel';


export default class Shop extends Component {

    service = new CoffeeService();

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filter: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }


    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(name) {
        this.setState({
            filter: name
        })
    }



    render() {

        return (
            <div className="shop">
                <Container>
                    <Row>
                        <Col className="col-lg-4 offset-2">
                            <img className="shop__girl" src= {process.env.PUBLIC_URL + '/img/coffee_girl.jpg'} alt="girl"/>
                        </Col>
                        <Col className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={process.env.PUBLIC_URL + '/img/Beans.png'} alt="Beans logo"/>
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/><br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                so questions. <br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                is song that held help face.
                            </div>
                        </Col>
                    </Row>
                        <div className="line"></div>
                    <Row>
                        <Col className="col-lg-4 offset-2">
                            <form action="#" className="shop__search">
                                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                                <SearchPanel 
                                    onUpdateSearch = {this.onUpdateSearch}
                                />
                            </form>
                        </Col>
                        <Col className="col-lg-4">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div className="shop__filter-group">
                                    <button 
                                        className="shop__filter-btn"
                                        onClick = {() => this.onFilterSelect('Brazil')}>Brazil</button>
                                    <button 
                                        className="shop__filter-btn"
                                        onClick = {() => this.onFilterSelect('Kenya')}>Kenya</button>
                                    <button 
                                        className="shop__filter-btn"
                                        onClick = {() => this.onFilterSelect('Columbia')}>Columbia</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="col-lg-10 offset-lg-1">
                            <div className="shop__wrapper">
                                <ItemList 
                                    getData = {this.service.getShop} 
                                    term = {this.state.term}
                                    filter = {this.state.filter}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
