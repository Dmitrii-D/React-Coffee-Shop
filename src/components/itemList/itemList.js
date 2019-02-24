import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

class ItemList extends Component {

    state = {
        itemList: null,
        name: '',
        loading: true,
        error: false
    }

    componentDidMount() {
        const {getData, name} = this.props;

        getData()
            .then (itemList => {
                this.setState({
                    itemList, name,
                    loading: false
                })
            })
            // .then (setTimeout(
            //      (itemList => {
            //     this.setState({
            //         loading: false
            //     })
            // }), 7000)) 
            .catch (() => {
                this.setState({
                    error: true
                })
            });
    }
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }



    renderCoffee (arr) {
        const {name, loading} = this.state;

        
        if(loading) {
            return <Spinner />
        }
        
        return arr.map((item, id) => {
            return (
                <div key = {id} className="shop__item"
                    onClick={() => this.onRenderCoffee(item, name)}>
                    <img src={item.url} alt={item.name}/>
                    <div className="shop__item-title">{item.name}</div>
                    <div className="shop__item-country">{item.country}</div>
                    <div className="shop__item-price">{item.price}</div>
                </div>
            )

        })
    }


    onRenderCoffee = (item, name) => {
        if(name !== 'ourGoods') {
            this.props.history.push(`/ourcoffee/${item.name}`, item);
        }
    } 

    updateData(items, term = "") {
        if(term.length === 0 || !term) {
            return items;
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })

    }
    
    filterPost(items, filter) {                           
        if(filter !== '') {
            const newArray = items.filter(item => item.country === filter);
            return newArray;
        } else {
            return items
        }
    }

    render() {
        const {itemList, error} = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;

        const {term,filter} = this.props;                     

        if(!itemList) {
            return null;
        }

        const resFilter = this.filterPost(this.updateData(itemList, term), filter);   
        const coffee = this.renderCoffee(resFilter);        

        return (
            <>
                {errorMessage}
                {coffee}
            </>
        )

    }

}

export default withRouter(ItemList);