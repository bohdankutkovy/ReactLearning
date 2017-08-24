import React, {Component} from 'react';

export default class SearchBar extends Component {

    onInputChange (term) {
        this.props.onTermChangeSearch(term);
    }

    render(){
        return(
            <input
                type="text"
                onChange={event => {this.onInputChange(event.target.value)} }
            />
        );
    }

}