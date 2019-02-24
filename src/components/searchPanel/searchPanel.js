import React, {Component} from 'react';

export default class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filter: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    
    updateData(items, term) {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        })

    }

    render() {
        return (
            <input 
                id="filter" 
                type="text" 
                placeholder="start typing here..." 
                className="shop__search-input"
                onChange = {this.onUpdateSearch}/>
        )
    }
}